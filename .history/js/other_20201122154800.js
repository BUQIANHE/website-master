$(function(){

  // 导航滚动
  $(window).scroll(function () { 

    if($(document).scrollTop() > 0 ){ // && screen.width > 960

      $(".hd_inner").addClass("active");

    }else{

      if($('.top_menu_btn i').is('.icon-cross')){

        $(".hd_inner").removeClass("active");

      }else{

        $(".hd_inner").removeClass("active");

      }
      
    }
  });

  // 搜索
  $('.icon-search').on('click', function(){

    $(this).siblings('.search_form').slideToggle();

  })

  // 手机端菜单点击
  $('.top_menu_btn ').on('click', function(){

    if(screen.width <= 1150){

      $(this).parents('.hd_inner').toggleClass('red');
      
      $(this).toggleClass('white');

      $(this).find('i').toggleClass('icon-cross');

    }

    if($('.top_menu_btn i').is('.icon-cross')){

      $('.top_nav').addClass('active');

    }else{

      $('.top_nav').removeClass('active');

    }

  })


})