import { create } from "zustand";

export type Auth = {
  authStatus: boolean;
  paymentStatus: boolean;
};

interface AuthProps {
  authData: Auth;
  paymentStatus: Auth;
}

const initialState: AuthProps = {
  authData: true,
  paymentStatus: false,
};

export const useAuthStore = create<AuthProps>(() => ({
  ...initialState,
}));

export function getAuthData() {
  return useAuthStore((s) => s?.authData);
}
export function getPaymentData() {
  return useAuthStore((s) => s?.paymentStatus);
}
