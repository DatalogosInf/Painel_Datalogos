$(document).ready(function() {

	$("#range_1").ionRangeSlider({
    min: 100,
    max: 1000,
    from: 550
	});

	$("#range_2").ionRangeSlider({
    type: "double",
    grid: true,
    min: -1000,
    max: 1000,
    from: -500,
    to: 500
});

	$("#range_3").ionRangeSlider({
    type: "double",
    grid: true,
    from: 1,
    to: 5,
    values: [0, 10, 100, 1000, 10000, 100000, 1000000]
});

	$("#range_4").ionRangeSlider({
    grid: true,
    min: 1000,
    max: 1000000,
    from: 100000,
    step: 1000,
    prettify_enabled: false
});


$("#range_5").ionRangeSlider({
    grid: true,
    min: 18,
    max: 70,
    from: 30,
    prefix: "Age ",
    max_postfix: "+"
});;

$("#range_6").ionRangeSlider({
    type: "double",
    min: 1000,
    max: 2000,
    from: 1200,
    to: 1800,
    hide_min_max: true,
    hide_from_to: true,
    grid: true
});


});