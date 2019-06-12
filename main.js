const standarDropdownBtns = ({ id }) => ([
  { text: 'Edit', fun: () => editWidget(id) },
  { text: 'Delete', fun: () => deleteWidget(id) }
])

const initialize = () => {
  document.getElementById('searchInput').addEventListener('change', searchWidgets)
  fetchWidgets();
}

const fetchWidgets = () => {
  const widgets = getWidgetsLocalStorage()
  const widgetList = document.getElementById('widgetList')

  if (widgets) {
    widgets.forEach(widget => {
      widgetList.append(getWidget({ ...widget, btns: standarDropdownBtns(widget) }))
    })
  }
}

const createWidget = () => {
  const widgetData = {
    id: chance.guid(),
    data: getRandomData()
  }

  widget = getWidget({ ...widgetData, btns: standarDropdownBtns(widgetData) })
  document.getElementById('widgetList').append(widget)
  window.scrollBy(0, widget.getBoundingClientRect().y + widget.clientHeight)

  addWidgetToLocalStorage(widgetData)
}

const editWidget = (id) => {
  getWidget({ id })
}

const deleteWidget = (id) => {
  document.getElementById(id).parentNode.removeChild(document.getElementById(id))
  //TODO deixar isso com o localStorageManager
  const widgets = getWidgetsLocalStorage()
  const newWidgets = widgets.filter((widget) => widget.id !== id)
  updateWidgetsLocalStorage(newWidgets)
}

const searchWidgets = (e) => {
  const usersSearch = e.srcElement.value
  e.preventDefault()

  const cards = [...document.getElementsByClassName('card')]

  if (usersSearch !== '') {
    cards.forEach(card => {
      if (card.id.includes(usersSearch)) {
        card.style.display = 'block'
      } else {
        card.style.display = 'none'
      }
    })
  } else {
    cards.forEach(card => {
      card.style.display = 'block'
    })
  }
}

const getRandomData = () => {
  let data = []

  for (let i = 0; i < 6; i++) {
    data.push(Math.random() * (80 - 40) + 40)
  }

  return data;
}