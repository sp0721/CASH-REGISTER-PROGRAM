/*
Scan your item - it will prompt the user to enter number of items, name of items, and cost of items
Display items - it will show a list of items including their costs
Total - it will show the total of all the items and also show the items
 */


// Define a cash register object to store total and items
const cashRegister = {
  total: 0, // Initialize total to 0
  items: [], // Initialize items array to store scanned items
  // Method to add item cost to the total
  add: function(itemCost) {
    this.total += itemCost;
  },
  // Method to add item to the items array
  addItem: function(itemName, itemCost) {
    this.items.push({ name: itemName, cost: itemCost });
  },
  // Method to clear total and items array
  clear: function() {
    this.total = 0;
    this.items = [];
  }
};

// Function to scan items
function scan() {
  // Clear previous scanned items
  cashRegister.clear();

  // Prompt user to enter the number of items
  let itemCount = parseInt(prompt("Enter the total number of items:"));
  
  // Loop to get item name and cost for each item
  for (let i = 0; i < itemCount; i++) {
    let itemName = prompt("Enter the name for item " + (i + 1) + ":");
    let itemCost = parseFloat(prompt("Enter the cost for item " + (i + 1) + ":"));

    // Check if the cost entered is valid
    if (!isNaN(itemCost)) {
      // Add item cost to the total and add item to the items array
      cashRegister.add(itemCost);
      cashRegister.addItem(itemName, itemCost);
    } else {
      alert("Invalid cost. Please enter a valid number.");
      return;
    }
  }
}

// Function to display scanned items
function displayItems() {
  let itemsList = "Scanned Items:\n";
  // Loop through each item in the items array and display its name and cost
  cashRegister.items.forEach(item => {
    itemsList += `${item.name}: $${item.cost.toFixed(2)}\n`;
  });
  // Display the list of scanned items
  alert(itemsList);
}

// Function to calculate and display total amount
function printTotal() {
  // Check if any items are scanned
  if (cashRegister.total === 0) {
    alert("Please scan items first.");
    return;
  }

  // Display total amount and list of scanned items
  let totalMessage = "Total: $" + cashRegister.total.toFixed(2) + "\n\n";
  let itemsList = "Scanned Items:\n";
  cashRegister.items.forEach(item => {
    itemsList += `${item.name}: $${item.cost.toFixed(2)}\n`;
  });
  alert(totalMessage + itemsList);
}
