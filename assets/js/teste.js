 document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
          locale: 'pt-br',
          editable: true,
          eventLimit: true,
          events: 'http://localhost:80/project-panel/php/list_events.php',
          extraParams: function(){
            return {
              cachebuster: new Date().valueOf()
            };
          }
        });
        calendar.render();
      });