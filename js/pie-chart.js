
/*==== pieChart =====*/
var ctx = document.getElementById( "pie-chart" );
Chart.defaults.global.defaultFontFamily = 'Poppins';
Chart.defaults.global.defaultFontSize = 15;
Chart.defaults.global.defaultFontStyle = '500';
Chart.defaults.global.defaultFontColor = '#2e3d62';
var chart = new Chart( ctx, {
    type: 'pie',
    data: {
        datasets: [ {
            data: [ 40, 30, 25, 12 ],
            backgroundColor: ["#06b590", "#35b53e", "#377dff", "#ffaf00"],
            hoverBackgroundColor: ["#068268", "#26922e", "#2a69de", "#d59509"],
            borderWidth: 3

        } ],
        labels: [
            "One",
            "Two",
            "Three",
            "Four"
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