'use strict';
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware } = app;
  router.get('/', controller.home.index);
  router.get('/index.html', controller.home.index);
  router.get('/*', controller.home.common);
};
