import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App';

ReactDOM.hydrate(
    <App initialData={window.__initialData__}/>,
    document.getElementById("root")
);
