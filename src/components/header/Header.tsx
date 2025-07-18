import { useState, useEffect } from 'react';
import Button from '../Button';
import Tilt from 'react-parallax-tilt';

function Header() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1500) {
        setScale(1.5);
      } else {
        setScale(1.3);
      }
    };

    handleResize(); // Set initial
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      className="h-fit overflow-hidden background py-30 grid place-items-center"
      id="Home "
    >
      <div className="grid md:grid-cols-2 place-items-center h-full lg:w-11/12 md:w-9/12 gap-15">
        <div className="grid gap-5">
          <div className="text-5xl md:text-6xl lg:text-7xl mb-6">
            <p>
              <span className="text-accent">Hey there!</span>
              I'm
            </p>
          </div>
          <div className="text-5xl md:text-6xl lg:text-7xl font-bold">
            <p>Lautaro</p>
            <p>Fernandez</p>
            <p>Szutner</p>
          </div>
          <div className="flex gap-4">
            <Button link={'https://github.com/Lau-szutner'}>Github</Button>

            <Button
              link={
                'https://ar.linkedin.com/in/lautaro-fernandez-szutner-203639277?original_referer=https%3A%2F%2Far.linkedin.com%2Fpub%2Fdir%2FLautaro%2FFernandez%2Far-0-Argentina'
              }
            >
              Linkedin
            </Button>

            <Button link={'mailto:lautaroszutner@gmail.com'}>Email</Button>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <Tilt tiltReverse={false} scale={scale}>
            <div className="line">
              <img
                src="/photo-perfil.png"
                alt="Foto de perfil"
                className="rounded-lg"
              />
            </div>
          </Tilt>
        </div>
      </div>
    </header>
  );
}

export default Header;
