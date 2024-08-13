/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Add your custom scrollbar styles
      scrollbar: {
        width: "12px", // Width of the scrollbar
        trackColor: "#f1f1f1", // Color of the scrollbar track
        thumbColor: "#888", // Color of the scrollbar thumb
        thumbHoverColor: "#555", // Color of the scrollbar thumb on hover
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"), // Include the scrollbar plugin
  ],
};
