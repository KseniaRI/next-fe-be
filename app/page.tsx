'use client';
import ContactSection from './components/contact-section/ContactSection';
import Hero from './components/hero/Hero';
import ListSection from './components/list-section/ListSection';

export default function Home() {
    return (
        <main>
            <Hero />
            <ListSection />
            <ContactSection />
        </main>
    );
}
