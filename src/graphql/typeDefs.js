export const typeDefs = `#graphql
  # Start Globals Types
  type Gender {
    man: Number!
    woman: Number!
    noGender: Number!
  }

  type Modality {
    remote: Number!
    office: Number!
    hybrid: Number!
    mostlyRemote: Number!
  }

  type Experience {
    trainee: Number!
    junior: Number!
    senior: Number!
  }

  type Studies {
    bootcamp: Number!
    formal: Number!
    self: Number!
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
    remote: Number!
    office: Number!
    hybrid: Number!
    mostlyRemote: Number!
  }

  type JuniorModality {
    remote: Number!
    office: Number!
    hybrid: Number!
    mostlyRemote: Number!
  }

  type SeniorModality {
    remote: Number!
    office: Number!
    hybrid: Number!
    mostlyRemote: Number!
  }

  type TraineeGender {
    man: Number!
    woman: Number!
    noGender: Number
  }

  type JuniorGender {
    man: Number!
    woman: Number!
    noGender: Number!
  }

  type SeniorGender {
    man: Number!
    woman: Number!
    noGender: Number!
  }

  type AverageSalaries {
    total: Number!
    gender: Gender!
    modality: Modality!
    experience: Experience!
    studies: Studies!
    modalityAndExperience: ModalityAndExperience!
    genderAndExperience: GenderAndExperience!
  }

  type Count {
    total: Number!
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
    count: Number!
    salary: Number!
    happiness: Number!
  }

  type filterSalary {
    result: Result!
  }
  # End Filter Salary

  enum Countries {
    ARGENTINA
    BOLIVIA
    BRASIL
    CHILE
    COLOMBIA
    COSTA RICA
    CUBA
    ECUADOR
    EL SALVADOR
    ESPANA
    GUATEMALA
    HAITI
    HONDURAS
    MEXICO
    NICARAGUA
    PANAMA
    PARAGUAY
    PERU
    REPUBLICA DOMINICANA
    URUGUAY
    VENEZUELA
  }

  type Query {
    countryDataByCountry(country: Countries!): countryData!
    filterSalaryByCountry(country: Countries!): filterSalary!
  }
`
