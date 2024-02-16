"use strict";
const Service = require("egg").Service;
const descList = require(process.cwd()+"/title/desc.js");
const titleList = require(process.cwd()+"/title/title1.js");

class Utils extends Service {
    getTDK(){
        let {ctx} = this;
        //---标题描述关键词start---
        let h = ctx.request.header.host
        if (!h || h.length > 100) return {}
        let host = h.toLowerCase();
        // 泛域名 截取方式 news.fasd.com  fasd.com  www.dd.fasd.com  sss.com.cn
        let f_item = {
          title: '',
          keywords: '',
          description: ''
        }
        let hostArr = host.split('');
        let abdd = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '.', '-', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];//27
        let fanIndex = ''
        hostArr.forEach((item) => {
          let nownum = abdd.findIndex(adbitem => adbitem === item)
          if (nownum != -1) {
            let nstr = nownum.toString()
            fanIndex += nstr
          }
        })
        let titleNum = titleList.length-1;
        let descNum = descList.length-1
        let titleIndex = fanIndex % titleNum;
        let descIndex = fanIndex % descNum;
        f_item.title = titleList[titleIndex]
        let descone = f_item.title
        descone = descone.split(/,|_|-|，|\|/)[0]
        f_item.description = descone+descList[descIndex]
        f_item.keywords = f_item.title.replace(/\/|\。|\"|\'|\，|\–|\、|\||\-|\_/g, ",")
              .replace(/\n|\s/g, "");
        return f_item
        //---标题描述关键词end---
      }
}

module.exports = Utils;








