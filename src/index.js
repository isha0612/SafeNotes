import React from 'react';
import ReactDOM from 'react-dom';
import DataState from './Context/DataState' 
import App from './Components/App';

ReactDOM.render(
  <React.StrictMode>
    <DataState>
      <App />
    </DataState>
  </React.StrictMode>,
  document.getElementById('root')
);
