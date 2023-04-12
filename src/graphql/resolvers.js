import { countryData, filteredSalary } from '../api/endpoints.js'

export const resolvers = {
  Query: {
    countryDataByCountry: (root, args) => {
      const { country } = args
    },
    filterSalaryByCountry: (root, args) => {
      const { country } = args
    }
  }
}
