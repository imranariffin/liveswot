import React from 'react';
import ReactDOM from 'react-dom';
import {Switch} from 'react-router';
import {Provider} from 'react-redux';
import WebFontLoader from 'webfontloader';
import {ConnectedRouter} from 'react-router-redux';

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import {history} from './store/middlewares/history/history';
import {InitApp} from './store/actions';
import Root from './layouts/Root';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import routes from './routes';
import {mapPathsToRoutes} from './routes/routes';


WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons'],
  },
});

store.dispatch(InitApp());

ReactDOM.render(
  <Provider store={ store }>
    <ConnectedRouter history={ history }>
      <Root>
        <Header/>
        <Switch>
          {
            routes.map(mapPathsToRoutes)
          }
        </Switch>
        <Footer/>
      </Root>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
