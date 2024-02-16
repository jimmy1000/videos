const Subscription = require('egg').Subscription;
const fs = require('fs');

class UpdateCache extends Subscription {
  // 通过 schedule 属性来设置定时任务的执行间隔等配置
  static get schedule () {
    return {
      // interval: '10s', // 1 分钟间隔
      cron: '0 0 5,20 * * *',//凌晨4点和晚上8点清除所有redis缓存
      type: 'all', // 指定所有的 worker 都需要执行
    };
  }
  // subscribe 是真正定时任务执行时被运行的函数
  async subscribe () {
    let pathIndexUrl = process.cwd()+'/cache/index.html'
    let isHaveHtml = fs.existsSync(pathIndexUrl)
    if(isHaveHtml){
      fs.unlinkSync(pathIndexUrl);
    }
  }
}

module.exports = UpdateCache;