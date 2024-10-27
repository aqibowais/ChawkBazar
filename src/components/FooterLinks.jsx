import React from 'react';

const FooterLinks = () => {
  return (
    <div className="bg-gray-200 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 md:gap-9 xl:gap-5 pb-9 md:pb-14 lg:pb-16 2xl:pb-20 3xl:pb-24 lg:mb-0.5 2xl:mb-0 3xl:-mb-1 pl-10">
      
      <FooterSection title="Social">
        <FooterLink href="https://www.instagram.com/redqinc/">Instagram</FooterLink>
        <FooterLink href="https://twitter.com/redqinc">Twitter</FooterLink>
        <FooterLink href="https://www.facebook.com/redqinc/">Facebook</FooterLink>
        <FooterLink href="https://www.youtube.com/channel/UCjld1tyVHRNy_pe3ROLiLhw">Youtube</FooterLink>
      </FooterSection>
      
      <FooterSection title="Contact">
        <FooterLink href="/contact-us">Contact Us</FooterLink>
        <FooterLink href="/">yourexample@email.com</FooterLink>
        <FooterLink href="/">example@email.com</FooterLink>
        <FooterLink href="/">Call us: +1 254 568-5479</FooterLink>
      </FooterSection>

      <FooterSection title="About">
        <FooterLink href="/contact-us">Support Center</FooterLink>
        <FooterLink href="/">Customer Support</FooterLink>
        <FooterLink href="/contact-us">About Us</FooterLink>
        <FooterLink href="/">Copyright</FooterLink>
      </FooterSection>

      <FooterSection title="Customer Care">
        <FooterLink href="/faq">FAQ & Helps</FooterLink>
        <FooterLink href="/">Shipping & Delivery</FooterLink>
        <FooterLink href="/">Return & Exchanges</FooterLink>
      </FooterSection>

      <FooterSection title="Our Information">
        <FooterLink href="/privacy">Privacy policy update</FooterLink>
        <FooterLink href="/terms">Terms & conditions</FooterLink>
        <FooterLink href="/privacy">Return Policy</FooterLink>
        <FooterLink href="/">Site Map</FooterLink>
      </FooterSection>

      <FooterSection title="Top Categories">
        <FooterLink href="/search">Men's Wear</FooterLink>
        <FooterLink href="/search">Women's Wear</FooterLink>
        <FooterLink href="/search">Kids' Wear</FooterLink>
      </FooterSection>
      
    </div>
  );
};

const FooterSection = ({ title, children }) => (
  <div className="pb-3 md:pb-0">
    <h4 className="mb-5 text-sm font-bold text-heading md:text-base xl:text-lg 2xl:mb-6 3xl:mb-7">{title}</h4>
    <ul className="text-xs lg:text-sm text-body flex flex-col space-y-3 lg:space-y-3.5">
      {children}
    </ul>
  </div>
);

const FooterLink = ({ href, children }) => (
  <li className="flex items-baseline">
   
    <a href={href} className="transition-colors duration-200 hover:text-black">{children}</a>
  </li>
);



// Repeat for other icons...

export default FooterLinks;
