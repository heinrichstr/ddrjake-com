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
    loader: () => import( '../components/HomePageSlider' ),
    loading: LoadingComponent
} );

const AsyncDesignPage = loadable( {
    loader: () => import( '../components/DesignPage' ),
    loading: LoadingComponent
} );

const AsyncArtPage = loadable( {
    loader: () => import( '../components/ArtPage' ),
    loading: LoadingComponent
} );

const FizzBuzz = loadable( {
    loader: () => import( '../components/FizzBuzz' ),
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

                            <Route path="/design" component={AsyncDesignPage} />

                            <Route path="/art" component={AsyncArtPage} />

                            <Route path="/buzz" component={FizzBuzz} />
                        </Switch>
                    </ScrollToTop>
                </Analytics>
            </BrowserRouter>
        );
    }
}
