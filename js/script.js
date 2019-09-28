

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
});



