import React from 'react'

import cloud from '../assets/icons/cloud.svg'
import cloudy from '../assets/icons/cloudy.svg'
import moon from '../assets/icons/moon.svg'
import rain from '../assets/icons/rain.svg'
import refresh from '../assets/icons/refresh.svg'
import snowing from '../assets/icons/snowing.svg'
import storm from '../assets/icons/storn.svg'
import sun from '../assets/icons/sun.svg'

const icons = [
  {
    name: "cloud",
    img: () => <img src={cloud} />
  },
  {
    name: "cloudy",
    img: () => <img src={cloudy} />
  },
  {
    name: "moon",
    img: () => <img src={moon} />
  },
  {
    name: "rain",
    img: () => <img src={rain} />
  },
  {
    name: "refresh",
    img: () => <img src={refresh} />
  },
  {
    name: "snowing",
    img: () => <img src={snowing} />
  },
  {
    name: "storm",
    img: () => <img src={storm} />
  },
  {
    name: "sun",
    img: () => <img src={sun} />
  }
]