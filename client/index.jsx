import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import App from './app/index';
import Auth from './components/auth';

import throttleEvent from './_helpers/throttle-event';

const wrapper = document.getElementById("app-root");
if (wrapper) {
  throttleEvent("resize", "optimizedResize");

  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route path="/auth" component={Auth}/>
          <Route path="*" exact component={App}/>
        </div>
      </BrowserRouter>
    </Provider>,
    wrapper
  );
}
