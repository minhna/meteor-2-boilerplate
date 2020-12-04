import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import MainRoute from './routes'

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <Router>
      <MainRoute />
    </Router>
  </div>
);
