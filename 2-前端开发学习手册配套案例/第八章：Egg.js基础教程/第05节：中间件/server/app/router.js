'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  
  const { router, controller } = app;
  router.post("/jwtlogin",controller.jwt.doLogin);
  router.get("/jwtmessage", app.middleware.checktoken() ,controller.jwt.getMessage);
  router.get("/1", app.middleware.checktoken() ,controller.jwt.getMessage);
  router.get("/2", app.middleware.checktoken() ,controller.jwt.getMessage);
  router.get("/3", app.middleware.checktoken() ,controller.jwt.getMessage);
  router.get("/4", app.middleware.checktoken() ,controller.jwt.getMessage);
  router.get("/5", app.middleware.checktoken() ,controller.jwt.getMessage);
};
