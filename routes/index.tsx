import { Head } from "fresh/runtime";
import { define } from "../utils.ts";
import Footer from "../components/Footer.tsx";

export default define.page(function Home() {
  return (
    <>
      <Head>
        <title>Voltaic Hosting - Sustainable. Secure. Private.</title>
        <meta
          name="description"
          content="Voltaic Hosting - Sustainable. Secure. Private. Hosting solutions designed with sustainability, security and privacy at the core. Specializing in Voltaic Panel, Server Hardware, Data Centers, Privacy & Security, Consulting, and OPNsense/PFsense firewall configuration."
        />
        <meta name="keywords" content="voltaic hosting, hosting, data centers, server hardware, privacy, security, sustainable hosting, enterprise hosting, texas hosting" />
        <meta name="author" content="Voltaic Hosting LLC" />
        <meta name="theme-color" content="#000000" />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Voltaic Hosting - Sustainable. Secure. Private." />
        <meta property="og:description" content="Hosting solutions designed with sustainability, security and privacy at the core." />
        <meta property="og:image" content="https://voltaic.host/logo.png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:site_name" content="Voltaic Hosting" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Voltaic Hosting - Sustainable. Secure. Private." />
        <meta name="twitter:description" content="Hosting solutions designed with sustainability, security and privacy at the core." />
        <meta name="twitter:image" content="https://voltaic.host/logo.png" />
        
        <link rel="canonical" href="https://voltaic.host" />
      </Head>
      <div class="min-h-screen flex flex-col bg-black">
        <header class="bg-black border-b border-gray-900 sticky top-0 z-50 backdrop-blur-sm bg-black/90">
          <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div class="flex items-center justify-between">
              <a href="/">
                <img
                  src="/logo.png"
                  alt="Voltaic Hosting"
                  class="h-8 w-auto"
                />
              </a>
              <a
                href="/contact"
                class="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium"
              >
                Contact
              </a>
            </div>
          </nav>
        </header>

        <main class="flex-grow">
          <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div class="text-center mb-16">
              <h1 class="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                Voltaic Hosting
              </h1>
              <p class="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
                Sustainable. Secure. Private.
              </p>
              <p class="text-lg text-gray-400 mt-6 max-w-2xl mx-auto">
                Hosting solutions designed with sustainability, security and privacy at the core.
              </p>
            </div>

            <div class="mb-20">
              <h2 class="text-3xl font-bold text-white mb-8 text-center">
                Specializations
              </h2>
              <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="bg-gray-950 border border-gray-900 rounded-lg p-6 hover:border-gray-800 transition-colors">
                  <h3 class="text-xl font-semibold text-white mb-2">
                    Voltaic Panel
                  </h3>
                  <p class="text-gray-400 text-sm">
                    Advanced control panel for hosting management
                  </p>
                </div>
                <div class="bg-gray-950 border border-gray-900 rounded-lg p-6 hover:border-gray-800 transition-colors">
                  <h3 class="text-xl font-semibold text-white mb-2">
                    Server Hardware
                  </h3>
                  <p class="text-gray-400 text-sm">
                    Energy-efficient enterprise-grade server infrastructure
                  </p>
                </div>
                <div class="bg-gray-950 border border-gray-900 rounded-lg p-6 hover:border-gray-800 transition-colors">
                  <h3 class="text-xl font-semibold text-white mb-2">
                    Data Centers
                  </h3>
                  <p class="text-gray-400 text-sm">
                    Secure and sustainable data center solutions
                  </p>
                </div>
                <div class="bg-gray-950 border border-gray-900 rounded-lg p-6 hover:border-gray-800 transition-colors">
                  <h3 class="text-xl font-semibold text-white mb-2">
                    Privacy & Security
                  </h3>
                  <p class="text-gray-400 text-sm">
                    End-to-end privacy and security protocols, compliance, and software
                  </p>
                </div>
                <div class="bg-gray-950 border border-gray-900 rounded-lg p-6 hover:border-gray-800 transition-colors">
                  <h3 class="text-xl font-semibold text-white mb-2">
                    Consulting
                  </h3>
                  <p class="text-gray-400 text-sm">
                    Expert guidance for your hosting infrastructure needs
                  </p>
                </div>
                <div class="bg-gray-950 border border-gray-900 rounded-lg p-6 hover:border-gray-800 transition-colors">
                  <h3 class="text-xl font-semibold text-white mb-2">
                    Firewall Configuration
                  </h3>
                  <p class="text-gray-400 text-sm">
                    OPNsense / PFsense firewall configuration and management
                  </p>
                </div>
              </div>
            </div>

            <div class="bg-gray-950 border border-gray-900 rounded-xl p-12 text-center">
              <h2 class="text-3xl font-bold text-white mb-4">Get Started</h2>
              <p class="text-gray-400 mb-8 max-w-2xl mx-auto">
                Contact our team to discuss your hosting needs. We're here to
                help build sustainable, secure, and private infrastructure on prem or in the cloud.
              </p>
              <a
                href="/contact"
                class="inline-block px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Contact Us
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
});
