import React from 'react';
import App from '../src/components/App';

const ReactDOMServer = require('react-dom/server');

export default () => {
    return ReactDOMServer.renderToString(<App/>);
}
