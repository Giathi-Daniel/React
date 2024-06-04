import React from "react";
import {ClipLoader} from 'react-spinner'

const override = {
    display: 'block',
    margin: '100px auto'
}

const Spinner = () => {
  return (
    <ClipLoader
      color="#4338ca"
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
};

export default Spinner;
