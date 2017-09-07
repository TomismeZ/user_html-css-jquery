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
     /**
     实现全选和全不选功能
           **/
     $("#checkAll").click(function() {

         if ($('input[name="checkbox"]').prop('checked')) {
             $('input[name="checkbox"]').prop("checked", false);
         } else {
             $('input[name="checkbox"]').prop("checked", true);
         }
     });

     /**
         实现删除功能
     **/
     $(".delete").click(function() {
         var ckbs = $("input[name='checkbox']:checked");
         if (ckbs.size() == 0) {
             alert("要删除指定行，需选中要删除的行！");
             return;
         } else {
             var result = confirm("确定要删除选中项？");
             if (result == null) {
                 result = confirm("确定要删除选中项？");
             } else {
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