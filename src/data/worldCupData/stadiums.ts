type Stadium = {
  title: string;
  city: string;
  country: string;
}

type CountryStadiums = {
  [stadiumKey: string]: Stadium;
}

type Stadiums = {
  [countryKey: string]: CountryStadiums;
}

export const stadiums: Stadiums = {
  noMatch: {
    noPlace: {
      title: "",
      city: "",
      country: "",
    }
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
    }
  },
  Italy: {
    ferraris: {
      title: "Stadio Luigi Ferraris",
      city: "Genoa",
      country: "Italy",
    },
    ascarelli: {
      title: "Stadio Giorgio Ascarelli",
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
    littorio: {
      title: "Stadio Littorio",
      city: "Trieste",
      country: "Italy",
    },
    littoriale: {
      title: "Stadio Littoriale",
      city: "Bologna",
      country: "Italy",
    },
    mussolini: {
      title: "Stadio Benito Mussolini",
      city: "Turin",
      country: "Italy",
    },
    berta: {
      title: "Stadio Giovanni Berta",
      city: "Florence",
      country: "Italy",
    }
  },
  France: {
    parcDesPrinces: {
      title: "Parc des Princes",
      city: "Paris",
      country: "France",
    },
    velodrome: {
      title: "Vélodrome Municipal",
      city: "Reims",
      country: "France"
    },
    toec: {
      title: "Stade du T.O.E.C.",
      city: "Toulouse",
      country: "France"
    },
    colombes: {
      title: "Stade Olympique de Colombes",
      city: "Paris",
      country: "France"
    },
    meinau: {
      title: "Stade de la Meinau",
      city: "Strasbourg",
      country: "France"
    },
    municipalHavre: {
      title: "Stade municipal",
      city: "Le Havre",
      country: "France"
    },
    parcLescure: {
      title: "Parc Lescure",
      city: "Bordeaux",
      country: "France"
    },
    boucquey: {
      title: "Stade Victor Boucquey",
      city: "Lille",
      country: "France"
    },
    fortCarre: {
      title: "Stade du Fort Carré",
      city: "Antibes",
      country: "France"
    }
  },
  Brazil: {
    maracana: {
      title: "Estádio do Maracanã",
      city: "Rio de Janeiro",
      country: "Brazil"
    },
    independencia: {
      title: "Estádio Independência",
      city: "Belo Horizonte",
      country: "Brazil"
    },
    britto: {
      title: "Estádio Durival de Britto",
      city: "Curitiba",
      country: "Brazil"
    }, 
    pacaembu: {
      title: "Estádio do Pacaembu",
      city: "São Paulo",
      country: "Brazil"
    },
    eucaliptos: {
      title: "Estádio dos Eucaliptos",
      city: "Porto Alegre",
      country: "Brazil"
    },
    retiro: {
      title: "Estádio Ilha do Retiro",
      city: "Recife",
      country: "Brazil"
    }
  },
  Switzerland: {
    wankdorf: {
      title: "Wankdorf Stadium",
      city: "Bern",
      country: "Switzerland"
    },
    hardturm: {
      title: "Hardturm Stadium",
      city: "Zürich",
      country: "Switzerland"
    },
    pontaise: {
      title: "Stade Olympique de la Pontaise",
      city: "Lausanne",
      country: "Switzerland"
    },
    jakob: {
      title: "St. Jakob Stadium",
      city: "Basel",
      country: "Switzerland"
    },
    charmilles: {
      title: "Charmilles Stadium",
      city: "Geneva",
      country: "Switzerland"
    },
    cornaredo: {
      title: "Cornaredo Stadium",
      city: "Lugano",
      country: "Switzerland"
    }
  },
  Sweden: {
    rasunda: {
      title: "Råsunda Stadium",
      city: "Solna",
      country: "Sweden"
    },
    ullevi: {
      title: "Ullevi",
      city: "Gothenburg",
      country: "Sweden"
    },
    malmo: {
      title: "Malmö Stadion",
      city: "Malmö",
      country: "Sweden"
    },
    idrottsparken: {
      title: "Idrottsparken",
      city: "Norrköping",
      country: "Sweden"
    },
    ryavallen: {
      title: "Ryavallen",
      city: "Borås",
      country: "Sweden"
    },
    rimnersvallen: {
      title: "Rimnersvallen",
      city: "Uddevalla",
      country: "Sweden"
    },
    jernvallen: {
      title: "Jernvallen",
      city: "Sandviken",
      country: "Sweden"
    },
    tunavallen: {
      title: "Tunavallen",
      city: "Eskilstuna",
      country: "Sweden"
    },
    eyravallen: {
      title: "Eyravallen",
      city: "Örebro",
      country: "Sweden"
    },
    arosvallen: {
      title: "Arosvallen",
      city: "Västerås",
      country: "Sweden"
    },
    olympiastadion: {
      title: "Olympiastadion",
      city: "Helsingborg",
      country: "Sweden"
    },
    orjansVall: {
      title: "Örjans Vall",
      city: "Halmstad",
      country: "Sweden"
    }
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
    }
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
    }
  },
}




