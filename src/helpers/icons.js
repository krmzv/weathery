import React from 'react'

import cloud from '../assets/icons/cloud.svg'
import cloudy from '../assets/icons/cloudy.svg'
import moon from '../assets/icons/moon.svg'
import rain from '../assets/icons/rain.svg'
import snowing from '../assets/icons/snowing.svg'
import storm from '../assets/icons/storn.svg'
import sun from '../assets/icons/sun.svg'

export const icons = [
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