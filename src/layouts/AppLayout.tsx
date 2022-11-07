import React from 'react';
import { AppSEO, AppNavbar, AppToolbar } from '@/components/App';
import { UIAppLayoutWrapper, UIContainer } from '@/components/UI';

interface Props {
  bg?: string;
  title?: string;
  description?: string;
  children: React.ReactNode | React.ReactNode[];
}

const AppLayout = (props: Props) => {
  return (
    <UIAppLayoutWrapper sx={{ background: props.bg }}>
      <AppSEO title={props.title || ''} description={props.description || ''} />
      <AppNavbar />
      <UIContainer sx={{ py: 3 }}>
        <AppToolbar />
        {props.children}
      </UIContainer>
    </UIAppLayoutWrapper>
  );
};

export default AppLayout;
