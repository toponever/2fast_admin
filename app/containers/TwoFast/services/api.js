/* eslint-disable */
export const ADMIN_LOGIN = (data) => {
  return {
    method: 'post',
    url: 'http://www.2fast.online:5001/api/v2/login/admin',
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  };
};
