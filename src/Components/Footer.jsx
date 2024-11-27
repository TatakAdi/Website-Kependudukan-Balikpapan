import React from "react";
import "../styles/footer.css"; // Pastikan untuk mengimpor file CSS jika belum

const Footer = () => {
  const socialLinks = [
    { href: "#", img: "/assets/facebook-icon.svg", alt: "Visit us on Facebook", label: "Facebook" },
    { href: "#", img: "/assets/instagram-icon.svg", alt: "Visit us on Instagram", label: "Instagram" },
    { href: "#", img: "/assets/youtube-icon.svg", alt: "Visit us on YouTube", label: "YouTube" },
    { href: "#", img: "/assets/twitter-icon.svg", alt: "Visit us on Twitter", label: "Twitter" },
  ];

  return (
    <footer className="bg-gradient-to-r from-purple-500 to-purple-700 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Media Sosial */}
        <div>
          <h3 className="text-lg font-semibold mb-4">For More Information</h3>
          <p>Visit Our Social Media</p>
          <div className="flex flex-wrap gap-4 mt-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href || "#"}
                aria-label={social.alt}
                className="flex items-center bg-gray-100 text-black px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={social.img}
                  alt={social.alt}
                  className="w-5 h-5 mr-2"
                  onError={(e) => (e.target.src = "/icons/fallback-icon.svg")}
                />
                {social.label}
              </a>
            ))}
          </div>
        </div>

        {/* Lokasi */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Office</h3>
          <div className="border border-gray-200 rounded-lg shadow-lg overflow-hidden aspect-video">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18..."
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Our Office Location"
            ></iframe>
          </div>
          <p className="mt-4 text-sm">
            Lorem ipsum dolor sit amet consectetur. Hendrerit tristique dictum tristique mollis.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
