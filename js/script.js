$(document).ready(function(){
   // Add minus icon for collapse element which is open by default
   $(".collapse.show").each(function(){
   $(this).prev(".card-header").find(".fa").addClass("fa-chevron-circle-up").removeClass("fa-chevron-circle-down");
   });
   // Toggle plus minus icon on show hide of collapse element
   $(".collapse").on('show.bs.collapse', function(){
   $(this).prev(".card-header").find(".fa").removeClass("fa-chevron-circle-down").addClass("fa-chevron-circle-up");
   }).on('hide.bs.collapse', function(){
   $(this).prev(".card-header").find(".fa").removeClass("fa-chevron-circle-up").addClass("fa-chevron-circle-down");
   });
});