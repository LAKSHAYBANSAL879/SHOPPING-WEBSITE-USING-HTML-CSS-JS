document.addEventListener("DOMContentLoaded", function() {
    const checkoutForm = document.getElementById("checkoutForm");

    checkoutForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Here, you can handle the form submission and perform any necessary actions for the checkout process.
        // For this example, we will simply show an alert that the order has been placed.
        alert("Order placed successfully!");
    });
});
