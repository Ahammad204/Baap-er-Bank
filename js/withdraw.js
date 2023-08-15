
document.getElementById('btn-withdraw').addEventListener('click', function(){
  
    const withDrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withDrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    withDrawField.value = '';
    
    if(isNaN(newWithdrawAmount)){
        alert('Please Enter a Number');
        return;
    }

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const lastWithdrawTotalString = withdrawTotalElement.innerText;
    const lastWithdrawTotal = parseFloat(lastWithdrawTotalString);

    const balanceTotalElement = document.getElementById('balance-total');
    const lastBalanceTotalString = balanceTotalElement.innerText;
    const lastBalanceTotal = parseFloat(lastBalanceTotalString);

  

    if(newWithdrawAmount > lastBalanceTotal){
        alert('Insufficient Balance');
        return;
    }

    const currentWithdrawTotal = lastWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const newBalanceTotal = lastBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

   
})