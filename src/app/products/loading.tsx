"use client";

import { ThreeDots } from "react-loader-spinner";

const LoadingProducts = () => {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#4fa94d"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      visible={true}
    />
  );
};

export default LoadingProducts;
