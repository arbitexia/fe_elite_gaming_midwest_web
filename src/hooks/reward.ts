import { useEffect } from 'react';
import { PayloadAction } from '@reduxjs/toolkit';
import { useAppToast } from '@/providers';
import {
  rewardSelector,
  filterRewards,
  filterRewardsByLocationId,
  resetRewardMessage,
} from '@/redux/slices';
import { RewardType } from '@/types';
import { useAppSelector, useAppDispatch } from './redux';

export const useReward = () => {
  const appToast = useAppToast();
  const { loading, message, error, rewards, pageInfo, availableRewards } =
    useAppSelector(rewardSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (loading) return;
    if (message) appToast({ severity: 'success', message: message });
    if (error) appToast({ severity: 'error', message: error });
    dispatch(resetRewardMessage(null));
  }, [loading]);

  const onFilterRewards = async (
    filter: RewardType.Filter
  ): Promise<RewardType.Data[]> => {
    const { payload } = (await dispatch(
      filterRewards(filter)
    )) as PayloadAction<RewardType.Data[]>;

    return payload;
  };

  const onFilterRewardsByLocationId = async (
    filter: RewardType.FilterLocation
  ): Promise<RewardType.DataList> => {
    const { payload } = (await dispatch(
      filterRewardsByLocationId(filter)
    )) as PayloadAction<RewardType.DataList>;

    return payload;
  };

  return {
    loading,
    pageInfo,
    rewards,
    availableRewards,
    onFilterRewards,
    onFilterRewardsByLocationId,
  };
};
