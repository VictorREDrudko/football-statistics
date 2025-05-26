type Stadium = {
  title: string;
  city: string;
  country: string;
};

type CountryStadiums = {
  [stadiumKey: string]: Stadium;
};

type Stadiums = {
  [countryKey: string]: CountryStadiums;
};

export const stadiumsData: Stadiums = {
  noMatch: {
    noPlace: {
      title: "",
      city: "",
      country: "",
    },
  },
  Uruguay: {
    pocitos: {
      title: "Estadio Pocitos",
      city: "Montevideo",
      country: "Uruguay",
    },
    parqueCentral: {
      title: "Estadio Parque Central",
      city: "Montevideo",
      country: "Uruguay",
    },
    centenario: {
      title: "Estadio Centenario",
      city: "Montevideo",
      country: "Uruguay",
    },
  },
  Italy: {
    ferraris: {
      title: "Stadio Luigi Ferraris",
      city: "Genoa",
      country: "Italy",
    },
    nicola: {
      title: "Stadio San Nicola",
      city: "Bari",
      country: "Italy",
    },
    ascarelli: {
      title: "Stadio Giorgio Ascarelli",
      city: "Naples",
      country: "Italy",
    },
    paolo: {
      title: "Stadio San Paolo",
      city: "Naples",
      country: "Italy",
    },
    sanSiro: {
      title: "Stadio San Siro",
      city: "Milan",
      country: "Italy",
    },
    nazionalePNF: {
      title: "Stadio Nazionale PNF",
      city: "Rome",
      country: "Italy",
    },
    olimpico: {
      title: "Stadio Olimpico",
      city: "Rome",
      country: "Italy",
    },
    littorio: {
      title: "Stadio Littorio",
      city: "Trieste",
      country: "Italy",
    },
    santElia: {
      title: "Stadio Sant'Elia",
      city: "Cagliari",
      country: "Italy",
    },
    favorita: {
      title: "Stadio La Favorita",
      city: "Palermo",
      country: "Italy",
    },
    littoriale: {
      title: "Stadio Littoriale",
      city: "Bologna",
      country: "Italy",
    },
    dallAra: {
      title: "Stadio Renato Dall'Ara",
      city: "Bologna",
      country: "Italy",
    },
    friuli: {
      title: "Stadio Friuli",
      city: "Udine",
      country: "Italy",
    },
    mussolini: {
      title: "Stadio Benito Mussolini",
      city: "Turin",
      country: "Italy",
    },
    alpi: {
      title: "Stadio delle Alpi",
      city: "Turin",
      country: "Italy",
    },
    berta: {
      title: "Stadio Giovanni Berta",
      city: "Florence",
      country: "Italy",
    },
    comunale: {
      title: "Stadio Comunale",
      city: "Florence",
      country: "Italy",
    },
    bentegodi: {
      title: "Stadio Marc'Antonio Bentegodi",
      city: "Verona",
      country: "Italy",
    },
  },
  France: {
    france: {
      title: "Stade de France",
      city: "Paris",
      country: "France",
    },
    parcDesPrinces: {
      title: "Parc des Princes",
      city: "Paris",
      country: "France",
    },
    velodrome: {
      title: "Stade Vélodrome",
      city: "Marseille",
      country: "France",
    },
    gerland: {
      title: "Stade de Gerland",
      city: "Lyon",
      country: "France",
    },
    felixBollaert: {
      title: "Stade Félix-Bollaert",
      city: "Lens",
      country: "France",
    },
    beaujoire: {
      title: "Stade de la Beaujoire",
      city: "Nantes",
      country: "France",
    },
    velodromeReims: {
      title: "Vélodrome Municipal",
      city: "Reims",
      country: "France",
    },
    toec: {
      title: "Stade du T.O.E.C.",
      city: "Toulouse",
      country: "France",
    },
    geoffroyGuichard: {
      title: "Stade Geoffroy-Guichard",
      city: "Saint-Étienne",
      country: "France",
    },
    toulouse: {
      title: "Stadium de Toulouse",
      city: "Toulouse",
      country: "France",
    },
    mosson: {
      title: "Stade de la Mosson",
      city: "Montpellier",
      country: "France",
    },
    colombes: {
      title: "Stade Olympique de Colombes",
      city: "Paris",
      country: "France",
    },
    meinau: {
      title: "Stade de la Meinau",
      city: "Strasbourg",
      country: "France",
    },
    municipalHavre: {
      title: "Stade municipal",
      city: "Le Havre",
      country: "France",
    },
    lescure: {
      title: "Parc Lescure",
      city: "Bordeaux",
      country: "France",
    },
    boucquey: {
      title: "Stade Victor Boucquey",
      city: "Lille",
      country: "France",
    },
    fortCarre: {
      title: "Stade du Fort Carré",
      city: "Antibes",
      country: "France",
    },
  },
  Brazil: {
    maracana: {
      title: "Estádio do Maracanã",
      city: "Rio de Janeiro",
      country: "Brazil",
    },
    independencia: {
      title: "Estádio Independência",
      city: "Belo Horizonte",
      country: "Brazil",
    },
    britto: {
      title: "Estádio Durival de Britto",
      city: "Curitiba",
      country: "Brazil",
    },
    pacaembu: {
      title: "Estádio do Pacaembu",
      city: "São Paulo",
      country: "Brazil",
    },
    eucaliptos: {
      title: "Estádio dos Eucaliptos",
      city: "Porto Alegre",
      country: "Brazil",
    },
    retiro: {
      title: "Estádio Ilha do Retiro",
      city: "Recife",
      country: "Brazil",
    },
  },
  Switzerland: {
    wankdorf: {
      title: "Wankdorf Stadium",
      city: "Bern",
      country: "Switzerland",
    },
    hardturm: {
      title: "Hardturm Stadium",
      city: "Zürich",
      country: "Switzerland",
    },
    pontaise: {
      title: "Stade Olympique de la Pontaise",
      city: "Lausanne",
      country: "Switzerland",
    },
    jakob: {
      title: "St. Jakob Stadium",
      city: "Basel",
      country: "Switzerland",
    },
    charmilles: {
      title: "Charmilles Stadium",
      city: "Geneva",
      country: "Switzerland",
    },
    cornaredo: {
      title: "Cornaredo Stadium",
      city: "Lugano",
      country: "Switzerland",
    },
  },
  Sweden: {
    rasunda: {
      title: "Råsunda Stadium",
      city: "Solna",
      country: "Sweden",
    },
    ullevi: {
      title: "Ullevi",
      city: "Gothenburg",
      country: "Sweden",
    },
    malmo: {
      title: "Malmö Stadion",
      city: "Malmö",
      country: "Sweden",
    },
    idrottsparken: {
      title: "Idrottsparken",
      city: "Norrköping",
      country: "Sweden",
    },
    ryavallen: {
      title: "Ryavallen",
      city: "Borås",
      country: "Sweden",
    },
    rimnersvallen: {
      title: "Rimnersvallen",
      city: "Uddevalla",
      country: "Sweden",
    },
    jernvallen: {
      title: "Jernvallen",
      city: "Sandviken",
      country: "Sweden",
    },
    tunavallen: {
      title: "Tunavallen",
      city: "Eskilstuna",
      country: "Sweden",
    },
    eyravallen: {
      title: "Eyravallen",
      city: "Örebro",
      country: "Sweden",
    },
    arosvallen: {
      title: "Arosvallen",
      city: "Västerås",
      country: "Sweden",
    },
    olympiastadion: {
      title: "Olympiastadion",
      city: "Helsingborg",
      country: "Sweden",
    },
    orjansVall: {
      title: "Örjans Vall",
      city: "Halmstad",
      country: "Sweden",
    },
  },
  Chile: {
    nacional: {
      title: "Estadio Nacional",
      city: "Santiago",
      country: "Chile",
    },
    sausalito: {
      title: "Estadio Sausalito",
      city: "Viña del Mar",
      country: "Chile",
    },
    teniente: {
      title: "Estadio El Teniente",
      city: "Rancagua",
      country: "Chile",
    },
    dittborn: {
      title: "Estadio Carlos Dittborn",
      city: "Arica",
      country: "Chile",
    },
  },
  England: {
    wembley: {
      title: "Wembley Stadium",
      city: "London",
      country: "England",
    },
    city: {
      title: "White City Stadium",
      city: "London",
      country: "England",
    },
    oldTrafford: {
      title: "Old Trafford",
      city: "Manchester",
      country: "England",
    },
    goodison: {
      title: "Goodison Park",
      city: "Liverpool",
      country: "England",
    },
    villa: {
      title: "Villa Park",
      city: "Birmingham",
      country: "England",
    },
    hillsborough: {
      title: "Hillsborough Stadium",
      city: "Sheffield",
      country: "England",
    },
    roker: {
      title: "Roker Park",
      city: "Sunderland",
      country: "England",
    },
    ayresome: {
      title: "Ayresome Park",
      city: "Middlesbrough",
      country: "England",
    },
  },
  Mexico: {
    azteca: {
      title: "Estadio Azteca",
      city: "Mexico City",
      country: "Mexico",
    },
    olimpico: {
      title: "Estadio Olímpico Universitario",
      city: "Mexico City",
      country: "Mexico",
    },
    jalisco: {
      title: "Estadio Jalisco",
      city: "Guadalajara",
      country: "Mexico",
    },
    cuauhtemoc: {
      title: "Estadio Cuauhtémoc",
      city: "Puebla City",
      country: "Mexico",
    },
    dosal: {
      title: "Estadio Nemesio Díez",
      city: "Toluca",
      country: "Mexico",
    },
    nouCamp: {
      title: "Estadio Nou Camp",
      city: "León",
      country: "Mexico",
    },
    universitario: {
      title: "Estadio Universitario",
      city: "San Nicolás de los Garza",
      country: "Mexico",
    },
    neza86: {
      title: "Estadio Neza 86",
      city: "Nezahualcóyotl",
      country: "Mexico",
    },
    corregidora: {
      title: "Estadio La Corregidora",
      city: "Querétaro",
      country: "Mexico",
    },
    tecnologico: {
      title: "Estadio Tecnológico",
      city: "Monterrey",
      country: "Mexico",
    },
    chavez: {
      title: "Estadio Sergio León Chávez",
      city: "Irapuato",
      country: "Mexico",
    },
    marzo: {
      title: "Estadio Tres de Marzo",
      city: "Zapopan",
      country: "Mexico",
    },
  },
  Germany: {
    olympiaB: {
      title: "Olympiastadion",
      city: "Berlin",
      country: "Germany",
    },
    allianz: {
      title: "Allianz Arena",
      city: "Munich",
      country: "Germany",
    },
    olympiaM: {
      title: "Olympiastadion",
      city: "Munich",
      country: "Germany",
    },
    neckar: {
      title: "Neckarstadion",
      city: "Stuttgart",
      country: "Germany",
    },
    daimler: {
      title: "Gottlieb-Daimler-Stadion",
      city: "Stuttgart",
      country: "Germany",
    },
    parkGelsenk: {
      title: "Parkstadion",
      city: "Gelsenkirchen",
      country: "Germany",
    },
    aufSchalke: {
      title: "Arena AufSchalke",
      city: "Gelsenkirchen",
      country: "Germany",
    },
    rhein: {
      title: "Rheinstadion",
      city: "Düsseldorf",
      country: "Germany",
    },
    wald: {
      title: "Waldstadion",
      city: "Frankfurt",
      country: "Germany",
    },
    commerzbank: {
      title: "Commerzbank-Arena",
      city: "Frankfurt",
      country: "Germany",
    },
    volkspark: {
      title: "Volksparkstadion",
      city: "Hamburg",
      country: "Germany",
    },
    aol: {
      title: "AOL Arena",
      city: "Hamburg",
      country: "Germany",
    },
    niedersachsen: {
      title: "Niedersachsenstadion",
      city: "Hanover",
      country: "Germany",
    },
    zentral: {
      title: "Zentralstadion",
      city: "Leipzig",
      country: "Germany",
    },
    awd: {
      title: "AWD-Arena",
      city: "Hanover",
      country: "Germany",
    },
    westfalen: {
      title: "Westfalenstadion",
      city: "Dortmund",
      country: "Germany",
    },
    easyCredit: {
      title: "easyCredit-Stadion",
      city: "Nuremberg",
      country: "Germany",
    },
    rheinEnergie: {
      title: "RheinEnergieStadion",
      city: "Cologne",
      country: "Germany",
    },
    fritzWalter: {
      title: "Fritz-Walter-Stadion",
      city: "Kaiserslautern",
      country: "Germany",
    },
    signal: {
      title: "Signal Iduna Park",
      city: "Dortmund",
      country: "Germany",
    },
  },
  Argentina: {
    riverPlate: {
      title: "River Plate Stadium",
      city: "Buenos Aires",
      country: "Argentina",
    },
    amalfitani: {
      title: "José Amalfitani Stadium",
      city: "Buenos Aires",
      country: "Argentina",
    },
    olympic: {
      title: "Olympic Stadium",
      city: "Córdoba",
      country: "Argentina",
    },
    worldCup: {
      title: "World Cup Stadium",
      city: "Aires Province",
      country: "Argentina",
    },
    rosario: {
      title: "Rosario Central Stadium",
      city: "Rosario",
      country: "Argentina",
    },
    mendoza: {
      title: "Mendoza City Stadium",
      city: "Mendoza",
      country: "Argentina",
    },
  },
  Spain: {
    campNou: {
      title: "Camp Nou",
      city: "Barcelona",
      country: "Spain",
    },
    sarria: {
      title: "Sarrià",
      city: "Barcelona",
      country: "Spain",
    },
    bernabeu: {
      title: "Santiago Bernabéu",
      city: "Madrid",
      country: "Spain",
    },
    calderon: {
      title: "Vicente Calderón",
      city: "Madrid",
      country: "Spain",
    },
    pizjuan: {
      title: "Ramón Sánchez Pizjuán",
      city: "Seville",
      country: "Spain",
    },
    villamarin: {
      title: "Benito Villamarín",
      city: "Seville",
      country: "Spain",
    },
    nuevo: {
      title: "Nuevo Estadio",
      city: "Elche",
      country: "Spain",
    },
    casanova: {
      title: "Luis Casanova",
      city: "Valencia",
      country: "Spain",
    },
    mames: {
      title: "San Mamés",
      city: "Bilbao",
      country: "Spain",
    },
    molinon: {
      title: "El Molinón",
      city: "Gijón",
      country: "Spain",
    },
    rosaleda: {
      title: "La Rosaleda",
      city: "Málaga",
      country: "Spain",
    },
    romareda: {
      title: "La Romareda",
      city: "Zaragoza",
      country: "Spain",
    },
    riazor: {
      title: "Riazor",
      city: "A Coruña",
      country: "Spain",
    },
    balaidos: {
      title: "Balaídos",
      city: "Vigo",
      country: "Spain",
    },
    tartiere: {
      title: "Carlos Tartiere",
      city: "Oviedo",
      country: "Spain",
    },
    perez: {
      title: "José Rico Pérez",
      city: "Alicante",
      country: "Spain",
    },
    zorrilla: {
      title: "José Zorrilla",
      city: "Valladolid",
      country: "Spain",
    },
  },
  USA: {
    rose: {
      title: "Rose Bowl",
      city: "Los Angeles",
      country: "United States",
    },
    stanford: {
      title: "Stanford Stadium",
      city: "San Francisco",
      country: "United States",
    },
    pontiac: {
      title: "Pontiac Silverdome",
      city: "Detroit",
      country: "United States",
    },
    giants: {
      title: "Giants Stadium",
      city: "New York",
      country: "United States",
    },
    cotton: {
      title: "Cotton Bowl",
      city: "Dallas",
      country: "United States",
    },
    soldier: {
      title: "Soldier Field",
      city: "Chicago",
      country: "United States",
    },
    citrus: {
      title: "Citrus Bowl",
      city: "Orlando",
      country: "United States",
    },
    foxboro: {
      title: "Foxboro Stadium",
      city: "Boston",
      country: "United States",
    },
    kennedy: {
      title: "Robert F. Kennedy Memorial Stadium",
      city: "Washington",
      country: "United States",
    },
  },
  SouthKorea: {
    daegu: {
      title: "Daegu World Cup Stadium",
      city: "Daegu",
      country: "Korea Republic",
    },
    seoul: {
      title: "Seoul World Cup Stadium",
      city: "Seoul",
      country: "Korea Republic",
    },
    busan: {
      title: "Busan Asiad Stadium",
      city: "Busan",
      country: "Korea Republic",
    },
    incheon: {
      title: "Incheon World Cup Stadium",
      city: "Incheon",
      country: "Korea Republic",
    },
    ulsan: {
      title: "Ulsan Munsu Football Stadium",
      city: "Ulsan",
      country: "Korea Republic",
    },
    suwon: {
      title: "Suwon World Cup Stadium",
      city: "Suwon",
      country: "Korea Republic",
    },
    gwangju: {
      title: "Gwangju World Cup Stadium",
      city: "Gwangju",
      country: "Korea Republic",
    },
    jeonju: {
      title: "Jeonju World Cup Stadium",
      city: "Jeonju",
      country: "Korea Republic",
    },
    jeju: {
      title: "Jeju World Cup Stadium",
      city: "Seogwipo",
      country: "Korea Republic",
    },
    daejeon: {
      title: "Daejeon World Cup Stadium",
      city: "Daejeon",
      country: "Korea Republic",
    },
  },
  Japan: {
    yokohama: {
      title: "International Stadium Yokohama",
      city: "Yokohama",
      country: "Japan",
    },
    saitama: {
      title: "Saitama Stadium",
      city: "Saitama",
      country: "Japan",
    },
    shizuoka: {
      title: "Shizuoka Stadium ECOPA",
      city: "Shizuoka",
      country: "Japan",
    },
    nagai: {
      title: "Nagai Stadium",
      city: "Osaka",
      country: "Japan",
    },
    miyagi: {
      title: "Miyagi Stadium",
      city: "Miyagi",
      country: "Japan",
    },
    oita: {
      title: "Ōita Stadium",
      city: "Ōita",
      country: "Japan",
    },
    niigata: {
      title: "Niigata Stadium",
      city: "Niigata",
      country: "Japan",
    },
    kashima: {
      title: "Kashima Stadium",
      city: "Kashima",
      country: "Japan",
    },
    kobe: {
      title: "Kobe Wing Stadium",
      city: "Kobe",
      country: "Japan",
    },
    sapporo: {
      title: "Sapporo Dome",
      city: "Sapporo",
      country: "Japan",
    },
  }
};
