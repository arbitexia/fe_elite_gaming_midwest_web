import { useEffect, useState } from 'react';
import {
  authSelector,
  logoutUser,
  authorizeCustomer,
  register,
  verifyPhone,
  updateProfile,
  clearAuthMessage,
} from '@/redux/slices';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from './redux';
import { useAppToast } from '@/providers';
import { AuthCallbackStatus, ResponseStatus, UpdateUserParam } from '@/types';
export interface useAuthProps {
  handleAuthVerifySuccess?: () => void;
  handleAuthUserSuccess?: () => void;
  handleAuthRegisterSuccess?: () => void;
}

export const useAuth = ({
  handleAuthVerifySuccess,
  handleAuthUserSuccess,
  handleAuthRegisterSuccess,
}: useAuthProps) => {
  const appToast = useAppToast();
  const router = useRouter();
  const authState = useAppSelector(authSelector);
  const dispatch = useAppDispatch();

  const [callbackNo, setCallbackNo] = useState<AuthCallbackStatus>(
    AuthCallbackStatus.TABLET
  );

  useEffect(() => {
    if (authState.status === ResponseStatus.FAILED && authState.errorMessage) {
      appToast({ severity: 'error', message: authState.errorMessage });
      dispatch(clearAuthMessage(''));
    }
    if (authState.status === ResponseStatus.SUCCESS && authState.message) {
      appToast({ severity: 'success', message: authState.message });
      dispatch(clearAuthMessage(''));
      if (callbackNo == AuthCallbackStatus.VERIFY && handleAuthVerifySuccess)
        handleAuthVerifySuccess();
      if (callbackNo == AuthCallbackStatus.CUSTOMER && handleAuthUserSuccess)
        handleAuthUserSuccess();
      if (
        callbackNo == AuthCallbackStatus.REGISTER &&
        handleAuthRegisterSuccess
      )
        handleAuthRegisterSuccess();
    }
  }, [authState]);

  const onLogin = (identifier: string) => {
    setCallbackNo(AuthCallbackStatus.CUSTOMER);
    dispatch(authorizeCustomer({ identifier }));
  };

  const onVerifyPhone = (token: string) => {
    setCallbackNo(AuthCallbackStatus.VERIFY);
    dispatch(verifyPhone({ token }));
  };

  const onRegister = (phone: string, email: string, birthday: string) => {
    setCallbackNo(AuthCallbackStatus.REGISTER);
    dispatch(register({ phone, email, birthday }));
  };

  const onUpdateProfile = async (param: UpdateUserParam) => {
    await dispatch(updateProfile(param));
  };

  return {
    isAuthenticated: authState.accessToken ? true : false,
    accessToken: authState.accessToken,
    me: authState.user,
    onLogin,
    onRegister,
    onUpdateProfile,
    onVerifyPhone,
    onLogout: () => {
      dispatch(logoutUser());
      router.push('/auth?path=login');
    },
  };
};
