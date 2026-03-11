import React from 'react';
import icons from '@/assets/icons/index';
import { portfolioData } from '../data/data';

const Skills: React.FC = () => {
  const skills = portfolioData.skills;
  const begginer = portfolioData.skillsBegginer;

  return (
    <section id="Skills" className="h-fit grid place-items-center w-full py-30">
      <div className="grid gap-10 place-items-center px-20">
        <h2 className="text-6xl font-bold text-center w-full">Skills</h2>

        <div className="grid md:grid-cols-3 gap-10">
          <ServicesContainer
            title={'Website Development'}
            body={
              'I build modern, responsive, and user-friendly websites using the latest technologies.'
            }
          ></ServicesContainer>
          <ServicesContainer
            title={'UI/UX Design'}
            body={
              'I design intuitive and visually appealing user interfaces that enhance user experience.'
            }
          ></ServicesContainer>
          <ServicesContainer
            title={'SEO Audits & Google Ads'}
            body={
              'I identify SEO opportunities and optimize Google Ads campaigns to boost traffic and conversions.'
            }
          ></ServicesContainer>
        </div>

        <div className="flex flex-wrap justify-center gap-6 w-full lg:w-11/12 md:w-9/12">
          {skills.map((skill, index) => {
            const IconComponent = icons[skill as keyof typeof icons];

            return (
              <div
                key={index}
                className="w-fit h-fit !box-border relative group text-center"
              >
                <div className="absolute inset-0 rounded-md bg-[var(--tint)] opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-300 z-0"></div>

                <div className="relative z-10 bg-neutral-800 text-white p-5 rounded-md border-2 border-neutral-700 hover:border-[var(--tint)] flex justify-center items-center transition-all duration-300">
                  {IconComponent ? (
                    <IconComponent className="w-16 h-16" />
                  ) : (
                    <span className="text-sm text-gray-400">{skill}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid gap-10 place-items-center w-full">
          <h2 className="text-3xl font-bold text-center w-full">
            Intermediate
          </h2>

          <div className="flex flex-wrap justify-center gap-6 w-full lg:w-11/12 md:w-9/12">
            {begginer.map((skill, index) => {
              const IconComponent = icons[skill as keyof typeof icons];

              return (
                <div
                  key={index}
                  className="w-fit h-fit !box-border relative group text-center"
                >
                  <div className="absolute inset-0 rounded-md bg-[var(--tint)] opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-300 z-0"></div>

                  <div className="relative z-10 bg-neutral-800 text-white p-5 rounded-md border-2 border-neutral-700 hover:border-[var(--tint)] flex justify-center items-center transition-all duration-300">
                    {IconComponent ? (
                      <IconComponent className="w-16 h-16" />
                    ) : (
                      <span className="text-sm text-gray-400">{skill}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

type ServicesContainer = {
  title: string;
  body: string;
};

const ServicesContainer: React.FC<ServicesContainer> = ({ title, body }) => {
  return (
    <div className="w-fit h-fit !box-border relative group text-center">
      <div className="absolute inset-0 rounded-md bg-[var(--tint)] opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-300 z-0"></div>

      <div className="relative z-10 bg-neutral-800 text-white p-5 rounded-md border-2 border-neutral-700 hover:border-[var(--tint)] flex justify-center items-center transition-all duration-300">
        <div className="grid gap-2">
          <h2 className="text-3xl font-semibold">{title}</h2>
          <p className="">{body}</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
