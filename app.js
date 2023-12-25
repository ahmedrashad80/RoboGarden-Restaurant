$("#navbar-toggler").click(function () {
  $(this).addClass("change-color");
});

$(".like-btn").click(function (e) {
  e.preventDefault();
  if ($(this).hasClass("like")) {
    $(this).removeClass("like");
    $(this).addClass("dislike");
    $(this).html("Dislike");
  } else if ($(this).hasClass("dislike")) {
    $(this).removeClass("dislike");
    $(this).addClass("like");
    $(this).html("like");
  }
});

$("form").submit(function (e) {
  e.preventDefault();
  if (!$('input[type="text"]').val()) {
    alert("Name field is required.");
  } else if (!$('input[type="email"]').val()) {
    alert("email field is required.");
  } else if (!$('input[type="phone"]').val()) {
    alert("phone field is required.");
  } else if (!$("textarea").val()) {
    alert("textarea field is required.");
  } else {
    $(".alert").css("display", "block");
  }
});
