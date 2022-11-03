import { UIContentWrapper, UIAuthContentWrapper } from './ui';
import { Toolbar, ContainerProps } from '@mui/material';

export const UIContainer = ({ children, ...rest }: ContainerProps) => {
  return (
    <UIContentWrapper maxWidth="xl" {...rest}>
      <Toolbar />
      {children}
    </UIContentWrapper>
  );
};

export const UIAuthContainer = ({ children, ...rest }: ContainerProps) => {
  return <UIAuthContentWrapper {...rest}>{children}</UIAuthContentWrapper>;
};
