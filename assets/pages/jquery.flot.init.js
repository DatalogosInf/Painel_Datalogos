$(document).ready(function () {

var data7_1 = [
    [1354586000000, 800],
    [1354587000000, 775],
    [1354588000000, 895],
    [1354589000000, 665],
    [1354590000000, 595],
    [1354591000000, 845],
    [1354592000000, 625],
    [1354593000000, 695],
    [1354594000000, 765],
    [1354595000000, 695],
    [1354596000000, 785],
    [1354597000000, 815]
];
var data7_2 = [
    [1354586000000, 370],
    [1354587000000, 270],
    [1354588000000, 290],
    [1354589000000, 160],
    [1354590000000, 200],
    [1354591000000, 240],
    [1354592000000, 220],
    [1354593000000, 190],
    [1354594000000, 160],
    [1354595000000, 290],
    [1354596000000, 280],
    [1354597000000, 110]
];
$(function() {
    $.plot($("#visitors-chart #visitors-container"), [{
        data: data7_1,
        label: "Page View",
        lines: {
            fill: true
        }
    }, {
        data: data7_2,
        label: "Online User",

        points: {
            show: true
        },
        lines: {
            show: true
        },
        yaxis: 2
    }
    ],
        {
            series: {
                lines: {
                    show: true,
                    fill: false
                },
                points: {
                    show: true,
                    lineWidth: 2,
                    fill: true,
                    fillColor: "#ffffff",
                    symbol: "circle",
                    radius: 5
                },
                shadowSize: 0
            },
            grid: {
                hoverable: true,
                clickable: true,
                tickColor: "#f9f9f9",
                borderWidth: 1,
                borderColor: "#eeeeee"
            },
            colors: ["#0174C8", "#3B8DD5"],
            tooltip: true,
            tooltipOpts: {
                defaultTheme: false
            },
            xaxis: {
                mode: "time"


            },
            yaxes: [{
                /* First y axis */
            }, {
                /* Second y axis */
                position: "right" /* left or right */
            }]
        }
    );
});



    var flot1 = function () {
        var data = [[0, 11], [1, 15], [2, 25], [3, 24], [4, 13], [5, 18]];
        var dataset = [{
            data: data,
            color: "#0F7AF4",
        }];
        var ticks = [[0, "1"], [1, "2"], [2, "3"], [3, "4"], [4, "5"], [5, "6"]];

        var options = {
            series: {
                bars: {
                    show: true
                }
            },
            bars: {
                align: "center",
                barWidth: 0.5
            },
            xaxis: {
                ticks: ticks
            },
            legend: {
                show: false
            },
            grid: {
                color: "#AFAFAF",
                hoverable: true,
                borderWidth: 0,
                backgroundColor: '#FFF'
            },
            tooltip: true,
            tooltipOpts: {
                content: "X: %x, Y: %y",
                defaultTheme: false
            }
        };
        $.plot($("#flot1"), dataset, options);
    };
    
    var flot2 = function () {
        var data = [[0, 11], [1, 15], [2, 25], [3, 24], [4, 13], [5, 18]];
        var dataset = [{
            data: data,
            color: "#03A9F3"
        }];
        var ticks = [[0, "1"], [1, "2"], [2, "3"], [3, "4"], [4, "5"], [5, "6"]];

        var options = {
            series: {
                lines: {
                    show: true
                }
            },
            bars: {
                align: "center",
                barWidth: 0.5
            },
            xaxis: {
                ticks: ticks
            },
            legend: {
                show: false
            },
            grid: {
                color: "#AFAFAF",
                hoverable: true,
                borderWidth: 0,
                backgroundColor: '#FFF'
            },
            tooltip: true,
            tooltipOpts: {
                content: "X: %x, Y: %y",
                defaultTheme: false
            }
        };
        $.plot($("#flot2"), dataset, options);
    };
    
	
	var dataSet = [
		{ label: "Mobile", data: 41196300, color: "#3FB7EE" },
		{ label: "Laptop", data: 10129600, color: "#727CB6" },
		{ label: "App", data: 72708000, color: "#00ACAC" },
		{ label: "Ipad", data: 344120, color: "#FF6384" }
	];

	$.plot('#flot3', dataSet, {
		series: {
			pie: {
				show: true,
				combine: {
				color: '#3B8DD5',
				threshold: 0.1
				}
			}
		},
		legend: {
		show: false
		}
	});
	
	
    var flot4 = function () {

		var data = [],
			totalPoints = 300;
        
		function getRandomData() {

			if (data.length > 0)
				data = data.slice(1);

			// Do a random walk

			while (data.length < totalPoints) {

				var prev = data.length > 0 ? data[data.length - 1] : 50,
					y = prev + Math.random() * 10 - 5;

				if (y < 0) {
					y = 0;
				} else if (y > 100) {
					y = 100;
				}

				data.push(y);
			}

			// Zip the generated y values with the x values

			var res = [];
			for (var i = 0; i < data.length; ++i) {
				res.push([i, data[i]])
			}

			return res;
		}

		var plot4 = $.plot("#flot4", [ getRandomData() ], {
			series: {
				shadowSize: 0	// Drawing is faster without shadows
			},
			yaxis: {
				min: 0,
				max: 100
			},
			xaxis: {
				show: false
			},
            colors: ["#03A9F3"],
            legend: {
                show: false
            },
            grid: {
                color: "#AFAFAF",
                hoverable: true,
                borderWidth: 0,
                backgroundColor: '#FFF'
            },
            tooltip: true,
            tooltipOpts: {
                content: "Y: %y",
                defaultTheme: false
            }
		});

		function update() {
			plot4.setData([getRandomData()]);

			plot4.draw();
			setTimeout(update, 30);
		}

		update();
        
    };

    flot1();
    flot2();
    flot4();
});