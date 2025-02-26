// Firebase Configuration
const firebaseConfig = {
    apiKey: "YOUR_FIREBASE_API_KEY",
    authDomain: "YOUR_FIREBASE_AUTH_DOMAIN",
    projectId: "YOUR_FIREBASE_PROJECT_ID",
    storageBucket: "YOUR_FIREBASE_STORAGE_BUCKET",
    messagingSenderId: "YOUR_FIREBASE_MESSAGING_SENDER_ID",
    appId: "YOUR_FIREBASE_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

document.addEventListener("DOMContentLoaded", function () {
    const phoneInput = document.getElementById("phone");
    const otpInput = document.getElementById("otp");
    const sendOtpButton = document.getElementById("sendOtp");
    const verifyOtpButton = document.getElementById("verifyOtp");
    const otpSection = document.getElementById("otpSection");
    const responseMessage = document.getElementById("responseMessage");

    let confirmationResult;

    sendOtpButton.addEventListener("click", function () {
        const phoneNumber = phoneInput.value.trim();

        if (!phoneNumber.startsWith("+254")) {
            responseMessage.innerHTML = "Invalid phone number format! Use +254...";
            responseMessage.style.color = "red";
            return;
        }

        // Recaptcha verification
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container", {
            size: "invisible",
        });

        auth.signInWithPhoneNumber(phoneNumber, window.recaptchaVerifier)
            .then((result) => {
                confirmationResult = result;
                otpSection.style.display = "block";
                responseMessage.innerHTML = "OTP sent! Check your phone.";
                responseMessage.style.color = "green";
            })
            .catch((error) => {
                responseMessage.innerHTML = "Error sending OTP: " + error.message;
                responseMessage.style.color = "red";
            });
    });

    verifyOtpButton.addEventListener("click", function () {
        const otpCode = otpInput.value.trim();

        if (otpCode === "") {
            responseMessage.innerHTML = "Please enter the OTP.";
            responseMessage.style.color = "red";
            return;
        }

        confirmationResult.confirm(otpCode)
            .then((result) => {
                const user = result.user;
                responseMessage.innerHTML = `✅ Verified! Welcome, ${user.phoneNumber}`;
                responseMessage.style.color = "green";

                // Generate login details
                generateLogins(user.phoneNumber);
            })
            .catch((error) => {
                responseMessage.innerHTML = "❌ Invalid OTP. Try again.";
                responseMessage.style.color = "red";
            });
    });

    function generateLogins(phone) {
        responseMessage.innerHTML = `
            <strong>Dear ${phone.replace("+254", "07")},</strong><br><br>
            <strong>Your new DStv stream logins:</strong><br>
            Email: <strong>your-email@example.com</strong><br>
            Password: <strong>pass@2025</strong><br><br>

            <strong>Netflix:</strong><br>
            Email: <strong>netflix-email@example.com</strong><br>
            Password: <strong>Net@2025</strong><br><br>

            <strong>Prime Video:</strong><br>
            Email: <strong>prime-email@example.com</strong><br>
            Password: <strong>pass@2025</strong><br><br>

            <strong style="color: red;">🚫 Sharing logins is prohibited 🚫</strong>
        `;
    }
});
