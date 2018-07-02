/**
 * Created by liuqichao on 2017/8/8.
 */


//生成邮件按钮
var subject = $("title").text();
var Send_url = "mailto:liuqichao@liuqichao.com" + "?subject= Commint: " + subject ;
if($("#SendEmail").length>0){
    $("#SendEmail").attr("href", Send_url)
}

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?9e1a1a0592565b0be19bc26b98045236";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
