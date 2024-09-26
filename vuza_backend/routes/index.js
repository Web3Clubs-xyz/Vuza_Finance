var express = require("express");
const pool = require("../configs/db");
var router = express.Router();
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authenticateToken = require("../middlewares/authJWT");
const graphqlRequest = require("graphql-request");
const { GraphQLClient, gql } = graphqlRequest;

const endpoint = "http://rafiki.vuza.finance:3001/graphql"; // Replace with your GraphQL endpoint
const client = new GraphQLClient(endpoint);
const asset_id = "2bc7fccc-f019-4da8-b190-f11783eff0fb"; //USD

const multer = require("multer");
const upload = multer({ dest: "uploads/" }); // Configure your storage
const { add, format } = require("date-fns");
const axios = require("axios");

//Settlement
const IntaSend = require("intasend-node");

let intasend = new IntaSend(
  "ISPubKey_live_1e482668-edf2-47ff-b524-928cdb417613",
  "ISSecretKey_live_c64ad76a-5eb8-4dac-9b14-11386a90d4cb",
  false // Test ? Set true for test environment
);

// RAFIKI MUTATIONS
const CreateWalletMutation = gql`
  mutation CreateWalletAddress($input: CreateWalletAddressInput!) {
    createWalletAddress(input: $input) {
      walletAddress {
        id
        publicName
        url
      }
    }
  }
`;

// Create Receiver for the amount
const CreateReceiverMutation = gql`
  mutation CreateReceiver($input: CreateReceiverInput!) {
    createReceiver(input: $input) {
      receiver {
        completed
        createdAt
        expiresAt
        metadata
        id
        incomingAmount {
          assetCode
          assetScale
          value
        }
        walletAddressUrl
        receivedAmount {
          assetCode
          assetScale
          value
        }
        updatedAt
      }
    }
  }
`;

// Create Quote
const CreateQuoteMutation = gql`
  mutation CreateQuote($input: CreateQuoteInput!) {
    createQuote(input: $input) {
      quote {
        createdAt
        expiresAt
        id
        walletAddressId
        receiveAmount {
          assetCode
          assetScale
          value
        }
        receiver
        debitAmount {
          assetCode
          assetScale
          value
        }
        estimatedExchangeRate
      }
    }
  }
`;

// Create Outgoing Payment
const CreateOutgoingPaymentMutation = gql`
  mutation CreateOutgoingPayment($input: CreateOutgoingPaymentInput!) {
    createOutgoingPayment(input: $input) {
      payment {
        createdAt
        error
        metadata
        id
        walletAddressId
        receiveAmount {
          assetCode
          assetScale
          value
        }
        receiver
        debitAmount {
          assetCode
          assetScale
          value
        }
        sentAmount {
          assetCode
          assetScale
          value
        }
        state
        stateAttempts
      }
    }
  }
`;

// Deposit Outgoing Payment Liquidity
const DepositOutgoingPaymentLiquidityMutation = gql`
  mutation DepositOutgoingPaymentLiquidity(
    $input: DepositOutgoingPaymentLiquidityInput!
  ) {
    depositOutgoingPaymentLiquidity(input: $input) {
      success
    }
  }
`;

// Withdraw Incoming Payment Liquidity
const CreateIncomingPaymentWithdrawalMutation = gql`
  mutation CreateIncomingPaymentWithdrawal(
    $input: CreateIncomingPaymentWithdrawalInput!
  ) {
    createIncomingPaymentWithdrawal(input: $input) {
      success
    }
  }
`;

function generateCreatedAt() {
  return new Date(Date.now());
}

function formatDataForInsert(data) {
  console.log(data);
  if (typeof data !== "object" || Array.isArray(data)) {
    return "Input data should be a single JSON object";
  }

  data.guid = uuidv4(); // Generate UUID
  data.created_at = generateCreatedAt();
  data.updated_at = generateCreatedAt();

  const keys = [];
  const values = [];

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const value = data[key];
      keys.push(key);
      values.push(value);
    }
  }

  return { keys, values };
}

function formatDataForUpdate(data) {
  console.log(data);
  if (typeof data !== "object" || Array.isArray(data)) {
    return "Input data should be a single JSON object";
  }

  const keys = [];
  const values = [];

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const value = data[key];
      keys.push(`${key} = $${keys.length + 1}`);
      values.push(value);
    }
  }

  return { keys, values };
}

const formatFormDataForUpdate = (data) => {
  const keys = Object.keys(data).filter((key) => key !== "guid"); // Exclude the primary key or identifier field
  const values = keys.map((key) => data[key]);

  // Return keys as `key = $1, key2 = $2` format and values for query parameters
  return {
    keys: keys.map((key, index) => `${key} = $${index + 1}`),
    values: values,
  };
};

const generateReference = (prefix, length = 8) => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let reference = prefix;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    reference += characters[randomIndex];
  }

  return reference;
};

const convertToBigInt = (amount, scale) => {
  const integerRepresentation = Math.round(amount * Math.pow(10, scale));
  return BigInt(integerRepresentation);
};

