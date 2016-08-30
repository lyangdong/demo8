/**
 * Created by liuyangdong on 2016/7/4.
 */
$(function(){
    //点击图片换图
    $('.small img').click(function(){
        //添加红框
        $('img').removeClass('active');
        $(this).addClass('active');
        var index = $('.active').index();
        $('.img-box').css('margin-left',200-(index)*100)
        //点击换图
        var src = $(this).attr('src');
        $('.big img').attr('src',src);
    });
    //点击左按钮换图
    $('.left').click(function(){
        var index = $('.active').index();
        if(index == 0){
            alert(123)
        }else{
            $('.img-box img').removeClass('active');
            $('.img-box img').eq(index-1).addClass('active');
            var src = $('.active').attr('src');
            $('.big img').attr('src',src)
            $('.img-box').css('margin-left',200-(index-1)*100)
        }

    });
    //点击右边按钮换图
    $('.right').click(function(){
        var index = $('.active').index();
        if(index == 9 ){
            alert(321)
        }else{
            $('.img-box').css('margin-left',200-(index+1)*100);
            $('.img-box img').removeClass('active');
            $('.img-box img').eq(index+1).addClass('active');
            var src = $('.active').attr('src');
            $('.big img').attr('src',src)
        }
    });
    //点击放大
    //function myBoost(){
    //    $('.boost').click(function(){
    //        var src =  $('.big img').attr('src');
    //        $('.large').css('background-image','url('+src +')');
    //        var image_obj = new Image();
    //        image_obj.src = src;
    //        image_obj.width = image_obj.width*1.2;
    //        image_obj.height = image_obj.height*1.2;
    //        return image_obj.width;
    //        return image_obj.height;
    //    })
    //}
    //放大鼠标悬停位子图
    $('.big').mousemove(function(e){
        //获取放大窗口图片地址
        var src =  $('.big img').attr('src');
        $('.large').css('background-image','url('+src +')');
        //获取原图地址
        var image_obj = new Image();
        image_obj.src = src;
        //图片放大原图的两倍
        var native_width = image_obj.width*1.5;
        var native_height = image_obj.height*1.5;
        $('.large').css('background-size',native_width+'px '+native_height +'px');
        //获取鼠标箭头相对坐标
        var x = e.pageX - $(this).offset().left;
        var y = e.pageY - $(this).offset().top;

        mx =Math.round( x - $('.large').width()/2);
        my = Math.round(y - $('.large').height()/2);
        //获得放大图的偏移量
        x1 = Math.round(x*native_width/$('.big').width()- $('.large').width()/2)*-1;
        y1 = Math.round(y*native_height/$('.big').height() -  $('.large').height()/2)*-1;
        //设置偏移量不超出图片范围
        if(x1 >= 0 ){
            x1 = 0
        }
        if(x1 <= $('.large').width() - native_width){
            x1 =  $('.large').width()
        }
        if(y1 >= 0){
            y1 = 0
        }
        if(y1 <= $('.large').height() - native_height){
            y1 = $('.large').height()
        }
        //设置偏移量
        $('.large').css({
            backgroundPosition :x1+ 'px '+ y1+ 'px'
        })
       })
    //图片点击切换
    $('.big').click(function(e){
        if(e.pageX-$(this).offset().left < $(this).width()/2){
            var index = $('.active').index();
            if(index == 0){
                alert('第一张')
            }else{
                $('.img-box img').removeClass('active');
                $('.img-box img').eq(index-1).addClass('active');
                var src = $('.active').attr('src');
                $('.big img').attr('src',src)
                $('.img-box').css('margin-left',200-(index-1)*100)
            }
        }
        if(e.pageX-$(this).offset().left>$(this).width()/2){
            var index = $('.active').index();
            if(index == 9 ){
                alert('最后一张')
            }else{
                $('.img-box').css('margin-left',200-(index+1)*100);
                $('.img-box img').removeClass('active');
                $('.img-box img').eq(index+1).addClass('active');
                var src = $('.active').attr('src');
                $('.big img').attr('src',src)
            }
        }

    });
    $('.big img').mouseenter(function(){
        $('.large').css('display','block')
    })
    $('.big img').mouseleave(function(){
        $('.large').css('display','none')
    })
});
