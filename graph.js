// const africa = [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478];
// const asia = [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267];
// const europe = [168, 170, 178, 190, 203, 276, 408, 547, 675, 734];
// const latinAmerica = [40, 20, 10, 16, 24, 38, 74, 167, 508, 784];
// const northAmerica = [6, 3, 2, 2, 7, 26, 82, 172, 312, 433];


const ctx = document.getElementById("myChart");
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Total Fat', 'Total Carbs', 'Sodium', 'Cholesterol', 'Protein', 'Caffeine'],
        datasets: [{
            label: 'grams',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
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
        }
    }

});