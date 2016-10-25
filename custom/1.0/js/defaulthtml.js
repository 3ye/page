
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


function dutyOn() {
    $('#dutyOff').removeClass('active');
    $('#dutyOn').addClass('active');
}
function dutyOff() {
    $('#dutyOn').removeClass('active');
    $('#dutyOff').addClass('active');
}

$('#dutyOn').click(function () {
    dutyOn();
});
$('#dutyOff').click(function () {
    dutyOff();
});



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



//test 
$('#test30').click(function () {
    swal({ title: "與伺服器連結失敗", type: "error" });
});

$('#test10').click(function () {

    stateMsg('請使用IE瀏覽器，<br />自然人憑證只支援IE瀏覽器。', 'red');
    $('#sysInfo table tr:eq(1) td:eq(2)').text('錯誤').addClass('text-danger');
    $('#divMsg a[href="#sysInfo"]').tab('show');

});
$('#test11').click(function () {

    stateMsg('請選擇先上班或是下班再插入卡片', '');
    $('#sysInfo table tr:eq(1) td:eq(2)').text('正常').removeClass();
    $('#sysInfo table tr:eq(2) td:eq(2)').text('正常').removeClass();
    $('#sysInfo table tr:eq(3) td:eq(2)').text('正常').removeClass();
    $('#divMsg a[href="#note"]').tab('show');

});

$('#test20').click(function () {


    var dt = new Date();
    var d = {
        name: 'OOO',
        d: dt.getFullYear() + '/' + timeFix(dt.getMonth() + 1) + '/' + timeFix(dt.getDate()),
        off: timeFix(dt.getHours()) + ':' + timeFix(dt.getMinutes()) + ':' + timeFix(dt.getSeconds()),
        on: timeFix(dt.getHours()) + ':' + timeFix(dt.getMinutes()) + ':' + timeFix(dt.getSeconds()),
        msg: '失敗失敗失敗失敗失敗失敗'
    }

    var a, b, t, msg;
    a = ($('#divTimer .active').attr('id') == 'dutyOff') ? '簽退' : '簽到';
    b = '<span class="text-danger">失敗</span>';
    msg = d.msg;

    //-

    var tbody = '<tr><td>' + d.d + '</td><td>';
    if ($('#divTimer .active').attr('id') == 'dutyOff') {
        tbody += d.off + '</td><td>下班</td><td>';
    }
    else {
        tbody += d.on + '</td><td>上班</td><td>';
    }
    tbody += d.name + '</td><td>' + b + '</td></tr>';

    $('#tbSignNow tbody').prepend(tbody);

    swal({ title: a + b, text: msg, type: 'error', closeOnConfirm: false, showConfirmButton: true, html: true });

});
$('#test21').click(function () {

    var dt = new Date();
    var d = {
        name: 'OOO',
        d: dt.getFullYear() + '/' + timeFix(dt.getMonth() + 1) + '/' + timeFix(dt.getDate()),
        off: timeFix(dt.getHours()) + ':' + timeFix(dt.getMinutes()) + ':' + timeFix(dt.getSeconds()),
        on: timeFix(dt.getHours()) + ':' + timeFix(dt.getMinutes()) + ':' + timeFix(dt.getSeconds()),
        msg: '0.0'
    }


    var a, b, t, msg;
    a = ($('#divTimer .active').attr('id') == 'dutyOff') ? '簽退' : '簽到';

    b = '<span>成功</span>';
    msg = d.d + '<br /><b>上班: </b> ' + d.on + '<br /><b>下班: </b> ' + d.off;

    if (d.msg.length > 0) {
        msg += '<br /><br />' + d.msg;
    }



    var tbody = '<tr><td>' + d.d + '</td><td>';
    if ($('#divTimer .active').attr('id') == 'dutyOff') {

        tbody += d.off + '</td><td>下班</td><td>';
    }
    else {
        tbody += d.on + '</td><td>上班</td><td>';
    }

    tbody += d.name + '</td><td>' + b + '</td></tr>';


    $('#tbSignNow tbody').prepend(tbody);
    swal({ title: a + b, text: msg, type: 'success', closeOnConfirm: false, showConfirmButton: true, html: true });

});



//init 

function initall() {
    nowDate = new Date();
    showTime();

    if (nowDate.getHours() >= 12) {
        dutyOff();
    }
    else {
        dutyOn();
    }

    ajaxGetTime();
    


}
