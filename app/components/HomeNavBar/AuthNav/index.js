import React, { PropTypes } from 'react';
import Popover from 'material-ui/Popover';
import FlatButton from 'material-ui/FlatButton';
import MdPerson from 'react-icons/lib/md/person';
import MdArrowDropDown from 'react-icons/lib/md/arrow-drop-down';
import AuthMenu from '../AuthMenu';

class AuthNav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    const { firstName, handleLogout } = this.props;
    return (
      <div>
        <MdPerson />
        <FlatButton
          onClick={this.handleTouchTap}
          label={firstName}
          labelPosition="before"
          icon={<MdArrowDropDown />}
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          onRequestClose={this.handleRequestClose}
          autoCloseWhenOffScreen
        >
          <AuthMenu
            logout={handleLogout}
          />
        </Popover>
      </div>
      );
  }
}


AuthNav.propTypes = {
  firstName: PropTypes.string.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default AuthNav;
