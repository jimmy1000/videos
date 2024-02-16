/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
 const path = require('path');
//  let a = 'mongodb://127.0.0.1:27017';
//  let b = '9!j4orjrw4-FCDR';
 let e = 'hmg_video_one';
//  let d = 'localhost';

module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};
  config.security = {
    csrf: {
      enable: false,
    },
    xframe: {
      enable: false,
    }
  };
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1655405177926_823';
  config.static = {
    prefix: '/',
    gzip: true,
    dynamic: true,
    preload: false,
    dir: [
      path.join(appInfo.baseDir, 'app/public')
    ],
  };
  // add your middleware config here
  config.middleware = [];
  config.common = { FILE_TIME: 1000 * 3600 * 24 * 7 };
  config.jwt = {
    secret: e,
  };
  config.cluster = {
    listen: {
      port: 7005,
      hostname: '0.0.0.0',
    },
  };
  // config.redis = {
  //   client: {
  //     port: 6379,
  //     password:'',
  //     host: d,
  //     db: 3,
  //   },
  // };
  // config.mongoose = {
  //   client: {
  //     url: a,
  //     options: {
  //       poolSize: 5,
  //       user: 'root',
  //       pass: b,
  //       dbName: 'pay',
  //       auth: { authSource: "admin" },
  //       useNewUrlParser: true,
  //       useCreateIndex: true,
  //       auto_reconnect: true,
  //       readPreference:'secondaryPreferred',
  //       useUnifiedTopology: true,
  //     },
  //     app: true,
  //     plugins: [],
  //   },
  // };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
