/**
 * 1. add event handler with the withdraw button
 * 2. get the withdraw amount
 * 2.5 clear the input filed
 *
 */
document.getElementById("btn-withdraw").addEventListener("click", function () {
  //   step-2
  const withdrawFiled = document.getElementById("widdraw-fild");
  const newWithdrawAmountString = withdrawFiled.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);
  console.log(newWithdrawAmount);

  //   step 2.5
  withdrawFiled.value = "";

  const widdrawTotalElement = document.getElementById("Withdraw-total");
  const prevwithraawTotalString = widdrawTotalElement.innerText;
  const prevwithraawTotal = parseFloat(prevwithraawTotalString);

  //   step - 5

  const newWithdrawTotal = prevwithraawTotal + newWithdrawAmount;
  widdrawTotalElement.innerText = newWithdrawTotal;

  //   step -6

  const blanceElement = document.getElementById("blance-total");
  const prevBlanceTotalString = blanceElement.innerText;
  const prevBlanceTotal = parseFloat(prevBlanceTotalString);

  const newBlanceTotal = prevBlanceTotal - newWithdrawAmount;
  blanceElement.innerText = newBlanceTotal;
});
