import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux';
import Loading from './components/Loading';

import configureStore from './store';
import './index.css';
import App from './App';

const basename = process.env.REACT_APP_ROUTER_BASENAME || '';
const history = createBrowserHistory({ basename });
const store = configureStore({}, history);

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
          <App history={history} />
      </ConnectedRouter>
    </Provider>,
    rootElement,
);

if (module.hot) {
    module.hot.accept('./App', () => {
      const NextApp = lazy(() => import('./App'));
  
      ReactDOM.render(
          <Provider store={store}>
            <Suspense fallback={<Loading />}>
              <NextApp history={history} />
            </Suspense>
          </Provider>,
        rootElement,
      );
    });
  }
  