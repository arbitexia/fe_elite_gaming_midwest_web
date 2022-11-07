import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { UIFlexCenterBox, UIFlexSpaceBox } from '@/components/UI';
import { Box } from '@mui/material';
import {
  StyledTextFieldWrapper,
  StyledAuthButton,
  StyledLinkText,
  StyledTextBox,
  StyledCheckBox,
} from '@/modules/Auth/ui';
import { AuthLogo } from '@/modules/Auth';

function AuthSignup() {
  const [checked, setChecked] = useState(false);

  const router = useRouter();
  const handleSignup = () => {
    router.push('/auth?path=verify&type=signup');
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <UIFlexSpaceBox
      sx={{ flexWrap: 'wrap', width: '100%', minHeight: '100vh', gap: 0 }}
    >
      <AuthLogo />
      <UIFlexCenterBox sx={{ width: '50%' }}>
        <Box sx={{ width: '360px' }}>
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
            <StyledTextFieldWrapper placeholder="Enter phone number" />
          </Box>
          <Box
            justifyContent={'center'}
            flexDirection="row"
            display={'flex'}
            mb={2}
          >
            <StyledTextFieldWrapper placeholder="Email" />
          </Box>
          <Box
            justifyContent={'center'}
            flexDirection="row"
            display={'flex'}
            mb={2}
          >
            <StyledTextFieldWrapper placeholder="Birthday" />
          </Box>

          <UIFlexSpaceBox mt={4} sx={{ alignItems: 'flex-start' }}>
            <StyledCheckBox
              checked={checked}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
            />
            <StyledTextBox>
              By submitting this form, I confirm that I am at least 21 years of
              age, accept the{' '}
              <StyledLinkText>Terms and Conditions.</StyledLinkText>
            </StyledTextBox>
          </UIFlexSpaceBox>
          <StyledAuthButton onClick={handleSignup}>Submit</StyledAuthButton>
        </Box>
      </UIFlexCenterBox>
    </UIFlexSpaceBox>
  );
}

export default AuthSignup;
