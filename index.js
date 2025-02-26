"use strict";

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, getDoc, doc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AlzaSyAbJx4zhjAB4H7ioe74ydEK16gzls8mPoA",
    authDomain: "service-c6155.firebaseapp.com",
    projectId: "service-c6155",
    storageBucket: "service-c6155.appspot.com",
    messagingSenderId: "26435436265",
    appId: "1:26435436265:web:620d5ff0d3130a17a78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log("Firebase initialized:", db ? "Success" : "Failed");

async function validateLogin() {
    let phoneInput = document.getElementById("phone").value.trim();
    let errorMessage = document.getElementById("error-message");

    console.log("Phone input:", phoneInput);

    if (!/^(07\d{8})$/.test(phoneInput)) {
        errorMessage.textContent = "Invalid phone number. Must be 10 digits starting with 07.";
        return;
    }

    try {
        const phoneDoc = await getDoc(doc(db, "validNumbers", phoneInput));
        console.log("Checking Firestore:", phoneDoc.exists());

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

// Attach event listener
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("submitButton").addEventListener("click", validateLogin);
    console.log("Event listener attached to submit button");
});

// Prevent dev tools access
document.addEventListener("keydown", function(event) {
    if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I")) {
        event.preventDefault();
    }
});
