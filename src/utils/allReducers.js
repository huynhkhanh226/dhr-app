import {combineReducers} from 'redux';
import Navigation from '../navigation/redux/navigation_reducers';
import Main from '../redux/main/main_reducers';
import home from "../redux/home/home_reducers";

export default combineReducers({
    nav: Navigation,
    main: Main,
    home: home
});
