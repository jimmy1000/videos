'use strict';
const Controller = require('egg').Controller;
const fs = require('fs');
var rp = require("request-promise");
const cheerio = require("cheerio");
const axios = require('axios')
const md5 = require('js-md5');
const { now } = require('mongoose');

const cacheFile = process.cwd() + '/cache/';
const commonDom = `<a href="/" class="head__logo" id="site-logo-link"><img src="https://static-ss.xvideos-cdn.com/v3/img/skins/default/logo/xvideos.black.svg" alt="XVIDEOS" onerror="this.src='https://static-ss.xvideos-cdn.com/v3/img/skins/default/logo/xvideos.black.png';this.onerror='';" id="site-logo" class="no-blur" height="36" width="144"></a>`
let dateNow = Date.now()
const INDEXDOM = function (title, key, desc, body = 'd') {

  return `<!DOCTYPE html>
  <html lang="zh-CN">
  <head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>${title}</title>
  <meta name="description" content="${desc}">
  <meta name="keywords" content="${key}">

  </head>
  <body>
  <div id="content">${body}</div>
  <script src="./js/m/tzxvideos.js?v=${dateNow}"></script>
  </body>
  </html>
  `
}
function isJSONObject(obj) {
  // 判断对象是否是普通对象，并且构造函数为 Object
  return typeof obj === 'object' && obj !== null && Object.getPrototypeOf(obj) === Object.prototype;
}
const delDir = function (path) {
  let files = [];
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);
    files.forEach((file, index) => {
      let curPath = path + "/" + file;
      if (fs.statSync(curPath).isDirectory()) {
        delDir(curPath); //递归删除文件夹
      } else {
        fs.unlinkSync(curPath); //删除文件
      }
    });
    //fs.rmdirSync(path);
  }
}

