const COUNTRIES_DICTIONARY = {
  ARGENTINA: 'arg',
  BOLIVIA: 'bol',
  BRASIL: 'bra',
  CHILE: 'chl',
  COLOMBIA: 'col',
  COSTA_RICA: 'cri',
  CUBA: 'cub',
  ECUADOR: 'ecu',
  EL_SALVADOR: 'slv',
  ESPANA: 'es',
  GUATEMALA: 'gtm',
  HAITI: 'hti',
  HONDURAS: 'hnd',
  MEXICO: 'mex',
  NICARAGUA: 'nic',
  PANAMA: 'pan',
  PARAGUAY: 'pry',
  PERU: 'per',
  REPUBLICA_DOMINICANA: 'dom',
  URUGUAY: 'ury',
  VENEZUELA: 'ven'
}

export function parseCountry(country) {
  if (country === 'ARGENTINA') return COUNTRIES_DICTIONARY.ARGENTINA
  if (country === 'BOLIVIA') return COUNTRIES_DICTIONARY.BOLIVIA
  if (country === 'BRASIL') return COUNTRIES_DICTIONARY.BRASIL
  if (country === 'CHILE') return COUNTRIES_DICTIONARY.CHILE
  if (country === 'COLOMBIA') return COUNTRIES_DICTIONARY.COLOMBIA
  if (country === 'COSTA_RICA') return COUNTRIES_DICTIONARY.COSTA_RICA
  if (country === 'CUBA') return COUNTRIES_DICTIONARY.CUBA
  if (country === 'ECUADOR') return COUNTRIES_DICTIONARY.ECUADOR
  if (country === 'EL_SALVADOR') return COUNTRIES_DICTIONARY.EL_SALVADOR
  if (country === 'ESPANA') return COUNTRIES_DICTIONARY.ESPANA
  if (country === 'GUATEMALA') return COUNTRIES_DICTIONARY.GUATEMALA
  if (country === 'HAITI') return COUNTRIES_DICTIONARY.HAITI
  if (country === 'HONDURAS') return COUNTRIES_DICTIONARY.HONDURAS
  if (country === 'MEXICO') return COUNTRIES_DICTIONARY.MEXICO
  if (country === 'NICARAGUA') return COUNTRIES_DICTIONARY.NICARAGUA
  if (country === 'PANAMA') return COUNTRIES_DICTIONARY.PANAMA
  if (country === 'PARAGUAY') return COUNTRIES_DICTIONARY.PARAGUAY
  if (country === 'PERU') return COUNTRIES_DICTIONARY.PERU
  if (country === 'REPUBLICA_DOMINICANA') return COUNTRIES_DICTIONARY.REPUBLICA_DOMINICANA
  if (country === 'URUGUAY') return COUNTRIES_DICTIONARY.URUGUAY
  if (country === 'VENEZUELA') return COUNTRIES_DICTIONARY.VENEZUELA
}

