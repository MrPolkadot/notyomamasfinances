var usersChart = new Chart(document.getElementById('usersChart'), {
    type: 'doughnut',
    data: {
        labels: ['Nuevos', 'Registrados'],
        datasets: [{
            data: [30, 65],
            backgroundColor: ['#00F0FF', '#8B8B8D'],
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            position: 'bottom' // Ubicar la leyenda debajo del círculo
        }
    }
});

// Gráfica de Comercios
var commercesChart = new Chart(document.getElementById('commercesChart'), {
    type: 'doughnut',
    data: {
        labels: ['Nuevos', 'Registrados'],
        datasets: [{
            data: [60, 40],
            backgroundColor: ['#FEC500', '#8B8B8D'],
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            position: 'bottom' // Ubicar la leyenda debajo del círculo
        }
    }
});

// Agregar lógica para mostrar/ocultar la navegación lateral al hacer clic en el ícono de menú
const menuBtn = document.getElementById('menuBtn');
const sideNav = document.getElementById('sideNav');

menuBtn.addEventListener('click', () => {
    sideNav.classList.toggle('hidden'); // Agrega o quita la clase 'hidden' para mostrar u ocultar la navegación lateral
});