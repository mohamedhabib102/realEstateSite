import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { MdOutlineEmail, MdOutlinePhone, MdOutlineLocationOn } from 'react-icons/md';
import Logo from "../ui/Logo"; 

const Footer = () => {

  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'Properties', href: '#' },
    { name: 'Brokers', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  const services = [
    { name: 'Property Management', href: '#' },
    { name: 'Marketing', href: '#' },
    { name: 'Consulting', href: '#' },
    { name: 'Sales & Rentals', href: '#' },
  ];

  const contactInfo = [
    { icon: <MdOutlinePhone className="text-[#a88a6d]" />, text: '+20 0111535882', link: 'tel:+200111535882' },
    { icon: <MdOutlineEmail className="text-[#a88a6d]" />, text: 'info@havenix.com', link: 'mailto:info@havenix.com' },
    { icon: <MdOutlineLocationOn className="text-[#a88a6d]" />, text: '123 Nasr City, Egypt' },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, href: '#' },
    { icon: <FaTwitter />, href: '#' },
    { icon: <FaInstagram />, href: '#' },
    { icon: <FaLinkedinIn />, href: '#' },
  ];

  return (
    <footer className="bg-[#1e1e1e] text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-10">
          

          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center text-xl font-bold mb-4 text-white">

              <Logo 
              color='white'
              /> 
            </div>
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              Your trusted partner in real estate excellence and luxury property services.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((item, index) => (
                <a 
                  key={index} 
                  href={item.href} 
                  className="text-gray-400 hover:text-[#a88a6d] transition-colors duration-200"
                  aria-label={item.icon.type.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>


          <div>
            <h4 className="text-base font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="text-sm text-gray-400 hover:text-[#a88a6d] transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          <div>
            <h4 className="text-base font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="text-sm text-gray-400 hover:text-[#a88a6d] transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          <div>
            <h4 className="text-base font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center space-x-3 rtl:space-x-reverse">
                  <a 
                    href={item.link}
                    className="flex items-center text-sm text-gray-400 hover:text-[#a88a6d] transition-colors duration-200"
                  >
                    {item.icon}
                    <span>{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>


        <hr className="border-gray-700 my-6" />


        <div className="text-center pt-4">
          <p className="text-sm text-gray-500">
            © 2025 HAVENIX Real Estate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;