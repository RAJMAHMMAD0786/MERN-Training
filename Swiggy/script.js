// ye hai food ke liye 
function scrollFoodLeft() {
    document.querySelector(".FoodAvailable").scrollBy({
        left: -500,
        behavior: "smooth"
    });
}

function scrollFoodRight() {
    document.querySelector(".FoodAvailable").scrollBy({
        left: 500,
        behavior: "smooth"
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