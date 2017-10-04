$(function() {
    $("span:even").css('color', 'red');

    $('p').each(function(index, element) {
        var button = $("<button />", {
            "class": "btn",
            "data-tmp": index
        });
        $(element).append(button);
    });

    $("button").click(function() {
        alert($(this).attr("data-tmp"));
    });
});