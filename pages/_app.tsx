import "@/styles/globals.css";

import { getAuthData, getPaymentData } from "@/zustand/store";
import type { AppProps } from "next/app";
import Login from "./login";
import Header from "./header";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const auth = getAuthData();
  const router = useRouter();
  const paymentStatus = getPaymentData();

  useEffect(() => {
    if (paymentStatus === false) {
      router.push("/payment");
    }
  }, [paymentStatus, router]);

  return (
    <div>
      <div className="flex justify-center items-center flex-col ">
        <Header />
        <Component {...pageProps} />
        {auth && <Login />}
      </div>
    </div>
  );
}
