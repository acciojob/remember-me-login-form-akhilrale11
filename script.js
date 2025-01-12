document.addEventListener("DOMContentLoaded", () => {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const rememberMeCheckbox = document.getElementById("checkbox");
    const submitButton = document.getElementById("submit");
    const existingButton = document.getElementById("existing");

    // Check for saved credentials
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername && savedPassword) {
        existingButton.style.display = "block";
    }

    // Handle form submission
    document.getElementById("login-form").addEventListener("submit", (event) => {
        event.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;

        if (rememberMeCheckbox.checked) {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
        } else {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        }

        alert(`Logged in as ${username}`);
    });

    // Handle existing user login
    existingButton.addEventListener("click", () => {
        alert(`Logged in as ${savedUsername}`);
    });
});
