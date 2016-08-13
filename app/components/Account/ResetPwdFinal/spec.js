import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import ResetPwdFinal from './index';


storiesOf('Account.ResetPwdFinal', module)
  .add('default view', () => (
    <ResetPwdFinal
      handleSubmit={action('click the Submit button')}
      fields={{ password: { name: 'password' }, confirmPassword: { name: 'confirmPassword' } }}
      submitting={false}
    />
  ))
  .add('submitting view', () => (
    <ResetPwdFinal
      handleSubmit={action('click the Submit button')}
      fields={{ password: { name: 'password' }, confirmPassword: { name: 'confirmPassword' } }}
      submitting
    />
  ))
  .add('error view', () => (
    <ResetPwdFinal
      handleSubmit={action('click the Submit button')}
      fields={{
        password: { name: 'password', touched: true, error: 'Password cannot be empty' },
        confirmPassword: { name: 'confirmPassword', touched: true, error: 'Confirm Password field cannot be empty' },
      }}
      submitting={false}
    />
  ));
