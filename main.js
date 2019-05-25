function initialize() {
    myConstants.widgetsLocalStorage = "Teste1"
    document.getElementById('searchInput').addEventListener('change', searchWidgets);
    fetchWidgets();
}

function fetchWidgets(filter) {
    var widgets = JSON.parse(localStorage.getItem(myConstants.widgetsLocalStorage));
    var widgetList = document.getElementById('widgetList');

    widgetList.innerHTML = '';

    if(widgets != null) {
        let filteredWidgets = [];
        if(filter != null) {
            for (let i = 0; i < widgets.length; i++) {
                if(widgets[i].id.includes(filter)) {
                  filteredWidgets.push(widgets[i]);
                }
            }
        } else {
            filteredWidgets = widgets;
        }

        for (let i = 0; i < filteredWidgets.length; i++) {
            widgetList.innerHTML += getWidget(filteredWidgets[i].id);
        }

        for (let i = 0; i < filteredWidgets.length; i++) {
            document.getElementById(filteredWidgets[i].id).appendChild(getChart(filteredWidgets[i].data))
        }
    }
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

function editWidget (id) {
    var widgets = JSON.parse(localStorage.getItem(myConstants.widgetsLocalStorage));

    for(var i = 0; i < widgets.length; i++) {
      if(widgets[i].id == id) {
        widgets[i].data = getRandomData();
      }
    }

    localStorage.setItem(myConstants.widgetsLocalStorage, JSON.stringify(widgets));
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

function searchWidgets (e) {
    var usersSearch = e.srcElement.value;

    e.preventDefault();

    if(usersSearch.length === 0 || !usersSearch.trim()){
      fetchWidgets();
    } else {
      fetchWidgets(usersSearch);
    }
  }

function getRandomData() {
    let data = [];

    for(let i = 0; i < 6 ; i++) {
      data.push(Math.random() * (80 - 40)+ 40);
    }

    return data;
}

function myConstants () {}