/**
 * Created by liuqichao on 2017/8/8.
 */


//生成邮件按钮
var subject = $("title").text();
var Send_url = "mailto:liuqichao@liuqichao.com" + "?subject= Commint: " + subject ;
if($("#SendEmail").length>0){
    $("#SendEmail").attr("href", Send_url)
}
