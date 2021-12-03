
let menu = [];
async function getJSON(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}



async function showBtn() {
    menu = await getJSON("/constants.json");
    let category = ['All'];
    console.log(menu)
    menu.map((element) => {
        category.push(element.category);
    })
    category = [... new Set(category)]
    createCategoryButtons(category)
}

const createMenuItems = (menuItems) => {
    const itemsContainer = document.getElementsByClassName('section-center')[0];
    let createdContainer;
    let itemImage;
    let itemInfo;
    let itemTitle;
    let itemDescription;
    let itemPrice;
    itemsContainer.innerHTML = null
    menuItems.forEach((item) => {
        createdContainer = document.createElement('div');
        createdContainer.className = 'menu-items'
        itemImage = document.createElement('img');
        itemImage.className = 'photo'
        itemInfo = document.createElement('div');
        itemInfo.className = 'menu-info'
        itemTitle = document.createElement('h4');
        itemTitle.className = 'd-flex justify-content-between menu-title'
        itemDescription = document.createElement('p');
        itemPrice = document.createElement('p');
        itemPrice.className = 'item-price';
        itemImage.src = item.img
        itemTitle.innerHTML = item.title;
        itemDescription.innerHTML = item.desc;
        itemPrice.innerHTML = item.price;
        itemInfo.append(itemTitle, itemDescription, itemPrice);
        createdContainer.append(itemImage, itemInfo);
        itemsContainer.appendChild(createdContainer);
        createdContainer.onclick = () => window.location.href = `/pages/detailPage/detailPage.html?id=${item.id}`;

    })
}

const filterMenuItems = (filterKey) => {
    let filterResults = [];
    if (filterKey === 'All') {
        filterResults = menu;
    } else {
        menu.map((element) => {
            if (element.category === filterKey) {
                filterResults.push(element);
            }
        })
    }
    createMenuItems(filterResults);
}

const createCategoryButtons = (categories) => {
    const buttonContainer = document.getElementsByClassName('btn-container')[0];
    let createdElement;
    categories.forEach((category) => {
        createdElement = document.createElement('button');
        createdElement.innerHTML = category;
        createdElement.className = `btn-item ${category}`;
        createdElement.onclick = () => filterMenuItems(category);
        buttonContainer.appendChild(createdElement);
    })
    createMenuItems(menu);
}

showBtn();
