$(function(){
    $('.sys_tab').each(function(){
        var SELF = $(this);
        var tabItem = SELF.find('>.tab-list >li'),
            _index,
            tabContentItem = SELF.find('>.tab-content-box >.tab-panel');
        tabItem.on('click' , function(){
            _index = $(this).index();
            //console.log(_index);
            $(this).stop(true).addClass('active').siblings().removeClass('active');
            tabContentItem.stop(true).removeClass('active').hide().eq(_index).fadeIn().addClass('active');
        })
    })
})