$(document).ready(function () {
    // first, hide all the content under the logos
    $(".designContent").hide();
    $(".devContent").hide();
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
});