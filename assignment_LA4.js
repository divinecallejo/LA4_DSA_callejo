// Customer queue array
let customerQueue = [];

// Add customer to queue
function addCustomer(name) {
    customerQueue.push(name);
    console.log(`${name} added to queue. Number: ${customerQueue.length}`);
}

// Service customer by number
function serviceCustomer(number) {
    if (number < 1 || number > customerQueue.length) {
        alert("Invalid number. Enter between 1 and " + customerQueue.length);
        return;
const number = document.getElementById("number").value;
const customerQueue = ["Tom", "Peter", "Eduardo", "Monica", "Monique"];
const customerName = customerQueue[number - 1];
alert(`Servicing customer: ${customerName}`);
customerQueue.splice(number - 1, 1);
console.log(`Serviced and removed: ${customerName}`);
displayQueue();

// Display current queue
function displayQueue() {
    console.log("Current Queue:");
    customerQueue.forEach((customer, index) => {
        console.log(`${index + 1}: ${customer}`);
    })
});}
}

// Program start
function main() {
    const predefinedCustomers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];
    predefinedCustomers.forEach(addCustomer);
    displayQueue();

    while (true) {
        const input = prompt("Enter number to service (or 'exit'):");
        if (input === 'exit')
alert("Exiting queue system.");
            break;
        }
        const number = parseInt(input);
        serviceCustomer(number);
    }
}

main();

