import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import { AccountProvider } from '/imports/ui/contexts/account-context.js'
import { MyThemeProvider } from '/imports/ui/contexts/theme-context.js'
import { LayoutProvider } from '/imports/ui/contexts/layout-context.js'
import ErrorBoundary from '/imports/ui/error-boundary'

import MainRoute from './routes'

export const App = () => {
  const layout = 'default'
  return (
    <Router>
      <ErrorBoundary>
        <MyThemeProvider>
          <AccountProvider>
            <LayoutProvider layout={layout}>
              <ErrorBoundary>
                <MainRoute />
              </ErrorBoundary>
            </LayoutProvider>
          </AccountProvider>
        </MyThemeProvider>
      </ErrorBoundary>
    </Router>
  );
}
