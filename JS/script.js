document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".navbar .mobile-menu-toggle");
    const mobileMenu = document.querySelector(".navbar .mobile-menu-items");

    toggleButton.addEventListener("click", function () {
        mobileMenu.classList.toggle("active");
    });
});

//change navbar background color on scroll
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 0) {
        navbar.classList.add("navbar-scroll");
    } else {
        navbar.classList.remove("navbar-scroll");
    }
});



// Get modal
const modal = document.getElementById("detailsModal");

// Open modal when ANY "See Details" button is clicked
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    modal.style.display = "flex";
  });
});

// Close modal when clicking X
document.querySelector(".close-btn").onclick = function () {
  modal.style.display = "none";
};

// Close when clicking outside box
window.onclick = function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};





const blogModal = document.getElementById("blogModal");
const blogTitle = document.getElementById("blogTitle");
const blogContent = document.getElementById("blogContent");

// Blog data (this is your mini database)
const blogs = {
  1: {
    title: "Getting Started with HTML & CSS",
    content: "HTML gives structure to a webpage while CSS adds styling. Together they form the foundation of web development..."
  },
  2: {
    title: "Understanding Flexbox Layouts",
    content: "Flexbox is a CSS layout system that helps you align items easily in rows or columns..."
  },
  3: {
    title: "Responsive Design Basics",
    content: "Responsive design ensures your website looks good on all screen sizes using media queries, flexbox, and grid..."
  }
};

// Open modal
document.querySelectorAll(".read-more-btn").forEach(btn => {
  btn.addEventListener("click", function () {
    const id = this.getAttribute("data-blog");

    blogTitle.textContent = blogs[id].title;
    blogContent.textContent = blogs[id].content;

    blogModal.style.display = "flex";
  });
});

// Close modal
document.getElementById("closeBlog").onclick = function () {
  blogModal.style.display = "none";
};

// Close when clicking outside
window.onclick = function (e) {
  if (e.target === blogModal) {
    blogModal.style.display = "none";
  }
};




// Get elements
const pricingModal = document.getElementById("pricingModalBox");
const openPricingBtn = document.getElementById("openPricing");
const closePricingBtn = document.getElementById("closePricing");

// Open pricing modal
openPricingBtn.addEventListener("click", function (e) {
  e.preventDefault();
  pricingModal.style.display = "flex";
});

// Close pricing modal
closePricingBtn.onclick = function () {
  pricingModal.style.display = "none";
};

// Close when clicking outside
window.addEventListener("click", function (e) {
  if (e.target === pricingModal) {
    pricingModal.style.display = "none";
  }
});
