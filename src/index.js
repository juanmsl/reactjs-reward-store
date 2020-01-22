import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from "store";
import 'scss/styles.scss';
import 'rodal/lib/rodal.css';
import RewardStoreApp from "modules";

ReactDOM.render(
    <Provider store={store}>
        <RewardStoreApp />
    </Provider>,
    document.getElementById('root')
);
