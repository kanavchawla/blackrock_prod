import { CoinOrder } from "./crypto-shares.js";
const coinDetails = localStorage.getItem("tempCoinInfo");
const coinDetailsParsed = JSON.parse(coinDetails);
const coinShareSymbol = document.querySelector(".coin-share span");
const image = document.querySelector(".upper img");
const coinName = document.querySelector(".coin-name");
const numValue = document.querySelector(".amount input");
const orderBtn = document.querySelector(".order-btn");
const closeModal = document.querySelector(".close-modal");
const modalOverlay = document.querySelector(".modal-overlay");
let shareNumAmount = 0;
let isbuy = coinDetailsParsed.buy;
const accountBalanceElm = document.querySelector(".available-cash")
accountBalanceElm.textContent = localStorage.getItem("accountBalance")

coinShareSymbol.textContent = `${shareNumAmount} ${coinDetailsParsed.symbol.toUpperCase()}`;
image.src = coinDetailsParsed.image;
coinName.textContent = coinDetailsParsed.name;
if (coinDetailsParsed.buy) {
  document.getElementById("buy").classList.add("active-pill");
} else {
  document.getElementById("sell").classList.add("active-pill");
}

numValue.addEventListener("input", () => {
  const valueLength = numValue.value.length;
  const value = numValue.value;
  const minWidth = 33; // Minimum width of the input

  if (valueLength === 0) {
    numValue.style.width = `${minWidth}px`;
    coinShareSymbol.textContent = `${(shareNumAmount = 0)} ${coinDetailsParsed.symbol.toUpperCase()}`;
    document.querySelector(".order-btn").style.display = "none";
  } else {
    numValue.style.width = `${minWidth * valueLength}px`;
    coinShareSymbol.textContent = `${(shareNumAmount =
      getShareConversion(value))} ${coinDetailsParsed.symbol.toUpperCase()}`;
    document.querySelector(".order-btn").style.display = "block";
  }
});

function getShareConversion(inputNum) {
  const amount = parseFloat(inputNum);
  if (isNaN(amount) || amount <= 0) {
    return 0; // Return 0 if the input is not a valid positive number
  }
  const shareValue = amount / coinDetailsParsed.price;
  return parseFloat(shareValue.toFixed(4)); // Round the share value to 4 decimal places
}

document.querySelector(".order-header a").addEventListener("click", () => {
  window.location.href = `/pages/crypto-details.html?coin=${coinDetailsParsed.id}`;
});

document.querySelector(".pill").addEventListener("click", (e) => {
  if (e.target.id === "buy") {
    document.getElementById("buy").classList.add("active-pill");
    document.getElementById("sell").classList.remove("active-pill");
    isbuy = true;
  } else if (e.target.id === "sell") {
    document.getElementById("sell").classList.add("active-pill");
    document.getElementById("buy").classList.remove("active-pill");
    isbuy = false;
  }
});

numValue.addEventListener("focus", (_) => {
  document.body.style.height = "150vh";
  setTimeout(() => {
    document.querySelector(".pill").scrollIntoView({ block: "start" });
  }, 100);
});

numValue.addEventListener("blur", (_) => {
  setTimeout(() => {
    document.body.style.height = "auto";
  }, 0);
});

orderBtn.addEventListener("click", () => {
  renderModalDetails();
  document.body.style.height = "auto";
  modalOverlay.style.display = "block";
});

closeModal.addEventListener("click", () => {
  modalOverlay.style.display = "none";
  document.body.style.height = "auto";
});

function renderModalDetails() {
  const amountValue = parseFloat(numValue.value).toFixed(2);
  const shareValue = getShareConversion(numValue.value);

  document.querySelector(".modal-content img").src = coinDetailsParsed.image;
  document.querySelector(
    ".amount-text"
  ).innerHTML = `Buy ${amountValue}<span class="usd"> USD</span>`;
  document.querySelector(
    ".coin-price"
  ).textContent = `${coinDetailsParsed.symbol.toUpperCase()} price $${
    coinDetailsParsed.price
  }`;
  document.querySelector(
    ".pay-method"
  ).innerHTML = `<span>Payment method</span><span class="text-color">Nacho Banco</span>`;
  document.querySelector(
    ".amount-value"
  ).innerHTML = `<span>Amount in ${coinDetailsParsed.symbol.toUpperCase()}</span><span class="text-color">${(shareNumAmount =
    shareValue)} ${coinDetailsParsed.symbol.toUpperCase()}</span>`;
  document.querySelector(
    ".fee"
  ).innerHTML = `<span>Coin fee</span><span class="text-color">$0.00</span>`;
  document.querySelector(
    ".total"
  ).innerHTML = `<span>Total</span><span>$${amountValue}</span>`;
}

document.querySelector(".place-order-btn").addEventListener("click", (_) => {
  const amountValue = parseFloat(numValue.value).toFixed(2);
  const shareValue = getShareConversion(numValue.value);
  const availableCash = JSON.parse(localStorage.getItem("accountBalance"))
  const curentPrice = JSON.parse(localStorage.getItem("tempCoinInfo")).price
  
  const currentDate = new Date();
  let portfolio = {}
  const formattedDate = currentDate
    .toISOString()
    .slice(0, 19)
    .replace("T", " ");

    if (localStorage.getItem("portfolio")) {
      portfolio = JSON.parse(localStorage.getItem("portfolio"))
    }
  // const order = new CoinOrder(
  //   coinDetailsParsed.id,
  //   coinDetailsParsed.symbol,
  //   formattedDate,
  //   shareValue,
  //   amountValue
  // );
  const order = new CoinOrder(
    coinDetailsParsed.id,
    coinDetailsParsed.symbol,
    formattedDate,
    shareValue,
    curentPrice,
    amountValue
  )

if (!portfolio[order.id]) {
  portfolio[order.id] = []
}

  portfolio[order.id].push(order)
  localStorage.setItem("portfolio", JSON.stringify(portfolio))
updateAccountBalance(availableCash, amountValue)


  window.location.href = `/pages/crypto-details.html?coin=${coinDetailsParsed.id}`;
  
});

const updateAccountBalance = (balance, amountValue) => {
  let result = balance - amountValue
  localStorage.setItem("accountBalance", result)
}




