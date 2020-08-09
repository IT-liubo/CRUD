'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  //查
  router.get('/getList', controller.home.getList);
  //增
  router.post('/addList', controller.home.addList);
  //删
  router.post('/delList', controller.home.delList);
  //改
  router.post('/updataList', controller.home.updataList);

  
};
