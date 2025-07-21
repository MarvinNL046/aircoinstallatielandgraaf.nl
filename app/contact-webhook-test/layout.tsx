import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Webhook Test - StayCool Airco',
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
  },
};

export default function WebhookTestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}