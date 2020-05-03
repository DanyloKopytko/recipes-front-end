import React from 'react';
import { Route } from 'react-router-dom';

export const PublicRoute = ({
  component: Component,
  ...rest
}) => (
    <Route {...rest} component={(props) => (
        <React.Fragment>
         <div className="bodyComponent">
          <Component {...props} />
         </div>
      </React.Fragment>
    )} />
  );

export default PublicRoute