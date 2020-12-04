import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import { AccountProvider } from '/imports/ui/contexts/account-context.js'
import { MyThemeProvider } from '/imports/ui/contexts/theme-context.js'

import DefaultLayout from '/imports/ui/layouts/default.js'
import SingleLayout from '/imports/ui/layouts/single.js'

import MainRoute from './routes'

export const App = () => {
  const layout = 'default'
  return (
    <div>
      <MyThemeProvider>
        <AccountProvider>
          {layout === 'default' ? (
            <DefaultLayout>
              <Router>
                <MainRoute />
              </Router>
            </DefaultLayout>
          ) : (
            <SingleLayout>
              <Router>
                <MainRoute />
              </Router>
            </SingleLayout>
          )}
        </AccountProvider>
      </MyThemeProvider>
    </div>
  );
}
