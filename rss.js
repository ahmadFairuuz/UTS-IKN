document.addEventListener("DOMContentLoaded", function () {
    // Array of RSS feed items
    var rssItems = [
        { title: "Semarak Hari Raya Idulfitri 1445 Hijriah, Kepala Otorita IKN Lepas Takbiran Keliling di Desa Karang Jinawi" ,  
        link: "https://www.ikn.go.id/semarak-hari-raya-idulfitri-1445-hijriah-kepala-otorita-ikn-lepas-takbiran-keliling-di-desa-karang-jinawi", 
        description: 'NUSANTARA - Kepala torita Ibu Kota Nusantara (IKN), Bambang Susantono bersama masyarakat turut merayakan semarak Hari Raya Idulfitri 1445 Hijriah di Desa Karang Jinawi, Kecamatan Sepaku, Penajam Paser Utara, pada Selasa (9/4/2024).' },
    ];

    // Function to generate RSS feed
    function generateRSS() {
        var rssContent = '<ul>';
        rssItems.forEach(function (item) {
            rssContent += '<li><a href="' + item.link + '"><span style ="color: greenyellow; font-weight:900; font-size :30px;">' + item.title + '</a><p>' + item.description + '</p></li>';
        });
        rssContent += '</ul>';
        document.getElementById('rssFeed').innerHTML = rssContent;
    }

    // Call the function to generate RSS feed
    generateRSS();
});



document.addEventListener("DOMContentLoaded", function () {
    // Array of RSS feed items
    var rssItems = [
        { title: "Pererat Silaturahmi, Otorita IKN Menggelar Buka Puasa Bersama Masyarakat di Wilayah IKN" ,  
        link: "https://www.ikn.go.id/pererat-silaturahmi-otorita-ikn-menggelar-buka-puasa-bersama-masyarakat-di-wilayah-ikn", 
        description: 'NUSANTARA- Untuk mempererat tali silaturahmi dan meningkatkan kebersamaan dengan masyarakat di wilayah Ibu Kota Nusantara (IKN), Otorita IKN menggelar acara sambung rasa dan buka puasa bersama masyarakat di Masjid Al-Akbar, Sepaku, Penajam Paser Utara, Jumat (5/4/2024). Acara dimulai dengan kegiatan bincang bersama Pemberdayaan Kesejahteraan Keluarga (PKK) Otorita IKN dan dilanjutkan dengan kegiatan sambung rasa dan buka puasa bersama.' },
    ];

    // Function to generate RSS feed
    function generateRSS() {
        var rssContent = '<ul>';
        rssItems.forEach(function (item) {
            rssContent += '<li><a href="' + item.link + '"><span style ="color: greenyellow; font-weight:900; font-size :30px;">' + item.title + '</a><p>' + item.description + '</p></li>';
        });
        rssContent += '</ul>';
        document.getElementById('rssFeed-2').innerHTML = rssContent;
    }
    
    // Call the function to generate RSS feed
    generateRSS();
});


document.addEventListener("DOMContentLoaded", function () {
    // Array of RSS feed items
    var rssItems = [
        { title: "Menghadapi Hoaks dan Menyongsong Pembangunan IKN Menuju Harmoni Budaya dan Kemajuan" ,  
        link: "https://www.ikn.go.id/menghadapi-hoaks-dan-menyongsong-pembangunan-ikn-menuju-harmoni-budaya-dan-kemajuan", 
        description: 'BALIKPAPAN - Berita palsu dan informasi menyesatkan mengenai Ibu Kota Nusantara (IKN) terus beredar, termasuk klaim terbaru yang menyatakan adanya penemuan sumur gas mirip dengan kasus Lapindo di wilayah IKN. Namun, investigasi menyeluruh telah mengonfirmasi bahwa berita tersebut tidak berdasar dan sepenuhnya tidak benar.' },
    ];

    // Function to generate RSS feed
    function generateRSS() {
        var rssContent = '<ul>';
        rssItems.forEach(function (item) {
            rssContent += '<li><a href="' + item.link + '"><span style ="color: greenyellow; font-weight:900; font-size :30px;">' + item.title + '</a><p>' + item.description + '</p></li>';
        });
        rssContent += '</ul>';
        document.getElementById('rssFeed-3').innerHTML = rssContent;
    }
    
    // Call the function to generate RSS feed
    generateRSS();
});