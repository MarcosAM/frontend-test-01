const widgetsLocalStorage = 'Teste1'

const getWidgetsLocalStorage = () => (JSON.parse(localStorage.getItem(widgetsLocalStorage)))

const addWidgetToLocalStorage = (widget) => {
    if (localStorage.getItem(widgetsLocalStorage)) {
        const widgets = getWidgetsLocalStorage()
        const newWidgets = [...widgets, widget];
        updateWidgetsLocalStorage(newWidgets)
      } else {
        const widgets = [widget];
        updateWidgetsLocalStorage(widgets)
      }
}

const updateWidgetsLocalStorage = (widgets) => {
    if (Array.isArray(widgets)) {
        localStorage.setItem(widgetsLocalStorage, JSON.stringify(widgets))
    }
  }