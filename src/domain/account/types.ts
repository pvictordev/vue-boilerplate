export interface AccountGenericData {
  logged_in: boolean;
  is_admin: boolean;
}

export interface AccountState {
  accountGenericData: AccountGenericData;
}

export interface LoginResponse {
  success: boolean;
  data?: AccountGenericData;
}
