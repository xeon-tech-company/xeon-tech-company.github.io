/*==== result-chart =====*/
var ctx = document.getElementById('bar-chart');
Chart.defaults.global.defaultFontFamily = 'Poppins';
Chart.defaults.global.defaultFontSize = 15;
Chart.defaults.global.defaultFontStyle = '500';
Chart.defaults.global.defaultFontColor = '#2e3d62';
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun' ],
        datasets: [{
            label: "One",
            data: [34, 41, 48, 45, 53, 55],
            backgroundColor: 'rgba(108, 92, 231, .2)',
            hoverBackgroundColor: 'rgba(108, 92, 231, .6)',
            hoverBorderColor: 'rgba(108, 92, 231, .6)',
            borderColor: '#6c5ce7',
            pointBackgroundColor: '#fff',
            borderWidth: 1,
            pointRadius: 4,
        }, {
            label: "Two",
            data: [36, 38, 45, 58, 50, 60],
            backgroundColor: 'rgba(75, 230, 184, .2)',
            hoverBackgroundColor: 'rgba(75, 230, 184, .6)',
            hoverBorderColor: 'rgba(75, 230, 184, .6)',
            borderColor: '#4BE6B8',
            pointBackgroundColor: '#fff',
            borderWidth: 1,
            pointRadius: 4,
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
            display: false
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