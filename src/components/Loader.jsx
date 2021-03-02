import React from 'react';
import DefaultLoader from "react-loader-spinner";

const Loader = () => {
  return (
    <DefaultLoader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
  );
};

export default Loader;
