"use strict";

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, getDoc, doc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Firebase configuration (replace with actual details)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function validateLogin() {
    let phoneInput = document.getElementById("phone").value.trim();
    let errorMessage = document.getElementById("error-message");

    if (!/^(07\d{8})$/.test(phoneInput)) {
        errorMessage.textContent = "Invalid phone number. Must be 10 digits starting with 07.";
        return;
    }

    try {
        const phoneDoc = await getDoc(doc(db, "validNumbers", phoneInput));

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

// Attach event listener to button
document.getElementById("submitButton").addEventListener("click", validateLogin);

// Prevent dev tools access
document.addEventListener("keydown", function(event) {
    if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I")) {
        event.preventDefault();
    }
});
