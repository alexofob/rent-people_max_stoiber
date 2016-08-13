import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import ResetPwd from './index';


storiesOf('Account.ResetPwd', module)
  .add('default view', () => (
    <ResetPwd
      handleSubmit={action('click the Submit button')}
      fields={{ email: { name: 'email' } }}
      submitting={false}
    />
  ))
  .add('submitting view', () => (
    <ResetPwd
      handleSubmit={action('click the Submit button')}
      fields={{ email: { name: 'email' } }}
      submitting
    />
  ))
  .add('error view', () => (
    <ResetPwd
      handleSubmit={action('click the Submit button')}
      fields={{ email: { name: 'email', touched: true, error: 'Email cannot be empty' } }}
      submitting={false}
    />
  ));
