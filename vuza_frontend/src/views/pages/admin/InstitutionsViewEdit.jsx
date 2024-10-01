import * as React from 'react';

// third party
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';

// material-ui
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MainCard from 'ui-component/cards/MainCard';
import TextField from '@mui/material/TextField';
import {
  Card,
  CardContent,
  Checkbox,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Snackbar
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useDropzone } from 'react-dropzone';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { baseGet, basePatch, basePost } from 'utils/apiClient';
import { Bounce, toast } from 'react-toastify';
import moment from 'moment';


const steps = [
  {
    label:  'Institution Details' ,
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`
  },
  {
    label: 'Supporting Documents',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`
  }
];

// FileUpload Component
const FileUpload = ({ label, isdisabled, existingFiles,...props }) => {
  const [field, meta, helpers] = useField(props);
  const [loading, setLoading] = useState(false);

  const handleFileClick = async (path) => {
    try {
      setLoading(true)
      const response = await basePost(`/v1/file/get/`,{"file_path":path});
      console.log(response)
      // setPresignedUrl(response.data.presignedUrl);
      window.open(response.presignedUrl, '_blank', 'noopener,noreferrer');
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.error('Error fetching presigned URL:', error);
      // Handle error
    }
  };

  const onDrop = (acceptedFiles) => {
    helpers.setValue(acceptedFiles);
  };

  const { acceptedFiles, getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const newFiles = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const formattedExistingFiles = existingFiles.map((path) => {
    const [, filename] = path.split('/'); // Split path by '/' and only pick the last part
    return (
         <a><li key={path} onClick={() => handleFileClick(path)}>
          {filename}
        </li></a>
        
    );
  });

  return (
    <div>
        <aside>
          <h4>Existing Files</h4>
          {loading ? 'File Loading' : <>
            <ul>
              {formattedExistingFiles}
          </ul>
          </>}

          <h4>New Files</h4>
          <ul>{newFiles}</ul>
        </aside>
      <div {...getRootProps()} style={{ outline: 'none' }}>
        <input {...getInputProps()} multiple />
  
        <div
          style={{
            border: '2px dashed #ced4da',
            borderRadius: '8px',
            padding: '16px',
            textAlign: 'center',
            cursor: 'pointer',
            background: isDragActive ? '#f8f9fa' : 'transparent'
          }}
        >
          <CloudUploadIcon />
          <Typography variant="subtitle1"> {label}</Typography>
        </div>
      </div>

      {meta.error ? (
        <FormHelperText error>
          <ErrorMessage name={props.name} />
        </FormHelperText>
      ) : null}
    </div>
  );
};

const FILE_SIZE = 1024 * 1024 * 10; // 10MB
const SUPPORTED_FORMATS = ['application/pdf', 'image/jpeg', 'image/png'];

// Validation Schemas
const validationSchemas = [
    Yup.object().shape({
      name: Yup.string().required('Organization Name is required'),
      description: Yup.string().nullable(),
      country: Yup.string().nullable(),
      state: Yup.string().nullable(),
      primary_phone_number: Yup.string().nullable(),
      primary_email_address: Yup.string().email('Must be a valid email').nullable(),
      industry: Yup.string().nullable(),
      contact_person_names: Yup.string().nullable(),
      contact_person_phone_number: Yup.string().nullable(),
      contact_person_email_address: Yup.string().email('Must be a valid email').nullable(),
      application_date: Yup.date().required('Application Date is required'),
      approval_date: Yup.date().nullable(),
      is_approved: Yup.boolean().required('Approval status is required'),
      is_test: Yup.boolean().required('Test status is required'),
      organization_type: Yup.mixed().nullable(),
      approved_by: Yup.string().nullable(),
      created_at: Yup.date().nullable(),
      created_by: Yup.string().nullable(),
    }),

  Yup.object().shape({
    supportingDocuments: Yup.array()
    .of(
      Yup.mixed()
        .test('fileSize', 'File is too large', (file) => {
          console.log(file)
          return file ? file.size <= FILE_SIZE : true;
        })
        .test('fileFormat', 'Unsupported Format', (file) => {
          return file ? SUPPORTED_FORMATS.includes(file.type) : true;
        })
    )
  })
];

// Form Components
// const OrganizationDetailsForm = ({isdisabled}) => (
//   <>
//     <Field name="name" as={TextField} label="Organization Name" fullWidth margin="normal" disabled={isdisabled} />
//     <ErrorMessage name="name" component={FormHelperText} error />

//     <Field name="description" as={TextField} label="Description" fullWidth margin="normal" multiline rows={4} disabled={isdisabled} />
//     <ErrorMessage name="description" component={FormHelperText} error />

//     <Field name="country" as={TextField} label="Country" fullWidth margin="normal" select disabled={isdisabled}>
//       <MenuItem value="Kenya">Kenya</MenuItem>
//       <MenuItem value="Rwanda">Rwanda</MenuItem>
//     </Field>
//     <ErrorMessage name="country" component={FormHelperText} error />

//     <Field name="state" as={TextField} label="State" fullWidth margin="normal" disabled={isdisabled} />
//     <ErrorMessage name="state" component={FormHelperText} error />

//     <Field name="primary_phone_number" as={TextField} label="Primary Phone Number" fullWidth margin="normal" disabled={isdisabled} />
//     <ErrorMessage name="primary_phone_number" component={FormHelperText} error />

//     <Field name="primary_email_address" as={TextField} label="Primary Email Address" fullWidth margin="normal" disabled={isdisabled} />
//     <ErrorMessage name="primary_email_address" component={FormHelperText} error />

//     <Field name="industry" as={TextField} label="Industry" fullWidth margin="normal" select disabled={isdisabled}>
//       <MenuItem value="Education">Education</MenuItem>
//       <MenuItem value="Technology">Technology</MenuItem>
//       <MenuItem value="Healthcare">Healthcare</MenuItem>
//     </Field>
//     <ErrorMessage name="industry" component={FormHelperText} error />

//     <Field name="contact_person_names" as={TextField} label="Contact Person Names" fullWidth margin="normal" disabled={isdisabled} />
//     <ErrorMessage name="contact_person_names" component={FormHelperText} error />

//     <Field name="contact_person_phone_number" as={TextField} label="Contact Person Phone Number" fullWidth margin="normal" disabled={isdisabled} />
//     <ErrorMessage name="contact_person_phone_number" component={FormHelperText} error />

//     <Field name="contact_person_email_address" as={TextField} label="Contact Person Email Address" fullWidth margin="normal" disabled={isdisabled} />
//     <ErrorMessage name="contact_person_email_address" component={FormHelperText} error />

//     <Field name="application_date" as={TextField} label="Application Date" type="date" fullWidth margin="normal" InputLabelProps={{ shrink: true }} disabled={isdisabled} />
//     <ErrorMessage name="application_date" component={FormHelperText} error />

//     <Field name="approval_date" as={TextField} label="Approval Date" type="date" fullWidth margin="normal" InputLabelProps={{ shrink: true }} disabled={isdisabled} />
//     <ErrorMessage name="approval_date" component={FormHelperText} error />

//     <Field name="is_approved">
//       {({ field }) => (
//         <FormControlLabel
//           control={<Checkbox {...field} checked={field.value} />}
//           label="Is Approved"
//           disabled={isdisabled}
//         />
//       )}
//     </Field>
//     <ErrorMessage name="is_approved" component={FormHelperText} error />

//     <Field name="is_test">
//       {({ field }) => (
//         <FormControlLabel
//           control={<Checkbox {...field} checked={field.value} />}
//           label="Is Test"
//           disabled={isdisabled}
//         />
//       )}
//     </Field>
//     <ErrorMessage name="is_test" component={FormHelperText} error />

//     {/* <Field name="organization_type" as={TextField} label="Organization Type" fullWidth margin="normal" select disabled={isdisabled}>
     
//       <MenuItem value="Type1">Type1</MenuItem>
//       <MenuItem value="Type2">Type2</MenuItem>
//     </Field> */}
//     <ErrorMessage name="organization_type" component={FormHelperText} error />

//     <Field name="approved_by" as={TextField} label="Approved By" fullWidth margin="normal" disabled={true} InputLabelProps={{ shrink: true }} />
//     <ErrorMessage name="approved_by" component={FormHelperText} error />

  
//   </>
// );



const SupportingDocumentsForm = ({isdisabled,existingFiles}) => (
  <>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FileUpload name="supportingDocuments" existingFiles={existingFiles} label="Upload Contractual Documents" isdisabled={isdisabled} />
        <Typography>e.g) Contracts, MoU etc </Typography>
      </Grid>
    </Grid>
  </>
);


