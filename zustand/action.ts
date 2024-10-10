import { useAuthStore } from "./store";

const { setState } = useAuthStore;

export const changeAuthStatus = async (value: any) => {
  setState(() => ({
    authData: value,
  }));
};
export const changePaymentStatus = async (value: any) => {
  setState(() => ({
    paymentStatus: value,
  }));
};
