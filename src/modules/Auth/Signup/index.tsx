import React, { useState } from 'react';
import { UIFlexSpaceBox } from '@/components/UI';
import { Box } from '@mui/material';
import {
  UITextFieldWrapper,
  UIAuthButton,
  UILinkText,
  UITextBox,
  UICheckBox,
} from '@/modules/Auth/ui';

import { AuthLogo } from '@/components/Auth';

function AuthSignup() {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <UIFlexSpaceBox
      sx={{
        flexWrap: 'wrap',
        width: '100%',
        minHeight: '100vh',
      }}
      maxWidth="lg"
    >
      <AuthLogo />
      <Box sx={{ width: '100%', maxWidth: 360 }}>
        <Box
          component={'h1'}
          textAlign="center"
          sx={{ color: '#D0E4E3', fontSize: '64px' }}
        >
          Sign up
        </Box>
        <Box
          justifyContent={'center'}
          flexDirection="row"
          display={'flex'}
          mb={2}
        >
          <UITextFieldWrapper placeholder="Enter phone number" />
        </Box>
        <Box
          justifyContent={'center'}
          flexDirection="row"
          display={'flex'}
          mb={2}
        >
          <UITextFieldWrapper placeholder="Email" />
        </Box>
        <Box
          justifyContent={'center'}
          flexDirection="row"
          display={'flex'}
          mb={2}
        >
          <UITextFieldWrapper placeholder="Birthday" />
        </Box>

        <UIFlexSpaceBox mt={4} sx={{ alignItems: 'flex-start' }}>
          <UICheckBox
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
          <UITextBox>
            By submitting this form, I confirm that I am at least 21 years of
            age, accept the <UILinkText>Terms and Conditions.</UILinkText>
          </UITextBox>
        </UIFlexSpaceBox>
        <UIAuthButton>Submit</UIAuthButton>
      </Box>
    </UIFlexSpaceBox>
  );
}

export default AuthSignup;
