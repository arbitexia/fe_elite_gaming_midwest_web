import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { AuthLayout } from '@/layouts';
import { UIFlexCenterBox } from '@/components/UI';
import {
  AuthLoginModule,
  AuthSignupModule,
  AuthVerifyModule,
} from '@/modules/Auth';
import { Typography, Box } from '@mui/material';

const AuthPage = () => {
  const router = useRouter();
  const [currModule, setCurrModule] = useState<number>();

  useEffect(() => {
    const { path } = router.query;
    if (!path) router.push('/404');

    switch (path) {
      case 'login':
        setCurrModule(0);
        break;
      case 'signup':
        setCurrModule(1);
        break;
      case 'verify':
        setCurrModule(2);
        break;
      default:
        router.push('/404');
        break;
    }
  }, [router.query]);

  return (
    <AuthLayout>
      <UIFlexCenterBox>
        {currModule === 0 && <AuthLoginModule />}
        {currModule === 1 && <AuthSignupModule />}
        {currModule === 2 && <AuthVerifyModule />}
        <Box>
          <Typography component="a" href="/">
            Click here to back to home
          </Typography>
        </Box>
      </UIFlexCenterBox>
    </AuthLayout>
  );
};

export default AuthPage;
