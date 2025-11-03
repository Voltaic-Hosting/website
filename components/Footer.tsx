export default function Footer() {
  return (
    <footer class="border-t border-[#1a2332] text-white/60 py-16 mt-24 relative">
      <div class="absolute inset-0 bg-gradient-to-t from-[#0f1419]/50 to-transparent -z-10"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          <div>
            <h3 class="text-2xl font-bold text-white mb-4">
              Voltaic Hosting LLC
            </h3>
            <p class="text-white/70 text-lg">
              Sustainable. Secure. Private.
            </p>
            <p class="text-white/60 text-sm mt-2">
              USA based company
            </p>
          </div>
          <div>
            <h4 class="text-xl font-bold text-white mb-5">Contact</h4>
            <p class="mb-3">
              <a
                href="mailto:team@voltaic.host"
                class="text-[#00d4ff] hover:text-[#00f5ff] transition-colors text-lg font-semibold hover:underline underline-offset-4"
              >
                team@voltaic.host
              </a>
            </p>
            <p class="text-sm text-white/50">
              24-48 hour response time on business days M-F
            </p>
          </div>
        </div>
        <div class="pt-8 border-t border-[#1a2332] text-center">
          <p class="text-white/50 mb-6">
            &copy; {new Date().getFullYear()}{" "}
            Voltaic Hosting LLC. All rights reserved.
          </p>
          <div id="wcb" class="carbonbadge wcb-d mt-4"></div>
          <script src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js" defer></script>
        </div>
      </div>
    </footer>
  );
}
