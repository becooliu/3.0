$(function () {
    $('.list-group .list-group-item').each(function () {
        var self = $(this);
        self.on('click', function () {
            $('.list-group .list-group-item').removeClass('active');
            $(this).addClass('active').siblings().removeClass('active');
        })
    })

    $('.sidebar-list-item').each(function () {
        var self = $(this);
        self.on('click', '.list-item-title', function () {
            $(this).parent().addClass('active').siblings().removeClass('active');
            $(this).parent().siblings().children('.list-group').slideUp().removeClass('active');

            $(this).siblings('.list-group').slideToggle().toggleClass('active');

        })
    })

    //下拉列表 mouseover 展开
    var mouseOverExpanded = function(str , expandEleStr){
        $(str).each(function(){
            var self = $(this);

            self.on('mouseover' , function(){
                $(this).stop(true).addClass('open').find(expandEleStr).attr('aria-expanded' , 'true');
            })

            self.on('mouseout' , function(){
                var THIS = $(this);
                var Timer = setTimeout(function(){
                    THIS.stop(true).removeClass('open').find(expandEleStr).attr('aria-expanded' , 'false');
                }, 600);

                THIS.children('.dropdown-menu').on('mouseover' , function(){
                    clearInterval(Timer);
                })
            })
        });
    }
    mouseOverExpanded('.btn-group' , 'button.btn.dropdown-toggle');
    mouseOverExpanded('.dropdown' , '>a');


    // editable init;
    if($('.data-sort')){

        $('.data-sort').editable({
            type: "select",                //编辑框的类型。支持text|textarea|select|date|checklist等
            title: "编辑",              //编辑框的标题
            disabled: false,             //是否禁用编辑
            emptytext: "空文本",          //空值的默认文本
            mode: "popup",              //编辑框的模式：支持popup和inline两种模式，默认是popup
            validate: function (value) { //字段验证
                if (!$.trim(value)) {
                    return '不能为空';
                }
            }
        });
    }

    /* Modal init */
    $('#edit-modal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget); // Button that triggered the modal
        var recipient = button.data('name'); // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this);
        modal.find('.modal-title').text('编辑' + recipient);
        modal.find('.modal-body input').val(recipient)
    })

    /* cus-tab tab 标签切换*/
    $('.cus-tab').each(function(){
        var self = $(this);
        var tabItem = self.find('>.tab-list >li'),
            _index,
            tabContentItem = self.find('>.tab-content-box >.tab-panel');
        tabItem.on('click' , function(){
            _index = $(this).index();
            //console.log(_index);
            $(this).stop(true).addClass('active').siblings().removeClass('active');
            tabContentItem.stop(true).removeClass('active').hide().eq(_index).fadeIn().addClass('active');
        })
    })

    /*  select2 初始化 */
    if($('#article-category')){
        $('#article-category').select2();
    }

    /* 表格 checkAll */
    $('.check-all').click(function(){
        var checkSingle = $(this).parents('table').find('td:first-child input[type="checkbox"]');

        if($(this).is(':checked')){
            checkSingle.prop('checked' , true); 
        }else {
            checkSingle.prop('checked' , false);
        }
    })

})