const formatDateForDisplay = (isoDate) => {
  return moment(isoDate).format('YYYY-MM-DD HH:mm:ss');
};

// Function to send back the original date format
const getOriginalDateFormat = (isoDate) => {
  return isoDate;
};


export default function InstitutionsViewEdit() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [loading, setLoading] = React.useState(false);

  const [currentOrg, setCurrentOrg] = useState();

  const { pathname } = useLocation();

  const { guid = '' } = useParams();

  const isEdit = pathname.includes('edit');
  console.log(isEdit)

  const [initialValues, setInitialValues] = useState({
    name: '',
    description: '',
    country: '',
    state: '',
    primary_phone_number: '',
    primary_email_address: '',
    industry: '',
    contact_person_names: '',
    contact_person_phone_number: '',
    contact_person_email_address: '',
    application_date: '',
    approval_date: '',
    is_approved: false,
    is_test: false,
    // organization_type: '',
    approved_by: '',
    supportingDocuments: [],
    created_at: '',
    created_by: ''
  });
  

  useQuery(
    'get_organization',
    () => baseGet(`/v1/organizations/by_guid/${guid}/`),
    {
      refetchOnWindowFocus: false,
      onSuccess: (data) => setCurrentOrg(data.data[0])
    }
  )

  useEffect(() => {
    if (currentOrg) {
      setInitialValues({
        name: currentOrg.name || '',
        description: currentOrg.description || '',
        country: currentOrg.country || '',
        state: currentOrg.state || '',
        primary_phone_number: currentOrg.primary_phone_number || '',
        primary_email_address: currentOrg.primary_email_address || '',
        industry: currentOrg.industry || '',
        contact_person_names: currentOrg.contact_person_names || '',
        contact_person_phone_number: currentOrg.contact_person_phone_number || '',
        contact_person_email_address: currentOrg.contact_person_email_address || '',
        application_date: formatDateForDisplay(currentOrg.application_date) || '',
        approval_date: formatDateForDisplay(currentOrg.approval_date) || '',
        is_approved: currentOrg.is_approved || false,
        is_test: currentOrg.is_test || false,
        // organization_type: currentOrg.organization_type || '',
        approved_by: currentOrg.approved_by || '',
        supportingDocuments: currentOrg.supportingDocuments || [],
        created_at: currentOrg.created_at || '',
        created_by: currentOrg.created_by || ''
      });
    }
  }, [currentOrg]);
  

  const updateInstitution = useMutation((data) => basePatch(`/v1/organizations/update/${currentOrg.guid}/`, data));

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  const handleSubmit = (values, actions) => {
    console.log('submitting');
    if (activeStep === steps.length - 1) {
      // Final form submission logic
      if(isEdit){
        setLoading(true);
        console.log(values);
        const formData = new FormData();
        for (let key in values) {
          if (key === 'supportingDocuments') {
            console.log(values.supportingDocuments)
            values.supportingDocuments.forEach((file) => {
              console.log("here")
              formData.append('files', file);
            });
            console.log(formData)
          } else {
            formData.append(key, values[key]);
          }
        }

        setTimeout(() => {
          updateInstitution.mutate(formData, {
            onSuccess: (data) => {
              toast.success("Update & Approval success!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                onClose: () => {
                  setLoading(false);
                  actions.setSubmitting(false);
                  location.reload()
                }
                });
            },
            onError: (error) => {
              toast.error("Update & Approval Failed!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                onClose: () => {
                  setLoading(false);
                  actions.setSubmitting(false);
                  location.reload()
                }
                });
                
            },
          });
        }, 200);
      }
    
      handleNext();
    } else {
      handleNext(values);
      actions.setTouched({});
      actions.setSubmitting(false);
      setLoading(false);
    }
  };

  return (
    <MainCard title={!isEdit ? 'View Institution Details' : 'Edit Institution Details'}>
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep}>
          {steps.map((step, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              // labelProps.optional = (
              //   <Typography variant="caption">Optional</Typography>
              // );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={step.label} {...stepProps}>
                <StepLabel {...labelProps}>{step.label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            {loading && (
              <div>
                <Typography sx={{ mt: 2, mb: 1 }}>Update is submitting, Kindly wait</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                  <Box sx={{ flex: '1 1 auto' }} />
                  <CircularProgress />
                </Box>
              </div>
            )}
          </React.Fragment>
        ) : (
          <Formik
            initialValues={initialValues}
            enableReinitialize
            validationSchema={validationSchemas[activeStep]}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, validateForm, setTouched }) => (
              <Form>
                {activeStep === 0 && (
                  <Box mt={2}>
                    {/* <OrganizationDetailsForm isdisabled ={!isEdit} /> */}
                    <>
                    <Field name="name" as={TextField} label="Organization Name" fullWidth margin="normal" disabled={!isEdit} />
                    <ErrorMessage name="name" component={FormHelperText} error />

                    <Field name="description" as={TextField} label="Description" fullWidth margin="normal" multiline rows={4} disabled={!isEdit} />
                    <ErrorMessage name="description" component={FormHelperText} error />

                    <Field name="country" as={TextField} label="Country" fullWidth margin="normal" select disabled={!isEdit}>
                      <MenuItem value="Kenya">Kenya</MenuItem>
                      <MenuItem value="Rwanda">Rwanda</MenuItem>
                      <MenuItem value="Uganda">Uganda</MenuItem>
                      <MenuItem value="Zambia">Zambia</MenuItem>
                      <MenuItem value="Zimbambwe">Zimbambwe</MenuItem>
                    </Field>
                    <ErrorMessage name="country" component={FormHelperText} error />

                    <Field name="state" as={TextField} label="State" fullWidth margin="normal" disabled={!isEdit} />
                    <ErrorMessage name="state" component={FormHelperText} error />

                    <Field name="primary_phone_number" as={TextField} label="Primary Phone Number" fullWidth margin="normal" disabled={!isEdit} />
                    <ErrorMessage name="primary_phone_number" component={FormHelperText} error />

                    <Field name="primary_email_address" as={TextField} label="Primary Email Address" fullWidth margin="normal" disabled={!isEdit} />
                    <ErrorMessage name="primary_email_address" component={FormHelperText} error />

                    <Field name="industry" as={TextField} label="Industry" fullWidth margin="normal" select disabled={!isEdit}>
                      <MenuItem value="Real Estate">Real Estate</MenuItem>
                      <MenuItem value="Police">Police</MenuItem>
                    </Field>
                    <ErrorMessage name="industry" component={FormHelperText} error />

                    <Field name="contact_person_names" as={TextField} label="Contact Person Names" fullWidth margin="normal" disabled={!isEdit} />
                    <ErrorMessage name="contact_person_names" component={FormHelperText} error />

                    <Field name="contact_person_phone_number" as={TextField} label="Contact Person Phone Number" fullWidth margin="normal" disabled={!isEdit} />
                    <ErrorMessage name="contact_person_phone_number" component={FormHelperText} error />

                    <Field name="contact_person_email_address" as={TextField} label="Contact Person Email Address" fullWidth margin="normal" disabled={!isEdit} />
                    <ErrorMessage name="contact_person_email_address" component={FormHelperText} error />

                    <Field name="application_date" as={TextField} label="Application Date" type="datetime-local" fullWidth margin="normal" InputLabelProps={{ shrink: true }} disabled={!isEdit} />
                    <ErrorMessage name="application_date" component={FormHelperText} error />

                    <Field name="approval_date" as={TextField} label="Approval Date" type="datetime-local" fullWidth margin="normal" InputLabelProps={{ shrink: true }} disabled={!isEdit} />
                    <ErrorMessage name="approval_date" component={FormHelperText} error />

                    <Field name="is_approved">
                      {({ field }) => (
                        <FormControlLabel
                          control={<Checkbox {...field} checked={field.value} />}
                          label="Is Approved"
                          disabled={!isEdit}
                        />
                      )}
                    </Field>
                    <ErrorMessage name="is_approved" component={FormHelperText} error />

                    <Field name="is_test">
                      {({ field }) => (
                        <FormControlLabel
                          control={<Checkbox {...field} checked={field.value} />}
                          label="Is Test"
                          disabled={!isEdit}
                        />
                      )}
                    </Field>
                    <ErrorMessage name="is_test" component={FormHelperText} error />

                    {/* <Field name="organization_type" as={TextField} label="Organization Type" fullWidth margin="normal" select disabled={isdisabled}>
                    
                      <MenuItem value="Type1">Type1</MenuItem>
                      <MenuItem value="Type2">Type2</MenuItem>
                    </Field>
                    <ErrorMessage name="organization_type" component={FormHelperText} error /> */}
                    

                    <Field name="approved_by" as={TextField} label="Approved By" fullWidth margin="normal" disabled={true} InputLabelProps={{ shrink: true }} />
                    <ErrorMessage name="approved_by" component={FormHelperText} error />

                  
                  </>
                  </Box>
                )}
              
                {activeStep === 1 && (
                  <Box mt={2}>
                    <SupportingDocumentsForm isdisabled ={!isEdit}  existingFiles={currentOrg?.supportingDocuments || []} />
                  </Box>
                )}
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                  <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                    Back
                  </Button>
                  <Box sx={{ flex: '1 1 auto' }} />

                  <Button type="submit" disabled={isSubmitting}>
                    {activeStep === steps.length - 1 ?  !isEdit ? currentOrg.is_approved ? '' :  'Update & Approve' : 'Update' : 'Next'}
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        )}
      </Box>
    </MainCard>
  );
}
