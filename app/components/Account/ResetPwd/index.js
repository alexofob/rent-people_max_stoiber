import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Flex, Box } from 'reflexbox';

const ResetPwd = ({ handleSubmit, fields: { email }, submitting }) => (
  <Box col={4}>
    <Flex column>
      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          floatingLabelText="Email Address"
          fullWidth
          errorText={email.touched && email.error ? email.error : ''}
          {...email}
        /><br />
        <Box pt={2}>
          <RaisedButton
            type="submit"
            secondary
            label="SEND RESET LINK"
            disabled={submitting}
          />
        </Box>
      </form>
    </Flex>
  </Box>
);

ResetPwd.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  fields: PropTypes.object,
  submitting: PropTypes.bool,
};

export default ResetPwd;
