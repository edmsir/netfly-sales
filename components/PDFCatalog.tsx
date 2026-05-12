
import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image as PDFImage, Font } from '@react-pdf/renderer';

// Register fonts
const getFontPath = (p: string) => {
    if (typeof window === 'undefined') {
        return require('path').join(process.cwd(), 'public', p);
    }
    return p;
};

Font.register({
    family: 'Roboto',
    fonts: [
        { src: getFontPath('/fonts/Roboto-Regular.ttf'), fontWeight: 'normal' },
        { src: getFontPath('/fonts/Roboto-Bold.ttf'), fontWeight: 'bold' },
    ],
});

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#050505',
        color: '#ffffff',
        fontFamily: 'Roboto',
    },
    // Cover Page
    coverPage: {
        padding: 20,
        alignItems: 'center',
        position: 'relative',
    },
    coverAccent: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 10,
        backgroundColor: '#e11d48',
    },
    coverLogoContainer: {
        width: '100%',
        height: 180,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    logoGlow: {
        position: 'absolute',
        width: 450,
        height: 180,
        backgroundColor: '#ffffff',
        borderRadius: 90,
        opacity: 0.1,
    },
    logoGlowCore: {
        position: 'absolute',
        width: 320,
        height: 110,
        backgroundColor: '#ffffff',
        borderRadius: 55,
        opacity: 0.15,
    },
    coverLogo: {
        width: 300,
        height: 120,
        objectFit: 'contain',
    },
    coverProfile: {
        width: 140,
        height: 140,
        borderRadius: 70,
        border: '4px solid #e11d48',
        marginBottom: 20,
        objectFit: 'cover',
    },
    coverTitle: {
        fontSize: 42,
        fontWeight: 'bold',
        letterSpacing: 2,
        marginBottom: 10,
        textTransform: 'uppercase',
    },
    coverSubtitle: {
        fontSize: 14,
        color: '#9ca3af',
        letterSpacing: 4,
        marginBottom: 20,
        textTransform: 'uppercase',
    },
    coverFooter: {
        borderTop: '1px solid #333',
        paddingTop: 20,
        width: '60%',
        alignItems: 'center',
    },
    coverRepName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 5,
    },
    coverRepTitle: {
        fontSize: 12,
        color: '#e11d48',
    },

    // Layout
    sectionPage: {
        padding: 30,
    },
    sectionHeader: {
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        borderBottom: '1px solid #333',
        paddingBottom: 15,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#e11d48',
    },
    sectionSubtitle: {
        fontSize: 9,
        color: '#9ca3af',
    },

    // Fabric Variant Grid - Optimized to fit 30-36 items per page
    variantGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    variantItem: {
        width: '15%', // 6 items per row
        marginBottom: 10,
        backgroundColor: '#111',
        borderRadius: 6,
        padding: 3,
        border: '1px solid #222',
    },
    variantImage: {
        width: '100%',
        height: 60,
        objectFit: 'cover',
        borderRadius: 4,
    },
    variantLabel: {
        fontSize: 6,
        textAlign: 'center',
        marginTop: 4,
        fontWeight: 'bold',
        color: '#9ca3af',
    },

    // Material Grid Layout
    materialGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
    },
    materialCard: {
        width: '23%', // 4 items per row
        backgroundColor: '#0f0f0f',
        borderRadius: 10,
        padding: 6,
        border: '1px solid #222',
        alignItems: 'center',
        marginBottom: 8,
    },
    materialGridImage: {
        width: '100%',
        height: 80,
        objectFit: 'cover',
        borderRadius: 6,
        marginBottom: 8,
    },
    materialGridTitle: {
        fontSize: 8,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
        marginBottom: 4,
    },
    materialGridDesc: {
        fontSize: 6,
        color: '#9ca3af',
        textAlign: 'center',
        lineHeight: 1.2,
    },

    // Info
    productInfo: {
        marginTop: 10,
        padding: 12,
        backgroundColor: '#0f0f0f',
        borderRadius: 8,
        border: '1px solid #222',
    },
    productDesc: {
        fontSize: 9,
        lineHeight: 1.4,
        color: '#9ca3af',
    },

    // Footer
    footer: {
        position: 'absolute',
        bottom: 20,
        left: 30,
        right: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTop: '1px solid #222',
        paddingTop: 8,
        fontSize: 7,
        color: '#444',
    }
});

export interface Product {
    id: string;
    title: string;
    description: string;
    price?: string;
    image: string;
    variants?: string[];
    variantNames?: string[];
}

interface PDFCatalogProps {
    repName: string;
    repTitle: string;
    repBranch?: string;
    repPhone: string;
    repCompany?: string;
    repProfileImage?: string;
    companyLogo?: string;
    profileUrl: string;
    products: Product[];
    qrCodeDataUrl?: string;
}

