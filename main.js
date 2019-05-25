function fetchWidgets() {
    var widgetList = document.getElementById('widgetList');

    widgetList.innerHTML = '';
    widgetList.innerHTML = '<div class="d-flex justify-content-between card-header">'+
                                '<p class="align-self-center mb-0" >Widget ID</p>'+
                                    '<div class="btn-group">'+
                                        '<button id="moreOptions" class="btn bmd-btn-icon dropdown-toggle"'+
                                        'type="button" data-toggle="dropdown"'+
                                        'aria-haspopup="true" aria-expanded="false">'+
                                            '<i class="material-icons">more_vert</i>'+
                                        '</button>'+
                                        '<div class="dropdown-menu  dropdown-menu-left" aria-labelledby="moreOptions">'+
                                            '<button class="dropdown-item" type="button">Edit</button>'+
                                            '<button class="dropdown-item" type="button">Delete</button>'+
                                        '</div>'+
                                    '</div>'+
                            '</div>'+
                            '<div class="card-body">'+
                                '<canvas id="lineChart"></canvas>'+
                            '</div>'
}