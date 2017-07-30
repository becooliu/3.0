var Sys_c01 = function(obj){
    this.inner = null,
    this.items = null,
    this.count = 0,
    this.interval = 3000,
    this.index = 0,
    this.timer = null,

    this.init = function(){
        this.inner = obj.children('.content');
        this.items = this.inner.children();
        this.count = this.items.length;
        
        if (this.count <= 0) return;
        var self = this;

        this.setWidth();
        $(window).on('resize' , function(){
            self.setWidth();
        });
        self.startMove();
        obj.on('click', '.control.prev' , function(){
            //console.log(this);
            self.prev();
        });
        obj.on('click', '.control.next' , function(){
            self.next();
        });
        obj.hover(function(){
            self.stop();
        }, function(){
            self.startMove();
        })
    },
    this.setWidth = function(){
        this.items.width(obj.width());
        this.inner.width(this.items.width() * this.count);
    },
    this.animate = function(){
        this.inner.stop(true).animate({'margin-left' : -(this.items.width() * this.index)},'linear')
    },
    this.next = function(){
        this.index = ++this.index == this.count ? 0 : this.index;
        this.animate();
    },
    this.prev = function(){
        this.index = --this.index < 0 ? this.count - 1 : this.index;
        this.animate();
    },
    this.stop = function(){
        var THIS = this;
        clearInterval(THIS.timer);
    },
    this.startMove = function(){
        var THIS = this;
        this.stop();
        this.timer = setInterval(function(){
            THIS.next();
        },THIS.interval);
    }
}

$(function(){
    $('.sys_carousel_01').each(function(){
        var that = new Sys_c01($(this));
        that.init();
    })
})