const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const flowbite = require('flowbite-react/tailwind');
const { join } = require('path');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/*.{js,jsx,ts,tsx,html}'),
    join(__dirname, '../../dist/ui-components/**/*.{js,jsx,ts,tsx,html}'),
    './node_modules/flowbite-react/**/*.js',
    ...createGlobPatternsForDependencies(__dirname),
    flowbite.content(),
  ],
  corePlugins: {
    arbitrary: true, // Ensure this is not set to `false`
  },
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    plugin(function ({ matchUtilities }) {
      matchUtilities({
        // Class name
        perspective: (value) => {
          return {
            perspective: value, // Desired CSS properties here
          };
        },
      });
    }),
  ],
  safelist: [
    {
      pattern: /^(w|h|text|pt|p|max-h|m|max-w)-\[\d+(\.\d+)?vw\]$/,
      variants: ['md', 'lg'],
    },
  ],
};