export const PDFCatalog: React.FC<PDFCatalogProps> = ({
    repName, repTitle, repBranch, repPhone, repCompany,
    repProfileImage, companyLogo, profileUrl, products, qrCodeDataUrl,
}) => {
    // Separate products
    const fabricSeries = products.filter(p => p.variants && p.variants.length > 0);
    const materialItems = products.filter(p => !p.variants || p.variants.length === 0);

    // Chunk materials (16 per page for perfect fit)
    const materialChunks = [];
    for (let i = 0; i < materialItems.length; i += 16) {
        materialChunks.push(materialItems.slice(i, i + 16));
    }

    return (
        <Document>
            {/* Cover Page */}
            <Page size="A4" style={styles.page}>
                <View style={styles.coverPage}>
                    <View style={styles.coverAccent} />
                    
                    {/* Premium Logo Section with Neon/Glow Effect */}
                    <View style={styles.coverLogoContainer}>
                        <View style={styles.logoGlow} />
                        <View style={styles.logoGlowCore} />
                        {companyLogo && <PDFImage src={companyLogo} style={styles.coverLogo} />}
                    </View>

                    {repProfileImage && <PDFImage src={repProfileImage} style={styles.coverProfile} />}
                    
                    <Text style={styles.coverTitle}>ÜRÜN KATALOĞU</Text>
                    <Text style={styles.coverSubtitle}>2026 Koleksiyonu</Text>

                    <View style={styles.coverFooter}>
                        <Text style={styles.coverRepName}>{repName}</Text>
                        <Text style={styles.coverRepTitle}>{repTitle}</Text>
                        <Text style={{ fontSize: 10, color: '#666', marginTop: 10 }}>{repBranch}</Text>
                        <Text style={{ fontSize: 10, color: '#666', marginTop: 5 }}>{repPhone}</Text>
                    </View>

                    {qrCodeDataUrl && (
                        <View style={{ marginTop: 40, alignItems: 'center' }}>
                            <PDFImage src={qrCodeDataUrl} style={{ width: 80, height: 80, marginBottom: 5 }} />
                            <Text style={{ fontSize: 7, color: '#444' }}>Dijital Kartvizit İçin Taratın</Text>
                        </View>
                    )}
                </View>
            </Page>

            {/* Fabric Series Pages (All variants on a single page per series) */}
            {fabricSeries.map((product) => {
                const variants = product.variants || [];
                
                return (
                    <Page key={product.id} size="A4" style={styles.page}>
                        <View style={styles.sectionPage}>
                            <View style={styles.sectionHeader}>
                                <View>
                                    <Text style={styles.sectionTitle}>{product.title}</Text>
                                    <Text style={styles.sectionSubtitle}>
                                        {variants.length} Renk Seçeneği
                                    </Text>
                                </View>
                                {companyLogo && (
                                    <View style={{ position: 'relative', padding: 10, alignItems: 'center' }}>
                                        <View style={{ position: 'absolute', width: 80, height: 30, backgroundColor: 'white', opacity: 0.25, borderRadius: 15 }} />
                                        <PDFImage src={companyLogo} style={{ width: 60, height: 25, objectFit: 'contain' }} />
                                    </View>
                                )}
                            </View>

                            <View style={styles.variantGrid}>
                                {variants.map((variant, idx) => (
                                    <View key={idx} style={styles.variantItem}>
                                        <PDFImage src={variant} style={styles.variantImage} />
                                        <Text style={styles.variantLabel}>
                                            {product.variantNames?.[idx] || `KOD-${idx + 1}`}
                                        </Text>
                                    </View>
                                ))}
                            </View>

                            <View style={styles.productInfo}>
                                <Text style={styles.productDesc}>{product.description}</Text>
                            </View>
                        </View>

                        <View style={styles.footer}>
                            <Text>© 2026 {repCompany === 'ByFabric' ? 'ByFabric Sales' : repCompany} | {repName}</Text>
                            <Text>{product.title} - Koleksiyon</Text>
                        </View>
                    </Page>
                );
            })}

            {/* Material Pages (Grid layout) */}
            {materialChunks.map((chunk, cIdx) => (
                <Page key={`material-${cIdx}`} size="A4" style={styles.page}>
                    <View style={styles.sectionPage}>
                        <View style={styles.sectionHeader}>
                            <View>
                                <Text style={styles.sectionTitle}>TEKNİK ÜRÜNLER</Text>
                                <Text style={styles.sectionSubtitle}>Malzeme ve Aksesuar Çözümleri (Sayfa {cIdx + 1})</Text>
                            </View>
                            {companyLogo && (
                                <View style={{ position: 'relative', padding: 10, alignItems: 'center' }}>
                                    <View style={{ position: 'absolute', width: 80, height: 30, backgroundColor: 'white', opacity: 0.25, borderRadius: 15 }} />
                                    <PDFImage src={companyLogo} style={{ width: 60, height: 25, objectFit: 'contain' }} />
                                </View>
                            )}
                        </View>

                        <View style={styles.materialGrid}>
                            {chunk.map((item) => (
                                <View key={item.id} style={styles.materialCard}>
                                    <PDFImage src={item.image} style={styles.materialGridImage} />
                                    <Text style={styles.materialGridTitle}>{item.title}</Text>
                                    <Text style={styles.materialGridDesc}>{item.description}</Text>
                                </View>
                            ))}
                        </View>
                    </View>

                    <View style={styles.footer}>
                        <Text>© 2026 {repCompany === 'ByFabric' ? 'ByFabric Sales' : repCompany} | {repName}</Text>
                        <Text>Teknik Ürünler - Sayfa {cIdx + 1}</Text>
                    </View>
                </Page>
            ))}
        </Document>
    );
};
