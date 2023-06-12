$(document).ready(function () {
    $("#section_best").hide();
    $("#hide").attr('disabled', true);
    $("#hide").click(function () {
        $("#section_best").hide();
        $("#hide").attr('disabled', true);
        $("#show").attr('disabled', false);

    });
    $("#show").click(function () {
        $("#section_best").show();
        $("#hide").attr('disabled', false);
        $("#show").attr('disabled', true);
    });
});
