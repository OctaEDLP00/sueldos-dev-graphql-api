export const typeDefs = `#graphql
  # Start Globals Types
  type Gender {
    man: Int!
    woman: Int!
    noGender: Int!
  }

  type Modality {
    remote: Int!
    office: Int!
    hybrid: Int!
    mostlyRemote: Int!
  }

  type Experience {
    trainee: Int!
    junior: Int!
    senior: Int!
  }

  type Studies {
    bootcamp: Int!
    formal: Int!
    self: Int!
  }

  type ModalityAndExperience {
    trainee: TraineeModality!
    junior: JuniorModality!
    senior: SeniorModality!
  }

  type GenderAndExperience {
    trainee: TraineeGender!
    junior: JuniorGender!
    senior: SeniorGender!
  }
  # End Globals Types

  # Start Country Data
  type TraineeModality {
    remote: Int!
    office: Int!
    hybrid: Int!
    mostlyRemote: Int!
  }

  type JuniorModality {
    remote: Int!
    office: Int!
    hybrid: Int!
    mostlyRemote: Int!
  }

  type SeniorModality {
    remote: Int!
    office: Int!
    hybrid: Int!
    mostlyRemote: Int!
  }

  type TraineeGender {
    man: Int!
    woman: Int!
    noGender: Int
  }

  type JuniorGender {
    man: Int!
    woman: Int!
    noGender: Int!
  }

  type SeniorGender {
    man: Int!
    woman: Int!
    noGender: Int!
  }

  type AverageSalaries {
    total: Float!
    gender: Gender!
    modality: Modality!
    experience: Experience!
    studies: Studies!
    modalityAndExperience: ModalityAndExperience!
    genderAndExperience: GenderAndExperience!
  }

  type Count {
    total: Int!
    gender: Gender!
    modality: Modality!
    experience: Experience!
    studies: Studies!
    modalityAndExperience: ModalityAndExperience!
    genderAndExperience: GenderAndExperience!
  }

  type Content {
    averageSalaries: AverageSalaries!
    count: Count!
  }

  type countryData {
    content: Content!
  }
  # End Country Data

  # Start Filter Salary
  type Result {
    count: Int!
    salary: Int!
    happiness: Float!
  }

  type filterSalary {
    result: Result!
  }
  # End Filter Salary

  enum Countries {
    # ARGENTINA
    # BOLIVIA
    # BRASIL
    # CHILE
    # COLOMBIA
    # COSTA_RICA
    # CUBA
    # ECUADOR
    # EL_SALVADOR
    ESPANA
    # GUATEMALA
    # HAITI
    # HONDURAS
    # MEXICO
    # NICARAGUA
    # PANAMA
    # PARAGUAY
    # PERU
    # REPUBLICA_DOMINICANA
    # URUGUAY
    # VENEZUELA
  }

  type Query {
    countryDataByCountry(country: Countries!): countryData!
    filterSalaryByCountry(country: Countries!): filterSalary!
  }
`
