import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components'
import { theme } from 'theme/theme';
import { App } from 'components/App';
import './index.css';

import {store, persistor} from './redux/store'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>      
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
      <App />
        </ThemeProvider>
        </PersistGate>
      </Provider>
  </React.StrictMode>
);
