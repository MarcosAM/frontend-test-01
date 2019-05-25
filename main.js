function initialize() {
    myConstants.widgetsLocalStorage = "Teste1"
    fetchWidgets();
}

function fetchWidgets() {
    var widgets = JSON.parse(localStorage.getItem(myConstants.widgetsLocalStorage));
    var widgetList = document.getElementById('widgetList');

    widgetList.innerHTML = '';

    if(widgets != null) {
        for (let i = 0; i < widgets.length; i++) {
            widgetList.innerHTML += getWidget(widgets[i].id);
        }

        for (let i = 0; i < widgets.length; i++) {
            document.getElementById(widgets[i].id).appendChild(getChart(widgets[i].data))
        }
    }

    /*
    let ids = [];
    for (let i = 0; i < 6; i++){
        ids.push(chance.guid());
    }

    for (let i = 0; i < ids.length; i++){
        widgetList.innerHTML += getWidget(ids[i]);
    }

    for (let i = 0; i < ids.length; i++){
        document.getElementById(ids[i]).appendChild(getChart(getRandomData()));
    }*/
}

function createWidget() {
    var widgetId = chance.guid();
    var widgetData = getRandomData();

    var widget = {
      id: widgetId,
      data: widgetData
    }

    if(localStorage.getItem(myConstants.widgetsLocalStorage) === null ) {
      var widgets = [];
      widgets.push(widget);
      localStorage.setItem(myConstants.widgetsLocalStorage, JSON.stringify(widgets));
    } else {
      var widgets = JSON.parse(localStorage.getItem(myConstants.widgetsLocalStorage));
      widgets.push(widget);
      localStorage.setItem(myConstants.widgetsLocalStorage, JSON.stringify(widgets));
    }

    fetchWidgets();
}

function deleteWidget(id){
    var widgets = JSON.parse(localStorage.getItem(myConstants.widgetsLocalStorage));

    for(let i = 0; i < widgets.length; i++) {
      if(widgets[i].id == id) {
        widgets.splice(i, 1);
      }
    }

    localStorage.setItem(myConstants.widgetsLocalStorage, JSON.stringify(widgets));
    fetchWidgets();
}

function getRandomData() {
    let data = [];

    for(let i = 0; i < 6 ; i++) {
      data.push(Math.random() * (80 - 40)+ 40);
    }

    return data;
}

function myConstants () {}