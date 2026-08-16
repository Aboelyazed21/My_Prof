import React from 'react';
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiArrowDown,
} from 'react-icons/fi';
import { SiBehance } from 'react-icons/si';
import { useLanguage } from '../contexts/LanguageContext';
import { AnimatedSection } from './AnimatedSection';
import profileImage from '../assets/profile.jpg';
import { TypeAnimation } from 'react-type-animation';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section
      id="home"
      className="
        min-h-screen
        flex
        items-center
        pt-20
        md:pt-24
        relative
        overflow-hidden
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-blue-50
          via-white
          to-purple-50
          dark:from-gray-950
          dark:via-gray-900
          dark:to-gray-950
        "
      />

      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div
          className="
            absolute
            top-[8%]
            left-[-100px]
            w-64
            h-64
            md:w-80
            md:h-80
            rounded-full
            bg-blue-500
            dark:bg-blue-600
            blur-3xl
            opacity-[0.08]
            animate-pulse
          "
        />

        <div
          className="
            absolute
            bottom-[5%]
            right-[-120px]
            w-72
            h-72
            md:w-96
            md:h-96
            rounded-full
            bg-purple-500
            dark:bg-purple-600
            blur-3xl
            opacity-[0.08]
            animate-pulse
            delay-1000
          "
        />

        {/* Small decorative circles */}

        <div
          className="
            absolute
            top-[25%]
            right-[15%]
            w-2
            h-2
            rounded-full
            bg-blue-500/30
          "
        />

        <div
          className="
            absolute
            bottom-[25%]
            left-[10%]
            w-3
            h-3
            rounded-full
            bg-purple-500/20
          "
        />

      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          container
          mx-auto
          px-5
          sm:px-6
          lg:px-8
          py-10
          sm:py-14
          lg:py-20
        "
      >

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-10
            md:gap-14
            lg:gap-20
            items-center
          "
        >

          {/* =================================================
              PROFILE IMAGE
          ================================================= */}

          <AnimatedSection
            animation="scaleUp"
            delay={200}
            className="
              order-first
              lg:order-last
            "
          >

            <div className="relative flex justify-center">

              <div
                className="
                  relative
                  w-56
                  h-56
                  sm:w-64
                  sm:h-64
                  md:w-72
                  md:h-72
                  lg:w-80
                  lg:h-80
                "
              >

                {/* Outer Glow */}

                <div
                  className="
                    absolute
                    -inset-4
                    rounded-full
                    bg-gradient-to-r
                    from-blue-500/10
                    via-indigo-500/10
                    to-purple-500/10
                    blur-2xl
                  "
                />

                {/* Gradient Border */}

                <div
                  className="
                    absolute
                    inset-0
                    rounded-full
                    bg-gradient-to-br
                    from-blue-500
                    via-indigo-500
                    to-purple-600
                    p-[3px]
                    shadow-2xl
                    shadow-blue-500/20
                  "
                >

                  {/* Inner Border */}

                  <div
                    className="
                      w-full
                      h-full
                      rounded-full
                      bg-white
                      dark:bg-gray-950
                      p-2
                    "
                  >

                    {/* Image */}

                    <div
                      className="
                        w-full
                        h-full
                        rounded-full
                        overflow-hidden
                        relative
                      "
                    >

                      <img
                        src={profileImage}
                        alt="Aboelyazed Hatem"
                        className="
                          w-full
                          h-full
                          object-cover
                          object-center
                          transition-transform
                          duration-700
                          hover:scale-105
                        "
                      />

                      {/* Image Overlay */}

                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-black/10
                          via-transparent
                          to-transparent
                          pointer-events-none
                        "
                      />

                    </div>

                  </div>

                </div>

                {/* =================================================
                    EXPERIENCE BADGE
                ================================================== */}

                <div
                  className="
                    absolute
                    -top-2
                    -right-1
                    sm:-top-3
                    sm:-right-3
                    w-14
                    h-14
                    sm:w-16
                    sm:h-16
                    rounded-2xl
                    bg-gradient-to-br
                    from-blue-500
                    to-blue-700
                    text-white
                    flex
                    flex-col
                    items-center
                    justify-center
                    shadow-xl
                    shadow-blue-500/30
                    border-4
                    border-white
                    dark:border-gray-900
                    z-20
                  "
                >

                  <span
                    className="
                      text-base
                      sm:text-lg
                      font-bold
                      leading-none
                    "
                  >
                    2+
                  </span>

                  <span
                    className="
                      text-[9px]
                      sm:text-[10px]
                      opacity-80
                      mt-0.5
                    "
                  >
                    Years
                  </span>

                </div>

                {/* =================================================
                    AVAILABLE BADGE
                ================================================== */}

                <div
                  className="
                    absolute
                    -bottom-2
                    -left-2
                    sm:-bottom-3
                    sm:-left-4
                    px-3
                    sm:px-4
                    py-2
                    rounded-xl
                    bg-white/95
                    dark:bg-gray-900/95
                    border
                    border-gray-200
                    dark:border-gray-700
                    shadow-xl
                    backdrop-blur-md
                    z-20
                  "
                >

                  <div className="flex items-center gap-2">

                    <span
                      className="
                        relative
                        flex
                        w-2
                        h-2
                      "
                    >

                      <span
                        className="
                          absolute
                          inline-flex
                          w-full
                          h-full
                          rounded-full
                          bg-green-400
                          opacity-75
                          animate-ping
                        "
                      />

                      <span
                        className="
                          relative
                          inline-flex
                          w-2
                          h-2
                          rounded-full
                          bg-green-500
                        "
                      />

                    </span>

                    <span
                      className="
                        text-xs
                        sm:text-sm
                        font-semibold
                        text-gray-700
                        dark:text-gray-200
                      "
                    >
                      Available
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </AnimatedSection>


          {/* =================================================
              CONTENT
          ================================================== */}

          <div
            className="
              space-y-6
              md:space-y-8
              text-center
              lg:text-left
            "
          >

            {/* =================================================
                WELCOME BADGE
            ================================================== */}

            <AnimatedSection
              animation="slideUp"
              delay={100}
            >

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-3.5
                  py-2
                  rounded-full
                  bg-blue-50
                  dark:bg-blue-500/10
                  border
                  border-blue-100
                  dark:border-blue-500/20
                  text-blue-600
                  dark:text-blue-400
                  text-xs
                  sm:text-sm
                  font-medium
                  shadow-sm
                "
              >

                <span
                  className="
                    w-2
                    h-2
                    rounded-full
                    bg-blue-500
                    animate-pulse
                  "
                />

                Full-Stack Developer

              </div>

            </AnimatedSection>


            {/* =================================================
                MAIN TITLE
            ================================================== */}

            <AnimatedSection
              animation="slideUp"
              delay={200}
            >

              <h1
                className="
                  font-bold
                  leading-[1.08]
                  tracking-tight
                  text-4xl
                  sm:text-5xl
                  md:text-6xl
                  lg:text-7xl
                  text-gray-900
                  dark:text-white
                "
              >

                <span
                  className="
                    block
                    min-h-[2.25em]
                    sm:min-h-[1.25em]
                  "
                >

                  <TypeAnimation
                    sequence={[
                      "I'm Eng. Aboelyazed",
                      1800,

                      "I'm a Full-Stack Developer",
                      1800,
                    ]}
                    wrapper="span"
                    speed={50}
                    deletionSpeed={70}
                    repeat={Infinity}
                    cursor={true}
                  />

                </span>

              </h1>

            </AnimatedSection>


            {/* =================================================
                DESCRIPTION
            ================================================== */}

            <AnimatedSection
              animation="slideUp"
              delay={400}
            >

              <p
                className="
                  text-base
                  sm:text-lg
                  md:text-xl
                  text-gray-600
                  dark:text-gray-400
                  leading-relaxed
                  max-w-2xl
                  mx-auto
                  lg:mx-0
                  min-h-[6em]
                  sm:min-h-[4em]
                "
              >

                <TypeAnimation
                  sequence={[
                    t('heroDescription') as string,
                  ]}
                  wrapper="span"
                  speed={45}
                  style={{
                    display: 'inline',
                  }}
                  repeat={0}
                  cursor={false}
                />

              </p>

            </AnimatedSection>


            {/* =================================================
                ACTION BUTTONS
            ================================================== */}

            <AnimatedSection
              animation="slideUp"
              delay={600}
            >

              <div
                className="
                  flex
                  flex-col
                  sm:flex-row
                  items-center
                  justify-center
                  lg:justify-start
                  gap-3
                  sm:gap-4
                "
              >

                {/* Portfolio */}

                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="
                    group
                    w-full
                    sm:w-auto
                    min-w-[175px]
                    px-6
                    sm:px-8
                    py-3.5
                    sm:py-4
                    bg-gradient-to-r
                    from-blue-600
                    to-purple-600
                    text-white
                    rounded-xl
                    shadow-lg
                    shadow-blue-500/20
                    hover:shadow-2xl
                    hover:shadow-blue-500/30
                    transition-all
                    duration-300
                    transform
                    hover:-translate-y-1
                    font-semibold
                    text-sm
                    sm:text-base
                    flex
                    items-center
                    justify-center
                    gap-2
                  "
                >

                  {t('viewPortfolio')}

                  <FiArrowDown
                    size={17}
                    className="
                      group-hover:translate-y-1
                      transition-transform
                      duration-300
                    "
                  />

                </button>


                {/* Contact */}

                <button
                  onClick={() => scrollToSection('contact')}
                  className="
                    w-full
                    sm:w-auto
                    min-w-[175px]
                    px-6
                    sm:px-8
                    py-3.5
                    sm:py-4
                    border
                    border-gray-300
                    dark:border-gray-700
                    bg-white/50
                    dark:bg-gray-900/30
                    text-gray-700
                    dark:text-gray-300
                    rounded-xl
                    hover:border-blue-500
                    hover:text-blue-600
                    dark:hover:text-blue-400
                    hover:bg-blue-50/50
                    dark:hover:bg-blue-500/5
                    transition-all
                    duration-300
                    transform
                    hover:-translate-y-1
                    font-semibold
                    text-sm
                    sm:text-base
                    backdrop-blur-sm
                  "
                >

                  {t('contactMe')}

                </button>

              </div>

            </AnimatedSection>


            {/* =================================================
                SOCIAL LINKS
            ================================================== */}

            <AnimatedSection
              animation="slideUp"
              delay={800}
            >

              <div
                className="
                  flex
                  items-center
                  justify-center
                  lg:justify-start
                  gap-3
                  sm:gap-4
                  pt-1
                  sm:pt-2
                "
              >

                {[
                  {
                    Icon: FiLinkedin,
                    href: '#',
                    label: 'LinkedIn',
                    color:
                      'hover:text-blue-600 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/10',
                  },

                  {
                    Icon: FiGithub,
                    href: '#',
                    label: 'GitHub',
                    color:
                      'hover:text-gray-900 dark:hover:text-white hover:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800',
                  },

                  {
                    Icon: FiTwitter,
                    href: '#',
                    label: 'Twitter',
                    color:
                      'hover:text-blue-400 hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10',
                  },

                  {
                    Icon: SiBehance,
                    href: '#',
                    label: 'Behance',
                    color:
                      'hover:text-blue-500 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/10',
                  },
                ].map(
                  ({
                    Icon,
                    href,
                    label,
                    color,
                  }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className={`
                        w-10
                        h-10
                        sm:w-11
                        sm:h-11
                        flex
                        items-center
                        justify-center
                        rounded-xl
                        bg-gray-100
                        dark:bg-gray-800
                        border
                        border-transparent
                        text-gray-500
                        dark:text-gray-400
                        ${color}
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:shadow-lg
                      `}
                    >

                      <Icon size={18} />

                    </a>
                  )
                )}

              </div>

            </AnimatedSection>

          </div>

        </div>

      </div>
    </section>
  );
};
