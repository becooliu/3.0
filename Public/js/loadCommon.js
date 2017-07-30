$(function(){
    changeNavSel();
    
})

var changeNavSel = function(){
    var _index = 0;
    $('#nav >ul >li').each(function(){
        var self = $(this);
        var data = self.data('href');
        if(window.location.href.indexOf('ArticleDetail.html') > -1 ){ //文章详情页的菜单栏无active 样式
            return;
        }
        if(window.location.href.indexOf(data) > -1){
            _index = self.index();
            //return;
            $('#nav >ul >li').eq(_index).addClass('active').siblings().removeClass('active');
        }
    })

    //load 完成后加载导航菜单动画效果
    navAnimate($('#nav'));

}

//导航菜单
var navAnimate = function(obj){

    obj.each(function(){
        var SELF = $(this);

        var level1 = SELF.find('> ul >li');
        var _this,
            ulLevel,
            SPEED = 500,
            ulLevel2;

        level1.hover(function(){
            _this = $(this);
            ulLevel = _this.find('>ul');
            ulLevel.stop(true).slideDown(SPEED);

            ulLevel2 = _this.find('>ul >li >ul');
        } , function(){
            ulLevel.stop(true).slideUp(SPEED);
        })

        var liLevel2 = SELF.find('>ul >li >ul >li');
        liLevel2.hover(function(){
            $(this).find('ul').stop(true).slideToggle(SPEED);
        })
    });
}