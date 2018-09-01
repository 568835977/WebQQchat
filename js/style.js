$(document).ready(function () {
    $("#send").click(function () {
        //new一个数组保存用户名
        var list = new Array("松松","六月奇迹","小美");
        //生成随机数0-2  使用parseInt可以取整数
        var num = parseInt(Math.random()*3);
        //保存输入框的值
         var text = $(".chatText").val();
         //将昵称,图片,聊天信息保存
        var mess = $("<img src=\'images/head0"+(num+1)+".jpg\'>\n" +
            "        <h6 class=\"header\">"+list[num]+"</h6>\n" +
            "        <p>"+text+"</p>");
        //在消息框中将聊天信息append
        $(".chatBody").append(mess);
        //清空聊天输入框
        $(".chatText").val("");
    });
});


