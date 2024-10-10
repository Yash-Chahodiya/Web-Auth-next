import { changeAuthStatus } from "@/zustand/action";
import { getPaymentData } from "@/zustand/store";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Dashboard = () => {
  const router = useRouter();
  const paymentStatus: any = getPaymentData();

  useEffect(() => {
    if (paymentStatus === false) {
      router.push("/payment");
    }
  }, [paymentStatus, router]);

  const handleLogout = () => {
    changeAuthStatus(true);
    router.push("/");
  };

  return (
    <div className="h-[86.5vh] flex  justify-center items-center flex-col gap-5">
      <div className="text-3xl">Dashboard</div>
      <button
        onClick={handleLogout}
        className="border-2 border-white p-3 hover:bg-stone-800"
      >
        Log Out
      </button>
    </div>
  );
};

export default Dashboard;
