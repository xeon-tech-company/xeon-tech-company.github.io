/*==== doughutChart =====*/
var ctx = document.getElementById( "doughnut-chart" );
Chart.defaults.global.defaultFontFamily = 'Poppins';
Chart.defaults.global.defaultFontSize = 15;
Chart.defaults.global.defaultFontStyle = '500';
Chart.defaults.global.defaultFontColor = '#2e3d62';
var chart = new Chart( ctx, {
    type: 'doughnut',
    data: {
        datasets: [ {
            data: [ 40, 32, 15 ],
            backgroundColor: ["#6c5ce7", "#F55974", "#17a2b8"],
            hoverBackgroundColor: ["#4634b7", "#df3754", "#0e8092"],
            hoverBorderWidth: 5,
            hoverBorderColor: "#eee",
            borderWidth: 3

        } ],
        labels: [
            "One",
            "Two",
            "Three"
        ]
    },
    options: {
        responsive: true,
        tooltips: {
            xPadding: 15,
            yPadding: 15,
            backgroundColor: '#2e3d62'
        },
        legend: {
            display: false
        }
    }
} );