// % of DV based on a 2000 Calorie Daily Intake
// caffeine in mg
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
                backgroundColor: '#A6CCD1',
            },
            {
                label: 'Total Carbohydrates',
                data: drink.carbs,
                backgroundColor: '#D6E9F7',
            },
            {
                label: 'Protein',
                data: drink.protein,
                backgroundColor: '#EBCCD1',
            },
            {
                label: 'Sodium',
                data: drink.sodium,
                backgroundColor: '#E8E9F7',
            },
            {
                label: 'Cholesterol',
                data: drink.cholesterol,
                backgroundColor: '#BCBBCA',
            }
        ]
    },
    options: {
        scales: {
            xAxes: [{ stacked: true }],
            yAxes: [{ stacked: true }]
        }
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
        event.target.parentElement.classList.add("selected");
    } else if (event.target.alt === "Pumpkin Spice Latte") {
        drink = psl
        event.target.parentElement.classList.add("selected");
    } else if (event.target.alt === "Chai Latte") {
        drink = chai
        event.target.parentElement.classList.add("selected");
    } else if (event.target.alt === "Iced Caffè Mocha") {
        drink = mocha
        event.target.parentElement.classList.add("selected");
    } else if (event.target.alt === "Iced Caramel Macchiato") {
        drink = caramel_macchiato
        event.target.parentElement.classList.add("selected");
    } else if (event.target.alt === "Pumpkin Cream Cold Brew") {
        drink = pumpkin_cold_brew
        event.target.parentElement.classList.add("selected");
    } else if (event.target.alt === "Hot Chocolate") {
        drink = hot_chocolate
        event.target.parentElement.classList.add("selected");
    } else if (event.target.alt === "Caramel Frappuccino") {
        drink = caramel_frap
        event.target.parentElement.classList.add("selected");
    } else if (event.target.alt === "Mocha Cookie Crumble Frappuccino") {
        drink = cookie_frap
        event.target.parentElement.classList.add("selected");
    }

    myChart.data.labels = drink.name;
    myChart.data.datasets = [
        {
            label: 'Total Fat',
            data: drink.fat,
            backgroundColor: '#A6CCD1',
        },
        {
            label: 'Total Carbohydrates',
            data: drink.carbs,
            backgroundColor: '#D6E9F7',
        },
        {
            label: 'Protein',
            data: drink.protein,
            backgroundColor: '#EBCCD1',
        },
        {
            label: 'Sodium',
            data: drink.sodium,
            backgroundColor: '#E8E9F7',
        },
        {
            label: 'Cholesterol',
            data: drink.cholesterol,
            backgroundColor: '#BCBBCA',
        }
    ]
    myChart.update();

    
}, false);

