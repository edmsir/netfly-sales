const fabricProducts = [
    {
        id: "luna-serisi",
        title: "LUNA Serisi",
        description: "İleri teknoloji makinelerle döşemelik kumaşta uzun yıllardır üretilen polar astar özellikli premium seri. (310 gsm, 142 cm)",
        price: "",
        image: "/products/luna.jpg",
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
        image: "/products/zen.jpg",
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
        image: "/products/vera.jpg",
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
        image: "/products/babyface.jpg",
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
        description: "Entegre tesislerde döşemelik kumaş üretimi ile uzun ömürlü ve şık çözümler. (360 gsm, 142 cm)",
        price: "",
        image: "/products/anka.jpg",
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
        id: "prod-1",
        title: "Akdeniz Sunta Vidası",
        description: "Yüksek dayanımlı, mobilya ve ahşap montajı için optimize edilmiş profesyonel vidalar.",
        price: "",
        image: "/products/materials/akdenizvida.jpg"
    },
    {
        id: "prod-2",
        title: "Akdeniz Havalı Zımba Tabancası",
        description: "Endüstriyel döşeme ve montaj işleri için seri ve güçlü havalı zımba sistemi.",
        price: "",
        image: "/products/materials/akdenizzımbatbnc.jpg"
    },
    {
        id: "prod-3",
        title: "Çağ Zımba Telleri",
        description: "Farklı ölçülerde, yüksek nüfuz kabiliyetli kaliteli döşeme zımbaları.",
        price: "",
        image: "/products/materials/cagzımba.png"
    },
    {
        id: "prod-4",
        title: "Delta Zımba Telleri",
        description: "Hassas montaj işleri için ergonomik ve dayanıklı zımbalama çözümleri.",
        price: "",
        image: "/products/materials/deltazımba.jpg"
    },
    {
        id: "prod-5",
        title: "Elite Zımba Telleri",
        description: "Premium segment montaj ve döşeme ekipmanları.",
        price: "",
        image: "/products/materials/elitzımba.jpg"
    },
    {
        id: "prod-6",
        title: "Elastik Kolon Simi NAT 307",
        description: "NAT 307 elastik kolon, esneklik sağlayan dayanıklı bir dokuma şerit.",
        price: "",
        image: "/products/materials/nat-307.png"
    },
    {
        id: "prod-9",
        title: "Sefox Kontak Yapıştırıcı",
        description: "Sünger, döşeme ve mobilya işleri için hızlı kuruyan üstün yapıştırıcı.",
        price: "",
        image: "/products/materials/sefox.png"
    },
    {
        id: "prod-11",
        title: "Apel Tutkal",
        description: "Mobilya ve ahşap işleri için yüksek mukavemetli profesyonel tutkal.",
        price: "",
        image: "/products/materials/apeltutkal.jpeg"
    },
    {
        id: "prod-15",
        title: "CSS Lüx Makas Mekanizma",
        description: "Modern koltuk ve kanepe tasarımları için sessiz ve dayanıklı lüks açılır mekanizma.",
        price: "",
        image: "/products/materials/cssluxmekanizma.jpg"
    }
];

