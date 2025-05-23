import { SVGProps } from "react";

const CssIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="blue" // Cambiado a currentColor
    xmlns="http://www.w3.org/2000/svg"
    {...props} // Asegura que puedas pasar clases como className
  >
    <path d="M3 1.5L4.63575 20.0535L12 22.5L19.3643 20.0535L21 1.5H3ZM17.6768 5.25L17.4517 7.467L12.033 9.78225H17.2598L16.6597 16.6545L12.057 18L7.42575 16.6312L7.12575 13.167H9.41775L9.56775 14.9625L12.033 15.5858L14.5972 14.8643L14.7705 11.9767L6.966 11.9535L6.79725 9.783L12.357 7.46775H6.59625L6.324 5.25075L17.6768 5.25Z" />
  </svg>
);

export default CssIcon;
