import React from 'react';
import { render } from 'react-dom';
import TestComponent from "./TestComponent";
// import 'antd/dist/antd.css';

import { Provider } from 'react-redux';
import store from '../redux/createStore';

render(<Provider store={store}><TestComponent /></Provider>,document.getElementById('body'));


