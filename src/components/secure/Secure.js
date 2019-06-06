import React from 'react';
import { useCookies } from 'react-cookie';

const Secure = ({ history, redirectTo, children }) => {
  const [cookies, _setCookie, removeCookie] = useCookies({});

  if (!cookies['esice-pr']) {
    history.replace(redirectTo);
  }

  return children;
};

export default Secure;
