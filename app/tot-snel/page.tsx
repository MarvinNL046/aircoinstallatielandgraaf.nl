import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Home, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Bedankt voor uw aanvraag - StayCool Airco',
  description: 'Uw aanvraag is succesvol verzonden. We nemen zo spoedig mogelijk contact met u op.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto" />
        </div>
        
        <h1 className="text-3xl font-bold mb-4">Bedankt voor uw aanvraag!</h1>
        
        <p className="text-gray-600 mb-8">
          We hebben uw bericht in goede orde ontvangen. Een van onze experts neemt binnen 
          24 uur contact met u op om uw wensen te bespreken.
        </p>
        
        <div className="bg-blue-50 rounded-lg p-4 mb-8">
          <h2 className="font-semibold mb-2">Wat kunt u verwachten?</h2>
          <ul className="text-left text-sm text-gray-600 space-y-1">
            <li>• Persoonlijk contact binnen 24 uur</li>
            <li>• Gratis en vrijblijvend advies</li>
            <li>• Offerte op maat voor uw situatie</li>
            <li>• Geen verplichtingen</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <Link href="/">
            <Button className="w-full" variant="default">
              <Home className="mr-2 h-4 w-4" />
              Terug naar homepage
            </Button>
          </Link>
          
          <div className="text-sm text-gray-500">
            <p>Heeft u een dringende vraag?</p>
            <a 
              href="tel:0611223344" 
              className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold mt-1"
            >
              <Phone className="mr-1 h-4 w-4" />
              Bel ons direct
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}