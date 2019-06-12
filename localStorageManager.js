const widgetsLocalStorage = 'Teste1'

const getWidgetsLocalStorage = () => {
    const widgets = JSON.parse(localStorage.getItem(widgetsLocalStorage))
    if (widgets) {
        return widgets
    }
    return []
}

const addWidgetToLocalStorage = (widget) => {
    updateWidgetsLocalStorage([...getWidgetsLocalStorage(), widget])
}

const updateWidget = (editedWidget) => {
    const newWidgets = getWidgetsLocalStorage().map(widget => (widget.id === editedWidget.id ? editedWidget : widget))
    updateWidgetsLocalStorage(newWidgets)
}

const removeWidgetFromLocalStorage = (id) => {
    updateWidgetsLocalStorage(getWidgetsLocalStorage().filter((widget) => widget.id !== id))
}

const updateWidgetsLocalStorage = (widgets) => {
    if (Array.isArray(widgets)) {
        localStorage.setItem(widgetsLocalStorage, JSON.stringify(widgets))
    }
}  