import { SVGProps } from 'react';
export default function Html5(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="#E44D26"
        d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198l-45.019 12.48z"
      ></path>
      <path fill="#F16529" d="m64 116.8l36.378-10.086l8.559-95.878H64z"></path>
      <path
        fill="#EBEBEB"
        d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692l3.382 37.927H64zm0 35.743l-.061.017l-15.327-4.14l-.979-10.975H33.816l1.928 21.609l28.193 7.826l.063-.017z"
      ></path>
      <path
        fill="#fff"
        d="M63.952 52.455v13.763h16.947l-1.597 17.849l-15.35 4.143v14.319l28.215-7.82l.207-2.325l3.234-36.233l.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092l.628-6.978l.329-3.692z"
      ></path>
    </svg>
  );
}
