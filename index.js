import inquirer from "inquirer";
let myBalance = 0;
let isContinue = true;
const pinCode = 1234;
const message = "Welcome to ATM";
console.log(message);
let pin_ans = await inquirer.prompt({
    type: "number",
    name: "ans",
    message: "Please enter pin code: "
});
if (pin_ans.ans === 1234) {
    do {
        let ans = await inquirer.prompt({
            type: "list",
            name: "list",
            message: "Select any option",
            choices: ["Deposit", "withdraw", "fast cash", "balance check"]
        });
        //--------------------Deposit-------------------
        if (ans.list === "Deposit") {
            let ans = await inquirer.prompt({
                type: "number",
                name: "Deposit_amount",
                message: "Please Enter your amount: "
            });
            if (ans.Deposit_amount > 0) {
                myBalance = myBalance + ans.Deposit_amount;
                console.log(myBalance);
            }
        }
        //------------ Withdraw ------------
        else if (ans.list === "withdraw") {
            let ans = await inquirer.prompt({
                type: "number",
                name: "withdraw_amount",
                message: "Please enter amount"
            });
            if (ans.withdraw_amount <= myBalance) {
                myBalance = myBalance - ans.withdraw_amount;
                console.log(myBalance);
            }
            else {
                console.log("Not enough Money");
            }
        }
        //------------ Fast Cash ------------
        else if (ans.list === "fast cash") {
            let ans = await inquirer.prompt({
                type: "list",
                name: "fast cash",
                message: "Please select one",
                choices: ["500", "1000", "2000"]
            });
            if (ans.fast_cash <= myBalance) {
                if (ans.fast_cash === "500") {
                    myBalance -= ans.fast_cash;
                    console.log(myBalance);
                }
                else if (ans.fast_cash === "1000") {
                    myBalance -= ans.fast_cash;
                    console.log(myBalance);
                }
                else if (ans.fast_cash === "2000") {
                    myBalance -= ans.fast_cash;
                    console.log(myBalance);
                }
            }
        }
        //------------ check balance -------------
        else if (ans.list === "balance check") {
            console.log(`your balance is: ${myBalance}`);
        }
        //------------ while conditin ------------
        let while_ans = await inquirer.prompt({
            type: "confirm",
            name: "condition",
            message: "Do you want to continue: "
        });
        if (while_ans.condition === false) {
            isContinue = false;
        }
    } while (isContinue);
}
else {
    console.log("Invalid pin code");
}
