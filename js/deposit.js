/**
 * 1. add event listener to the deposit button.
 * 2. get deposit amount form the deposit filed
 * 2.5 convart amount deposit amount to a number type
 * 3. clear the deposit input filed after getting the value.
 * 4. get the previus total
 * 5. calculate new deposit total and set the value to deposit total
 * 6. Get current blance
 * 7. claculate the new blance and set it to the blance total emement
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
  //   setp -5blance-total
  const newDepositTotal = prevDepositTotal + newDepositAmount;
  depositTotalElement.innerText = newDepositTotal;
  //   setp -6
  const blanceTotalElement = document.getElementById("blance-total");
  const prevBlanceTotalString = blanceTotalElement.innerText;
  const prevBlanceTotalAmount = parseFloat(prevBlanceTotalString);
  //   setp -7 
  const newBlanceTotal = prevBlanceTotalAmount + newDepositAmount
  blanceTotalElement.innerText = newBlanceTotal
});
