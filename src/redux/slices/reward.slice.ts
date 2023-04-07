import { AxiosError } from 'axios';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { rewardApi } from '@/redux/apis';
import { RootState, AppDispatch } from '@/redux/store';
import { ReduxJson, RewardType, ResponseStatus, CommonType } from '@/types';

const initialState: ReduxJson.RewardState = {
  loading: true,
  status: null,
  message: null,
  error: null,
  rewards: [],
  availableRewards: null,
  pageInfo: null,
};

export const filterRewardsByLocationId = createAsyncThunk<
  CommonType.Pagination<RewardType.DataList>,
  RewardType.FilterLocation,
  { dispatch: AppDispatch; state: RootState }
>(
  'rewards/filterRewardsByLocationId',
  async (filter: RewardType.FilterLocation, thunkAPI) => {
    try {
      return await rewardApi.getRewardsByLocationId(filter);
    } catch (error) {
      const err = error as AxiosError;
      return thunkAPI.rejectWithValue(err.response?.data);
    }
  }
);

export const filterRewards = createAsyncThunk<
  RewardType.Data[],
  RewardType.Filter,
  { dispatch: AppDispatch; state: RootState }
>('rewards/filterRewards', async (filter: RewardType.Filter, thunkAPI) => {
  try {
    return await rewardApi.filter(filter);
  } catch (error) {
    const err = error as AxiosError;
    return thunkAPI.rejectWithValue(err.response?.data);
  }
});

export const rewardSlice = createSlice({
  name: 'reward',
  initialState,
  reducers: {
    resetRewardMessage: (state: ReduxJson.RewardState, _payload) => {
      state.error = null;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(filterRewards.pending, (state) => {
        state.loading = true;
        state.status = ResponseStatus.PENDING;
        state.error = null;
        state.message = null;
      })
      .addCase(filterRewards.rejected, (state, { payload }) => {
        state.loading = false;
        state.status = ResponseStatus.FAILED;
        state.error = payload as string;
        state.message = null;
      })
      .addCase(
        filterRewards.fulfilled,
        (state, { payload }: PayloadAction<RewardType.Data[]>) => {
          state.loading = false;
          state.status = ResponseStatus.SUCCESS;
          state.rewards = payload;
        }
      )
      .addCase(filterRewardsByLocationId.pending, (state) => {
        state.loading = true;
        state.status = ResponseStatus.PENDING;
        state.error = null;
        state.message = null;
      })
      .addCase(filterRewardsByLocationId.rejected, (state, { payload }) => {
        state.loading = false;
        state.status = ResponseStatus.FAILED;
        state.error = payload as string;
        state.message = null;
      })
      .addCase(
        filterRewardsByLocationId.fulfilled,
        (
          state,
          { payload }: PayloadAction<CommonType.Pagination<RewardType.DataList>>
        ) => {
          state.loading = false;
          state.status = ResponseStatus.SUCCESS;
          state.availableRewards = payload.data?.[0];
        }
      );
  },
});

export const { resetRewardMessage } = rewardSlice.actions;

export const rewardSelector = (state: RootState) => state.reward;
export default rewardSlice.reducer;
