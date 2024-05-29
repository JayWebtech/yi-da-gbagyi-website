import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-4/6">
              <div className="mb-12 lg:mb-0">
                <h2 className="mb-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]">
                  Meet the Brain behind <br></br><span className="text-primary">Yi da Gbagyi App</span>
                  </h2>
                <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
                <span className="text-primary">Jethro Bhokosai Adamu</span> is a Software Developer with 5 years of experience in the Tech Industry. He holds a Higher National Diploma in Computer Science and is also the Co-Founder of Cryptonect Community.<br></br>Passionate about making an impact, he has utilized his tech skills to solve real-world problems and worked with companies based in countries including the United States, Greece, Pakistan, and Denmark<br></br>He believes in the power of using one's skills to address societal challenges, stating, "Sometimes, making an impact does not require having millions of Naira, you can start from the least level in the society".

                  <br /> <br />
                  Yi da Gbagyi is a project that commenced 5 years ago. Despite encountering numerous challenges along the journey, Jethro persevered, and with the grace of God, the app was successfully launched, marking a significant achievement.
                </p>

               
              </div>
            </div>

            <div className="w-full px-4 lg:w-2/6">
            <div
                    className={`relative mb-4 h-[500px] w-full sm:mb-8 sm:h-[400px] md:h-[540px] lg:h-[400px] xl:h-[500px] rounded-lg`}
                  >
                    <Image
                      src="/images/about/about-image-01.jpg"
                      alt="about image"
                      fill
                      className="h-full w-full object-contain object-center rounded-lg"
                    />
                  </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
