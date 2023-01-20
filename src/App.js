import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import CacheRoute, { CacheSwitch } from 'react-router-cache-route';
import router from "./router/index.js";
import "./global.less"
const App = () => {
    return (
        <Router>
            <CacheSwitch>
                {
                    router.map(item => {
                        return (

                            item.cache ?
                                <CacheRoute
                                    saveScrollPosition={true}
                                    exact={item.exact}
                                    path={item.path}
                                    component={item.element}
                                    key={item.path}
                                /> :
                                <Route
                                    exact={item.exact}
                                    path={item.path}
                                    component={item.element}
                                    key={item.path}
                                />
                        )
                    })
                }
            </CacheSwitch>
        </Router>
    )
}
export default App