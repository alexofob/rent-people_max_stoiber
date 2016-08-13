import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import AuthenticatedMenu from './index';


storiesOf('HomeNavBar.AuthMenu', module)
  .add('default view', () => (
    <AuthenticatedMenu
      onLogout={action('click the Logout button')}
    />
  ));
