const pages = document.getElementById("pages");
const seo = document.getElementById("seo");
const social = document.getElementById("social");
const liveChat = document.getElementById("live-chat");
const editable = document.getElementById("editable");
const type = document.getElementById("type");
const analytics = document.getElementById("analytics");
const total = document.getElementById("total");
const estimatePrev = document.getElementById("estimate-prev");
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
    quotePages.innerText = `+ ${+pages.value} Pages`;
  } else {
    quotePages.innerText = `+ ${+pages.value} Page`;
  }

  if (type.value.includes("blog")) {
    typeCost = 150;
    pageCost = +pages.value * 75;
    quoteType.innerText = "+ Blog";
    labelEditable.style.display = "none";
    editable.checked = false;
  } else if (type.value.includes("store")) {
    typeCost = 200;
    pageCost = +pages.value * 75;
    quoteType.innerText = "+ Online Store";
    labelEditable.style.display = "none";
    editable.checked = false;
  } else if (type.value.includes("not sure")) {
    typeCost = 100;
    pageCost = +pages.value * 50;
    quoteType.innerText = "+ Not sure";
    labelEditable.style.display = "flex";
  } else {
    typeCost = 100;
    pageCost = +pages.value * 50;
    quoteType.innerText = "+ Static Website";
    labelEditable.style.display = "flex";
  }

  if (seo.checked) {
    seoCost = 100;
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
    liveChatCost = 50;
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
    editableCost = 50;
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

  // total.value = `£${totalCost} to £${totalCost * 2}`;
}

updatePrice();

const popupResponsive = document.getElementById("popup-responsive");
const popupCustom = document.getElementById("popup-custom");
const popupEstimate = document.getElementById("popup-estimate");

function tooltip(tip) {
  if (tip == "responsive" && popupResponsive.classList.contains("hidden")) {
    popupResponsive.style.display = "flex";
    popupResponsive.classList.add("active");
    popupResponsive.classList.remove("hidden");
  } else if (
    tip == "responsive" &&
    popupResponsive.classList.contains("active")
  ) {
    popupResponsive.style.display = "none";
    popupResponsive.classList.add("hidden");
    popupResponsive.classList.remove("active");
  }
  if (tip == "custom" && popupCustom.classList.contains("hidden")) {
    popupCustom.style.display = "flex";
    popupCustom.classList.add("active");
    popupCustom.classList.remove("hidden");
  } else if (tip == "custom" && popupCustom.classList.contains("active")) {
    popupCustom.style.display = "none";
    popupCustom.classList.add("hidden");
    popupCustom.classList.remove("active");
  }
  if (tip == "estimate" && popupEstimate.classList.contains("hidden")) {
    popupEstimate.style.display = "flex";
    popupEstimate.classList.add("active");
    popupEstimate.classList.remove("hidden");
  } else if (tip == "estimate" && popupEstimate.classList.contains("active")) {
    popupEstimate.style.display = "none";
    popupEstimate.classList.add("hidden");
    popupEstimate.classList.remove("active");
  }
}
