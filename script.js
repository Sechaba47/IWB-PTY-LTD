document.addEventListener("DOMContentLoaded", function() {

  // ====== CONTACT FORM FUNCTIONALITY ======
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Stop form from refreshing the page

    // Get values from the form
    const name = form.querySelector("input[type='text']").value.trim();
    const email = form.querySelector("input[type='email']").value.trim();
    const message = form.querySelector("textarea").value.trim();

    // Basic validation
    if (name === "" || email === "" || message === "") {
      alert("⚠️ Please fill in all fields before submitting.");
      return;
    }

    // Email format validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      alert("❌ Please enter a valid email address.");
      return;
    }

   // Success message
alert(`✅ Thank you, ${name}! Your message about e-waste has been sent successfully.`);

// Extra message 
alert(" Every small action counts. Together, we can reduce e-waste and protect our planet!");

// Log data (for testing purposes)
console.log("Form Submitted:");
console.log("Name:", name);
console.log("Email:", email);
console.log("Message:", message);


    // Clear the form
    form.reset();
  });


  // Mobile menu
  const menuToggle = document.getElementById("menu-toggle");
  const menuLinks = document.querySelectorAll(".menu a");

  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      menuToggle.checked = false; // close menu when a link is clicked
    });
  });

});
