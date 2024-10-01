// import React, { useState } from 'react';
// import { Box, Button, Modal, Typography, TextField, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
// import LoadingButton from '@mui/lab/LoadingButton';

// const WithdrawModal = ({ open, onClose, onSubmit }) => {
//   const [withdrawMethod, setWithdrawMethod] = useState('mpesa'); // Set MPESA as default
//   const [amount, setAmount] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [bankName, setBankName] = useState('');
//   const [bankAccountNumber, setBankAccountNumber] = useState('');

//   const handleSubmit = () => {
//     const data = { withdrawMethod, amount, phoneNumber, bankName, bankAccountNumber };
//     onSubmit(data);
//     onClose();
//   };

//   return (
//     <Modal open={open} onClose={onClose}>
//       <Box
//         sx={{
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           width: 400,
//           bgcolor: 'background.paper',
//           p: 4,
//           boxShadow: 24
//         }}
//       >
//         <Typography variant="h3" mb={2}>
//           Withdraw
//         </Typography>
//         <FormControl fullWidth variant="outlined" margin="normal">
//           <InputLabel id="withdraw-method-label">Withdraw Method</InputLabel>
//           <Select
//             labelId="withdraw-method-label"
//             value={withdrawMethod}
//             onChange={(e) => setWithdrawMethod(e.target.value)}
//             label="Withdraw Method"
//           >
//             <MenuItem value="mpesa">MPESA</MenuItem>
//             <MenuItem value="bank">Bank</MenuItem>
//           </Select>
//         </FormControl>
//         <TextField label="Amount" variant="outlined" fullWidth margin="normal" value={amount} onChange={(e) => setAmount(e.target.value)} />
//         {withdrawMethod === 'mpesa' && (
//           <TextField
//             label="Phone Number"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//           />
//         )}
//         {withdrawMethod === 'bank' && (
//           <>
//             <TextField
//               label="Bank Name"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               value={bankName}
//               onChange={(e) => setBankName(e.target.value)}
//             />
//             <TextField
//               label="Bank Account Number"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               value={bankAccountNumber}
//               onChange={(e) => setBankAccountNumber(e.target.value)}
//             />
//           </>
//         )}
//         <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
//           <Button variant="contained" color="primary" onClick={handleSubmit}>
//             Submit
//           </Button>
//           <Button variant="contained" color="secondary" onClick={onClose}>
//             Cancel
//           </Button>
//         </Box>
//       </Box>
//     </Modal>
//   );
// };

// export default WithdrawModal;
