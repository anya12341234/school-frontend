$(function () {
  $(".register-form .form-row input").on("click", function (e) {
    e.preventDefault();
    $(".form-row").toggleClass("active");
  });
});
