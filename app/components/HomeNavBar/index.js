/**
*
* HomeNavBar
*
*/

import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import HomeNavBarStyles from './styles.css';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import Dialog from 'material-ui/Dialog';
import MdMenu from 'react-icons/lib/md/menu';

import AuthNav from './AuthNav';
import PublicNav from './PublicNav';
import MobilePublicNav from './MobilePublicNav';
import MobileAuthNav from './MobileAuthNav';

import Login from '../../containers/Account/Login';
import SignUp from '../../containers/Account/Signup';
import ResetPwd from '../../containers/Account/ResetPwd';


const styles = {
  menuIcon: {
    marginRight: 25,
    marginLeft: -25,
    display: 'none',
  },
  dialogContent: {
    width: '90%',
    maxWidth: 320,
    display: 'flex',
    flexDirection: 'column',
  },
};

const arrDialogContent = {
  login: { node: <Login />, title: 'Log In' },
  signup: { node: <SignUp />, title: 'Sign Up' },
  resetPwd: { node: <ResetPwd />, title: 'Reset Password' },
};

const HomeNavBar = (toggleLeftNav, userExists, handleLogout, firstName,
showLoginDialog, isLeftNavOpened, closeLeftNav, dialogContent,
isDialogOpened, closeDialog) => (
  <div>
    <Toolbar>
      <ToolbarGroup float="left">
        <MdMenu
          styleName="mobile-only"
          style={styles.menuIcon}
          onClick={toggleLeftNav}
        />
        <a styleName="brand" href="/">
          <ToolbarTitle text="Rent People" />
        </a>
      </ToolbarGroup>
      <ToolbarGroup styleName="desktop-only" lastChild float="right">
        {userExists ?
          <AuthNav
            onLogout={handleLogout}
            firstName={firstName}
          /> :
          <PublicNav showLoginDialog={showLoginDialog} />}
        <FlatButton label="Services" />
        <RaisedButton label="List your house" primary />
      </ToolbarGroup>
    </Toolbar>

    <Drawer
      docked={false}
      width={250}
      open={isLeftNavOpened}
      onRequestChange={closeLeftNav}
    >
      {userExists ?
        <MobileAuthNav
          onLogout={handleLogout}
          firstName={firstName}
        /> :
        <MobilePublicNav showLoginDialog={showLoginDialog} />}
    </Drawer>

    <Dialog
      title={arrDialogContent[dialogContent].title}
      modal={false}
      open={isDialogOpened}
      onRequestClose={closeDialog}
      contentStyle={styles.dialogContent}
      autoScrollBodyContent
    >
      {arrDialogContent[dialogContent].node}
    </Dialog>

  </div>
);

HomeNavBar.propTypes = {
  toggleLeftNav: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  showLoginDialog: PropTypes.func.isRequired,
  closeLeftNav: PropTypes.func.isRequired,
  closeDialog: PropTypes.func.isRequired,
  userExists: PropTypes.bool.isRequired,
  firstName: PropTypes.string.isRequired,
  isLeftNavOpened: PropTypes.bool.isRequired,
  dialogContent: PropTypes.string.isRequired,
  isDialogOpened: PropTypes.bool.isRequired,
};

export default cssModules(HomeNavBar, HomeNavBarStyles);
