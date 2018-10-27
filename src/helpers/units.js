export const k2c = (temp) => Math.round(temp - 273.15)

export const isEmptyObj = (obj) => Object.keys(obj).length === 0

export const rand = () => Math.floor(Math.random() * 6) + 1 