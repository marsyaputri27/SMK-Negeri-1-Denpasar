function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("show");
}

const participants = {
    "Juara 1 LKS Nasional": ["Budi Santoso", "Ani Lestari", "Rizky Maulana"],
    "Medali Emas Olimpiade Sains": ["Siti Aminah", "Dewi Kartika", "Andi Saputra"],
    "Juara 1 Debat Bahasa Inggris": ["Farhan Malik", "Nadia Rahma", "Fajar Pratama"],
    "Sekolah Terbaik se-Bali": ["Seluruh siswa dan guru SMK Negeri 1 Denpasar"]
};

function showParticipants(prestasi) {
    if (participants[prestasi]) {
        let pesertaList = participants[prestasi].join("\n");
        alert("Peserta " + prestasi + ":\n" + pesertaList);
    } else {
        alert("Tidak ada data peserta untuk prestasi ini.");
    }
}