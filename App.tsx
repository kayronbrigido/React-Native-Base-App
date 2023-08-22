import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store/redux';
import AppContent from '@src/AppContent';

const App: React.FC = () => {

  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  )
}

export default App;