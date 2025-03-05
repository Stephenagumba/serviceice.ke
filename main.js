document.addEventListener("DOMContentLoaded", function () {
    const phoneInput = document.getElementById("phone");
    const loginForm = document.getElementById("loginForm");
    const responseMessage = document.getElementById("responseMessage");

    // Registered phone numbers
    const registeredNumbers = [
        "+254706127473", "+254700338057",
    ];

    // List of emails
    const emails = [
        "rotedamsteve95@gmail.com", "stevethopi234@gmail.com"
    ];

    // Login credentials
    const showmax1 = { email: "fistempire283@gmail.com", password: "2025New@2025" };
    const Netflix = { email: "stevejupiter52@gmail.com", password: "Net@2025" };
    const primevideo = { email: "ochisteve952342@gmail.com ", password: "pass@2025" };
    const showmax2 = { email: "geographical.geo360@gmail.com", password: "Exit@20244" };
    const commonPassword = "pass@2025";

    function formatPhone(phone) {
        if (phone.startsWith("07")) {
            return "+254" + phone.slice(1);
        }
        return phone;
    }

    function getStoredLogin(phone) {
        const storedData = localStorage.getItem(phone);
        if (!storedData) return null;
        const parsedData = JSON.parse(storedData);
        
        // Check if stored data is within 30 days
        const storedTime = new Date(parsedData.timestamp);
        const now = new Date();
        if ((now - storedTime) / (1000 * 60 * 60 * 24) < 30) {
            return parsedData;
        }
        return null;
    }

    function storeLogin(phone, email) {
        const loginDetails = {
            phone,
            email,
            password: commonPassword,
            timestamp: new Date().toISOString()
        };
        localStorage.setItem(phone, JSON.stringify(loginDetails));
        return loginDetails;
    }

    function generateLogins(phone) {
        phone = formatPhone(phone);

        if (!registeredNumbers.includes(phone)) {
            responseMessage.style.display = "block";
            responseMessage.style.color = "red";
            responseMessage.innerHTML = `Sorry, this number is not registered.`;
            return;
        }

        let loginData = getStoredLogin(phone);
        if (!loginData) {
            const randomEmail = emails[Math.floor(Math.random() * emails.length)];
            loginData = storeLogin(phone, randomEmail);
        }

        const clientDevice = navigator.userAgent;
        const currentTime = new Date().toLocaleString();

        responseMessage.style.display = "block";
        responseMessage.style.color = "white";
        responseMessage.style.backgroundColor = "#007bff";
        responseMessage.style.padding = "15px";
        responseMessage.style.borderRadius = "5px";
        responseMessage.innerHTML = `
            <strong>Dear ${phone.replace("+254", "07")},</strong><br><br>
            <strong>Your new DStv stream logins:</strong><br>
            Email: <strong>${loginData.email}</strong><br>
            Password: <strong>${commonPassword}</strong><br><br>

            <strong>Other logins (Showmax):</strong><br>
            Email: <strong>${showmax1.email}</strong><br>
            Password: <strong>${showmax1.password}</strong><br><br>

            <strong>Other logins (Showmax):</strong><br>
            Email: <strong>${showmax2.email}</strong><br>
            Password: <strong>${showmax2.password}</strong><br><br>

            <strong>Prime Video:</strong><br>
            Email: <strong>${primevideo.email}</strong><br>
            Password: <strong>${primevideo.password}</strong><br><br>

            <strong>Netflix:</strong><br>
            Email: <strong>${Netflix.email}</strong><br>
            Password: <strong>${Netflix.password}</strong><br><br>

            <strong>Client IP:</strong> <span id="clientIp">Fetching...</span><br>
            <strong>Time:</strong> ${currentTime}<br>
            <strong>Device:</strong> ${clientDevice}<br><br>

            <em>Your logins are generated from Ice Services server (USA).</em><br>
            <strong style="color: red;">🚫 Sharing of logins is prohibited 🚫</strong><br><br>

            <span style="color: yellow;">You will receive the same logins until 30 days have passed.</span>
        `;

        fetch("https://ipinfo.io/json")
            .then(response => response.json())
            .then(data => {
                document.getElementById("clientIp").innerText = data.ip;
            })
            .catch(error => console.error("Error fetching IP:", error));
    }

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const phone = phoneInput.value.trim();

        if (phone === "") {
            responseMessage.style.display = "block";
            responseMessage.style.color = "red";
            responseMessage.innerHTML = "Please enter your phone number.";
            return;
        }

        generateLogins(phone);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    function toggleFAQ(element) {
        const answer = element.nextElementSibling;
        answer.classList.toggle("show");
    }

    // Attach click event to each question
    document.querySelectorAll(".faq-question").forEach((question) => {
        question.addEventListener("click", function () {
            toggleFAQ(this);
        });
    });
});
