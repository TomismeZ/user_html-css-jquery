 // $(document).ready(function() {
 //        $("#checkAll").click(function() {
 //            $('input[name="checkbox"]').prop("checked", this.checked);
 //        });
 //        $("#delete").click(function() {
 //            var ckbs = $("input[name='checkbox']:checked");
 //            if (ckbs.size() == 0) {
 //                alert("要删除指定行，需选中要删除的行！");
 //                return;
 //            }
 //            ckbs.each(function() {
 //                $(this).parent().parent().remove();
 //            });
 //        });
 //    });

 //  function registerValid() {
 //        var username = $("#username").val();
 //        var password = $("#password").val();
 //        var confirmPassword = $("#confirmPassword").val();
 //        var email = $("#email").val();
 //        if (username == "" || password == "" || confirmPassword == "" || email == "") {
 //            alert("字段不能为空！")
 //            return false;
 //        }
 //        if (username.length < 6 || username.length > 20) {
 //            // document.getElementById("username").setCustomValidity("用户名长度必须在6到20个字符之间");
 //            alert("用户名长度必须在6到20个字符之间");
 //            return false;

 //        } else if (password.length < 6 || password.length > 20) {
 //            // document.getElementById("password").setCustomValidity("密码长度必须在6到20个字符之间");
 //            alert("密码长度必须在6到20个字符之间")
 //            return false;
 //        } else if (confirmPassword.length < 6 || confirmPassword.length > 20) {
 //            // document.getElementById("confirmPassword").setCustomValidity("用户名长度必须在6到20个字符之间");
 //            alert("确认密码长度必须在6到20个字符之间");
 //            return false;
 //        } else if (password != confirmPassword) {
 //            // document.getElementById("confirmPassword").setCustomValidity("密码和确认密码必须相同！");
 //            alert("密码和确认密码必须相同！");
 //            return false;
 //        }


 //    }
 $(function() {
     resizeWindow();
     //浏览器窗口大小调整时，触发resize事件，之后重新调整界面高度
     $(window).resize(function() {
         resizeWindow();
     });

     var $container=$("#container");
     var $table=$container.find("table");
     $table.find("tr td:not(:first-child,:last-child)").on("click",function(){
        var $this=$(this).parent();
        var nowItem=$this.find("input[name='checkbox']");
        //获取当前行CheckBox的状态值
        var isChecked=nowItem.prop("checked");

        //最新的状态值只需要与当前状态值相反即可
        nowItem.prop("checked",!isChecked);
     });

     /**
        查询用户名
     **/
     // $container.find("form button").on("click",function(){
     //    var length=$container.find("form").find("input[name='userName']").length;
     //    if(length==0){
     //        alert("用户名不能为空！");
     //    }
        
     // });
     /**
     实现全选和全不选功能
           **/
     $table.find("#checkAll").click(function() {
        //获取列表中所有的checkbox
        var checkboxItems=$table.find("input[name='checkbox']");

        //获取列表中选中的checkBox
        var checkedboxItems=$table.find("input[name='checkbox']:checked");

        //如果两个列表的数量相等，表示所有的checkbox都被选中，则反选
        //反之，则全选
        var isChecked=checkboxItems.length===checkedboxItems.length;

        //去两个列表长度判断的反值
        checkboxItems.prop("checked",!isChecked);
         // if ($('input[name="checkbox"]').prop('checked')) {
         //     $('input[name="checkbox"]').prop("checked", false);
         // } else {
         //     $('input[name="checkbox"]').prop("checked", true);
         // }
     });

     /**
     使用SPA，在一个URL加载两个界面
     **/
/*     var $container=$("#container");

     $container.find(".left").find("a").on("click",function(e){
            //阻止a标签原有的默认事件
            e.preventDefault();
            //得到a标签href属性的值
            var pageRef=$(this).prop("href");

            //JQuery load页面
            $container.load(pageRef);
          
     });
*/
     /**
         实现删除功能
     **/
      $table.find(".delete").click(function() {
         var ckbs = $table.find("input[name='checkbox']:checked");
         if (ckbs.size() == 0) {
             alert("要删除指定行，需选中要删除的行！");
             return;
         } else {
    
             if (confirm("确定要删除选中项？")) {
                ckbs.parent().parent().remove();
             } 
         }
         //遍历
         // ckbs.each(function() {
         //     var result = confirm("确定要删除选中项？");
         //     if (result == null) {
         //         result = confirm("确定要删除选中项？");
         //     } else {
         //         $(this).parent().parent().remove();
         //     }
         // });
     });

 })

 function resizeWindow() {
     //浏览器窗口高度-header高度=内容高度
     var contentHeight = $(window).height() - 80;
     $(".left").height(contentHeight);
     $(".right").height(contentHeight);
 }

 function registerValid() {
     var username = $("input[name='username']").val();
     var password = $("input[name='password']").val();
     var confirmPassword = $("input[name='confirmPassword']").val();
     var email = $("input[name='email']").val();
     if (username.length == 0 || email.length == 0 || password == 0 || confirmPassword == 0) {
         alert("字段不能为空");
         return false;
     } else if (username.length < 6 || username.length > 20) {
         alert("用户名长度必须在6到20个字符之间");
         return false;
     } else if (password.length < 6 || password.length > 20) {
         alert("密码长度必须在6到20个字符之间")
         return false;
     } else if (confirmPassword.length < 6 || confirmPassword.length > 20) {
         alert("确认密码长度必须在6到20个字符之间")
         return false;
     } else if (password != confirmPassword) {
         alert("密码和确认密码必须相同！");
         return false;
     }
 }
