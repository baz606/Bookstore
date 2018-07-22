import React from 'react';
import App from '../src/components/App';
import axios from 'axios';

const ReactDOMServer = require('react-dom/server');

export default () => {
    return axios.get('http://localhost:8080/api/books')
         .then(res => {
             return {
                 markup : ReactDOMServer.renderToString(<App initialData={res.data}/>),
                 data: res.data
             }
         });
}
