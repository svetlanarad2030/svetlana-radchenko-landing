/**
 * @fileoverview Contact page - "Контактный блок"
 * @module app/contact/page
 */

'use client';

import { ReactElement, useState } from 'react';
import Image from 'next/image';
import { Navigation } from '@/components/navigation/Navigation';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';

/**
 * Contact page component
 */
export default function ContactPage(): ReactElement {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Reset any previous states
      setShowError(false);
      setShowSuccess(false);

      // Client-side analytics tracking
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'form_submit', {
          event_category: 'engagement',
          event_label: 'contact_ru',
          value: 1,
        });
      }

      // Console log for tracking
      console.log('Form submission:', {
        subject: 'Общий запрос',
        source_page: 'contact_ru',
        timestamp: new Date().toISOString()
      });

      // Form data logged for analytics
      console.log('Form data ready:', {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        source: 'contact_ru',
        timestamp: new Date().toISOString()
      });

      // Reset form and show success message
      setFormData({ name: '', email: '', message: '' });
      setShowSuccess(true);
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
      
    } catch (error) {
      console.error('Error:', error);
      setShowError(true);
      setShowSuccess(false);
      
      // Hide error message after 5 seconds
      setTimeout(() => {
        setShowError(false);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      id: 'linkedin',
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/svetlana-radchenko-finmodel',
      icon: '/images/image10.png'
    },
    {
      id: 'telegram',
      name: 'Telegram',
      url: 'https://t.me/FinModelGuru',
      icon: '/images/image11.png'
    },
    {
      id: 'email',
      name: 'Email',
      url: 'mailto:finmodelguru@gmail.com',
      icon: '/images/image12.png'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Main contact section with light background */}
      <main className="min-h-screen" style={{ backgroundColor: '#FAF6F5' }}>
        <div className="max-w-4xl mx-auto px-4 py-16">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">
              Контактный блок
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Готовы обсудить ваш проект? Свяжитесь со мной удобным способом
            </p>
          </section>

          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* QR Codes */}
            <div className="bg-white rounded-2xl p-8 shadow-sm h-full">
              <h3 className="text-2xl font-bold text-brand-primary mb-6">
                QR-коды для быстрого доступа
              </h3>
              
              <div className="grid grid-cols-1 gap-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-200 group"
                  >
                    <div className="relative w-20 h-20 flex-shrink-0">
                      <Image
                        src={social.icon}
                        alt={`${social.name} QR Code`}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                    <div>
                      <div className="text-text-primary font-semibold text-lg">
                        {social.name}
                      </div>
                      <div className="text-text-secondary text-sm">
                        Отсканируйте QR-код
                      </div>
                      <div className="text-text-secondary text-xs mt-1">
                        {social.url.replace('https://', '').replace('mailto:', '')}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Direct Contact */}
            <div className="bg-white rounded-2xl p-8 shadow-sm h-full">
              <h3 className="text-2xl font-bold text-brand-primary mb-6">
                Прямой контакт
              </h3>
              
              <div className="space-y-4 text-text-secondary">
                <div>
                  <div className="font-semibold text-text-primary">Email</div>
                  <a 
                    href="mailto:finmodelguru@gmail.com"
                    className="hover:text-brand-primary transition-colors"
                  >
                    finmodelguru@gmail.com
                  </a>
                </div>
                
                <div>
                  <div className="font-semibold text-text-primary">WhatsApp</div>
                  <a 
                    href="tel:+79262240270"
                    className="hover:text-brand-primary transition-colors"
                  >
                    +7 926 2240270
                  </a>
                </div>
                
                <div>
                  <div className="font-semibold text-text-primary">Telegram</div>
                  <a 
                    href="https://t.me/FinModelGuru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-primary transition-colors"
                  >
                    @FinModelGuru
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <section className="text-center mt-16">
            <div className="bg-white rounded-2xl p-8 shadow-sm max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-brand-primary mb-4">
                Давайте работать вместе
              </h3>
              <p className="text-text-secondary text-lg">
                Расскажите о вашей задаче, и мы найдем оптимальное решение. 
                Первая консультация поможет понять, как я могу быть полезна вашему бизнесу.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}