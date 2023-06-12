/* $(function () {
    $('#date').datepicker({ dateFormat: "yy-mm-dd" });
    $('#datepicker').on('click', function () {
        if ($('#ui-datepicker-div').is(':visible')) {
            $(this).datepicker('hide');
        } else {
            $(this).datepicker('show');
        }
    });

    let field = $('#date');
    let today = new Date();
    field.val(`${today.getFullYear()}-${addZero(today.getMonth() + 1)}-${addZero(today.getDate())}`);

    makeDatepicker($('#datepicker, #date'), $('#date'));

});*/
$(function () {
    $("#datepicker").datepicker();
});
