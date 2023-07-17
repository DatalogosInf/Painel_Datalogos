 $(document).ready(function() {
	 
/*Sales Statics chart*/
    $(function () {
    var sharpLineData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Example dataset",
                fillColor: "rgba(190,245,251,0.7)",
                strokeColor: "rgba(23,112,233,0.7)",
                pointColor: "#6C9CA1",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(23,112,233,1)",
                data: [30, 55, 80, 55, 80, 30, 60]
            }
        ]
    };

    var sharpLineOptions = {
	scaleShowGridLines: true,
	scaleGridLineColor: "rgba(0,0,0,.00)",
	scaleGridLineWidth: 1,
	bezierCurve: false,
	pointDot: true,
	pointDotRadius: 4,
	pointDotStrokeWidth: 1,
	pointHitDetectionRadius: 20,
	datasetStroke: false,
	datasetStrokeWidth: 1,
	datasetFill: true,
	responsive: true,
	resize: true
    };

    var ctx = document.getElementById("sharpLinechart").getContext("2d");
    var myNewChart = new Chart(ctx).Line(sharpLineData, sharpLineOptions);
    });
	
	 
 })
 
 