
'use strict';

const Service = require('egg').Service;

class CacheService extends Service {
  async set (key, value) {
    // value = JSON.stringify(value);
    const seconds = this.app.config.common.FILE_TIME
    if (this.app.redis) {
      await this.app.redis.set('nav-' + key, JSON.stringify(value), 'EX', seconds)
      //把全部的key 存起来
      let videoKeyList = await this.app.redis.get('AllKeyList');
      if (videoKeyList) {
        if (videoKeyList.indexOf(key) == -1) {
          videoKeyList = videoKeyList + ',' + key
          await this.app.redis.set('AllKeyList', videoKeyList, 'EX', seconds)
        }
      } else {
        await this.app.redis.set('AllKeyList', key, 'EX', seconds)
      }
    }
  }

  async get (key) {
    if (this.app.redis) {
      var data = await this.app.redis.get('nav-' + key);
      if (!data) return;
      return JSON.parse(data)
    }
  }
  async del (key) {
    if (this.app.redis) {
      await this.app.redis.del('nav-' + key);
    }
  }
  async clearRedisKeyList (key) {
    if (!key) return;
    const seconds = this.app.config.common.FILE_TIME
    let videoKeyList = await this.app.redis.get('AllKeyList');
    if (videoKeyList) {
      // 处理key 
      let arr = videoKeyList.split(',')
      for (let i in arr) {
        if (arr[i].indexOf(key) >= 0) {
          await this.app.redis.del('nav-' + arr[i]);
          arr[i] = ''
        }
      }
      arr = arr.filter(item => item)
      // 把剩下的key 存进去
      await this.app.redis.set('AllKeyList', arr.join(','), 'EX', seconds)
      return {
        code: 200,
        message: '缓存清除成功！'
      }
    }
  }
  async flushall () {
    if (this.app.redis) {
      await this.app.redis.flushall();
      return {
        code: 200,
        message: '全部缓存清除成功！'
      }
    }
  }
}

module.exports = CacheService;