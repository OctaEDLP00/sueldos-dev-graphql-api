import { getEndpointFecth } from '../utils/getEndpointFetch.js'
import { parseCountry } from '../utils/parseCountry.js'

export const CountryData = async country => await getEndpointFecth(`https://sueldos.dev/api/get-country-data?country=${parseCountry(country)}`)

export const FilteredSalary = async country => await getEndpointFecth(`https://sueldos.dev/api/filtered-salary?country=${parseCountry(country)}`)

// console.log({ countryData, filteredSalary })
