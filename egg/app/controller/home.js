'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async getList() {
    const { ctx } = this;
    const data = await this.app.mysql.select('urud');
    ctx.body = {
      data:data,
      code:1,
      msg:"查询成功"
    }
  }
  async addList() {
    const { ctx } = this;
    const { name,age } = ctx.request.body;
    const data = await this.app.mysql.insert('urud',{name,age});
    ctx.body = {
      data:data,
      code:1,
      msg:"新增成功"
    }
    // ctx.body ="*********"
  }
  async delList() {
    const { ctx } = this;
    const { id } = ctx.request.body;
    console.log(id)
    const data = await this.app.mysql.delete('urud',{id});
    ctx.body = {
      data:data,
      code:1,
      msg:"删除成功"
    }
    // ctx.body ="*********"
  }
  async updataList() {
    const { ctx } = this;
    const {name,age, id } = ctx.request.body;
    // console.log(id)
    const data = await this.app.mysql.update('urud',{name,age,id});
    ctx.body = {
      data:data,
      code:1,
      msg:"修改成功"
    }
    // ctx.body ="*********"
  }
}

module.exports = HomeController;
