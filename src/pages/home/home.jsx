import React, { useEffect, useState } from "react";
import { LocationIcon } from "../../assets/svgs/LocationIcon";
import { Link } from "react-router-dom";
import { GitHubIcon } from "../../assets/svgs/GitHubIcon";
import { skills } from "../../data/skills-data";
import { LightIcon } from "../../assets/svgs/LightIcon";
import { DarkIcon } from "../../assets/svgs/DarkIcon";
import { EmailIcon } from "../../assets/svgs/contact/EmailIcon";
import { CopyIcon } from "../../assets/svgs/contact/CopyIcon";
import { TelIcon } from "../../assets/svgs/contact/TelIcon";

const img = "/Anonymous.jpg";
const logo = "/logo_transparent.png";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);

  // Check local storage for the saved theme preference
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setDarkMode(storedTheme === "dark");
    }
  }, []);

  // Toggle dark mode and save preference in local storage
  function handleThemeToggle() {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  }

  function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  const navLinks = [
    { id: 1, name: "About", href: "about" },
    { id: 2, name: "Work", href: "work" },
    { id: 3, name: "Testimonials", href: "testimonials" },
    { id: 4, name: "Contact", href: "contact" },
  ];

  // Reusable NavLink component
  const NavLink = ({ name, href, scrollToSection }) => (
    <a
      href={`#${href}`}
      onClick={(e) => {
        e.preventDefault();
        scrollToSection(href);
      }}
    >
      {name}
    </a>
  );

  const [copied, setCopied] = useState(null);

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(field);
      setTimeout(() => setCopied(null), 2000); // Clear the "Copied" message after 2 seconds
    });
  };

  return (
    <>
      <section
        className={`sticky top-0 z-50 shadow-sm shadow-accent ${
          darkMode ? "bg-dark" : "bg-accent"
        }`}
      >
        <nav className="container mx-auto flex justify-between p-4 gap-3">
          <div
            className={`flex items-center ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
            >
              <img
                className="w-20 hidden md:block bg-dark rounded-md object-center"
                src={logo}
              />
            </a>
          </div>
          <div
            className={`flex gap-5 items-center ${
              darkMode ? "text-gray-100" : "text-gray-800"
            }`}
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.id}
                {...link}
                scrollToSection={scrollToSection}
              />
            ))}
            {/* Theme Toggle Button */}
            <button onClick={handleThemeToggle} className={`p-2 rounded `}>
              {darkMode ? <LightIcon /> : <DarkIcon />}
            </button>
          </div>
        </nav>
      </section>

      <section
        id="home"
        className={`h-fit py-10 md:py-20 ${
          darkMode ? "bg-dark" : "bg-white text-black"
        }`}
      >
        <div className="container">
          <div className="flex justify-center md:justify-between flex-wrap-reverse md:flex-nowrap w-full">
            <div className="max-w-3xl space-y-12">
              <h1
                className={`font-bold text-4xl text-center md:text-start md:text-6xl ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                Hi, I’m Laziz Khamidov
              </h1>
              <p className="font-normal text-gray-400">
                I’m a frontend developer specializing in React.js, dedicated to
                building exceptional digital experiences. With over 1 years of
                experience, I focus on creating web applications that are fast,
                accessible, visually appealing, and responsive. I thrive on
                crafting modern user interfaces and delivering intuitive
                experiences that seamlessly blend design and functionality.
                Despite years in the industry, my passion for frontend
                development remains as strong as ever, and I continually explore
                new ways to innovate and excel.
              </p>

              <div className="flex gap-2 flex-col text-gray-400">
                <div className="flex gap-2">
                  <LocationIcon />
                  <p>Tahkent, Nurafshan</p>
                </div>

                <div className="flex gap-2 items-center">
                  <div className="w-2 h-2 rounded-full bg-green-500"> </div>
                  <p>Available for new projects</p>
                </div>
              </div>

              <div className="">
                <Link to={""}>
                  <GitHubIcon />
                </Link>
              </div>
            </div>

            <div className="mb-10 flex justify-center w-full max-w-sm">
              <div className="relative w-full">
                <div className="w-full h-full md:w-72 md:h-80 bg-gray-700 absolute top-8 md:left-12"></div>
                <img
                  className="w-72 h-80 sticky mx-auto md:mx-0"
                  src={img}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className={`py-20 md:py-24 h-fit ${
          darkMode ? "bg-darkaccent" : "bg-accent"
        }`}
      >
        <div className="container">
          <div className="w-full text-center mb-10">
            <h1 className="p-1 px-7 text-white bg-gray-600 w-fit mx-auto rounded-lg">
              About me
            </h1>
          </div>
          <div className="flex justify-center md:justify-between flex-wrap">
            <div className="mb-10 flex justify-center w-full max-w-xl">
              <div className="relative w-full">
                <div className="w-full h-full md:w-[400px] max-w-full md:h-[480px] bg-gray-700 absolute  top-8 md:left-12"></div>
                <img
                  className="w-72 mx-auto md:w-[400px] md:h-[480px] sticky object-cover"
                  src={img}
                  alt=""
                />
              </div>
            </div>
            <div className="max-w-xl space-y-4">
              <h1 className="text-white font-semibold">
                Curious about me? Here you have it:
              </h1>
              <p className="font-normal text-gray-400">
                Curious about me? Here you have it: I am a passionate,
                self-proclaimed designer specializing in frontend development. I
                am very passionate about bringing the technical and visual
                aspects of digital products to life. User experience,
                pixel-perfect design, and writing clean, readable,
                high-performance code are important to me. I started my journey
                as a web developer in 2023, and since then I have continued to
                grow and develop as a developer, taking on new challenges and
                learning the latest technologies along the way. Now, at the
                beginning of my eighteen years, 1 year after starting my website
                building journey, I am building modern web applications using
                modern technologies such as Next.js, TypeScript, Tailwindcss,
                and many more. I am a very forward-thinking person and enjoy
                working on products from idea to development. When I'm not in
                full developer mode, you can find me scrolling around on
                Twitter, witnessing the journey of early startups, or just
                enjoying my free time. You can follow me on GitHub, where I
                share tech bits and builds publicly, or you can follow me on the
                Contact page. I'm open to freelance work, so feel free to drop
                by and say hi! I promise I won't bite 😉
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="skills"
        className={`h-fit py-10 md:py-20 ${
          darkMode ? "bg-dark" : "bg-white text-black"
        }`}
      >
        <div className="container">
          <h1 className="p-1 px-7 text-white bg-gray-600 w-fit mx-auto rounded-lg mb-5">
            Skills
          </h1>
          <div className="">
            <h1 className="font-normal text-gray-400 text-center mb-10">
              The skills, tools and technologies I am really good at:
            </h1>

            <div className="flex justify-between flex-wrap gap-4">
              {skills.map((item) => (
                <div
                  key={item.id}
                  className="hover:scale-105 hover:border-b-2 pb-1 transition-all cursor-pointer max-w-24 justify-center w-full flex"
                >
                  {item.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className={`py-24 md:py-28 h-fit ${darkMode ? "bg-dark" : "bg-white"}`}
      >
        <div className="container">
          <h1 className="p-1 px-7 text-white bg-gray-600 w-fit mx-auto rounded-lg mb-5">
            Get in touch
          </h1>
          <div className="">
            <h1
              className={`max-w-xl w-full font-normal text-xl text-center mx-auto ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              What’s next? Feel free to reach out to me if you're looking for a
              developer, have a query, or simply want to connect.
            </h1>
          </div>

          <div className="flex justify-center flex-col items-center gap-4 pt-10">
            <div className="flex items-center gap-4">
              <EmailIcon />
              <a
                className={`font-semibold text-lg md:text-4xl ${
                  !darkMode ? "text-dark" : "text-white"
                }`}
                href="mailto:hamidovlaziz23@gmail.com"
              >
                hamidovlaziz23@gmail.com
              </a>
              <button
                onClick={() => handleCopy("hamidovlaziz23@gmail.com", "email")}
                className="relative"
              >
                <CopyIcon />
                {copied === "email" && (
                  <span className="absolute top-full  left-1/2 -translate-x-1/2 text-green-500 text-xs">
                    Copied!
                  </span>
                )}
              </button>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <TelIcon />
              <a
                className={`font-semibold text-lg md:text-4xl ${
                  !darkMode ? "text-dark" : "text-white"
                }`}
                href="tel:+998917772905"
              >
                +998917772905
              </a>
              <button
                onClick={() => handleCopy("+998917772905", "phone")}
                className="relative"
              >
                <CopyIcon />
                {copied === "phone" && (
                  <span className="absolute top-full  left-1/2 -translate-x-1/2 text-green-500 text-xs">
                    Copied!
                  </span>
                )}
              </button>
            </div>

            <div className="space-y-2">
              <h1
                className={`max-w-xl w-full font-normal text-xl text-center mx-auto ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                You may also find me on these platforms!
              </h1>
              <div className="flex justify-center">
                <a href="https://github.com/lazizdevv">
                  <GitHubIcon />
                </a>
              </div>
              <div
                className={`max-w-xl w-full font-normal text-xl text-center mx-auto ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <a
                  className="underline hover:text-blue-500"
                  href="https://laziz-khamidov.vercel.app"
                >
                  my contact page
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className={`py-5 ${darkMode ? "bg-darkaccent" : "bg-accent"}`}>
        <div className="container">
          <h1 className="text-center text-gray-400">2023</h1>

          <div className=""></div>
        </div>
      </footer>
    </>
  );
};

export default Portfolio;
