const widgetsLocalStorage = 'Teste1'

const getWidgetsLocalStorage = () => (JSON.parse(localStorage.getItem(widgetsLocalStorage)))

const updateWidgetsLocalStorage = (widgets) => {
    if (Array.isArray(widgets)) {
      localStorage.setItem(widgetsLocalStorage, JSON.stringify(widgets))
    }
  }