import React from 'react';

const useLocation = (location) => {

  const search = location.search.slice(1);

  const parametersRaw = (search !== '' ? search.split('&') : []);

  const parameters = {}

  parametersRaw.forEach((parameterRaw) => {
    parameters[parameterRaw.split('=')[0]] = parameterRaw.split('=')[1];
  })

  return parameters;
}

export default useLocation;