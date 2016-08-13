/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { Box } from 'reflexbox';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { closeSnackbar } from './actions';

import {
  selectIsSnackbarOpened,
  selectSnackbarMessage,
} from 'containers/App/selectors';

// Import Components
import Snackbar from 'material-ui/Snackbar';
import Footer from './Footer';

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node,
    isSnackbarOpened: PropTypes.bool.isRequired,
    closeSnackbar: PropTypes.func.isRequired,
    snackbarMessage: PropTypes.string.isRequired,
  };

  render() {
    return (
      <Box flex>
        <Helmet
          titleTemplate="%s - Rent People"
          defaultTitle="Rent People"
          meta={[
            { name: 'description', content: 'Rent People application' },
          ]}
        />
        {this.props.children}
        <Footer />
        <Snackbar
          open={this.props.isSnackbarOpened}
          message={this.props.snackbarMessage}
          autoHideDuration={5000}
          onRequestClose={this.props.closeSnackbar}
        />
      </Box>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isSnackbarOpened: selectIsSnackbarOpened(),
  snackbarMessage: selectSnackbarMessage(),
});

const mapDispatchToProps = (dispatch) => (
  {
    closeSnackbar: () => {
      dispatch(closeSnackbar());
    },
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
