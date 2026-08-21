import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Marquee } from '../components/Marquee';
import ServiceSection from '../components/ServiceSection';
import { ServiceDetail } from '../components/ServiceDetail';
import { Process } from '../components/Process';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import { ProjectPopup } from '../components/ProjectPopup';
import { ScrollProgress } from '../components/ScrollProgress';
import { getContentBySlug } from '../lib/content';

export function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const content = slug ? getContentBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!content) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="relative min-h-screen bg-ink-50">
      <ScrollProgress />
      <ProjectPopup />
      <Navbar />
      <main>
        <Hero content={content} />
        <Marquee terms={content.marquee} />
        <ServiceSection steps={content.pipeline.steps} />
        <ServiceDetail
          sectionId={content.serviceDetail.sectionId}
          eyebrow={content.serviceDetail.eyebrow}
          heading={content.serviceDetail.heading}
          intro={content.serviceDetail.intro}
          body={content.serviceDetail.body}
          stats={content.serviceDetail.stats}
          tools={content.serviceDetail.tools}
          ctaTitle={content.serviceDetail.ctaTitle}
          ctaBody={content.serviceDetail.ctaBody}
          ctaButton={content.serviceDetail.ctaButton}
          imageUrl={content.serviceDetail.imageUrl}
          label={content.label}
        />
        <Process
          sectionId={content.process.sectionId}
          eyebrow={content.process.eyebrow}
          titleLine1={content.process.titleLine1}
          titleLine2={content.process.titleLine2}
          steps={content.process.steps}
        />
        <Testimonials
          sectionId={content.testimonials.sectionId}
          eyebrow={content.testimonials.eyebrow}
          titleLine1={content.testimonials.titleLine1}
          titleLine2={content.testimonials.titleLine2}
          items={content.testimonials.items}
        />
        <FAQ
          sectionId={content.faq.sectionId}
          eyebrow={content.faq.eyebrow}
          titleLine1={content.faq.titleLine1}
          titleLine2={content.faq.titleLine2}
          items={content.faq.items}
          image={content.faq.image}
        />
        <CTA
          sectionId={content.cta.sectionId}
          titleLine1={content.cta.titleLine1}
          titleLine2={content.cta.titleLine2}
          body={content.cta.body}
          buttonLabel={content.cta.buttonLabel}
          buttonHref={content.cta.buttonHref}
        />
      </main>
      <Footer />
    </div>
  );
}
