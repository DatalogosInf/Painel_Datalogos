 $(document).ready(function() {
	 

		Morris.Area({
        element: 'morris-area-chart',
        data: [{
                    period: '2010',
                    iphone: 0,
                    ipad: 0,
                    itouch: 0
                }, {
                    period: '2011',
                    iphone: 210,
                    ipad: 160,
                    itouch: 120
                }, {
                     period: '2012',
                    iphone: 80,
                    ipad: 50,
                    itouch:30
                }, {
                     period: '2013',
                    iphone: 210,
                    ipad: 160,
                    itouch: 120
                }, {
                    period: '2014',
                    iphone:70,
                    ipad: 50,
                    itouch: 30
                }, {
                    period: '2015',
                    iphone: 210,
                    ipad: 160,
                    itouch: 120
                }, {
                    period: '2016',
                    iphone:70,
                    ipad: 50,
                    itouch:30
                }


                ],
                lineColors: ['#4090D5', '#01c0c8', '#D5EEE9'],
                xkey: 'period',
                ykeys: ['iphone', 'ipad', 'itouch'],
                labels: ['iphone', 'ipad', 'itouch'],
                pointSize: 0,
                lineWidth: 0,
                resize:true,
                fillOpacity: 0.5,
                behaveLikeLine: true,
                gridLineColor: '#e0e0e0',
                hideHover: 'auto'
        
    });
	
	
	
	 var sparklineChart = function() { 



   $('#dash_tiles1').sparkline([ 7, 9, 11, 10, 11, 12, 9, 12], {
            type: 'bar',
            height: '30',
            barWidth: '4',
            resize: true,
            barSpacing: '5',
            barColor: '#E5051F'
        });


 $('#dash_tiles2').sparkline([ 7, 9, 11, 10, 11, 12, 9, 12], {
            type: 'bar',
            height: '30',
            barWidth: '4',
            resize: true,
            barSpacing: '5',
            barColor: '#BA0C83'
        });

        $('#dash_tiles3').sparkline([ 7, 9, 11, 10, 11, 12, 9, 12], {
            type: 'bar',
            height: '30',
            barWidth: '4',
            resize: true,
            barSpacing: '5',
            barColor: '#E05316'
        });
         $('#dash_tiles4').sparkline([ 7, 9, 11, 10, 11, 12, 9, 12], {
            type: 'bar',
            height: '30',
            barWidth: '4',
            resize: true,
            barSpacing: '5',
            barColor: '#7134E3'
        });
         

   
   }
    var sparkResize;
 
        $(window).resize(function(e) {
            clearTimeout(sparkResize);
            sparkResize = setTimeout(sparklineChart, 500);
        });
        sparklineChart();

	  
	  
	  
	    Morris.Donut({
        element: 'morris-dash1',
        data: [
            {label: 'Javascript', value: 45 },
            {label: 'HTML5', value: 60 },
            {label: 'CSS3', value: 90 },
            {label: 'PHP', value: 55 }
        ],
        resize: true,
        colors: ['#6E8CD7', '#34D3EB', '#7266BA','#5DDCEF'],
    });
	  
	
	
     Morris.Line({
        element: 'morris-sales-dash',
        data: [
            { year: '2010', iphone: 50, ipad: 80, ipod:20 },
            { year: '2011', iphone: 130, ipad: 100 ,  ipod:80},
            { year: '2012', iphone: 80, ipad: 60,  ipod:70 },
            { year: '2013', iphone: 70, ipad: 200,  ipod:140 },
            { year: '2014', iphone: 105, ipad: 100,  ipod:80 },
            { year: '2015', iphone: 180, ipad: 150 ,  ipod:40},
            { year: '2016', iphone: 250, ipad: 150,  ipod:200 } 
        ],
        xkey: 'year',
        ykeys: ['iphone', 'ipad','ipod'],
        labels: ['iphone', 'iphone','iphone'],
        resize: true,
        lineColors: ['#FC5844','#FDAA26','#01C0C8'],
		hideHover: 'auto',
    });
		
	  
	  
	   var m2 = new Morris.Line({
        // ID of the element in which to draw the chart.
        element: 'line-chart',
        // Chart data records -- each entry in this array corresponds to a point on
        // the chart.
        data: [
            { y: '2006', a: 50, b: 0 },
            { y: '2007', a: 60,  b: 25 },
            { y: '2008', a: 45,  b: 30 },
            { y: '2009', a: 40,  b: 20 },
            { y: '2010', a: 50,  b: 35 },
            { y: '2011', a: 60,  b: 50 },
            { y: '2012', a: 65, b: 55 }
        ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        gridTextColor: 'rgba(255,255,255,0.5)',
        lineColors: ['#fff', '#fdd2a4'],
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

	 jQuery('#sparkline-sales-tiles').sparkline([9,8,8,6,9,10,6,5,6,3,4,2], {
			  type: 'bar', 
			  height:'30px',
			barColor: '#999'
	});
        
   jQuery('#parkline-sales-tiles2').sparkline([4,3,3,1,4,3,2,2,3,10,9,6], {
		  type: 'bar', 
		  height:'30px',
        barColor: '#428BCA'
   });
   
   }
    var sparkResize;
 
        $(window).resize(function(e) {
            clearTimeout(sparkResize);
            sparkResize = setTimeout(sparklineChart, 500);
        });
        sparklineChart();
	
	
	
	 
 })
 
 