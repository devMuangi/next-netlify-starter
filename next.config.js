// next.config.js
const withPWA = require('next-pwa')({
    dest:'public'
});

module.exports = withPWA({
//   pwa: {
//     dest: 'public', // Specify the output directory for the PWA files
//   },
//   reactStrictMode: true, // Enable React strict mode
});
