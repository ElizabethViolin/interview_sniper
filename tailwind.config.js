/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        }
      },
      animation: {
        'slow-wiggle': 'wiggle 3s ease-in-out infinite',
      },
      width: {
        100: "25rem", // 400px
        104: "26rem", // 416px
        108: "27rem", // 432px
        112: "28rem", // 448px
        116: "29rem", // 464px
        120: "30rem", // 480px
        124: "31rem", // 496px
        128: "32rem", // 512px
        132: "33rem", // 528px
        136: "34rem", // 544px
        140: "35rem", // 560px
        144: "36rem", // 576px
        148: "37rem", // 592px
        152: "38rem", // 608px
        156: "39rem", // 624px
        160: "40rem", // 640px
        164: "41rem", // 656px
        168: "42rem", // 672px
        172: "43rem", // 688px
        176: "44rem", // 704px
        180: "45rem", // 720px
        184: "46rem", // 736px
        188: "47rem", // 752px
        192: "48rem", // 768px
        196: "49rem", // 784px
        200: "50rem", // 800px
      },
      fontFamily: {
        'serif-system': ['Georgia', 'Times New Roman', 'Palatino', 'Garamond', 'serif'],
      },
    },
  },
  plugins: [],
};
