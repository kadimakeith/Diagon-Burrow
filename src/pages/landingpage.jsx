import React from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaLock, FaNetworkWired, FaBell, FaChartLine, FaArrowRight } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import BackgroundImage from '../assets/background.svg';
import Image from '../assets/3d-casual-life-trail-map.png';
import Microsoft from '../assets/microsoft.svg';
import AWSLogo from '../assets/awws.svg';
import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';
import avatar from '../assets/avgroup.svg';
import reviews from '../assets/reviews.svg';
import FeedbackModal from '../components/feedbackmodal.jsx';
import { ToastContainer } from 'react-toastify';


const LandingPage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-slate-100 font-sans">
      <Helmet>
        <title>Locsafe - Supply Chain Transparency</title>
        <meta
          name="description"
          content="Locsafe™ is a blockchain-based supply chain tracking system that ensures transparency, traceability, and security for your assets in real-time."
        />
      </Helmet>

      <ToastContainer position="top-left" autoClose={3000} hideProgressBar closeOnClick pauseOnHover draggable />

      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-10 dark:opacity-5"
          src={BackgroundImage}
          alt=""
        />
      </div>

      <div className="relative z-10">
        <Header />
        
        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-20 pb-32">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-teal-50 dark:bg-teal-900/30 rounded-full">
                <span className="text-teal-600 dark:text-teal-400 text-sm font-medium">NEW: AI-Powered Supply Chain Intelligence</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Bring <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500">transparency</span> to your supply chain
              </h1>
              
              <p className="text-xl text-slate-600 dark:text-slate-300">
                Leverage blockchain and AI technology to trace your products in real-time, from origin to destination, reducing fraud and increasing accountability.
              </p>
              
              <div className="space-y-6">
                <div className="grid gap-4">
                  <Feature icon={<FaNetworkWired />} text="Blockchain-powered tracking for end-to-end transparency" />
                  <Feature icon={<FaLock />} text="Enhanced security and data immutability" />
                  <Feature icon={<FaBell />} text="Real-time AI alerts for any discrepancies" />
                </div>

                <div className="flex items-center gap-4">
                  <Link
                    to="/register"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-lg shadow-lg shadow-teal-500/25 hover:shadow-xl hover:scale-105 transition duration-300"
                  >
                    Get Started
                    <FaArrowRight className="ml-2" />
                  </Link>
                  <Link
                    to="#"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-300"
                  >
                    Learn More
                  </Link>
                </div>

                <div className="flex items-center justify-between max-w-md pt-6 border-t border-slate-200 dark:border-slate-700">
                  <img src={avatar} alt="User reviews" className="h-12" />
                  <img src={reviews} alt="Ratings" className="h-8" />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/30 to-blue-500/30 rounded-3xl blur-3xl" />
              <img 
                className="relative  w-full transform hover:scale-105 transition duration-500"
                src={Image}
                alt="Supply chain dashboard"
              />
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-16 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <p className="text-center text-sm font-medium text-slate-600 dark:text-slate-400 mb-8">
              TRUSTED BY INDUSTRY LEADERS
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-75">
              <img src={Microsoft} alt="Microsoft" className="h-8 dark:brightness-200" />
              <img src={AWSLogo} alt="Amazon Web Services" className="h-8 dark:brightness-200" />
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-teal-600 dark:text-teal-400 text-sm font-medium tracking-wider uppercase">Features</span>
              <h2 className="text-3xl font-bold mt-4">Everything you need to track your supply chain</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mt-4">
                Comprehensive tools powered by blockchain and AI technology.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-24 bg-slate-50 dark:bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-teal-600 dark:text-teal-400 text-sm font-medium tracking-wider uppercase">Why Choose Us</span>
              <h2 className="text-3xl font-bold mt-4">Why businesses trust Locsafe</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mt-4">
                Join thousands of companies using Locsafe to revolutionize their supply chains.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <BenefitCard key={index} {...benefit} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-blue-500/10" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to transform your supply chain?</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
                Experience the future of supply chain management with AI and blockchain technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-lg shadow-lg shadow-teal-500/25 hover:shadow-xl hover:scale-105 transition duration-300"
                >
                  Start Free Trial
                  <FaArrowRight className="ml-2" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-300"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Footer />
        <FeedbackModal />

      </div>

    </div>
  );
};

const Feature = ({ icon: Icon, text }) => (
  <div className="flex items-center gap-4 text-slate-800 dark:text-slate-200">
    <div className="flex-shrink-0 w-10 h-10 bg-teal-50 dark:bg-teal-900/30 rounded-lg flex items-center justify-center">
      {React.cloneElement(Icon, { className: "w-5 h-5 text-teal-600 dark:text-teal-400" })}
    </div>
    <p className="font-medium">{text}</p>
  </div>
);

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="group p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
      <div className="w-12 h-12 bg-teal-50 dark:bg-teal-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
        <Icon className="text-2xl text-teal-600 dark:text-teal-400" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-slate-600 dark:text-slate-300">{description}</p>
    </div>
  );
};

const BenefitCard = ({ title, description }) => {
  return (
    <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-slate-600 dark:text-slate-300">{description}</p>
    </div>
  );
};

const features = [
  {
    icon: FaMapMarkerAlt,
    title: "Global Traceability",
    description: "Track your products and assets at every stage, from production to delivery."
  },
  {
    icon: FaLock,
    title: "Enhanced Security",
    description: "Immutable blockchain records that reduce fraud risks and increase accountability."
  },
  {
    icon: FaBell,
    title: "Smart Alerts",
    description: "Get instant AI-powered notifications for any supply chain discrepancies or updates."
  },
  {
    icon: FaNetworkWired,
    title: "Decentralized Network",
    description: "Maintain transparency across global supply chains without central authority."
  },
  {
    icon: FaChartLine,
    title: "Advanced Analytics",
    description: "Gain actionable insights with AI-powered supply chain analytics."
  },
  {
    icon: FaCalendarAlt,
    title: "Custom Workflows",
    description: "Set up personalized notification rules based on your specific needs."
  }
];

const benefits = [
  {
    title: "Enterprise-grade Security",
    description: "Bank-level encryption and blockchain technology ensure your data remains secure and tamper-proof."
  },
  {
    title: "AI-Powered Efficiency",
    description: "Automate manual processes and reduce errors with intelligent tracking and smart contracts."
  },
  {
    title: "Complete Transparency",
    description: "Build trust with stakeholders through immutable records and end-to-end visibility."
  },
  {
    title: "Scalable Solution",
    description: "Our platform grows with your business, handling supply chains of any size and complexity."
  }
];

export default LandingPage;