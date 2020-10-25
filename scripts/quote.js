const pages = document.getElementById("pages");
const seo = document.getElementById("seo");
const social = document.getElementById("social");
const liveChat = document.getElementById("live-chat");
const editable = document.getElementById("editable");
const type = document.getElementById("type");
const analytics = document.getElementById("analytics");
const total = document.getElementById("total");
const quotePages = document.getElementById("quote-pages");
const quoteType = document.getElementById("quote-type");
const quoteSocial = document.getElementById("quote-social");
const quoteSeo = document.getElementById("quote-seo");
const quoteChat = document.getElementById("quote-chat");
const quoteAnalytics = document.getElementById("quote-analytics");
const quoteEditable = document.getElementById("quote-editable");
const labelEditable = document.getElementById("label-editable");
const labelBlog = document.getElementById("label-blog");

var pageCost = 0,
    typeCost = 0,
    seoCost = 0,
    socialCost = 0,
    editableCost = 0,
    analyticsCost = 0,
    liveChatCost = 0,
    totalCost;

function updatePrice() {

    if (+pages.value > 1) {
        quotePages.innerText = `+ ${+pages.value} Pages`
    } else {
        quotePages.innerText = `+ ${+pages.value} Page`
    }

    if (type.value.includes("blog")) {
        typeCost = 500;
        pageCost = +pages.value * 75;
        quoteType.innerText = "+ Blog";
        labelEditable.style.display = "none";
        editable.checked = false;
    } else if (type.value.includes("store")) {
        typeCost = 650;
        pageCost = +pages.value * 75;
        quoteType.innerText = "+ Online Store";
        labelEditable.style.display = "none";
        editable.checked = false;
    } else {
        typeCost = 400;
        pageCost = +pages.value * 50;
        quoteType.innerText = "+ Static Website";
        labelEditable.style.display = "flex";
    }

    if (seo.checked) {
        seoCost = 150;
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
        liveChatCost = 150;
        quoteChat.style.display = "block";
    } else {
        liveChatCost = 0;
        quoteChat.style.display = "none";
    }

    if (analytics.checked) {
        analyticsCost = 50;
        quoteAnalytics.style.display = "block";
    } else {
        analyticsCost = 0;
        quoteAnalytics.style.display = "none";
    }

    if (type.value.includes("yes") && editable.checked) {
        editableCost = 0;
        quoteEditable.style.display = "none";
    } else if (!type.value.includes("yes") && editable.checked) {
        editableCost = 150;
        quoteEditable.style.display = "block";
    } else {
        editableCost = 0;
        quoteEditable.style.display = "none";
    }

    totalCost =
        pageCost +
        typeCost +
        seoCost +
        socialCost +
        liveChatCost +
        editableCost +
        analyticsCost;

    total.value = `£${totalCost} to £${totalCost * 2}`;
}

updatePrice();