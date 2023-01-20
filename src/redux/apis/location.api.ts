/**
 * Copyright (c) 2022, Red Vector, Inc.
 * All rights reserved
 */

/**
 * Author: Daniel Pit
 */
import { jwtAxios } from './axios.api';
import { getAuthorizeHeader } from '@/libs/data-helper';
import { GetLocationsParam, GetLocationParam } from '@/types';

export const getLocations = async (params: GetLocationsParam) => {
  const response = await jwtAxios.post(`/locations`, {
    params,
    headers: getAuthorizeHeader(),
  });
  return response.data;
};

export const getLocation = async (params: GetLocationParam) => {
  const response = await jwtAxios.post(`/location/${params.locationId}`, {
    headers: getAuthorizeHeader(),
  });
  return response.data;
};
