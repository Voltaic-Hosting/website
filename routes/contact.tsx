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
          <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div class="text-center mb-12">
              <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
                Contact Us
              </h1>
              <p class="text-lg text-gray-400 max-w-2xl mx-auto">
                Get in touch with our team to discuss your hosting needs.
              </p>
            </div>

            <div class="bg-gray-950 border border-gray-900 rounded-xl p-8 md:p-12">
              <div class="space-y-8">
                <div>
                  <h2 class="text-2xl font-semibold text-white mb-4">
                    Email
                  </h2>
                  <p class="text-gray-400 mb-2">
                    <a
                      href="mailto:team@voltaic.host"
                      class="text-white hover:text-gray-300 transition-colors text-lg"
                    >
                      team@voltaic.host
                    </a>
                  </p>
                  <p class="text-sm text-gray-500">
                    24-48 hour response time on business days M-F
                  </p>
                </div>

                <div class="border-t border-gray-900 pt-8">
                  <h2 class="text-2xl font-semibold text-white mb-4">
                    Location
                  </h2>
                  <p class="text-gray-400">
                    Texas, United States
                  </p>
                </div>

                <div class="border-t border-gray-900 pt-8">
                  <h2 class="text-2xl font-semibold text-white mb-4">
                    What We Offer
                  </h2>
                  <ul class="space-y-3 text-gray-400">
                    <li>• Voltaic Panel - Advanced control panel for hosting management</li>
                    <li>• Server Hardware - Energy-efficient enterprise-grade server infrastructure</li>
                    <li>• Data Centers - Secure and sustainable data center solutions</li>
                    <li>• Privacy & Security - End-to-end privacy and security protocols, compliance, and software</li>
                    <li>• Consulting - Expert guidance for your hosting infrastructure needs</li>
                    <li>• Firewall Configuration - OPNsense / PFsense firewall configuration and management</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="mt-12 text-center">
              <a
                href="/"
                class="inline-block px-6 py-2 text-gray-400 hover:text-white transition-colors"
              >
                ← Back to Home
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
});

