function fetchWidgets() {
    var widgetList = document.getElementById('widgetList');

    widgetList.innerHTML = '';

    let ids = [];
    for (let i = 0; i < 6; i++){
        ids.push(chance.guid());
    }

    for (let i = 0; i < ids.length; i++){
        widgetList.innerHTML += getWidget(ids[i]);
    }

    for (let i = 0; i < ids.length; i++){
        document.getElementById(ids[i]).appendChild(getChart(getRandomData()));
    }
}

function getRandomData () {
    let data = [];

    for(let i = 0; i < 6 ; i++) {
      data.push(Math.random() * (80 - 40)+ 40);
    }

    return data;
}