import { AxiosError } from 'axios';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResponseStatus } from '@/constants';
import { assetApi } from '@/redux/apis';
import { RootState, AppDispatch } from '@/redux/store';
import { AssetType, CreateAssetParams, ReduxJson } from '@/types';

// Initial state
const initialState: ReduxJson.AssetState = {
  loading: true,
  status: null,
  message: '',
  error: null,
  avatar: null,
};

export const createAsset = createAsyncThunk<
  AssetType.Asset,
  CreateAssetParams,
  { dispatch: AppDispatch; state: RootState }
>('asset/createAsset', async (params: CreateAssetParams, thunkAPI) => {
  try {
    return await assetApi.createAsset(params);
  } catch (error) {
    const err = error as AxiosError;
    return thunkAPI.rejectWithValue(err.response?.data);
  }
});

// Actual Slice
export const assetSlice = createSlice({
  name: 'asset',
  initialState,
  reducers: {
    clearAssetMessage: (
      state: ReduxJson.AssetState,
      _payload: PayloadAction<string>
    ) => {
      state.error = null;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createAsset.pending, (state) => {
        state.loading = true;
        state.status = ResponseStatus.PENDING;
        state.error = null;
        state.message = null;
      })
      .addCase(
        createAsset.fulfilled,
        (state, { payload }: PayloadAction<AssetType.Asset>) => {
          state.loading = false;
          state.status = ResponseStatus.SUCCESS;
          state.message = 'Asset Created';
          state.avatar = payload;
        }
      )
      .addCase(createAsset.rejected, (state, { payload }) => {
        state.loading = false;
        state.status = ResponseStatus.FAILED;
        state.error = payload as string;
        state.message = null;
      });
  },
});

export const { clearAssetMessage } = assetSlice.actions;

export const assetSelector = (state: RootState) => state.asset;

export default assetSlice.reducer;
