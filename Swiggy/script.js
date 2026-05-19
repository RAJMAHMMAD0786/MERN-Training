// ye hai food ke liye 

// querySelectorAll ---> Isaka used sare row pe lagane ke liye kiya jata hai
// querySelector ---> Isaka used sirf pahle row pe lagane ke liye kiya jata hai

function scrollFoodLeft() {
    document.querySelectorAll(".FoodAvailable").forEach((row) => {
        row.scrollBy({
            left: -500,
            behavior: "smooth"
        });
    });
}

function scrollFoodRight() {
    document.querySelectorAll(".FoodAvailable").forEach((row) => {
        row.scrollBy({
            left: 500,
            behavior: "smooth"
        });
    });
}


// ye hai grocery ke liye 
function scrollGroceryLeft() {
    document.querySelector(".AvailableVegetableGroceries").scrollBy({
        left: -500,
        behavior: "smooth"
    });
}

function scrollGroceryRight() {
    document.querySelector(".AvailableVegetableGroceries").scrollBy({
        left: 500,
        behavior: "smooth"
    });
}


// 

function scrollRestaurantsLeft() {
    document.querySelector(".DiscoverBestRestaurants").scrollBy({
        left: -700,
        behavior: "smooth"
    });
}

function scrollRestaurantsRight() {
    document.querySelector(".DiscoverBestRestaurants").scrollBy({
        left: 700,
        behavior: "smooth"
    });
}