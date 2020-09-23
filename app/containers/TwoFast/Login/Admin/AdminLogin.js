/* eslint-disable */
import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import { AdminLoginStyle } from './AdminLoginStyle';
import Logo from '../../../../api/images/2fast.png';
// import NoksoftLogo from '../../../../api/images/NOKSOFT.png';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

import { Controller, useForm } from 'react-hook-form';

const AdminLogin = () => {
  const classes = AdminLoginStyle();
  const { register, errors, control, handleSubmit } = useForm();
  return (
    <div>
      <div className={classes.page}>
        <div className={classes.content}>
          <div className={classes.imgBox}>
            <img src={Logo} className={classes.logo} />
          </div>
          <div className={classes.actionContent}>
            <form
              onSubmit={handleSubmit((data) => {
                console.log(data);
              })}
              className={classes.form}
            >
              <FormControl className={classes.formControl}>
                <InputLabel required>Username</InputLabel>
                <Controller
                  as={Input}
                  name="username"
                  control={control}
                  rules={{
                    required: true,
                    pattern: {
                      value: /^[A-Za-z0-9][A-Za-z0-9]*$/i,
                      message: 'invalid type',
                    },
                  }}
                />
                <span className={classes.errorMessage}>
                  {errors.username &&
                    errors.username.type === 'required' &&
                    'Username is required'}
                  {errors.username &&
                    errors.username.type === 'pattern' &&
                    'Invalid type'}
                </span>
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel required>Password</InputLabel>
                <Controller
                  as={Input}
                  control={control}
                  name="password"
                  type="password"
                  rules={{
                    required: true,
                  }}
                />
                <span className={classes.errorMessage}>
                  {errors.password &&
                    errors.password.type === 'required' &&
                    'Password is required'}
                </span>
              </FormControl>
              <div className={classes.buttonBox}>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.actionButton}
                  type="submit"
                  size="large"
                >
                  Log in
                </Button>
              </div>
            </form>
          </div>
          {/* <div className={classes.CompanyLogoBox}>
            <img src={NoksoftLogo} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
