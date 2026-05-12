const fabricProducts = [
    {
        id: "luna-serisi",
        title: "LUNA Serisi",
        description: "İleri teknoloji makinelerle döşemelik kumaşta uzun yıllardır üretilen polar astar özellikli premium seri. (310 gsm, 142 cm)",
        price: "",
        image: "/products/luna/01.JPG",
        variants: [
            "/products/luna/01.JPG", "/products/luna/02.JPG", "/products/luna/03.JPG", "/products/luna/04.JPG",
            "/products/luna/05.JPG", "/products/luna/06.JPG", "/products/luna/07.JPG", "/products/luna/08.JPG",
            "/products/luna/09.JPG", "/products/luna/10.JPG", "/products/luna/11.JPG", "/products/luna/12.JPG",
            "/products/luna/13.JPG", "/products/luna/14.JPG", "/products/luna/15.JPG", "/products/luna/16.JPG",
            "/products/luna/17.JPG", "/products/luna/18.JPG", "/products/luna/19.JPG", "/products/luna/20.JPG",
            "/products/luna/21.JPG", "/products/luna/22.JPG", "/products/luna/23.JPG", "/products/luna/24.JPG"
        ]
    },
    {
        id: "zen-serisi",
        title: "ZEN Serisi",
        description: "Döşemelik kumaşta ileri teknoloji ile üretilen entegre tesis ürünü. Polar astar desteği ile dayanıklı ve estetik. (410 gsm, 142 cm)",
        price: "",
        image: "/products/zen/ZEN-1.JPG",
        variants: [
            "/products/zen/ZEN-1.JPG", "/products/zen/ZEN-2.JPG", "/products/zen/ZEN-3.JPG", "/products/zen/ZEN-4.JPG",
            "/products/zen/ZEN-5.JPG", "/products/zen/ZEN-6.JPG", "/products/zen/ZEN-7.JPG", "/products/zen/ZEN-8.JPG",
            "/products/zen/ZEN-9.JPG", "/products/zen/ZEN-10.JPG", "/products/zen/ZEN-11.JPG", "/products/zen/ZEN-12.JPG",
            "/products/zen/ZEN-13.JPG", "/products/zen/ZEN-14.JPG"
        ]
    },
    {
        id: "vera-serisi",
        title: "VERA Serisi",
        description: "Modern tasarımlar için ideal, polar astar özellikli yüksek kaliteli döşemelik kumaş serisi. (360 gsm, 142 cm)",
        price: "",
        image: "/products/vera/V-01.JPG",
        variants: [
            "/products/vera/V-01.JPG", "/products/vera/V-02.JPG", "/products/vera/V-03.JPG", "/products/vera/V-04.JPG",
            "/products/vera/V-05.JPG", "/products/vera/V-06.JPG", "/products/vera/V-07.JPG", "/products/vera/V-08.JPG",
            "/products/vera/V-09.JPG", "/products/vera/V-10.JPG", "/products/vera/V-11.JPG", "/products/vera/V-12.JPG",
            "/products/vera/V-13.JPG", "/products/vera/V-14.JPG", "/products/vera/V-15.JPG", "/products/vera/V-16.JPG",
            "/products/vera/V-17.JPG", "/products/vera/V-18.JPG", "/products/vera/V-19.JPG"
        ]
    },
    {
        id: "babyface-serisi",
        title: "BABYFACE Serisi",
        description: "Yumuşak dokusu ve polar astarı ile konfor ve dayanıklılığı bir araya getiren özel seri. (310 gsm, 142 cm)",
        price: "",
        image: "/products/babyface/V-01.JPG",
        variants: [
            "/products/babyface/V-01.JPG", "/products/babyface/V-02.JPG", "/products/babyface/V-03.JPG", "/products/babyface/V-04.JPG",
            "/products/babyface/V-05.JPG", "/products/babyface/V-06.JPG", "/products/babyface/V-07.JPG", "/products/babyface/V-08.JPG",
            "/products/babyface/V-09.JPG", "/products/babyface/V-10.JPG", "/products/babyface/V-11.JPG", "/products/babyface/V-12.JPG",
            "/products/babyface/V-14.JPG", "/products/babyface/V-15.JPG", "/products/babyface/V-17.JPG", "/products/babyface/V-18.JPG",
            "/products/babyface/V-20.JPG", "/products/babyface/V-21.JPG", "/products/babyface/V-22.JPG", "/products/babyface/V-23.JPG",
            "/products/babyface/V-24.JPG", "/products/babyface/V-25.JPG", "/products/babyface/V-26.JPG", "/products/babyface/V-27.JPG",
            "/products/babyface/V-28.JPG", "/products/babyface/V-29.JPG", "/products/babyface/V-37.JPG"
        ]
    },
    {
        id: "anka-serisi",
        title: "ANKA Serisi",
        description: "Modern ve şık tasarımlar için üretilen, dayanıklı dokusu ve zengin renk seçenekleriyle öne çıkan premium döşemelik kumaş serisi. (340 gsm, 142 cm)",
        price: "",
        image: "/products/anka/V-01.JPG",
        variants: [
            "/products/anka/V-01.JPG", "/products/anka/V-02.JPG", "/products/anka/V-03.JPG", "/products/anka/V-04.JPG",
            "/products/anka/V-05.JPG", "/products/anka/V-06.JPG", "/products/anka/V-07.JPG", "/products/anka/V-08.JPG",
            "/products/anka/V-09.JPG", "/products/anka/V-10.JPG", "/products/anka/V-11.JPG", "/products/anka/V-12.JPG",
            "/products/anka/V-13.JPG", "/products/anka/V-14.JPG", "/products/anka/V-15.JPG", "/products/anka/V-16.JPG",
            "/products/anka/V-17.JPG", "/products/anka/V-18.JPG", "/products/anka/V-19.JPG", "/products/anka/V-20.JPG",
            "/products/anka/V-21.JPG", "/products/anka/V-22.JPG", "/products/anka/V-23.JPG", "/products/anka/V-24.JPG",
            "/products/anka/V-25.JPG"
        ]
    }
];

