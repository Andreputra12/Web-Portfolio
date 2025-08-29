const certificates = [
  {
    title: "Dasar Git & Github",
    provider: "Dicoding Academy",
    year: "2025",
    image: "assets/Sertifikat/Belajar Dasar Git dengan GitHub.jpg",
    link: "https://www.dicoding.com/certificates/N9ZO2E156PG5",
  },
  {
    title: "Pengenalan Ke Logika Pemrograman",
    provider: "Dicoding Academy",
    year: "2025",
    image: "assets/Sertifikat/Pengenalan Ke Logika Pemrograman.jpg",
    link: "https://www.dicoding.com/certificates/JLX1537E5Z72",
  },
  {
    title: "Memulai Dasar Pemrograman Untuk menjadi Pengembang Software",
    provider: "Dicoding Academy",
    year: "2025",
    image:
      "assets/Sertifikat/Memulai Dasar Pemrograman untuk Menjadi Pengembang Software.jpg",
    link: "https://www.dicoding.com/certificates/72ZDKEVMVPYW",
  },
  {
    title: "Dasar Pemrograman Javascript",
    provider: "Dicoding Academy",
    year: "2025",
    image:
      "assets/Sertifikat/Belajar Dasar Pemrograman Javascript(DBS)_page-0001.jpg",
    link: "https://www.dicoding.com/certificates/JLX19K932P72",
  },
  {
    title: "Membuat Frontend Web untuk Pemula",
    provider: "Dicoding Academy",
    year: "2025",
    image:
      "assets/Sertifikat/Belajar Membuat Frontend Web untuk pemula(DBS)_page-0001.jpg",
    link: "https://www.dicoding.com/certificates/98XWEQJQ4XM3",
  },
  {
    title: "Fundamental Frontend Web Development",
    provider: "Dicoding Academy",
    year: "2025",
    image:
      "assets/Sertifikat/Belajar Fundamental Front-end Web Development(DBS)_page-0001.jpg",
    link: "https://www.dicoding.com/certificates/QLZ9302J7Z5D",
  },
  {
    title: "Pengembangan Web Intermediate",
    provider: "Dicoding Academy",
    year: "2025",
    image:
      "assets/Sertifikat/Belajar Pengembangan Web Intermediate(DBS)_page-0001.jpg",
    link: "https://www.dicoding.com/certificates/QLZ93LVJ7Z5D",
  },
  {
    title: "Backend Pemula dengan Javascript",
    provider: "Dicoding Academy",
    year: "2025",
    image:
      "assets/Sertifikat/Belajar Back-End Pemula dengan Javascript(DBS)_page-0001.jpg",
    link: "https://www.dicoding.com/certificates/53XED61OVPRN",
  },
];

const certList = document.getElementById("cert-list");

certificates.forEach((cert) => {
  const certCard = document.createElement("div");
  certCard.className = "cert-card";

  certCard.innerHTML = `
    <img src="${cert.image}" alt="${cert.title}">
    <h3>${cert.title}<h3/>
    <p>${cert.provider} - ${cert.year}</p>
    <a href="${cert.link}" target="_blank">View Certificate</a>
  `;

  certList.appendChild(certCard);
});
