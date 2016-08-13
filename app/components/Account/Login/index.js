import React, { PropTypes } from 'react';
import accountStyles from '../styles.css';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import { Flex, Box } from 'reflexbox';
import FaFacebookOfficial from 'react-icons/lib/fa/facebook-official';


const Login = ({ onFacebookLogin, onResetPwdClick, onSignUpClick,
  fields: { email, password }, handleSubmit, submitting }) => (
  <Box col={4}>
    <Flex column>
      <RaisedButton
        primary
        label="Log in with Facebook"
        fullWidth
        onTouchTap={onFacebookLogin}
        icon={<FaFacebookOfficial />}
      />

      <div className={accountStyles.separator}>
        <span>or</span>
      </div>

      <form onSubmit={handleSubmit}>

        <TextField
          name="email"
          floatingLabelText="Email Address"
          fullWidth
          errorText={email.touched && email.error ? email.error : ''}
          {...email}
        /><br />

        <TextField
          name="password"
          floatingLabelText="Password"
          type="password"
          fullWidth
          errorText={password.touched && password.error ? password.error : ''}
          {...password}
        /><br />

        <Flex
          pt={2}
          align="center"
          justify="space-between"
        >
          <Box auto>
            <RaisedButton
              type="submit"
              secondary
              label="LOG IN"
              disabled={submitting}
            />
          </Box>
          <Box >
            <a href="#" onClick={onResetPwdClick}>
              <small> Forgot Password?</small>
            </a>
          </Box>
        </Flex>
        <Box py={2}>
          <Divider />
        </Box>
        <Flex
          align="center"
          justify="space-between"
        >
          <Box
            auto
          >
            Don't have an account?
          </Box>
          <Box>
            <FlatButton
              secondary
              label="Sign up"
              onClick={onSignUpClick}
            />
          </Box>
        </Flex>
      </form>
    </Flex>
  </Box>
);

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onFacebookLogin: PropTypes.func.isRequired,
  onResetPwdClick: PropTypes.func.isRequired,
  onSignUpClick: PropTypes.func.isRequired,
  fields: PropTypes.object,
  submitting: PropTypes.bool,
};

export default Login;
