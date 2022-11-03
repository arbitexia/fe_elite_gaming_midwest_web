import React from 'react';
import { AppSEO } from '@/components/App';
import { UIAuthContainer, UIAuthLayoutWrapper } from '@/components/UI';

interface Props {
  bg?: string;
  title?: string;
  description?: string;
  children: React.ReactNode | React.ReactNode[];
}

const AuthLayout = (props: Props) => {
  return (
    <UIAuthLayoutWrapper sx={{ background: props.bg }}>
      <AppSEO title={props.title || ''} description={props.description || ''} />
      <UIAuthContainer>{props.children}</UIAuthContainer>
    </UIAuthLayoutWrapper>
  );
};

export default AuthLayout;
