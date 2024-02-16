"use strict";
const Service = require("egg").Service;
class Adv extends Service {
  //用户列表
  async payList ({ offset = 0, limit = 10, sid,name, sTime, eTime }) {
    let { count, rows } = await this.ctx.model.Pay.findAndCountAll(
      queryOptions
    );
    return {
      code: 200,
      data: {
        data: rows,
        count,
        limit,
        offset,
      },
    };
  }

  async addPay(){
    await this.ctx.model.Pay.create({
        
    })
  }
}

module.exports = Adv;
