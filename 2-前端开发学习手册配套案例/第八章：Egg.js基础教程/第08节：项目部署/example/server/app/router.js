'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post("/login",controller.home.doLogin)
  router.resources("students","/students",controller.student);
  router.resources("clazz","/clazz",controller.clazz);
};
