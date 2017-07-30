var Sys_calendar_01 = function(obj){
    this.head = [{"0" : "星期日"},{"1" : "星期一"},{"2" : "星期二"},{"3" : "星期三"},{"4" : "星期四"},{"5" : "星期五"},{"6" : "星期六"}],
    this.month_day = [
        {"days" : "31"},
        {"days" : "28"},
        {"days" : "31"},
        {"days" : "30"},
        {"days" : "31"},
        {"days" : "30"},
        {"days" : "31"},
        {"days" : "31"},
        {"days" : "30"},
        {"days" : "31"},
        {"days" : "30"},
        {"days" : "31"}
    ],
    this.weekDay = 7,
    this.cur_year = 0,
    this.cur_month = 0,
    this.isLeapYear = false,
    this.day1 = 0,
    this.init = function(){
        var date = new Date();
        this.cur_year = date.getFullYear();
        this.isLeapYear = this.checkLeapYear(this.cur_year);
        this.setFeb();
        this.cur_month = date.getMonth();
        this.printDay();

        //当前月第一天星期几
        this.day1 = new Date(this.cur_year,this.cur_month,01).getDay();
    },
    this.checkLeapYear = function(year){
        return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0) ? true : false;
    },
    this.setFeb = function(){
       this.isLeapYear == "true" ? this.month_day[1] = 29 : this.month_day[1] = 28;
        console.log(this.month_day[1]);
    },
    this.printDay = function(){
        var days = parseInt(this.month_day[this.cur_month].days);
        var table = $('.sys_calendar > table');
        for(var j = 1; j< days; j++){
            for(var i = 1; i<this.weekDay; i++){
                table.append('<tr></tr>')
                table.find('tr').eq(i).append('<td>'+j+'</td>')

            }
        }
    },
    this.getDay = function(){

    }
}
$(function(){
    $('.sys_calendar_01').each(function(){
        var cal_01 = new Sys_calendar_01($(this));
        cal_01.init();
    })
})