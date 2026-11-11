import "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

const footerSections = [
  {
    title: "Company",
    links: ["Features", "Pricing", "Affiliate Program", "Press Kit"],
  },
  {
    title: "Support",
    links: ["Account", "Help", "Contact Us", "Customer Support"],
  },
  {
    title: "Legals",
    links: ["Terms & Conditions", "Privacy Policy", "Licensing"],
  },
];

function Footer() {
  return (
    <footer className="w-full bg-white border-t border-slate-200 py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <Logo width="100px" />
              </div>
              <p className="text-sm text-slate-500">
                &copy; Copyright 2026. All Rights Reserved.
              </p>
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div
              key={section.title}
              className={`w-full p-6 md:w-1/2 ${
                index === 2 ? "lg:w-3/12" : "lg:w-2/12"
              }`}
            >
              <h3 className="mb-6 text-xs font-semibold uppercase tracking-wider text-slate-400">
                {section.title}
              </h3>
              <ul>
                {section.links.map((link) => (
                  <li key={link} className="mb-3">
                    <Link
                      to="/"
                      className="text-base font-medium text-slate-700 duration-200 hover:text-blue-600"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
