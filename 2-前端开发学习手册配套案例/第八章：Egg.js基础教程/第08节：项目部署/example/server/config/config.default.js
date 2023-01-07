/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
const path = require("path")
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1592732452526_5515';

  // add your middleware config here
  config.middleware = [];

  config.sequelize = {
    dialect: 'mysql',
    database: 'xiaozhoubaogao',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'aaaaaa',
    timezone: '+08:00',
  }

  config.jwt = {
    secret: "123456"
  }

  config.cors = {
    origin: "*", //允许所有跨域访问，注释掉则允许上面 白名单 访问
    credentials: true, // 允许跨域请求携带cookies
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.view = {
    defaultViewEngine: 'nunjucks'
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.static = {
    prefix: '/',  //访问路径
    dir: path.join(appInfo.baseDir, 'app/public'),   //设置静态文件目录
  }; 

  return {
    ...config,
    ...userConfig,
  };
};