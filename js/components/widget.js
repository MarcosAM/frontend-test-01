const getWidget = ({ id, data, btns }) => {

    if (document.getElementById(id)) {
        const body = document.getElementById(id).getElementsByClassName('card-body')[0]
        const canvas = body.getElementsByTagName('canvas')[0]
        //TODO deixar para o widget só receber data, não gerar ele mesmo
        const newData = getRandomData()
        body.replaceChild(getChart(newData), canvas)
        //TODO desvicular isso aqui com a lógica do local storage
        updateWidget({ id, data: newData })
    } else {
        const card = document.createElement('div')
        const header = document.createElement('div')
        const headerTitle = document.createElement('p')
        const btnGroup = dropdownOptions([{ text: 'Edit', fun: () => editWidget(id) }, { text: 'Delete', fun: () => deleteWidget(id) }])
        const body = document.createElement('div')

        card.classList.add('card', 'mt-4')
        header.classList.add('d-flex', 'justify-content-between', 'card-header')
        headerTitle.classList.add('align-self-center', 'mb-0')

        body.classList.add('card-body')

        card.append(header)
        header.append(headerTitle)
        header.append(btnGroup)
        card.append(body)
        body.append(getChart(data))

        card.id = id

        headerTitle.textContent = id

        body.classList.add('card-body')

        return card
    }
}

const dropdownOptions = (itens) => {
    const btnGroup = document.createElement('div')
    const btnDropdown = document.createElement('button')
    const btnDropdownIcon = document.createElement('i')
    const dropdownMenu = document.createElement('div')

    btnGroup.append(btnDropdown)
    btnDropdown.append(btnDropdownIcon)
    btnGroup.append(dropdownMenu)

    btnGroup.classList.add('btn-group')
    btnDropdown.classList.add('btn', 'bmd-btn-icon', 'dropdown-toggle')
    btnDropdownIcon.classList.add('material-icons')
    dropdownMenu.classList.add('dropdown-menu', 'dropdown-menu-left')

    btnDropdown.id = 'moreOptions'
    btnDropdown.setAttribute('type', 'button')
    btnDropdown.setAttribute('data-toggle', 'dropdown')
    btnDropdown.setAttribute('aria-haspopup', true)
    btnDropdown.setAttribute('aria-expanded', false)

    btnDropdownIcon.textContent = 'more_vert'

    dropdownMenu.setAttribute('aria-labelledby', 'moreOptions')

    const dropdownItens = itens.map(item => dropdownItem(item))
    dropdownMenu.append(...dropdownItens)

    return btnGroup
}

const dropdownItem = ({ text, fun }) => {
    const item = document.createElement('button')
    item.classList.add('dropdown-item')
    item.textContent = text
    item.setAttribute('type', 'button')
    item.onclick = fun

    return item
}