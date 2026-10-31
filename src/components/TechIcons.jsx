'use client';

import * as React from 'react';

// 1. React - Official Atom Vector Logo
export function ReactIcon({ className = 'w-8 h-8' }) {
  return (
    <svg
      viewBox="-11.5 -10.23174 23 20.46348"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="React logo"
    >
      <title>React.js</title>
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

// 2. Redux - Official Purple Loop / Tri-Node Logo
export function ReduxIcon({ className = 'w-8 h-8' }) {
  return (
    <svg
      viewBox="0 0 128 128"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Redux logo"
    >
      <title>Redux</title>
      <path
        fill="#764ABC"
        d="M88.69 88.11c-9 18.4-24.76 30.78-45.61 34.85a39.73 39.73 0 0 1-9.77 1.14c-12 0-23-5-28.34-13.19C-2.2 100-4.64 76.87 19 59.76c.48 2.61 1.46 6.19 2.11 8.31A38.24 38.24 0 0 0 10 81.1c-4.4 8.64-3.91 17.27 1.3 25.25c3.6 5.38 9.3 8.65 16.63 9.65a44 44 0 0 0 26.55-5c12.71-6.68 21.18-14.66 26.72-25.57a9.32 9.32 0 0 1-2.61-6A9.12 9.12 0 0 1 87.37 70h.34a9.15 9.15 0 0 1 1 18.25zm28.67-20.2c12.21 13.84 13.84 12.54 30.13 7.82 39.58c-4.4 8.63-16 17.27-31.6 17.27a50.48 50.48 0 0 1-21-5.05c2.29-1.63 5.54-4.24 7.33-7.33-5.87a41.54 41.54 0 0 0 16 3.42c10.1 0 17.75-4.72 22.31-13.35c2.93-5.7 3.1-12.38.33-19.22z"
      />
    </svg>
  );
}

// 3. JavaScript - Official Yellow & Black JS Badge
export function JavascriptIcon({ className = 'w-8 h-8' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="JavaScript logo"
    >
      <title>JavaScript</title>
      <rect width="24" height="24" rx="3.5" fill="#F7DF1E" />
      <path
        fill="#000000"
        d="M6.3 18.1c.3.5.7.9 1.3 1.2.6.3 1.4.4 2.3.2.6-.1 1.1-.4 1.4-.9.4-.6.3-1.4.3-2.3 0-1.4 0-2.8 0-4.2H9.8c0 1.3 0 2.6 0 3.9 0 .5 0 .9-.2 1.1-.2.2-.6.3-.9.2-.3-.1-.5-.3-.6-.6-.1-.1-.1-.1-.1-.1L6.3 18.1zm11.5-.2c-.1-.7-.6-1.3-1.9-1.9-.5-.2-1-.4-1.2-.8-.1-.2-.1-.3 0-.5.1-.4.6-.5 1-.4.3.1.5.3.7.6.7-.4.7-.4 1.2-.7-.2-.3-.3-.4-.4-.5-.4-.5-1-.7-1.9-.7-.5 0-.9.1-1.2.3-.4.1-.9.4-1.1.7-.8.9-.5 2.4.4 3 .9.7 2.2.8 2.4 1.5.2.8-.6 1-1.3.9-.5-.1-.8-.4-1.2-.9l-1.2.7c.1.3.3.5.5.7 1.2 1.2 4.1 1.1 4.6-.7 0-.1.2-.5 0-1.1z"
      />
    </svg>
  );
}

// 4. Node.js - Official Hexagonal Green Node Logo
export function NodejsIcon({ className = 'w-8 h-8' }) {
  return (
    <svg
      viewBox="0 0 256 292"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Node.js logo"
    >
      <title>Node.js</title>
      <path
        fill="#5FA04E"
        d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z"
      />
      <path
        fill="#FFFFFF"
        d="M102 96h24v100h-24V134l-20 30-20-30v62H38V96h24l20 32 20-32z"
        opacity="0.95"
      />
    </svg>
  );
}

// 5. Express.js - Official "ex" Logo
export function ExpressIcon({ className = 'w-8 h-8' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Express.js logo"
    >
      <title>Express.js</title>
      <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" />
    </svg>
  );
}

// 6. MongoDB - Official Leaf Logo
export function MongodbIcon({ className = 'w-8 h-8' }) {
  return (
    <svg
      viewBox="0 0 250 250"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="MongoDB logo"
    >
      <title>MongoDB</title>
      <g>
        {/* Stem */}
        <path
          fill="#A6A385"
          d="m132.118576,245.311905l-6.359024,-2.172424c0,0 0.776367,-32.416153 -10.856194,-34.742371c-7.755051,-8.99585 1.240746,-381.551559 29.158333,-1.240768c0,0 -9.615448,4.807755 -11.322021,13.02858c-1.861847,8.065567 -0.621094,25.126984 -0.621094,25.126984l0,0l0,0z"
        />
        {/* Right Leaf */}
        <path
          fill="#499D4A"
          d="m133.219955,217.975906c0,0 62.153046,-34.939911 43.96405,-116.754906c-12.562012,-55.3708 -42.188004,-73.5177 -45.444,-80.497801c-3.567001,-4.963 -6.980003,-13.64824 -6.980003,-13.64824l2.326996,154.015036c0,0.156006 -6.245499,51.043503 6.008507,56.782501"
        />
        {/* Left Leaf */}
        <path
          fill="#58AA50"
          d="m122.50312,215.996826c0,0 -52.269646,-35.674057 -49.167053,-98.489357c2.945869,-62.816769 39.86071,-93.681702 46.994659,-99.265772c4.6539,-4.962999 4.809174,-6.824864 5.119713,-11.787839c3.256439,6.980127 2.63678,104.384009 3.101166,115.86132c1.396027,44.204063 -2.481499,85.306969 -6.048485,93.681648l0,0l0,0z"
        />
      </g>
    </svg>
  );
}
