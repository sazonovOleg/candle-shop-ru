import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GlobalStyle, GlobalFonts} from "./style";

ReactDOM.render(
    <React.StrictMode>
        <GlobalFonts/>
        <GlobalStyle/>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);
