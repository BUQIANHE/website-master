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
  $('.icon-search').on('click', function(){

    $(this).siblings('.search_form').slideToggle();

  })

  // 手机端菜单点击
  $('.top_menu_btn ').on('click', function(){

    $(this).find('i').toggleClass('icon-cross');

    if($('.top_menu_btn i').is('.icon-cross')){

      $('.top_nav').addClass('active');

    }else{

      $('.top_nav').removeClass('active');
      
    }

  })


})