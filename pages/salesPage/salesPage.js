
const menu = [
    {
        id: 1,
        title: "LavAzza",
        category: "Filter and Bean Coffee",
        price: "189,95 TL",
        img:
            "https://cdn.dsmcdn.com/mnresize/1200/1800/ty249/product/media/images/20211117/9/181816231/16315973/1/1_org_zoom.jpg",
        desc: `Espresso Crema E Aroma Bean Coffee 1 Kg.`,
    },
    {
        id: 2,
        title: "JERARD",
        category: "Filter and Bean Coffee",
        price: "135 TL",
        img:
            "https://cdn.dsmcdn.com/mnresize/1200/1800/ty150/product/media/images/20210803/0/115207057/159510595/1/1_org_zoom.jpg",
        desc: `House Blend 1kg Bean Coffee.`,
    },
    {
        id: 3,
        title: "Bongardi Coffee",
        category: "Filter and Bean Coffee",
        price: "64,90 TL",
        img:
            "https://cdn.dsmcdn.com/mnresize/1200/1800/ty256/product/media/images/20211129/10/977724/88623325/1/1_org_zoom.jpg",
        desc: `3x200 gr Local Set Brazilian Santos Ethiopia Intense Filter Coffee Machine Compatible.`,
    },
    {
        id: 4,
        title: "Abant Coffee Shop",
        category: "Turkish Coffee",
        price: "68,90 TL",
        img:
            "https://cdn.dsmcdn.com/mnresize/1200/1800/ty24/product/media/images/20201114/7/25892905/102433672/1/1_org_zoom.jpg",
        desc: `3 Piece Mountain Strawberry Turkish Coffee Flavor Set. `,
    },
    {
        id: 5,
        title: "Altincezve Orhan Efendi",
        category: "Turkish Coffee",
        price: "16,90 TL",
        img:
            "https://cdn.dsmcdn.com/mnresize/1200/1800/ty126/product/media/images/20210612/12/99738370/60340025/1/1_org_zoom.jpg",
        desc: `Saltanat Dibek Coffee 200 gr. `,
    },
    {
        id: 6,
        title: "KOCATEPE KAHVE",
        category: "Turkish Coffee",
        price: "128 TL",
        img:
            "https://cdn.dsmcdn.com/mnresize/1200/1800/ty69/product/media/images/20210210/0/61597619/139609973/1/1_org_zoom.jpg",
        desc: `Kocatepe Turkish Coffee 500g. Foil 3-Pack. `,
    },
    {
        id: 7,
        title: "İstanbul Cafer",
        category: "Capsule Coffee",
        price: "154 TL",
        img:
            "https://cdn.dsmcdn.com/mnresize/1200/1800/ty144/product/media/images/20210713/14/110093100/202999877/1/1_org_zoom.jpg",
        desc: `60 Pcs Coffee Capsules with Stand Gift.`,
    },
    {
        id: 8,
        title: "Tchibo ",
        category: "Capsule Coffee",
        price: "39,95 TL",
        img:
            "https://cdn.dsmcdn.com/mnresize/1200/1800/ty236/product/media/images/20211109/13/172134599/299750753/1/1_org_zoom.jpg",
        desc: `Espresso Buttertoffee Flavored Coffee Capsules 10 Pieces.`,
    },

];

function showBtn() {
    let category = ['All'];
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
