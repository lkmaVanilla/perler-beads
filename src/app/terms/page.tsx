'use client';

import React from 'react';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8">
          <div className="mb-6">
            <Link 
              href="/"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Terms of Service & Privacy Policy</h1>

          <div className="space-y-8">
            {/* Terms of Service */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Terms of Service</h2>
              <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4">
                <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">1. Acceptance of Terms</h3>
                  <p>
                    By accessing and using Perler Beads Generator, you accept and agree to be bound by the terms and provision of this agreement.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">2. Use License</h3>
                  <p>
                    Permission is granted to temporarily use Perler Beads Generator for personal, non-commercial use only. This is the grant of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose</li>
                    <li>Attempt to reverse engineer any software contained in the application</li>
                    <li>Remove any copyright or other proprietary notations from the materials</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">3. User Content</h3>
                  <p>
                    You retain all rights to any images or data you upload or create using this service. We do not claim ownership of your content.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">4. Disclaimer</h3>
                  <p>
                    The materials on Perler Beads Generator are provided on an &apos;as is&apos; basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">5. Limitations</h3>
                  <p>
                    In no event shall Perler Beads Generator or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this application.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">6. Revisions</h3>
                  <p>
                    We may revise these terms of service at any time without notice. By using this application you are agreeing to be bound by the then current version of these terms of service.
                  </p>
                </div>
              </div>
            </section>

            {/* Privacy Policy */}
            <section id="privacy" className="border-t border-gray-200 dark:border-gray-700 pt-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Privacy Policy</h2>
              <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4">
                <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">1. Information We Collect</h3>
                  <p>
                    Perler Beads Generator processes images and data locally in your browser. We do not collect, store, or transmit your personal images or data to our servers. The application operates entirely client-side.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">2. Local Storage</h3>
                  <p>
                    The application may use browser local storage to save your preferences and custom palette selections. This data remains on your device and is not shared with us or any third parties.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">3. Analytics</h3>
                  <p>
                    We may use analytics services to understand how the application is used. These services may collect anonymous usage statistics but do not collect personal information or images you upload.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">4. Cookies</h3>
                  <p>
                    The application may use cookies or similar technologies to enhance your experience. You can control cookie preferences through your browser settings.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">5. Third-Party Services</h3>
                  <p>
                    Our application may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to read their privacy policies.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">6. Data Security</h3>
                  <p>
                    Since all processing happens locally in your browser, your images and data never leave your device. We implement appropriate technical measures to ensure the security of the application itself.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">7. Children&apos;s Privacy</h3>
                  <p>
                    Our service is not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">8. Changes to Privacy Policy</h3>
                  <p>
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">9. Contact Us</h3>
                  <p>
                    If you have any questions about this Privacy Policy, please contact us through our GitHub repository or other available channels.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

