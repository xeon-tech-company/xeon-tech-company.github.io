
/*==== bubble-chart =====*/
var ctx = document.getElementById('bubble-chart');
Chart.defaults.global.defaultFontFamily = 'Poppins';
Chart.defaults.global.defaultFontSize = 15;
Chart.defaults.global.defaultFontStyle = '500';
Chart.defaults.global.defaultFontColor = '#2e3d62';
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bubble',

    // The data for our dataset
    data: {
        datasets: [
            {
                label: 'One',
                data: [
                    {
                        x: 6,
                        y: 5,
                        r: 10
                    }
                ],
                backgroundColor:"#5C48E0",
                hoverBackgroundColor: "#5C48E0"
            },
            {
                label: 'Two',
                data: [
                    {
                        x: 6,
                        y: 2,
                        r: 10
                    }
                ],
                backgroundColor:"#4BE6B8",
                hoverBackgroundColor: "#4BE6B8"
            },
            {
                label: 'Three',
                data: [
                    {
                        x: 4,
                        y: 6,
                        r: 10
                    }
                ],
                backgroundColor:"#F78C01",
                hoverBackgroundColor: "#F78C01"
            },
            {
                label: 'Four',
                data: [
                    {
                        x: 5,
                        y: 3,
                        r: 10
                    }
                ],
                backgroundColor:"#C500EE",
                hoverBackgroundColor: "#C500EE"
            },
            {
                label: 'Five',
                data: [
                    {
                        x: 4,
                        y: 1,
                        r: 10
                    }
                ],
                backgroundColor:"#F8C652",
                hoverBackgroundColor: "#F8C652"
            },
            {
                label: 'Six',
                data: [
                    {
                        x: 2,
                        y: 5,
                        r: 10
                    }
                ],
                backgroundColor:"#F55974",
                hoverBackgroundColor: "#F55974"
            },
            {
                label: 'Seven',
                data: [
                    {
                        x: 3,
                        y: 3,
                        r: 10
                    }
                ],
                backgroundColor:"#17a2b8",
                hoverBackgroundColor: "#17a2b8"
            },
            {
                label: 'Eight',
                data: [
                    {
                        x: 1,
                        y: 1,
                        r: 10
                    }
                ],
                backgroundColor:"#8f42ec",
                hoverBackgroundColor: "#8f42ec"
            },
            {
                label: 'Nine',
                data: [
                    {
                        x: 2,
                        y: 2,
                        r: 10
                    }
                ],
                backgroundColor:"#7f8897",
                hoverBackgroundColor: "#7f8897"
            }
        ]
    },

    // Configuration options go here
    options: {
        tooltips: {
            xPadding: 12,
            yPadding: 12,
            backgroundColor:"#2e3d62"
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