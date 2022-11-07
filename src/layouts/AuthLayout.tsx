import React from 'react';
import { AppSEO } from '@/components/App';
import { UIAuthLayoutWrapper, UIContainer } from '@/components/UI';

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
      <UIContainer sx={{ py: 3 }}>{props.children}</UIContainer>
    </UIAuthLayoutWrapper>
  );
};

export default AuthLayout;
