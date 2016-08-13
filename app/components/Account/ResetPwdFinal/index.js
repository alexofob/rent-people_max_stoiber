import React, { PropTypes } from 'react';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import styles from './styles.css';

const ResetPwdFinal = ({ handleSubmit, fields: { password, confirmPassword }, submitting }) => (
  <form onSubmit={handleSubmit}>
    <Card style={styles.card}>
      <CardTitle title="Reset Password" />
      <CardText>
        <TextField
          name="password"
          floatingLabelText="Password"
          type="password"
          fullWidth
          errorText={password.touched && password.error ? password.error : ''}
          {...password}
        /><br />
        <TextField
          name="confirmPassword"
          floatingLabelText="Confirm Password"
          type="password"
          fullWidth
          errorText={confirmPassword.touched && confirmPassword.error ? confirmPassword.error : ''}
          {...password}
        /><br />
      </CardText>
      <CardActions>
        <FlatButton
          type="submit"
          secondary
          label="RESET PASSWORD"
          disabled={submitting}
        />
      </CardActions>
    </Card>
  </form>
);

ResetPwdFinal.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  fields: PropTypes.object,
  submitting: PropTypes.bool,
};

export default ResetPwdFinal;
