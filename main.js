// Login Button Event Handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})

// Deposite Button Event Handler
const depositeBtn = document.getElementById("deposite-btn");
depositeBtn.addEventListener("click", function(){
    const depositeAmountNum = getInput("deposite-amount");

    balanceUpdate("deposite-Amount", depositeAmountNum);
    balanceUpdate("balance-amount", depositeAmountNum);

    document.getElementById("deposite-amount").value = "";
})

// Withdraw Button Event Handler
const withdrawBtn = document.getElementById("withdraw-btn");
withdrawBtn.addEventListener("click", function(){
    const withdrawAmountNum = getInput("withdraw-amount");
    console.log(withdrawAmountNum);
})

function getInput(id){
    const Amount = document.getElementById(id).value;
    const AmountNum = parseFloat(Amount);
    return AmountNum;
}

function balanceUpdate(id, depositeAmountNum){
    const currentAmount = document.getElementById(id).innerText;
    const currentNumber = parseFloat(currentAmount);
    const totalAmount = depositeAmountNum + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}