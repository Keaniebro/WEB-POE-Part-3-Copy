/* --- JavaScript Code for Harmony Hub --- */

document.addEventListener("DOMContentLoaded", function () {
    // --- 1. Form Validation for Enquiry Form ---
    const enquiryForm = document.querySelector("#enquiryForm");
    if (enquiryForm) {
        enquiryForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.querySelector("#fullname").value.trim();
            const email = document.querySelector("#email").value.trim();
            const message = document.querySelector("#message").value.trim();

            if (name === "" || email === "" || message === "") {
                alert("Please fill in all required fields.");
                return false;
            }

            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (!email.match(emailPattern)) {
                alert("Please enter a valid email address.");
                return false;
            }

            alert("Enquiry submitted successfully! We will get back to you soon.");
            enquiryForm.reset();
        });
    }

    // --- 2. Form Validation for Contact Form ---
    const contactForm = document.querySelector("#contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const contactName = document.querySelector("#c-name").value.trim();
            const contactEmail = document.querySelector("#c-email").value.trim();
            const contactMessage = document.querySelector("#c-message").value.trim();

            if (contactName === "" || contactEmail === "" || contactMessage === "") {
                alert("All fields are required in the contact form.");
                return false;
            }

            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (!contactEmail.match(emailPattern)) {
                alert("Please enter a valid email address for contact.");
                return false;
            }

            alert("Your message has been sent successfully!");
            contactForm.reset();
        });
    }

    // --- 3. Product Search Filter ---
    const searchInput = document.querySelector("#productSearch");
    if (searchInput) {
        searchInput.addEventListener("keyup", function () {
            const searchTerm = searchInput.value.toLowerCase().trim();
            const productCards = document.querySelectorAll(".product-card");

            productCards.forEach(function (card) {
                const title = card.querySelector("h3").textContent.toLowerCase();
                const brand = card.querySelector(".brand").textContent.toLowerCase();
                const description = card.querySelector("p:not(.brand)").textContent.toLowerCase();

                if (title.includes(searchTerm) || brand.includes(searchTerm) || description.includes(searchTerm)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    }
});
