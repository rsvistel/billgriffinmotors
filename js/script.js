    $(document).ready(function () {
        $('.mobile-open').click(function () {
            $(this).find('object').toggle();
            $('.bottom-half-header').toggle();
        });
       
    });

$(document).ready(function(){
    // $(function() {
    //   $('.mobile-open').on('click', function(e) {
    //     e.preventDefault();
    //     $(this).find('object').toggle();
    //     $('.bottom-half-header').toggle();
    //   });
    //
    //   $(window).resize(function(){
    //     var width = $(this).width();
    //     if(width > 480 && $('.bottom-half-header').is(':hidden')) {
    //         $('.bottom-half-header').removeAttr('style');
    //     }
    //   });
    // });

   $(".collapse.show").each(function(){
   $(this).prev(".card-header").find(".unactive").addClass("accordion__up-icon").removeClass("accordion__down-icon");
   });
   $(".collapse").on('show.bs.collapse', function(){
   $(this).prev(".card-header").find(".unactive").removeClass("accordion__down-icon").addClass("accordion__up-icon");
   }).on('hide.bs.collapse', function(){
   $(this).prev(".card-header").find(".unactive").removeClass("accordion__up-icon").addClass("accordion__down-icon");
   });

    $('#collapseThree .switch .slider').click(function () {
        $('.total-price, .monthly-price').toggle()
    });

    $('#accordion .card h5 button').click(function () {
        $(this).closest('.card-header').toggleClass('opened');
        $('.card-header').each(function () {
            var card = $(this);
            if ($(this).hasClass('opened')) {
                card.find('h5').click()
            }
        });
    });

    $('#accordion .card .card-body button').click(function () {
        $(this).closest('.card-body').find('.checkbox-container').toggleClass('opened');
        if ($(this).html().indexOf("Show") >= 0) {
            $(this).html($(this).html().replace("Show", "Hide"));
        } else {
            $(this).html($(this).html().replace("Hide", "Show"));
        }
    });

    $('.block-used-cars .filter-navigation-menu .filters .col-md-6 ul li').click(function () {
        $(this).find('i').toggleClass('fa-caret-down').toggleClass('fa-caret-up')
    });

    $('#mobile-filter ul li').click(function () {
        $('#mobile-filter span').html($(this).html());
    });

    $('#mobile-filter, .close-filter-trigger').click(function () {
        if (!$('.close-filter-trigger').hasClass('accordion-opened')) {
            $('#mobile-filter ul').toggleClass('opened');
            $('.close-filter-trigger').toggleClass('opened');
        }
    });

    $('.close-filter-trigger').click(function () {
        if ($('#accordion').hasClass('opened')) {
            $('#accordion').toggleClass('opened');
        }
        $('.close-filter-trigger').toggleClass('accordion-opened');
    });

    $('.accordion-tumbler').click(function () {
        $('#accordion').toggleClass('opened');
        $('.close-filter-trigger').toggleClass('accordion-opened');
    });

    $('#carouselExampleControls').carousel({
        interval: false
    });

    $(".more").click(function() {
        var elem = $(".more").text();
        if (elem == "more") {
            $(".more").text("less");
            $(".complete").show();
            $(".more-icon").addClass('fa-angle-up').removeClass('fa-angle-down');

        } else {
            $(".more").text("more");
            $(".complete").hide();
            $(".more-icon").addClass('fa-angle-down').removeClass('fa-angle-up');
        }
    });
});



