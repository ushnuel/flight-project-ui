import React from 'react';

const handleResponse = (errorResponse) => {
  let response = null;
  if (errorResponse) {
    response = <div className='tm-error-class'>{errorResponse.error}</div>;
    return response;
  }
};

export default handleResponse;
