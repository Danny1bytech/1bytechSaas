import Meta from '@/components/Meta/index';
import { LandingLayout } from '@/layouts/index';
import {
  CallToAction,
  Features,
  Footer,
  Guides,
  Hero,
  Pricing,
  Testimonial,
} from '@/sections/index';

const Home = () => {
  return (
    <LandingLayout>
      <Meta
        title='1bytetech'
        description='Welcome to 1bytetech – a premier software development company specializing in building custom websites for businesses of all sizes. Our team of experienced developers is dedicated to creating user-friendly, responsive, and SEO-friendly websites that help our clients attract and retain customers. Whether you need a simple brochure website or a more complex e-commerce platform, we have the skills and expertise to deliver results that meet your unique needs. Contact us today to learn more about our website development services.'
      />
      <Hero />
      <Features />
      <Pricing />
      <Guides />
      <Testimonial />
      <CallToAction />
      <Footer />
    </LandingLayout>
  );
};

export default Home;
