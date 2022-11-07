import { useRouter } from 'next/router';
import {
  UIFlexSpaceBox,
  UIDefaultTextField,
  UIContainer,
} from '@/components/UI';
import { Box } from '@mui/material';
import {
  StyledCheckInButton,
  StyledCheckInCard,
  StyledCheckInDescription,
  StyledCheckInTitle,
} from './ui';

const CheckInContent = () => {
  const router = useRouter();
  const handleVerify = () => {
    //TODO Send Phone number to be and fetch verification code
    router.push('/auth?path=verify&type=login');
  };
  const handleSignUp = () => {
    router.push('/auth?path=signup');
  };
  return (
    <UIContainer>
      <UIFlexSpaceBox
        sx={{
          width: '100%',
          height: '700px',
          p: '100px 165px',
        }}
      >
        <StyledCheckInCard sx={{ '*': { zIndex: 1 } }}>
          <Box>
            <StyledCheckInTitle>Check Your Point Balance</StyledCheckInTitle>
            <StyledCheckInDescription>
              Enter your 10 digit number and your points will be shown below.
            </StyledCheckInDescription>
          </Box>
          <UIDefaultTextField sx={{ mt: '35px' }} placeholder="Phone number" />
          <StyledCheckInButton onClick={handleVerify}>
            View points
          </StyledCheckInButton>
        </StyledCheckInCard>
        <StyledCheckInCard sx={{ '*': { zIndex: 1 } }}>
          <Box>
            <StyledCheckInTitle>Not a member yet?</StyledCheckInTitle>
            <StyledCheckInDescription>
              Register today by clicking the button below!
            </StyledCheckInDescription>
          </Box>
          <StyledCheckInButton onClick={handleSignUp}>
            Sign up now
          </StyledCheckInButton>
        </StyledCheckInCard>
      </UIFlexSpaceBox>
    </UIContainer>
  );
};

export default CheckInContent;
