gapi.load('client:auth2', function() {
    gapi.client.init({
      apiKey: 'AIzaSyDPJVIFMW7AvRfsZ1pWFcowm42C35ex9m8',
      clientId: '115389819293-rshqgeua52ddkuckcljmqa9ckqbcvo0g.apps.googleusercontent.com',
      discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
      scope: 'https://www.googleapis.com/auth/calendar.readonly'
    }).then(function() {
      return gapi.client.calendar.events.list({
        'calendarId': 'SEU_ID_DE_CALENDARIO',
        'timeMin': new Date().toISOString(),
        'showDeleted': false,
        'singleEvents': true,
        'maxResults': 10,
        'orderBy': 'startTime'
      });
    }).then(function(response) {
      // Manipular a resposta do Google Calendar API aqui
    }, function(reason) {
      console.log('Erro: ' + reason.result.error.message);
    });
  });


function searchTable() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1]; // Index 1 refere-se à coluna "razão social"
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}