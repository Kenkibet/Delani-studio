$(document).ready(function () {
    // first, hide all the content under the logos
    $(".designContent").hide();
    $(".development-content").hide();
    $(".product-content").hide();

    // Add click listeners
    $("#design").click(function () {
        $("#design").hide();
        $(".designContent").show();
    });
    $(".designContent").click(function () {
        $(".designContent").hide();
        $("#design").show();
    });

    $("#development").click(function () {
        $("#development").hide();
        $(".development-content").show();
    });
    $(".development-content").click(function () {
        $(".development-content").hide();
        $("#development").show();
    });

    $("#product").click(function () {
        $("#product").hide();
        $(".product-content").show();
    });
    $(".product-content").click(function () {
        $(".product-content").hide();
        $("#product").show();
    });

    // handle form submission
    $('.submit').click(function(e) {
        e.preventDefault();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;
    
        if (email.length > 5 && email.includes('@') && email.includes('.')) {
          alert("email is valid")
        } else {
          alert("email is invalid")
        }
        if (name.length > 2) {
          alert(name);
        } else {
          alert('name is invalid')
        }
        if (message.length > 2) {
          document.getElementById('status').innerText = "Thank you for your message!"
        } else {
          document.getElementById('status').innerText = "Please provide a suitable message"
        }
      });
});