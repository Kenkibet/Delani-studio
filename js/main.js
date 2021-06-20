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
});