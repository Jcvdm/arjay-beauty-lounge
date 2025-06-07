import { motion } from 'framer-motion';
import { ChevronDown, Star, Clock, Heart } from 'lucide-react';

const AnimatedHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-accent-200 to-primary-200 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-secondary-200 to-accent-200 rounded-full blur-2xl opacity-40"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
          {/* Content */}
          <motion.div 
            className="text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-primary-200 text-primary-700 text-sm font-medium mb-8"
              variants={itemVariants}
            >
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
              Premium Beauty Services
            </motion.div>
            
            <motion.h1 
              className="heading-xl text-gray-900 mb-6"
              variants={itemVariants}
            >
              Transform Your
              <span className="gradient-text block">Natural Beauty</span>
            </motion.h1>
            
            <motion.p 
              className="body-lg text-gray-600 mb-8 max-w-xl"
              variants={itemVariants}
            >
              Experience luxury beauty treatments in our serene sanctuary. Our expert team combines 
              artistry with the finest products to reveal your most radiant self.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              variants={itemVariants}
            >
              <motion.a 
                href="#contact" 
                className="btn-primary group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Book Your Experience</span>
                <ChevronDown className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.a>
              <motion.a 
                href="#services" 
                className="btn-secondary group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Explore Services</span>
                <ChevronDown className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.a>
            </motion.div>
            
            {/* Trust Indicators */}
            <motion.div 
              className="grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0"
              variants={containerVariants}
            >
              <motion.div className="text-center lg:text-left" variants={itemVariants}>
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-3 shadow-soft">
                  <Star className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="heading-sm text-gray-900 mb-1">Certified</h3>
                <p className="text-sm text-gray-600">Expert Professionals</p>
              </motion.div>
              
              <motion.div className="text-center lg:text-left" variants={itemVariants}>
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-3 shadow-soft">
                  <Clock className="w-8 h-8 text-secondary-600" />
                </div>
                <h3 className="heading-sm text-gray-900 mb-1">Flexible</h3>
                <p className="text-sm text-gray-600">Convenient Hours</p>
              </motion.div>
              
              <motion.div className="text-center lg:text-left" variants={itemVariants}>
                <div className="w-16 h-16 bg-gradient-to-br from-accent-100 to-accent-200 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-3 shadow-soft">
                  <Heart className="w-8 h-8 text-accent-600" />
                </div>
                <h3 className="heading-sm text-gray-900 mb-1">Premium</h3>
                <p className="text-sm text-gray-600">Luxury Products</p>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Visual */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main Image Container */}
              <motion.div 
                className="aspect-golden bg-gradient-to-br from-primary-100 via-white to-secondary-100 rounded-5xl shadow-large overflow-hidden border border-white/50"
                variants={floatingVariants}
                animate="animate"
              >
                {/* Hero Image Placeholder */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50 relative">
                  <div className="text-center z-10">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-medium">
                      <Heart className="w-12 h-12 text-primary-600" />
                    </div>
                    <h3 className="heading-sm text-gray-700 mb-2">Your Beauty Journey</h3>
                    <p className="text-gray-500 text-sm">Professional salon photography will go here</p>
                  </div>
                  
                  {/* Decorative overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
                </div>
              </motion.div>
              
              {/* Floating Cards */}
              <motion.div 
                className="absolute -top-6 -left-6 card-glass p-4"
                variants={floatingVariants}
                animate="animate"
                style={{ animationDelay: '0s' }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-sm">5★</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">500+ Happy Clients</p>
                    <p className="text-xs text-gray-600">Trusted Reviews</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-6 -right-6 card-glass p-4"
                variants={floatingVariants}
                animate="animate"
                style={{ animationDelay: '-2s' }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent-400 to-primary-400 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-sm">15+</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Premium Services</p>
                    <p className="text-xs text-gray-600">Expert Care</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Background Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-accent-200 to-primary-200 rounded-full blur-2xl opacity-60 -z-10"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-secondary-200 to-accent-200 rounded-full blur-3xl opacity-50 -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a href="#services" className="flex flex-col items-center text-gray-600 hover:text-primary-600 transition-colors duration-200">
          <span className="text-sm font-medium mb-2">Discover More</span>
          <ChevronDown className="w-6 h-6" />
        </a>
      </motion.div>
    </section>
  );
};

export default AnimatedHero;
