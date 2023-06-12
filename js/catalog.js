$(document).ready(function () {
    $("#section_catalog").hide();
    $("#hide-2").attr('disabled', true);
    $("#hide-2").click(function () {
        $("#section_catalog").hide();
        $("#hide-2").attr('disabled', true);
        $("#show").attr('disabled', false);

    });
    $("#show").click(function () {
        $("#section_catalog").show();
        $("#hide-2").attr('disabled', false);
        $("#show").attr('disabled', true);
    });
});


