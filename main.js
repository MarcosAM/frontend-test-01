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
    const widgets = JSON.parse(localStorage.getItem(widgetsLocalStorage));
    const newWidgets = [...widgets, widget];
    localStorage.setItem(widgetsLocalStorage, JSON.stringify(newWidgets));
  } else {
    const widgets = [widget];
    localStorage.setItem(widgetsLocalStorage, JSON.stringify(widgets));
  }
}

const editWidget = (id) => {
  getWidget({ id })
}

const deleteWidget = (id) => {
  document.getElementById(id).parentNode.removeChild(document.getElementById(id))
  const widgets = JSON.parse(localStorage.getItem(widgetsLocalStorage))
  const newWidgets = widgets.filter((widget) => widget.id !== id)
  localStorage.setItem(widgetsLocalStorage, JSON.stringify(newWidgets))
}

const searchWidgets = (e) => {
  const usersSearch = e.srcElement.value
  e.preventDefault()

  if (e) {
    const cardsCollection = document.getElementsByClassName('card')
    const cards = [...cardsCollection]
    console.log(cardsCollection)
    console.log(cards)
    cards.forEach(card => {
      if (card.id.includes(usersSearch)) {
        card.style.display = 'none'
        console.log('Some')
      } else {
        card.style.display = 'visible'
        console.log('Aparece')
      }
      console.log(card.id.includes)
    })
  }

  /*var usersSearch = e.srcElement.value;

  e.preventDefault();

  if (usersSearch.length === 0 || !usersSearch.trim()) {
    fetchWidgets();
  } else {
    fetchWidgets(usersSearch);
  }*/
}

const getRandomData = () => {
  let data = [];

  for (let i = 0; i < 6; i++) {
    data.push(Math.random() * (80 - 40) + 40);
  }

  return data;
}

function myConstants() { }