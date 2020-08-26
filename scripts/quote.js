const pages = document.getElementById("pages");
const design = document.getElementById("design");
const seo = document.getElementById("seo");
const social = document.getElementById("social");
const liveChat = document.getElementById("live-chat");
const editable = document.getElementById("editable");
const ecommerce = document.getElementById("ecommerce");
const analytics = document.getElementById("analytics");
const total = document.getElementById("total");

var baseCost = 150;
var pageCost = 0;
var designCost = 0;
var ecommerceCost = 0;
var seoCost = 0;
var socialCost = 0;
var editableCost = 0;
var analyticsCost = 0;
var liveChatCost = 0;

function updatePrice() {
    if (+pages.value <= 10) {
        pageCost = 100;
    } else if (+pages.value >= 11 && +pages.value <= 49) {
        pageCost = 200;
    } else if (+pages.value >= 50 && +pages.value <= 149) {
        pageCost = 500;
    } else {
        pageCost = 1000;
    }

    if (design.value == "custom") {
        designCost = 500;
    } else {
        designCost = 200;
    }

    if (seo.checked) {
        seoCost = 200;
    } else {
        seoCost = 0;
    }

    if (social.checked) {
        socialCost = 50;
    } else {
        socialCost = 0;
    }

    if (liveChat.checked) {
        liveChatCost = 100;
    } else {
        liveChatCost = 0;
    }

    if (analytics.checked) {
        analyticsCost = 100;
    } else {
        analyticsCost = 0;
    }

    if (editable.checked) {
        editableCost = 150;
    } else {
        editableCost = 0;
    }

    if (ecommerce.value.includes("blog")) {
        ecommerceCost = 250;
    } else if (ecommerce.value.includes("store")) {
        ecommerceCost = 500;
    } else {
        ecommerceCost = 0;
    }

    var totalCost =
        baseCost +
        pageCost +
        designCost +
        seoCost +
        socialCost +
        liveChatCost +
        editableCost +
        ecommerceCost +
        analyticsCost;

    total.value = `£${totalCost} to £${totalCost * 2}`;
}

updatePrice();
