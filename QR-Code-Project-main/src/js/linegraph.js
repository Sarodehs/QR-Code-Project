google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Sales', 'Expenses'],
    ['2004',  1000,      400],
    ['2005',  1170,      460],
    ['2006',  660,       1120],
    ['2007',  1030,      540],
    ['2008',   660,       1120],
    ['2009',  1010,      520]
  ]);

  var options = {
    // title: 'Revenue Repost',
    curveType: 'function',
    axes: {
      // Adds labels to each axis; they don't have to match the axis names.
      y: {
        Temps: {label: 'Temps (Celsius)'},
        Daylight: {label: 'Daylight'}
      }},
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
}
