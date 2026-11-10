import { pageMetadata } from '@/lib/seo';
import RegionalGuides from '@/components/RegionalGuides';
import SourceNotes from '@/components/SourceNotes';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import BasicInfo from '@/components/BasicInfo';
import HoursSection from '@/components/HoursSection';
import TicketsSection from '@/components/TicketsSection';
import TransportSection from '@/components/TransportSection';
import InfoSection from '@/components/InfoSection';
import RouteSection from '@/components/RouteSection';
import PhotoSpotsSection from '@/components/PhotoSpotsSection';
import HotelsSection from '@/components/HotelsSection';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import MapEmbed from '@/components/MapEmbed';
import Footer from '@/components/Footer';

export async function generateMetadata({ params }: { params: Promise<{locale:string}> }) {
  const {locale} = await params;
  const messages = (await import(`@/messages/${locale === 'en' ? 'en' : 'zh'}.json`)).default;
  return pageMetadata(locale, '', messages.meta.title, messages.meta.description);
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <BasicInfo />
        <HoursSection />
        <TicketsSection />
        <TransportSection />
        <InfoSection />
        <RouteSection />
        <PhotoSpotsSection />
        <HotelsSection />
        <Gallery />
        <Reviews />
        <MapEmbed />
        <RegionalGuides />
        <SourceNotes />
      </main>
      <Footer />
    </>
  );
}
