import React from 'react';
import { AppSEO, AppNavbar, AppFooter, AppToolbar } from '@/components/App';
import { UIAppLayoutWrapper } from '@/components/UI';

interface Props {
  bg?: string;
  title?: string;
  description?: string;
  children: React.ReactNode | React.ReactNode[];
}

const HomeLayout = (props: Props) => {
  return (
    <UIAppLayoutWrapper sx={{ background: props.bg, minHeight: '100vh' }}>
      <AppSEO title={props.title || ''} description={props.description || ''} />
      <AppNavbar />
      {/* <UIContainer sx={{ py: 3 }}> */}
      <AppToolbar />
      {props.children}
      {/* </UIContainer> */}
      <AppFooter />
    </UIAppLayoutWrapper>
  );
};

export default HomeLayout;
