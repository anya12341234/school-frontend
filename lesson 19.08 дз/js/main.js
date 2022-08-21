$(function() {
    $(".register_form label").on("click", function(e) {
     e.preventDefault();
     $(".form_row").toggleClass("active");
    });
   });