function fetchWidgets() {
    var widgetList = document.getElementById('widgetList');

    widgetList.innerHTML = '';
    widgetList.innerHTML = getWidget();
}