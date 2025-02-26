"use strict";

import { getDoc, doc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

async function validateLogin() {
    let phoneInput = document.getElementById("phone").value.trim();
    let errorMessage = document.getElementById("error-message");

    // Ensure number starts with 07 and is exactly 10 digits
    if (!/^(07\d{8})$/.test(phoneInput)) {
        errorMessage.textContent = "Invalid phone number. Must be 10 digits starting with 07.";
        return;
    }

    // Check Firestore if number exists
    try {
        const phoneDoc = await getDoc(doc(window.db, "validNumbers", phoneInput));

        if (phoneDoc.exists()) {
            window.location.href = "main.html"; // Redirect if registered
        } else {
            errorMessage.innerHTML = 
                "Number not registered. <a href='https://wa.me/254700338057' style='color: green;'>Register on WhatsApp</a>";
        }
    } catch (error) {
        errorMessage.textContent = "Error checking number. Try again later.";
        console.error("Firestore error:", error);
    }
}

// Prevent dev tools access
document.addEventListener("keydown", function(event) {
    if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I")) {
        event.preventDefault();
    }
});
