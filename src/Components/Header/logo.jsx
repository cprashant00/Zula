import * as React from "react";

const Logo = (props) => (
  <svg
    {...props}
    width="56"
    height="56"
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      width="56"
      height="56"
      rx="14"
      fill="url(#paint0_linear_2268_2067)"
    />
    <rect
      x="1"
      y="1"
      width="54"
      height="54"
      rx="13"
      stroke="white"
      strokeOpacity="0.3"
      strokeWidth="2"
    />
    <g filter="url(#filter0_dddd_2268_2067)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.0867 16.7799C16.405 16.4417 16.8488 16.25 17.3131 16.25H41.3186C42.7946 16.25 43.5567 18.0137 42.5451 19.0885L38.9786 22.878C38.6603 23.2161 38.2165 23.4079 37.7521 23.4079H13.7466C12.2706 23.4079 11.5086 21.6442 12.5202 20.5694L16.0867 16.7799ZM17.7714 33.622C18.0897 33.2839 18.5334 33.0921 18.9978 33.0921H43.0033C44.4793 33.0921 45.2414 34.8558 44.2298 35.9306L40.6632 39.7201C40.345 40.0583 39.9012 40.25 39.4368 40.25H15.4313C13.9553 40.25 13.1933 38.4863 14.2049 37.4115L17.7714 33.622ZM20.713 26.1093L18.9316 28.2145C18.0055 29.3091 18.7835 30.9866 20.2173 30.9866H32.3092C32.7559 30.9866 33.1843 30.8092 33.5001 30.4933L35.6054 28.3881C36.6664 27.3271 35.9149 25.513 34.4145 25.513H21.9987C21.5033 25.513 21.033 25.7311 20.713 26.1093Z"
        fill="url(#paint1_linear_2268_2067)"
      />
    </g>
    <defs>
      <filter
        id="filter0_dddd_2268_2067"
        x="10.3749"
        y="15.4079"
        width="36.0002"
        height="31.5789"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="0.421048" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_2268_2067"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1.68419" />
        <feGaussianBlur stdDeviation="0.842097" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_dropShadow_2268_2067"
          result="effect2_dropShadow_2268_2067"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="2.52629" />
        <feGaussianBlur stdDeviation="0.842097" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
        />
        <feBlend
          mode="normal"
          in2="effect2_dropShadow_2268_2067"
          result="effect3_dropShadow_2268_2067"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="5.05258" />
        <feGaussianBlur stdDeviation="0.842097" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
        />
        <feBlend
          mode="normal"
          in2="effect3_dropShadow_2268_2067"
          result="effect4_dropShadow_2268_2067"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect4_dropShadow_2268_2067"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_2268_2067"
        x1="28"
        y1="0"
        x2="28"
        y2="56"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0096E6" />
        <stop offset="1" stopColor="#3135FF" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_2268_2067"
        x1="28.375"
        y1="16.25"
        x2="28.375"
        y2="40.25"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="0.574138" stopColor="#D0D7FE" />
      </linearGradient>
    </defs>
  </svg>
);

export default Logo;
