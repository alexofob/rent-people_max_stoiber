import React, { PropTypes } from 'react';
import accountStyles from '../styles.css';
import cssModules from 'react-css-modules';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import { Flex, Box } from 'reflexbox';
import FaFacebookOfficial from 'react-icons/lib/fa/facebook-official';
import ActionHelp from 'material-ui/svg-icons/action/help';
import ToolTip from 'react-portal-tooltip';
import SelectField from 'material-ui/SelectField';
import { days, months, years } from '../../../utils/date_menu';


const styles = {
  reduceSpace: {
    marginTop: -20,
  },
  dayWidth: {
    width: 100,
  },
  monthWidth: {
    width: 150,
  },
  yearWidth: {
    width: 100,
  },
};

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isTooltipActive: false,
    };
  }
  showTooltip = () => this.setState({ isTooltipActive: true });
  hideTooltip = () => this.setState({ isTooltipActive: false });
  render() {
    const { onFacebookSignUp, onLoginClick,
      fields: { firstname, surname, email, password, dobDay, dobMonth, dobYear },
      handleSubmit, submitting }
        = this.props;

    return (
      <Box col={5}>
        <Flex column>
          <RaisedButton
            primary
            label="Sign up with Facebook"
            fullWidth
            onTouchTap={onFacebookSignUp}
            icon={<FaFacebookOfficial />}
          />

          <div styleName="separator">
            <span>or</span>
          </div>

          <form onSubmit={handleSubmit}>

            <TextField
              name="firstname"
              floatingLabelText="First Name"
              fullWidth
              errorText={email.touched && email.error ? email.error : ''}
              {...firstname}
              style={styles.reduceSpace}
            /><br />

            <TextField
              name="surname"
              floatingLabelText="Surname (Optional)"
              fullWidth
              errorText={password.touched && password.error ? password.error : ''}
              {...surname}
              style={styles.reduceSpace}
            /><br />

            <TextField
              name="email"
              floatingLabelText="Email Address"
              fullWidth
              errorText={email.touched && email.error ? email.error : ''}
              {...email}
              style={styles.reduceSpace}
            /><br />

            <TextField
              name="password"
              floatingLabelText="Password"
              type="password"
              fullWidth
              errorText={password.touched && password.error ? password.error : ''}
              {...password}
              style={styles.reduceSpace}
            /><br />

            <Flex
              align="center"
            >
              <Box py={2}>Birthday</Box>
              <Box pl={1}>
                <p
                  id="text"
                  onMouseEnter={this.showTooltip}
                  onMouseLeave={this.hideTooltip}
                >
                  <ActionHelp className="tooltip" />
                </p>
                <ToolTip
                  active={this.state.isTooltipActive}
                  position="right"
                  arrow="center"
                  parent="#text"
                >
                  <div>
                    <small>
                      To sign up you must be 18 or older.<br />
                      Other people will not see your birthday.
                    </small>
                  </div>
                </ToolTip>
              </Box>
            </Flex>
            <Flex justify="space-between">
              <SelectField
                name="day"
                value={dobDay}
                onChange={this.handleChangeDay}
                floatingLabelText="Day"
                errorText={dobDay.touched && dobDay.error ? dobDay.error : ''}
                {...dobDay}
                style={{ ...styles.dayWidth, ...styles.reduceSpace }}
              >
                {days}
              </SelectField>
              <SelectField
                name="month"
                value={dobMonth}
                onChange={this.handleChangeMonth}
                floatingLabelText="Month"
                errorText={dobMonth.touched && dobMonth.error ? dobMonth.error : ''}
                {...dobMonth}
                style={{ ...styles.monthWidth, ...styles.reduceSpace }}
              >
                {months}
              </SelectField>
              <SelectField
                name="year"
                value={dobYear}
                onChange={this.handleChangeYear}
                floatingLabelText="Year"
                errorText={dobYear.touched && dobYear.error ? dobYear.error : ''}
                {...dobYear}
                style={{ ...styles.yearWidth, ...styles.reduceSpace }}
              >
                {years}
              </SelectField>
            </Flex>
            <Box py={dobYear.error || dobMonth.error || dobDay.error ? 2 : 0} />
            <Box py={2}>
              <p>
                <small>
                  By clicking Sign up, you agree to our <a href="#">Privacy Policy </a> and
                  <a href="#"> Terms of Use.</a>
                </small>
              </p>
            </Box>

            <RaisedButton
              type="submit"
              secondary
              fullWidth
              label="SIGN UP"
              disabled={submitting}
              style={{ width: '100%' }}
            />

            <Box py={2}>
              <Divider />
            </Box>
            <Flex
              align="center"
            >
              <Box auto>
                 If you already have an account,
              </Box>
              <Box>
                <FlatButton
                  secondary
                  label="Log in"
                  onClick={onLoginClick}
                />
              </Box>
            </Flex>
          </form>
        </Flex>
      </Box>
    );
  }
}

Signup.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onFacebookSignUp: PropTypes.func.isRequired,
  onLoginClick: PropTypes.func.isRequired,
  fields: PropTypes.object,
  submitting: PropTypes.bool,
};

export default cssModules(Signup, accountStyles);
