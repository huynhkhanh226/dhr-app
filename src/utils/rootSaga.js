import {all} from 'redux-saga/effects';
import {
    watchBackScreen,
    watchChangeScreen,
    watchResetScreen
} from "../navigation/redux/navigation_sagas";

import{
    watchLoading,
    watchUploadFile,
    watchLogin,
    watchTabBar,
    watchGetToken,
    watchSetting,
    watchGetCDN,
    watchAttachPropose,
    watchEditAttachPropose,
    watchListMenuHome,
    watchListMenuMSS,
    watchGetListCompany,
    watchGetBadge,
    watchUpdateBadge,
    watchAddDevice,
    watchRemoveDevice
} from "../redux/main/main_sagas";

import{
    watchListMenu,
    watchListNoty,
    watchUpdateStatusNoty,
    watchClearListMenu,
    watchGetVoucherNum,
    watchClearListNoty,
} from "../redux/home/home_sagas";


export default function* rootSaga() {
    yield all([
        watchChangeScreen(),
        watchResetScreen(),
        watchBackScreen(),
        
        watchLoading(),
        watchUploadFile(),
        watchLogin(),
        watchTabBar(),
        watchGetToken(),
        watchSetting(),
        watchGetCDN(),
        watchAttachPropose(),
        watchEditAttachPropose(),
        watchListMenuHome(),
        watchListMenuMSS(),
        watchGetListCompany(),
        watchGetBadge(),
        watchUpdateBadge(),
        watchAddDevice(),
        watchRemoveDevice(),

        //home
        watchListMenu(),
        watchListNoty(),
        watchUpdateStatusNoty(),
        watchClearListMenu(),
        watchGetVoucherNum(),
        watchClearListNoty()
    ])
}
