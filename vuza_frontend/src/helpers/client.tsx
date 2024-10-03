import { createThirdwebClient } from "thirdweb";
 
export const client = createThirdwebClient({
  clientId: process.env.THIRDWEBCLIENTID,
});