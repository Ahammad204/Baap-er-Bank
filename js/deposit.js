
document.getElementById('btn-deposit').addEventListener('click', function(){

    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    const depositTotalElement = document.getElementById('deposit-total');
    const lastDepositTotalString = depositTotalElement.innerText;
    const lastDepositTotal = parseFloat(lastDepositTotalString);

    const currentDepositTotal = lastDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const lastBalanceTotalString = balanceTotalElement.innerText;
    const lastBalanceTotal = parseFloat(lastBalanceTotalString);

    const currentBalanceTotal = lastBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    depositField.value = '';
})

