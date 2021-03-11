
/*==== result-chart =====*/
var ctx = document.getElementById('radar-chart');
Chart.defaults.global.defaultFontFamily = 'Poppins';
Chart.defaults.global.defaultFontSize = 15;
Chart.defaults.global.defaultFontStyle = '500';
Chart.defaults.global.defaultFontColor = '#2e3d62';
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'radar',

    // The data for our dataset
    data: {
        labels: ["Jan", "Feb", "Mar", "April", "May"],
        datasets: [{
            label: "One",
            data: [40, 90, 210, 160, 230],
            backgroundColor: 'rgba(255,255,255,0)',
            borderColor: '#6a82fb',
            pointBorderColor: '#ffffff',
            pointBackgroundColor: '#6a82fb',
            pointBorderWidth: 2,
            pointRadius: 4

        }, {
            label: "Two",
            data: [160, 140, 20, 270, 110],
            backgroundColor: 'rgba(255,255,255,0)',
            borderColor: '#6ccdd9',
            pointBorderColor: '#ffffff',
            pointBackgroundColor: '#6ccdd9',
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
            display: false
        }
    }
});