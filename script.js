let balance = 1000; // Initial balance

function showMenu() {
    console.log("\nWelcome to the Banking System");
    console.log("1. Check Balance");
    console.log("2. Deposit Money");
    console.log("3. Withdraw Money");
    console.log("4. Exit");
}

function bankingSystem() {
    let choice;

    do {
        showMenu();

        choice = parseInt(prompt("Enter your choice (1-4):"));

        switch (choice) {
            case 1:
                console.log("Your current balance is: $" + balance);
                break;

            case 2:
                let depositAmount = parseFloat(prompt("Enter amount to deposit:"));
                if (depositAmount > 0) {
                    balance += depositAmount;
                    console.log("$" + depositAmount + " has been deposited. New balance: $" + balance);
                } else {
                    console.log("Invalid amount. Please try again.");
                }
                break;
                case 3:
                    let withdrawAmount = parseFloat(prompt("Enter amount to withdraw:"));
                    if (withdrawAmount > 0 && withdrawAmount <= balance) {
                        balance -= withdrawAmount;
                        console.log("$" + withdrawAmount + " has been withdrawn. New balance: $" + balance);
                    } else if (withdrawAmount > balance) {
                        console.log("Insufficient funds. Your balance is: $" + balance);
                    } else {
                        console.log("Invalid amount. Please try again.");
                    }
                    break;
    
                case 4:
                    console.log("Thank you for using the Banking System. Goodbye!");
                    break;
    
                default:
                    console.log("Invalid choice. Please select a valid option.");
            }
        } while (choice !== 4);
    }
    
    // Start the banking program
    bankingSystem(); //function call
