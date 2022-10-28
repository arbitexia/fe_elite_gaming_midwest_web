import React from 'react';
import { AppSEO, AppNavbar } from '@/components/App';
import { UIAppLayoutWrapper, UIContainer } from '@/components/UI';

interface Props {
  bg?: string;
  title?: string;
  description?: string;
  children: React.ReactNode | React.ReactNode[];
}

const HomeLayout = (props: Props) => {
  return (
    <UIAppLayoutWrapper sx={{ background: props.bg }}>
      <AppSEO title={props.title || ''} description={props.description || ''} />
      <AppNavbar />
      <UIContainer sx={{ py: 3 }}>{props.children}</UIContainer>
    </UIAppLayoutWrapper>
  );
};

export default HomeLayout;
