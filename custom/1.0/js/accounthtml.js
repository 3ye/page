
function timeFix(n) {
    rs = '';
    if (n < 10) {
        rs = '0' + n;
    }
    else {
        rs = n;
    }
    return rs;
}

function showTime() {
    $('#dtD').text(nowDate.getFullYear() + '/' + timeFix(nowDate.getMonth() + 1) + '/' + timeFix(nowDate.getDate()));
    $('#dtTime').text(timeFix(nowDate.getHours()) + ':' + timeFix(nowDate.getMinutes()) + ':' + timeFix(nowDate.getSeconds()));
    nowDate.setSeconds(nowDate.getSeconds() + 1);
    setTimeout(showTime, 1000);
}

function getNowTime() {
    return '' + nowDate.getFullYear() + timeFix(nowDate.getMonth() + 1) + timeFix(nowDate.getDate()) + timeFix(nowDate.getHours()) + timeFix(nowDate.getMinutes()) + timeFix(nowDate.getSeconds());
}


function stateMsg(m, color) {

    $('#stateMsg').html(m);

    $('#stateMsg').removeClass();
    switch (color) {
        case "red":
            $('#stateMsg').addClass('text-danger');
            break;
        default:
            break;
    }
}
//init 

function initall() {
    nowDate = new Date();
    showTime();





}