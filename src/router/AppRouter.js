import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import loadable from 'react-loadable';
import Analytics from 'react-router-ga';
import ScrollToTop from './ScrollToTop';
import loadingImg from '../img/Loading_icon.gif';

const LoadingComponent = () => <img src={loadingImg} />;

//#region import components 
// const AsyncHomePage = loadable( {
//     loader: () => import( '../components/HomePage' ),
//     loading: LoadingComponent
// } );

const AsyncHomePage = loadable( {
    loader: () => import( '../components/HomePage' ),
    loading: LoadingComponent
} );
//#endregion

export default class AppRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Analytics id="UA-65927115-1">
                    <ScrollToTop>
                        <Switch>
                            <Route path="/" component={AsyncHomePage} exact={true} />
                        </Switch>
                    </ScrollToTop>
                </Analytics>
            </BrowserRouter>
        );
    }
}
