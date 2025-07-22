let isAuthenticated = true;
let userRole = "admin";
let hasPremiumSubscription = false;

if (isAuthenticated && userRole === "admin") {
    console.log("Welcome, Administrator! Full access granted.");
} else if (isAuthenticated && hasPremiumSubscription) {
    console.log("Welcome, Premium User! Enjoy exclusive content.");
} else if (isAuthenticated) {
    console.log("Welcome, Regular User! Limited access.");
} else {
    console.log("Please log in to access the system.");
}
