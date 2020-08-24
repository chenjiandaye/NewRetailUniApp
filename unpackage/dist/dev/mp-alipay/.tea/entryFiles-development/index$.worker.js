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
require('../../uview-ui/components/u-form/u-form?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../uview-ui/components/u-icon/u-icon?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../uview-ui/components/u-form-item/u-form-item?hash=cf3366fbb6f8f5d580f2256f66f7bbc6e70278a2');
require('../../uview-ui/components/u-input/u-input?hash=cf3366fbb6f8f5d580f2256f66f7bbc6e70278a2');
require('../../uview-ui/components/u-button/u-button?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-link/uni-link?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../uview-ui/components/u-cell-group/u-cell-group?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../uview-ui/components/u-cell-item/u-cell-item?hash=cf3366fbb6f8f5d580f2256f66f7bbc6e70278a2');
require('../../pages/login/login?hash=d54488d0dea44c48fa51a3ee8172d6e4b18d7d82');
require('../../pages/index/index?hash=aa837e4a663f019019ab5470659c5bfbaabca84c');
require('../../pages/order/order?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/personal/personal?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}