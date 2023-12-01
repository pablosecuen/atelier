
import plugin from 'tailwindcss/plugin';
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter-bold': ['Inter-Bold', 'sans'],
        'atlas-grotesk-regular': ['atlas Grotesk-Regular', 'sans'],
        'atlas-grotesk-medium': ['atlas Grotesk-Medium', 'sans'],
        'atlas-grotesk-bold': ['atlas Grotesk-Bold', 'sans'],
        'canela-regular': ['Canela Regular', 'sans'],
      },
      boxShadowCustom: {
        'inner-bottom': 'inset -5px -10px 10px rgba(0, 0, 0, 1)', 
      },
      colors: {
        primario: '#44937A',     
        secundario: '#d5d5dd',  
        terciario: '#f0e6dc',    
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        blink: {
          '0%': { opacity: 0.2 },
          '20%': { opacity: 1 },
          '100% ': { opacity: 0.2 }
        },
        'pulse-with-scale-slow': {
          '0%, 100%': {
            opacity: '1',
            transform: 'scale(1.00)',
          },
          '50%': {
            opacity: '0.7',
            transform: 'scale(0.98)',
          },
        },
        'pulse-with-scale-fast': {
          '0%, 100%': {
            opacity: '1',
            transform: 'scale(1.05)',
          },
          '50%': {
            opacity: '0.95',
            transform: 'scale(0.95)',
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn .3s ease-in-out',
        carousel: 'marquee 60s linear infinite',
        blink: 'blink 1.4s both infinite',
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-with-scale-slow': 'pulse-with-scale-slow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-with-scale-fast': 'pulse-with-scale-fast 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'landingbg': "url('../public/assets/img_slide_01.png')",
          'dessshirtbg': "url('../public/assets/nimble-made-N0ke5zChVBU-unsplash.jpg')",
          'casualshirtbg': "url('../public/assets/Casual-Shirt.png')",
          'athelierbg': "url('../public/assets/andrews_atelier_tag_1.png')",
          'accesoriesbg': "url('../public/assets/img_Accesories.png')",
          'brandstorebg': "url('../public/assets/img_brand_store.png')",
          'brandstoreblack': "url('../public/assets/img_BRAND STORE.png')",
          'aboutblack': "url('../public/assets/img_ABOUT-OUR-SHIRT.png')",
          'sustentabilityblack': "url('../public/assets/img_SUSTENTABILITY.png')",
          'sutentabilitybg': "url('../public/assets/Recurso4.png')",
          'sutentabilitybg2': "url('../public/assets/Recurso7.png')",
          'sutentabilitybg3': "url('../public/assets/Recurso10.png')",
      },
      
    },
    },
  plugins: [
    require('tailwindcss/plugin'),
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/typography'),
    plugin(({ matchUtilities, theme }:any) => {
      matchUtilities(
        {
          'animation-delay': (value:any) => {
            return {
              'animation-delay': value
            };
          }
        },
        {
          values: theme('transitionDelay')
        },
      );
    })
  ],
}