const materialProducts = [
    {
        id: "akdeniz-vida",
        title: "Akdeniz Vida",
        description: "Yüksek dayanımlı montaj vidası.",
        price: "",
        image: "/products/materials/akdenizvida.jpg"
    },
    {
        id: "akdeniz-zimba-tabancasi",
        title: "Akdeniz Zımba Tabancası",
        description: "Profesyonel döşeme zımba tabancası.",
        price: "",
        image: "/products/materials/akdenizzımbatbnc.jpg"
    },
    {
        id: "apel-tutkal",
        title: "Apel Tutkal",
        description: "Güçlü yapıştırma özellikli endüstriyel tutkal.",
        price: "",
        image: "/products/materials/apeltutkal.jpeg"
    },
    {
        id: "arda-yapistirici",
        title: "Arda Yapıştırıcı",
        description: "Yüksek performanslı döşeme yapıştırıcısı.",
        price: "",
        image: "/products/materials/arda.png"
    },
    {
        id: "bls-205",
        title: "BLS 205",
        description: "Teknik bağlantı elemanı.",
        price: "",
        image: "/products/materials/bls 205.jpeg"
    },
    {
        id: "bls-207",
        title: "BLS 207",
        description: "Teknik bağlantı elemanı.",
        price: "",
        image: "/products/materials/bls 207.png"
    },
    {
        id: "bul-73",
        title: "BUL 73",
        description: "Endüstriyel hırdavat ürünü.",
        price: "",
        image: "/products/materials/bul 73.jpg"
    },
    {
        id: "cag-zimba-teli",
        title: "Çağ Zımba Teli",
        description: "Profesyonel seri zımba teli.",
        price: "",
        image: "/products/materials/cagzımba.png"
    },
    {
        id: "css-lux-mekanizma",
        title: "CSS Lux Mekanizma",
        description: "Lüks mobilya mekanizma çözümleri.",
        price: "",
        image: "/products/materials/cssluxmekanizma.jpg"
    },
    {
        id: "doner-kare",
        title: "Döner Kare",
        description: "Döner koltuk mekanizması.",
        price: "",
        image: "/products/materials/dÖNER-kare.png"
    },
    {
        id: "delta-zimba-teli",
        title: "Delta Zımba Teli",
        description: "Yüksek kaliteli döşeme zımba teli.",
        price: "",
        image: "/products/materials/deltazımba.jpg"
    },
    {
        id: "elit-zimba-teli",
        title: "Elit Zımba Teli",
        description: "Yüksek kaliteli döşeme zımba teli.",
        price: "",
        image: "/products/materials/elitzımba.jpg"
    },
    {
        id: "kumas-cizgi-tasi",
        title: "Kumaş Çizgi Taşı",
        description: "Tekstil işaretleme taşı.",
        price: "",
        image: "/products/materials/Kumaş çizgi taşı.jpeg"
    },
    {
        id: "mitrapel-hizli-yapistirici",
        title: "Mitrapel Hızlı Yapıştırıcı",
        description: "Çift bileşenli hızlı yapıştırıcı seti.",
        price: "",
        image: "/products/materials/mitrapel hızlı yapıştırıcı.png"
    },
    {
        id: "nat-307",
        title: "NAT-307",
        description: "Endüstriyel bağlantı çözümü.",
        price: "",
        image: "/products/materials/nat-307.png"
    },
    {
        id: "pernix-zimba",
        title: "Pernix",
        description: "Profesyonel döşeme ekipmanı.",
        price: "",
        image: "/products/materials/pernix.png"
    },
    {
        id: "sefox-yapistirici",
        title: "Sefox",
        description: "Endüstriyel temas yapıştırıcısı.",
        price: "",
        image: "/products/materials/sefox.png"
    },
    {
        id: "sehpa-mekanizmasi",
        title: "Sehpa Mekanizması",
        description: "Akıllı sehpa mekanizma sistemleri.",
        price: "",
        image: "/products/materials/sehpa makenizması.jpg"
    },
    {
        id: "standart-vida",
        title: "Standart Vida",
        description: "Genel kullanım montaj vidası.",
        price: "",
        image: "/products/materials/stdvida.jpg"
    },
    {
        id: "tomax-yildiz",
        title: "Tomax Yıldız",
        description: "Teknik hırdavat parçası.",
        price: "",
        image: "/products/materials/tomax-yildiz.png"
    },
    {
        id: "baglanti-parcasi",
        title: "Bağlantı Elemanı",
        description: "Özel amaçlı montaj parçası.",
        price: "",
        image: "/products/materials/8c1c54fa-73a3-4be7-a183-c526672631ca.jpg"
    }
];

