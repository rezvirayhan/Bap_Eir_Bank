/**
 * 1. add event listener to the deposit button.
 * 2. get deposit amount form the deposit filed
 * 2.5 convart amount deposit amount to a number type
 * 3. clear the deposit input filed after getting the value.
 * 4. get the previus total
 * 5. calculate new deposit total and set the value to deposit total
 *
 */

document.getElementById("btn-deposit").addEventListener("click", function () {
  const depositField = document.getElementById("deposit-filed");
  const newDepositAmounString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmounString);
  //   setp -3
  depositField.value = "";
  //   setp -4
  const depositTotalElement = document.getElementById("deposit-total");
  const prevDepositTotalString = depositTotalElement.innerText;
  const prevDepositTotal = parseFloat(prevDepositTotalString);
  //   setp -5
  const newDepositTotal = prevDepositTotal + newDepositAmount;
  depositTotalElement.innerText = newDepositTotal;
});
