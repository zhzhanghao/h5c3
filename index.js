/**
 * Created by lenovo on 2017/8/18.
 */
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    loop: false,

    // 如果需要分页器
    pagination: '.swiper-pagination',
    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
        swiperAnimateCache(swiper); //隐藏动画元素
        swiperAnimate(swiper); //初始化完成开始动画
    },
    onSlideChangeEnd: function(swiper){
        swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    }

});
