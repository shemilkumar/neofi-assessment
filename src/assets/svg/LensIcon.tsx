import { FC } from "react";

interface LensIconProps {
  className?: string;
}

const LensIcon: FC<LensIconProps> = ({ className = "" }) => {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 24.00 24.00"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />

      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#CCCCCC"
        strokeWidth="0.048"
      />

      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M19.9604 11.4802C19.9604 13.8094 19.0227 15.9176 17.5019 17.4512C16.9332 18.0247 16.2834 18.5173 15.5716 18.9102C14.3594 19.5793 12.9658 19.9604 11.4802 19.9604C6.79672 19.9604 3 16.1637 3 11.4802C3 6.79672 6.79672 3 11.4802 3C16.1637 3 19.9604 6.79672 19.9604 11.4802Z"
          stroke="#D2D2D2"
          strokeWidth="1.392"
        />{" "}
        <path
          d="M18.1553 18.1553L21.8871 21.8871"
          stroke="#D2D2D2"
          strokeWidth="1.392"
          strokeLinecap="round"
        />{" "}
      </g>
    </svg>
  );
};

export default LensIcon;
