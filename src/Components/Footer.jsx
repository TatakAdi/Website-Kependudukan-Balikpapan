import React from "react";
import "../styles/footer.css"; // Pastikan untuk mengimpor file CSS jika belum
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://www.facebook.com/Disdukcapilbpn",
      label: "Facebook",
      icon: faFacebook,
    },
    {
      href: "https://www.instagram.com/disdukcapilbpn?igsh=bXhjYzUwOG51NjRo",
      label: "Instagram",
      icon: faInstagram,
    },
    {
      href: "http://www.youtube.com/@dukcapilbalikpapanofficial5880",
      label: "YouTube",
      icon: faYoutube,
    },
    {
      href: "https://twitter.com/capilbalikpapan",
      label: "Twitter",
      icon: faXTwitter,
    },
  ];

  return (
    <footer className="text-white mt-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        {/* Media Sosial */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">
            For More Information
          </h3>
          <p className="text-white">Visit Our Social Media</p>
          <div className="flex flex-wrap gap-4 mt-4 social-icons pl-5">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href || "#"}
                aria-label={social.alt}
                className="flex items-center bg-gray-100 text-black px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow box-sosmed"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={social.icon}
                  className="w-5 h-5 mr-2"
                  aria-hidden="true"
                />
                {social.label}
              </a>
            ))}
          </div>
        </div>

        {/* Lokasi */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Our Office</h3>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255296.65785763602!2d116.72756613581325!3d-1.1531483559001474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df1468cb12aa245%3A0x22ca51fc7271626c!2sDinas%20Kependudukan%20Dan%20Catatan%20Sipil%20Balikpapan!5e0!3m2!1sid!2sid!4v1732710716183!5m2!1sid!2sid"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          <p className="mt-1 text-sm pr-7 text-white alamat">
            Jalan MT Haryono No.187 Damai Balikpapan Kota RT.26, Damai, Kec.
            Balikpapan Kota, Kota Balikpapan, Kalimantan Timur 76114
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
