$(function(){

  // 导航滚动
  $(window).scroll(function () { 

    if($(document).scrollTop() > 0 ){ // && screen.width > 960

      $(".hd_inner").addClass("active");

    }else{

      // if($('.mn-ico .iconfont').is('.icon-cross')){

      //   $(".hd-pos").removeClass("");

      // }else{

        $(".hd_inner").removeClass("active");

      // }
      
    }
  });

  // 搜索
  $('.top_search_btn').on('click', function(){

    $(this).find('.search_form').slideToggle();
    
  })




})