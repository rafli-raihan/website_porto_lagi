const errorMessages = [
    "so... what's the message, {name}??",
    "don't forget to write your message, {name}.",
    "sorry {name}, the message your trying to send seems corrupted.",
    "try sending it again {name}."
]

function validateForm(event) {
    event.preventDefault();
    var name = document.getElementById("txtNama").value;
    var message = document.getElementById("txtPesan").value;

    if ( name === "") {
        name = "Anon";
    }

    if ( message === "") {
        var randomIndex = Math.floor(Math.random() * errorMessages.length); // Ini buat milih index random buat error message nya gaada pickany() kek di godot soalnya
        var randomError = errorMessages[randomIndex].replace("{name}", name);
        alert("Error: " + randomError);
        return false;
    }

    var successMessage = "Halo " + name + "! Thanks for the message :D";
    alert(successMessage);
    document.getElementById("contactForm").reset();
    return true;
}