/*  Auth funcitonality. */
router.post("/auth/login/", async function (req, res, next) {
  const { email, password } = req.body;

  try {
    const result = await pool.query(
      "SELECT u.guid,u.first_name,u.last_name,u.email,u.password,u.is_active,u.is_first_time_login,o.is_approved as organization_is_approved,o.id as organization_id,o.guid as organization_guid, o.name as organization_name,ot.id as organization_type_id,ot.name as organization_type_name,r.id as role_id, r.name as role_name,os.id as settings_id,os.payment_pointer,os.wallet_balance FROM users u inner join roles r On r.id =u.role_id inner join organizations o  On o.id=u.organization_id left join organization_settings os On os.organization_id=o.id inner join organization_types ot On ot.id=o.organization_type_id  WHERE u.email = $1",
      [email]
    );

    console.log(result.rows)
    if (result.rows.length === 0) {
      console.log("user not found");
      return res.status(400).json({
        status: 400,
        message: "Invalid email/password",
        data: [],
      });
    }

    const user = result.rows[0];
    console.log(user.is_active)

    if (user.is_active) {
      const isValidPassword = await bcrypt.compare(password, user.password);

      if (!isValidPassword) {
        console.log("invalid password");
        return res.status(400).json({
          status: 400,
          message: "Invalid email/password",
          data: [],
        });
      }

      // Generate JWT token
      // const user = {
      //   id: 'user_id',
      //   firstName: 'First',
      //   lastName: 'Last',
      //   email: 'user@example.com',
      //   // Add other user details as needed
      // };
      console.log(user);
      const token = jwt.sign(
        {
          guid: user.guid,
          firstName: user.first_name,
          lastName: user.last_name,
          email: user.email,
          // Add other details as needed
        },
        "fkilosdas", // Secret key
        { expiresIn: "1h" } // Token expiration
      );
      console.log(jwt.decode(token));

      res.status(200).json({
        status: 200,
        message: "Success! Preparing your dashboard",
        data: {
          user: {
            guid: user.guid,
            first_name: user.first_name,
            last_name: user.last_name,
            organization_id: user.organization_id,
            organization_guid: user.organization_guid,
            organization_name: user.organization_name,
            organization_approved: user.organization_is_approved,
            organization_type_name: user.organization_type_name,
            organization_type_id: user.organization_type_id,
            is_first_time_login: user.is_first_time_login,
            payment_pointer: user.payment_pointer,
            wallet_balance: user.wallet_balance,
          },
          access: token,
        },
      });
    } else {
      console.log("org and user either not active");
      return res.status(400).json({
        status: 400,
        message: "Invalid email/password",
        data: [],
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "An error occurred",
      data: `${error}`,
    });
  }
});

/*  User funcitonality. */
router.post("/users/create/", async function (req, res, next) {
  req.body.username = `${req.body.first_name} ${req.body.last_name}`;
  req.body.password = await bcrypt.hash(req.body.password, 10);
  req.body.is_superuser = false;
  req.body.is_staff = false;
  req.body.date_joined = generateCreatedAt();
  const { keys, values } = formatDataForInsert(req.body);

  try {
    const placeholders = values.map((_, index) => `$${index + 1}`).join(", ");
    const query = `INSERT INTO users (${keys.join(
      ", "
    )}) VALUES (${placeholders})`;

    await pool.query(query, values);

    res.status(200).json({
      status: 200,
      message: "User created successfully",
      data: [],
    });
  } catch (error) {
    // next(error);
    res.status(400).json({
      status: 400,
      message: "User not created",
      data: `${error}`,
    });
  }
});

router.patch(
  "/users/update/:guid/",
  authenticateToken,
  async function (req, res, next) {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const { keys, values } = formatDataForUpdate(req.body);

    if (typeof keys === "string") {
      // Handle error from formatDataForUpdate function
      return res.status(400).json({
        status: 400,
        message: keys,
        data: [],
      });
    }

    try {
      // Prepare the SET clause
      const setClause = keys.join(", ");

      // Construct the query
      const query = `UPDATE users SET ${setClause} WHERE guid = $${
        values.length + 1
      }`;

      // Add the GUID to the end of values array
      const result = await pool.query(query, [...values, req.params.guid]);

      console.log(result);

      res.status(200).json({
        status: 200,
        message: "User updated successfully",
        data: [],
      });
    } catch (error) {
      res.status(400).json({
        status: 400,
        message: "User not updated",
        data: `${error}`,
      });
    }
  }
);

/*  Organization funcitonality. */
router.get("/organizations/all", async function (req, res, next) {
  const result = await pool.query(
    "SELECT o.*, os.payment_pointer FROM organizations o left join organization_settings os On os.organization_id=o.id where o.organization_type_id != 1 order by o.created_at DESC"
  );
  res.json({
    status: 200,
    message: "Success",
    data: result.rows,
  });
});

router.get(
  "/organizations/by_guid/:guid",
  authenticateToken,
  async function (req, res, next) {
    const result = await pool.query(
      `SELECT * FROM organizations where guid=$1`,
      [req.params.guid]
    );
    res.json({
      status: 200,
      message: "Success",
      data: result.rows,
    });
  }
);

router.post("/organizations/create/", async function (req, res, next) {
  req.body.name = req.body.name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("-");
  req.body.organization_type_id = 2;
  req.body.application_date = generateCreatedAt();
  req.body.is_approved = false;
  const { keys, values } = formatDataForInsert(req.body);

  // Create parameterized placeholders for values ($1, $2, etc.)
  const placeholders = values.map((_, index) => `$${index + 1}`).join(", ");

  const query = `INSERT INTO organizations (${keys.join(
    ", "
  )}) VALUES (${placeholders}) RETURNING id`;
  try {
    var results = await pool.query(query, values);
    const userInsertQuery = `
      INSERT INTO users (
        first_name, last_name, email, phone_number, password, is_superuser, is_staff, 
        is_active, is_first_time_login, organization_id, role_id, created_by, username,
        date_joined, created_at, updated_at,guid
      ) VALUES (
        $1, $2, $3, $4, $5, 
        false, false, true, true, $6, $7, 'system', $8,
        NOW(), NOW(), NOW(),$9
      );
    `;

    let newpassword = await bcrypt.hash("init123", 10);

    const { firstName, lastName } = separateName(req.body.contact_person_names);

    var r = await pool.query(userInsertQuery, [
      firstName,
      lastName,
      req.body.contact_person_email_address,
      req.body.contact_person_phone_number,
      newpassword,
      results.rows[0].id, // organization_id
      1, // role_id
      `${firstName}${lastName}`,
      uuidv4(),
    ]);
    console.log(r);
    res.status(200).json({
      status: 200,
      message: "Success! Your Account has been created",
      data: [],
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: "Your request has not been sent, Kindly try again",
      data: `${error}`,
    });
  }
});

const separateName = (fullName) => {
  const [firstName, ...lastName] = fullName.split(" ");
  return {
    firstName,
    lastName: lastName.join(" "),
  };
};

router.patch(
  "/organizations/update/:guid/",
  authenticateToken,
  upload.none(),
  async function (req, res, next) {
    try {
      const result = await pool.query(
        "SELECT * FROM organizations WHERE guid = $1",
        [req.params.guid]
      );
      if (result.rows.length === 0) {
        return res.status(404).json({
          status: 404,
          message: "Organization not found",
          data: [],
        });
      }

      req.body.approved_by = `${req.user.email}`;

      const { keys, values } = formatFormDataForUpdate(req.body);

      if (typeof keys === "string") {
        // Handle error from formatDataForUpdate function
        return res.status(400).json({
          status: 400,
          message: keys,
          data: [],
        });
      }

      try {
        // Prepare the SET clause
        const setClause = keys.join(", ");

        // Prepare the placeholders
        // const placeholders = values.map((_, index) => `$${index + 1}`).join(", ");

        // Construct the query
        const query = `UPDATE organizations SET ${setClause} WHERE guid = $${
          values.length + 1
        }`;

        // Add the GUID to the end of values array
        const resultupdate = await pool.query(query, [
          ...values,
          req.params.guid,
        ]);

        if (req.body.is_approved == "true") {
          let payment_pointer = `$rafiki.vuza.finance/${result.rows[0].name}`;

          const query2 = `INSERT INTO organization_settings (guid,organization_id, payment_pointer, ilp_wallet_id,wallet_balance,created_at,created_by,updated_at,updated_by)
            VALUES ($1, $2, $3,$4,$5,NOW(),'superadmin',NOW(),'superadmin')
            ON CONFLICT (organization_id) 
            DO UPDATE SET
              guid = EXCLUDED.guid,
              payment_pointer = EXCLUDED.payment_pointer,
              wallet_balance = EXCLUDED.wallet_balance,
              updated_at = NOW(), 
              updated_by = EXCLUDED.updated_by,
              ilp_wallet_id = EXCLUDED.ilp_wallet_id;
            `;

          // Define the input data
          const inputData = {
            input: {
              // Replace with actual values for your CreateWalletAddressInput
              url: `https://rafiki.vuza.finance/${result.rows[0].name}`,
              publicName: result.rows[0].name,
              assetId: asset_id,
            },
          };

          const data = await client.request(CreateWalletMutation, inputData);
          console.log(data);
          // Add the GUID to the end of values array
          const resultupdate = await pool.query(query2, [
            uuidv4(),
            result.rows[0].id,
            payment_pointer,
            data.createWalletAddress.walletAddress.id,
            0,
          ]);

          console.log(resultupdate);

          // const query = `
          //   INSERT INTO users (
          //     first_name, last_name, email, phone_number, password, is_superuser, is_staff,
          //     is_active, is_first_time_login, organization_id, role_id, created_by, username,
          //     date_joined, created_at, updated_at,guid
          //   ) VALUES (
          //     $1, $2, $3, $4, $5,
          //     false, false, true, true, $6, $7, 'system', $8,
          //     NOW(), NOW(), NOW(),$9
          //   );
          // `;

          // let newpassword = await bcrypt.hash("init123", 10);

          // const { firstName, lastName } = separateName(
          //   req.body.contact_person_names
          // );

          // var r = await pool.query(query, [
          //   firstName,
          //   lastName,
          //   req.body.contact_person_email_address,
          //   req.body.contact_person_phone_number,
          //   newpassword,
          //   result.rows[0].id, // organization_id
          //   1, // role_id
          //   `${firstName}${lastName}`,
          //   uuidv4(),
          // ]);
        }

        res.status(200).json({
          status: 200,
          message: "Organization updated successfully",
          data: [],
        });
      } catch (error) {
        res.status(400).json({
          status: 400,
          message: "Organization not updated",
          data: `${error}`,
        });
      }
    } catch (error) {
      res.status(400).json({
        status: 400,
        message: "Organization not updated",
        data: `${error}`,
      });
    }
  }
);

router.get(
  "/organization_settings/by_org/:guid",
  authenticateToken,
  async function (req, res, next) {
    const result = await pool.query(
      `SELECT * FROM organization_settings where organization_id=${req.params.guid}`
    );
    res.json({
      status: 200,
      message: "Success",
      data: result.rows[0],
    });
  }
);

router.get(
  "/organization/analytics/by_org/:guid",
  authenticateToken,
  async function (req, res, next) {
    const borrowed = await pool.query(
      `SELECT COALESCE(SUM(requested_amount), 0) as total_borrowed FROM loans where borrower_id=${req.params.guid} and status!='submitted'`
    );
    const repaid = await pool.query(
      `SELECT COALESCE(SUM(lr.repaid_amount), 0) as total_repaid FROM loan_repayments lr inner join loans l on l.id=lr.loan_id where l.borrower_id=${req.params.guid}`
    );

    // console.log(borrowed);
    console.log("here")
    console.log(repaid);

    res.json({
      status: 200,
      message: "Success",
      data: {
        total_borrowed: borrowed.rows[0].total_borrowed,
        total_repaid: repaid.rows[0].total_repaid,
      },
    });
  }
);

router.get(
  "/admin/analytics/",
  authenticateToken,
  async function (req, res, next) {
    const dispatch_pool = await pool.query(
      `SELECT COALESCE(SUM(wallet_balance), 0) as wallet_balance FROM organization_settings where organization_id=1`
    );

    const total_borrowed = await pool.query(
      `SELECT COALESCE(SUM(requested_amount), 0) as requested_amount FROM loans where status!='submitted'`
    );

    const repaid = await pool.query(
      `SELECT COALESCE(SUM(repaid_amount), 0) as total_repaid FROM loan_repayments`
    );

    console.log(repaid)

    res.json({
      status: 200,
      message: "Success",
      data: {
        total_dispatch_pool: dispatch_pool.rows[0].wallet_balance,
        total_borrowed: total_borrowed.rows[0].requested_amount,
        total_repaid:repaid.rows[0].total_repaid
      },
    });
  }
);

/* GET organization type listing. */
router.get("/organization_type/all/", async function (req, res, next) {
  const result = await pool.query(
    "SELECT * FROM organization_types where id != 1"
  );
  res.json({
    status: 200,
    message: "Success",
    data: result.rows,
  });
});

router.post(
  "/organization_type/create/",
  authenticateToken,
  async function (req, res, next) {
    const { keys, values } = formatDataForInsert(req.body);

    // Create parameterized placeholders for values ($1, $2, etc.)
    const placeholders = values.map((_, index) => `$${index + 1}`).join(", ");

    const query = `INSERT INTO organization_types (${keys.join(
      ", "
    )}) VALUES (${placeholders})`;

    try {
      await pool.query(query, values);

      res.json({
        status: 200,
        message: "Success",
        data: [],
      });
    } catch (error) {
      res.json({
        status: 400,
        message: "failed",
        data: `${error}`,
      });
    }
  }
);

/* GET Sacco funcitonality. */
router.get("/sacco/all", async function (req, res, next) {
  const result = await pool.query(
    "SELECT * FROM organizations where organization_type_id=2"
  );
  res.json({
    status: 200,
    message: "Success",
    data: result.rows,
  });
});

/*  loan functionality. */
router.get("/loans/all/", authenticateToken, async function (req, res, next) {
  const result = await pool.query(
    "SELECT l.*,o.name as borrower_name FROM loans l inner join organizations o On o.id=l.borrower_id"
  );
  res.json({
    status: 200,
    message: "Success",
    data: result.rows,
  });
});

router.get("/loans/", authenticateToken, async function (req, res, next) {
  if (req.query.status == "approved") {
    var result = await pool.query(
      `SELECT l.*,o.name as borrower_name,lt.loan_interest FROM loans l inner join organizations o On o.id=l.borrower_id left join loan_terms lt On lt.id=l.loan_terms_id where l.status!='rejected' and l.status!='submitted' `
    );
  } else {
    console.log(req.query.status);
    var result = await pool.query(
      `SELECT l.*,o.name as borrower_name,lt.loan_interest FROM loans l inner join organizations o On o.id=l.borrower_id left join loan_terms lt On lt.id=l.loan_terms_id where l.status='${req.query.status}'`
    );
  }

  res.json({
    status: 200,
    message: "Success",
    data: result.rows,
  });
});

router.get(
  "/loans/by_org/:guid",
  authenticateToken,
  async function (req, res, next) {
    console.log(req.query.status);
    if (req.query.status == "approved") {
      var result = await pool.query(
        `SELECT l.*,o.name as borrower_name,lt.loan_interest FROM loans l inner join organizations o On o.id=l.borrower_id left join loan_terms lt On lt.id=l.loan_terms_id where o.id=${req.params.guid} and l.status='${req.query.status}' or  l.status='Partial' or l.status='Repayed'`
      );
      console.log(result.rows);
    } else {
      var result = await pool.query(
        `SELECT l.*,o.name as borrower_name,lt.loan_interest FROM loans l inner join organizations o On o.id=l.borrower_id left join loan_terms lt On lt.id=l.loan_terms_id where o.id=${req.params.guid} and l.status='${req.query.status}'`
      );
    }

    res.json({
      status: 200,
      message: "Success",
      data: result.rows,
    });
  }
);

router.get("/loans/:guid", authenticateToken, async function (req, res, next) {
  const result = await pool.query(
    `SELECT * FROM loans where guid=${req.params.guid}`
  );
  res.json({
    status: 200,
    message: "Success",
    data: result.rows,
  });
});

router.get("/loan_terms", authenticateToken, async function (req, res, next) {
  const result = await pool.query(
    `SELECT * FROM loan_terms where deleted_at is null`
  );
  res.json({
    status: 200,
    message: "Success",
    data: result.rows[0],
  });
});

const convertToDatetimeStamp = (duration) => {
  const [value, unit] = duration.split(" ");

  let resultDate;
  switch (unit) {
    case "day":
    case "days":
      resultDate = add(new Date(), { days: parseInt(value) });
      break;
    case "hour":
    case "hours":
      resultDate = add(new Date(), { hours: parseInt(value) });
      break;
    case "minute":
    case "minutes":
      resultDate = add(new Date(), { minutes: parseInt(value) });
      break;
    case "second":
    case "seconds":
      resultDate = add(new Date(), { seconds: parseInt(value) });
      break;
    default:
      throw new Error("Unsupported duration unit");
  }

  return resultDate;
};

router.post(
  "/loans/create/",
  authenticateToken,
  async function (req, res, next) {
    console.log(req.body);
    const result = await pool.query(
      `SELECT * FROM loan_terms where id  = ${req.body.loan_terms_id}`
    );

    req.body.reference = generateReference("EL");
    req.body.request_date = generateCreatedAt();
    req.body.remaining_amount = 0;
    req.body.status = "submitted";
    req.body.repayment_amount =
      req.body.requested_amount +
      (req.body.requested_amount * result.rows[0].loan_interest) / 100;
    const datetimeStamp = convertToDatetimeStamp("365 days");
    req.body.repayment_due_date = format(datetimeStamp, "yyyy-MM-dd HH:mm:ss");
    console.log(req.body);

    const { keys, values } = formatDataForInsert(req.body);

    // Create parameterized placeholders for values ($1, $2, etc.)
    const placeholders = values.map((_, index) => `$${index + 1}`).join(", ");

    const query = `INSERT INTO loans (${keys.join(
      ", "
    )}) VALUES (${placeholders})`;

    console.log(query);
    try {
      await pool.query(query, values);

      res.json({
        status: 200,
        message: "Success",
        data: [],
      });
    } catch (error) {
      res.json({
        status: 400,
        message: "failed",
        data: `${error}`,
      });
    }
  }
);

router.patch(
  "/loans/update/:guid/",
  authenticateToken,
  async function (req, res, next) {
    try {
      const result = await pool.query("SELECT * FROM loans WHERE guid = $1", [
        req.params.guid,
      ]);
      if (result.rows.length === 0) {
        return res.status(404).json({
          status: 404,
          message: "Loan not found",
          data: [],
        });
      }
      const { keys, values } = formatDataForUpdate(req.body);

      if (typeof keys === "string") {
        // Handle error from formatDataForUpdate function
        return res.status(400).json({
          status: 400,
          message: keys,
          data: [],
        });
      }

      try {
        // Prepare the SET clause
        const setClause = keys.join(", ");

        // Prepare the placeholders
        // const placeholders = values.map((_, index) => `$${index + 1}`).join(", ");

        // Construct the query
        const query = `UPDATE loans SET ${setClause} WHERE guid = $${
          values.length + 1
        }`;

        // Add the GUID to the end of values array
        const result = await pool.query(query, [...values, req.params.guid]);

        res.status(200).json({
          status: 200,
          message: "Loan updated successfully",
          data: [],
        });
      } catch (error) {
        res.status(400).json({
          status: 400,
          message: "Loan not updated",
          data: `${error}`,
        });
      }
    } catch (error) {
      res.status(400).json({
        status: 400,
        message: "Organization not updated",
        data: `${error}`,
      });
    }
  }
);

/*  loan disbursment funcitonality. */

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

router.patch(
  "/loans/admin_approve/:guid/",
  authenticateToken,
  async function (req, res, next) {
    try {
      const loan = await pool.query("SELECT * FROM loans WHERE guid = $1", [
        req.params.guid,
      ]);
      if (loan.rows.length === 0) {
        return res.status(404).json({
          status: 404,
          message: "Loan not found",
          data: [],
        });
      }

      const sacco = await pool.query(
        "SELECT os.id,os.wallet_balance,os.ilp_wallet_id,os.payment_pointer FROM organization_settings os where organization_id = $1",
        [loan.rows[0].borrower_id]
      );
      console.log(sacco.rows[0]);

      const { keys, values } = formatDataForUpdate({
        status: "approved",
        approval_date: generateCreatedAt(),
      });

      if (typeof keys === "string") {
        // Handle error from formatDataForUpdate function
        return res.status(400).json({
          status: 400,
          message: keys,
          data: [],
        });
      }

      var loan_status = "approved";
      var approval_date = generateCreatedAt();
      try {
        // Prepare the SET clause
        // const setClause = keys.join(", ");

        //check if Eza wallet has an amount
        const eza_org = await pool.query(
          `SELECT os.id as settings_id,os.wallet_balance,os.ilp_wallet_id,os.payment_pointer FROM organizations o inner join organization_settings os On os.organization_id=o.id where o.name='Vuza-Finance' `
        );
        console.log(eza_org.rows[0]);
        console.log(sacco.rows[0]);
        if (eza_org.rows[0].wallet_balance > loan.rows[0].requested_amount) {
          // initiate rafiki receiver which is the sacco wallet address
          const receiverData = {
            input: {
              metadata: {
                description: "Asked Loans",
              },
              incomingAmount: {
                assetCode: "USD",
                assetScale: 2,
                value: loan.rows[0].requested_amount * 100,
              },
              walletAddressUrl: sacco.rows[0].payment_pointer.replace(
                /^./,
                "https://"
              ),
            },
          };

          const receiverbody = await client.request(
            CreateReceiverMutation,
            receiverData
          );
          if (receiverbody) {
            console.log("receiver body exists");
            console.log(receiverbody);
            var receiver_id = receiverbody.createReceiver.receiver.id;

            // create quote to the eza payer wallet
            const quoteData = {
              input: {
                walletAddressId: eza_org.rows[0].ilp_wallet_id,
                receiver: `${receiver_id}`,
              },
            };

            const quotebody = await client.request(
              CreateQuoteMutation,
              quoteData
            );
            console.log(quotebody)
            if (quotebody) {
              console.log("quote body exists");
              console.log(quotebody);
              var quoteId = quotebody.createQuote.quote.id;

              // create outgoing payment to the eza payer wallet
              const outgoingData = {
                input: {
                  walletAddressId: eza_org.rows[0].ilp_wallet_id,
                  quoteId: `${quoteId}`,
                },
              };

              const outgoingbody = await client.request(
                CreateOutgoingPaymentMutation,
                outgoingData
              );
              if (outgoingbody) {
                console.log("outgoing body exists");
                console.log(outgoingbody);
                var outgoingPaymentId =
                  outgoingbody.createOutgoingPayment.payment.id;
                var key1 = uuidv4();

                const depositoutgoingData = {
                  input: {
                    outgoingPaymentId: outgoingPaymentId,
                    idempotencyKey: `${key1}`,
                  },
                };

                const depositoutgoingbody = await client.request(
                  DepositOutgoingPaymentLiquidityMutation,
                  depositoutgoingData
                );
                if (depositoutgoingbody) {
                  console.log("Deposit outgoing success");
                  console.log(depositoutgoingbody);
                  // We should now remove the amount from the Eza wallet

                  if (
                    depositoutgoingbody.depositOutgoingPaymentLiquidity
                      .success == true
                  ) {
                    // deposit amount to sacco wallet
                    // const parts = receiver_id.split("/");
                    // console.log(receiver_id)

                    // var incoming_payment_id = parts[parts.length - 1];
                    // var key = uuidv4();

                    // const incominingWithdrawData = {
                    //   input: {
                    //     incomingPaymentId: `${incoming_payment_id}`,
                    //     idempotencyKey: `${key}`,
                    //     timeoutSeconds: 0,
                    //   },
                    // };

                    // console.log(incominingWithdrawData);
                    // // await delay(60000);

                    // const incomingWithdrawbody = await client.request(
                    //   CreateIncomingPaymentWithdrawalMutation,
                    //   incominingWithdrawData
                    // );
                    // console.log(incomingWithdrawbody)
                    // if (incomingWithdrawbody) {
                    //   console.log("incomingWithdrawbody body exists");
                    //   console.log(incomingWithdrawbody);
                    //   if (
                    //     incomingWithdrawbody.createIncomingPaymentWithdrawal
                    //       .success == true
                    //   ) {
                        //add sacco wallert
                        var new_balance =
                          parseFloat(sacco.rows[0].wallet_balance) +
                          parseFloat(
                            outgoingbody.createOutgoingPayment.payment
                              .receiveAmount.value
                          ) /
                            100;
                        await pool.query(
                          "update organization_settings set wallet_balance=$1 WHERE id = $2",
                          [new_balance, sacco.rows[0].id]
                        );

                        //minus eza wallet
                        var left_balance =
                          parseFloat(eza_org.rows[0].wallet_balance) -
                          parseFloat(
                            outgoingbody.createOutgoingPayment.payment
                              .debitAmount.value
                          ) /
                            100;
                        await pool.query(
                          "update organization_settings set wallet_balance=$1 WHERE id = $2",
                          [left_balance, eza_org.rows[0].settings_id]
                        );

                        // Construct the query
                        const query = `UPDATE loans SET status=$1,approval_date=$2 WHERE guid = $3`;

                        // Add the GUID to the end of values array
                        await pool.query(query, [
                          loan_status,
                          approval_date,
                          loan.rows[0].guid,
                        ]);
                      // } else {
                      //   console.log("bad error");
                      // }
                    // } else {
                    //   console.log("incoming bad error");
                    //   console.log(incomingWithdrawbody);
                    // }
                  } else {
                    console.log(" on success bad error");
                    console.log(depositoutgoingbody);
                  }
                } else {
                  console.log("deposit outgoing bad error");
                  console.log(depositoutgoingbody);
                }
              } else {
                console.log("outgoing bad error");
                console.log(outgoingbody);
              }
            } else {
              console.log("quotebody bad error");
              console.log(quotebody);
            }
          } else {
            console.log("receiverbody bad error");
            console.log(receiverbody);
          }

          res.status(200).json({
            status: 200,
            message: "Loan disbursed successfully",
            data: [],
          });
        } else {
          // initiate and wait DAO transfer and Liquidity provision from LP's
          console.log("Wallet has no enough amount");
          res.status(400).json({
            status: 400,
            message: "Loan not disbursed successfully",
            data: [],
          });
        }
      } catch (error) {
        res.status(400).json({
          status: 400,
          message: "Loan not updated",
          data: `${error}`,
        });
      }
    } catch (error) {
      res.status(400).json({
        status: 400,
        message: "Loan not updated",
        data: `${error}`,
      });
    }
  }
);

/*  wallet funcitonality. */
// router.patch(
//   "/wallet/withdraw/:guid/",
//   authenticateToken,
//   async function (req, res, next) {
//     try {
//       const result = await pool.query(
//         "SELECT * FROM organizations WHERE guid = $1",
//         [req.params.guid]
//       );
//       if (result.rows.length === 0) {
//         return res.status(404).json({
//           status: 404,
//           message: "Org not found",
//           data: [],
//         });
//       }

//       try {
//         if (result.rows[0].wallet_balance <= 0) {
//           // send money to the sacco's bank account from EZA liquidity pool

//           // then update system with the remaining values
//           var new_wallet_balance =
//             result.rows[0].wallet_balance - req.body.withdraw_amount;

//           const query = `UPDATE organization_settings SET wallet_balance=$1 WHERE guid = $2`;

//           // Add the GUID to the end of values array
//           const result = await pool.query(query, [
//             new_wallet_balance,
//             req.params.guid,
//           ]);

//           res.status(200).json({
//             status: 200,
//             message: "Withdrawal success",
//             data: [],
//           });
//         } else {
//           res.status(400).json({
//             status: 400,
//             message: "Withdrawal failure, not enough balance",
//             data: [],
//           });
//         }
//       } catch (error) {
//         res.status(400).json({
//           status: 400,
//           message: "Withdrawal not updated",
//           data: `${error}`,
//         });
//       }
//     } catch (error) {
//       res.status(400).json({
//         status: 400,
//         message: "Organization not updated",
//         data: `${error}`,
//       });
//     }
//   }
// );

// router.patch(
//   "/wallet/deposit/:guid/",
//   authenticateToken,
//   async function (req, res, next) {
//     try {
//       const result = await pool.query(
//         "SELECT * FROM organizations WHERE guid = $1",
//         [req.params.guid]
//       );
//       if (result.rows.length === 0) {
//         return res.status(404).json({
//           status: 404,
//           message: "Org not found",
//           data: [],
//         });
//       }

//       try {
//         if (result.rows[0].wallet_balance <= 0) {
//           // send money to the EZA deposit pool account from sacco bank account

//           // then update system with the remaining values
//           var new_wallet_balance =
//             result.rows[0].wallet_balance + req.body.deposit_amount;

//           const query = `UPDATE organization_settings SET wallet_balance=$1 WHERE guid = $2`;

//           // Add the GUID to the end of values array
//           const result = await pool.query(query, [
//             new_wallet_balance,
//             req.params.guid,
//           ]);

//           res.status(200).json({
//             status: 200,
//             message: "Deposit success",
//             data: [],
//           });
//         } else {
//           res.status(400).json({
//             status: 400,
//             message: "Deposit failure, ",
//             data: [],
//           });
//         }
//       } catch (error) {
//         res.status(400).json({
//           status: 400,
//           message: "Withdrawal not updated",
//           data: `${error}`,
//         });
//       }
//     } catch (error) {
//       res.status(400).json({
//         status: 400,
//         message: "Organization not updated",
//         data: `${error}`,
//       });
//     }
//   }
// );

/*  loan repayment funcitonality. */
const pendingRepays = new Map();

router.patch(
  "/loans/repayment/:guid/",
  authenticateToken,
  async function (req, res, next) {
    try {
      console.log(req.body);
      let borrower_name = req.body.borrower_name;
      let userPhone = req.body.phoneNumber;
      let amount = req.body.amount;
      const loan = await pool.query("SELECT * FROM loans WHERE id = $1", [
        req.params.guid,
      ]);
      if (loan.rows.length === 0) {
        return res.status(404).json({
          status: 404,
          message: "Loan not found",
          data: [],
        });
      }

      const borrower = await pool.query(
        "SELECT os.id, os.wallet_balance, os.ilp_wallet_id, os.payment_pointer FROM organization_settings os WHERE organization_id = $1",
        [loan.rows[0].borrower_id]
      );

      let loan_status;
      let loan_remaining_amount;

      if (loan.rows[0].status === "approved") {
        if (
          parseFloat(req.body.amount) <=
          parseFloat(loan.rows[0].repayment_amount)
        ) {
          loan_status =
            parseFloat(req.body.amount) ===
            parseFloat(loan.rows[0].repayment_amount)
              ? "Repayed"
              : "Partial";
          loan_remaining_amount =
            parseFloat(loan.rows[0].repayment_amount) -
            parseFloat(req.body.amount);
        } else {
          return res.status(400).json({
            status: 400,
            message: "You can't repay more than what is owed",
            data: [],
          });
        }
      } else {
        if (
          parseFloat(req.body.amount) <=
          parseFloat(loan.rows[0].remaining_amount)
        ) {
          loan_status =
            parseFloat(req.body.amount) ===
            parseFloat(loan.rows[0].remaining_amount)
              ? "Repayed"
              : "Partial";
          loan_remaining_amount =
            parseFloat(loan.rows[0].remaining_amount) -
            parseFloat(req.body.amount);
        } else {
          return res.status(400).json({
            status: 400,
            message: "You can't repay more than what is owed",
            data: [],
          });
        }
      }

      console.log(loan_status);
      console.log(loan_remaining_amount);

      // Initiate STK push
      // let collection = intasend.collection();
      // const stkResponse = await collection.mpesaStkPush({
      //   first_name: borrower_name,
      //   last_name: "",
      //   email: "mike@mailinator.com",
      //   host: "https://dc97-41-215-97-73.ngrok-free.app/api/v1/callback", // Update with your callback URL
      //   amount: amount * 130,
      //   phone_number: userPhone,
      //   api_ref: `loan repayment on ${new Date()} for ${
      //     loan.rows[0].reference
      //   }`,
      //   narrative: loan.rows[0].reference,
      // });

      // console.log("STK Push Response:", stkResponse);

      // // Create a promise to wait for the callback
      // const repayPromise = new Promise((resolve, reject) => {
      //   pendingRepays.set(loan.rows[0].reference, { resolve, reject });
      // });

      // // Wait for the promise to be resolved by the callback
      // const data = await repayPromise;
      const data = {};
      console.log("Wallet promise resolve", data);
      data.status = 200;
      if (data.status == 200) {
        // For simplicity, assuming STK push callback is successful and proceeds with ILP process
        // You should replace this with actual callback handling mechanism

        // Proceed with ILP process
        const eza_org = await pool.query(
          "SELECT os.id as settings_id, os.wallet_balance, os.ilp_wallet_id, os.payment_pointer FROM organizations o INNER JOIN organization_settings os ON os.organization_id = o.id WHERE o.name = 'Vuza-Finance'"
        );
        console.log(eza_org)
        console.log(borrower.rows[0].wallet_balance)

        if (borrower.rows[0].wallet_balance > req.body.amount) {
          const receiverData = {
            input: {
              metadata: {
                description: "repayment of Asked Loans",
              },
              incomingAmount: {
                assetCode: "USD",
                assetScale: 2,
                value: parseFloat(req.body.amount) * 100,
              },
              walletAddressUrl: eza_org.rows[0].payment_pointer.replace(
                /^./,
                "https://"
              ),
            },
          };

          const receiverbody = await client.request(
            CreateReceiverMutation,
            receiverData
          );
          if (!receiverbody) {
            throw new Error("Failed to create receiver");
          }

          console.log("Receiver body exists");
          console.log(receiverbody);
          const receiver_id = receiverbody.createReceiver.receiver.id;

          const quoteData = {
            input: {
              walletAddressId: borrower.rows[0].ilp_wallet_id,
              receiver: receiver_id,
            },
          };

          const quotebody = await client.request(
            CreateQuoteMutation,
            quoteData
          );
          if (!quotebody) {
            throw new Error("Failed to create quote");
          }

          console.log("Quote body exists");
          console.log(quotebody);
          const quoteId = quotebody.createQuote.quote.id;

          const outgoingData = {
            input: {
              walletAddressId: borrower.rows[0].ilp_wallet_id,
              quoteId: quoteId,
            },
          };

          const outgoingbody = await client.request(
            CreateOutgoingPaymentMutation,
            outgoingData
          );
          if (!outgoingbody) {
            throw new Error("Failed to create outgoing payment");
          }

          console.log("Outgoing body exists");
          console.log(outgoingbody);
          const outgoingPaymentId =
            outgoingbody.createOutgoingPayment.payment.id;
          const key1 = uuidv4();

          const depositoutgoingData = {
            input: {
              outgoingPaymentId: outgoingPaymentId,
              idempotencyKey: key1,
            },
          };

          const depositoutgoingbody = await client.request(
            DepositOutgoingPaymentLiquidityMutation,
            depositoutgoingData
          );
          if (
            !depositoutgoingbody ||
            depositoutgoingbody.depositOutgoingPaymentLiquidity.success !== true
          ) {
            throw new Error("Failed to deposit outgoing payment liquidity");
          }

          console.log("Deposit outgoing success");
          console.log(depositoutgoingbody);

          const parts = receiver_id.split("/");
          const incoming_payment_id = parts[parts.length - 1];
          const key = uuidv4();

          const incominingWithdrawData = {
            input: {
              incomingPaymentId: incoming_payment_id,
              idempotencyKey: key,
              timeoutSeconds: 0,
            },
          };

          console.log(incominingWithdrawData);

          await delay(60000);

          const incomingWithdrawbody = await client.request(
            CreateIncomingPaymentWithdrawalMutation,
            incominingWithdrawData
          );
          if (
            !incomingWithdrawbody ||
            incomingWithdrawbody.createIncomingPaymentWithdrawal.success !==
              true
          ) {
            throw new Error("Failed to withdraw incoming payment");
          }

          console.log("incomingWithdrawbody body exists");
          console.log(incomingWithdrawbody);

          const new_balance =
            parseFloat(eza_org.rows[0].wallet_balance) +
            parseFloat(
              outgoingbody.createOutgoingPayment.payment.receiveAmount.value
            ) /
              130;
          await pool.query(
            "UPDATE organization_settings SET wallet_balance = $1 WHERE id = $2",
            [new_balance, eza_org.rows[0].settings_id]
          );

          // const left_balance = parseFloat(borrower.rows[0].wallet_balance) -
          //                      parseFloat(outgoingbody.createOutgoingPayment.payment.debitAmount.value) / 130;
          // await pool.query('UPDATE organization_settings SET wallet_balance = $1 WHERE id = $2', [left_balance, borrower.rows[0].id]);

          await pool.query(
            "UPDATE loans SET status = $1, remaining_amount = $2 WHERE guid = $3",
            [loan_status, parseFloat(loan_remaining_amount), loan.rows[0].guid]
          );

          var body = {
            loan_id: loan.rows[0].id,
            repaid_amount:
              (parseFloat(
                outgoingbody.createOutgoingPayment.payment.receiveAmount.value
              ) / 130),
            status: "Complete",
            description: `Loan Repayment for  ${loan.rows[0].reference}`,
            meta: JSON.stringify({"status":"complete"}),
            pool_name: "eza_repayment_pool",
          };

          const { keys, values } = formatDataForInsert(body);
          console.log(values)
          const placeholders = values
            .map((_, index) => `$${index + 1}`)
            .join(", ");
          console.log(placeholders)
          const query = `INSERT INTO loan_repayments (${keys.join(
            ", "
          )}) VALUES (${placeholders})`;
          console.log(query)
          const ten = await pool.query(query,values);
          console.log("insert repayment");
          console.log(ten);

          res.status(200).json({
            status: 200,
            message: "Loan repayment success",
            data: [],
          });
        } else {
          console.log("Insufficient wallet balance");
          res.status(400).json({
            status: 400,
            message: "Loan not repaid, wallet has insufficient balance",
            data: [],
          });
        }
      }else{
        console.log("here")
      }

      // collection
      //   .mpesaStkPush({
      //     first_name: borrower_name,
      //     last_name: '',
      //     email: 'mike@mailinator.com',
      //     host: 'https://9e21-41-215-97-47.ngrok-free.app/api/v1/callback', // Update with your callback URL
      //     amount: amount * 130,
      //     phone_number: userPhone,
      //     api_ref: `loan repayment on ${new Date()} for ${loan.rows[0].reference}`,
      //     narrative: req.params.guid
      //   })
      //   .then(async (stkResponse) => {
      //     // STK push was initiated successfully, now handle the callback
      //     console.log('STK Push Response:', stkResponse);

      //     const repayPromise = new Promise((resolve, reject) => {
      //       pendingRepays.set(req.params.guid, { resolve, reject });
      //     });

      //     // Wait for the promise to be resolved (by the callback)
      //     repayPromise
      //       .then((data) => {
      //         console.log("Wallet promise resolve",data)
      //          // For simplicity, assuming STK push callback is successful and proceeds with ILP process
      //         // You should replace this with actual callback handling mechanism
      //           // Proceed with ILP process
      //           const eza_org = await pool.query(
      //             "SELECT os.id as settings_id, os.wallet_balance, os.ilp_wallet_id, os.payment_pointer FROM organizations o INNER JOIN organization_settings os ON os.organization_id = o.id WHERE o.name = 'Vuza-Finance'"
      //           );

      //           if (borrower.rows[0].wallet_balance > req.body.repayment_amount) {
      //             const receiverData = {
      //               input: {
      //                 metadata: {
      //                   description: 'repayment of Asked Loans',
      //                 },
      //                 incomingAmount: {
      //                   assetCode: 'USD',
      //                   assetScale: 2,
      //                   value: parseFloat(req.body.amount) * 100,
      //                 },
      //                 walletAddressUrl: eza_org.rows[0].payment_pointer.replace(
      //                   /^./,
      //                   'https://'
      //                 ),
      //               },
      //             };

      //             const receiverbody = await client.request(
      //               CreateReceiverMutation,
      //               receiverData
      //             );
      //             if (receiverbody) {
      //               console.log('Receiver body exists');
      //               console.log(receiverbody);
      //               var receiver_id = receiverbody.createReceiver.receiver.id;

      //               const quoteData = {
      //                 input: {
      //                   walletAddressId: sacco.rows[0].ilp_wallet_id,
      //                   receiver: receiver_id,
      //                 },
      //               };

      //               const quotebody = await client.request(
      //                 CreateQuoteMutation,
      //                 quoteData
      //               );
      //               if (quotebody) {
      //                 console.log('Quote body exists');
      //                 console.log(quotebody);
      //                 var quoteId = quotebody.createQuote.quote.id;

      //                 const outgoingData = {
      //                   input: {
      //                     walletAddressId: sacco.rows[0].ilp_wallet_id,
      //                     quoteId: quoteId,
      //                   },
      //                 };

      //                 const outgoingbody = await client.request(
      //                   CreateOutgoingPaymentMutation,
      //                   outgoingData
      //                 );
      //                 if (outgoingbody) {
      //                   console.log('Outgoing body exists');
      //                   console.log(outgoingbody);
      //                   var outgoingPaymentId =
      //                     outgoingbody.createOutgoingPayment.payment.id;
      //                   var key1 = uuidv4();

      //                   const depositoutgoingData = {
      //                     input: {
      //                       outgoingPaymentId: outgoingPaymentId,
      //                       idempotencyKey: key1,
      //                     },
      //                   };

      //                   const depositoutgoingbody = await client.request(
      //                     DepositOutgoingPaymentLiquidityMutation,
      //                     depositoutgoingData
      //                   );
      //                   if (depositoutgoingbody) {
      //                     console.log('Deposit outgoing success');
      //                     console.log(depositoutgoingbody);

      //                     if (
      //                       depositoutgoingbody.depositOutgoingPaymentLiquidity
      //                         .success == true
      //                     ) {
      //                       const parts = receiver_id.split('/');

      //                       var incoming_payment_id = parts[parts.length - 1];
      //                       var key = uuidv4();

      //                       const incominingWithdrawData = {
      //                         input: {
      //                           incomingPaymentId: incoming_payment_id,
      //                           idempotencyKey: key,
      //                           timeoutSeconds: 0,
      //                         },
      //                       };

      //                       console.log(incominingWithdrawData);

      //                       await delay(60000);

      //                       const incomingWithdrawbody = await client.request(
      //                         CreateIncomingPaymentWithdrawalMutation,
      //                         incominingWithdrawData
      //                       );
      //                       if (incomingWithdrawbody) {
      //                         console.log('incomingWithdrawbody body exists');
      //                         console.log(incomingWithdrawbody);
      //                         if (
      //                           incomingWithdrawbody.createIncomingPaymentWithdrawal
      //                             .success == true
      //                         ) {
      //                           var new_balance =
      //                             parseFloat(eza_org.rows[0].wallet_balance) +
      //                             (parseFloat(
      //                               outgoingbody.createOutgoingPayment.payment
      //                                 .receiveAmount.value
      //                             )/130);
      //                           await pool.query(
      //                             'UPDATE organization_settings SET wallet_balance = $1 WHERE id = $2',
      //                             [new_balance, eza_org.rows[0].settings_id]
      //                           );

      //                           var left_balance =
      //                             parseFloat(borrower.rows[0].wallet_balance) -
      //                             (parseFloat(
      //                               outgoingbody.createOutgoingPayment.payment
      //                                 .debitAmount.value
      //                             )/130);
      //                           await pool.query(
      //                             'UPDATE organization_settings SET wallet_balance = $1 WHERE id = $2',
      //                             [left_balance, borrower.rows[0].id]
      //                           );

      //                           await pool.query(
      //                             'UPDATE loans SET status = $1, remaining_amount = $2 WHERE guid = $3',
      //                             [
      //                               loan_status,
      //                               parseFloat(loan_remaining_amount),
      //                               loan.rows[0].guid,
      //                             ]
      //                           );

      //                           res.status(200).json({
      //                             status: 200,
      //                             message: 'Loan repaid successfully',
      //                             data: [],
      //                           });
      //                         } else {
      //                           console.log('Incoming withdrawal error');
      //                           res.status(500).json({
      //                             status: 500,
      //                             message: 'Failed to withdraw incoming payment',
      //                             data: incomingWithdrawbody,
      //                           });
      //                         }
      //                       } else {
      //                         console.log('Incoming withdrawal request error');
      //                         res.status(500).json({
      //                           status: 500,
      //                           message: 'Failed to request incoming payment withdrawal',
      //                           data: incomingWithdrawbody,
      //                         });
      //                       }
      //                     } else {
      //                       console.log('Deposit outgoing error');
      //                       res.status(500).json({
      //                         status: 500,
      //                         message: 'Failed to deposit outgoing payment liquidity',
      //                         data: depositoutgoingbody,
      //                       });
      //                     }
      //                   } else {
      //                     console.log('Outgoing payment error');
      //                     res.status(500).json({
      //                       status: 500,
      //                       message: 'Failed to create outgoing payment',
      //                       data: outgoingbody,
      //                     });
      //                   }
      //                 } else {
      //                   console.log('Quote creation error');
      //                   res.status(500).json({
      //                     status: 500,
      //                     message: 'Failed to create quote',
      //                     data: quotebody,
      //                   });
      //                 }
      //               } else {
      //                 console.log('Receiver creation error');
      //                 res.status(500).json({
      //                   status: 500,
      //                   message: 'Failed to create receiver',
      //                   data: receiverbody,
      //                 });
      //               }
      //             } else {
      //               console.log('Receiver creation error');
      //               res.status(500).json({
      //                 status: 500,
      //                 message: 'Failed to create receiver',
      //                 data: receiverbody,
      //               });
      //             }
      //           } else {
      //             console.log('Insufficient wallet balance');
      //             res.status(400).json({
      //               status: 400,
      //               message: 'Loan not repaid, wallet has insufficient balance',
      //               data: [],
      //             });
      //           }
      //       })
      //       .catch((err) => {
      //         res.status(500).json({
      //           status: 500,
      //           message: "Failed",
      //           data: [],
      //         });
      //       });

      //   })
      //   .catch((err) => {
      //     console.error('STK Push error:', err);
      //     res.status(500).json({
      //       status: 500,
      //       message: 'Failed to initiate STK Push',
      //       data: err,
      //     });
      //   });
    } catch (error) {
      console.error("Loan repayment error:", error);
      res.status(500).json({
        status: 500,
        message: "Failed to update loan repayment",
        data: error,
      });
    }
  }
);

// router.patch(
//   "/loans/repayment/:guid/",
//   authenticateToken,
//   async function (req, res, next) {
//     try {
//       console.log(req.body);
//       let userPhone = req.body.phoneNumber;
//       let amount = req.body.repayment_amount;
//       const loan = await pool.query("SELECT * FROM loans WHERE guid = $1", [
//         req.params.guid,
//       ]);
//       if (loan.rows.length === 0) {
//         return res.status(404).json({
//           status: 404,
//           message: "Loan not found",
//           data: [],
//         });
//       }

//       const sacco = await pool.query(
//         "SELECT os.id,os.wallet_balance,os.ilp_wallet_id,os.payment_pointer FROM organization_settings os  where organization_id = $1",
//         [loan.rows[0].borrower_id]
//       );

//       if (loan.rows[0].status == "approved") {
//         if (
//           parseFloat(req.body.repayment_amount) <=
//           parseFloat(loan.rows[0].requested_amount)
//         ) {
//           if (
//             parseFloat(req.body.repayment_amount) ==
//             parseFloat(loan.rows[0].requested_amount)
//           ) {
//             var loan_status = "Repayed";
//             var loan_remaining_amount =
//               parseFloat(loan.rows[0].requested_amount) -
//               parseFloat(req.body.repayment_amount);
//           } else {
//             var loan_status = "Partial";
//             var loan_remaining_amount =
//               parseFloat(loan.rows[0].requested_amount) -
//               parseFloat(req.body.repayment_amount);
//           }
//         } else {
//           return res.status(404).json({
//             status: 404,
//             message: "You can't repay more than what is owed",
//             data: [],
//           });
//         }
//       } else {
//         if (
//           parseFloat(req.body.repayment_amount) <=
//           parseFloat(loan.rows[0].remaining_amount)
//         ) {
//           if (
//             parseFloat(req.body.repayment_amount) ==
//             parseFloat(loan.rows[0].remaining_amount)
//           ) {
//             var loan_status = "Repayed";
//             var loan_remaining_amount =
//               parseFloat(loan.rows[0].remaining_amount) +
//               parseFloat(req.body.repayment_amount);
//           } else {
//             var loan_status = "Partial";
//             var loan_remaining_amount =
//               parseFloat(loan.rows[0].remaining_amount) -
//               parseFloat(req.body.repayment_amount);
//           }
//         } else {
//           return res.status(404).json({
//             status: 404,
//             message: "You can't repay more than what is owed",
//             data: [],
//           });
//         }
//       }

//       if (typeof keys === "string") {
//         // Handle error from formatDataForUpdate function
//         return res.status(400).json({
//           status: 400,
//           message: keys,
//           data: [],
//         });
//       }

//       try {
//         //check if Sacco wallet has an amount
//         const eza_org = await pool.query(
//           `SELECT os.id as settings_id,os.wallet_balance,os.ilp_wallet_id,os.payment_pointer FROM organizations o inner join organization_settings os On os.organization_id=o.id where o.name='Vuza-Finance'`
//         );

//         if (sacco.rows[0].wallet_balance > req.body.repayment_amount) {
//           // initiate rafiki receiver which is the eza wallet address
//           const receiverData = {
//             input: {
//               metadata: {
//                 description: "repayment of Asked Loans",
//               },
//               incomingAmount: {
//                 assetCode: "USD",
//                 assetScale: 2,
//                 value: parseFloat(req.body.repayment_amount),
//               },
//               walletAddressUrl: eza_org.rows[0].payment_pointer.replace(
//                 /^./,
//                 "https://"
//               ),
//             },
//           };

//           const receiverbody = await client.request(
//             CreateReceiverMutation,
//             receiverData
//           );
//           if (receiverbody) {
//             console.log("receiver body exists");
//             console.log(receiverbody);
//             var receiver_id = receiverbody.createReceiver.receiver.id;

//             // create quote to the sacco repayerpayer wallet
//             const quoteData = {
//               input: {
//                 walletAddressId: sacco.rows[0].ilp_wallet_id,
//                 receiver: `${receiver_id}`,
//               },
//             };

//             const quotebody = await client.request(
//               CreateQuoteMutation,
//               quoteData
//             );
//             if (quotebody) {
//               console.log("quote body exists");
//               console.log(quotebody);
//               var quoteId = quotebody.createQuote.quote.id;

//               // create outgoing payment to the sacco  repayer wallet
//               const outgoingData = {
//                 input: {
//                   walletAddressId: sacco.rows[0].ilp_wallet_id,
//                   quoteId: `${quoteId}`,
//                 },
//               };

//               const outgoingbody = await client.request(
//                 CreateOutgoingPaymentMutation,
//                 outgoingData
//               );
//               if (outgoingbody) {
//                 console.log("outgoing body exists");
//                 console.log(outgoingbody);
//                 var outgoingPaymentId =
//                   outgoingbody.createOutgoingPayment.payment.id;
//                 var key1 = uuidv4();

//                 const depositoutgoingData = {
//                   input: {
//                     outgoingPaymentId: outgoingPaymentId,
//                     idempotencyKey: `${key1}`,
//                   },
//                 };

//                 const depositoutgoingbody = await client.request(
//                   DepositOutgoingPaymentLiquidityMutation,
//                   depositoutgoingData
//                 );
//                 if (depositoutgoingbody) {
//                   console.log("Deposit outgoing success");
//                   console.log(depositoutgoingbody);

//                   if (
//                     depositoutgoingbody.depositOutgoingPaymentLiquidity
//                       .success == true
//                   ) {
//                     // deposit amount to ezza wallet
//                     const parts = receiver_id.split("/");

//                     var incoming_payment_id = parts[parts.length - 1];
//                     var key = uuidv4();

//                     const incominingWithdrawData = {
//                       input: {
//                         incomingPaymentId: `${incoming_payment_id}`,
//                         idempotencyKey: `${key}`,
//                         timeoutSeconds: 0,
//                       },
//                     };

//                     console.log(incominingWithdrawData);

//                     await delay(60000);

//                     const incomingWithdrawbody = await client.request(
//                       CreateIncomingPaymentWithdrawalMutation,
//                       incominingWithdrawData
//                     );
//                     if (incomingWithdrawbody) {
//                       console.log("incomingWithdrawbody body exists");
//                       console.log(incomingWithdrawbody);
//                       if (
//                         incomingWithdrawbody.createIncomingPaymentWithdrawal
//                           .success == true
//                       ) {
//                         // We should now remove the amount from the deposit pool for the sacco back to eza liquidity pool

//                         //add eza wallert

//                         var new_balance =
//                           parseFloat(eza_org.rows[0].wallet_balance) +
//                           parseFloat(
//                             outgoingbody.createOutgoingPayment.payment
//                               .receiveAmount.value
//                           );
//                         await pool.query(
//                           "update organization_settings set wallet_balance=$1 WHERE id = $2",
//                           [new_balance, eza_org.rows[0].settings_id]
//                         );

//                         //minus sacco wallet
//                         var left_balance =
//                           parseFloat(sacco.rows[0].wallet_balance) -
//                           parseFloat(
//                             outgoingbody.createOutgoingPayment.payment
//                               .debitAmount.value
//                           );
//                         await pool.query(
//                           "update organization_settings set wallet_balance=$1 WHERE id = $2",
//                           [left_balance, sacco.rows[0].id]
//                         );

//                         //update loan remaining amount
//                         // Construct the query
//                         const query = `UPDATE loans SET status=$1,remaining_amount=$2 WHERE guid =$3`;

//                         // Add the GUID to the end of values array
//                         await pool.query(query, [
//                           loan_status,
//                           parseFloat(loan_remaining_amount),
//                           loan.rows[0].guid,
//                         ]);
//                       } else {
//                         console.log("bad error");
//                       }
//                     } else {
//                       console.log("incoming bad error");
//                       console.log(incomingWithdrawbody);
//                     }
//                   } else {
//                     console.log(" on success bad error");
//                     console.log(depositoutgoingbody);
//                   }
//                 } else {
//                   console.log("deposit outgoing bad error");
//                   console.log(depositoutgoingbody);
//                 }
//               } else {
//                 console.log("outgoing bad error");
//                 console.log(outgoingbody);
//               }
//             } else {
//               console.log("quotebody bad error");
//               console.log(quotebody);
//             }
//           } else {
//             console.log("receiverbody bad error");
//             console.log(receiverbody);
//           }

//           res.status(200).json({
//             status: 200,
//             message: "Loan repayed successfully",
//             data: [],
//           });
//         } else {
//           // initiate and wait DAO transfer and Liquidity provision from LP's
//           console.log("Wallet has no enough amount");
//           res.status(400).json({
//             status: 400,
//             message: "Loan not repayed,Wallet has no enough amount",
//             data: [],
//           });
//         }
//       } catch (error) {
//         res.status(400).json({
//           status: 400,
//           message: "Loan not updated",
//           data: `${error}`,
//         });
//       }
//     } catch (error) {
//       res.status(400).json({
//         status: 400,
//         message: "Loan not updated",
//         data: `${error}`,
//       });
//     }
//   }
// );

/* GET ROLE funcitonality. */
router.post(
  "/roles/create/",
  authenticateToken,
  async function (req, res, next) {
    const { keys, values } = formatDataForInsert(req.body);

    // Create parameterized placeholders for values ($1, $2, etc.)
    const placeholders = values.map((_, index) => `$${index + 1}`).join(", ");

    const query = `INSERT INTO roles (${keys.join(
      ", "
    )}) VALUES (${placeholders})`;

    try {
      const result = await pool.query(query, values);

      res.status(200).json({
        status: 200,
        message: "Role created successfully",
        data: [],
      });
    } catch (error) {
      res.json({
        status: 400,
        message: "Role not created",
        data: `${error}`,
      });
    }
  }
);

router.get("/roles/", async function (req, res, next) {
  try {
    const result = await pool.query("SELECT * FROM roles");
    res.status(200).json({
      status: 200,
      message: "Roles retrieved successfully",
      data: result.rows,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/roles/:id/", async function (req, res, next) {
  const { id } = req.params;

  try {
    const result = await pool.query("SELECT * FROM roles WHERE id = $1", [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({
        status: 404,
        message: "Role not found",
        data: [],
      });
    }

    res.status(200).json({
      status: 200,
      message: "Role retrieved successfully",
      data: result.rows[0],
    });
  } catch (error) {
    next(error);
  }
});

router.put("/roles/:id/", async function (req, res, next) {
  const { id } = req.params;
  const { name, description } = req.body;

  try {
    const result = await pool.query(
      `UPDATE roles
       SET name = $1, description = $2, updated_at = NOW()
       WHERE id = $3 RETURNING *`,
      [name, description, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        status: 404,
        message: "Role not found",
        data: [],
      });
    }

    res.status(200).json({
      status: 200,
      message: "Role updated successfully",
      data: result.rows[0],
    });
  } catch (error) {
    next(error);
  }
});

router.delete("/roles/:id/", async function (req, res, next) {
  const { id } = req.params;

  try {
    const result = await pool.query(
      "DELETE FROM roles WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        status: 404,
        message: "Role not found",
        data: [],
      });
    }

    res.status(200).json({
      status: 200,
      message: "Role deleted successfully",
      data: result.rows[0],
    });
  } catch (error) {
    next(error);
  }
});

/* INTASEND functionality. */

// router.post("/wallet_withdraw/:guid", async function (req, res, next) {
//   const result = await pool.query(
//     `SELECT name FROM organizations where id=$1`,
//     [req.params.guid]
//   );

//   console.log(req.body)
//   /* For Demo purposes we shall include the option to use MPESA but on live we only use bank payouts */
//   if(req.body.withdrawMethod == "mpesa"){
//     let payouts = intasend.payouts();
//     var req_approval = "YES" // Set to 'NO' if you want the transaction
//                              // to go through without calling the approve method
//      payouts
//        .mpesa({
//          currency: 'KES',
//           requires_approval: req_approval,
//          transactions: [{
//            name: result.rows[0].name,
//            account: req.body.phoneNumber,
//            amount:  req.body.amount * 130,
//            narrative: `${req.params.guid}`
//          }]
//          })
//        .then((resp) => {
//          console.log(`Payouts response:`, resp);
//          payouts
//           .approve(resp, false)
//           .then((resp) => {
//             console.log(`Payouts approve:`, resp);
//             res.status(200).json({
//               status: 200,
//               message: "Withdraw Approved. You shall get the confirmation in a few",
//               data: [],
//             });
//           })
//           .catch((err) => {
//             console.error(`Payouts approve error:`,err);
//             res.status(400).json({
//               status: 400,
//               message: "Payment Approval failed",
//               data: [],
//             });
//           });
//        })
//        .catch((err) => {
//          console.error(`Payouts error:`, err);

//          const errorBuffer = Buffer.from(err, 'hex'); // Example buffer

//           // Convert buffer to string
//           const errorString = errorBuffer.toString('utf8');

//           // Parse string as JSON
//           let errorJson;
//           try {
//             errorJson = JSON.parse(errorString);
//             console.log(errorJson)

//             res.status(400).json({
//               status: 400,
//               message: "Payment Initiation failed",
//               data: [],
//             });
//           } catch (e) {
//             console.error('Error parsing JSON:', e);
//           }
//        });

//   }else if (req.body.withdrawMethod == "bank"){

//   }else{
//     res.status(400).json({
//       status: 400,
//       message: "Withdraw Method not available",
//       data: [],
//     });
//   }
// });

// //callback
// router.post("/callback", async function (req, res, next) {
//   try {
//     console.log("callback");

//     if(req.body.status == 'Completed'){
//       console.log(req.body);
//         var body = {
//           "organization_id": req.body.transactions[0].narrative,
//           "amount": req.body.transactions[0].charge,
//           "status": 'Complete',
//           "description": `Withdraw of ${req.body.transactions[0].charge} with a transaction plus fee of ${req.body.transactions[0].amount} to ${req.body.transactions[0].provider_account_name} via ${req.body.transactions[0].provider}`,
//           "meta": JSON.stringify(req.body)
//         };

//         const { keys, values } = formatDataForInsert(body);
//         const placeholders = values.map((_, index) => `$${index + 1}`).join(", ");
//         const query = `INSERT INTO wallet_withdrawals (${keys.join(", ")}) VALUES (${placeholders})`;
//         try {
//             var result = await pool.query(query, values);
//             console.log(result);

//             res.status(200).json({
//               status: 200,
//               message: "Success",
//               data: [],
//             });
//           } catch (dbError) {
//             console.error('Database Error:', dbError);
//             res.status(200).json({
//               status: 200,
//               message: "Success",
//               data: [],
//             });
//           }
//     }
//   } catch (error) {
//     next(error);
//   }
// });

const pendingWithdrawals = new Map();

router.post("/wallet_withdraw/:guid", async function (req, res, next) {
  const result = await pool.query(
    `SELECT name FROM organizations where id=$1`,
    [req.params.guid]
  );
  var narrative = req.params.guid;

  console.log(req.body);

  if (req.body.withdrawMethod === "mpesa") {
    // let payouts = intasend.payouts();
    // var req_approval = "YES"; // Set to 'NO' if you want the transaction to go through without calling the approve method

    // payouts
    //   .mpesa({
    //     currency: "KES",
    //     requires_approval: req_approval,
    //     transactions: [
    //       {
    //         name: result.rows[0].name,
    //         account: req.body.phoneNumber,
    //         amount: req.body.amount * 130,
    //         narrative: `${req.params.guid}`,
    //       },
    //     ],
    //   })
    //   .then((resp) => {
    //     console.log(`Payouts response:`, resp);
    //     payouts
    //       .approve(resp, false)
    //       .then((resp) => {
    //         console.log(`Payouts approve:`, resp);
    //       })
    //       .catch((err) => {
    //         console.error(`Payouts approve error:`, err);
    //       });

    //     // Create a promise and store it in the map
    //     const withdrawPromise = new Promise((resolve, reject) => {
    //       pendingWithdrawals.set(req.params.guid, { resolve, reject });
    //     });

    //     // Wait for the promise to be resolved (by the callback)
    //     withdrawPromise
    //       .then((data) => {
    //         console.log("Wallet promise resolve", data);
    //         res.status(200).json({
    //           status: 200,
    //           message: "Success",
    //           data: data,
    //         });
    //       })
    //       .catch((err) => {
    //         res.status(500).json({
    //           status: 500,
    //           message: "Failed",
    //           data: [],
    //         });
    //       });
    //   })
    //   .catch((err) => {
    //     console.error(`Payouts error:`, err);
    //     const errorBuffer = Buffer.from(err, "hex");
    //     const errorString = errorBuffer.toString("utf8");
    //     let errorJson;
    //     try {
    //       errorJson = JSON.parse(errorString);
    //       console.log(errorJson);
    //     } catch (e) {
    //       console.error("Error parsing JSON:", e);
    //     }
    //   });

    const settings = await pool.query(
      `SELECT wallet_balance from organization_settings where organization_id = ${narrative}`
    );
    var balance =
      parseFloat(settings.rows[0].wallet_balance) -
      parseFloat(req.body.amount * 130) / 130;
    console.log("balance", balance);
    const result1 = await pool.query(
      `Update organization_settings SET wallet_balance =${balance} where organization_id=${narrative} `
    );

    console.log(result1);
    var body = {
      organization_id: narrative,
      amount: req.body.amount * 130,
      status: "Complete",
      description: `Withdraw of KES ${req.body.amount * 130} to ${result.rows[0].name} via intasend`,
      meta: JSON.stringify(req.body),
      pool_name: "eza_dispatch_pool",
    };

    const { keys, values } = formatDataForInsert(body);
    const placeholders = values
      .map((_, index) => `$${index + 1}`)
      .join(", ");
    const query = `INSERT INTO wallet_withdrawals (${keys.join(
      ", "
    )}) VALUES (${placeholders})`;
    try {
      var result2 = await pool.query(query, values);
      console.log(result2);
      res.status(200).json({
        status: 200,
        message: "Withdraw Success, Check your Mpesa",
        data: [],
      });
    }catch (dbError){

    }
  } else if (req.body.withdrawMethod === "bank") {
    // Handle bank withdrawal logic
  } else {
    res.status(400).json({
      status: 400,
      message: "Withdraw Method not available",
      data: [],
    });
  }
});

router.post("/callback", async function (req, res, next) {
  try {
    console.log("callback");
    if (req.body.api_ref) {
      //deposit/repay
      console.log("repay", req.body);
      console.log(req.body.api_ref);
      if (req.body.state === "COMPLETE") {
        try {
          const match = req.body.api_ref.match(/for\s([A-Z0-9]+)/);
          console.log("mathc", match);
          // Resolve the promise stored in the map
          if (pendingRepays.has(match[1])) {
            pendingRepays.get(match[1]).resolve({
              status: 200,
              message: "Success",
              data: [],
            });
            pendingRepays.delete(match[1]);
          }

          res.status(200).json({
            status: 200,
            message: "Success",
            data: [],
          });
        } catch (dbError) {
          console.error("Database Error:", dbError);

          // Resolve the promise with an error
          const match = req.body.api_ref.match(/for\s([A-Z0-9]+)/);
          if (pendingRepays.has(match)) {
            pendingRepays.get(match).reject({
              status: 500,
              message: "Database Error",
              data: [],
            });
            pendingRepays.delete(match);
          }

          res.status(200).json({
            status: 200,
            message: "Success",
            data: [],
          });
        }
      }
    } else {
      //withdraw
      if (req.body.status === "Completed") {
        console.log(req.body);
        const settings = await pool.query(
          `SELECT wallet_balance from organization_settings where organization_id = ${req.body.transactions[0].narrative}`
        );
        var balance =
          parseFloat(settings.rows[0].wallet_balance) -
          parseFloat(req.body.transactions[0].amount) / 130;
        console.log("balance", balance);
        const result1 = await pool.query(
          `Update organization_settings SET wallet_balance =${balance} where organization_id=${req.body.transactions[0].narrative} `
        );

        console.log(result1);
        var body = {
          organization_id: req.body.transactions[0].narrative,
          amount: req.body.transactions[0].amount,
          status: "Complete",
          description: `Withdraw of ${req.body.transactions[0].currency} ${req.body.transactions[0].amount} to ${req.body.transactions[0].provider_account_name} via ${req.body.transactions[0].provider}`,
          meta: JSON.stringify(req.body),
          pool_name: "eza_dispatch_pool",
        };

        const { keys, values } = formatDataForInsert(body);
        const placeholders = values
          .map((_, index) => `$${index + 1}`)
          .join(", ");
        const query = `INSERT INTO wallet_withdrawals (${keys.join(
          ", "
        )}) VALUES (${placeholders})`;
        try {
          var result = await pool.query(query, values);
          console.log(result);

          // Resolve the promise stored in the map
          const guid = req.body.transactions[0].narrative;
          if (pendingWithdrawals.has(guid)) {
            pendingWithdrawals.get(guid).resolve({
              status: 200,
              message: "Success",
              data: [],
            });
            pendingWithdrawals.delete(guid);
          }

          res.status(200).json({
            status: 200,
            message: "Success",
            data: [],
          });
        } catch (dbError) {
          console.error("Database Error:", dbError);

          // Resolve the promise with an error
          const guid = req.body.transactions[0].narrative;
          if (pendingWithdrawals.has(guid)) {
            pendingWithdrawals.get(guid).reject({
              status: 500,
              message: "Database Error",
              data: [],
            });
            pendingWithdrawals.delete(guid);
          }

          res.status(200).json({
            status: 200,
            message: "Success",
            data: [],
          });
        }
      }
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post("/webhooks", async function (req, res, next) {
  console.log("Webhook from rafiki");
  console.log(req.body);
  res.json({
    status: 200,
    message: "Success",
    data: [],
  });
});

router.get("/rates", async function (req, res, next) {
  // const result = await pool.query(
  //   "SELECT o.*, os.payment_pointer FROM organizations o left join organization_settings os On os.organization_id=o.id where o.organization_type_id != 1 order by o.created_at DESC"
  // );
  console.log("here")
  var base = req.query.base;
  const response = await axios.get(
    "https://api.freecurrencyapi.com/v1/latest",
    {
      params: {
        apikey: "fca_live_AsMquWcWv18oXtEA8HUDl2whcBxttmbg5qyYG6M3",
        base_currency: base,
      },
    }
  );
  // console.log(response)

  var result = response.data.data;

  res.status(200).json({
    base,
    rates: result ? result : {},
  });

  // res.json({
  //   status: 200,
  //   message: "Success",
  //   data: result.rows,
  // });
});

module.exports = router;
