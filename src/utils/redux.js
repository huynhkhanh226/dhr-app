import {
    createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

const middlewareNav = createReactNavigationReduxMiddleware(
    state => state.nav,
);

export {
    middlewareNav,
    // addListener,
};