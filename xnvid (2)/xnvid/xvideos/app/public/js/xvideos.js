
var ADVDOMINFN = function(imgdom,appdom,textdom){
    return `
        <div id="ADV-info-connect"></div>
        <div id="ADV-dom-map-in">
            <div class="app-adv">${appdom}</div>
            <div class="img-adv">${imgdom}</div>
            <div class="text-adv">${textdom}</div>
        </div>
    `
};
var FRIENDLIKDOM = function(dom){
return `
    <h2>友情链接</h2>
    <div style="margin:10px 0;" class="app-friendlink">${dom}</div>
`
}
var appAdvList = [
  {name:'大神直播',url:'https://appxzawesdfasdccc.sebobaovideo.com',image:'https://xnnn.org/images/friend/0/598.webp?1708172616'},
  {name:'麻豆传媒',url:'https://appxzawesdfasdccc.sebobaovideo.com',image:'https://xnnn.org/images/friend/0/598.webp?1708172616'},
  {name:'茄子直播',url:'https://appxzawesdfasdccc.sebobaovideo.com',image:'https://xnnn.org/images/friend/0/598.webp?1708172616'},
  {name:'黄瓜在线',url:'https://appxzawesdfasdccc.sebobaovideo.com',image:'https://xnnn.org/images/friend/0/598.webp?1708172616'},
  {name:'91香蕉',url:'https://appxzawesdfasdccc.sebobaovideo.com',image:'https://xnnn.org/images/friend/0/598.webp?1708172616'}
]   
var friendLinkList = [
    {name:'国产XNXX',url:'http://videos.cnxnxx.com'},
    {name:'哈密瓜导航',url:'https://hmgdh.com'},
]
var imgAdvList = [
     {name:'大神直播',url:'https://371275.com',image:'https://xnnn.org/images/friend/0/598.webp?1708172616'},
     {name:'大神直播',url:'https://8.rjxj.org',image:'https://xnnn.org/images/friend/0/598.webp?1708172616'},
]
var textAdvList = [
  {name:'国产',url:'/?k=国产'},
  {name:'麻豆',url:'/?k=麻豆'},
  {name:'天美',url:'/?k=天美'},
  {name:'91',url:'/?k=91'},
  {name:'自拍',url:'/?k=自拍'},
  {name:'偷拍',url:'/?k=偷拍'},
  {name:'乱伦',url:'/?k=乱伦'},
  {name:'爆菊',url:'/?k=爆菊'},
  {name:'口爆',url:'/?k=口爆'},
  {name:'乳交',url:'/?k=乳交'},
  {name:'白浆',url:'/?k=白浆'},
  {name:'性虐',url:'/?k=性虐'},
  {name:'重口',url:'/?k=重口'},
  {name:'大奶',url:'/?k=大奶'},
  {name:'嫩模',url:'/?k=嫩模'},
  {name:'会所',url:'/?k=会所'},
  {name:'小姐',url:'/?k=小姐'},
  {name:'外媛',url:'/?k=外媛'},
]
var appAdvListText = '';
var imgAdvListText = '';
var textAdvListText = '';
var friendLinkListText = '';
appAdvList.forEach(item=>{
  appAdvListText+=`<a href="${item.url}" target="_blank"><img src="${item.image}" /><span>${item.name}</span></a>`
});
imgAdvList.forEach(item=>{
  imgAdvListText+=`<a href="${item.url}" target="_blank"><img src="${item.image}" /></a>`
});
textAdvList.forEach(item=>{
  textAdvListText+=`<a href="${item.url}" target="_blank">${item.name}</a>`
});
friendLinkList.forEach(item=>{
  friendLinkListText+=`<a href="${item.url}" target="_blank">${item.name}</a>`
});
var ALLDOMINPAGE = ADVDOMINFN(imgAdvListText,appAdvListText,textAdvListText);
var ALLFRIENDLINK = FRIENDLIKDOM(friendLinkListText)
window.onload = function () {
  $('#main').prepend(ALLDOMINPAGE)
  $('.thumb-ad').remove();
  $('.premium-results-line').remove();
  $('#footer').append(ALLFRIENDLINK);
  // $('#footer').append(ALLDOMINPAGE);
  $('#related-videos .show-more').text('加载更多');
  $('#search-associates').addClass('mobile-expanded');
  const commonDom = `<div id="reloadP" onclick="refresh();window.location.reload();">刷新</div>`
  $('#header .stripe').append(commonDom)
  $('.player-enlarged').prepend(`<div id="video-tips">如无法观看请点击右上角刷新尝试~</div>`)
}

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?e7ce78987706ff4470d71ced3d8363b8";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
var refresh = function(){
  var data = {
    host:window.location.host,
    url:window.location.href,
    pathname:window.location.pathname,
  }
  
  if(data.host&&data.url&&data.pathname&&data.pathname!=='/'){
    $.ajax({
      type: "POST",
      url: '/refresh',
      data,
      success: function(res){},
    });
  }
}
var vidfiled = document.querySelector("#html5video video");
if(vidfiled){
  vidfiled.onerror = function() {
    refresh()
  };
}
