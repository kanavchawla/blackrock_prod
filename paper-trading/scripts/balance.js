const amountInput = document.getElementById("amount");
const addFundsBtn = document.querySelector(".btn");
const currentBalanceElm = document.querySelector(".current-balance");

// Retrieve the saved balance from local storage, if available
let balance = localStorage.getItem("accountBalance") || 0;

// Display the initial account balance
currentBalanceElm.textContent = `$${balance}`;

// Handle form submission
const balanceForm = document.getElementById("balanceForm");
balanceForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Update the account balance in local storage
  balance = Number(balance) + Number(amountInput.value);
  localStorage.setItem("accountBalance", balance);

  //Display the updated account balance
  currentBalanceElm.textContent = `$${balance}`;

  // Reset the form
  balanceForm.reset();
});
