import { styled, Box } from '@mui/material';
import { UIFlexColumnBox, UIImage } from '../UI';

export const TextBox = styled(Box)(({ theme }) => ({
  color: '#fff',
  fontWeight: 700,
  fontSize: 20,
  textAlign: 'center',
  maxWidth: 400,
  width: '100%',
  marginTop: '40px',
}));

export const AuthLogo = () => {
  return (
    <UIFlexColumnBox>
      <UIImage src="images/icons/logo.svg" width={256} height={245} />
      <TextBox>
        Maximizing Your Revenue by Providing the Most Detailed Reporting
      </TextBox>
    </UIFlexColumnBox>
  );
};
