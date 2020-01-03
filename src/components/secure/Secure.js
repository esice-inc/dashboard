import React from 'react';
import { useCookies } from 'react-cookie';

const Secure = ({ history, redirectTo, content }) => {
  const [cookies, _setCookie, removeCookie] = useCookies({});

  if (!cookies['esice-pr'] && redirectTo) {
    history.replace(redirectTo);
  }

  return content({ history, user: cookies['esice-pr'] });
};

export default Secure;
