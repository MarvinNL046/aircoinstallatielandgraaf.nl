export const trackFormSubmission = (formName: string, success: boolean) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'form_submit', {
      event_category: 'Form',
      event_label: formName,
      value: success ? 1 : 0,
    });
  }
};

export const trackPixelFormSubmission = (formName: string, success: boolean) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    if (success) {
      (window as any).fbq('track', 'Lead', {
        content_name: formName,
        status: 'success',
      });
    }
  }
};

export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', process.env.NEXT_PUBLIC_GA_ID!, {
      page_path: url,
    });
  }
};