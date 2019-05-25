function getWidget(id) {
    return'<div class="card mt-4">'+
            '<div class="d-flex justify-content-between card-header">'+
                '<p class="align-self-center mb-0" >' + id + '</p>'+
                    '<div class="btn-group">'+
                        '<button id="moreOptions" class="btn bmd-btn-icon dropdown-toggle"'+
                        'type="button" data-toggle="dropdown"'+
                        'aria-haspopup="true" aria-expanded="false">'+
                            '<i class="material-icons">more_vert</i>'+
                        '</button>'+
                        '<div class="dropdown-menu  dropdown-menu-left" aria-labelledby="moreOptions">'+
                            '<button class="dropdown-item" type="button">Edit</button>'+
                            '<button class="dropdown-item" type="button" onclick="deleteWidget(\''+id+'\')">Delete</button>'+
                        '</div>'+
                    '</div>'+
            '</div>'+
            '<div class="card-body" id="'+ id + '">'+
            '</div>'+
        '</div>'
}