const allProducts = [...fabricProducts, ...materialProducts];

export const reps = [
    // 1. MERKEZ
    {
        id: "rep-hasan",
        username: "hasan-cakar",
        name: "Hasan Çakar",
        title: "Müşteri Satış Yetkilisi",
        branch: "İstanbul Merkez Ofis",
        company: "ByFabric",
        companyLogo: "/branding/byfabric.PNG",
        bio: "İstanbul merkez ofisimizde döşemelik kumaş çözümlerinde profesyonel hizmet sunuyoruz.",
        profileImage: "/reps/hasan-cakar.png",
        contactInfo: { phone: "+90 554 165 39 32", whatsapp: "905541653932" },
        products: fabricProducts
    },
    {
        id: "rep-ibrahim",
        username: "ibrahim-kahriman",
        name: "İbrahim Kahrıman",
        title: "Müşteri Satış Yetkilisi",
        branch: "İstanbul Merkez Ofis",
        company: "ByFabric",
        companyLogo: "/branding/byfabric.PNG",
        bio: "Döşemelik kumaş çözümlerinde uzman kadromuzla İstanbul merkez ofisimizde hizmetinizdeyiz.",
        profileImage: "/reps/ibrahim-kahriman.png",
        contactInfo: { phone: "+90 554 165 39 30", whatsapp: "905541653930" },
        products: fabricProducts
    },
    {
        id: "rep-emre",
        username: "emre-serbetli",
        name: "Emre Şerbetli",
        title: "Müşteri Satış Yetkilisi",
        branch: "İstanbul Merkez Ofis",
        company: "ByFabric",
        companyLogo: "/branding/byfabric.PNG",
        bio: "Geniş ürün yelpazemiz ve profesyonel ekibimizle döşemelik kumaş çözümleri sunuyoruz.",
        profileImage: "/reps/emre-serbetli.png",
        contactInfo: { phone: "+90 554 653 37 22", whatsapp: "905546533722" },
        products: fabricProducts
    },
    {
        id: "rep-ismail",
        username: "ismail-aydin",
        name: "İsmail Aydın",
        title: "Müşteri Satış Yetkilisi",
        branch: "İstanbul Merkez Ofis",
        company: "ByFabric",
        companyLogo: "/branding/byfabric.PNG",
        bio: "Döşemelik kumaş çözümlerinde uzman kadromuzla İstanbul merkez ofisimizde hizmetinizdeyiz.",
        profileImage: "/reps/ismail-aydin.png",
        contactInfo: { phone: "+90 539 410 75 78", whatsapp: "905394107578" },
        products: fabricProducts
    },
    // 2. BURSA (ByFabric - Bursa/İnegöl Şube)
    {
        id: "rep-oguzhan-alan",
        username: "oguzhan-alan",
        name: "Oğuzhan Alan",
        title: "Müşteri Satış Yetkilisi",
        branch: "Bursa/İnegöl Şube",
        company: "ByFabric",
        companyLogo: "/branding/byfabric.PNG",
        bio: "İnegöl bölgesinde döşemelik kumaş çözümlerimizle hizmetinizdeyiz.",
        profileImage: "/reps/oguzhan-alan.png",
        contactInfo: { phone: "+90 535 599 87 64", whatsapp: "905355998764" },
        products: fabricProducts
    },
    {
        id: "rep-alper",
        username: "alper-halci",
        name: "Alper Halcı",
        title: "Müşteri Satış Yetkilisi",
        branch: "Bursa/İnegöl Şube",
        company: "ByFabric",
        companyLogo: "/branding/byfabric.PNG",
        bio: "İnegöl bölgesinde profesyonel döşemelik kumaş tedariği.",
        profileImage: "/reps/alper-halcı.png",
        contactInfo: { phone: "+90 530 330 59 33", whatsapp: "905303305933" },
        products: fabricProducts
    },
    {
        id: "rep-burak",
        username: "burak-arslantas",
        name: "Burak Arslantaş",
        title: "Müşteri Satış Yetkilisi",
        branch: "Bursa/İnegöl Şube",
        company: "ByFabric",
        companyLogo: "/branding/byfabric.PNG",
        bio: "İnegöl bölgesinde kaliteli döşemelik kumaş çözümlerimizle hizmetinizdeyiz.",
        profileImage: "/reps/burak-arslantas.png",
        contactInfo: { phone: "+90 542 285 28 18", whatsapp: "905422852818" },
        products: fabricProducts
    },
    // 3. BAYRAMPAŞA
    {
        id: "rep-pasa",
        username: "pasa-ali-senturk",
        name: "Paşa Ali Şentürk",
        title: "Müşteri Satış Yetkilisi",
        branch: "İstanbul Bayrampaşa Şube",
        company: "ByFabric",
        companyLogo: "/branding/byfabric.PNG",
        bio: "Bayrampaşa şubemizde döşemelik kumaş ve aksesuar çözümleriyle hizmetinizdeyiz.",
        profileImage: "/reps/pasa-ali-senturk.jpeg",
        contactInfo: { phone: "+90 553 649 28 36", whatsapp: "905536492836" },
        products: fabricProducts
    },
    {
        id: "rep-emre-akbulak",
        username: "emre-akbulak",
        name: "Emre Akbulak",
        title: "Müşteri Satış Yetkilisi",
        branch: "İstanbul Bayrampaşa Şube",
        company: "ByFabric",
        companyLogo: "/branding/byfabric.PNG",
        bio: "Bayrampaşa şubemizde döşemelik kumaş ve aksesuar çözümleriyle hizmetinizdeyiz.",
        profileImage: "/reps/emre-akbulak.png",
        contactInfo: { phone: "+90 530 923 44 81", whatsapp: "905309234481" },
        products: fabricProducts
    },
    // 4. ANKARA
    {
        id: "rep-mustafa",
        username: "mustafa-dirican",
        name: "Mustafa Dirican",
        title: "Müşteri Satış Yetkilisi",
        branch: "Ankara/Siteler Şube",
        company: "ByFabric",
        companyLogo: "/branding/byfabric.PNG",
        bio: "Ankara Siteler bölgesinde döşemelik kumaş ihtiyaçlarınız için profesyonel destek.",
        profileImage: "/reps/mustafa-dirican.jpeg",
        contactInfo: { phone: "+90 532 592 33 63", whatsapp: "905325923363" },
        products: fabricProducts
    },
    // 5. MALZEME (By Malzeme - Bursa/İnegöl Malzeme Şube)
    {
        id: "rep-oguzhan-balci",
        username: "oguzhan-balci",
        name: "Oğuzhan Balcı",
        title: "Müşteri Satış Yetkilisi",
        branch: "Bursa/İnegöl Malzeme Şube",
        company: "By Malzeme",
        companyLogo: "/branding/bymalzeme.png",
        bio: "Teknik malzeme, aksesuar ve hırdavat ürünlerinde uzman kadromuzla yanınızdayız.",
        profileImage: "/reps/oguzhan-balci.jpeg",
        contactInfo: { phone: "+90 545 278 12 75", whatsapp: "905452781275" },
        products: materialProducts
    },
    // 6. İZMİR
    {
        id: "rep-baris",
        username: "baris-icen",
        name: "Barış İçen",
        title: "Müşteri Satış Yetkilisi",
        branch: "İzmir Şube",
        company: "ByFabric",
        companyLogo: "/branding/byfabric.PNG",
        bio: "Ege bölgesinde kaliteli tekstil ve döşemelik kumaş çözümleri ile yanınızdayız.",
        profileImage: "/reps/baris-icen.png",
        contactInfo: { phone: "+90 501 202 25 22", whatsapp: "905012022522" },
        products: fabricProducts
    },
    // 7. MODOKO
    {
        id: "rep-cemalettin",
        username: "cemalettin-mazak",
        name: "Cemalettin Mazak",
        title: "Müşteri Satış Yetkilisi",
        branch: "İstanbul Modoko Şube",
        company: "ByFabric",
        companyLogo: "/branding/byfabric.PNG",
        bio: "Modoko bölgesinde mobilya ve döşeme dünyasına profesyonel kumaş tedariği.",
        profileImage: "/reps/cemalettin-mazak.png",
        contactInfo: { phone: "+90 506 133 22 20", whatsapp: "905061332220" },
        products: fabricProducts
    },
];

export const defaultCompanyLogo = "/branding/byfabric.PNG";
