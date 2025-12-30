// Fade-in animation on scroll
const faders = document.querySelectorAll(".product-card, section");

const appearOnScroll = new IntersectionObserver(
    function (entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
        });
    },
    { threshold: 0.2 }
);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
let cart = [];
let wishlist = [];

// Load saved data
window.onload = () => {
    cart = JSON.parse(localStorage.getItem("cart")) || [];
    wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    updateCartUI();
};

// Add to cart
function addToCart(product) {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartUI();
}

// Toggle cart panel
function toggleCart() {
    document.getElementById("cart-panel").classList.toggle("active");
}

// Update cart UI
function updateCartUI() {
    document.getElementById("cart-count").innerText = cart.length;
    const cartItems = document.getElementById("cart-items");
    if (!cartItems) return;

    cartItems.innerHTML = "";
    cart.forEach(item => {
        const li = document.createElement("li");
        li.innerText = item;
        cartItems.appendChild(li);
    });
}

// Wishlist
function toggleWishlist(icon) {
    const heart = icon.querySelector("i");
    heart.classList.toggle("fa-regular");
    heart.classList.toggle("fa-solid");
}
function filterProducts(category) {
    const products = document.querySelectorAll(".product-item");

    products.forEach(product => {
        if (category === "all") {
            product.style.display = "block";
        } else {
            product.style.display =
                product.dataset.category === category ? "block" : "none";
        }
    });
}
function toggleTheme() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

// Load saved theme
window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("inquiryForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // stop page refresh

        // show bootstrap modal
        const successModal = new bootstrap.Modal(
            document.getElementById("successModal")
        );
        successModal.show();

        // reset form after submit
        form.reset();
    });
});
function slideLeft(id) {
    const slider = document.getElementById(id);
    slider.scrollLeft -= 300;
}

function slideRight(id) {
    const slider = document.getElementById(id);
    slider.scrollLeft += 300;
}
