// task 1

$("a[href^='https://']").attr('target', '_blank');


// task 2

$("h2.head").css("background", "green")
$("h2.head").find(".inner").css("fontSize", "35px");

// task 3

$("h3:first").before($("div:first"))
$("h3:last").before($("div:last"))

// task4

function checkIn() {
    let $box = $('input:checked')
    if ($box.length == 3) {
        $('input').prop('disabled', true);
    }
}







