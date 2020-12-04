import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import { AccountProvider } from '/imports/ui/contexts/account-context.js'

import Auth from '/imports/ui/components/account/auth.js'
import MainRoute from './routes'

export const App = () => (
  <div>
    <AccountProvider>
      <Auth />
      <h1>Welcome to Meteor!</h1>
      <Router>
        <MainRoute />
      </Router>
    </AccountProvider>
  </div>
);
