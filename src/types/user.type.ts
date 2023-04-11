import { CommonType } from './common.type';
import { AssetType } from './asset.type';
import { RoleType } from './role.type';
import { UserStatus } from '@/constants';

export declare namespace UserType {
  type User = {
    id: number;
    firstName?: string;
    lastName?: string;
    userName?: string;
    avatar?: AssetType.Asset;
    email?: string;
    phone: string;
    address?: CommonType.Address;
    birthday: string;
    status: UserStatus;
    role?: RoleType.Role;
    createdAt?: string;
    updatedAt?: string;
  };
}
export type UpdateUserParam = {
  userId: number;
  input: UserType.User;
  profileFile?: File;
};
