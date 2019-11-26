//获取当前年份
let year=new Date().getFullYear()
//调用calendar函数，设置cal内容显示年历
document.getElementById("cal").innerHTML=calendar(year)

function setCalendar(year){
   document.getElementById('cal').innerHTML='<div class="box" id="cal"></div>';

   var curyear=parseInt(year)
    //设置curyear
   var preyear=curyear-1;
    //设置preyear
   var nextyear=curyear+1;
    //设置nextyear    html+='<table>';
    document.getElementById('curyear').setAttribute('data-year',curyear);
    document.getElementById('preyear').setAttribute('data-year',preyear);
    document.getElementById('nextyear').setAttribute('data-year',nextyear);
    document.getElementById('curyear').innerText=curyear;
    document.getElementById('preyear').innerText="<<"+preyear;
    document.getElementById('nextyear').innerText=nextyear+">>"
     
    //设置cal显示年历
    document.getElementById('cal').innerHTML=calendar(year)
}