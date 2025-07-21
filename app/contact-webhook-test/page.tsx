"use client";

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Send, CheckCircle, XCircle } from 'lucide-react';
import { sendWebhookOnly } from '@/lib/email';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function WebhookTestPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [responseInfo, setResponseInfo] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setResponseInfo('');

    try {
      const success = await sendWebhookOnly(formData);
      
      if (success) {
        setStatus('success');
        setResponseInfo('Webhook successfully received the data!');
        setFormData({ name: '', email: '', phone: '', city: '', message: '' });
      } else {
        setStatus('error');
        setResponseInfo('Webhook failed to receive the data.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      setResponseInfo(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>GoHighLevel Webhook Test</CardTitle>
            <CardDescription>
              This page tests only the webhook integration without sending emails.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  name="name"
                  placeholder="Test Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="test@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="0612345678"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Input
                  name="city"
                  placeholder="Test City"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Test message for webhook"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[100px]"
                />
              </div>

              <Button
                type="submit"
                disabled={status === 'sending'}
                className="w-full"
              >
                {status === 'sending' ? (
                  'Sending to Webhook...'
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" /> Test Webhook
                  </>
                )}
              </Button>

              {status === 'success' && (
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle className="h-5 w-5" />
                  <p className="text-sm font-medium">{responseInfo}</p>
                </div>
              )}
              
              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-600">
                  <XCircle className="h-5 w-5" />
                  <p className="text-sm font-medium">{responseInfo}</p>
                </div>
              )}
            </form>

            <div className="mt-6 p-4 bg-gray-100 rounded-lg">
              <h3 className="text-sm font-semibold mb-2">Webhook Details:</h3>
              <p className="text-xs text-gray-600 break-all">
                URL: {process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL || 'Not configured'}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}