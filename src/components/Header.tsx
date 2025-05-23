import Button from './Button';
import Tilt from 'react-parallax-tilt';
function Header() {
  return (
    <header className="h-screen overflow-hidden background">
      <div className="grid grid-cols-2 md:grid-cols-2 place-items-center h-full ">
        <div className="text-start flex flex-col gap-5">
          <div className="text-5xl sm:text-6xl md:text-7xl mb-10">
            <p>
              <span className="text-accent"> Hey there!, </span>
              I'm
            </p>
          </div>
          <div className="sm:text-6xl md:text-7xl font-bold">
            <p>Lautaro</p>
            <p>Fernandez</p>
            <p>Szutner</p>
          </div>
          <div className="flex gap-4">
            <Button link={'https://github.com/Lau-szutner/portfolio'}>
              Github
            </Button>

            <Button
              link={
                'https://ar.linkedin.com/in/lautaro-fernandez-szutner-203639277?original_referer=https%3A%2F%2Far.linkedin.com%2Fpub%2Fdir%2FLautaro%2FFernandez%2Far-0-Argentina'
              }
            >
              Linkein
            </Button>

            <Button
              link={
                'https://ar.linkedin.com/in/lautaro-fernandez-szutner-203639277?original_referer=https%3A%2F%2Far.linkedin.com%2Fpub%2Fdir%2FLautaro%2FFernandez%2Far-0-Argentina'
              }
            >
              Email
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5 ">
          <Tilt tiltReverse={false} scale={1.2}>
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
