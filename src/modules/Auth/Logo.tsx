import { UIFlexCenterBox, UIImage } from '@/components//UI';
import { StyledLogoText } from './ui';

const AuthLogo = () => {
  return (
    <UIFlexCenterBox flexDirection="column" width="50%">
      <UIImage src="images/icons/logo.svg" width={256} height={245} />
      <StyledLogoText>
        Maximizing Your Revenue by Providing the Most Detailed Reporting
      </StyledLogoText>
    </UIFlexCenterBox>
  );
};

export default AuthLogo;
