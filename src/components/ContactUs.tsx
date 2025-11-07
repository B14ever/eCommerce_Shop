'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { toast } from 'sonner';
import { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'info@shopmodern.et',
      link: 'mailto:info@shopmodern.et',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+251 11 234 5678',
      link: 'tel:+251112345678',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Bole, Addis Ababa, Ethiopia',
      link: '#',
    },
  ];

  return (
    <section id="contact" className="py-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              className="group p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all text-center"
            >
              <info.icon className="h-5 w-5 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
              <h3 className="text-sm font-semibold mb-1">{info.title}</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">{info.content}</p>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
