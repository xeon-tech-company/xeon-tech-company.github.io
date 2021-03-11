
/*==== polar-chart =====*/
var ctx = document.getElementById('polar-chart');
Chart.defaults.global.defaultFontFamily = 'Poppins';
Chart.defaults.global.defaultFontSize = 15;
Chart.defaults.global.defaultFontStyle = '500';
Chart.defaults.global.defaultFontColor = '#2e3d62';
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'polarArea',

    // The data for our dataset
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May' ],
        datasets: [{
            label: "Points",
            data: [34, 38, 45, 50, 60],
            backgroundColor: ['#5C48E0', '#4BE6B8', '#F78C01', '#C500EE', '#F8C652']
        }]
    },

    // Configuration options go here
    options: {
        animation: {
            animateScale: false
        },
        tooltips: {
            xPadding: 12,
            yPadding: 12,
            backgroundColor:"#2e3d62"
        },
        legend: {
            display: false,
            tooltips: {
                displayColors:false,
            }
        }
    }
});