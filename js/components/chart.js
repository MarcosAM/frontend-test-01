function getChart(data){
    var canvas = document.createElement('canvas');
    var ctxL = canvas.getContext('2d');
    var myLineChart = new Chart(ctxL, {
      type: 'line',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "My dataset",
            data: data,
            backgroundColor: [
              'rgba(255, 255, 255,0)',
            ],
            borderColor: [
              'rgba(200, 99, 132, .7)',
            ],
            borderWidth: 2
        }]
      },
      options: {
        responsive: true
      }
    });

    return canvas;
}