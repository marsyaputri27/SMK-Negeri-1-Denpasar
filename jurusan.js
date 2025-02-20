document.addEventListener("DOMContentLoaded", function () {
    // Ambil semua elemen dengan kelas "card"
    const cards = document.querySelectorAll(".card");
    
    // Loop melalui setiap kartu dan tambahkan event listener
    cards.forEach(card => {
        card.addEventListener("mouseenter", function () {
            card.style.backgroundColor = "#d3d3d3"; // Warna lebih gelap saat hover
        });
        
        card.addEventListener("mouseleave", function () {
            card.style.backgroundColor = "white"; // Kembali ke warna asli saat kursor keluar
        });
    });

    
});

function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("show");
}

