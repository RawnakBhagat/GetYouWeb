// js/service.js

document
  .getElementById("orderForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      type: document.getElementById("type").value,
      about: document.getElementById("about").value,
    };

    try {
      const response = await fetch("http://localhost:4000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Success:", result);
        document.getElementById("name").value =""
          document.getElementById("email").value=""
          document.getElementById("type").value=""
          document.getElementById("about").value=""
        alert("Form submitted successfully!");
      } else {
        console.error("Error:", response.statusText);
        alert("Form submission failed.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred.");
    }
  });
