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
    name: ['Mocha Cookie Crumble Frappuccino'],
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
                backgroundColor: '#d8ebd9',
            },
            {
                label: 'Total Carbohydrates',
                data: drink.carbs,
                backgroundColor: '#eddaeb',
            },
            {
                label: 'Protein',
                data: drink.protein,
                backgroundColor: '#d5d7ed',
            },
            {
                label: 'Sodium',
                data: drink.sodium,
                backgroundColor: '#cae6fa',
            },
            {
                label: 'Cholesterol',
                data: drink.cholesterol,
                backgroundColor: '#eddae1',
            }
        ]
    },
    options: {
        scales: {
            xAxes: [{
                stacked: true,
                ticks: {
                    fontSize: 16
                }
            }],
            yAxes: [{ stacked: true }]
        },
        tooltips: {
            callbacks: {
                label: function (tooltipItem, data) {
                    let label = data.datasets[tooltipItem.datasetIndex].label;
                    label += ': ' + tooltipItem.yLabel;
                    return ' ' + label + '% of DV';
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

    if (event.target.alt === "Caffè Latte") {
        drink = latte
    } else if (event.target.alt === "Pumpkin Spice Latte") {
        drink = psl
    } else if (event.target.alt === "Chai Latte") {
        drink = chai
    } else if (event.target.alt === "Iced Caffè Mocha") {
        drink = mocha
    } else if (event.target.alt === "Iced Caramel Macchiato") {
        drink = caramel_macchiato
    } else if (event.target.alt === "Pumpkin Cream Cold Brew") {
        drink = pumpkin_cold_brew
    } else if (event.target.alt === "Hot Chocolate") {
        drink = hot_chocolate
    } else if (event.target.alt === "Caramel Frappuccino") {
        drink = caramel_frap
    } else if (event.target.alt === "Mocha Cookie Crumble Frappuccino") {
        drink = cookie_frap
    }
    event.target.parentElement.classList.add("selected");

    myChart.data.labels = drink.name;
    myChart.data.datasets = [
        {
            label: 'Total Fat',
            data: drink.fat,
            backgroundColor: '#d8ebd9',
        },
        {
            label: 'Total Carbohydrates',
            data: drink.carbs,
            backgroundColor: '#eddaeb',
        },
        {
            label: 'Protein',
            data: drink.protein,
            backgroundColor: '#d5d7ed',
        },
        {
            label: 'Sodium',
            data: drink.sodium,
            backgroundColor: '#cae6fa',
        },
        {
            label: 'Cholesterol',
            data: drink.cholesterol,
            backgroundColor: '#eddae1',
        }
    ]
    myChart.update();

}, false);

