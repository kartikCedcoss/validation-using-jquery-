$(document).ready(function () {
  $("#msgName").hide();
  $("#msgEmail").hide();
  $("#msgEdu").hide();
  $("#msgGen").hide();
  $("#msgHobb").hide();
  $("#msgComnt").hide();

  $("#btnSubmit").on("click", function () {
    var name = document.getElementById("nameIn").value;
    var email = document.getElementById("emailIn").value;
    var edu = document.getElementById("eduDrop").value;
    var comment = document.getElementById("comnt").value;
    var drawing = document.getElementById("drawing");
    var singing = document.getElementById("singing");
    var dancing = document.getElementById("dancing");

    console.log(typeof comment);

    if (name == "") {
      $("#msgName").show();
      $("#msgName").text(" Name cannot be left Blank").fadeOut(3000);
      $("#msgName").css("color", "red");
    } else if (email == "") {
      $("#msgEmail").show();
      $("#msgEmail").text(" Email cannot be blank").fadeOut(3000);
      $("#msgEmail").css("color", "red");
    } else if (edu == "") {
      $("#msgEdu").show();
      $("#msgEdu").text(" Edu cannot be blank").fadeOut(3000);
      $("#msgEdu").css("color", "red");
    } else if (
      document.getElementById("male").checked == false &&
      document.getElementById("female").checked == false
    ) {
      $("#msgGen").show();
      $("#msgGen").text(" specify your gender").fadeOut(3000);
      $("#msgGen").css("color", "red");
    } else if (comment == "") {
      console.log("comment something");
      $("#msgComnt").show();
      $("#msgComnt").text(" This field is required").fadeOut(3000);
      $("#msgComnt").css("color", "red");
    } else if (
      drawing.checked == false &&
      singing.checked == false &&
      dancing.checked == false
    ) {
      $("#msgHobb").show();
      $("#msgHobb").text(" What are Your Hobbies").fadeOut(3000);
      $("#msgHobb").css("color", "red");
    } else {
      $("#msgSubmit").text("submit");
      $("#msgSubmit").css("color", "green");
      $("#msgName").hide();
      $("#msgEmail").hide();
      $("#msgEdu").hide();
      $("#msgGen").hide();
      $("#msgHobb").hide();
      $("#msgComnt").hide();
    }
  });
});
