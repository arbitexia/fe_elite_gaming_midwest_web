/**
 * Copyright (c) 2022, Red Vector, Inc.
 * All rights reserved
 */

/**
 * Author: Dan Finkel
 */
import {
  CustomerAuthParams,
  RegisterParams,
  VerifyPhoneParams,
  RefreshTokenPrams,
  UpdateUserParam,
} from '@/types';
import axios from 'axios';
import config from '@/config';
import { getAuthorizeHeader, getHeader } from '@/libs/data-helper';
import { jwtAxios } from './axios.api';

const baseUrl: string = config.API_URL || '';
const headers = getHeader();

export const refreshToken = async (params: RefreshTokenPrams) => {
  const response = await axios.post(`${baseUrl}/api/refresh`, params, headers);
  return response.data;
};

export const authorizeCustomer = async (params: CustomerAuthParams) => {
  const response = await axios.post(
    `${baseUrl}/api/authorize_customer`,
    params,
    headers
  );
  return response.data;
};

export const register = async (params: RegisterParams) => {
  const response = await axios.post(`${baseUrl}/api/register`, params, headers);
  return response.data;
};

export const verifyPhone = async (params: VerifyPhoneParams) => {
  const response = await axios.post(
    `${baseUrl}/api/verify_phone`,
    params,
    headers
  );
  return response.data;
};

export const updateUser = async (params: UpdateUserParam) => {
  const response = await jwtAxios.put(`/users`, params, {
    headers: getAuthorizeHeader(),
  });
  return response.data;
};
