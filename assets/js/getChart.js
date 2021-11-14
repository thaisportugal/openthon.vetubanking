export function getChartPie(htmlId, data, legends = "none") {
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
        legend: legends,
        backgroundColor: 'transparent',
        chartArea:{
          backgroundColor: 'transparent',
          left: '5%',
          top: '5%',
          width: '90%',
        }

    };

    var chart = new google.visualization.PieChart(document.getElementById(htmlId));
    chart.draw(data, options);
    }
}

export function getChartLine(htmlId, data, title = "sem titulo") {
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    const ext_data = data

    function drawChart() {
      var data = google.visualization.arrayToDataTable(ext_data);

      var options = {
        title: title,
        isStacked: true,
        legend: {position: 'top', maxLines: 3},
        hAxis: {title: title,  titleTextStyle: {color: '#333'}},
        vAxis: {minValue: 0},
        backgroundColor: 'transparent',
        chartArea:{
            backgroundColor: 'transparent',
            left: '5%',
            top: '5%',
            width: '90%',
        }
      };

      var chart = new google.visualization.AreaChart(document.getElementById(htmlId));
      chart.draw(data, options);
    }
}

export default getChartPie;