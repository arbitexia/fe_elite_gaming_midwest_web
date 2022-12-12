import { UIFlexCenterBox, UIImage } from '@/components//UI';
import { useRouter } from 'next/router';
import { Box } from '@mui/material';
import { StyledLogoText } from './ui';

const AuthLogo = () => {
  const router = useRouter();
  const handleHome = () => {
    router.push('/');
  };
  return (
    <UIFlexCenterBox flexDirection="column" width="50%">
      <Box onClick={handleHome} sx={{ cursor: 'pointer' }}>
        <UIImage src="images/icons/logo.svg" width={256} height={245} />
      </Box>
      <StyledLogoText>
        Maximizing Your Revenue by Providing the Most Detailed Reporting
      </StyledLogoText>
    </UIFlexCenterBox>
  );
};

export default AuthLogo;
