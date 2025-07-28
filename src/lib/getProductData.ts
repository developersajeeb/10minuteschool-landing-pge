import { ApiResponse, ProductData } from "../types/product";


export async function getProductData(lang: 'en' | 'bn' = 'en'): Promise<ProductData | null> {
  // console.log(lang);
  
  try {
    const res = await fetch(
      `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`,
      {
        headers: {
          'X-TENMS-SOURCE-PLATFORM': 'web',
          accept: 'application/json',
        },
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) throw new Error('Failed to fetch');

    const json: ApiResponse = await res.json();
    return json?.data;
  } catch (err) {
    console.error(err);
    return null;
  }
}