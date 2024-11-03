/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "F5F5F5": "#F5F5F5",
        "F7F7F7": "#F7F7F7",
        "1764FF": "#1764FF",
        "969799": "#969799",
        "E6E6E6": "#E6E6E6",
        "FFA939": "#FFA939",
        "333333": "#333333",
        "666666": "#666666",
        "999999": "#999999",
        "1A1A1A": "#1A1A1A",
        "FF8812": "#FF8812",
        "E4EDF5": "#E4EDF5",
        "EEE4F5": "#EEE4F5",
        "F5E5DF": "#F5E5DF",
        "E3F2D8": "#E3F2D8",
        "EBF1FF": "#EBF1FF",
        "F5F8FF": "#F5F8FF",
        "FF4747": "#FF4747",
        "FF3333": "#FF3333",
        "0F0F0F": "#0F0F0F",
        "1C1C1C": "#1C1C1C",
      },
      width: {
        '3.5': '.875rem',
        '7.5': '1.875rem',
        '12.5': '3.125rem',
        '15': '3.75rem',
        '18': '4.5rem',
        '30': '7.5rem',
        '42.5': '10.625rem',
        '50': '12.5rem',
        '62.5': '15.625rem',
      },
      height: {
        '3.5': '.875rem',
        '6.5': '1.625rem',
        '7.5': '1.875rem',
        '15': '3.75rem',
        '18': '4.5rem',
        '30': '7.5rem',
        '42.5': '10.625rem',
        '50': '12.5rem',
        '62.5': '15.625rem',
        "10vh":"10vh",
        "20vh":"20vh",
        "30vh":"30vh",
        "40vh":"40vh",
        "50vh":"50vh",
        "60vh":"60vh",
        "70vh":"70vh",
        "80vh":"80vh",
        "90vh":"90vh",
      },
      maxHeight: {
        "10vh":"10vh",
        "20vh":"20vh",
        "30vh":"30vh",
        "40vh":"40vh",
        "50vh":"50vh",
        "60vh":"60vh",
        "70vh":"70vh",
        "80vh":"80vh",
        "90vh":"90vh",
      },
      padding: {
        '2.5': '.625rem',
        '7.5': '1.875rem'
      },
      margin: {
        '2.5': '.625rem',
        '7.5': '1.875rem'
      },
      borderRadius: {
        10: '0.625rem',
        20: '1.25rem',
        30: '1.875rem'
      },
      lineHeight: {
        '7.5': '1.875rem',
        '12.5': '3.125rem'
      },
      spacing: {
        '2.5': '.625rem',
        '25': '6.25rem',
      }
    },
  },
  plugins: [],
  presets: [
    require('tailwindcss-rem2px-preset').createPreset({
      fontSize: 32,
      unit: 'rpx'
    })
  ]
}