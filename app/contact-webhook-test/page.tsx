"use client";

export default function WebhookTestPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-2xl font-bold mb-4">Webhook Test (Removed)</h1>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
            <p className="text-yellow-800">
              <strong>Notice:</strong> The GoHighLevel webhook test has been removed.
              Contact form submissions now use EmailJS + LeadFlow CRM.
            </p>
          </div>
          <p className="text-gray-600">
            Please use the main <a href="/contact" className="text-blue-600 underline">contact page</a> to test form submissions.
          </p>
        </div>
      </div>
    </div>
  );
}
