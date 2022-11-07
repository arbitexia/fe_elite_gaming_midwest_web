import { ReactNode } from 'react';
// import { useRouter } from 'next/router';
import { UIAppLayoutWrapper } from '@/components/UI';
import { Box } from '@mui/material';
import { AppSEO, AppToolbar, AppNavbar, AppFooter } from '@/components/App';
// import { useAuth } from '@/hooks';

interface Props {
  title: string;
  children: ReactNode | ReactNode[];
}

function DashboardLayout(props: Props) {
  // const router = useRouter();
  // const { isAuthenticated } = useAuth();
  // if (!isAuthenticated) router.push('/');
  return (
    <UIAppLayoutWrapper>
      <Box
        sx={{
          minHeight: '100vh',
          background: 'url("../images/Stars.png"), #000000',
        }}
      >
        <AppSEO title={props.title} description="" />
        <AppNavbar />
        <AppToolbar />
        {props.children}
        <AppFooter />
      </Box>
    </UIAppLayoutWrapper>
  );
}

export default DashboardLayout;
