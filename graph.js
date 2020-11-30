Chart.defaults.global.defaultFontFamily = 'Raleway, sans-serif'
Chart.defaults.global.defaultFontColor = 'black';

// % of DV based on a 2000 Calorie Daily Intake
const latte = {
    name: ['Caffè Latte'],
    fat: [9],
    cholesterol: [10],
    sodium: [7],
    carbs: [7],
    protein: [26]
};
const psl = {
    name: ['Pumpkin Spice Latte'],
    fat: [18],
    cholesterol: [18],
    sodium: [10],
    carbs: [19],
    protein: [28]
};
const chai = {
    name: ['Chai Latte'],
    fat: [6],
    cholesterol: [7],
    sodium: [5],
    carbs: [16],
    protein: [16]
};
const mocha = {
    name: ['Iced Caffè Mocha'],
    fat: [22],
    cholesterol: [18],
    sodium: [4],
    carbs: [14],
    protein: [20]
};
const caramel_macchiato = {
    name: ['Iced Caramel Macchiato'],
    fat: [9],
    cholesterol: [8],
    sodium: [7],
    carbs: [13],
    protein: [20]
};
const pumpkin_cold_brew = {
    name: ['Pumpkin Cream Cold Brew'],
    fat: [15],
    cholesterol: [13],
    sodium: [2],
    carbs: [11],
    protein: [6]
};
const hot_chocolate = {
    name: ['Hot Chocolate'],
    fat: [19],
    cholesterol: [15],
    sodium: [7],
    carbs: [16],
    protein: [28]
};
const caramel_frap = {
    name: ['Caramel Frappuccino'],
    fat: [19],
    cholesterol: [15],
    sodium: [10],
    carbs: [21],
    protein: [8]
};
const cookie_frap = {
    name: ['Mocha Cookie Frappuccino'],
    fat: [19],
    cholesterol: [18],
    sodium: [11],
    carbs: [23],
    protein: [12]
};

let drink = latte

const ctx = document.getElementById("myChart");
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: drink.name,
        datasets: [
            {
                label: 'Total Fat',
                data: drink.fat,
                backgroundColor: '#cde5ce',
            },
            {
                label: 'Carbohydrates',
                data: drink.carbs,
                backgroundColor: '#e6cbe3',
            },
            {
                label: 'Protein',
                data: drink.protein,
                backgroundColor: '#c9cce8',
            },
            {
                label: 'Sodium',
                data: drink.sodium,
                backgroundColor: '#b9def8',
            },
            {
                label: 'Cholesterol',
                data: drink.cholesterol,
                backgroundColor: '#ffc6b3',
            }
        ]
    },
    options: {
        scales: {
            xAxes: [{
                stacked: true,
                ticks: {
                    fontSize: 16,
                }
            }],
            yAxes: [{
                stacked: true,
                ticks: {
                    beginAtZero: true,
                    stepValue: 10,
                    max: 100
                },
                scaleLabel: {
                    display: true,
                    labelString: '% Daily Value Per Category'
                }
            }]
        },
        tooltips: {
            callbacks: {
                label: function (tooltipItem, data) {
                    let label = data.datasets[tooltipItem.datasetIndex].label;
                    label += ': ' + tooltipItem.yLabel;
                    return ' ' + label + '% Daily Value';
                }
            }
        },
    }
});

document.addEventListener('click', (event) => {
    if (!event.target.matches('.click-me')) return; 
    event.preventDefault(); 
    
    const selected = document.querySelector('.selected');
    if (selected) {
        selected.classList.remove('selected');
    }
    event.target.parentElement.classList.add("selected");

    drink = eval(event.target.alt)
    
    myChart.data.labels = drink.name;    
    myChart.data.datasets = [
        {
            label: 'Total Fat',
            data: drink.fat,
            backgroundColor: '#cde5ce',
        },
        {
            label: 'Carbohydrates',
            data: drink.carbs,
            backgroundColor: '#e6cbe3',
        },
        {
            label: 'Protein',
            data: drink.protein,
            backgroundColor: '#c9cce8',
        },
        {
            label: 'Sodium',
            data: drink.sodium,
            backgroundColor: '#b9def8',
        },
        {
            label: 'Cholesterol',
            data: drink.cholesterol,
            backgroundColor: '#ffc6b3',
        }
    ]
    myChart.update();

}, false);

