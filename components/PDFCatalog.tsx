import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image as PDFImage, Link, Font } from '@react-pdf/renderer';

// Register fonts for Turkish character support using Google Fonts CDN
Font.register({
    family: 'Roboto',
    fonts: [
        {
            src: '/fonts/Roboto-Regular.ttf',
            fontWeight: 'normal',
        },
        {
            src: '/fonts/Roboto-Bold.ttf',
            fontWeight: 'bold',
        },
    ],
});

// Helper to extract variant name from path (e.g. "/products/luna/01.JPG" -> "01")
const getVariantCode = (path: string) => {
    try {
        const filename = path.split('/').pop() || "";
        return filename.split('.')[0].replace(/-/g, ' ');
    } catch (e) {
        return "";
    }
};

// Define styles
const styles = StyleSheet.create({
    page: {
        backgroundColor: '#0a0a0a',
        padding: 0,
        fontFamily: 'Roboto',
    },
    // ... (other styles remain same)



    businessCardPage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0a0a0a',
        padding: 40,
    },
    card: {
        backgroundColor: '#111',
        borderRadius: 20,
        padding: 40,
        width: '80%',
        maxWidth: 400,
        border: '1px solid #333',
        alignItems: 'center',
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 20,
        objectFit: 'cover',
        border: '3px solid #e11d48',
    },
    logo: {
        width: 140,
        height: 60,
        marginBottom: 25,
        objectFit: 'contain',
    },
    name: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 8,
        textAlign: 'center',
    },
    title: {
        fontSize: 12,
        color: '#e11d48',
        marginBottom: 6,
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: 1.5,
    },
    branch: {
        fontSize: 11,
        color: '#9ca3af',
        marginBottom: 25,
        textAlign: 'center',
    },
    contactSection: {
        marginBottom: 25,
    },
    contactRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        justifyContent: 'center',
    },
    contactIcon: {
        fontSize: 14,
        marginRight: 8,
    },
    contactText: {
        fontSize: 12,
        color: '#ffffff',
    },
    qrSection: {
        alignItems: 'center',
        marginTop: 20,
    },
    qrCode: {
        width: 100,
        height: 100,
        marginBottom: 8,
    },
    qrUrl: {
        fontSize: 9,
        color: '#9ca3af',
    },
    catalogPage: {
        padding: 40,
    },
    header: {
        marginBottom: 25,
        borderBottom: '2px solid #333',
        paddingBottom: 15,
    },
    catalogTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 4,
    },
    catalogSubtitle: {
        fontSize: 11,
        color: '#9ca3af',
    },
    productGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 15,
    },
    productCard: {
        width: '100%',
        backgroundColor: '#111',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        border: '1px solid #333',
    },
    productImage: {
        width: '100%',
        height: 150,
        objectFit: 'cover',
        borderRadius: 8,
        marginBottom: 12,
    },
    productTitle: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 6,
    },
    productDescription: {
        fontSize: 8,
        color: '#9ca3af',
        marginBottom: 8,
        lineHeight: 1.3,
    },
    variantGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 3,
        marginBottom: 8,
    },
    variantItem: {
        width: '18%', // 5 items per row
        marginRight: '1%',
        marginBottom: 8,
        position: 'relative',
        height: 60,
    },
    variantImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: 4,
    },
    variantCodeOverlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
        padding: 2,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
    },
    variantCode: {
        fontSize: 7,
        color: '#ffffff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Roboto',
    },

    productPrice: {
        fontSize: 10,
        color: '#e11d48',
        fontWeight: 'bold',
    },
    footer: {
        position: 'absolute',
        bottom: 30,
        left: 40,
        right: 40,
        textAlign: 'center',
        fontSize: 8,
        color: '#666',
        borderTop: '1px solid #333',
        paddingTop: 10,
    },
    pageNumber: {
        fontSize: 8,
        color: '#666',
    },
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
    repName,
    repTitle,
    repBranch,
    repPhone,
    repCompany,
    repProfileImage,
    companyLogo,
    profileUrl,
    products,
    qrCodeDataUrl,
}) => {
    return (
        <Document>
            {/* Page 1: Business Card */}
            <Page size="A4" style={styles.page}>
                <View style={styles.businessCardPage}>
                    <View style={styles.card}>
                        {repProfileImage && (
                            <PDFImage
                                src={repProfileImage}
                                style={styles.profileImage}
                            />
                        )}

                        {companyLogo && (
                            <PDFImage
                                src={companyLogo}
                                style={styles.logo}
                            />
                        )}

                        <Text style={[styles.name, { fontFamily: 'Roboto' }]}>{repName}</Text>
                        <Text style={[styles.title, { fontFamily: 'Roboto' }]}>{repTitle}</Text>
                        {repBranch && <Text style={[styles.branch, { fontFamily: 'Roboto' }]}>{repBranch}</Text>}

                        <View style={styles.contactSection}>
                            <View style={styles.contactRow}>
                                <Text style={styles.contactIcon}>📞</Text>
                                <Text style={[styles.contactText, { fontFamily: 'Roboto' }]}>{repPhone}</Text>
                            </View>
                            <View style={styles.contactRow}>
                                <Text style={styles.contactIcon}>💬</Text>
                                <Text style={styles.contactText}>WhatsApp</Text>
                            </View>
                        </View>

                        {qrCodeDataUrl && (
                            <View style={styles.qrSection}>
                                <PDFImage
                                    src={qrCodeDataUrl}
                                    style={styles.qrCode}
                                />
                                <Text style={[styles.qrUrl, { fontFamily: 'Roboto' }]}>{profileUrl}</Text>
                            </View>
                        )}
                    </View>
                </View>
            </Page>

            {/* Page 2+: Product Catalog */}
            {products && products.length > 0 && products.map((product, index) => (
                <Page key={product.id} size="A4" style={[styles.catalogPage, { fontFamily: 'Roboto' }]}>
                    <View style={styles.header}>
                        <Text style={[styles.catalogTitle, { fontFamily: 'Roboto' }]}>ÜRÜN PORTFÖYÜ</Text>
                        <Text style={[styles.catalogSubtitle, { fontFamily: 'Roboto' }]}>
                            {repName} - {repCompany || 'ByFabric'}
                        </Text>
                    </View>

                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        {/* Check if it's a fabric product (has variants) or material (no variants) */}
                        {product.variants && product.variants.length > 0 ? (
                            <View style={{ width: '100%' }}>
                                <Text style={[styles.productTitle, { fontSize: 18, marginBottom: 10, textAlign: 'center', fontFamily: 'Roboto' }]}>{product.title}</Text>
                                <View style={styles.variantGrid}>
                                    {product.variants.map((variant, idx) => (
                                        <View key={idx} style={styles.variantItem}>
                                            <PDFImage
                                                src={variant}
                                                style={styles.variantImage}
                                            />
                                            <View style={styles.variantCodeOverlay}>
                                                <Text style={[styles.variantCode, { fontFamily: 'Roboto' }]}>
                                                    {product.variantNames?.[idx] || getVariantCode(variant)}
                                                </Text>
                                            </View>
                                        </View>
                                    ))}
                                </View>
                                <Text style={[styles.productDescription, { fontSize: 10, textAlign: 'center', marginTop: 10, fontFamily: 'Roboto' }]}>{product.description}</Text>
                                <Text style={[styles.productDescription, { fontSize: 10, textAlign: 'center', fontFamily: 'Roboto' }]}>{product.variants.length} renk seçeneği</Text>
                            </View>
                        ) : (
                            <View style={{ width: '100%', alignItems: 'center' }}>
                                <PDFImage
                                    src={product.image}
                                    style={{ width: '100%', maxHeight: 400, objectFit: 'contain', marginBottom: 20, borderRadius: 8 }}
                                />
                                <Text style={[styles.productTitle, { fontSize: 20, marginBottom: 10, fontFamily: 'Roboto' }]}>{product.title}</Text>
                                <Text style={[styles.productDescription, { fontSize: 12, textAlign: 'center', maxWidth: '80%', fontFamily: 'Roboto' }]}>{product.description}</Text>
                            </View>
                        )}
                    </View>

                    <View style={[styles.footer, { fontFamily: 'Roboto' }]}>
                        <Text style={{ fontFamily: 'Roboto' }}>© 2026 ByFabric - Premium Tekstil Çözümleri</Text>
                        <Text style={[styles.pageNumber, { fontFamily: 'Roboto' }]}>Sayfa {index + 2}</Text>
                    </View>
                </Page>
            ))}
        </Document>
    );
};
