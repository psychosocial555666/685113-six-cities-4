import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {cities} from "./const.js";
import {createStore, applyMiddleware} from "redux";
import reducer from "./reducer/reducer.js";
import {Operation as DataOperation} from "./reducer/data/data.js";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createAPI} from "./api.js";

const api = createAPI(() => {});


const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(DataOperation.loadOffers());

ReactDOM.render(
    <Provider store={store}>
      <App
        cities={cities}/>
    </Provider>,
    document.querySelector(`#root`)
);

