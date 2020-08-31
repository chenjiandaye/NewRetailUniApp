if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


      if( navigator.userAgent && (navigator.userAgent.indexOf('LyraVM') > 0 || navigator.userAgent.indexOf('AlipayIDE') > 0) ) {
        var AFAppX = self.AFAppX.getAppContext ? self.AFAppX.getAppContext().AFAppX : self.AFAppX;
      } else {
        importScripts('https://appx/af-appx.worker.min.js');
        var AFAppX = self.AFAppX;
      }
      self.getCurrentPages = AFAppX.getCurrentPages;
      self.getApp = AFAppX.getApp;
      self.Page = AFAppX.Page;
      self.App = AFAppX.App;
      self.my = AFAppX.bridge || AFAppX.abridge;
      self.abridge = self.my;
      self.Component = AFAppX.WorkerComponent || function(){};
      self.$global = AFAppX.$global;
      self.requirePlugin = AFAppX.requirePlugin;
    

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../components/v-tabs/v-tabs?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/order_com/all_order?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-link/uni-link?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../node-modules/uview-ui/components/u-icon/u-icon?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../node-modules/uview-ui/components/u-line-progress/u-line-progress?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../node-modules/uview-ui/components/u-upload/u-upload?hash=277f760703407a94a178d85f502d062b2fa95f95');
require('../../pages/personal/personal?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/order/order?hash=0a0a98568ba43fd42dfd672ecce2063df070938e');
require('../../pages/index/index?hash=2d09a75b27a6cba8ec6b6d9029208ec9191e8c9b');
require('../../pages/shDetail/shDetail?hash=61af4a93dff57aa5dcd26b4426150569b4f8a14b');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}