 $(document).ready(function() {
	 
	
	 Morris.Area({
            element: 'sales-chart-dash',
            data: [{
                period: '2010',
                SiteA: 0,
                SiteB: 0,
                
            }, {
                period: '2011',
                SiteA: 120,
                SiteB: 90,
                
            }, {
                period: '2012',
                SiteA: 90,
                SiteB: 70,
                
            }, {
                period: '2013',
                SiteA: 80,
                SiteB: 210,
                
            }, {
                period: '2014',
                SiteA: 190,
                SiteB: 130,
                
            }, {
                period: '2015',
                SiteA: 100,
                SiteB: 80,
                
            },
             {
                period: '2016',
                SiteA: 140,
                SiteB: 140,
               
            }],
            xkey: 'period',
            ykeys: ['SiteA', 'SiteB'],
            labels: ['Site A', 'Site B'],
            pointSize: 0,
            fillOpacity: 0.8,
            pointStrokeColors:['#03A9F3', '#FFBD4A'],
            behaveLikeLine: true,
            gridLineColor: '#e0e0e0',
            lineWidth: 0,
            smooth: false,
            hideHover: 'auto',
            lineColors: ['#79CCC6', '#56D8D4'],
            resize: true
            
        });
		
		
		
		
 Morris.Bar({
        element: 'total-revenue',
        data: [
            { year: '2010', a: 30, b: 25 },
            { year: '2011', a: 60, b: 40 },
            { year: '2012', a: 85, b: 65 },
            { year: '2013', a: 100, b: 90 },
            { year: '2014', a: 60, b: 50 },
            { year: '2015', a: 75, b: 65 },
            { year: '2016', a: 100, b: 90 } 
        ],
        xkey: 'year',
        ykeys: ['a', 'b'],
        labels: ['Section A', 'Section B'],
        barRatio: 0.4,
        xLabelAngle: 0,
        hideHover: 'auto',
        barColors: ['#03A9F3','#FFAA00'],
        resize: true
    });	
				
		
		
		
		
	  var m2 = new Morris.Line({
        element: 'line-chart',
        data: [
            { y: '2011', a: 30, b: 0 },
            { y: '2012', a: 30,  b: 25 },
            { y: '2013', a: 45,  b: 30 },
            { y: '2014', a: 40,  b: 20 },
            { y: '2015', a: 50,  b: 35 },
            { y: '2016', a: 60,  b: 50 },
            { y: '2017', a: 65, b: 55 }
        ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        gridTextColor: 'rgba(255,255,255,0.5)',
        lineColors: ['#fff', '#FFAA00'],
        lineWidth: '2px',
        hideHover: 'always',
        smooth: false,
        grid: false
   });
	
	// Trigger Resize in Morris Chart
   var delay = (function() {
		var timer = 0;
		return function(callback, ms) {
			clearTimeout(timer);
			timer = setTimeout(callback, ms);
		};
    })();
	  
	  
	  
	
   var sparklineChart = function() { 

	 jQuery('#sparkline-sales-tiles').sparkline([5,7,6,7,6,9,7,8,10,7,9,10], {
			  type: 'bar', 
			  height:'30px',
			barColor: '#03A9F3'
	});
        
   jQuery('#sparkline-sales-tiles2').sparkline([4,5,7,6,9,8,9,10,6,10,9,6], {
		  type: 'bar', 
		  height:'30px',
        barColor: '#FFAA00'
   });
   
   }
    var sparkResize;
 
        $(window).resize(function(e) {
            clearTimeout(sparkResize);
            sparkResize = setTimeout(sparklineChart, 500);
        });
        sparklineChart();

	
	 
	 
 })
 
 