export const NEXT_PUBLIC_STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://127.0.0.1:1337';

export async function fetchGlobalData() {
  try {
    const res = await fetch(`${NEXT_PUBLIC_STRAPI_API_URL}/api/global?populate[0]=logo&populate[1]=contactInfo&populate[2]=footerContent&populate[3]=socialLinks.icon`, {
      next: { revalidate: 60 } // Cache data and revalidate every 60s
    });

    if (!res.ok) {
      return null;
    }

    const { data } = await res.json();
    console.log(data);

    if (!data) return null;

    // Default fallback values if Strapi fields are empty
    return {
      siteName: data?.siteName || "510CIC",
      logoUrl: data?.logo?.data?.attributes?.url
        ? `${NEXT_PUBLIC_STRAPI_API_URL}${data.attributes.logo.data.attributes.url}`
        : null,
      contactInfo: data?.contactInfo || null,
      socialLinks: data?.socialLinks || [],
      footerContent: data?.footerContent || null
    };
  } catch (err) {
    console.error('⚠️ Could not reach Strapi Server. Using fallback data.', err);
    return null; // Return null so components gracefully fallback
  }
}
