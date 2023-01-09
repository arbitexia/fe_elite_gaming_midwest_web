/**
 * Copyright (c) 2022, Red Vector, Inc.
 * All rights reserved
 */

/**
 * Author: Dan Finkel
 */
import { CustomerAuthParams, RegisterParams, VerifyPhoneParams } from '@/types';
import axios from 'axios';
import config from '@/config';

const baseUrl: string = config.API_URL || '';

const headers = {
  'Access-Control-Allow-Origin': config.API_URL || '',
  'Access-Control-Allow-Methods': 'GET,POST',
};

export const authorizeCustomer = async (params: CustomerAuthParams) => {
  console.log(params);
  console.log(headers);
  const response = await axios.post(
    `${baseUrl}/api/authorizeCustomer`,
    params,
    {
      headers,
    }
  );
  console.log(response);
  return response.data;
};

export const register = async (params: RegisterParams) => {
  const response = await axios.post(`${baseUrl}/api/register`, params, {
    headers,
  });
  return response.data;
};

export const verifyPhone = async (params: VerifyPhoneParams) => {
  const response = await axios.post(`${baseUrl}/api/verifyPhone`, params, {
    headers,
  });
  return response.data;
};
