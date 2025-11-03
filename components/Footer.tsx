export default function Footer() {
  return (
    <footer class="bg-black border-t border-gray-900 text-gray-300 py-12 mt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-xl font-semibold text-white mb-4">
              Voltaic Hosting LLC
            </h3>
            <p class="text-sm text-gray-400">
              Sustainable. Secure. Private.
            </p>
          </div>
          <div>
            <h4 class="text-lg font-semibold text-white mb-4">Contact</h4>
            <p class="text-sm mb-2">
              <a
                href="mailto:team@voltaic.host"
                class="text-white hover:text-gray-300 transition-colors"
              >
                team@voltaic.host
              </a>
            </p>
            <p class="text-xs text-gray-400">
              24-48 hour response time on business days M-F
            </p>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-gray-900 text-center text-sm text-gray-400">
          <p>
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
