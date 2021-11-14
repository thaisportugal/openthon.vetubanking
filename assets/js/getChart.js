function getChart(htmlId, data) {
    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
    const ext_data = data

    function drawChart() {
    var data = google.visualization.arrayToDataTable(ext_data);

    var options = {
        pieHole: 0.5,
        pieSliceTextStyle: {
        color: 'black',
        },
        legend: 'none'
    };

    var chart = new google.visualization.PieChart(document.getElementById(htmlId));
    chart.draw(data, options);
    }
}

export default getChart;