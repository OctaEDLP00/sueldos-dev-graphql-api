import { getEndpointFecth } from '../utils/getEndpointFetch.js'

export const countryData = getEndpointFecth('https://sueldos.dev/api/get-country-data')
export const filteredSalary = getEndpointFecth('https://sueldos.dev/api/filtered-salary')

// console.log({ countryData, filteredSalary })
