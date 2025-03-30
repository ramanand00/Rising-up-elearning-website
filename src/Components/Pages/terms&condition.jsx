import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const TermsAndConditions = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
        <h1 className="text-3xl font-bold text-center mb-6">Terms and Conditions</h1>
        <p className="text-gray-600 italic text-center mb-6">Last Updated: 2025-04-01</p>
        
        <div className="space-y-6 text-gray-800">
          <section>
            <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
            <p>By registering for an account, accessing, or using any part of <strong>Rising-Up</strong>, you agree to abide by these Terms and Conditions. If you do not agree, please refrain from using our platform.</p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold">2. User Accounts</h2>
            <ul className="list-disc list-inside">
              <li>You must provide accurate information during registration.</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
              <li>Any unauthorized use of your account must be reported immediately.</li>
              <li>Users must be at least 13 years old to create an account. If you are under 18, you must have parental or guardian consent.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold">3. Use of Services</h2>
            <p>Our platform is intended for educational purposes. You agree not to use the platform for unlawful activities and must respect other users.</p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold">4. Content Ownership & Usage</h2>
            <p>Users retain ownership of their uploaded content but grant <strong>Rising-Up</strong> a license to display and distribute it within the platform.</p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold">5. Privacy Policy</h2>
            <p>Your personal data will be collected and processed in accordance with our <strong>Privacy Policy</strong>.</p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold">6. Payment & Subscriptions</h2>
            <p>Certain services may require payment. All payments are non-refundable unless stated otherwise.</p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold">7. Prohibited Activities</h2>
            <p>Users are strictly prohibited from engaging in fraudulent activities, distributing harmful software, or harassing other users.</p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold">8. Termination</h2>
            <p>We reserve the right to suspend or terminate accounts violating our terms.</p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold">9. Contact Us</h2>
            <p>For questions regarding these Terms and Conditions, please contact us at: <strong>softriseup@gmail.com</strong></p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