export const reps = [
    // 1. MERKEZ
    {
        id: "rep-ibrahim",
        username: "ibrahim-kahriman",
        name: "İbrahim Kahrıman",
        title: "Satış Temsilcisi",
        branch: "İstanbul Merkez Ofis",
        company: "ByFabric",
        companyLogo: "/branding/byfabric_final.png",
        bio: "Döşemelik kumaş çözümlerinde uzman kadromuzla İstanbul merkez ofisimizde hizmetinizdeyiz.",
        profileImage: "https://ui-avatars.com/api/?name=Ibrahim+Kahriman&background=4f46e5&color=fff&size=512",
        contactInfo: { phone: "+90 554 165 39 30", whatsapp: "905541653930" },
        products: fabricProducts
    },
    {
        id: "rep-emre",
        username: "emre-serbetci",
        name: "Emre Şerbetçi",
        title: "Satış Temsilcisi",
        branch: "İstanbul Merkez Ofis",
        company: "ByFabric",
        companyLogo: "/branding/byfabric_final.png",
        bio: "Geniş ürün yelpazemiz ve profesyonel ekibimizle döşemelik kumaş çözümleri sunuyoruz.",
        profileImage: "/reps/emre-şerbetci.png",
        contactInfo: { phone: "+90 554 653 37 22", whatsapp: "905546533722" },
        products: fabricProducts
    },
    {
        id: "rep-hasan",
        username: "hasan-cakar",
        name: "Hasan Çakar",
        title: "Satış Temsilcisi",
        branch: "İstanbul Merkez Ofis",
        company: "ByFabric",
        companyLogo: "/branding/byfabric_final.png",
        bio: "İstanbul merkez ofisimizde döşemelik kumaş çözümlerinde profesyonel hizmet sunuyoruz.",
        profileImage: "https://ui-avatars.com/api/?name=Hasan+Cakar&background=e91e63&color=fff&size=512",
        contactInfo: { phone: "+90 554 165 39 32", whatsapp: "905541653932" },
        products: fabricProducts
    },
    // 2. BURSA (ByFabric - Bursa/İnegöl Şube)
    {
        id: "rep-oguzhan-alan",
        username: "oguzhan-alan",
        name: "Oğuzhan Alan",
        title: "Satış Temsilcisi",
        branch: "Bursa/İnegöl Şube",
        company: "ByFabric",
        companyLogo: "/branding/byfabric_final.png",
        bio: "İnegöl bölgesinde döşemelik kumaş çözümlerimizle hizmetinizdeyiz.",
        profileImage: "/reps/oguzhan-alan.png",
        contactInfo: { phone: "+90 535 599 87 64", whatsapp: "905355998764" },
        products: fabricProducts
    },
    {
        id: "rep-alper",
        username: "alper-halci",
        name: "Alper Halcı",
        title: "Satış Temsilcisi",
        branch: "Bursa/İnegöl Şube",
        company: "ByFabric",
        companyLogo: "/branding/byfabric_final.png",
        bio: "İnegöl bölgesinde profesyonel döşemelik kumaş tedariği.",
        profileImage: "/reps/alper-halcı.png",
        contactInfo: { phone: "+90 530 330 59 33", whatsapp: "905303305933" },
        products: fabricProducts
    },
    // 3. BAYRAMPAŞA
    {
        id: "rep-pasa",
        username: "pasa-ali-senturk",
        name: "Paşa Ali Şentürk",
        title: "Satış Temsilcisi",
        branch: "İstanbul Bayrampaşa Şube",
        company: "ByFabric",
        companyLogo: "/branding/byfabric_final.png",
        bio: "Bayrampaşa şubemizde döşemelik kumaş ve aksesuar çözümleriyle hizmetinizdeyiz.",
        profileImage: "/reps/pasa-ali-senturk.png",
        contactInfo: { phone: "+90 553 649 28 36", whatsapp: "905536492836" },
        products: fabricProducts
    },
    // 4. ANKARA
    {
        id: "rep-mustafa",
        username: "mustafa-dirican",
        name: "Mustafa Dirican",
        title: "Satış Temsilcisi",
        branch: "Ankara/Siteler Şube",
        company: "ByFabric",
        companyLogo: "/branding/byfabric_final.png",
        bio: "Ankara Siteler bölgesinde döşemelik kumaş ihtiyaçlarınız için profesyonel destek.",
        profileImage: "/reps/mustafa-dirican.png",
        contactInfo: { phone: "+90 532 592 33 63", whatsapp: "905325923363" },
        products: fabricProducts
    },
    // 5. MALZEME (By Malzeme - Bursa/İnegöl Malzeme Şube)
    {
        id: "rep-oguzhan-balci",
        username: "oguzhan-balci",
        name: "Oğuzhan Bağcı",
        title: "Satış Temsilcisi",
        branch: "Bursa/İnegöl Malzeme Şube",
        company: "By Malzeme",
        companyLogo: "/branding/bymalzeme_final.png",
        bio: "Teknik malzeme, aksesuar ve hırdavat ürünlerinde uzman kadromuzla yanınızdayız.",
        profileImage: "/reps/oguzhan_final.jpeg",
        contactInfo: { phone: "+90 545 278 12 75", whatsapp: "905452781275" },
        products: materialProducts
    },
    // 6. İZMİR
    {
        id: "rep-baris",
        username: "baris-icen",
        name: "Barış İçen",
        title: "Satış Temsilcisi",
        branch: "İzmir Şube",
        company: "ByFabric",
        companyLogo: "/branding/byfabric_final.png",
        bio: "Ege bölgesinde kaliteli tekstil ve döşemelik kumaş çözümleri ile yanınızdayız.",
        profileImage: "https://ui-avatars.com/api/?name=Baris+Icen&background=10b981&color=fff&size=512",
        contactInfo: { phone: "+90 501 202 25 22", whatsapp: "905012022522" },
        products: fabricProducts
    },
    // 7. MODOKO
    {
        id: "rep-cemalettin",
        username: "cemalettin-mazak",
        name: "Cemalettin Mazak",
        title: "Satış Temsilcisi",
        branch: "İstanbul Modoko Şube",
        company: "ByFabric",
        companyLogo: "/branding/byfabric_final.png",
        bio: "Modoko bölgesinde mobilya ve döşeme dünyasına profesyonel kumaş tedariği.",
        profileImage: "https://ui-avatars.com/api/?name=Cemalettin+Mazak&background=f59e0b&color=fff&size=512",
        contactInfo: { phone: "+90 506 133 22 20", whatsapp: "905061332220" },
        products: fabricProducts
    }
];

export const defaultCompanyLogo = "/branding/byfabric_final.png";
