import React from 'react';
import { AppSEO } from '@/components/App';
import { UIAppLayoutWrapper } from '@/components/UI';
import { styled, Container, Box } from '@mui/material';

interface Props {
  bg?: string;
  title?: string;
  description?: string;
  children: React.ReactNode | React.ReactNode[];
}
const UIAuthContentWrapper = styled(Container)(({ theme }) => ({
  padding: theme.spacing(0, 6),
  gap: theme.spacing(3),
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(6, 6),
  },
}));

const UIAuthBackgroundWrapper = styled(Box)(({ theme }) => ({
  backgroundImage: `url(/images/login/bg.png)`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  minHeight: '100vh',
}));

const AuthLayout = (props: Props) => {
  return (
    <UIAppLayoutWrapper sx={{ background: props.bg }}>
      <AppSEO title={props.title || ''} description={props.description || ''} />
      <UIAuthBackgroundWrapper>
        <UIAuthContentWrapper>{props.children}</UIAuthContentWrapper>
      </UIAuthBackgroundWrapper>
    </UIAppLayoutWrapper>
  );
};

export default AuthLayout;
