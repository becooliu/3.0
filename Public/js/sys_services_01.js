$(function(){
    $('.sys_services_01').each(function(){
        var self = $(this);
        var closeBtn = self.find('.header .fa.fa-close');
        var reShow = self.find('>.fa.fa-angle-double-left');
        closeBtn.on('click' , function(){
            self.find('>div').stop(true).slideUp(function(){
                reShow.fadeToggle();
            });
        });
        reShow.on('click', function(){
            reShow.stop(true).hide(function(){
                self.find('>div').slideToggle();
            });
        })
    })
})