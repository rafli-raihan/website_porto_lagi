// script.js - File JS Eksternal untuk Website Rafli

console.log("Rafli's Website Script Loaded Successfully.");

// Fungsi validasi Form Kontak
function validateForm(event) {
    event.preventDefault(); // Mencegah form reload halaman otomatis
    
    // 1. Operator Penugasan (Assignment Operator '=')
    var name = document.getElementById("txtNama").value;
    var email = document.getElementById("txtEmail").value;
    var message = document.getElementById("txtPesan").value;
    
    // 2. Operator Perbandingan (Comparison Operator '===') dan Logika
    if (name === "" || email === "" || message === "") {
        // Memicu Alert jika form kosong
        alert("Peringatan: Mohon lengkapi semua data formulir sebelum mengirim!");
        return false;
    }
    
    // 3. Operator Aritmatika/String Concatenation ('+')
    var successMessage = "Halo " + name + "! Pesan Anda berhasil terkirim. Rafli akan membalas ke email: " + email;
    
    // Memicu Alert sukses
    alert(successMessage);
    
    // Reset Form
    document.getElementById("contactForm").reset();
    return true;
}