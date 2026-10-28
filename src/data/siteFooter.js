import logo from "@/images/resources/test.png";
import bg from "@/images/shapes/site-footer-shape-1.png";

const footerData = {
  bg,
  logo,
  aboutText: "Earth Telecommunication Pvt. Ltd.\n" +
      "Your Choice for Connecting\n" +
      "Networks",
  socials: [
    {
      id: 1,
      icon: "fab fa-linkedin-in",
      href: "https://www.linkedin.com/company/earth-telecommunication/",
    },
    {
      id: 2,
      icon: "fab fa-facebook",
      href: "https://www.facebook.com/earthtelecommunicationbd/",
    },
    // {
    //   id: 3,
    //   icon: "fab fa-pinterest-p",
    //   href: "#",
    // },
    // {
    //   id: 4,
    //   icon: "fab fa-instagram",
    //   href: "#",
    // },
  ],
  links: [
    {
      id: 1,
      text: "Services",
      href: "/services",
    },
    {
      id: 2,
      text: "Clients",
      href: "/clients",
    },
    {
      id: 3,
      text: "Our Networks",
      href: "/cases",
    },
    {
      id: 4,
      text: "About Us",
      href: "/about",
    },
    {
      id: 5,
      text: "Contact",
      href: "/contact",
    },
    {
      id: 6,
      text: "Support",
      href: "/about",
    },
    {
      id: 7,
      text: "Terms of use",
      href: "/about",
    },
    {
      id: 8,
      text: "Privacy policy",
      href: "/about",
    },
    {
      id: 9,
      text: "Looking Glass",
      href: "http://lg.earth.net.bd/",
    },
    {
      id: 10,
      text: "Help",
      href: "/about",
    },
  ],
  newsletterText: "Subsrcibe for our upcoming latest articles and resources",
  office: "Corporate Office",
  address: "Impetus Center, 5th Floor (North Side), 242/B Tejgaon-Gulshan Link Road, Tejgaon I/A Dhaka-1208, Bangladesh",
  phone: "+88 - 01322811891",
  phoneHref: "01322811891",
  compliance: "Compliance Management",
  name: "Md. Obaidullah-Al-Masum",
  deg: "Assistant General Manager (AGM)",
  phn: "+880-1322811634",
  email: "obaidullah.masum@earth.net.bd",
  author: "Earth",
  year: new Date().getFullYear(),
};

export default footerData;
