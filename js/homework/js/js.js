function validName() {
    var value = inpName.value;
    var reg =/^\D\w*$/;
    var result = reg.test(value);
    if(result===true){
        spName.innerHTML ="√";
    }else{
        spName.innerHTML = "<strong>必须是数字、英文、_组成，数字不能开头</strong>"
    }
}

function validPwd() {
    var value = inpPwd.value;
    var reg =/^[0-9]{6,8}$/;
    var result = reg.test(value);
    if(result===true){
        spPwd.innerHTML ="√";
    }else{
        spPwd.innerHTML = "<strong>密码:6-8位的数字</strong>"
    }
}
function checkPwd() {
    var value = inpPwd.value;
    var value2 = inpPwd2.value;
    if(value == value2){
        spPwd2.innerHTML ="√";
    }else{
        spPwd2.innerHTML = "<strong>!两次密码不一样</strong>"
    }
}

function validNumber() {
    var value = inpNumber.value;
    var reg =/^1[35789][0-9]{9}$/;
    var result = reg.test(value);
    if(result===true){
        spNumber.innerHTML ="√";
    }else{
        spNumber.innerHTML = "<strong>手机号：11位的数字，1[35789]开头</strong>"
    }
}

function validEmail() {
    var value = inpEmail.value;
    var reg =/^\S{4}@\S{3}.(com|cn|net|org|edu)$/;
    var result = reg.test(value);
    if(result===true){
        spEmail.innerHTML ="√";
    }else{
        spEmail.innerHTML = "<strong>邮箱:  xxxx@xxx.com/net/cn/org/edu</strong>"
    }
}
