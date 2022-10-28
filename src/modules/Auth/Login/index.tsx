import {
  UIFlexCenterBox,
  UIFlexColumnBox,
  UIFlexSpaceBox,
  UIImage,
} from '@/components/UI';
import { Box, Button, Link, TextField } from '@mui/material';

const buttonStyle = {
  background: 'linear-gradient(165.13deg, #37D099 -18.62%, #008A83 99.26%)',
  border: '1px solid rgba(137, 200, 198, 0.2)',
  borderRadius: '8px',
  width: 350,
  height: 44,
  color: 'white',
  marginTop: '30px',
};

const textFieldStyle = {
  input: {
    color: '#89C8C6',
  },
  background: 'rgba(137, 200, 198, 0.1)',
  border: '1px solid rgba(114, 239, 232, 0.2)',
  borderRadius: '8px',
  width: 350,
};

const textStyle = {
  color: '#fff',
  fontWeight: 700,
  fontSize: 20,
  textAlign: 'center',
  maxWidth: 400,
  width: '100%',
  marginTop: '40px',
};

function AuthLogin() {
  return (
    <UIFlexSpaceBox sx={{ alignItems: 'center', width: '100%' }} maxWidth="lg">
      <UIFlexColumnBox>
        <UIImage src="images/icons/logo.svg" width={256} height={245} />
        <Box sx={textStyle}>
          Maximizing Your Revenue by Providing the Most Detailed Reporting
        </Box>
      </UIFlexColumnBox>
      <UIFlexCenterBox>
        <Box>
          <Box
            component={'h1'}
            textAlign="center"
            sx={{ color: '#D0E4E3', fontSize: '64px' }}
          >
            Log in
          </Box>
          <Box justifyContent={'center'} flexDirection="row" display={'flex'}>
            <TextField sx={textFieldStyle} placeholder="Enter phone number" />
          </Box>
          <Box justifyContent={'center'} flexDirection="row" display={'flex'}>
            <Button sx={buttonStyle}>Log in</Button>
          </Box>
          <UIFlexSpaceBox sx={{ marginTop: '100px', width: 350, mx: 'auto' }}>
            <Link color="#1bac8e" sx={{ fontSize: '13px', fontWeight: '600' }}>
              + Create New Account
            </Link>
            <Link color="#B7B7B7" sx={{ fontSize: '13px', fontWeight: '600' }}>
              Login as Administrator
            </Link>
          </UIFlexSpaceBox>
        </Box>
      </UIFlexCenterBox>
    </UIFlexSpaceBox>
  );
}

export default AuthLogin;
