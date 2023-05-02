import { CountryData, FilteredSalary } from '../api/endpoints.js'

export const resolvers = {
  Query: {
    countryDataByCountry: async (_, args) => {
      const { country } = args
      return await CountryData(country)
    },
    filterSalaryByCountry: async (_, args) => {
      const { country } = args
      return await FilteredSalary(country)
    }
  }
}
