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

const updateWidget = (editedWidget) => {
    const newWidgets = getWidgetsLocalStorage().map(widget => (widget.id === editedWidget.id ? editedWidget : widget))
    updateWidgetsLocalStorage(newWidgets)
}

const updateWidgetsLocalStorage = (widgets) => {
    if (Array.isArray(widgets)) {
        localStorage.setItem(widgetsLocalStorage, JSON.stringify(widgets))
    }
}  