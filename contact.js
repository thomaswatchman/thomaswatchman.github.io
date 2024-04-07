const form = document.getElementById("myForm");
const email = document.getElementById("email");
const name = document.getElementById("name");
const terms = document.getElementById("terms");
const message = document.getElementById("message");
const messagePanel = document.getElementById("message-panel");




form.addEventListener("submit", async function (event) {
    event.preventDefault();

    if (!email.value || !name.value || !message.value) {
        showMessage("All fields are required", "error");
        return;
    }
    // Task 3
    if (!terms.checked) {
        showMessage("You must agree to the terms and conditions", "error");
        return;
    }


    //showMessage("Form submitted successfully", "success");
    form.submit();
    alert('success');
});


function showMessage(message, type) {
    messagePanel.textContent = message;
    messagePanel.className = type;
}