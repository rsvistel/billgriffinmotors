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



