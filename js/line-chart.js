
/*==== result-chart =====*/
var ctx = document.getElementById('line-chart');
Chart.defaults.global.defaultFontFamily = 'Poppins';
Chart.defaults.global.defaultFontSize = 15;
Chart.defaults.global.defaultFontStyle = '500';
Chart.defaults.global.defaultFontColor = '#2e3d62';
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["Jan", "Feb", "Mar", "April", "May"],
        datasets: [{
            label: "One",
            data: [40, 90, 210, 160, 230],
            backgroundColor: 'rgba(255,255,255,0)',
            borderColor: '#06b590',
            pointBorderColor: '#ffffff',
            pointBackgroundColor: '#06b590',
            pointBorderWidth: 2,
            pointRadius: 4

        }, {
            label: "Two",
            data: [160, 140, 20, 270, 110],
            backgroundColor: 'rgba(255,255,255,0)',
            borderColor: '#6c5ce7',
            pointBorderColor: '#ffffff',
            pointBackgroundColor: '#6c5ce7',
            pointBorderWidth: 2,
            pointRadius: 4
        }]
    },

    // Configuration options go here
    options: {
        tooltips: {
            xPadding: 12,
            yPadding: 12,
            backgroundColor: '#2e3d62'
        },
        legend: {
            display: false,
            tooltips: {
                displayColors:false,
            }
        },
        scales: {
            xAxes: [{
                display: true,
                gridLines: {
                    color: '#eee',
                }
            }],
            yAxes: [{
                display: true,
                gridLines: {
                    color: '#eee',
                },
                ticks: {
                    fontSize: 14,
                }
            }]

        }
    }
});