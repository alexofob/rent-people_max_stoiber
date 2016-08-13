import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import SignUp from './index';


storiesOf('Account.SignUp', module)
  .add('default view', () => (
    <SignUp
      onFacebookSignUp={action('click the Facebook button')}
      onLoginClick={linkTo('Account.Login', 'default view')}
      handleSubmit={action('click the Submit button')}
      fields={{ firstname: { name: 'firstname' }, surname: { name: 'surname' },
        email: { name: 'email' }, password: { name: 'password' },
        dobDay: { name: 'dobDay' }, dobMonth: { name: 'dobMonth' }, dobYear: { name: 'dobYear' } }}
      submitting={false}
    />
  ))
  .add('submitting view', () => (
    <SignUp
      onFacebookSignUp={action('click the Facebook button')}
      onLoginClick={linkTo('Account.Login', 'default view')}
      handleSubmit={action('click the Submit button')}
      fields={{ firstname: { name: 'firstname' }, surname: { name: 'surname' },
        email: { name: 'email' }, password: { name: 'password' },
        dobDay: { name: 'dobDay' }, dobMonth: { name: 'dobMonth' }, dobYear: { name: 'dobYear' } }}
      submitting
    />
  ))
  .add('error view', () => (
    <SignUp
      onFacebookSignUp={action('click the Facebook button')}
      onLoginClick={linkTo('Account.Login', 'default view')}
      handleSubmit={action('click the Submit button')}
      fields={{ firstname: { name: 'firstname', touched: true, error: 'First Name cannot be empty' },
       surname: { name: 'surname', touched: true, error: 'Surname cannot be empty' },
        email: { name: 'email', touched: true, error: 'Email cannot be empty' },
        password: { name: 'password', touched: true, error: 'Password cannot be empty' },
        dobDay: { name: 'dobDay', touched: true, error: 'Day of Birthday cannot be empty' },
        dobMonth: { name: 'dobDay', touched: true, error: 'Month of Birthday cannot be empty' },
        dobYear: { name: 'dobDay', touched: true, error: 'Year of Birthday cannot be empty' } }}
      submitting={false}
    />
  ))
;
