/* eslint-disable */
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button';

const DetailEx = (props) => {
  const history = useHistory();

  useEffect(() => {
    console.log(props)
    console.log(history);
  }, [history]);

  return (
    <div>
      <div>DetailEx</div>
    </div>
  );
};

export default DetailEx;
