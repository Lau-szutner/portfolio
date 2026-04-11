import Button from '@/components/Button.tsx';
import Tilt from 'react-parallax-tilt';
import { useState, useEffect } from 'react';
import { portfolioData } from '../data/data.ts';

const INITIAL_SCALE_PHOTO = 1;
const LARGE_SCREEN_WIDTH = 1500;
const SCALE_LARGE_SCREEN = 1.5;
const SCALE_SMALL_SCREEN = 1.3;

const { name, title, profileImage } = portfolioData.personalInfo;
const { github, linkedin, email, behance } =
  portfolioData.personalInfo.socialLinks;

function Header() {
  const [scalePhoto, setScalePhoto] = useState(INITIAL_SCALE_PHOTO);

  useEffect(() => {
    const handlePhotoResize = () => {
      if (window.innerWidth > LARGE_SCREEN_WIDTH) {
        setScalePhoto(SCALE_LARGE_SCREEN);
      } else {
        setScalePhoto(SCALE_SMALL_SCREEN);
      }
    };

    handlePhotoResize();
    window.addEventListener('resize', handlePhotoResize);
    return () => window.removeEventListener('resize', handlePhotoResize);
  }, []);

  return (
    <header
      className="h-fit overflow-hidden background py-30 grid place-items-center"
      id="Home"
    >
      <div className="grid md:grid-cols-2 place-items-center h-full lg:w-11/12 md:w-9/12 gap-15">
        <div className="grid gap-5">
          <div className="text-5xl md:text-6xl lg:text-7xl mb-6">
            <p>
              <span className="text-[var(--tint)]">Hey there! </span>
              I'm
            </p>
          </div>
          <div className="text-5xl md:text-6xl lg:text-7xl font-bold">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              {name.split(' ').map((textPart, textPartId) => (
                <p key={textPartId}>{textPart}</p>
              ))}
              <p className="text-xl text-gray-400 font-light my-5">{title}</p>
            </h1>
          </div>
          <div className="flex gap-4">
            <Button link={github}>Github</Button>
            <Button link={linkedin}>Linkedin</Button>
            <Button link={email}>Email</Button>
            <Button link={behance}>Behance</Button>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <Tilt tiltReverse={false} scale={scalePhoto}>
            <div className="line">
              <img
                src={profileImage}
                alt="Foto de perfil"
                className="rounded-lg cursor-pointer"
              />
            </div>
          </Tilt>
        </div>
      </div>
    </header>
  );
}

export default Header;
