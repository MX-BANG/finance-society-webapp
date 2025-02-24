'use client';

const Footer = () => {
  return (
    <footer className="bg-primary-navy text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Finance Society. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="/privacy" className="text-white hover:underline">Privacy Policy</a>
          <a href="/terms" className="text-white hover:underline">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
