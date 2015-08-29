/// <reference path="../typings/tsd.d.ts" />

import React = require("react");
var ReactDOM = require("react-dom");
import {init} from "../../src/index";
import {Router, Route, Redirect} from "react-router";

var createBrowserHistory = require("history/lib/createBrowserHistory");

import App from "./app";
import Home from "./home";
import Tests from "./tests";

let prefix = process.env.PLAYGROUND_PREFIX || "";

init({
    satieRoot: location.protocol + "//" + location.host + prefix + "/vendor/",
    preloadedFonts: ["Alegreya", "Alegreya (bold)"]
});

let history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        <Route component={App} path={prefix}>
            <Route path="/tests"
                components={{
                    main: Tests,
                    header: Tests.Header,
                    description: Tests.Description
                }}/>
            <Redirect from="/tests/" to="tests" />
            <Route path="/tests/:id"
                components={{
                    main: Tests,
                    header: Tests.Header,
                    description: Tests.Description
                }}/>
            <Redirect from="/tests/:id/" to="someTests" />
            <Route path="/"
                components={{
                    main: Home,
                    header: Home.Header,
                    description: Home.Description
                }}/>
            <Route path="*"
                components={{
                    main: Home,
                    header: Home.Header,
                    description: Home.Description
                }}/>
        </Route>
    </Router>,
    document.getElementById("root"));
