import { changePaymentStatus } from "@/zustand/action";
import { getPaymentData } from "@/zustand/store";
import { useRouter } from "next/navigation";
import React from "react";

const Payment = () => {
  const payment = getPaymentData();
  const router = useRouter();

  const changeStatus = () => {
    changePaymentStatus(true);
    router.push("/dashboard");
  };

  return (
    <div className="h-[86.5vh] flex  justify-center items-center flex-col gap-5">
      <div className="text-3xl relative w-full text-left text-sky-900 transition-colors duration-300 ease-in-out group-hover:text-white">
        For Use first pay
      </div>
      <div></div>
      {payment ? (
        "Payment Successful"
      ) : (
        <button
          onClick={changeStatus}
          className="btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-indigo-100 rounded hover:bg-white group py-1.5 px-2.5"
        >
          <span className="w-56 h-52 rounded bg-sky-900 absolute top-0 right-0 translate-y-full ease-out duration-500 transition-all translate-x-full mb-9 ml-9 group-hover:mt-0 group-hover:mr-32 group-hover:translate-y-0"></span>
          <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">
            Pay Here
          </span>
        </button>
      )}
    </div>
  );
};

export default Payment;
