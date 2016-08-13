import { configure, addDecorator } from '@kadira/storybook';
import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './style.css';


addDecorator((story) => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    {story()}
  </MuiThemeProvider>
));

function loadStories() {
  require('../app/stories');   // eslint-disable-line global-require
  // require as many stories as you need.
}

configure(loadStories, module);
