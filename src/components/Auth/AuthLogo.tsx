import { UIFlexColumnBox, UIImage } from '../UI';
import { UITextBox } from './ui';

export const AuthLogo = () => {
  return (
    <UIFlexColumnBox>
      <UIImage src="images/icons/logo.svg" width={256} height={245} />
      <UITextBox>
        Maximizing Your Revenue by Providing the Most Detailed Reporting
      </UITextBox>
    </UIFlexColumnBox>
  );
};
