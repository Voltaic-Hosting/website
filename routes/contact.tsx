import { Head } from "fresh/runtime";
import { define } from "../utils.ts";
import Footer from "../components/Footer.tsx";

export default define.page(function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Voltaic Hosting</title>
        <meta
          name="description"
          content="Contact Voltaic Hosting. 24-48 hour response time on business days M-F. Email team@voltaic.host"
        />
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
          <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div class="text-center mb-16">
              <h1 class="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
                <span class="gradient-text">Contact Us</span>
              </h1>
              <p class="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">
                Get in touch with our team to discuss your hosting needs.
              </p>
            </div>

            <div class="bg-[#0f1419] border border-[#1a2332] rounded-2xl p-10 md:p-14 backdrop-blur-sm relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/5 via-transparent to-[#0066ff]/5"></div>
              <div class="relative z-10 space-y-10">
                <div>
                  <h2 class="text-3xl font-bold text-white mb-5">
                    Email
                  </h2>
                  <p class="text-white/80 mb-3">
                    <a
                      href="mailto:team@voltaic.host"
                      class="text-[#00d4ff] hover:text-[#00f5ff] transition-colors text-xl font-semibold hover:underline underline-offset-4"
                    >
                      team@voltaic.host
                    </a>
                  </p>
                  <p class="text-sm text-white/50">
                    24-48 hour response time on business days M-F
                  </p>
                </div>

                <div class="border-t border-[#1a2332] pt-10">
                  <h2 class="text-3xl font-bold text-white mb-5">
                    Location
                  </h2>
                  <p class="text-white/70 text-lg">
                    Texas, United States
                  </p>
                </div>

                <div class="border-t border-[#1a2332] pt-10">
                  <h2 class="text-3xl font-bold text-white mb-6">
                    What We Offer
                  </h2>
                  <ul class="space-y-4 text-white/70">
                    <li class="flex items-start gap-3">
                      <span class="text-[#00d4ff] mt-1">•</span>
                      <span><strong class="text-white">Voltaic Panel</strong> - Advanced control panel for hosting management</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="text-[#00d4ff] mt-1">•</span>
                      <span><strong class="text-white">Server Hardware</strong> - Energy-efficient enterprise-grade server infrastructure</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="text-[#00d4ff] mt-1">•</span>
                      <span><strong class="text-white">Data Centers</strong> - Secure and sustainable data center solutions</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="text-[#00d4ff] mt-1">•</span>
                      <span><strong class="text-white">MicroVMs</strong> - Lightweight, isolated virtual machines for secure deployments and containerized workloads</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="text-[#00d4ff] mt-1">•</span>
                      <span><strong class="text-white">Consulting</strong> - Expert guidance for your hosting infrastructure needs</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="text-[#00d4ff] mt-1">•</span>
                      <span><strong class="text-white">Firewall Configuration</strong> - OPNsense / PFsense firewall configuration and management</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="mt-12 text-center">
              <a
                href="/"
                class="inline-flex items-center gap-2 text-white/60 hover:text-[#00d4ff] transition-colors font-medium group"
              >
                <span class="group-hover:-translate-x-1 transition-transform">←</span>
                <span>Back to Home</span>
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
});

