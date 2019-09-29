

    $(document).ready(function () {
        $('.mobile-open').click(function () {
            $(this).find('object').toggle();
            $('.bottom-half-header').toggle();
        });
    });


$(document).ready(function(){
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
        if (elem == "more...") {
            $(".more").text("less...");
            $(".complete").show();
            $(".fa").addClass('fa-angle-up').removeClass('fa-angle-down');

        } else {
            $(".more").text("more...");
            $(".complete").hide();
            $(".fa").addClass('fa-angle-down').removeClass('fa-angle-up');
        }
    });
    
    // $('#carouselUsedCar').bind('slid', function() {
    //     currentIndex = $('div.active').index() + 1;
    //    $('.num').html(''+currentIndex+'/'+totalItems+'');
    //    console.log( $('.num').html(''+currentIndex+'/'+totalItems+''))
    // });
    // $('#carouselUsedCar').on('slid.bs.carousel', function() {
    //     currentIndex = $('div.active').index() + 1;
    //    $('.num').html(''+currentIndex+'/'+totalItems+'');
    // });
    // var totalItems = $('.carousel-item').length;
    //     var currentIndex = $('.carousel-item.active').index() + 1;

    //     var down_index;
    //     $('.num').html(''+currentIndex+'/'+totalItems+'');

    //         $(".carousel-control-next").click(function(){
    //         currentIndex_active = $('.carousel-item.active').index() + 2;
    //         if (totalItems >= currentIndex_active)
    //         {
    //             down_index= $('.carousel-item.active').index() + 2;
    //             $('.num').html(''+currentIndex_active+'/'+totalItems+'');
    //         }
    //         });
    // var totalItems = $('.carousel-item').length;
    //         var currentIndex = $('div.carousel-item.active').index() + 1;

    //         var down_index;
    //         $('.num').html(''+currentIndex+'/'+totalItems+'');

    //             $(".carousel-control-next").click(function(){
    //             currentIndex_active = $('div.carousel-item.active').index() + 2;
    //             if (totalItems >= currentIndex_active)
    //             {
    //                 down_index= $('div.carousel-item.active').index() + 2;
    //                 $('.num').html(''+currentIndex_active+'/'+totalItems+'');
    //             }
    //         });

    //             $(".carousel-control-prev").click(function(){
    //                 down_index=down_index-1;
    //             if (down_index >= 1 )
    //             {
    //                 $('.num').html(''+down_index+'/'+totalItems+'');
    //             }
    //         });

});



