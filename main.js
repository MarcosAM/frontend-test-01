const widgetsLocalStorage = 'Teste1'

const initialize = () => {
    //document.getElementById('searchInput').addEventListener('change', searchWidgets);
    //fetchWidgets();
    //TODO testar isso aqui!
    document.getElementById('widgetList').append(widget({id: 'lolTeste'}))
}

const fetchWidgets = (filter) => {
    var widgets = JSON.parse(localStorage.getItem(widgetsLocalStorage));
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

const createWidget = () => {
    var widgetId = chance.guid();
    var widgetData = getRandomData();

    var widget = {
      id: widgetId,
      data: widgetData
    }

    if(localStorage.getItem(widgetsLocalStorage) === null ) {
      var widgets = [];
      widgets.push(widget);
      localStorage.setItem(widgetsLocalStorage, JSON.stringify(widgets));
    } else {
      var widgets = JSON.parse(localStorage.getItem(widgetsLocalStorage));
      widgets.push(widget);
      localStorage.setItem(widgetsLocalStorage, JSON.stringify(widgets));
    }

    fetchWidgets();
}

const editWidget = (id) => {
    var widgets = JSON.parse(localStorage.getItem(widgetsLocalStorage));

    for(var i = 0; i < widgets.length; i++) {
      if(widgets[i].id == id) {
        widgets[i].data = getRandomData();
      }
    }

    localStorage.setItem(widgetsLocalStorage, JSON.stringify(widgets));
    fetchWidgets();
  }

const deleteWidget = (id) => {
    var widgets = JSON.parse(localStorage.getItem(widgetsLocalStorage));

    for(let i = 0; i < widgets.length; i++) {
      if(widgets[i].id == id) {
        widgets.splice(i, 1);
      }
    }

    localStorage.setItem(widgetsLocalStorage, JSON.stringify(widgets));
    fetchWidgets();
}

const searchWidgets = (e) => {
    var usersSearch = e.srcElement.value;

    e.preventDefault();

    if(usersSearch.length === 0 || !usersSearch.trim()){
      fetchWidgets();
    } else {
      fetchWidgets(usersSearch);
    }
  }

const getRandomData = () => {
    let data = [];

    for(let i = 0; i < 6 ; i++) {
      data.push(Math.random() * (80 - 40)+ 40);
    }

    return data;
}

function myConstants () {}