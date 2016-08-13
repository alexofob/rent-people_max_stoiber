import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Login from './index';


storiesOf('Account.Login', module)
  .add('default view', () => (
    <Login
      onFacebookLogin={action('click the Facebook button')}
      onResetPwdClick={linkTo('Account.ResetPwd', 'default view')}
      onSignUpClick={linkTo('Account.SignUp', 'default view')}
      handleSubmit={action('click the Submit button')}
      fields={{ email: { name: 'email' }, password: { name: 'password' } }}
      submitting={false}
    />
  ))
  .add('submitting view', () => (
    <Login
      onFacebookLogin={action('click the Facebook button')}
      onResetPwdClick={linkTo('Account.ResetPwd', 'default view')}
      onSignUpClick={linkTo('Account.SignUp', 'default view')}
      handleSubmit={action('click the Submit button')}
      fields={{ email: { name: 'email' }, password: { name: 'password' } }}
      submitting
    />
  ))
  .add('error view', () => (
    <Login
      onFacebookLogin={action('click the Facebook button')}
      onResetPwdClick={linkTo('Account.ResetPwd', 'default view')}
      onSignUpClick={linkTo('Account.SignUp', 'default view')}
      handleSubmit={action('click the Submit button')}
      fields={{ email: { name: 'email', touched: true, error: 'Email cannot be empty' },
           password: { name: 'password', touched: true, error: 'Password cannot be empty' } }}
      submitting={false}
    />
  ))
;
