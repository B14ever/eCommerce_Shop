'use client';

import { motion } from 'framer-motion';
import { Target, Users, Award, Heart } from 'lucide-react';
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';

export default function AboutUs() {
  const testimonials = [
    {
      quote: "ShopModern has completely transformed my online shopping experience. The quality of products and customer service is unmatched!",
      name: "Selam Tadesse",
      designation: "Business Owner, Addis Ababa",
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500",
    },
    {
      quote: "I've been shopping with ShopModern for over a year now. The variety and authenticity of products keep me coming back every time.",
      name: "Daniel Kebede",
      designation: "Tech Professional, Bahir Dar",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500",
    },
    {
      quote: "Fast delivery, great prices, and excellent quality. ShopModern is my go-to for all my shopping needs!",
      name: "Rahel Mekonnen",
      designation: "Teacher, Hawassa",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=500",
    },
  ];

  const features = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide high-quality products at affordable prices while delivering exceptional customer service.',
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'We prioritize our customers needs and satisfaction above everything else.',
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Every product is carefully selected and verified to meet our high standards.',
    },
    {
      icon: Heart,
      title: 'Community Driven',
      description: 'We build lasting relationships with our customers and value their feedback.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            About ShopModern
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Your trusted partner in online shopping, delivering quality products since day one.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <CardContainer key={index} containerClassName="py-0">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white mb-2"
                >
                  {feature.title}
                </CardItem>
                <CardItem
                  translateZ="100"
                  className="w-full mb-4"
                >
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30">
                    <feature.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm dark:text-neutral-300"
                >
                  {feature.description}
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-8">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            What Our Customers Say
          </h3>
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </div>
      </div>
    </section>
  );
}
