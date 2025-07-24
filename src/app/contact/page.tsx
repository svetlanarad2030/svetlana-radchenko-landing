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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    
    // In a real app, you would send the data to your backend
    alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
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
      
      {/* Main contact section with accent background */}
      <main className="min-h-screen" style={{ backgroundColor: '#355C7D' }}>
        <div className="max-w-4xl mx-auto px-4 py-16">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Контактный блок
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Готовы обсудить ваш проект? Свяжитесь со мной удобным способом
            </p>
          </section>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                Оставить заявку
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-2">
                    Имя *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/20 border-white/30 text-white placeholder-white/60 focus:border-white focus:ring-white"
                    placeholder="Введите ваше имя"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/20 border-white/30 text-white placeholder-white/60 focus:border-white focus:ring-white"
                    placeholder="Введите ваш email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-2">
                    Запрос *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-white/20 border-white/30 text-white placeholder-white/60 focus:border-white focus:ring-white resize-none"
                    placeholder="Опишите ваш запрос или задачу"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  loading={isSubmitting}
                  className="w-full bg-white text-brand-primary hover:bg-white/90 font-semibold py-3"
                  size="lg"
                >
                  {isSubmitting ? 'Отправка...' : 'Оставить заявку'}
                </Button>
              </form>
            </div>

            {/* Social Links and Contact Info */}
            <div className="space-y-8">
              {/* Social Media Icons */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  QR-коды для быстрого доступа
                </h3>
                
                <div className="grid grid-cols-1 gap-6">
                  {socialLinks.map((social) => (
                    <a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-200 group"
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
                        <div className="text-white font-semibold text-lg">
                          {social.name}
                        </div>
                        <div className="text-white/70 text-sm">
                          Отсканируйте QR-код
                        </div>
                        <div className="text-white/60 text-xs mt-1">
                          {social.url.replace('https://', '').replace('mailto:', '')}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Additional Contact Info */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Прямой контакт
                </h3>
                
                <div className="space-y-4 text-white/90">
                  <div>
                    <div className="font-semibold text-white">Email</div>
                    <a 
                      href="mailto:finmodelguru@gmail.com"
                      className="hover:text-white transition-colors"
                    >
                      finmodelguru@gmail.com
                    </a>
                  </div>
                  
                  <div>
                    <div className="font-semibold text-white">Телефон</div>
                    <a 
                      href="tel:+79262240270"
                      className="hover:text-white transition-colors"
                    >
                      +7 926 2240270
                    </a>
                  </div>
                  
                  <div>
                    <div className="font-semibold text-white">Telegram</div>
                    <a 
                      href="https://t.me/FinModelGuru"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      @FinModelGuru
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <section className="text-center mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Давайте работать вместе
              </h3>
              <p className="text-white/90 text-lg">
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