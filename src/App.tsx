import React from 'react';
import { RouterProvider, useRouter } from './router/RouterContext.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { ExtensionsPage } from './pages/ExtensionsPage.tsx';
import { ExtensionDetailPage } from './pages/ExtensionDetailPage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';
import { HelpPage } from './pages/HelpPage.tsx';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage.tsx';
import { TermsPage } from './pages/TermsPage.tsx';
import { RefundPolicyPage } from './pages/RefundPolicyPage.tsx';
import { ThankYouPage } from './pages/ThankYouPage.tsx';
import { NotFoundPage } from './pages/NotFoundPage.tsx';

const RouteRenderer: React.FC = () => {
  const { currentPath } = useRouter();

  // Normalize path by stripping trailing slashes except for root
  const path = currentPath === '/' ? '/' : currentPath.replace(/\/+$/, '');

  let PageComponent = NotFoundPage;

  if (path === '/') {
    PageComponent = HomePage;
  } else if (path === '/extensions') {
    PageComponent = ExtensionsPage;
  } else if (path.startsWith('/extensions/')) {
    PageComponent = ExtensionDetailPage;
  } else if (path === '/about') {
    PageComponent = AboutPage;
  } else if (path === '/contact') {
    PageComponent = ContactPage;
  } else if (path === '/help') {
    PageComponent = HelpPage;
  } else if (path === '/privacy') {
    PageComponent = PrivacyPolicyPage;
  } else if (path === '/terms') {
    PageComponent = TermsPage;
  } else if (path === '/refund') {
    PageComponent = RefundPolicyPage;
  } else if (path === '/thank-you') {
    PageComponent = ThankYouPage;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F7F6] text-[#182321]">
      <Navbar />
      <main className="flex-1">
        <PageComponent />
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <RouterProvider>
      <RouteRenderer />
    </RouterProvider>
  );
}
