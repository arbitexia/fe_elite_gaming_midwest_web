import { useEffect } from 'react';
import { PayloadAction } from '@reduxjs/toolkit';
import { Assets, ResponseStatus } from '@/constants';
import { assetApi } from '@/redux/apis';
import { assetSelector, clearAssetMessage, createAsset } from '@/redux/slices';
import { useAppToast } from '@/providers';
import { AssetType, PresignedPostType } from '@/types';
import { useAppDispatch, useAppSelector } from './redux';

export const useAsset = () => {
  const appToast = useAppToast();
  const { message, error, loading, avatar, status } =
    useAppSelector(assetSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (loading) return;
    error && appToast({ severity: 'error', message: error });
    if (status === ResponseStatus.SUCCESS && message) {
      appToast({ severity: 'success', message: message });
      dispatch(clearAssetMessage(''));
    }
  }, [loading]);

  const uploadImageS3 = async (file: File) => {
    const presignedPostData: PresignedPostType =
      await assetApi.createUploadForm({
        fileName: file.name,
      });
    const url = `${presignedPostData.url}/${presignedPostData.fields.key}`;
    const formData = new FormData();
    Object.keys(presignedPostData.fields).forEach((key) => {
      formData.append(key, presignedPostData.fields[key]);
    });

    formData.append('file', file);
    await assetApi.uploadForm(presignedPostData.url, formData);
    return url;
  };

  const onCreateAsset = async (file: File): Promise<AssetType.Asset> => {
    const url = await uploadImageS3(file);
    const assetData: PayloadAction<unknown> = await dispatch(
      createAsset({
        input: {
          desc: '',
          name: file.name,
          type: Assets.IMAGE,
          url,
        },
      })
    );
    return assetData.payload as AssetType.Asset;
  };

  return {
    avatar,
    onCreateAsset,
  };
};
