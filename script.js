
/* PART 1: Event Handling (Counter + Theme Toggle)*/


// ----- Counter Game -----
let counter = 0; // stores the score
const counterDisplay = document.getElementById("counter");
const incrementBtn = document.getElementById("increment-btn");

// When the button is clicked, increase counter and update UI
incrementBtn.addEventListener("click", () => {
  counter++;
  counterDisplay.textContent = counter;
});

// ----- Dark/Light Mode Toggle -----
const themeToggle = document.getElementById("theme-toggle");

// Toggle dark mode when button is clicked
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Change button text depending on mode
  themeToggle.textContent = document.body.classList.contains("dark-mode")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});

/* PART 2: Interactive Elements (FAQ, Dropdown, Tabs)*/

// ----- FAQ Section -----
const faqQuestions = document.querySelectorAll(".faq-question");

// Each question toggles its answer on click
faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.style.display =
      answer.style.display === "block" ? "none" : "block";
  });
});

// ----- Dropdown Menu -----
const dropdownBtn = document.getElementById("dropdown-btn");
const dropdownMenu = document.getElementById("dropdown-menu");
const selectedOption = document.getElementById("selected-option");

// Show/hide dropdown when button clicked
dropdownBtn.addEventListener("click", () => {
  dropdownMenu.style.display =
    dropdownMenu.style.display === "block" ? "none" : "block";
});

// Update selected option when user clicks an item
dropdownMenu.querySelectorAll("li").forEach((item) => {
  item.addEventListener("click", () => {
    selectedOption.textContent = item.textContent; // show choice
    dropdownMenu.style.display = "none"; // close menu
  });
});

// Close dropdown if user clicks outside of it
window.addEventListener("click", (e) => {
  if (!e.target.matches("#dropdown-btn")) {
    dropdownMenu.style.display = "none";
  }
});

// ----- Tabbed Interface -----
const tabButtons = document.querySelectorAll(".tab-btn");
const tabPanes = document.querySelectorAll(".tab-pane");

// Switch between tabs on button click
tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Reset all tabs to inactive
    tabButtons.forEach((b) => b.classList.remove("active"));
    tabPanes.forEach((pane) => pane.classList.remove("active"));

    // Activate the clicked tab + matching content
    btn.classList.add("active");
    const targetTab = document.getElementById(btn.dataset.tab);
    targetTab.classList.add("active");
  });
});

/* PART 3: Form Validation*/

const signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form from refreshing the page

  let isValid = true; // Tracks validation status

  // ----- Name Validation -----
  const name = document.getElementById("name").value.trim();
  if (name.length < 3) {
    document.getElementById("name-error").textContent =
      "Name must be at least 3 characters.";
    isValid = false;
  } else {
    document.getElementById("name-error").textContent = "";
  }

  // ----- Email Validation -----
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; // regex for email format
  if (!email.match(emailPattern)) {
    document.getElementById("email-error").textContent =
      "Enter a valid email address.";
    isValid = false;
  } else {
    document.getElementById("email-error").textContent = "";
  }

  // ----- Password Validation -----
  const password = document.getElementById("password").value;
  if (password.length < 6) {
    document.getElementById("password-error").textContent =
      "Password must be at least 6 characters.";
    isValid = false;
  } else {
    document.getElementById("password-error").textContent = "";
  }

  // ----- Success Feedback -----
  if (isValid) {
    document.getElementById("form-success").textContent =
      "✅ Registration successful!";
  } else {
    document.getElementById("form-success").textContent = "";
  }
});