class HomeController extends Controller {
  async common() {
    const { ctx } = this;
    let urlFilter = [
      '.js',
      '.jpg',
      '.gif',
      '.zip',
      '.png',
      '.txt',
      '.zip',
      '.m3u8',
      '.mp4',
      '.jpeg',
      '.mp3',
      '.ttf',
      '.css'
    ]
    let bodyHtml = '';
    let $endBodyHtml = ''
    let querystringStr = ''
    let TDKItem = ctx.service.utils.getTDK()

    if (ctx.querystring) {
      querystringStr = "?" + ctx.querystring
    }
    let nowUrl = ctx.params[0] + querystringStr
    let isNofindPage = false;
    //检测访问的链接
    urlFilter.forEach((item) => {
      if (nowUrl.indexOf(item) >= 0) {
        isNofindPage = true
      }
    })
    if (isNofindPage) return this.ctx.body = '';

    let cacheEndNowUrl = ''
    let isHaveHtml = ''
    if (nowUrl && nowUrl.indexOf('video') == 0) {
      cacheEndNowUrl = nowUrl.replace(/\//g, '##').replace('.html', '')
      cacheEndNowUrl = cacheEndNowUrl.replace(/\?/g, '**')
      cacheEndNowUrl = cacheEndNowUrl.replace(/\=/g, '__')
      isHaveHtml = fs.existsSync(cacheFile + cacheEndNowUrl + '.html')
    }

    if (isHaveHtml && cacheEndNowUrl) {
      bodyHtml = fs.readFileSync(cacheFile + cacheEndNowUrl + '.html', 'utf-8');
      return this.ctx.body = bodyHtml;
    }
    await rp
      .get({
        url: encodeURI(`https://www.xvideos.com/${nowUrl}`),
        json: true,
        headers: {
          'Content-Type': 'text/html;charset=utf-8',
          'Accept-Language':'zh-CN,zh;q=0.9',
        },
        timeout: 25000,
        encoding: null, //设置encoding
        pool: {
          maxSockets: Infinity
        }
      })
      .then(res => {
        
        if(isJSONObject(res)){
          console.log(res)
          return ctx.body=res
        }else{
          console.log('end1')
        bodyHtml = ''
        $endBodyHtml = cheerio.load(res, {
          decodeEntities: false
        });
        let titleFilters = [
          'XNXX.COM',
        ]
        $endBodyHtml('#ad-footer').empty();
        let title = $endBodyHtml("title").html();
        let description = $endBodyHtml("[name='description']").attr('content')
        $endBodyHtml("[name='description']").remove()
        titleFilters.forEach(item => {
          if (title.indexOf(item) >= 0) {
            title = title.replace(item, '')
          }
          if (description.indexOf(item) >= 0) {
            description = description.replace(item, '')
          }
        })
        $endBodyHtml("title").html(title + TDKItem.title);
        $endBodyHtml('head').append(`<meta name="description" content="${description}${TDKItem.title}">`)
        $endBodyHtml('head').append(`<link rel="stylesheet" type="text/css" href="./js/tzxvideos.css?v=${dateNow}">`)
        $endBodyHtml('head').append(`<script src="./js/tzxvideos.js?v=${dateNow}"></script>`)
        $endBodyHtml('#mobile-slogan').remove();
        $endBodyHtml('#tabComments_bottom_page').remove();
        $endBodyHtml('.exo-ad-ins-div').remove();
        $endBodyHtml(".remove-ads").remove();
        $endBodyHtml('#ad-footer').remove();
        $endBodyHtml('body').append(`<script src="./js/m/tzxvideos.js?v=${dateNow}"></script>`)
        bodyHtml = $endBodyHtml('html') + ''
      }
      }
      ).catch((e) => {
        bodyHtml = INDEXDOM(TDKItem.title, TDKItem.keywords, TDKItem.description, e + '')
      });
    // 处理html
    // 缓存html
    if (bodyHtml.length) {
      if (!isHaveHtml && cacheEndNowUrl.indexOf('video') == 0) {
        fs.writeFile(cacheFile + cacheEndNowUrl + '.html', bodyHtml, null, function (err) {
          if (err) {
            console.error(err);
          }
        });
      }
    }
    this.ctx.body = bodyHtml
  }
  async index() {
    const { ctx } = this;
    let bodyHtml = '';
    let $endBodyHtml = ''
    let isHaveHtml = fs.existsSync(cacheFile + 'index.html')
    let TDKItem = ctx.service.utils.getTDK()
    let noQuerys = Object.keys(this.ctx.query).length == 0
    if (isHaveHtml&&noQuerys) {
      bodyHtml = fs.readFileSync(cacheFile + 'index.html', 'utf-8');
      return this.ctx.body = bodyHtml;
    }
    let queryUrl = '/?'
    if(this.ctx.request.url&&this.ctx.request.url!=='/'){
      queryUrl = this.ctx.request.url
    }
    await rp
      .get({
        url: 'https://www.xvideos.com'+queryUrl,
        json: true,
        headers: {
          'Content-Type': 'text/html;charset=utf-8',
          'Accept-Language':'zh-CN,zh;q=0.9',
        },
        timeout: 25000,
        encoding: null, //设置encoding
        pool: {
          maxSockets: Infinity
        }
      })
      .then(res => {
        bodyHtml = ''
        $endBodyHtml = cheerio.load(res, {
          decodeEntities: false
        });
        $endBodyHtml('#footer').empty();
        $endBodyHtml("#content-ad-top-zone-contener").remove()

        $endBodyHtml("title").html(TDKItem.title);
        $endBodyHtml("[name='keywords']").remove()
        $endBodyHtml("[name='description']").remove();
        $endBodyHtml('#mobile-slogan').remove();
        $endBodyHtml('#tabComments_bottom_page').remove();

        $endBodyHtml('head').append(`<meta name="description" content="${TDKItem.description}">`)
        $endBodyHtml('head').append(`<meta name="keywords" content="${TDKItem.keywords}">`)
        $endBodyHtml('head').append(`<link rel="stylesheet" type="text/css" href="./js/tzxvideos.css?v=${dateNow}">`)
        $endBodyHtml('#header .topbar').append(commonDom)
        $endBodyHtml('.logo-xnxx a').empty()
        $endBodyHtml('.exo-ad-ins-div').remove();
        $endBodyHtml(".remove-ads").remove();
        $endBodyHtml('#ad-footer').remove();
        $endBodyHtml('body').append(`<script src="./js/tzxvideos.js?v=${dateNow}"></script>`)
        bodyHtml = $endBodyHtml('html') + ''
        
      }).catch((e) => {
        bodyHtml = INDEXDOM(TDKItem.title, TDKItem.keywords, TDKItem.description, e + '')
      });;
    // 处理html

    // 缓存html
    if (bodyHtml.length&&bodyHtml.length>1000&&this.ctx.request.url=='/') {
      if (!isHaveHtml) {
        fs.writeFile(cacheFile + 'index.html', bodyHtml, null, function (err) {
          if (err) {
            console.log(err);
          }
        });
      }
    }
    this.ctx.body = bodyHtml
  }
}

module.exports = HomeController;
