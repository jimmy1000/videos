'use strict';
const Controller = require('egg').Controller;
const fs = require('fs');
var rp = require("request-promise");
const cheerio = require("cheerio");
const axios = require('axios')
const md5 = require('js-md5');
class PayController extends Controller {
    async paytype() {
        let bodyHtml = fs.readFileSync(process.cwd() + '/view/paytype.html', 'utf-8');
        this.ctx.body = bodyHtml;
    }
    async login() {
        let bodyHtml = fs.readFileSync(process.cwd() + '/view/login.html', 'utf-8');
        this.ctx.body = bodyHtml;
    }
    async orderPage() {
        let bodyHtml = fs.readFileSync(process.cwd() + '/view/order.html', 'utf-8');
        this.ctx.body = bodyHtml;
    }
    async payTypeList() {
        const { ctx } = this;
        let {
            isOpen
        } = ctx.request.body
        let options = {}
        if (isOpen===true||isOpen===false) options.isOpen = isOpen
        let data = await this.ctx.model.Paytype.find(options).sort({'_id':-1})
        this.ctx.body = {
            code: 200,
            data
        }
    }
    async orderList() {
        const { ctx } = this;
        let {
            status,
            bank_code,
            out_order_id,
            money,
            offset
        } = ctx.request.body
        let options = {}
        if (typeof status == 'number') options.status = status
        if (bank_code) options.bank_code = bank_code
        if (out_order_id) options.out_order_id = out_order_id
        if (money) options.money = money
        if (offset) options['_id'] = { "$lt": offset }
        let optionsCount = {...options}
        delete optionsCount['_id'];
        let count = await this.ctx.model.Pay.countDocuments(optionsCount, (err, c) => c);
        let data = await this.ctx.model.Pay.find(options).sort({ '_id': -1 }).populate({ path: 'bank_code_id', select: 'type' }).limit(50)
        this.ctx.body = {
            code: 200,
            data: {
                data,
                count
            },
        }
    }
    async addPaytype(){
        const { ctx } = this;
        let { type,code,rate,isOpen,money,rule,status,maxNum,minNum,moneyList} = ctx.request.body
        if (!type||!code) return this.ctx.body = { code: -2, message: '参数错误!' }
        let is_Paytype = await this.ctx.model.Paytype.findOne({ code })
        if (is_Paytype) return this.ctx.body = { code: -2, message: '该方式已被创建！' }
        await this.ctx.model.Paytype.create({ type,code,rate,isOpen,money,rule,status,maxNum,minNum,moneyList})
        this.ctx.body = {
            code: 200,
            message:'添加成功！'
        }
    }
    async getPayTypeList() {
        let data = await this.ctx.model.Paytype.find({ isOpen: true }).select('type code isOpen moneyList money rule status minNum minNum')
        this.ctx.body = {
            code: 200,
            data
        }
    }
    async updatePayType() {
        const { ctx } = this;
        let { _id, updates } = ctx.request.body
        let paytype = await ctx.model.Paytype.findOneAndUpdate({
            _id
        }, { $set: updates }, { new: true })
        ctx.body = {
            code: 200,
            data: paytype,
        }
    }
}
module.exports = PayController;
