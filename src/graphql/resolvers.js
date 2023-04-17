import { CountryData, FilteredSalary } from '../api/endpoints.js'

export const resolvers = {
  Query: {
    countryDataByCountry: async (root, args) => {
      const { country } = args
      return await CountryData(country)
    },
    filterSalaryByCountry: async (root, args) => {
      const { country } = args
      return await FilteredSalary(country)
    }
  }
}
