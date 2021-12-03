const parsedUrl = new URL(window.location.href);
let itemId = parsedUrl.searchParams.get("id");
let item = [];
let recommendedItem = [];
let menu = [];
async function getJSON(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

async function show() {
    menu = await getJSON("/constants.json");
    menu.map((menuItem) => {
        if (menuItem.id == itemId) {
            item.push(menuItem)
        }
        else {
            recommendedItem.push(menuItem);
        }
    })
    showEngine();
}

const showEngine = () => {
    showImg();
    showHeader();
    showProductDesc();
    showRecommendedItem();
    showDetail();
}
const showImg = () => {

    let img = document.getElementById("product-img");
    img.src = item[0].img;

}

const showHeader = () => {

    let header = document.getElementById("header");
    header.textContent = item[0].title;
}

const showProductDesc = () => {

    let productDesc = document.getElementById("product-desc");
    productDesc.textContent = item[0].desc;
}


const showRecommendedItem = () => {

    for (let i = 0; i < 4; i++) {
        let item = document.getElementsByClassName("recommended")[i];
        let random = recommendedItem.pop(Math.floor(Math.random() * recommendedItem.length));
        item.src = random.img;
        item.onclick = () => window.location.href = `/pages/detailPage/detailPage.html?id=${random.id}`;
    }

}

const showDetail = () => {

    document.getElementById("price").textContent = item[0].title;
    document.getElementById("type").textContent = item[0].category;
}
show();

