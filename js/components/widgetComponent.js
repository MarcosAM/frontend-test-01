function getWidget(widgetId, id){
    return  '<div class="well" id="'+widgetId+'">'+
                '<nav class="navbar navbar-expand-sm">'+
                    '<div class="navbar-collapse collapse" id="collapsingNavbar">'+
                        '<ul class="navbar-nav">'+
                            '<li class="nav-item active">'+
                                '<a>'+id+'</a>'+
                            '</li>'+
                        '</ul>'+
                        '<ul class="navbar-nav ml-auto">'+
                            '<li class="nav-item">'+
                                '<div class="btn-group">'+
                                    '<button class="btn bmd-btn-fab bmd-btn-fab-sm dropdown-toggle" type="button" id="ex3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+
                                        '<i class="material-icons">more_vert</i>'+
                                    '</button>'+
                                    '<div class="dropdown-menu  dropdown-menu-left" aria-labelledby="ex3">'+
                                        '<button class="dropdown-item" type="button" onclick="editWidget(\''+id+'\')">Edit</button>'+
                                        '<button class="dropdown-item" type="button" onclick="deleteWidget(\''+id+'\')">Delete</button>'+
                                    '</div>'+
                                '</div>'+
                            '</li>'+
                        '</ul>'+
                    '</div>'+
                '</nav>'+
            '</div>'
}