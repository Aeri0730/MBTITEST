/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // React 프로젝트
    "./public/index.html", // Vite 프로젝트의 경우 필요할 수도 있음
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
