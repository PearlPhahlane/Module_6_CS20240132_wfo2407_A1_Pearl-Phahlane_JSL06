// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
   const menuContainer = document.getElementById("menu");

   for (const [category, items] of Object.entries(menu)) {
    const categoryHeading = document.createElement('h3');
        categoryHeading.textContent = category;

     menuContainer.appendChild(categoryHeading);

     const categoryList = document.createElement('ul');

     items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;

        listItem.addEventListener('click', () => addToOrder(item));

        categoryList.appendChild(listItem);
     });
      menuContainer.appendChild(categoryList);
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    const orderItemsList = document.getElementById('order-items');
    const orderTotalElem = document.getElementById('order-total');

    const orderItem = document.createElement('li');
    orderItem.textContent = itemName;

    orderItemsList.appendChild(orderItem);
    const currentTotal = parseFloat(orderTotalElem.textContent);
    
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
}

// Start the menu system by calling the init function
initMenuSystem(menu);
