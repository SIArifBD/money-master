function incomeInputTotal() {
    const inputIncomeAmount = document.getElementById("income-amount");
    const income = inputIncomeAmount.value;
    const incomeAmount = parseFloat(income);
    return incomeAmount;
}

document
    .getElementById("calculate-button")
    .addEventListener("click", function () {
        //Income amount
        const incomeAmount = incomeInputTotal();
        //food cost amount
        const inputFoodCost = document.getElementById("food-expense");
        const food = inputFoodCost.value;
        const foodCost = parseFloat(food);
        //rent cost amount
        const inputRentCost = document.getElementById("rent-expense");
        const rent = inputRentCost.value;
        const rentCost = parseFloat(rent);
        //clothes cost amount
        const inputClothesCost = document.getElementById("clothes-expense");
        const clothes = inputClothesCost.value;
        const clothesCost = parseFloat(clothes);

        //total expenses from input fields
        const totalCost = foodCost + rentCost + clothesCost;

        //remaining balance from input field
        const remainingBalance = incomeAmount - totalCost;

        //total expenses show fields
        const totalExpensesText = document.getElementById("expense-amount");
        const newTotalExpensesText = totalExpensesText.innerText;
        const preTotalExpenses = parseFloat(newTotalExpensesText);
        const totalExpenses = preTotalExpenses + totalCost;
        totalExpensesText.innerText = totalExpenses;

        //remaining balance show field
        const remainingBalanceText = document.getElementById("balance-remaining");
        const newRemainingBalanceText = remainingBalanceText.innerText;
        const preRemainingBalance = parseFloat(newRemainingBalanceText);
        const totalRemainingBalance = preRemainingBalance + remainingBalance;
        remainingBalanceText.innerText = totalRemainingBalance;

        // saving remaining balance
        const savingRemainingBalance = document.getElementById("remaining-balance");

        // show balance in saving
        savingRemainingBalance.innerText = totalRemainingBalance;

        //clear input fields
        inputFoodCost.value = '';
        inputRentCost.value = '';
        inputClothesCost.value = '';

    });
document.getElementById("save-button").addEventListener("click", function () {
    const saveParcentInput = document.getElementById("save-percent");
    const saveParcentInputText = saveParcentInput.value;
    const newSaveParcentInput = parseFloat(saveParcentInputText);
    console.log('newSaveParcentInput', newSaveParcentInput);

    // saving remaining balance
    const savingRemainingBalance = document.getElementById("remaining-balance");
    const savingRemainingBalanceText = savingRemainingBalance.innerText;
    const savingRemainingBalanceAmount = parseFloat(savingRemainingBalanceText);
    console.log('savingRemainingBalanceAmount', savingRemainingBalanceAmount);

    //Income amount
    const incomeAmount = incomeInputTotal();

    //Saving Amount calculation
    const savingsAmount = (incomeAmount * newSaveParcentInput) / 100;
    console.log('savingsAmount', savingsAmount);

    document.getElementById('save-amount').innerText = savingsAmount;

    // remaining balance calculation after saving
    const remainingAfterSaving = savingRemainingBalanceAmount - savingsAmount;
    savingRemainingBalance.innerText = remainingAfterSaving;

    //clear input field
    saveParcentInput.value = '';
});