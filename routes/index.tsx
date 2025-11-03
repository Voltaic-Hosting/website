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
          content="Voltaic Hosting - Sustainable. Secure. Private. Hosting solutions designed with sustainability, security and privacy at the core. Specializing in Voltaic Panel, Server Hardware, Data Centers, MicroVMs, Consulting, and OPNsense/PFsense firewall configuration."
        />
        <meta name="keywords" content="voltaic hosting, hosting, data centers, server hardware, privacy, security, sustainable hosting, enterprise hosting, texas hosting" />
        <meta name="author" content="Voltaic Hosting LLC" />
        <meta name="theme-color" content="#0a0e1a" />
        
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
      <div class="min-h-screen flex flex-col bg-grid-pattern relative">
        <div class="absolute inset-0 bg-gradient-to-b from-[#050810] via-[#0a0e1a] to-[#0f1419] opacity-90 -z-10"></div>
        
        <header class="glass-effect sticky top-0 z-50 border-b border-[#1a2332]">
          <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div class="flex items-center justify-between">
              <a href="/" class="transition-transform hover:scale-105">
                <img
                  src="/logo.png"
                  alt="Voltaic Hosting"
                  class="h-9 w-auto"
                />
              </a>
              <a
                href="/contact"
                class="button-secondary px-5 py-2.5 rounded-lg text-sm font-semibold"
              >
                Contact
              </a>
            </div>
          </nav>
        </header>

        <main class="flex-grow relative">
          <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <div class="text-center mb-12">
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight">
                <span class="gradient-text">Voltaic Hosting</span>
              </h1>
              <p class="text-2xl md:text-3xl font-light mb-4 text-white/90">
                Sustainable. Secure. Private.
              </p>
              <p class="text-xl md:text-2xl text-white/60 mt-6 max-w-3xl mx-auto leading-relaxed">
                Hosting solutions designed with sustainability, security and privacy at the core.
              </p>
            </div>

            <div class="mb-16">
              <h2 class="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                Specializations
              </h2>
              <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="bg-[#0f1419] border border-[#1a2332] rounded-xl p-6 backdrop-blur-sm">
                  <h3 class="text-lg font-bold text-white mb-2">
                    Voltaic Panel
                  </h3>
                  <p class="text-white/60 text-sm leading-relaxed">
                    Modern, user-friendly control panel for hosting management
                  </p>
                </div>
                <div class="bg-[#0f1419] border border-[#1a2332] rounded-xl p-6 backdrop-blur-sm">
                  <h3 class="text-lg font-bold text-white mb-2">
                    Server Hardware
                  </h3>
                  <p class="text-white/60 text-sm leading-relaxed">
                    Energy-efficient enterprise-grade server infrastructure
                  </p>
                </div>
                <div class="bg-[#0f1419] border border-[#1a2332] rounded-xl p-6 backdrop-blur-sm">
                  <h3 class="text-lg font-bold text-white mb-2">
                    Data Centers
                  </h3>
                  <p class="text-white/60 text-sm leading-relaxed">
                    Secure and sustainable data center solutions
                  </p>
                </div>
                <div class="bg-[#0f1419] border border-[#1a2332] rounded-xl p-6 backdrop-blur-sm">
                  <h3 class="text-lg font-bold text-white mb-2">
                    MicroVMs
                  </h3>
                  <p class="text-white/60 text-sm leading-relaxed">
                    Lightweight, isolated virtual machines for secure deployments and containerized workloads
                  </p>
                </div>
                <div class="bg-[#0f1419] border border-[#1a2332] rounded-xl p-6 backdrop-blur-sm">
                  <h3 class="text-lg font-bold text-white mb-2">
                    Consulting
                  </h3>
                  <p class="text-white/60 text-sm leading-relaxed">
                    Expert guidance for your hosting infrastructure needs
                  </p>
                </div>
                <div class="bg-[#0f1419] border border-[#1a2332] rounded-xl p-6 backdrop-blur-sm">
                  <h3 class="text-lg font-bold text-white mb-2">
                    Firewall Configuration
                  </h3>
                  <p class="text-white/60 text-sm leading-relaxed">
                    OPNsense / PFsense firewall configuration and management
                  </p>
                </div>
              </div>
            </div>

            <div class="bg-[#0f1419] border border-[#1a2332] rounded-2xl p-12 md:p-16 text-center relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/5 via-transparent to-[#0066ff]/5"></div>
              <div class="relative z-10">
                <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">Get Started</h2>
                <p class="text-xl text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Contact our team to discuss your hosting needs. We're here to
                  help build sustainable, secure, and private infrastructure on prem or in the cloud.
                </p>
                <a
                  href="/contact"
                  class="button-primary inline-block px-10 py-4 rounded-xl text-lg font-semibold"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
});
