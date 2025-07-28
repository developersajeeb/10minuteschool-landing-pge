import { getProductData } from '@/lib/getProductData';
import AppHeader from '@/components/AppHeader';
import HeaderBanner from '@/components/HeaderBanner';
import HeroCourseCard from '@/components/HeroCourseCard';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function IELTSProductPage(props: any) {
  const { lang: routeLang } = await props.params;
  const searchParams = await props.searchParams;
  const queryLang = searchParams?.lang;
  const finalLang = queryLang || routeLang;
  const data = await getProductData(finalLang); 
  
  if (!data) {
    return <div className="text-center text-red-500 pt-32">No data loaded!</div>;
  }

  return (
    <main className="min-h-screen bg-white text-black">
      <AppHeader />
      <HeaderBanner />
      <HeroCourseCard data={data} />
    </main>
  );
}
