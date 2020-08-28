const pages = document.getElementById("pages");
const seo = document.getElementById("seo");
const social = document.getElementById("social");
const liveChat = document.getElementById("live-chat");
const editable = document.getElementById("editable");
const ecommerce = document.getElementById("ecommerce");
const analytics = document.getElementById("analytics");
const total = document.getElementById("total");
const quotePages = document.getElementById("quote-pages");
const quoteEcommerce = document.getElementById("quote-ecommerce");
const quoteSocial = document.getElementById("quote-social");
const quoteSeo = document.getElementById("quote-seo");
const quoteChat = document.getElementById("quote-chat");
const quoteAnalytics = document.getElementById("quote-analytics");
const quoteEditable = document.getElementById("quote-editable");
const labelEditable = document.getElementById("label-editable");

var pageCost = 0,
    ecommerceCost = 0,
    seoCost = 0,
    socialCost = 0,
    editableCost = 0,
    analyticsCost = 0,
    liveChatCost = 0,
    totalCost;

function updatePrice() {

    // 1-5
    // 6-10


    pageCost = +pages.value * 100;

    if (+pages.value > 1) {
        quotePages.innerText = `+ ${+pages.value} Pages`
    } else {
        quotePages.innerText = `+ ${+pages.value} Page`
    }


    if (ecommerce.value.includes("blog")) {
        ecommerceCost = 750;
        quoteEcommerce.innerText = "+ Blog";
        labelEditable.style.display = "none";
        editable.checked = false;
    } else if (ecommerce.value.includes("store")) {
        ecommerceCost = 1000;
        quoteEcommerce.innerText = "+ Online Store";
        labelEditable.style.display = "none";
        editable.checked = false;
    } else {
        ecommerceCost = 500;
        quoteEcommerce.innerText = "+ Static Website";
        labelEditable.style.display = "flex";
    }

    if (seo.checked) {
        seoCost = 200;
        quoteSeo.style.display = "block";
    } else {
        seoCost = 0;
        quoteSeo.style.display = "none";
    }

    if (social.checked) {
        socialCost = 50;
        quoteSocial.style.display = "block";
    } else {
        socialCost = 0;
        quoteSocial.style.display = "none";
    }

    if (liveChat.checked) {
        liveChatCost = 250;
        quoteChat.style.display = "block";
    } else {
        liveChatCost = 0;
        quoteChat.style.display = "none";
    }

    if (analytics.checked) {
        analyticsCost = 25;
        quoteAnalytics.style.display = "block";
    } else {
        analyticsCost = 0;
        quoteAnalytics.style.display = "none";
    }

    if (ecommerce.value.includes("yes") && editable.checked) {
        editableCost = 0;
        quoteEditable.style.display = "none";
    } else if (ecommerce.value.includes("no") && editable.checked) {
        editableCost = 150;
        quoteEditable.style.display = "block";
    } else {
        editableCost = 0;
        quoteEditable.style.display = "none";
    }

    totalCost =
        pageCost +
        seoCost +
        socialCost +
        liveChatCost +
        editableCost +
        ecommerceCost +
        analyticsCost;

    total.value = `£${totalCost} to £${totalCost * 2}`;
}

updatePrice();