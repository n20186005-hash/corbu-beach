import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Hero from '@/components/CorbuBeachHero';
import Intro from '@/components/CorbuBeachIntro';
import BasicInfo from '@/components/CorbuBeachBasicInfo';
import HoursSection from '@/components/CorbuBeachHours';
import TicketsSection from '@/components/CorbuBeachTickets';
import TransportSection from '@/components/CorbuBeachTransport';
import InfoSection from '@/components/CorbuBeachInfo';
import RouteSection from '@/components/CorbuBeachRoute';
import PhotoSpotsSection from '@/components/CorbuBeachPhotoSpots';
import HotelsSection from '@/components/CorbuBeachHotels';
import Gallery from '@/components/CorbuBeachGallery';
import Reviews from '@/components/CorbuBeachReviews';
import MapEmbed from '@/components/CorbuBeachMap';
import Recommendations from '@/components/CorbuBeachRecommendations';
import Footer from '@/components/Footer';

export default async function CorbuBeachPage({
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
        <Recommendations />
      </main>
      <Footer />
    </>
  );
}
