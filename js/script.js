$(document).ready(function() {
    //slider
    if ($('div').is('.slider') && $(window).width() >= 400) {
        $('.slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 9000
        });
    }

    if ($('div').is('.response-slider')) {
        $('.response-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 9000,
            prevArrow: '<button type="button" class="slick-prev icon-left-circle"></button>',
            nextArrow: '<button type="button" class="slick-next icon-right-circle"></button>'
        });
    }

    //
    // #phone
  // $("#phone").mask("(999) 999-9999",{placeholder:"(...) ...-...."});

    //Select
    $('select').each(function() {
        $(this).siblings('p').text($(this).children('option:selected').text());
    });
    $('select').change(function() {
        $(this).siblings('p').text($(this).children('option:selected').text());
    });
    //pop-up
    $('#pop-up').click(function(e) {
        if (e.target.className == 'poup')
            $('#pop-up').fadeOut();

        return;
    });
    $('.login').click(function() {
        $('#pop-up').fadeIn();
        $('#pop-up div.login-form').show();
        $('#pop-up form.login-form').hide();
        return false;
    });

    $('.register').click(function() {
        $('#pop-up').fadeIn();
        $('#pop-up form.register-form').show();
        $('#pop-up div.login-form').hide();
        $('#pop-up form.login-form').hide();
        return false;
    });

    $('.forgot').click(function() {
        $('#pop-up').fadeIn();
        $('#pop-up form.register-form').hide();
        $('#pop-up div.login-form').hide();
        $('#pop-up form.login-form').hide();
        $('#pop-up form.forgot-form').show();
        return false;
    });
    //lang
    $('#selected').toggle(function() {
            $('.list_lang').slideDown();
        },
        function() {
            $('.list_lang').slideUp();
        }
    );
    $('.list_lang li').click(function() {
        var current = $('#selected').html();
        $('#selected').html($(this).children().html());
        $(this).children().html(current);
        $('.list_lang').slideUp();
    });
    //nav
    $('.navbar-toggle').toggle(function() {
            $('ul.header_nav').slideDown();
        }, function() {
            $('ul.header_nav').slideUp();
        })


    $('.circle-list li').toggle(function() {
        $('.hide',$(this)).slideDown();
    }, function() {
        $('.hide',$(this)).slideUp();
    });
    $('#login').click(function() {
        $('#pop-up div.login-form').hide();
        $('#pop-up form.login-form').show();
        return false;
    });
    //Tabs

    $('.tabs').on('click', 'article:not(.current)', function() {
        $(this).addClass('current').siblings().removeClass('current')
        .parents('div.tabs').find('div.box').eq($(this).index()).fadeIn(150).siblings('div.box').hide();
    })
                $('.show_form').toggle(function(){
                      $('.post').not('.bottom_post').slideDown();
                 },function(){
                     $('.post').not('.bottom_post').slideUp();
                 });


         $(".join_form").click(function (){
     //            $('.show_form').toggle(function(){
                 //      $('.post').not('.bottom_post').slideDown();
                 // },function(){
                 //      $('.post').not('.bottom_post').slideUp();
                 // });

     //            $('html, body').animate({
     //                scrollTop: $("#join_form").offset().top-30
     //            }, 2000);
                $("#pop-up").show();
                return false;
           });
            $("#submitme").click(function (){
                $.ajax({
                    type: 'POST',
                    url: 'send.php',
                    data: { name: $("#name").val(), phone: $("#phone").val(), time: $("#time").val()  },
                    success: function(response) {
                        content.html(response);
                    }
                });
                Alert("Thank you. Your request been sent.");
                return false;
           });
})