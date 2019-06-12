const getWidget = ({ id, data }) => {

    if (document.getElementById(id)) {
        const body = document.getElementById(id).getElementsByClassName('card-body')[0]
        const canvas = body.getElementsByTagName('canvas')[0]
        body.replaceChild(getChart(getRandomData()), canvas)
    } else {
        const card = document.createElement('div')
        const header = document.createElement('div')
        const headerTitle = document.createElement('p')
        const btnGroup = document.createElement('div')
        const btnDropdown = document.createElement('button')
        const btnDropdownIcon = document.createElement('i')
        const dropdownMenu = document.createElement('div')
        const btnEdit = document.createElement('button')
        const btnDelete = document.createElement('button')
        const body = document.createElement('div')

        card.classList.add('card', 'mt-4')
        header.classList.add('d-flex', 'justify-content-between', 'card-header')
        headerTitle.classList.add('align-self-center', 'mb-0')
        btnGroup.classList.add('btn-group')
        btnDropdown.classList.add('btn', 'bmd-btn-icon', 'dropdown-toggle')
        btnDropdownIcon.classList.add('material-icons')
        dropdownMenu.classList.add('dropdown-menu', 'dropdown-menu-left')
        btnEdit.classList.add('dropdown-item')
        btnDelete.classList.add('dropdown-item')
        body.classList.add('card-body')

        card.append(header)
        header.append(headerTitle)
        header.append(btnGroup)
        btnGroup.append(btnDropdown)
        btnDropdown.append(btnDropdownIcon)
        btnGroup.append(dropdownMenu)
        dropdownMenu.append(btnEdit)
        dropdownMenu.append(btnDelete)
        card.append(body)
        body.append(getChart(data))

        card.id = id

        headerTitle.textContent = id

        btnDropdown.id = 'moreOptions'
        btnDropdown.setAttribute('type', 'button')
        btnDropdown.setAttribute('data-toggle', 'dropdown')
        btnDropdown.setAttribute('aria-haspopup', true)
        btnDropdown.setAttribute('aria-expanded', false)

        btnDropdownIcon.textContent = 'more_vert'

        dropdownMenu.setAttribute('aria-labelledby', 'moreOptions')

        btnEdit.classList.add('dropdown-item')
        btnEdit.textContent = 'Edit'
        btnEdit.setAttribute('type', 'button')
        btnEdit.onclick = () => editWidget(id)

        btnDelete.classList.add('dropdown-item')
        btnDelete.textContent = 'Delete'
        btnDelete.setAttribute('type', 'button')
        btnDelete.onclick = () => deleteWidget(id)

        body.classList.add('card-body')

        return card
    }
}