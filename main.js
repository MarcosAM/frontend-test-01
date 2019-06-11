const widgetsLocalStorage = 'Teste1'

const initialize = () => {
  document.getElementById('searchInput').addEventListener('change', searchWidgets);
  fetchWidgets();
}

const fetchWidgets = (filter) => {
  var widgets = JSON.parse(localStorage.getItem(widgetsLocalStorage));
  var widgetList = document.getElementById('widgetList');

  if (widgets != null) {
    let filteredWidgets = [];
    if (filter != null) {
      for (let i = 0; i < widgets.length; i++) {
        if (widgets[i].id.includes(filter)) {
          filteredWidgets.push(widgets[i]);
        }
      }
    } else {
      filteredWidgets = widgets;
    }

    filteredWidgets.forEach(w => { widgetList.append(getWidget(w)) })
  }
}

const createWidget = () => {

  const widget = {
    id: chance.guid(),
    data: getRandomData()
  }
  
  document.getElementById('widgetList').append(getWidget(widget))

  if (localStorage.getItem(widgetsLocalStorage)) {
    const widgets = [widget];
    localStorage.setItem(widgetsLocalStorage, JSON.stringify(widgets));
  } else {
    const widgets = JSON.parse(localStorage.getItem(widgetsLocalStorage));
    const newWidgets = [...widgets, widget];
    localStorage.setItem(widgetsLocalStorage, JSON.stringify(newWidgets));
  }

  /*var widgetId = chance.guid();
  var widgetData = getRandomData();

  var widget = {
    id: widgetId,
    data: widgetData
  }

  if (localStorage.getItem(widgetsLocalStorage) === null) {
    var widgets = [];
    widgets.push(widget);
    localStorage.setItem(widgetsLocalStorage, JSON.stringify(widgets));
  } else {
    var widgets = JSON.parse(localStorage.getItem(widgetsLocalStorage));
    widgets.push(widget);
    localStorage.setItem(widgetsLocalStorage, JSON.stringify(widgets));
  }

  fetchWidgets();*/
}

const editWidget = (id) => {
  var widgets = JSON.parse(localStorage.getItem(widgetsLocalStorage));

  for (var i = 0; i < widgets.length; i++) {
    if (widgets[i].id == id) {
      widgets[i].data = getRandomData();
    }
  }

  localStorage.setItem(widgetsLocalStorage, JSON.stringify(widgets));
  fetchWidgets();
}

const deleteWidget = (id) => {
  var widgets = JSON.parse(localStorage.getItem(widgetsLocalStorage));

  for (let i = 0; i < widgets.length; i++) {
    if (widgets[i].id == id) {
      widgets.splice(i, 1);
    }
  }

  localStorage.setItem(widgetsLocalStorage, JSON.stringify(widgets));
  fetchWidgets();
}

const searchWidgets = (e) => {
  var usersSearch = e.srcElement.value;

  e.preventDefault();

  if (usersSearch.length === 0 || !usersSearch.trim()) {
    fetchWidgets();
  } else {
    fetchWidgets(usersSearch);
  }
}

const getRandomData = () => {
  let data = [];

  for (let i = 0; i < 6; i++) {
    data.push(Math.random() * (80 - 40) + 40);
  }

  return data;
}

function myConstants() { }