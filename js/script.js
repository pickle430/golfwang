$(function () {

    let vh=$(window).height();





    $(".m_gnb .m_list li .m_menu").on({
        "click":function(){
            $(".m_list li .m_sub_menu li").removeClass("on");
            $(this).siblings("ul.m_sub_menu").slideToggle();
            $(this).parent().siblings("li").children("ul.m_sub_menu").slideUp();
            
        }
    })
    $(".m_list li .m_sub_menu li").on({
        "click":function(){
            
            $(".m_list li .m_sub_menu li").not(this).removeClass("on");
            $(this).toggleClass("on");
        }
    })
    
    
    $(".gnb>li").on({
     "mouseenter":function(){
        // $(".sub_menu").slideDown(1000);
        
        // $(this).children(".sub_menu").show();
        $(this).children(".sub_menu").addClass("on");

     },
     "mouseleave":function(){
        $(this).children(".sub_menu").removeClass("on");



     },
     "click":function(){
         
     }
    })



    $(window).scroll(function () {
        let scrTop = $(window).scrollTop();
        
        vh = $(window).height();
        
        if (scrTop > 300) {
            $("#top").addClass("on");
        } else {
            $("#top").removeClass("on");
        }


        if ($(window).scrollTop() >= $(document).height() - $(window).height() -10) {
            $(".golf").addClass("on");


        } else {
            $(".golf").removeClass("on");

        }

        let footerTop = $("iframe").offset().top;
        let bgTop = $(".bg").offset().top;
        /* iframe 2139 */

        
        if (scrTop >= bgTop-300) {
            /* 스크롤이 기준 이상인 경우 */
            $(".bg").addClass("on");
            $("#wrap").addClass("on");
            $("#top").removeClass("on");
        }
        else {
             /* 스크롤이 기준 이하인 경우 */
            $(".bg").removeClass("on");
            $("#wrap").removeClass("on");  
        }
        if (scrTop >= footerTop-300) {
            $("nav").slideUp(200);
        }
        else{
            $("nav").slideDown(200);
        }


      


    });
    $(window).resize(function(){
        vh = $(window).height();
        
    });





    let sImgW;
    let count;

    function playSlider() {
        sImgW = $(".slide>li>a>img").width();
        count = $(".slide>li").length;

        $(".slide").stop().animate({
            marginLeft: -sImgW
        }, 1000, function () {
            $(".slide>li:first").insertAfter(".slide>li:last");
            $(".slide").css("margin-left", 0);
        }, )
    }





    let msImgW;
    let mcount

    function playShopslider() {
        msImgW = $(".shop_slide img").width();
        mcount = $(".shop_slide li").length;

        $(".shop_slide").animate({
            marginLeft: -msImgW
        }, 4000, "linear", function () {
            $(".shop_slide>li:first").insertAfter(".shop_slide>li:last");
            $(".shop_slide").css("margin-left", 0);
        }, )
    }



    let shopPlay = setInterval(playShopslider)







    let sPlay = setInterval(playSlider, 3000)

    /* 슬라이더 마우스 멈춤기능 */

    /* $(".slide a").on({
        "mouseenter": function () {
            clearInterval(sPlay)
        },
        "mouseleave": function () {
            sPlay = setInterval(playSlider, 3000)
        }
    }); */
    let modal_height = 0;
    let repeat_modal;
    $(".fa-chevron-up").click(function () {
        repeat_modal = 3607/(0.7*vh);
        if (modal_height > 0) {
            modal_height--;
            $(".modal img").animate({
                "margin-top": modal_height * (-vh*0.7) + "px"
            })
            
        }
    })
    $(".fa-chevron-down").click(function () {
        repeat_modal = 3607/(0.7*vh);
        if ((modal_height)< 5) {
            modal_height++;
            $(".modal img").animate({
                "margin-top": modal_height * (-vh*0.7) + "px"
            })
            
        }
    })


    $(".preview img").click(function () {
        $("#popup").fadeIn();

        $(".modal").click(function (e) {
            e.stopPropagation(); //이벤트 버블링현상 차단
        });
        $("#popup").click(function () {
            $("#popup").fadeOut();
        });
    });
    $(".address button").on({
        "mouseenter": function () {
            $(this).addClass("on");
        },
        "mouseleave": function () {
            $(this).removeClass("on");
        }

    });




    $(".toggle").click(function (e) {
        e.preventDefault();
        $(".m_gnb").addClass("on");
        $(".m_back").addClass("on");
        
        $(".m_gnb").click(function (e) {
            e.stopPropagation(); //이벤트 버블링현상 차단
        });
        $(".m_back").click(function () {
            $(".m_gnb").removeClass("on");
            $(".m_back").removeClass("on");
            
        });

    });



    $(".gnb").click(function(e){
        e.preventDefault();
    })
    $(".m_list>li>a").click(function(e){
        e.preventDefault();
    })

    $(".m_list>li>ul>li>a").click(function(e){
        e.preventDefault();
    })

    $(".login a").click(function(e){
        e.preventDefault();
    })
    $(".sns a").click(function(e){
        e.preventDefault();
    })

});