import { UserType } from './user.type';
import { RoleType } from './role.type';

export type RefreshTokenPrams = {
  refreshToken: string;
};

export type CustomerAuthParams = {
  identifier: string;
};

export type RegisterParams = {
  phone: string;
  email: string;
  birthday: string;
};

export type VerifyPhoneParams = {
  token: string;
};

export type CustomerAuthType = {
  message: string;
};

export type VerifyPhoneType = {
  user: UserType.User;
  role: RoleType.Role;
  accessToken: string;
  refreshToken: string;
};

export type RefreshTokenType = {
  accessToken: string;
};

export type RegisterType = {
  message: string;
};
