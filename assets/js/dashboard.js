//Fluxo de Chamados
var ctx = document.getElementById('fluxo').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',        
  data: {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    //, 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
    datasets: [
      {
        label: 'Abertura de Chamados',
        data: [1942, 1826, 2106, 1634, 2010, 1603],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        fill: false
      },
      {
        label: 'Fechamento de Chamados',
        data: [2128, 1814, 2049, 1624, 2068, 1636],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        fill: false
      }
    ]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});


//Chamadas abertas
var ctx = document.getElementById('divisao').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Suporte', 'Implantação', 'Delphi', 'Web', '2º Nível', 'Comercial', 'Outros'],
    datasets: [{
      label: 'Dados',
      data: [160, 120, 246, 80, 27, 16, 16],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 99, 132, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    legend: {
      display: false // remove toda a legenda
    }
  }
});



// Obtém todos os botões de aba
const tabButtons = document.querySelectorAll('.tablinks');

// Define a função que é executada quando um botão de aba é clicado
function openTab(event, tabName) {
  // Obtém todos os conteúdos de aba
  const tabContents = document.querySelectorAll('.tabcontent');

  // Esconde todos os conteúdos de aba
  tabContents.forEach(tabContent => {
    tabContent.style.display = 'none';
  });

  // Remove a classe "ativa" de todos os botões de aba
  tabButtons.forEach(tabButton => {
    tabButton.classList.remove('active');
  });

  // Mostra o conteúdo da aba correspondente ao botão clicado
  document.getElementById(tabName).style.display = 'block';

  // Adiciona a classe "ativa" ao botão de aba clicado
  event.currentTarget.classList.add('active');
}


const slides = document.querySelectorAll('.carousel__slide');
const prevBtn = document.querySelector('.carousel__prev');
const nextBtn = document.querySelector('.carousel__next');
let currentIndex = 0;
let interval;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

function goToPrevSlide() {
  currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
  showSlide(currentIndex);
}

function goToNextSlide() {
  currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
  showSlide(currentIndex);
}

function startCarousel() {
  interval = setInterval(goToNextSlide, 5000); // Altere o tempo aqui (em milissegundos)
}

function stopCarousel() {
  clearInterval(interval);
}

prevBtn.addEventListener('click', () => {
  stopCarousel();
  goToPrevSlide();
  startCarousel();
});

nextBtn.addEventListener('click', () => {
  stopCarousel();
  goToNextSlide();
  startCarousel();
});

// Exibir o primeiro slide inicialmente
showSlide(currentIndex);

// Iniciar o carrossel automaticamente
startCarousel();