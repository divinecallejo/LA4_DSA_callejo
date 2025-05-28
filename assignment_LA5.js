// Customer hash table
const customerHashTable = {};

// Hash function to create a unique key
function hash(key) {
    let hashValue = 0;
    for (let char of key) {
        hashValue += char.charCodeAt(0);
    }
    return hashValue % 10; // Cap hash value
}

// Add customer to the hash table
function addCustomer(name)
const key = hash(name);
    customerHashTable[key] = name; // Store customer
    console.log(`${name} added. Your number is ${key + 1}.`);

// Service customer by number
function serviceCustomer(number) {
    const key = number - 1; // Zero-based index
    if (customerHashTable[key] === undefined) {
        alert("Invalid number. Enter between 1 and 5.")
return;
    }
    const customerName = customerHashTable[key];
    alert(`Servicing: ${customerName}`);
    delete customerHashTable[key]; // Remove customer
    console.log(`Serviced and removed: ${customerName}`);
    displayHashTable(); // Show updated hash table
}

// Display current hash table
function displayHashTable() {
    console.log("Current Hash Table:");
for (let key in customerHashTable) {
    console.log(`${parseInt(key) + 1}: ${customerHashTable[key]}`);
}

}

// Program start
function main() {
    const predefinedCustomers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];
    predefinedCustomers.forEach(addCustomer); // Add customers
    displayHashTable(); // Show initial hash table

    while (true){
const input = prompt("Enter customer number to service (or 'exit'):");
        if (input === 'exit') {
            alert("Exiting queue system.");
            break;
        }
const number = input.parseInt();
        serviceCustomer(number); // Service customer
    }

main();
