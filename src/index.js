import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {configureStore,combineSlices} from "@reduxjs/toolkit"
import messageSlice from "./redux/MessageSlice"

let rootReducer = combineSlices({messageSlice})

let store = configureStore({
  reducer:rootReducer
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
