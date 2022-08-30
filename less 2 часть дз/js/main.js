$(function() {
    $(".register_form input").on("click", function(e) {
     e.preventDefault();
     $(".form_row").toggleClass("active");
    });
   });