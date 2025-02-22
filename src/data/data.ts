import { AboutProject, ConfederationType, DataFifaWorldCup, Menu, NameTournament, NationalTeams, NationalTournaments, StartPage, TeamsConfederation, Tournament } from './type-data'
import backgroundFootballLive from './../assets/football-live.png'
import logoProject from './../assets/logo.png'
import backgroundStartPage from './../assets/background-football.png'
import ratingIcon from './../assets/icon/rating-icon.png'
import projectIcon from './../assets/icon/project-icon.png'
import pitchImg from './../assets/pitch.png'
import iconGermany from './../assets/icon/national/Germany.png'
import flagGermany from './../assets/icon/flag/Germany.png'
import coatOfArmsGermany from './../assets/icon/coat-of-arms/Germany.png'
import iconEngland from './../assets/icon/national/England.png'
import flagEngland from './../assets/icon/flag/England.png'
import coatOfArmsEngland from './../assets/icon/coat-of-arms/England.png'
import iconItaly from './../assets/icon/national/Italy.png'
import flagItaly from './../assets/icon/flag/Italy.png'
import coatOfArmsItaly from './../assets/icon/coat-of-arms/Italy.png'
import iconSpain from './../assets/icon/national/Spain.png'
import flagSpain from './../assets/icon/flag/Spain.png'
import coatOfArmsSpain from './../assets/icon/coat-of-arms/Spain.png'
import iconFrance from './../assets/icon/national/France.png'
import flagFrance from './../assets/icon/flag/France.png'
import coatOfArmsFrance from './../assets/icon/coat-of-arms/France.png'
import iconAlbania from './../assets/icon/national/Albania.png'
import flagAlbania from './../assets/icon/flag/Albania.png'
import coatOfArmsAlbania from './../assets/icon/coat-of-arms/Albania.png'
import iconAndorra from './../assets/icon/national/Andorra.png'
import flagAndorra from './../assets/icon/flag/Andorra.png'
import coatOfArmsAndorra from './../assets/icon/coat-of-arms/Andorra.png'
import iconArmenia from './../assets/icon/national/Armenia.png'
import flagArmenia from './../assets/icon/flag/Armenia.png'
import coatOfArmsArmenia from './../assets/icon/coat-of-arms/Armenia.png'
import iconAustria from './../assets/icon/national/Austria.png'
import flagAustria from './../assets/icon/flag/Austria.png'
import coatOfArmsAustria from './../assets/icon/coat-of-arms/Austria.png'
import iconAzerbaijan from './../assets/icon/national/Azerbaijan.png'
import flagAzerbaijan from './../assets/icon/flag/Azerbaijan.png'
import coatOfArmsAzerbaijan from './../assets/icon/coat-of-arms/Azerbaijan.png'
import iconBelarus from './../assets/icon/national/Belarus.png'
import flagBelarus from './../assets/icon/flag/Belarus.png'
import coatOfArmsBelarus from './../assets/icon/coat-of-arms/Belarus.png'
import iconBelgium from './../assets/icon/national/Belgium.png'
import flagBelgium from './../assets/icon/flag/Belgium.png'
import coatOfArmsBelgium from './../assets/icon/coat-of-arms/Belgium.png'
import iconBosniaAndHerzegovina from './../assets/icon/national/Bosnia-and-Herzegovina.png'
import flagBosniaAndHerzegovina from './../assets/icon/flag/Bosnia-and-Herzegovina.png'
import coatOfArmsBosniaAndHerzegovina from './../assets/icon/coat-of-arms/Bosnia-and-Herzegovina.png'
import iconBulgaria from './../assets/icon/national/Bulgaria.png'
import flagBulgaria from './../assets/icon/flag/Bulgaria.png'
import coatOfArmsBulgaria from './../assets/icon/coat-of-arms/Bulgaria.png'
import iconCroatia from './../assets/icon/national/Croatia.png'
import flagCroatia from './../assets/icon/flag/Croatia.png'
import coatOfArmsCroatia from './../assets/icon/coat-of-arms/Croatia.png'
import iconCyprus from './../assets/icon/national/Cyprus.png'
import flagCyprus from './../assets/icon/flag/Cyprus.png'
import coatOfArmsCyprus from './../assets/icon/coat-of-arms/Cyprus.png'
import iconCzechRepublic from './../assets/icon/national/Czech-Republic.png'
import flagCzechRepublic from './../assets/icon/flag/Czech-Republic.png'
import coatOfArmsCzechRepublic from './../assets/icon/coat-of-arms/Czech-Republic.png'
import iconDenmark from './../assets/icon/national/Denmark.png'
import flagDenmark from './../assets/icon/flag/Denmark.png'
import coatOfArmsDenmark from './../assets/icon/coat-of-arms/Denmark.png'
import iconEstonia from './../assets/icon/national/Estonia.png'
import flagEstonia from './../assets/icon/flag/Estonia.png'
import coatOfArmsEstonia from './../assets/icon/coat-of-arms/Estonia.png'
import iconFaroeIslands from './../assets/icon/national/Faroe-Islands.png'
import flagFaroeIslands from './../assets/icon/flag/Faroe-Islands.png'
import coatOfArmsFaroeIslands from './../assets/icon/coat-of-arms/Faroe-Islands.png'
import iconFinland from './../assets/icon/national/Finland.png'
import flagFinland from './../assets/icon/flag/Finland.png'
import coatOfArmsFinland from './../assets/icon/coat-of-arms/Finland.png'
import iconGeorgia from './../assets/icon/national/Georgia.png'
import flagGeorgia from './../assets/icon/flag/Georgia.png'
import coatOfArmsGeorgia from './../assets/icon/coat-of-arms/Georgia.png'
import iconGibraltar from './../assets/icon/national/Gibraltar.png'
import flagGibraltar from './../assets/icon/flag/Gibraltar.png'
import coatOfArmsGibraltar from './../assets/icon/coat-of-arms/Gibraltar.png'
import iconGreece from './../assets/icon/national/Greece.png'
import flagGreece from './../assets/icon/flag/Greece.png'
import coatOfArmsGreece from './../assets/icon/coat-of-arms/Greece.png'
import iconHungary from './../assets/icon/national/Hungary.png'
import flagHungary from './../assets/icon/flag/Hungary.png'
import coatOfArmsHungary from './../assets/icon/coat-of-arms/Hungary.png'
import iconIceland from './../assets/icon/national/Iceland.png'
import flagIceland from './../assets/icon/flag/Iceland.png'
import coatOfArmsIceland from './../assets/icon/coat-of-arms/Iceland.png'
import iconIsrael from './../assets/icon/national/Israel.png'
import flagIsrael from './../assets/icon/flag/Israel.png'
import coatOfArmsIsrael from './../assets/icon/coat-of-arms/Israel.png'
import iconKazakhstan from './../assets/icon/national/Kazakhstan.png'
import flagKazakhstan from './../assets/icon/flag/Kazakhstan.png'
import coatOfArmsKazakhstan from './../assets/icon/coat-of-arms/Kazakhstan.png'
import iconKosovo from './../assets/icon/national/Kosovo.png'
import flagKosovo from './../assets/icon/flag/Kosovo.png'
import coatOfArmsKosovo from './../assets/icon/coat-of-arms/Kosovo.png'
import iconLatvia from './../assets/icon/national/Latvia.png'
import flagLatvia from './../assets/icon/flag/Latvia.png'
import coatOfArmsLatvia from './../assets/icon/coat-of-arms/Latvia.png'
import iconLiechtenstein from './../assets/icon/national/Liechtenstein.png'
import flagLiechtenstein from './../assets/icon/flag/Liechtenstein.png'
import coatOfArmsLiechtenstein from './../assets/icon/coat-of-arms/Liechtenstein.png'
import iconLithuania from './../assets/icon/national/Lithuania.png'
import flagLithuania from './../assets/icon/flag/Lithuania.png'
import coatOfArmsLithuania from './../assets/icon/coat-of-arms/Lithuania.png'
import iconLuxembourg from './../assets/icon/national/Luxembourg.png'
import flagLuxembourg from './../assets/icon/flag/Luxembourg.png'
import coatOfArmsLuxembourg from './../assets/icon/coat-of-arms/Luxembourg.png'
import iconMalta from './../assets/icon/national/Malta.png'
import flagMalta from './../assets/icon/flag/Malta.png'
import coatOfArmsMalta from './../assets/icon/coat-of-arms/Malta.png'
import iconMoldova from './../assets/icon/national/Moldova.png'
import flagMoldova from './../assets/icon/flag/Moldova.png'
import coatOfArmsMoldova from './../assets/icon/coat-of-arms/Moldova.png'
import iconMontenegro from './../assets/icon/national/Montenegro.png'
import flagMontenegro from './../assets/icon/flag/Montenegro.png'
import coatOfArmsMontenegro from './../assets/icon/coat-of-arms/Montenegro.png'
import iconNetherlands from './../assets/icon/national/Netherlands.png'
import flagNetherlands from './../assets/icon/flag/Netherlands.png'
import coatOfArmsNetherlands from './../assets/icon/coat-of-arms/Netherlands.png'
import iconNorthMacedonia from './../assets/icon/national/North-Macedonia.png'
import flagNorthMacedonia from './../assets/icon/flag/North-Macedonia.png'
import coatOfArmsNorthMacedonia from './../assets/icon/coat-of-arms/North-Macedonia.png'
import iconNorthernIreland from './../assets/icon/national/Northern-Ireland.png'
import flagNorthernIreland from './../assets/icon/flag/Northern-Ireland.png'
import coatOfArmsNorthernIreland from './../assets/icon/coat-of-arms/Northern-Ireland.png'
import iconNorway from './../assets/icon/national/Norway.png'
import flagNorway from './../assets/icon/flag/Norway.png'
import coatOfArmsNorway from './../assets/icon/coat-of-arms/Norway.png'
import iconPoland from './../assets/icon/national/Poland.png'
import flagPoland from './../assets/icon/flag/Poland.png'
import coatOfArmsPoland from './../assets/icon/coat-of-arms/Poland.png'
import iconPortugal from './../assets/icon/national/Portugal.png'
import flagPortugal from './../assets/icon/flag/Portugal.png'
import coatOfArmsPortugal from './../assets/icon/coat-of-arms/Portugal.png'
import iconRepublicOfIreland from './../assets/icon/national/Republic-of-Ireland.png'
import flagRepublicOfIreland from './../assets/icon/flag/Republic-of-Ireland.png'
import coatOfArmsRepublicOfIreland from './../assets/icon/coat-of-arms/Republic-of-Ireland.png'
import iconRomania from './../assets/icon/national/Romania.png'
import flagRomania from './../assets/icon/flag/Romania.png'
import coatOfArmsRomania from './../assets/icon/coat-of-arms/Romania.png'
import iconRussia from './../assets/icon/national/Russia.png'
import flagRussia from './../assets/icon/flag/Russia.png'
import coatOfArmsRussia from './../assets/icon/coat-of-arms/Russia.png'
import iconSanMarino from './../assets/icon/national/San-Marino.png'
import flagSanMarino from './../assets/icon/flag/San-Marino.png'
import coatOfArmsSanMarino from './../assets/icon/coat-of-arms/San-Marino.png'
import iconScotland from './../assets/icon/national/Scotland.png'
import flagScotland from './../assets/icon/flag/Scotland.png'
import coatOfArmsScotland from './../assets/icon/coat-of-arms/Scotland.png'
import iconSerbia from './../assets/icon/national/Serbia.png'
import flagSerbia from './../assets/icon/flag/Serbia.png'
import coatOfArmsSerbia from './../assets/icon/coat-of-arms/Serbia.png'
import iconSlovakia from './../assets/icon/national/Slovakia.png'
import flagSlovakia from './../assets/icon/flag/Slovakia.png'
import coatOfArmsSlovakia from './../assets/icon/coat-of-arms/Slovakia.png'
import iconSlovenia from './../assets/icon/national/Slovenia.png'
import flagSlovenia from './../assets/icon/flag/Slovenia.png'
import coatOfArmsSlovenia from './../assets/icon/coat-of-arms/Slovenia.png'
import iconSweden from './../assets/icon/national/Sweden.png'
import flagSweden from './../assets/icon/flag/Sweden.png'
import coatOfArmsSweden from './../assets/icon/coat-of-arms/Sweden.png'
import iconSwitzerland from './../assets/icon/national/Switzerland.png'
import flagSwitzerland from './../assets/icon/flag/Switzerland.png'
import coatOfArmsSwitzerland from './../assets/icon/coat-of-arms/Switzerland.png'
import iconTurkey from './../assets/icon/national/Turkey.png'
import flagTurkey from './../assets/icon/flag/Turkey.png'
import coatOfArmsTurkey from './../assets/icon/coat-of-arms/Turkey.png'
import iconUkraine from './../assets/icon/national/Ukraine.png'
import flagUkraine from './../assets/icon/flag/Ukraine.png'
import coatOfArmsUkraine from './../assets/icon/coat-of-arms/Ukraine.png'
import iconWales from './../assets/icon/national/Wales.png'
import flagWales from './../assets/icon/flag/Wales.png'
import coatOfArmsWales from './../assets/icon/coat-of-arms/Wales.png'

import iconAlgeria from './../assets/icon/national/Algeria.png'
import flagAlgeria from './../assets/icon/flag/Algeria.png'
import coatOfArmsAlgeria from './../assets/icon/coat-of-arms/Algeria.png'
import iconEgypt from './../assets/icon/national/Egypt.png'
import flagEgypt from './../assets/icon/flag/Egypt.png'
import coatOfArmsEgypt from './../assets/icon/coat-of-arms/Egypt.png'
import iconLibya from './../assets/icon/national/Libya.png'
import flagLibya from './../assets/icon/flag/Libya.png'
import coatOfArmsLibya from './../assets/icon/coat-of-arms/Libya.png'
import iconMorocco from './../assets/icon/national/Morocco.png'
import flagMorocco from './../assets/icon/flag/Morocco.png'
import coatOfArmsMorocco from './../assets/icon/coat-of-arms/Morocco.png'
import iconTunisia from './../assets/icon/national/Tunisia.png'
import flagTunisia from './../assets/icon/flag/Tunisia.png'
import coatOfArmsTunisia from './../assets/icon/coat-of-arms/Tunisia.png'
import iconBenin from './../assets/icon/national/Benin.png'
import flagBenin from './../assets/icon/flag/Benin.png'
import coatOfArmsBenin from './../assets/icon/coat-of-arms/Benin.png'
import iconBurkinaFaso from './../assets/icon/national/Burkina-Faso.png'
import flagBurkinaFaso from './../assets/icon/flag/Burkina-Faso.png'
import coatOfArmsBurkinaFaso from './../assets/icon/coat-of-arms/Burkina-Faso.png'
import iconCapeVerde from './../assets/icon/national/Cape-Verde.png'
import flagCapeVerde from './../assets/icon/flag/Cape-Verde.png'
import coatOfArmsCapeVerde from './../assets/icon/coat-of-arms/Cape-Verde.png'
import iconGambia from './../assets/icon/national/Gambia.png'
import flagGambia from './../assets/icon/flag/Gambia.png'
import coatOfArmsGambia from './../assets/icon/coat-of-arms/Gambia.png'
import iconGhana from './../assets/icon/national/Ghana.png'
import flagGhana from './../assets/icon/flag/Ghana.png'
import coatOfArmsGhana from './../assets/icon/coat-of-arms/Ghana.png'
import iconGuinea from './../assets/icon/national/Guinea.png'
import flagGuinea from './../assets/icon/flag/Guinea.png'
import coatOfArmsGuinea from './../assets/icon/coat-of-arms/Guinea.png'
import iconGuineaBissau from './../assets/icon/national/Guinea-Bissau.png'
import flagGuineaBissau from './../assets/icon/flag/Guinea-Bissau.png'
import coatOfArmsGuineaBissau from './../assets/icon/coat-of-arms/Guinea-Bissau.png'
import iconIvoryCoast from './../assets/icon/national/Ivory-Coast.png'
import flagIvoryCoast from './../assets/icon/flag/Ivory-Coast.png'
import coatOfArmsIvoryCoast from './../assets/icon/coat-of-arms/Ivory-Coast.png'
import iconLiberia from './../assets/icon/national/Liberia.png'
import flagLiberia from './../assets/icon/flag/Liberia.png'
import coatOfArmsLiberia from './../assets/icon/coat-of-arms/Liberia.png'
import iconMali from './../assets/icon/national/Mali.png'
import flagMali from './../assets/icon/flag/Mali.png'
import coatOfArmsMali from './../assets/icon/coat-of-arms/Mali.png'
import iconMauritania from './../assets/icon/national/Mauritania.png'
import flagMauritania from './../assets/icon/flag/Mauritania.png'
import coatOfArmsMauritania from './../assets/icon/coat-of-arms/Mauritania.png'
import iconNiger from './../assets/icon/national/Niger.png'
import flagNiger from './../assets/icon/flag/Niger.png'
import coatOfArmsNiger from './../assets/icon/coat-of-arms/Niger.png'
import iconNigeria from './../assets/icon/national/Nigeria.png'
import flagNigeria from './../assets/icon/flag/Nigeria.png'
import coatOfArmsNigeria from './../assets/icon/coat-of-arms/Nigeria.png'
import iconSenegal from './../assets/icon/national/Senegal.png'
import flagSenegal from './../assets/icon/flag/Senegal.png'
import coatOfArmsSenegal from './../assets/icon/coat-of-arms/Senegal.png'
import iconSierraLeone from './../assets/icon/national/Sierra-Leone.png'
import flagSierraLeone from './../assets/icon/flag/Sierra-Leone.png'
import coatOfArmsSierraLeone from './../assets/icon/coat-of-arms/Sierra-Leone.png'
import iconTogo from './../assets/icon/national/Togo.png'
import flagTogo from './../assets/icon/flag/Togo.png'
import coatOfArmsTogo from './../assets/icon/coat-of-arms/Togo.png'
import iconCameroon from './../assets/icon/national/Cameroon.png'
import flagCameroon from './../assets/icon/flag/Cameroon.png'
import coatOfArmsCameroon from './../assets/icon/coat-of-arms/Cameroon.png'
import iconCentralAfricanRepublic from './../assets/icon/national/Central-African-Republic.png'
import flagCentralAfricanRepublic from './../assets/icon/flag/Central-African-Republic.png'
import coatOfArmsCentralAfricanRepublic from './../assets/icon/coat-of-arms/Central-African-Republic.png'
import iconChad from './../assets/icon/national/Chad.png'
import flagChad from './../assets/icon/flag/Chad.png'
import coatOfArmsChad from './../assets/icon/coat-of-arms/Chad.png'
import iconCongo from './../assets/icon/national/Congo.png'
import flagCongo from './../assets/icon/flag/Congo.png'
import coatOfArmsCongo from './../assets/icon/coat-of-arms/Congo.png'
import iconDRCongo from './../assets/icon/national/DR-Congo.png'
import flagDRCongo from './../assets/icon/flag/DR-Congo.png'
import coatOfArmsDRCongo from './../assets/icon/coat-of-arms/DR-Congo.png'
import iconEquatorialGuinea from './../assets/icon/national/Equatorial-Guinea.png'
import flagEquatorialGuinea from './../assets/icon/flag/Equatorial-Guinea.png'
import coatOfArmsEquatorialGuinea from './../assets/icon/coat-of-arms/Equatorial-Guinea.png'
import iconGabon from './../assets/icon/national/Gabon.png'
import flagGabon from './../assets/icon/flag/Gabon.png'
import coatOfArmsGabon from './../assets/icon/coat-of-arms/Gabon.png'
import iconSãoToméAndPríncipe from './../assets/icon/national/São-Tomé-and-Príncipe.png'
import flagSãoToméAndPríncipe from './../assets/icon/flag/São-Tomé-and-Príncipe.png'
import coatOfArmsSãoToméAndPríncipe from './../assets/icon/coat-of-arms/São-Tomé-and-Príncipe.png'
import iconBurundi from './../assets/icon/national/Burundi.png'
import flagBurundi from './../assets/icon/flag/Burundi.png'
import coatOfArmsBurundi from './../assets/icon/coat-of-arms/Burundi.png'
import iconDjibouti from './../assets/icon/national/Djibouti.png'
import flagDjibouti from './../assets/icon/flag/Djibouti.png'
import coatOfArmsDjibouti from './../assets/icon/coat-of-arms/Djibouti.png'
import iconEritrea from './../assets/icon/national/Eritrea.png'
import flagEritrea from './../assets/icon/flag/Eritrea.png'
import coatOfArmsEritrea from './../assets/icon/coat-of-arms/Eritrea.png'
import iconEthiopia from './../assets/icon/national/Ethiopia.png'
import flagEthiopia from './../assets/icon/flag/Ethiopia.png'
import coatOfArmsEthiopia from './../assets/icon/coat-of-arms/Ethiopia.png'
import iconKenya from './../assets/icon/national/Kenya.png'
import flagKenya from './../assets/icon/flag/Kenya.png'
import coatOfArmsKenya from './../assets/icon/coat-of-arms/Kenya.png'
import iconRwanda from './../assets/icon/national/Rwanda.png'
import flagRwanda from './../assets/icon/flag/Rwanda.png'
import coatOfArmsRwanda from './../assets/icon/coat-of-arms/Rwanda.png'
import iconSomalia from './../assets/icon/national/Somalia.png'
import flagSomalia from './../assets/icon/flag/Somalia.png'
import coatOfArmsSomalia from './../assets/icon/coat-of-arms/Somalia.png'
import iconSouthSudan from './../assets/icon/national/South-Sudan.png'
import flagSouthSudan from './../assets/icon/flag/South-Sudan.png'
import coatOfArmsSouthSudan from './../assets/icon/coat-of-arms/South-Sudan.png'
import iconSudan from './../assets/icon/national/Sudan.png'
import flagSudan from './../assets/icon/flag/Sudan.png'
import coatOfArmsSudan from './../assets/icon/coat-of-arms/Sudan.png'
import iconTanzania from './../assets/icon/national/Tanzania.png'
import flagTanzania from './../assets/icon/flag/Tanzania.png'
import coatOfArmsTanzania from './../assets/icon/coat-of-arms/Tanzania.png'
import iconUganda from './../assets/icon/national/Uganda.png'
import flagUganda from './../assets/icon/flag/Uganda.png'
import coatOfArmsUganda from './../assets/icon/coat-of-arms/Uganda.png'
import iconZanzibar from './../assets/icon/national/Zanzibar.png'
import flagZanzibar from './../assets/icon/flag/Zanzibar.png'
import coatOfArmsZanzibar from './../assets/icon/coat-of-arms/Zanzibar.png'
import iconAngola from './../assets/icon/national/Angola.png'
import flagAngola from './../assets/icon/flag/Angola.png'
import coatOfArmsAngola from './../assets/icon/coat-of-arms/Angola.png'
import iconBotswana from './../assets/icon/national/Botswana.png'
import flagBotswana from './../assets/icon/flag/Botswana.png'
import coatOfArmsBotswana from './../assets/icon/coat-of-arms/Botswana.png'
import iconComoros from './../assets/icon/national/Comoros.png'
import flagComoros from './../assets/icon/flag/Comoros.png'
import coatOfArmsComoros from './../assets/icon/coat-of-arms/Comoros.png'
import iconEswatini from './../assets/icon/national/Eswatini.png'
import flagEswatini from './../assets/icon/flag/Eswatini.png'
import coatOfArmsEswatini from './../assets/icon/coat-of-arms/Eswatini.png'
import iconLesotho from './../assets/icon/national/Lesotho.png'
import flagLesotho from './../assets/icon/flag/Lesotho.png'
import coatOfArmsLesotho from './../assets/icon/coat-of-arms/Lesotho.png'
import iconMadagascar from './../assets/icon/national/Madagascar.png'
import flagMadagascar from './../assets/icon/flag/Madagascar.png'
import coatOfArmsMadagascar from './../assets/icon/coat-of-arms/Madagascar.png'
import iconMalawi from './../assets/icon/national/Malawi.png'
import flagMalawi from './../assets/icon/flag/Malawi.png'
import coatOfArmsMalawi from './../assets/icon/coat-of-arms/Malawi.png'
import iconMauritius from './../assets/icon/national/Mauritius.png'
import flagMauritius from './../assets/icon/flag/Mauritius.png'
import coatOfArmsMauritius from './../assets/icon/coat-of-arms/Mauritius.png'
import iconNamibia from './../assets/icon/national/Namibia.png'
import flagNamibia from './../assets/icon/flag/Namibia.png'
import coatOfArmsNamibia from './../assets/icon/coat-of-arms/Namibia.png'
import iconMozambique from './../assets/icon/national/Mozambique.png'
import flagMozambique from './../assets/icon/flag/Mozambique.png'
import coatOfArmsMozambique from './../assets/icon/coat-of-arms/Mozambique.png'
import iconSeychelles from './../assets/icon/national/Seychelles.png'
import flagSeychelles from './../assets/icon/flag/Seychelles.png'
import coatOfArmsSeychelles from './../assets/icon/coat-of-arms/Seychelles.png'
import iconSouthAfrica from './../assets/icon/national/South-Africa.png'
import flagSouthAfrica from './../assets/icon/flag/South-Africa.png'
import coatOfArmsSouthAfrica from './../assets/icon/coat-of-arms/South-Africa.png'
import iconZambia from './../assets/icon/national/Zambia.png'
import flagZambia from './../assets/icon/flag/Zambia.png'
import coatOfArmsZambia from './../assets/icon/coat-of-arms/Zambia.png'
import iconZimbabwe from './../assets/icon/national/Zimbabwe.png'
import flagZimbabwe from './../assets/icon/flag/Zimbabwe.png'
import coatOfArmsZimbabwe from './../assets/icon/coat-of-arms/Zimbabwe.png'
import iconReunion from './../assets/icon/national/Reunion.png'
import flagReunion from './../assets/icon/flag/Reunion.png'
import coatOfArmsReunion from './../assets/icon/coat-of-arms/Reunion.png'

import iconAustralia from './../assets/icon/national/Australia.png'
import flagAustralia from './../assets/icon/flag/Australia.png'
import coatOfArmsAustralia from './../assets/icon/coat-of-arms/Brunei.png'
import iconBrunei from './../assets/icon/national/Brunei.png'
import flagBrunei from './../assets/icon/flag/Brunei.png'
import coatOfArmsBrunei from './../assets/icon/coat-of-arms/Australia.png'
import iconCambodia from './../assets/icon/national/Cambodia.png'
import flagCambodia from './../assets/icon/flag/Cambodia.png'
import coatOfArmsCambodia from './../assets/icon/coat-of-arms/Cambodia.png'
import iconTimorLeste from './../assets/icon/national/Timor-Leste.png'
import flagTimorLeste from './../assets/icon/flag/Timor-Leste.png'
import coatOfArmsTimorLeste from './../assets/icon/coat-of-arms/Timor-Leste.png'
import iconIndonesia from './../assets/icon/national/Indonesia.png'
import flagIndonesia from './../assets/icon/flag/Indonesia.png'
import coatOfArmsIndonesia from './../assets/icon/coat-of-arms/Indonesia.png'
import iconLaos from './../assets/icon/national/Laos.png'
import flagLaos from './../assets/icon/flag/Laos.png'
import coatOfArmsLaos from './../assets/icon/coat-of-arms/Laos.png'
import iconMalaysia from './../assets/icon/national/Malaysia.png'
import flagMalaysia from './../assets/icon/flag/Malaysia.png'
import coatOfArmsMalaysia from './../assets/icon/coat-of-arms/Malaysia.png'
import iconMyanmar from './../assets/icon/national/Myanmar.png'
import flagMyanmar from './../assets/icon/flag/Myanmar.png'
import coatOfArmsMyanmar from './../assets/icon/coat-of-arms/Myanmar.png'
import iconPhilippines from './../assets/icon/national/Philippines.png'
import flagPhilippines from './../assets/icon/flag/Philippines.png'
import coatOfArmsPhilippines from './../assets/icon/coat-of-arms/Philippines.png'
import iconSingapore from './../assets/icon/national/Singapore.png'
import flagSingapore from './../assets/icon/flag/Singapore.png'
import coatOfArmsSingapore from './../assets/icon/coat-of-arms/Singapore.png'
import iconThailand from './../assets/icon/national/Thailand.png'
import flagThailand from './../assets/icon/flag/Thailand.png'
import coatOfArmsThailand from './../assets/icon/coat-of-arms/Thailand.png'
import iconVietnam from './../assets/icon/national/Vietnam.png'
import flagVietnam from './../assets/icon/flag/Vietnam.png'
import coatOfArmsVietnam from './../assets/icon/coat-of-arms/Vietnam.png'
import iconAfghanistan from './../assets/icon/national/Afghanistan.png'
import flagAfghanistan from './../assets/icon/flag/Afghanistan.png'
import coatOfArmsAfghanistan from './../assets/icon/coat-of-arms/Afghanistan.png'
import iconIran from './../assets/icon/national/Iran.png'
import flagIran from './../assets/icon/flag/Iran.png'
import coatOfArmsIran from './../assets/icon/coat-of-arms/Iran.png'
import iconKyrgyzRepublic from './../assets/icon/national/Kyrgyz-Republic.png'
import flagKyrgyzRepublic from './../assets/icon/flag/Kyrgyz-Republic.png'
import coatOfArmsKyrgyzRepublic from './../assets/icon/coat-of-arms/Kyrgyz-Republic.png'
import iconTajikistan from './../assets/icon/national/Tajikistan.png'
import flagTajikistan from './../assets/icon/flag/Tajikistan.png'
import coatOfArmsTajikistan from './../assets/icon/coat-of-arms/Tajikistan.png'
import iconTurkmenistan from './../assets/icon/national/Turkmenistan.png'
import flagTurkmenistan from './../assets/icon/flag/Turkmenistan.png'
import coatOfArmsTurkmenistan from './../assets/icon/coat-of-arms/Turkmenistan.png'
import iconUzbekistan from './../assets/icon/national/Uzbekistan.png'
import flagUzbekistan from './../assets/icon/flag/Uzbekistan.png'
import coatOfArmsUzbekistan from './../assets/icon/coat-of-arms/Uzbekistan.png'
import iconChina from './../assets/icon/national/China.png'
import flagChina from './../assets/icon/flag/China.png'
import coatOfArmsChina from './../assets/icon/coat-of-arms/China.png'
import iconTaiwan from './../assets/icon/national/Taiwan.png'
import flagTaiwan from './../assets/icon/flag/Taiwan.png'
import coatOfArmsTaiwan from './../assets/icon/coat-of-arms/Taiwan.png'
import iconDPRKorea from './../assets/icon/national/DPR-Korea.png'
import flagDPRKorea from './../assets/icon/flag/DPR-Korea.png'
import coatOfArmsDPRKorea from './../assets/icon/coat-of-arms/DPR-Korea.png'
import iconGuam from './../assets/icon/national/Guam.png'
import flagGuam from './../assets/icon/flag/Guam.png'
import coatOfArmsGuam from './../assets/icon/coat-of-arms/Guam.png'
import iconHongKong from './../assets/icon/national/Hong-Kong.png'
import flagHongKong from './../assets/icon/flag/Hong-Kong.png'
import coatOfArmsHongKong from './../assets/icon/coat-of-arms/Hong-Kong.png'
import iconJapan from './../assets/icon/national/Japan.png'
import flagJapan from './../assets/icon/flag/Japan.png'
import coatOfArmsJapan from './../assets/icon/coat-of-arms/Japan.png'
import iconKoreaRepublic from './../assets/icon/national/Korea-Republic.png'
import flagKoreaRepublic from './../assets/icon/flag/Korea-Republic.png'
import coatOfArmsKoreaRepublic from './../assets/icon/coat-of-arms/Korea-Republic.png'
import iconMacau from './../assets/icon/national/Macau.png'
import flagMacau from './../assets/icon/flag/Macau.png'
import coatOfArmsMacau from './../assets/icon/coat-of-arms/Macau.png'
import iconMongolia from './../assets/icon/national/Mongolia.png'
import flagMongolia from './../assets/icon/flag/Mongolia.png'
import coatOfArmsMongolia from './../assets/icon/coat-of-arms/Mongolia.png'
import iconNorthernMarianaIslands from './../assets/icon/national/Northern-Mariana-Islands.png'
import flagNorthernMarianaIslands from './../assets/icon/flag/Northern-Mariana-Islands.png'
import coatOfArmsNorthernMarianaIslands from './../assets/icon/coat-of-arms/Northern-Mariana-Islands.png'
import iconBangladesh from './../assets/icon/national/Bangladesh.png'
import flagBangladesh from './../assets/icon/flag/Bangladesh.png'
import coatOfArmsBangladesh from './../assets/icon/coat-of-arms/Bangladesh.png'
import iconBhutan from './../assets/icon/national/Bhutan.png'
import flagBhutan from './../assets/icon/flag/Bhutan.png'
import coatOfArmsBhutan from './../assets/icon/coat-of-arms/Bhutan.png'
import iconIndia from './../assets/icon/national/India.png'
import flagIndia from './../assets/icon/flag/India.png'
import coatOfArmsIndia from './../assets/icon/coat-of-arms/India.png'
import iconMaldives from './../assets/icon/national/Maldives.png'
import flagMaldives from './../assets/icon/flag/Maldives.png'
import coatOfArmsMaldives from './../assets/icon/coat-of-arms/Maldives.png'
import iconNepal from './../assets/icon/national/Nepal.png'
import flagNepal from './../assets/icon/flag/Nepal.png'
import coatOfArmsNepal from './../assets/icon/coat-of-arms/Nepal.png'
import iconPakistan from './../assets/icon/national/Pakistan.png'
import flagPakistan from './../assets/icon/flag/Pakistan.png'
import coatOfArmsPakistan from './../assets/icon/coat-of-arms/Pakistan.png'
import iconSriLanka from './../assets/icon/national/Sri-Lanka.png'
import flagSriLanka from './../assets/icon/flag/Sri-Lanka.png'
import coatOfArmsSriLanka from './../assets/icon/coat-of-arms/Sri-Lanka.png'
import iconBahrain from './../assets/icon/national/Bahrain.png'
import flagBahrain from './../assets/icon/flag/Bahrain.png'
import coatOfArmsBahrain from './../assets/icon/coat-of-arms/Bahrain.png'
import iconIraq from './../assets/icon/national/Iraq.png'
import flagIraq from './../assets/icon/flag/Iraq.png'
import coatOfArmsIraq from './../assets/icon/coat-of-arms/Iraq.png'
import iconJordan from './../assets/icon/national/Jordan.png'
import flagJordan from './../assets/icon/flag/Jordan.png'
import coatOfArmsJordan from './../assets/icon/coat-of-arms/Jordan.png'
import iconKuwait from './../assets/icon/national/Kuwait.png'
import flagKuwait from './../assets/icon/flag/Kuwait.png'
import coatOfArmsKuwait from './../assets/icon/coat-of-arms/Kuwait.png'
import iconLebanon from './../assets/icon/national/Lebanon.png'
import flagLebanon from './../assets/icon/flag/Lebanon.png'
import coatOfArmsLebanon from './../assets/icon/coat-of-arms/Lebanon.png'
import iconOman from './../assets/icon/national/Oman.png'
import flagOman from './../assets/icon/flag/Oman.png'
import coatOfArmsOman from './../assets/icon/coat-of-arms/Oman.png'
import iconPalestine from './../assets/icon/national/Palestine.png'
import flagPalestine from './../assets/icon/flag/Palestine.png'
import coatOfArmsPalestine from './../assets/icon/coat-of-arms/Palestine.png'
import iconQatar from './../assets/icon/national/Qatar.png'
import flagQatar from './../assets/icon/flag/Qatar.png'
import coatOfArmsQatar from './../assets/icon/coat-of-arms/Qatar.png'
import iconSaudiArabia from './../assets/icon/national/Saudi-Arabia.png'
import flagSaudiArabia from './../assets/icon/flag/Saudi-Arabia.png'
import coatOfArmsSaudiArabia from './../assets/icon/coat-of-arms/Saudi-Arabia.png'
import iconSyria from './../assets/icon/national/Syria.png'
import flagSyria from './../assets/icon/flag/Syria.png'
import coatOfArmsSyria from './../assets/icon/coat-of-arms/Syria.png'
import iconUnitedArabEmirates from './../assets/icon/national/United-Arab-Emirates.png'
import flagUnitedArabEmirates from './../assets/icon/flag/United-Arab-Emirates.png'
import coatOfArmsUnitedArabEmirates from './../assets/icon/coat-of-arms/United-Arab-Emirates.png'
import iconYemen from './../assets/icon/national/Yemen.png'
import flagYemen from './../assets/icon/flag/Yemen.png'
import coatOfArmsYemen from './../assets/icon/coat-of-arms/Yemen.png'

import iconCanada from './../assets/icon/national/Canada.png'
import flagCanada from './../assets/icon/flag/Canada.png'
import coatOfArmsCanada from './../assets/icon/coat-of-arms/Canada.png'
import iconMexico from './../assets/icon/national/Mexico.png'
import flagMexico from './../assets/icon/flag/Mexico.png'
import coatOfArmsMexico from './../assets/icon/coat-of-arms/Mexico.png'
import iconUnitedStates from './../assets/icon/national/United-States.png'
import flagUnitedStates from './../assets/icon/flag/United-States.png'
import coatOfArmsUnitedStates from './../assets/icon/coat-of-arms/United-States.png'
import iconBelize from './../assets/icon/national/Belize.png'
import flagBelize from './../assets/icon/flag/Belize.png'
import coatOfArmsBelize from './../assets/icon/coat-of-arms/Belize.png'
import iconCostaRica from './../assets/icon/national/Costa-Rica.png'
import flagCostaRica from './../assets/icon/flag/Costa-Rica.png'
import coatOfArmsCostaRica from './../assets/icon/coat-of-arms/Costa-Rica.png'
import iconElSalvador from './../assets/icon/national/El-Salvador.png'
import flagElSalvador from './../assets/icon/flag/El-Salvador.png'
import coatOfArmsElSalvador from './../assets/icon/coat-of-arms/El-Salvador.png'
import iconGuatemala from './../assets/icon/national/Guatemala.png'
import flagGuatemala from './../assets/icon/flag/Guatemala.png'
import coatOfArmsGuatemala from './../assets/icon/coat-of-arms/Guatemala.png'
import iconHonduras from './../assets/icon/national/Honduras.png'
import flagHonduras from './../assets/icon/flag/Honduras.png'
import coatOfArmsHonduras from './../assets/icon/coat-of-arms/Honduras.png'
import iconNicaragua from './../assets/icon/national/Nicaragua.png'
import flagNicaragua from './../assets/icon/flag/Nicaragua.png'
import coatOfArmsNicaragua from './../assets/icon/coat-of-arms/Nicaragua.png'
import iconPanama from './../assets/icon/national/Panama.png'
import flagPanama from './../assets/icon/flag/Panama.png'
import coatOfArmsPanama from './../assets/icon/coat-of-arms/Panama.png'
import iconAnguilla from './../assets/icon/national/Anguilla.png'
import flagAnguilla from './../assets/icon/flag/Anguilla.png'
import coatOfArmsAnguilla from './../assets/icon/coat-of-arms/Anguilla.png'
import iconAntiguaAndBarbuda from './../assets/icon/national/Antigua-and-Barbuda.png'
import flagAntiguaAndBarbuda from './../assets/icon/flag/Antigua-and-Barbuda.png'
import coatOfArmsAntiguaAndBarbuda from './../assets/icon/coat-of-arms/Antigua-and-Barbuda.png'
import iconAruba from './../assets/icon/national/Aruba.png'
import flagAruba from './../assets/icon/flag/Aruba.png'
import coatOfArmsAruba from './../assets/icon/coat-of-arms/Aruba.png'
import iconBahamas from './../assets/icon/national/Bahamas.png'
import flagBahamas from './../assets/icon/flag/Bahamas.png'
import coatOfArmsBahamas from './../assets/icon/coat-of-arms/Bahamas.png'
import iconBarbados from './../assets/icon/national/Barbados.png'
import flagBarbados from './../assets/icon/flag/Barbados.png'
import coatOfArmsBarbados from './../assets/icon/coat-of-arms/Barbados.png'
import iconBermuda from './../assets/icon/national/Bermuda.png'
import flagBermuda from './../assets/icon/flag/Bermuda.png'
import coatOfArmsBermuda from './../assets/icon/coat-of-arms/Bermuda.png'
import iconBonaire from './../assets/icon/national/Bonaire.png'
import flagBonaire from './../assets/icon/flag/Bonaire.png'
import coatOfArmsBonaire from './../assets/icon/coat-of-arms/Bonaire.png'
import iconBritishVirginIslands from './../assets/icon/national/British-Virgin-Islands.png'
import flagBritishVirginIslands from './../assets/icon/flag/British-Virgin-Islands.png'
import coatOfArmsBritishVirginIslands from './../assets/icon/coat-of-arms/British-Virgin-Islands.png'
import iconCaymanIslands from './../assets/icon/national/Cayman-Islands.png'
import flagCaymanIslands from './../assets/icon/flag/Cayman-Islands.png'
import coatOfArmsCaymanIslands from './../assets/icon/coat-of-arms/Cayman-Islands.png'
import iconCuba from './../assets/icon/national/Cuba.png'
import flagCuba from './../assets/icon/flag/Cuba.png'
import coatOfArmsCuba from './../assets/icon/coat-of-arms/Cuba.png'
import iconCuracao from './../assets/icon/national/Curacao.png'
import flagCuracao from './../assets/icon/flag/Curacao.png'
import coatOfArmsCuracao from './../assets/icon/coat-of-arms/Curacao.png'
import iconDominica from './../assets/icon/national/Dominica.png'
import flagDominica from './../assets/icon/flag/Dominica.png'
import coatOfArmsDominica from './../assets/icon/coat-of-arms/Dominica.png'
import iconDominicanRepublic from './../assets/icon/national/Dominican-Republic.png'
import flagDominicanRepublic from './../assets/icon/flag/Dominican-Republic.png'
import coatOfArmsDominicanRepublic from './../assets/icon/coat-of-arms/Dominican-Republic.png'
import iconFrenchGuiana from './../assets/icon/national/French-Guiana.png'
import flagFrenchGuiana from './../assets/icon/flag/French-Guiana.png'
import coatOfArmsFrenchGuiana from './../assets/icon/coat-of-arms/French-Guiana.png'
import iconGrenada from './../assets/icon/national/Grenada.png'
import flagGrenada from './../assets/icon/flag/Grenada.png'
import coatOfArmsGrenada from './../assets/icon/coat-of-arms/Grenada.png'
import iconGuadeloupe from './../assets/icon/national/Guadeloupe.png'
import flagGuadeloupe from './../assets/icon/flag/Guadeloupe.png'
import coatOfArmsGuadeloupe from './../assets/icon/coat-of-arms/Guadeloupe.png'
import iconGuyana from './../assets/icon/national/Guyana.png'
import flagGuyana from './../assets/icon/flag/Guyana.png'
import coatOfArmsGuyana from './../assets/icon/coat-of-arms/Guyana.png'
import iconHaiti from './../assets/icon/national/Haiti.png'
import flagHaiti from './../assets/icon/flag/Haiti.png'
import coatOfArmsHaiti from './../assets/icon/coat-of-arms/Haiti.png'
import iconJamaica from './../assets/icon/national/Jamaica.png'
import flagJamaica from './../assets/icon/flag/Jamaica.png'
import coatOfArmsJamaica from './../assets/icon/coat-of-arms/Jamaica.png'
import iconMartinique from './../assets/icon/national/Martinique.png'
import flagMartinique from './../assets/icon/flag/Martinique.png'
import coatOfArmsMartinique from './../assets/icon/coat-of-arms/Martinique.png'
import iconMontserrat from './../assets/icon/national/Montserrat.png'
import flagMontserrat from './../assets/icon/flag/Montserrat.png'
import coatOfArmsMontserrat from './../assets/icon/coat-of-arms/Montserrat.png'
import iconPuertoRico from './../assets/icon/national/Puerto-Rico.png'
import flagPuertoRico from './../assets/icon/flag/Puerto-Rico.png'
import coatOfArmsPuertoRico from './../assets/icon/coat-of-arms/Puerto-Rico.png'
import iconSaintKittsAndNevis from './../assets/icon/national/Saint-Kitts-and-Nevis.png'
import flagSaintKittsAndNevis from './../assets/icon/flag/Saint-Kitts-and-Nevis.png'
import coatOfArmsSaintKittsAndNevis from './../assets/icon/coat-of-arms/Saint-Kitts-and-Nevis.png'
import iconSaintLucia from './../assets/icon/national/Saint-Lucia.png'
import flagSaintLucia from './../assets/icon/flag/Saint-Lucia.png'
import coatOfArmsSaintLucia from './../assets/icon/coat-of-arms/Saint-Lucia.png'
import iconSaintMartin from './../assets/icon/national/Saint-Martin.png'
import flagSaintMartin from './../assets/icon/flag/Saint-Martin.png'
import coatOfArmsSaintMartin from './../assets/icon/coat-of-arms/Saint-Martin.png'
import iconSaintVincentAndTheGrenadines from './../assets/icon/national/Saint-Vincent-and-the-Grenadines.png'
import flagSaintVincentAndTheGrenadines from './../assets/icon/flag/Saint-Vincent-and-the-Grenadines.png'
import coatOfArmsSaintVincentAndTheGrenadines from './../assets/icon/coat-of-arms/Saint-Vincent-and-the-Grenadines.png'
import iconSintMaarten from './../assets/icon/national/Sint-Maarten.png'
import flagSintMaarten from './../assets/icon/flag/Sint-Maarten.png'
import coatOfArmsSintMaarten from './../assets/icon/coat-of-arms/Sint-Maarten.png'
import iconSuriname from './../assets/icon/national/Suriname.png'
import flagSuriname from './../assets/icon/flag/Suriname.png'
import coatOfArmsSuriname from './../assets/icon/coat-of-arms/Suriname.png'
import iconTrinidadAndTobago from './../assets/icon/national/Trinidad-and-Tobago.png'
import flagTrinidadAndTobago from './../assets/icon/flag/Trinidad-and-Tobago.png'
import coatOfArmsTrinidadAndTobago from './../assets/icon/coat-of-arms/Trinidad-and-Tobago.png'
import iconTurksAndCaicosIslands from './../assets/icon/national/Turks-and-Caicos-Islands.png'
import flagTurksAndCaicosIslands from './../assets/icon/flag/Turks-and-Caicos-Islands.png'
import coatOfArmsTurksAndCaicosIslands from './../assets/icon/coat-of-arms/Turks-and-Caicos-Islands.png'
import iconUSVirginIslands from './../assets/icon/national/U.S.-Virgin-Islands.png'
import flagUSVirginIslands from './../assets/icon/flag/U.S.-Virgin-Islands.png'
import coatOfArmsUSVirginIslands from './../assets/icon/coat-of-arms/U.S.-Virgin-Islands.png'

import iconAmericanSamoa from './../assets/icon/national/American-Samoa.png'
import flagAmericanSamoa from './../assets/icon/flag/American-Samoa.png'
import coatOfArmsAmericanSamoa from './../assets/icon/coat-of-arms/American-Samoa.png'
import iconCookIslands from './../assets/icon/national/Cook-Islands.png'
import flagCookIslands from './../assets/icon/flag/Cook-Islands.png'
import coatOfArmsCookIslands from './../assets/icon/coat-of-arms/Cook-Islands.png'
import iconFiji from './../assets/icon/national/Fiji.png'
import flagFiji from './../assets/icon/flag/Fiji.png'
import coatOfArmsFiji from './../assets/icon/coat-of-arms/Fiji.png'
import iconKiribati from './../assets/icon/national/Kiribati.png'
import flagKiribati from './../assets/icon/flag/Kiribati.png'
import coatOfArmsKiribati from './../assets/icon/coat-of-arms/Kiribati.png'
import iconNewCaledonia from './../assets/icon/national/New-Caledonia.png'
import flagNewCaledonia from './../assets/icon/flag/New-Caledonia.png'
import coatOfArmsNewCaledonia from './../assets/icon/coat-of-arms/New-Caledonia.png'
import iconNewZealand from './../assets/icon/national/New-Zealand.png'
import flagNewZealand from './../assets/icon/flag/New-Zealand.png'
import coatOfArmsNewZealand from './../assets/icon/coat-of-arms/New-Zealand.png'
import iconPapuaNewGuinea from './../assets/icon/national/Papua-New-Guinea.png'
import flagPapuaNewGuinea from './../assets/icon/flag/Papua-New-Guinea.png'
import coatOfArmsPapuaNewGuinea from './../assets/icon/coat-of-arms/Papua-New-Guinea.png'
import iconSamoa from './../assets/icon/national/Samoa.png'
import flagSamoa from './../assets/icon/flag/Samoa.png'
import coatOfArmsSamoa from './../assets/icon/coat-of-arms/Samoa.png'
import iconSolomonIslands from './../assets/icon/national/Solomon-Islands.png'
import flagSolomonIslands from './../assets/icon/flag/Solomon-Islands.png'
import coatOfArmsSolomonIslands from './../assets/icon/coat-of-arms/Solomon-Islands.png'
import iconTahiti from './../assets/icon/national/Tahiti.png'
import flagTahiti from './../assets/icon/flag/Tahiti.png'
import coatOfArmsTahiti from './../assets/icon/coat-of-arms/Tahiti.png'
import iconTonga from './../assets/icon/national/Tonga.png'
import flagTonga from './../assets/icon/flag/Tonga.png'
import coatOfArmsTonga from './../assets/icon/coat-of-arms/Tonga.png'
import iconTuvalu from './../assets/icon/national/Tuvalu.png'
import flagTuvalu from './../assets/icon/flag/Tuvalu.png'
import coatOfArmsTuvalu from './../assets/icon/coat-of-arms/Tuvalu.png'
import iconVanuatu from './../assets/icon/national/Vanuatu.png'
import flagVanuatu from './../assets/icon/flag/Vanuatu.png'
import coatOfArmsVanuatu from './../assets/icon/coat-of-arms/Vanuatu.png'
import iconArgentina from './../assets/icon/national/Argentina.png'
import flagArgentina from './../assets/icon/flag/Argentina.png'
import coatOfArmsArgentina from './../assets/icon/coat-of-arms/Argentina.png'
import iconBolivia from './../assets/icon/national/Bolivia.png'
import flagBolivia from './../assets/icon/flag/Bolivia.png'
import coatOfArmsBolivia from './../assets/icon/coat-of-arms/Bolivia.png'
import iconBrazil from './../assets/icon/national/Brazil.png'
import flagBrazil from './../assets/icon/flag/Brazil.png'
import coatOfArmsBrazil from './../assets/icon/coat-of-arms/Brazil.png'
import iconChile from './../assets/icon/national/Chile.png'
import flagChile from './../assets/icon/flag/Chile.png'
import coatOfArmsChile from './../assets/icon/coat-of-arms/Chile.png'
import iconColombia from './../assets/icon/national/Colombia.png'
import flagColombia from './../assets/icon/flag/Colombia.png'
import coatOfArmsColombia from './../assets/icon/coat-of-arms/Colombia.png'
import iconEcuador from './../assets/icon/national/Ecuador.png'
import flagEcuador from './../assets/icon/flag/Ecuador.png'
import coatOfArmsEcuador from './../assets/icon/coat-of-arms/Ecuador.png'
import iconParaguay from './../assets/icon/national/Paraguay.png'
import flagParaguay from './../assets/icon/flag/Paraguay.png'
import coatOfArmsParaguay from './../assets/icon/coat-of-arms/Paraguay.png'
import iconPeru from './../assets/icon/national/Peru.png'
import flagPeru from './../assets/icon/flag/Peru.png'
import coatOfArmsPeru from './../assets/icon/coat-of-arms/Peru.png'
import iconUruguay from './../assets/icon/national/Uruguay.png'
import flagUruguay from './../assets/icon/flag/Uruguay.png'
import coatOfArmsUruguay from './../assets/icon/coat-of-arms/Uruguay.png'
import iconVenezuela from './../assets/icon/national/Venezuela.png'
import flagVenezuela from './../assets/icon/flag/Venezuela.png'
import coatOfArmsVenezuela from './../assets/icon/coat-of-arms/Venezuela.png'

import iconUefa from './../assets/icon/confederation/icon-uefa.png'
import iconCaf from './../assets/icon/confederation/icon-caf.png'
import iconAfc from './../assets/icon/confederation/icon-afc.png'
import iconConcacaf from './../assets/icon/confederation/icon-concacaf.png'
import iconOfc from './../assets/icon/confederation/icon-ofc.png'
import iconConmebol from './../assets/icon/confederation/icon-conmebol.png'
import iconCup from './../assets/icon/icon-cup.png'

import iconWorldCup from './../assets/icon-cup/world.png'
import iconUefaCup from './../assets/icon-cup/uefa.png'
import iconCafCup from './../assets/icon-cup/caf.png'
import iconAfcCup from './../assets/icon-cup/afc.png'
import iconConmebolCup from './../assets/icon-cup/conmebol.png'
import iconConcacafCup from './../assets/icon-cup/concacaf.png'
import iconOfcCup from './../assets/icon-cup/ofc.png'


import iconMedal from './../assets/icon/icon-medal.png'
import { v1 } from 'uuid'

// DATA
export const nameTeams: TeamsConfederation = {
  uefa: ['Germany', 'England', 'Italy', 'Spain', 'France', 'Albania', 'Andorra', 'Armenia', 'Austria', 'Azerbaijan', 'Belarus', 'Belgium', 'Bosnia and Herzegovina', 'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Faroe Islands', 'Finland', 'Georgia', 'Gibraltar', 'Greece', 'Hungary', 'Iceland', 'Israel', 'Kazakhstan', 'Kosovo', 'Latvia', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Malta', 'Moldova', 'Montenegro', 'Netherlands', 'North Macedonia', 'Northern Ireland', 'Norway', 'Poland', 'Portugal', 'Republic of Ireland', 'Romania', 'Russia', 'San Marino', 'Scotland', 'Serbia', 'Slovakia', 'Slovenia', 'Sweden', 'Switzerland', 'Turkey', 'Ukraine', 'Wales' ],
  caf: ['Algeria', 'Egypt', 'Libya', 'Morocco', 'Tunisia', 'Benin', 'Burkina Faso', 'Cape Verde', 'Gambia', 'Ghana', 'Guinea', 'Guinea-Bissau', 'Ivory Coast', 'Liberia', 'Mali', 'Mauritania', 'Niger', 'Nigeria', 'Senegal', 'Sierra Leone', 'Togo', 'Cameroon', 'Central African Republic', 'Chad', 'Congo', 'DR Congo', 'Equatorial Guinea', 'Gabon', 'São Tomé and Príncipe', 'Burundi', 'Djibouti', 'Eritrea', 'Ethiopia', 'Kenya', 'Rwanda', 'Somalia', 'South Sudan', 'Sudan', 'Tanzania', 'Uganda', 'Zanzibar', 'Angola', 'Botswana', 'Comoros', 'Eswatini', 'Lesotho', 'Madagascar', 'Malawi', 'Mauritius', 'Mozambique', 'Namibia', 'Seychelles', 'South Africa', 'Zambia', 'Zimbabwe', 'Reunion'],
  afc: ['Australia', 'Brunei', 'Cambodia', 'Timor-Leste', 'Indonesia', 'Laos', 'Malaysia', 'Myanmar', 'Philippines', 'Singapore', 'Thailand', 'Vietnam', 'Afghanistan', 'Iran', 'Kyrgyz Republic', 'Tajikistan', 'Turkmenistan', 'Uzbekistan', 'China', 'Taiwan', 'DPR Korea', 'Guam', 'Hong Kong', 'Japan', 'Korea Republic', 'Macau', 'Mongolia', 'Northern Mariana Islands', 'Bangladesh', 'Bhutan', 'India', 'Maldives', 'Nepal', 'Pakistan', 'Sri Lanka', 'Bahrain', 'Iraq', 'Jordan', 'Kuwait', 'Lebanon', 'Oman', 'Palestine', 'Qatar', 'Saudi Arabia', 'Syria', 'United Arab Emirates', 'Yemen'],
  concacaf: ['Canada', 'Mexico', 'United States', 'Belize', 'Costa Rica', 'El Salvador', 'Guatemala', 'Honduras', 'Nicaragua', 'Panama', 'Anguilla', 'Antigua and Barbuda', 'Aruba', 'Bahamas', 'Barbados', 'Bermuda', 'Bonaire', 'British Virgin Islands', 'Cayman Islands', 'Cuba', 'Curaçao', 'Dominica', 'Dominican Republic', 'French Guiana', 'Grenada', 'Guadeloupe', 'Guyana', 'Haiti', 'Jamaica', 'Martinique', 'Montserrat', 'Puerto Rico', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Martin', 'Saint Vincent and the Grenadines', 'Sint Maarten', 'Suriname', 'Trinidad and Tobago', 'Turks and Caicos Islands', 'U.S. Virgin Islands'],
  ofc: ['American Samoa', 'Cook Islands', 'Fiji', 'Kiribati', 'New Caledonia', 'New Zealand', 'Papua New Guinea', 'Samoa', 'Solomon Islands', 'Tahiti', 'Tonga', 'Tuvalu', 'Vanuatu'],
  conmebol: ['Argentina', 'Bolivia', 'Brazil', 'Chile', 'Colombia', 'Ecuador', 'Paraguay', 'Peru', 'Uruguay', 'Venezuela']
}

export const confederation: ConfederationType[] = Object.keys(nameTeams) as ConfederationType[]


export const nationalTeams: NationalTeams = {
  'Germany': {
    id: v1(),
    name: ['Germany'],
    flag: [flagGermany],
    coatOfArms: coatOfArmsGermany,
    associationIcon: iconGermany,
    confederation: 'UEFA',
    confederationIcon: iconUefa,
    associationDate: {
      founded: 1900,
      fifaAffiliation: 1904,
      confederationAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'England': {
    id: v1(),
    name: ['England'],
    flag: [flagEngland],
    coatOfArms: coatOfArmsEngland,
    associationIcon: iconEngland,
    confederation: 'UEFA',
    confederationIcon: iconUefa,
    associationDate: {
      founded: 1863,
      fifaAffiliation: 1905,
      confederationAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Italy': {
    id: v1(),
    name: ['Italy'],
    flag: [flagItaly],
    coatOfArms: coatOfArmsItaly,
    associationIcon: iconItaly,
    confederation: 'UEFA',
    confederationIcon: iconUefa,
    associationDate: {
      founded: 1898,
      fifaAffiliation: 1905,
      confederationAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Spain': {
    id: v1(),
    name: ['Spain'],
    flag: [flagSpain],
    coatOfArms: coatOfArmsSpain,
    associationIcon: iconSpain,
    confederation: 'UEFA',
    confederationIcon: iconUefa,
    associationDate: {
      founded: 1913,
      fifaAffiliation: 1914,
      confederationAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'France': {
    id: v1(),
    name: ['France'],
    flag: [flagFrance],
    coatOfArms: coatOfArmsFrance,
    associationIcon: iconFrance,
    confederation: 'UEFA',
    confederationIcon: iconUefa,
    associationDate: {
      founded: 1919,
      fifaAffiliation: 1919,
      confederationAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Albania': {
    id: v1(),
    name: ['Albania'],
    flag: [flagAlbania],
    coatOfArms: coatOfArmsAlbania,
    associationIcon: iconAlbania,
    confederation: 'UEFA',
    confederationIcon: iconUefa,
    associationDate: {
      founded: 1930,
      fifaAffiliation: 1932,
      confederationAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Andorra': {
    id: v1(),
    name: ['Andorra'],
    flag: [flagAndorra],
    coatOfArms: coatOfArmsAndorra,
    associationIcon: iconAndorra,
    confederation: 'UEFA',
    confederationIcon: iconUefa,
    associationDate: {
      founded: 1994,
      fifaAffiliation: 1996,
      confederationAffiliation: 1996,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Armenia': {
    id: v1(),
    name: ['Armenia'],
    flag: [flagArmenia],
    coatOfArms: coatOfArmsArmenia,
    associationIcon: iconArmenia,
    confederation: 'UEFA',
    confederationIcon: iconUefa,
    associationDate: {
      founded: 1992,
      fifaAffiliation: 1992,
      confederationAffiliation: 1992,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Austria': {
    id: v1(),
    name: ['Austria'],
    flag: [flagAustria],
    coatOfArms: coatOfArmsAustria,
    associationIcon: iconAustria,
    confederation: 'UEFA',
    confederationIcon: iconUefa,
    associationDate: {
      founded: 1904,
      fifaAffiliation: 1905,
      confederationAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Azerbaijan': {
    id: v1(),
    name: ['Azerbaijan'],
    flag: [flagAzerbaijan],
    coatOfArms: coatOfArmsAzerbaijan,
    associationIcon: iconAzerbaijan,
    confederation: 'UEFA',
    confederationIcon: iconUefa,
    associationDate: {
      founded: 1992,
      fifaAffiliation: 1994,
      confederationAffiliation: 1994,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Belarus': {
    id: v1(),
    name: ['Belarus'],
    flag: [flagBelarus],
    coatOfArms: coatOfArmsBelarus,
    associationIcon: iconBelarus,
    confederation: 'UEFA',
    confederationIcon: iconUefa,
    associationDate: {
      founded: 1989,
      fifaAffiliation: 1992,
      confederationAffiliation: 1993,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Belgium': {
    id: v1(),
    name: ['Belgium'],
    flag: [flagBelgium],
    coatOfArms: coatOfArmsBelgium,
    associationIcon: iconBelgium,
    confederation: 'UEFA',
    confederationIcon: iconUefa,
    associationDate: {
      founded: 1895,
      fifaAffiliation: 1904,
      confederationAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Bosnia and Herzegovina': {
    id: v1(),
    name: ['Bosnia and Herzegovina'],
    flag: [flagBosniaAndHerzegovina],
    coatOfArms: coatOfArmsBosniaAndHerzegovina,
    associationIcon: iconBosniaAndHerzegovina,
    confederation: 'UEFA',
    confederationIcon: iconUefa,
    associationDate: {
      founded: 1920,
      fifaAffiliation: 1996,
      confederationAffiliation: 1998,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Bulgaria': {
    id: v1(),
    name: ['Bulgaria'],
    flag: [flagBulgaria],
    coatOfArms: coatOfArmsBulgaria,
    associationIcon: iconBulgaria,
    confederation: 'UEFA',
    confederationIcon: iconUefa,
    associationDate: {
      founded: 1923,
      fifaAffiliation: 1924,
      confederationAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Croatia': {
    id: v1(),
    name: ['Croatia'],
    flag: [flagCroatia],
    coatOfArms: coatOfArmsCroatia,
    associationIcon: iconCroatia,
    confederation: 'UEFA',
    confederationIcon: iconUefa,
    associationDate: {
      founded: 1912,
      fifaAffiliation: 1941,
      confederationAffiliation: 1993,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Cyprus': {
    id: v1(),
    name: ['Cyprus'],
    flag: [flagCyprus],
    coatOfArms: coatOfArmsCyprus,
    associationIcon: iconCyprus,
    confederation: 'UEFA',
    confederationIcon: iconUefa,
    associationDate: {
      founded: 1934,
      fifaAffiliation: 1948,
      confederationAffiliation: 1962,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Czech Republic': {
    id: v1(),
    name: ['Czech Republic'],
    flag: [flagCzechRepublic],
    coatOfArms: coatOfArmsCzechRepublic,
    associationIcon: iconCzechRepublic,
    confederation: 'UEFA',
    confederationIcon: iconUefa,
    associationDate: {
      founded: 1901,
      fifaAffiliation: 1907,
      confederationAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Denmark': {
    id: v1(),
    name: ['Denmark'],
    flag: [flagDenmark],
    coatOfArms: coatOfArmsDenmark,
    associationIcon: iconDenmark,
    confederation: 'UEFA',
    confederationIcon: iconUefa,
    associationDate: {
      founded: 1889,
      fifaAffiliation: 1904,
      confederationAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Estonia': {
    id: v1(),
    name: ['Estonia'],
    flag: [flagEstonia],
    coatOfArms: coatOfArmsEstonia,
    associationIcon: iconEstonia,
    confederation: 'UEFA',
    confederationIcon: iconUefa,
    associationDate: {
      founded: 1921,
      fifaAffiliation: 1923,
      confederationAffiliation: 1992,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Faroe Islands': {
    id: v1(),
    name: ['Faroe Islands'],
    flag: [flagFaroeIslands],
    coatOfArms: coatOfArmsFaroeIslands,
    associationIcon: iconFaroeIslands,
    confederation: 'UEFA',
    confederationIcon: iconUefa,
    associationDate: {
      founded: 1979,
      fifaAffiliation: 1988,
      confederationAffiliation: 1990,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Finland': {
    id: v1(),
    name: ['Finland'],
    flag: [flagFinland],
    coatOfArms: coatOfArmsFinland,
    associationIcon: iconFinland,
    confederation: 'UEFA',
    confederationIcon: iconUefa,
    associationDate: {
      founded: 1907,
      fifaAffiliation: 1908,
      confederationAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Greece': {
    id: v1(),
    name: ['Greece'],
    flag: [flagGreece],
    coatOfArms: coatOfArmsGreece,
    associationIcon: iconGreece,
    confederation: 'UEFA',
    confederationIcon: iconUefa,
    associationDate: {
      founded: 1926,
      fifaAffiliation: 1927,
      confederationAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Gibraltar': {
    id: v1(),
    name: ['Gibraltar'],
    flag: [flagGibraltar],
    coatOfArms: coatOfArmsGibraltar,
    associationIcon: iconGibraltar,
    confederation: 'UEFA',
    confederationIcon: iconUefa,
    associationDate: {
      founded: 1895,
      fifaAffiliation: 2016,
      confederationAffiliation: 2013,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Georgia': {
    id: v1(),
    name: ['Georgia'],
    flag: [flagGeorgia],
    coatOfArms: coatOfArmsGeorgia,
    associationIcon: iconGeorgia,
    confederation: 'UEFA',
    confederationIcon: iconUefa,
    associationDate: {
      founded: 1990,
      fifaAffiliation: 1992,
      confederationAffiliation: 1992,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Hungary': {
    id: v1(),
    name: ['Hungary'],
    flag: [flagHungary],
    coatOfArms: coatOfArmsHungary,
    associationIcon: iconHungary,
    confederation: 'UEFA',
    confederationIcon: iconUefa,
    associationDate: {
      founded: 1901,
      fifaAffiliation: 1906,
      confederationAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Iceland': {
    id: v1(),
    name: ['Iceland'],
    flag: [flagIceland],
    coatOfArms: coatOfArmsIceland,
    associationIcon: iconIceland,
    confederation: 'UEFA',
    confederationIcon: iconUefa,
    associationDate: {
      founded: 1947,
      fifaAffiliation: 1947,
      confederationAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Israel': {
    id: v1(),
    name: ['Israel'],
    flag: [flagIsrael],
    coatOfArms: coatOfArmsIsrael,
    associationIcon: iconIsrael,
    confederation: 'UEFA',
    confederationIcon: iconUefa,
    associationDate: {
      founded: 1928,
      fifaAffiliation: 1929,
      confederationAffiliation: 1994,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Kazakhstan': {
    id: v1(),
    name: ['Kazakhstan'],
    flag: [flagKazakhstan],
    coatOfArms: coatOfArmsKazakhstan,
    associationIcon: iconKazakhstan,
    confederation: 'UEFA',
    confederationIcon: iconUefa,
    associationDate: {
      founded: 1994,
      fifaAffiliation: 1994,
      confederationAffiliation: 2002,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Kosovo': {
    id: v1(),
    name: ['Kosovo'],
    flag: [flagKosovo],
    coatOfArms: coatOfArmsKosovo,
    associationIcon: iconKosovo,
    confederation: 'UEFA',
    confederationIcon: iconUefa,
    associationDate: {
      founded: 2008,
      fifaAffiliation: 2016,
      confederationAffiliation: 2016,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Latvia': {
    id: v1(),
    name: ['Latvia'],
    flag: [flagLatvia],
    coatOfArms: coatOfArmsLatvia,
    associationIcon: iconLatvia,
    confederation: 'UEFA',
    confederationIcon: iconUefa,
    associationDate: {
      founded: 1921,
      fifaAffiliation: 1922,
      confederationAffiliation: 1992,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Liechtenstein': {
    id: v1(),
    name: ['Liechtenstein'],
    flag: [flagLiechtenstein],
    coatOfArms: coatOfArmsLiechtenstein,
    associationIcon: iconLiechtenstein,
    confederation: 'UEFA',
    confederationIcon: iconUefa,
    associationDate: {
      founded: 1934,
      fifaAffiliation: 1974,
      confederationAffiliation: 1974,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Lithuania': {
    id: v1(),
    name: ['Lithuania'],
    flag: [flagLithuania],
    coatOfArms: coatOfArmsLithuania,
    associationIcon: iconLithuania,
    confederation: 'UEFA',
    confederationIcon: iconUefa,
    associationDate: {
      founded: 1922,
      fifaAffiliation: 1923,
      confederationAffiliation: 1992,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Luxembourg': {
    id: v1(),
    name: ['Luxembourg'],
    flag: [flagLuxembourg],
    coatOfArms: coatOfArmsLuxembourg,
    associationIcon: iconLuxembourg,
    confederation: 'UEFA',
    confederationIcon: iconUefa,
    associationDate: {
      founded: 1908,
      fifaAffiliation: 1910,
      confederationAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Malta': {
    id: v1(),
    name: ['Malta'],
    flag: [flagMalta],
    coatOfArms: coatOfArmsMalta,
    associationIcon: iconMalta,
    confederation: 'UEFA',
    confederationIcon: iconUefa,
    associationDate: {
      founded: 1900,
      fifaAffiliation: 1959,
      confederationAffiliation: 1960,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Moldova': {
    id: v1(),
    name: ['Moldova'],
    flag: [flagMoldova],
    coatOfArms: coatOfArmsMoldova,
    associationIcon: iconMoldova,
    confederation: 'UEFA',
    confederationIcon: iconUefa,
    associationDate: {
      founded: 1990,
      fifaAffiliation: 1994,
      confederationAffiliation: 1993,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Montenegro': {
    id: v1(),
    name: ['Montenegro'],
    flag: [flagMontenegro],
    coatOfArms: coatOfArmsMontenegro,
    associationIcon: iconMontenegro,
    confederation: 'UEFA',
    confederationIcon: iconUefa,
    associationDate: {
      founded: 1931,
      fifaAffiliation: 2007,
      confederationAffiliation: 2007,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Netherlands': {
    id: v1(),
    name: ['Netherlands'],
    flag: [flagNetherlands],
    coatOfArms: coatOfArmsNetherlands,
    associationIcon: iconNetherlands,
    confederation: 'UEFA',
    confederationIcon: iconUefa,
    associationDate: {
      founded: 1889,
      fifaAffiliation: 1904,
      confederationAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'North Macedonia': {
    id: v1(),
    name: ['North Macedonia'],
    flag: [flagNorthMacedonia],
    coatOfArms: coatOfArmsNorthMacedonia,
    associationIcon: iconNorthMacedonia,
    confederation: 'UEFA',
    confederationIcon: iconUefa,
    associationDate: {
      founded: 1926,
      fifaAffiliation: 1994,
      confederationAffiliation: 1994,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Northern Ireland': {
    id: v1(),
    name: ['Northern Ireland'],
    flag: [flagNorthernIreland],
    coatOfArms: coatOfArmsNorthernIreland,
    associationIcon: iconNorthernIreland,
    confederation: 'UEFA',
    confederationIcon: iconUefa,
    associationDate: {
      founded: 1880,
      fifaAffiliation: 1911,
      confederationAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Norway': {
    id: v1(),
    name: ['Norway'],
    flag: [flagNorway],
    coatOfArms: coatOfArmsNorway,
    associationIcon: iconNorway,
    confederation: 'UEFA',
    confederationIcon: iconUefa,
    associationDate: {
      founded: 1902,
      fifaAffiliation: 1908,
      confederationAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Poland': {
    id: v1(),
    name: ['Poland'],
    flag: [flagPoland],
    coatOfArms: coatOfArmsPoland,
    associationIcon: iconPoland,
    confederation: 'UEFA',
    confederationIcon: iconUefa,
    associationDate: {
      founded: 1919,
      fifaAffiliation: 1923,
      confederationAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Portugal': {
    id: v1(),
    name: ['Portugal'],
    flag: [flagPortugal],
    coatOfArms: coatOfArmsPortugal,
    associationIcon: iconPortugal,
    confederation: 'UEFA',
    confederationIcon: iconUefa,
    associationDate: {
      founded: 1914,
      fifaAffiliation: 1923,
      confederationAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Republic of Ireland': {
    id: v1(),
    name: ['Republic of Ireland'],
    flag: [flagRepublicOfIreland],
    coatOfArms: coatOfArmsRepublicOfIreland,
    associationIcon: iconRepublicOfIreland,
    confederation: 'UEFA',
    confederationIcon: iconUefa,
    associationDate: {
      founded: 1921,
      fifaAffiliation: 1923,
      confederationAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Romania': {
    id: v1(),
    name: ['Romania'],
    flag: [flagRomania],
    coatOfArms: coatOfArmsRomania,
    associationIcon: iconRomania,
    confederation: 'UEFA',
    confederationIcon: iconUefa,
    associationDate: {
      founded: 1909,
      fifaAffiliation: 1923,
      confederationAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Russia': {
    id: v1(),
    name: ['Russia'],
    flag: [flagRussia],
    coatOfArms: coatOfArmsRussia,
    associationIcon: iconRussia,
    confederation: 'UEFA',
    confederationIcon: iconUefa,
    associationDate: {
      founded: 1912,
      fifaAffiliation: 1912,
      confederationAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'San Marino': {
    id: v1(),
    name: ['San Marino'],
    flag: [flagSanMarino],
    coatOfArms: coatOfArmsSanMarino,
    associationIcon: iconSanMarino,
    confederation: 'UEFA',
    confederationIcon: iconUefa,
    associationDate: {
      founded: 1931,
      fifaAffiliation: 1988,
      confederationAffiliation: 1988,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Scotland': {
    id: v1(),
    name: ['Scotland'],
    flag: [flagScotland],
    coatOfArms: coatOfArmsScotland,
    associationIcon: iconScotland,
    confederation: 'UEFA',
    confederationIcon: iconUefa,
    associationDate: {
      founded: 1873,
      fifaAffiliation: 1910,
      confederationAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Serbia': {
    id: v1(),
    name: ['Serbia'],
    flag: [flagSerbia],
    coatOfArms: coatOfArmsSerbia,
    associationIcon: iconSerbia,
    confederation: 'UEFA',
    confederationIcon: iconUefa,
    associationDate: {
      founded: 1919,
      fifaAffiliation: 1921,
      confederationAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Slovakia': {
    id: v1(),
    name: ['Slovakia'],
    flag: [flagSlovakia],
    coatOfArms: coatOfArmsSlovakia,
    associationIcon: iconSlovakia,
    confederation: 'UEFA',
    confederationIcon: iconUefa,
    associationDate: {
      founded: 1938,
      fifaAffiliation: 1994,
      confederationAffiliation: 1993,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Slovenia': {
    id: v1(),
    name: ['Slovenia'],
    flag: [flagSlovenia],
    coatOfArms: coatOfArmsSlovenia,
    associationIcon: iconSlovenia,
    confederation: 'UEFA',
    confederationIcon: iconUefa,
    associationDate: {
      founded: 1920,
      fifaAffiliation: 1992,
      confederationAffiliation: 1992,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Sweden': {
    id: v1(),
    name: ['Sweden'],
    flag: [flagSweden],
    coatOfArms: coatOfArmsSweden,
    associationIcon: iconSweden,
    confederation: 'UEFA',
    confederationIcon: iconUefa,
    associationDate: {
      founded: 1904,
      fifaAffiliation: 1904,
      confederationAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Switzerland': {
    id: v1(),
    name: ['Switzerland'],
    flag: [flagSwitzerland],
    coatOfArms: coatOfArmsSwitzerland,
    associationIcon: iconSwitzerland,
    confederation: 'UEFA',
    confederationIcon: iconUefa,
    associationDate: {
      founded: 1895,
      fifaAffiliation: 1904,
      confederationAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Turkey': {
    id: v1(),
    name: ['Turkey'],
    flag: [flagTurkey],
    coatOfArms: coatOfArmsTurkey,
    associationIcon: iconTurkey,
    confederation: 'UEFA',
    confederationIcon: iconUefa,
    associationDate: {
      founded: 1923,
      fifaAffiliation: 1923,
      confederationAffiliation: 1962,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Ukraine': {
    id: v1(),
    name: ['Ukraine'],
    flag: [flagUkraine],
    coatOfArms: coatOfArmsUkraine,
    associationIcon: iconUkraine,
    confederation: 'UEFA',
    confederationIcon: iconUefa,
    associationDate: {
      founded: 1991,
      fifaAffiliation: 1992,
      confederationAffiliation: 1992,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Wales': {
    id: v1(),
    name: ['Wales'],
    flag: [flagWales],
    coatOfArms: coatOfArmsWales,
    associationIcon: iconWales,
    confederation: 'UEFA',
    confederationIcon: iconUefa,
    associationDate: {
      founded: 1876,
      fifaAffiliation: 1910,
      confederationAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Algeria': {
    id: v1(),
    name: ['Algeria'],
    flag: [flagAlgeria],
    coatOfArms: coatOfArmsAlgeria,
    associationIcon: iconAlgeria,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 1962,
      fifaAffiliation: 1963,
      confederationAffiliation: 1964,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Egypt': {
    id: v1(),
    name: ['Egypt'],
    flag: [flagEgypt],
    coatOfArms: coatOfArmsEgypt,
    associationIcon: iconEgypt,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 1921,
      fifaAffiliation: 1923,
      confederationAffiliation: 1957,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Libya': {
    id: v1(),
    name: ['Libya'],
    flag: [flagLibya],
    coatOfArms: coatOfArmsLibya,
    associationIcon: iconLibya,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 1962,
      fifaAffiliation: 1964,
      confederationAffiliation: 1965,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Morocco': {
    id: v1(),
    name: ['Morocco'],
    flag: [flagMorocco],
    coatOfArms: coatOfArmsMorocco,
    associationIcon: iconMorocco,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 1955,
      fifaAffiliation: 1960,
      confederationAffiliation: 1959,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Tunisia': {
    id: v1(),
    name: ['Tunisia'],
    flag: [flagTunisia],
    coatOfArms: coatOfArmsTunisia,
    associationIcon: iconTunisia,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 1957,
      fifaAffiliation: 1960,
      confederationAffiliation: 1960,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Benin': {
    id: v1(),
    name: ['Benin'],
    flag: [flagBenin],
    coatOfArms: coatOfArmsBenin,
    associationIcon: iconBenin,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 1962,
      fifaAffiliation: 1962,
      confederationAffiliation: 1962,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Burkina Faso': {
    id: v1(),
    name: ['Burkina Faso'],
    flag: [flagBurkinaFaso],
    coatOfArms: coatOfArmsBurkinaFaso,
    associationIcon: iconBurkinaFaso,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 1960,
      fifaAffiliation: 1964,
      confederationAffiliation: 1964,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Cape Verde': {
    id: v1(),
    name: ['Cape Verde'],
    flag: [flagCapeVerde],
    coatOfArms: coatOfArmsCapeVerde,
    associationIcon: iconCapeVerde,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 1982,
      fifaAffiliation: 1986,
      confederationAffiliation: 2000,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Gambia': {
    id: v1(),
    name: ['Gambia'],
    flag: [flagGambia],
    coatOfArms: coatOfArmsGambia,
    associationIcon: iconGambia,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 1952,
      fifaAffiliation: 1968,
      confederationAffiliation: 1966,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Ghana': {
    id: v1(),
    name: ['Ghana'],
    flag: [flagGhana],
    coatOfArms: coatOfArmsGhana,
    associationIcon: iconGhana,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 1957,
      fifaAffiliation: 1958,
      confederationAffiliation: 1958,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Guinea': {
    id: v1(),
    name: ['Guinea'],
    flag: [flagGuinea],
    coatOfArms: coatOfArmsGuinea,
    associationIcon: iconGuinea,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 1960,
      fifaAffiliation: 1962,
      confederationAffiliation: 1963,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Guinea-Bissau': {
    id: v1(),
    name: ['Guinea-Bissau'],
    flag: [flagGuineaBissau],
    coatOfArms: coatOfArmsGuineaBissau,
    associationIcon: iconGuineaBissau,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 1974,
      fifaAffiliation: 1986,
      confederationAffiliation: 1986,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Ivory Coast': {
    id: v1(),
    name: ['Ivory Coast'],
    flag: [flagIvoryCoast],
    coatOfArms: coatOfArmsIvoryCoast,
    associationIcon: iconIvoryCoast,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 1960,
      fifaAffiliation: 1964,
      confederationAffiliation: 1960,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Liberia': {
    id: v1(),
    name: ['Liberia'],
    flag: [flagLiberia],
    coatOfArms: coatOfArmsLiberia,
    associationIcon: iconLiberia,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 1936,
      fifaAffiliation: 1964,
      confederationAffiliation: 1962,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Mali': {
    id: v1(),
    name: ['Mali'],
    flag: [flagMali],
    coatOfArms: coatOfArmsMali,
    associationIcon: iconMali,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 1960,
      fifaAffiliation: 1963,
      confederationAffiliation: 1963,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Mauritania': {
    id: v1(),
    name: ['Mauritania'],
    flag: [flagMauritania],
    coatOfArms: coatOfArmsMauritania,
    associationIcon: iconMauritania,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 1961,
      fifaAffiliation: 1970,
      confederationAffiliation: 1968,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Niger': {
    id: v1(),
    name: ['Niger'],
    flag: [flagNiger],
    coatOfArms: coatOfArmsNiger,
    associationIcon: iconNiger,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 1962,
      fifaAffiliation: 1967,
      confederationAffiliation: 1967,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Nigeria': {
    id: v1(),
    name: ['Nigeria'],
    flag: [flagNigeria],
    coatOfArms: coatOfArmsNigeria,
    associationIcon: iconNigeria,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 1945,
      fifaAffiliation: 1960,
      confederationAffiliation: 1960,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Senegal': {
    id: v1(),
    name: ['Senegal'],
    flag: [flagSenegal],
    coatOfArms: coatOfArmsSenegal,
    associationIcon: iconSenegal,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 1960,
      fifaAffiliation: 1964,
      confederationAffiliation: 1964,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Sierra Leone': {
    id: v1(),
    name: ['Sierra Leone'],
    flag: [flagSierraLeone],
    coatOfArms: coatOfArmsSierraLeone,
    associationIcon: iconSierraLeone,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 1960,
      fifaAffiliation: 1960,
      confederationAffiliation: 1960,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Togo': {
    id: v1(),
    name: ['Togo'],
    flag: [flagTogo],
    coatOfArms: coatOfArmsTogo,
    associationIcon: iconTogo,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 1960,
      fifaAffiliation: 1962,
      confederationAffiliation: 1964,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Cameroon': {
    id: v1(),
    name: ['Cameroon'],
    flag: [flagCameroon],
    coatOfArms: coatOfArmsCameroon,
    associationIcon: iconCameroon,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 1959,
      fifaAffiliation: 1962,
      confederationAffiliation: 1963,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Central African Republic': {
    id: v1(),
    name: ['Central African Republic'],
    flag: [flagCentralAfricanRepublic],
    coatOfArms: coatOfArmsCentralAfricanRepublic,
    associationIcon: iconCentralAfricanRepublic,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 1961,
      fifaAffiliation: 1964,
      confederationAffiliation: 1965,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Chad': {
    id: v1(),
    name: ['Chad'],
    flag: [flagChad],
    coatOfArms: coatOfArmsChad,
    associationIcon: iconChad,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 1962,
      fifaAffiliation: 1964,
      confederationAffiliation: 1964,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Congo': {
    id: v1(),
    name: ['Congo'],
    flag: [flagCongo],
    coatOfArms: coatOfArmsCongo,
    associationIcon: iconCongo,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 1962,
      fifaAffiliation: 1964,
      confederationAffiliation: 1966,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'DR Congo': {
    id: v1(),
    name: ['DR Congo'],
    flag: [flagDRCongo],
    coatOfArms: coatOfArmsDRCongo,
    associationIcon: iconDRCongo,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 1919,
      fifaAffiliation: 1964,
      confederationAffiliation: 1964,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Equatorial Guinea': {
    id: v1(),
    name: ['Equatorial Guinea'],
    flag: [flagEquatorialGuinea],
    coatOfArms: coatOfArmsEquatorialGuinea,
    associationIcon: iconEquatorialGuinea,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 1957,
      fifaAffiliation: 1986,
      confederationAffiliation: 1986,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Gabon': {
    id: v1(),
    name: ['Gabon'],
    flag: [flagGabon],
    coatOfArms: coatOfArmsGabon,
    associationIcon: iconGabon,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 1962,
      fifaAffiliation: 1966,
      confederationAffiliation: 1967,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'São Tomé and Príncipe': {
    id: v1(),
    name: ['São Tomé and Príncipe'],
    flag: [flagSãoToméAndPríncipe],
    coatOfArms: coatOfArmsSãoToméAndPríncipe,
    associationIcon: iconSãoToméAndPríncipe,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 1975,
      fifaAffiliation: 1986,
      confederationAffiliation: 1986,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Burundi': {
    id: v1(),
    name: ['Burundi'],
    flag: [flagGabon],
    coatOfArms: coatOfArmsBurundi,
    associationIcon: iconBurundi,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 1948,
      fifaAffiliation: 1972,
      confederationAffiliation: 1972,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Djibouti': {
    id: v1(),
    name: ['Djibouti'],
    flag: [flagDjibouti],
    coatOfArms: coatOfArmsDjibouti,
    associationIcon: iconDjibouti,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 1979,
      fifaAffiliation: 1994,
      confederationAffiliation: 1994,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Eritrea': {
    id: v1(),
    name: ['Eritrea'],
    flag: [flagEritrea],
    coatOfArms: coatOfArmsEritrea,
    associationIcon: iconEritrea,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 1996,
      fifaAffiliation: 1998,
      confederationAffiliation: 1998,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Ethiopia': {
    id: v1(),
    name: ['Ethiopia'],
    flag: [flagEthiopia],
    coatOfArms: coatOfArmsEthiopia,
    associationIcon: iconEthiopia,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 1943,
      fifaAffiliation: 1952,
      confederationAffiliation: 1957,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Kenya': {
    id: v1(),
    name: ['Kenya'],
    flag: [flagKenya],
    coatOfArms: coatOfArmsKenya,
    associationIcon: iconKenya,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 1960,
      fifaAffiliation: 1960,
      confederationAffiliation: 1968,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Rwanda': {
    id: v1(),
    name: ['Rwanda'],
    flag: [flagRwanda],
    coatOfArms: coatOfArmsRwanda,
    associationIcon: iconRwanda,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 1972,
      fifaAffiliation: 1978,
      confederationAffiliation: 1978,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Somalia': {
    id: v1(),
    name: ['Somalia'],
    flag: [flagSomalia],
    coatOfArms: coatOfArmsSomalia,
    associationIcon: iconSomalia,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 1951,
      fifaAffiliation: 1962,
      confederationAffiliation: 1968,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'South Sudan': {
    id: v1(),
    name: ['South Sudan'],
    flag: [flagSouthSudan],
    coatOfArms: coatOfArmsSouthSudan,
    associationIcon: iconSouthSudan,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 2011,
      fifaAffiliation: 2012,
      confederationAffiliation: 2012,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Sudan': {
    id: v1(),
    name: ['Sudan'],
    flag: [flagSudan],
    coatOfArms: coatOfArmsSudan,
    associationIcon: iconSudan,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 1936,
      fifaAffiliation: 1948,
      confederationAffiliation: 1957,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Tanzania': {
    id: v1(),
    name: ['Tanzania'],
    flag: [flagTanzania],
    coatOfArms: coatOfArmsTanzania,
    associationIcon: iconTanzania,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 1930,
      fifaAffiliation: 1964,
      confederationAffiliation: 1964,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Uganda': {
    id: v1(),
    name: ['Uganda'],
    flag: [flagUganda],
    coatOfArms: coatOfArmsUganda,
    associationIcon: iconUganda,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 1924,
      fifaAffiliation: 1960,
      confederationAffiliation: 1960,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Zanzibar': {
    id: v1(),
    name: ['Zanzibar'],
    flag: [flagZanzibar],
    coatOfArms: coatOfArmsZanzibar,
    associationIcon: iconZanzibar,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 1965,
      fifaAffiliation: "-",
      confederationAffiliation: 1980,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Angola': {
    id: v1(),
    name: ['Angola'],
    flag: [flagAngola],
    coatOfArms: coatOfArmsAngola,
    associationIcon: iconAngola,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 1979,
      fifaAffiliation: 1980,
      confederationAffiliation: 1980,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Botswana': {
    id: v1(),
    name: ['Botswana'],
    flag: [flagBotswana],
    coatOfArms: coatOfArmsBotswana,
    associationIcon: iconBotswana,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 1970,
      fifaAffiliation: 1978,
      confederationAffiliation: 1976,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Comoros': {
    id: v1(),
    name: ['Comoros'],
    flag: [flagComoros],
    coatOfArms: coatOfArmsComoros,
    associationIcon: iconComoros,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 1979,
      fifaAffiliation: 2005,
      confederationAffiliation: 2005,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Eswatini': {
    id: v1(),
    name: ['Eswatini'],
    flag: [flagEswatini],
    coatOfArms: coatOfArmsEswatini,
    associationIcon: iconEswatini,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 1968,
      fifaAffiliation: 1978,
      confederationAffiliation: 1978,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Lesotho': {
    id: v1(),
    name: ['Lesotho'],
    flag: [flagLesotho],
    coatOfArms: coatOfArmsLesotho,
    associationIcon: iconLesotho,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 1932,
      fifaAffiliation: 1964,
      confederationAffiliation: 1964,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Madagascar': {
    id: v1(),
    name: ['Madagascar'],
    flag: [flagMadagascar],
    coatOfArms: coatOfArmsMadagascar,
    associationIcon: iconMadagascar,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 1961,
      fifaAffiliation: 1964,
      confederationAffiliation: 1963,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Malawi': {
    id: v1(),
    name: ['Malawi'],
    flag: [flagMalawi],
    coatOfArms: coatOfArmsMalawi,
    associationIcon: iconMalawi,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 1966,
      fifaAffiliation: 1968,
      confederationAffiliation: 1968,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Mauritius': {
    id: v1(),
    name: ['Mauritius'],
    flag: [flagMauritius],
    coatOfArms: coatOfArmsMauritius,
    associationIcon: iconMauritius,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 1952,
      fifaAffiliation: 1964,
      confederationAffiliation: 1963,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Mozambique': {
    id: v1(),
    name: ['Mozambique'],
    flag: [flagMozambique],
    coatOfArms: coatOfArmsMozambique,
    associationIcon: iconMozambique,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 1976,
      fifaAffiliation: 1980,
      confederationAffiliation: 1980,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Namibia': {
    id: v1(),
    name: ['Namibia'],
    flag: [flagNamibia],
    coatOfArms: coatOfArmsNamibia,
    associationIcon: iconNamibia,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 1990,
      fifaAffiliation: 1992,
      confederationAffiliation: 1992,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Seychelles': {
    id: v1(),
    name: ['Seychelles'],
    flag: [flagSeychelles],
    coatOfArms: coatOfArmsSeychelles,
    associationIcon: iconSeychelles,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 1979,
      fifaAffiliation: 1986,
      confederationAffiliation: 1986,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'South Africa': {
    id: v1(),
    name: ['South Africa'],
    flag: [flagSouthAfrica],
    coatOfArms: coatOfArmsSouthAfrica,
    associationIcon: iconSouthAfrica,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 1991,
      fifaAffiliation: 1992,
      confederationAffiliation: 1992,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Zambia': {
    id: v1(),
    name: ['Zambia'],
    flag: [flagZambia],
    coatOfArms: coatOfArmsZambia,
    associationIcon: iconZambia,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 1929,
      fifaAffiliation: 1964,
      confederationAffiliation: 1964,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Zimbabwe': {
    id: v1(),
    name: ['Zimbabwe'],
    flag: [flagZimbabwe],
    coatOfArms: coatOfArmsZimbabwe,
    associationIcon: iconZimbabwe,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 1965,
      fifaAffiliation: 1965,
      confederationAffiliation: 1980,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Reunion': {
    id: v1(),
    name: ['Reunion'],
    flag: [flagReunion],
    coatOfArms: coatOfArmsReunion,
    associationIcon: iconReunion,
    confederation: 'CAF',
    confederationIcon: iconCaf,
    associationDate: {
      founded: 1956,
      fifaAffiliation: '-',
      confederationAffiliation: 1992,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Australia': {
    id: v1(),
    name: ['Australia'],
    flag: [flagAustralia],
    coatOfArms: coatOfArmsAustralia,
    associationIcon: iconAustralia,
    confederation: 'AFC',
    confederationIcon: iconAfc,
    associationDate: {
      founded: 1961,
      fifaAffiliation: 1963,
      confederationAffiliation: 2006,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Brunei': {
    id: v1(),
    name: ['Brunei'],
    flag: [flagBrunei],
    coatOfArms: coatOfArmsBrunei,
    associationIcon: iconBrunei,
    confederation: 'AFC',
    confederationIcon: iconAfc,
    associationDate: {
      founded: 1952,
      fifaAffiliation: 1972,
      confederationAffiliation: 1969,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Cambodia': {
    id: v1(),
    name: ['Cambodia'],
    flag: [flagCambodia],
    coatOfArms: coatOfArmsCambodia,
    associationIcon: iconCambodia,
    confederation: 'AFC',
    confederationIcon: iconAfc,
    associationDate: {
      founded: 1933,
      fifaAffiliation: 1954,
      confederationAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Timor-Leste': {
    id: v1(),
    name: ['Timor-Leste'],
    flag: [flagTimorLeste],
    coatOfArms: coatOfArmsTimorLeste,
    associationIcon: iconTimorLeste,
    confederation: 'AFC',
    confederationIcon: iconAfc,
    associationDate: {
      founded: 2002,
      fifaAffiliation: 2005,
      confederationAffiliation: 2002,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Indonesia': {
    id: v1(),
    name: ['Indonesia'],
    flag: [flagIndonesia],
    coatOfArms: coatOfArmsIndonesia,
    associationIcon: iconIndonesia,
    confederation: 'AFC',
    confederationIcon: iconAfc,
    associationDate: {
      founded: 1930,
      fifaAffiliation: 1952,
      confederationAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Laos': {
    id: v1(),
    name: ['Laos'],
    flag: [flagLaos],
    coatOfArms: coatOfArmsLaos,
    associationIcon: iconLaos,
    confederation: 'AFC',
    confederationIcon: iconAfc,
    associationDate: {
      founded: 1951,
      fifaAffiliation: 1952,
      confederationAffiliation: 1968,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Malaysia': {
    id: v1(),
    name: ['Malaysia'],
    flag: [flagMalaysia],
    coatOfArms: coatOfArmsMalaysia,
    associationIcon: iconMalaysia,
    confederation: 'AFC',
    confederationIcon: iconAfc,
    associationDate: {
      founded: 1933,
      fifaAffiliation: 1954,
      confederationAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Myanmar': {
    id: v1(),
    name: ['Myanmar'],
    flag: [flagMyanmar],
    coatOfArms: coatOfArmsMyanmar,
    associationIcon: iconMyanmar,
    confederation: 'AFC',
    confederationIcon: iconAfc,
    associationDate: {
      founded: 1947,
      fifaAffiliation: 1948,
      confederationAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Philippines': {
    id: v1(),
    name: ['Philippines'],
    flag: [flagPhilippines],
    coatOfArms: coatOfArmsPhilippines,
    associationIcon: iconPhilippines,
    confederation: 'AFC',
    confederationIcon: iconAfc,
    associationDate: {
      founded: 1907,
      fifaAffiliation: 1930,
      confederationAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Singapore': {
    id: v1(),
    name: ['Singapore'],
    flag: [flagSingapore],
    coatOfArms: coatOfArmsSingapore,
    associationIcon: iconSingapore,
    confederation: 'AFC',
    confederationIcon: iconAfc,
    associationDate: {
      founded: 1892,
      fifaAffiliation: 1952,
      confederationAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Thailand': {
    id: v1(),
    name: ['Thailand'],
    flag: [flagThailand],
    coatOfArms: coatOfArmsThailand,
    associationIcon: iconThailand,
    confederation: 'AFC',
    confederationIcon: iconAfc,
    associationDate: {
      founded: 1916,
      fifaAffiliation: 1925,
      confederationAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Vietnam': {
    id: v1(),
    name: ['Vietnam'],
    flag: [flagVietnam],
    coatOfArms: coatOfArmsVietnam,
    associationIcon: iconVietnam,
    confederation: 'AFC',
    confederationIcon: iconAfc,
    associationDate: {
      founded: 1952,
      fifaAffiliation: 1952,
      confederationAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Afghanistan': {
    id: v1(),
    name: ['Afghanistan'],
    flag: [flagAfghanistan],
    coatOfArms: coatOfArmsAfghanistan,
    associationIcon: iconAfghanistan,
    confederation: 'AFC',
    confederationIcon: iconAfc,
    associationDate: {
      founded: 1933,
      fifaAffiliation: 1948,
      confederationAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Iran': {
    id: v1(),
    name: ['Iran'],
    flag: [flagIran],
    coatOfArms: coatOfArmsIran,
    associationIcon: iconIran,
    confederation: 'AFC',
    confederationIcon: iconAfc,
    associationDate: {
      founded: 1920,
      fifaAffiliation: 1948,
      confederationAffiliation: 1958,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Kyrgyz Republic': {
    id: v1(),
    name: ['Kyrgyz Republic'],
    flag: [flagKyrgyzRepublic],
    coatOfArms: coatOfArmsKyrgyzRepublic,
    associationIcon: iconKyrgyzRepublic,
    confederation: 'AFC',
    confederationIcon: iconAfc,
    associationDate: {
      founded: 1992,
      fifaAffiliation: 1994,
      confederationAffiliation: 1993,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Tajikistan': {
    id: v1(),
    name: ['Tajikistan'],
    flag: [flagTajikistan],
    coatOfArms: coatOfArmsTajikistan,
    associationIcon: iconTajikistan,
    confederation: 'AFC',
    confederationIcon: iconAfc,
    associationDate: {
      founded: 1936,
      fifaAffiliation: 1994,
      confederationAffiliation: 1993,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Turkmenistan': {
    id: v1(),
    name: ['Turkmenistan'],
    flag: [flagTurkmenistan],
    coatOfArms: coatOfArmsTurkmenistan,
    associationIcon: iconTurkmenistan,
    confederation: 'AFC',
    confederationIcon: iconAfc,
    associationDate: {
      founded: 1992,
      fifaAffiliation: 1994,
      confederationAffiliation: 1993,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Uzbekistan': {
    id: v1(),
    name: ['Uzbekistan'],
    flag: [flagUzbekistan],
    coatOfArms: coatOfArmsUzbekistan,
    associationIcon: iconUzbekistan,
    confederation: 'AFC',
    confederationIcon: iconAfc,
    associationDate: {
      founded: 1946,
      fifaAffiliation: 1994,
      confederationAffiliation: 1993,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'China': {
    id: v1(),
    name: ['China'],
    flag: [flagChina],
    coatOfArms: coatOfArmsChina,
    associationIcon: iconChina,
    confederation: 'AFC',
    confederationIcon: iconAfc,
    associationDate: {
      founded: 1924,
      fifaAffiliation: 1931,
      confederationAffiliation: 1974,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Taiwan': {
    id: v1(),
    name: ['Taiwan'],
    flag: [flagTaiwan],
    coatOfArms: coatOfArmsTaiwan,
    associationIcon: iconTaiwan,
    confederation: 'AFC',
    confederationIcon: iconAfc,
    associationDate: {
      founded: 1936,
      fifaAffiliation: 1954,
      confederationAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'DPR Korea': {
    id: v1(),
    name: ['DPR Korea'],
    flag: [flagDPRKorea],
    coatOfArms: coatOfArmsDPRKorea,
    associationIcon: iconDPRKorea,
    confederation: 'AFC',
    confederationIcon: iconAfc,
    associationDate: {
      founded: 1945,
      fifaAffiliation: 1958,
      confederationAffiliation: 1974,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Guam': {
    id: v1(),
    name: ['Guam'],
    flag: [flagGuam],
    coatOfArms: coatOfArmsGuam,
    associationIcon: iconGuam,
    confederation: 'AFC',
    confederationIcon: iconAfc,
    associationDate: {
      founded: 1975,
      fifaAffiliation: 1996,
      confederationAffiliation: 1991,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Hong Kong': {
    id: v1(),
    name: ['Hong Kong'],
    flag: [flagHongKong],
    coatOfArms: coatOfArmsHongKong,
    associationIcon: iconHongKong,
    confederation: 'AFC',
    confederationIcon: iconAfc,
    associationDate: {
      founded: 1914,
      fifaAffiliation: 1954,
      confederationAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Japan': {
    id: v1(),
    name: ['Japan'],
    flag: [flagJapan],
    coatOfArms: coatOfArmsJapan,
    associationIcon: iconJapan,
    confederation: 'AFC',
    confederationIcon: iconAfc,
    associationDate: {
      founded: 1921,
      fifaAffiliation: 1921,
      confederationAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Korea Republic': {
    id: v1(),
    name: ['Korea Republic'],
    flag: [flagKoreaRepublic],
    coatOfArms: coatOfArmsKoreaRepublic,
    associationIcon: iconKoreaRepublic,
    confederation: 'AFC',
    confederationIcon: iconAfc,
    associationDate: {
      founded: 1928,
      fifaAffiliation: 1948,
      confederationAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Macau': {
    id: v1(),
    name: ['Macau'],
    flag: [flagMacau],
    coatOfArms: coatOfArmsMacau,
    associationIcon: iconMacau,
    confederation: 'AFC',
    confederationIcon: iconAfc,
    associationDate: {
      founded: 1939,
      fifaAffiliation: 1978,
      confederationAffiliation: 1978,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Mongolia': {
    id: v1(),
    name: ['Mongolia'],
    flag: [flagMongolia],
    coatOfArms: coatOfArmsMongolia,
    associationIcon: iconMongolia,
    confederation: 'AFC',
    confederationIcon: iconAfc,
    associationDate: {
      founded: 1959,
      fifaAffiliation: 1998,
      confederationAffiliation: 1993,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Northern Mariana Islands': {
    id: v1(),
    name: ['Northern Mariana Islands'],
    flag: [flagNorthernMarianaIslands],
    coatOfArms: coatOfArmsNorthernMarianaIslands,
    associationIcon: iconNorthernMarianaIslands,
    confederation: 'AFC',
    confederationIcon: iconAfc,
    associationDate: {
      founded: 2005,
      fifaAffiliation: '-',
      confederationAffiliation: 2020,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Bangladesh': {
    id: v1(),
    name: ['Bangladesh'],
    flag: [flagBangladesh],
    coatOfArms: coatOfArmsBangladesh,
    associationIcon: iconBangladesh,
    confederation: 'AFC',
    confederationIcon: iconAfc,
    associationDate: {
      founded: 1972,
      fifaAffiliation: 1976,
      confederationAffiliation: 1974,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Bhutan': {
    id: v1(),
    name: ['Bhutan'],
    flag: [flagBhutan],
    coatOfArms: coatOfArmsBhutan,
    associationIcon: iconBhutan,
    confederation: 'AFC',
    confederationIcon: iconAfc,
    associationDate: {
      founded: 1983,
      fifaAffiliation: 2000,
      confederationAffiliation: 1993,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'India': {
    id: v1(),
    name: ['India'],
    flag: [flagIndia],
    coatOfArms: coatOfArmsIndia,
    associationIcon: iconIndia,
    confederation: 'AFC',
    confederationIcon: iconAfc,
    associationDate: {
      founded: 1937,
      fifaAffiliation: 1948,
      confederationAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Maldives': {
    id: v1(),
    name: ['Maldives'],
    flag: [flagMaldives],
    coatOfArms: coatOfArmsMaldives,
    associationIcon: iconMaldives,
    confederation: 'AFC',
    confederationIcon: iconAfc,
    associationDate: {
      founded: 1982,
      fifaAffiliation: 1986,
      confederationAffiliation: 1984,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Nepal': {
    id: v1(),
    name: ['Nepal'],
    flag: [flagNepal],
    coatOfArms: coatOfArmsNepal,
    associationIcon: iconNepal,
    confederation: 'AFC',
    confederationIcon: iconAfc,
    associationDate: {
      founded: 1951,
      fifaAffiliation: 1972,
      confederationAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Pakistan': {
    id: v1(),
    name: ['Pakistan'],
    flag: [flagPakistan],
    coatOfArms: coatOfArmsPakistan,
    associationIcon: iconPakistan,
    confederation: 'AFC',
    confederationIcon: iconAfc,
    associationDate: {
      founded: 1947,
      fifaAffiliation: 1948,
      confederationAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Sri Lanka': {
    id: v1(),
    name: ['Sri Lanka'],
    flag: [flagSriLanka],
    coatOfArms: coatOfArmsSriLanka,
    associationIcon: iconSriLanka,
    confederation: 'AFC',
    confederationIcon: iconAfc,
    associationDate: {
      founded: 1939,
      fifaAffiliation: 1952,
      confederationAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Bahrain': {
    id: v1(),
    name: ['Bahrain'],
    flag: [flagBahrain],
    coatOfArms: coatOfArmsBahrain,
    associationIcon: iconBahrain,
    confederation: 'AFC',
    confederationIcon: iconAfc,
    associationDate: {
      founded: 1957,
      fifaAffiliation: 1968,
      confederationAffiliation: 1969,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Iraq': {
    id: v1(),
    name: ['Iraq'],
    flag: [flagIraq],
    coatOfArms: coatOfArmsIraq,
    associationIcon: iconIraq,
    confederation: 'AFC',
    confederationIcon: iconAfc,
    associationDate: {
      founded: 1948,
      fifaAffiliation: 1950,
      confederationAffiliation: 1970,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Jordan': {
    id: v1(),
    name: ['Jordan'],
    flag: [flagJordan],
    coatOfArms: coatOfArmsJordan,
    associationIcon: iconJordan,
    confederation: 'AFC',
    confederationIcon: iconAfc,
    associationDate: {
      founded: 1949,
      fifaAffiliation: 1956,
      confederationAffiliation: 1970,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Kuwait': {
    id: v1(),
    name: ['Kuwait'],
    flag: [flagKuwait],
    coatOfArms: coatOfArmsKuwait,
    associationIcon: iconKuwait,
    confederation: 'AFC',
    confederationIcon: iconAfc,
    associationDate: {
      founded: 1952,
      fifaAffiliation: 1964,
      confederationAffiliation: 1964,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Lebanon': {
    id: v1(),
    name: ['Lebanon'],
    flag: [flagLebanon],
    coatOfArms: coatOfArmsLebanon,
    associationIcon: iconLebanon,
    confederation: 'AFC',
    confederationIcon: iconAfc,
    associationDate: {
      founded: 1933,
      fifaAffiliation: 1936,
      confederationAffiliation: 1964,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Oman': {
    id: v1(),
    name: ['Oman'],
    flag: [flagOman],
    coatOfArms: coatOfArmsOman,
    associationIcon: iconOman,
    confederation: 'AFC',
    confederationIcon: iconAfc,
    associationDate: {
      founded: 1978,
      fifaAffiliation: 1980,
      confederationAffiliation: 1980,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Palestine': {
    id: v1(),
    name: ['Palestine'],
    flag: [flagPalestine],
    coatOfArms: coatOfArmsPalestine,
    associationIcon: iconPalestine,
    confederation: 'AFC',
    confederationIcon: iconAfc,
    associationDate: {
      founded: 1998,
      fifaAffiliation: 1998,
      confederationAffiliation: 1998,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Qatar': {
    id: v1(),
    name: ['Qatar'],
    flag: [flagQatar],
    coatOfArms: coatOfArmsQatar,
    associationIcon: iconQatar,
    confederation: 'AFC',
    confederationIcon: iconAfc,
    associationDate: {
      founded: 1960,
      fifaAffiliation: 1972,
      confederationAffiliation: 1974,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Saudi Arabia': {
    id: v1(),
    name: ['Saudi Arabia'],
    flag: [flagSaudiArabia],
    coatOfArms: coatOfArmsSaudiArabia,
    associationIcon: iconSaudiArabia,
    confederation: 'AFC',
    confederationIcon: iconAfc,
    associationDate: {
      founded: 1956,
      fifaAffiliation: 1956,
      confederationAffiliation: 1972,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Syria': {
    id: v1(),
    name: ['Syria'],
    flag: [flagSyria],
    coatOfArms: coatOfArmsSyria,
    associationIcon: iconSyria,
    confederation: 'AFC',
    confederationIcon: iconAfc,
    associationDate: {
      founded: 1936,
      fifaAffiliation: 1937,
      confederationAffiliation: 1970,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'United Arab Emirates': {
    id: v1(),
    name: ['United Arab Emirates'],
    flag: [flagUnitedArabEmirates],
    coatOfArms: coatOfArmsUnitedArabEmirates,
    associationIcon: iconUnitedArabEmirates,
    confederation: 'AFC',
    confederationIcon: iconAfc,
    associationDate: {
      founded: 1971,
      fifaAffiliation: 1974,
      confederationAffiliation: 1974,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Yemen': {
    id: v1(),
    name: ['Yemen'],
    flag: [flagYemen],
    coatOfArms: coatOfArmsYemen,
    associationIcon: iconYemen,
    confederation: 'AFC',
    confederationIcon: iconAfc,
    associationDate: {
      founded: 1962,
      fifaAffiliation: 1980,
      confederationAffiliation: 1980,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Canada': {
    id: v1(),
    name: ['Canada'],
    flag: [flagCanada],
    coatOfArms: coatOfArmsCanada,
    associationIcon: iconCanada,
    confederation: 'CONCACAF',
    confederationIcon: iconConcacaf,
    associationDate: {
      founded: 1912,
      fifaAffiliation: 1913,
      confederationAffiliation: 1961,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Mexico': {
    id: v1(),
    name: ['Mexico'],
    flag: [flagMexico],
    coatOfArms: coatOfArmsMexico,
    associationIcon: iconMexico,
    confederation: 'CONCACAF',
    confederationIcon: iconConcacaf,
    associationDate: {
      founded: 1922,
      fifaAffiliation: 1929,
      confederationAffiliation: 1961,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'United States': {
    id: v1(),
    name: ['United States'],
    flag: [flagUnitedStates],
    coatOfArms: coatOfArmsUnitedStates,
    associationIcon: iconUnitedStates,
    confederation: 'CONCACAF',
    confederationIcon: iconConcacaf,
    associationDate: {
      founded: 1913,
      fifaAffiliation: 1914,
      confederationAffiliation: 1961,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Belize': {
    id: v1(),
    name: ['Belize'],
    flag: [flagBelize],
    coatOfArms: coatOfArmsBelize,
    associationIcon: iconBelize,
    confederation: 'CONCACAF',
    confederationIcon: iconConcacaf,
    associationDate: {
      founded: 1980,
      fifaAffiliation: 1986,
      confederationAffiliation: 1986,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Costa Rica': {
    id: v1(),
    name: ['Costa Rica'],
    flag: [flagCostaRica],
    coatOfArms: coatOfArmsCostaRica,
    associationIcon: iconCostaRica,
    confederation: 'CONCACAF',
    confederationIcon: iconConcacaf,
    associationDate: {
      founded: 1921,
      fifaAffiliation: 1927,
      confederationAffiliation: 1961,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'El Salvador': {
    id: v1(),
    name: ['El Salvador'],
    flag: [flagElSalvador],
    coatOfArms: coatOfArmsElSalvador,
    associationIcon: iconElSalvador,
    confederation: 'CONCACAF',
    confederationIcon: iconConcacaf,
    associationDate: {
      founded: 1935,
      fifaAffiliation: 1938,
      confederationAffiliation: 1961,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Guatemala': {
    id: v1(),
    name: ['Guatemala'],
    flag: [flagGuatemala],
    coatOfArms: coatOfArmsGuatemala,
    associationIcon: iconGuatemala,
    confederation: 'CONCACAF',
    confederationIcon: iconConcacaf,
    associationDate: {
      founded: 1919,
      fifaAffiliation: 1946,
      confederationAffiliation: 1961,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Honduras': {
    id: v1(),
    name: ['Honduras'],
    flag: [flagHonduras],
    coatOfArms: coatOfArmsHonduras,
    associationIcon: iconHonduras,
    confederation: 'CONCACAF',
    confederationIcon: iconConcacaf,
    associationDate: {
      founded: 1935,
      fifaAffiliation: 1946,
      confederationAffiliation: 1961,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Nicaragua': {
    id: v1(),
    name: ['Nicaragua'],
    flag: [flagNicaragua],
    coatOfArms: coatOfArmsNicaragua,
    associationIcon: iconNicaragua,
    confederation: 'CONCACAF',
    confederationIcon: iconConcacaf,
    associationDate: {
      founded: 1931,
      fifaAffiliation: 1950,
      confederationAffiliation: 1961,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Panama': {
    id: v1(),
    name: ['Panama'],
    flag: [flagPanama],
    coatOfArms: coatOfArmsPanama,
    associationIcon: iconPanama,
    confederation: 'CONCACAF',
    confederationIcon: iconConcacaf,
    associationDate: {
      founded: 1937,
      fifaAffiliation: 1938,
      confederationAffiliation: 1961,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Anguilla': {
    id: v1(),
    name: ['Anguilla'],
    flag: [flagAnguilla],
    coatOfArms: coatOfArmsAnguilla,
    associationIcon: iconAnguilla,
    confederation: 'CONCACAF',
    confederationIcon: iconConcacaf,
    associationDate: {
      founded: 1990,
      fifaAffiliation: 1996,
      confederationAffiliation: 1996,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Antigua and Barbuda': {
    id: v1(),
    name: ['Antigua and Barbuda'],
    flag: [flagAntiguaAndBarbuda],
    coatOfArms: coatOfArmsAntiguaAndBarbuda,
    associationIcon: iconAntiguaAndBarbuda,
    confederation: 'CONCACAF',
    confederationIcon: iconConcacaf,
    associationDate: {
      founded: 1928,
      fifaAffiliation: 1972,
      confederationAffiliation: 1961,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Aruba': {
    id: v1(),
    name: ['Aruba'],
    flag: [flagAruba],
    coatOfArms: coatOfArmsAruba,
    associationIcon: iconAruba,
    confederation: 'CONCACAF',
    confederationIcon: iconConcacaf,
    associationDate: {
      founded: 1932,
      fifaAffiliation: 1988,
      confederationAffiliation: 1986,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Bahamas': {
    id: v1(),
    name: ['Bahamas'],
    flag: [flagBahamas],
    coatOfArms: coatOfArmsBahamas,
    associationIcon: iconBahamas,
    confederation: 'CONCACAF',
    confederationIcon: iconConcacaf,
    associationDate: {
      founded: 1967,
      fifaAffiliation: 1968,
      confederationAffiliation: 1961,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Barbados': {
    id: v1(),
    name: ['Barbados'],
    flag: [flagBarbados],
    coatOfArms: coatOfArmsBarbados,
    associationIcon: iconBarbados,
    confederation: 'CONCACAF',
    confederationIcon: iconConcacaf,
    associationDate: {
      founded: 1910,
      fifaAffiliation: 1968,
      confederationAffiliation: 1967,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Bermuda': {
    id: v1(),
    name: ['Bermuda'],
    flag: [flagBermuda],
    coatOfArms: coatOfArmsBermuda,
    associationIcon: iconBermuda,
    confederation: 'CONCACAF',
    confederationIcon: iconConcacaf,
    associationDate: {
      founded: 1928,
      fifaAffiliation: 1962,
      confederationAffiliation: 1967,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Bonaire': {
    id: v1(),
    name: ['Bonaire'],
    flag: [flagBonaire],
    coatOfArms: coatOfArmsBonaire,
    associationIcon: iconBonaire,
    confederation: 'CONCACAF',
    confederationIcon: iconConcacaf,
    associationDate: {
      founded: 1960,
      fifaAffiliation: '-',
      confederationAffiliation: 2014,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'British Virgin Islands': {
    id: v1(),
    name: ['British Virgin Islands'],
    flag: [flagBritishVirginIslands],
    coatOfArms: coatOfArmsBritishVirginIslands,
    associationIcon: iconBritishVirginIslands,
    confederation: 'CONCACAF',
    confederationIcon: iconConcacaf,
    associationDate: {
      founded: 1974,
      fifaAffiliation: 1996,
      confederationAffiliation: 1996,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Cayman Islands': {
    id: v1(),
    name: ['Cayman Islands'],
    flag: [flagCaymanIslands],
    coatOfArms: coatOfArmsCaymanIslands,
    associationIcon: iconCaymanIslands,
    confederation: 'CONCACAF',
    confederationIcon: iconConcacaf,
    associationDate: {
      founded: 1966,
      fifaAffiliation: 1992,
      confederationAffiliation: 1990,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Cuba': {
    id: v1(),
    name: ['Cuba'],
    flag: [flagCuba],
    coatOfArms: coatOfArmsCuba,
    associationIcon: iconCuba,
    confederation: 'CONCACAF',
    confederationIcon: iconConcacaf,
    associationDate: {
      founded: 1924,
      fifaAffiliation: 1929,
      confederationAffiliation: 1961,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Curaçao': {
    id: v1(),
    name: ['Curaçao'],
    flag: [flagCuracao],
    coatOfArms: coatOfArmsCuracao,
    associationIcon: iconCuracao,
    confederation: 'CONCACAF',
    confederationIcon: iconConcacaf,
    associationDate: {
      founded: 1990,
      fifaAffiliation: 1996,
      confederationAffiliation: 1996,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Dominica': {
    id: v1(),
    name: ['Dominica'],
    flag: [flagDominica],
    coatOfArms: coatOfArmsDominica,
    associationIcon: iconDominica,
    confederation: 'CONCACAF',
    confederationIcon: iconConcacaf,
    associationDate: {
      founded: 1970,
      fifaAffiliation: 1994,
      confederationAffiliation: 1994,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Dominican Republic': {
    id: v1(),
    name: ['Dominican Republic'],
    flag: [flagDominicanRepublic],
    coatOfArms: coatOfArmsDominicanRepublic,
    associationIcon: iconDominicanRepublic,
    confederation: 'CONCACAF',
    confederationIcon: iconConcacaf,
    associationDate: {
      founded: 1953,
      fifaAffiliation: 1958,
      confederationAffiliation: 1964,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'French Guiana': {
    id: v1(),
    name: ['French Guiana'],
    flag: [flagFrenchGuiana],
    coatOfArms: coatOfArmsFrenchGuiana,
    associationIcon: iconFrenchGuiana,
    confederation: 'CONCACAF',
    confederationIcon: iconConcacaf,
    associationDate: {
      founded: 1962,
      fifaAffiliation: '-',
      confederationAffiliation: 2013,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Grenada': {
    id: v1(),
    name: ['Grenada'],
    flag: [flagGrenada],
    coatOfArms: coatOfArmsGrenada,
    associationIcon: iconGrenada,
    confederation: 'CONCACAF',
    confederationIcon: iconConcacaf,
    associationDate: {
      founded: 1924,
      fifaAffiliation: 1978,
      confederationAffiliation: 1978,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Guadeloupe': {
    id: v1(),
    name: ['Guadeloupe'],
    flag: [flagGuadeloupe],
    coatOfArms: coatOfArmsGuadeloupe,
    associationIcon: iconGuadeloupe,
    confederation: 'CONCACAF',
    confederationIcon: iconConcacaf,
    associationDate: {
      founded: 1958,
      fifaAffiliation: '-',
      confederationAffiliation: 2013,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Guyana': {
    id: v1(),
    name: ['Guyana'],
    flag: [flagGuyana],
    coatOfArms: coatOfArmsGuyana,
    associationIcon: iconGuyana,
    confederation: 'CONCACAF',
    confederationIcon: iconConcacaf,
    associationDate: {
      founded: 1902,
      fifaAffiliation: 1970,
      confederationAffiliation: 1969,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Haiti': {
    id: v1(),
    name: ['Haiti'],
    flag: [flagHaiti],
    coatOfArms: coatOfArmsHaiti,
    associationIcon: iconHaiti,
    confederation: 'CONCACAF',
    confederationIcon: iconConcacaf,
    associationDate: {
      founded: 1904,
      fifaAffiliation: 1934,
      confederationAffiliation: 1961,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Jamaica': {
    id: v1(),
    name: ['Jamaica'],
    flag: [flagJamaica],
    coatOfArms: coatOfArmsJamaica,
    associationIcon: iconJamaica,
    confederation: 'CONCACAF',
    confederationIcon: iconConcacaf,
    associationDate: {
      founded: 1910,
      fifaAffiliation: 1962,
      confederationAffiliation: 1963,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Martinique': {
    id: v1(),
    name: ['Martinique'],
    flag: [flagMartinique],
    coatOfArms: coatOfArmsMartinique,
    associationIcon: iconMartinique,
    confederation: 'CONCACAF',
    confederationIcon: iconConcacaf,
    associationDate: {
      founded: 1953,
      fifaAffiliation: '-',
      confederationAffiliation: 2013,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Montserrat': {
    id: v1(),
    name: ['Montserrat'],
    flag: [flagMontserrat],
    coatOfArms: coatOfArmsMontserrat,
    associationIcon: iconMontserrat,
    confederation: 'CONCACAF',
    confederationIcon: iconConcacaf,
    associationDate: {
      founded: 1994,
      fifaAffiliation: 1996,
      confederationAffiliation: 1996,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Puerto Rico': {
    id: v1(),
    name: ['Puerto Rico'],
    flag: [flagPuertoRico],
    coatOfArms: coatOfArmsPuertoRico,
    associationIcon: iconPuertoRico,
    confederation: 'CONCACAF',
    confederationIcon: iconConcacaf,
    associationDate: {
      founded: 1940,
      fifaAffiliation: 1960,
      confederationAffiliation: 1964,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Saint Kitts and Nevis': {
    id: v1(),
    name: ['Saint Kitts and Nevis'],
    flag: [flagSaintKittsAndNevis],
    coatOfArms: coatOfArmsSaintKittsAndNevis,
    associationIcon: iconSaintKittsAndNevis,
    confederation: 'CONCACAF',
    confederationIcon: iconConcacaf,
    associationDate: {
      founded: 1932,
      fifaAffiliation: 1992,
      confederationAffiliation: 1992,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Saint Lucia': {
    id: v1(),
    name: ['Saint Lucia'],
    flag: [flagSaintLucia],
    coatOfArms: coatOfArmsSaintLucia,
    associationIcon: iconSaintLucia,
    confederation: 'CONCACAF',
    confederationIcon: iconConcacaf,
    associationDate: {
      founded: 1979,
      fifaAffiliation: 1988,
      confederationAffiliation: 1986,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Saint Martin': {
    id: v1(),
    name: ['Saint Martin'],
    flag: [flagSaintMartin],
    coatOfArms: coatOfArmsSaintMartin,
    associationIcon: iconSaintMartin,
    confederation: 'CONCACAF',
    confederationIcon: iconConcacaf,
    associationDate: {
      founded: 1999,
      fifaAffiliation: '-',
      confederationAffiliation: 2013,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Saint Vincent and the Grenadines': {
    id: v1(),
    name: ['Saint Vincent and the Grenadines'],
    flag: [flagSaintVincentAndTheGrenadines],
    coatOfArms: coatOfArmsSaintVincentAndTheGrenadines,
    associationIcon: iconSaintVincentAndTheGrenadines,
    confederation: 'CONCACAF',
    confederationIcon: iconConcacaf,
    associationDate: {
      founded: 1979,
      fifaAffiliation: 1988,
      confederationAffiliation: 1986,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Sint Maarten': {
    id: v1(),
    name: ['Sint Maarten'],
    flag: [flagSintMaarten],
    coatOfArms: coatOfArmsSintMaarten,
    associationIcon: iconSintMaarten,
    confederation: 'CONCACAF',
    confederationIcon: iconConcacaf,
    associationDate: {
      founded: 1986,
      fifaAffiliation: '-',
      confederationAffiliation: 2013,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Suriname': {
    id: v1(),
    name: ['Suriname'],
    flag: [flagSuriname],
    coatOfArms: coatOfArmsSuriname,
    associationIcon: iconSuriname,
    confederation: 'CONCACAF',
    confederationIcon: iconConcacaf,
    associationDate: {
      founded: 1920,
      fifaAffiliation: 1929,
      confederationAffiliation: 1961,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Trinidad and Tobago': {
    id: v1(),
    name: ['Trinidad and Tobago'],
    flag: [flagTrinidadAndTobago],
    coatOfArms: coatOfArmsTrinidadAndTobago,
    associationIcon: iconTrinidadAndTobago,
    confederation: 'CONCACAF',
    confederationIcon: iconConcacaf,
    associationDate: {
      founded: 1908,
      fifaAffiliation: 1964,
      confederationAffiliation: 1964,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Turks and Caicos Islands': {
    id: v1(),
    name: ['Turks and Caicos Islands'],
    flag: [flagTurksAndCaicosIslands],
    coatOfArms: coatOfArmsTurksAndCaicosIslands,
    associationIcon: iconTurksAndCaicosIslands,
    confederation: 'CONCACAF',
    confederationIcon: iconConcacaf,
    associationDate: {
      founded: 1996,
      fifaAffiliation: 1998,
      confederationAffiliation: 1996,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'U.S. Virgin Islands': {
    id: v1(),
    name: ['U.S. Virgin Islands'],
    flag: [flagUSVirginIslands],
    coatOfArms: coatOfArmsUSVirginIslands,
    associationIcon: iconUSVirginIslands,
    confederation: 'CONCACAF',
    confederationIcon: iconConcacaf,
    associationDate: {
      founded: 1987,
      fifaAffiliation: 1998,
      confederationAffiliation: 1987,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'American Samoa': {
    id: v1(),
    name: ['American Samoa'],
    flag: [flagAmericanSamoa],
    coatOfArms: coatOfArmsAmericanSamoa,
    associationIcon: iconAmericanSamoa,
    confederation: 'OFC',
    confederationIcon: iconOfc,
    associationDate: {
      founded: 1984,
      fifaAffiliation: 1998,
      confederationAffiliation: 1998,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },  
  'Cook Islands': {
    id: v1(),
    name: ['Cook Islands'],
    flag: [flagCookIslands],
    coatOfArms: coatOfArmsCookIslands,
    associationIcon: iconCookIslands,
    confederation: 'OFC',
    confederationIcon: iconOfc,
    associationDate: {
      founded: 1971,
      fifaAffiliation: 1994,
      confederationAffiliation: 1994,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Fiji': {
    id: v1(),
    name: ['Fiji'],
    flag: [flagFiji],
    coatOfArms: coatOfArmsFiji,
    associationIcon: iconFiji,
    confederation: 'OFC',
    confederationIcon: iconOfc,
    associationDate: {
      founded: 1938,
      fifaAffiliation: 1964,
      confederationAffiliation: 1966,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Kiribati': {
    id: v1(),
    name: ['Kiribati'],
    flag: [flagKiribati],
    coatOfArms: coatOfArmsKiribati,
    associationIcon: iconKiribati,
    confederation: 'OFC',
    confederationIcon: iconOfc,
    associationDate: {
      founded: 1980,
      fifaAffiliation: '-',
      confederationAffiliation: 2007,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'New Caledonia': {
    id: v1(),
    name: ['New Caledonia'],
    flag: [flagNewCaledonia],
    coatOfArms: coatOfArmsNewCaledonia,
    associationIcon: iconNewCaledonia,
    confederation: 'OFC',
    confederationIcon: iconOfc,
    associationDate: {
      founded: 1928,
      fifaAffiliation: 2004,
      confederationAffiliation: 1999,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'New Zealand': {
    id: v1(),
    name: ['New Zealand'],
    flag: [flagNewZealand],
    coatOfArms: coatOfArmsNewZealand,
    associationIcon: iconNewZealand,
    confederation: 'OFC',
    confederationIcon: iconOfc,
    associationDate: {
      founded: 1891,
      fifaAffiliation: 1948,
      confederationAffiliation: 1966,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Papua New Guinea': {
    id: v1(),
    name: ['Papua New Guinea'],
    flag: [flagPapuaNewGuinea],
    coatOfArms: coatOfArmsPapuaNewGuinea,
    associationIcon: iconPapuaNewGuinea,
    confederation: 'OFC',
    confederationIcon: iconOfc,
    associationDate: {
      founded: 1962,
      fifaAffiliation: 1966,
      confederationAffiliation: 1966,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Samoa': {
    id: v1(),
    name: ['Samoa'],
    flag: [flagSamoa],
    coatOfArms: coatOfArmsSamoa,
    associationIcon: iconSamoa,
    confederation: 'OFC',
    confederationIcon: iconOfc,
    associationDate: {
      founded: 1968,
      fifaAffiliation: 1986,
      confederationAffiliation: 1986,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Solomon Islands': {
    id: v1(),
    name: ['Solomon Islands'],
    flag: [flagSolomonIslands],
    coatOfArms: coatOfArmsSolomonIslands,
    associationIcon: iconSolomonIslands,
    confederation: 'OFC',
    confederationIcon: iconOfc,
    associationDate: {
      founded: 1979,
      fifaAffiliation: 1988,
      confederationAffiliation: 1988,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Tahiti': {
    id: v1(),
    name: ['Tahiti'],
    flag: [flagTahiti],
    coatOfArms: coatOfArmsTahiti,
    associationIcon: iconTahiti,
    confederation: 'OFC',
    confederationIcon: iconOfc,
    associationDate: {
      founded: 1989,
      fifaAffiliation: 1990,
      confederationAffiliation: 1990,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Tonga': {
    id: v1(),
    name: ['Tonga'],
    flag: [flagTonga],
    coatOfArms: coatOfArmsTonga,
    associationIcon: iconTonga,
    confederation: 'OFC',
    confederationIcon: iconOfc,
    associationDate: {
      founded: 1965,
      fifaAffiliation: 1994,
      confederationAffiliation: 1994,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Tuvalu': {
    id: v1(),
    name: ['Tuvalu'],
    flag: [flagTuvalu],
    coatOfArms: coatOfArmsTuvalu,
    associationIcon: iconTuvalu,
    confederation: 'OFC',
    confederationIcon: iconOfc,
    associationDate: {
      founded: 1979,
      fifaAffiliation: '-',
      confederationAffiliation: 2006,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Vanuatu': {
    id: v1(),
    name: ['Vanuatu'],
    flag: [flagVanuatu],
    coatOfArms: coatOfArmsVanuatu,
    associationIcon: iconVanuatu,
    confederation: 'OFC',
    confederationIcon: iconOfc,
    associationDate: {
      founded: 1934,
      fifaAffiliation: 1988,
      confederationAffiliation: 1988,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Argentina': {
    id: v1(),
    name: ['Argentina'],
    flag: [flagArgentina],
    coatOfArms: coatOfArmsArgentina,
    associationIcon: iconArgentina,
    confederation: 'CONMEBOL',
    confederationIcon: iconConmebol,
    associationDate: {
      founded: 1893,
      fifaAffiliation: 1912,
      confederationAffiliation: 1916,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Bolivia': {
    id: v1(),
    name: ['Bolivia'],
    flag: [flagBolivia],
    coatOfArms: coatOfArmsBolivia,
    associationIcon: iconBolivia,
    confederation: 'CONMEBOL',
    confederationIcon: iconConmebol,
    associationDate: {
      founded: 1925,
      fifaAffiliation: 1926,
      confederationAffiliation: 1926,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Brazil': {
    id: v1(),
    name: ['Brazil'],
    flag: [flagBrazil],
    coatOfArms: coatOfArmsBrazil,
    associationIcon: iconBrazil,
    confederation: 'CONMEBOL',
    confederationIcon: iconConmebol,
    associationDate: {
      founded: 1914,
      fifaAffiliation: 1923,
      confederationAffiliation: 1916,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Chile': {
    id: v1(),
    name: ['Chile'],
    flag: [flagChile],
    coatOfArms: coatOfArmsChile,
    associationIcon: iconChile,
    confederation: 'CONMEBOL',
    confederationIcon: iconConmebol,
    associationDate: {
      founded: 1895,
      fifaAffiliation: 1913,
      confederationAffiliation: 1916,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Colombia': {
    id: v1(),
    name: ['Colombia'],
    flag: [flagColombia],
    coatOfArms: coatOfArmsColombia,
    associationIcon: iconColombia,
    confederation: 'CONMEBOL',
    confederationIcon: iconConmebol,
    associationDate: {
      founded: 1924,
      fifaAffiliation: 1936,
      confederationAffiliation: 1936,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Ecuador': {
    id: v1(),
    name: ['Ecuador'],
    flag: [flagEcuador],
    coatOfArms: coatOfArmsEcuador,
    associationIcon: iconEcuador,
    confederation: 'CONMEBOL',
    confederationIcon: iconConmebol,
    associationDate: {
      founded: 1925,
      fifaAffiliation: 1926,
      confederationAffiliation: 1927,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Paraguay': {
    id: v1(),
    name: ['Paraguay'],
    flag: [flagParaguay],
    coatOfArms: coatOfArmsParaguay,
    associationIcon: iconParaguay,
    confederation: 'CONMEBOL',
    confederationIcon: iconConmebol,
    associationDate: {
      founded: 1906,
      fifaAffiliation: 1925,
      confederationAffiliation: 1921,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Peru': {
    id: v1(),
    name: ['Peru'],
    flag: [flagPeru],
    coatOfArms: coatOfArmsPeru,
    associationIcon: iconPeru,
    confederation: 'CONMEBOL',
    confederationIcon: iconConmebol,
    associationDate: {
      founded: 1922,
      fifaAffiliation: 1924,
      confederationAffiliation: 1925,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Uruguay': {
    id: v1(),
    name: ['Uruguay'],
    flag: [flagUruguay],
    coatOfArms: coatOfArmsUruguay,
    associationIcon: iconUruguay,
    confederation: 'CONMEBOL',
    confederationIcon: iconConmebol,
    associationDate: {
      founded: 1900,
      fifaAffiliation: 1923,
      confederationAffiliation: 1916,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Venezuela': {
    id: v1(),
    name: ['Venezuela'],
    flag: [flagVenezuela],
    coatOfArms: coatOfArmsVenezuela,
    associationIcon: iconVenezuela,
    confederation: 'CONMEBOL',
    confederationIcon: iconConmebol,
    associationDate: {
      founded: 1925,
      fifaAffiliation: 1952,
      confederationAffiliation: 1953,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
}



export const aboutProject: AboutProject = {
  image: logoProject,
  title: 'football is life',
  description: 'This project is about football',
  question: 'Do you love football as much as I do?..'
}

export const startPage: StartPage = {
  title: 'association football',
  text: "Association football (or football / soccer) is a team sport played between two teams of 11 players each. The objective of the game is to score more goals than the opposing team. With an estimated 250 million players active in over 200 countries and territories, it is the world's most popular sport.",
  img: pitchImg,
  historicalData: [
    '1848 The Cambridge football rules',
    '1850s many clubs were created',
    '1857 codes of rules Sheffield Football Club',
    '1863 the first set of rules of The Football Association',
    '1872 The first official international football match and create oldest football competition is the Football Association Cup',
    '1888 was formed the first Football League',
    '1904 was formed FIFA',
    '1930 The first FIFA World Cup'
  ],
}

export const menu: Menu = [
  {title: 'About', path: 'about'},
  {title: 'National tournaments', path: 'national-tournaments'},
  {title: 'Club tournaments', path: 'club-tournaments'},
  {title: 'National teams', path: 'teams'},
  {title: 'Clubs', path: 'clubs'},
]

export const icons = {
  project: projectIcon,
  raiting: ratingIcon,
  confederation: {
    uefa: iconUefa,
    caf: iconCaf,
    afc: iconAfc,
  },
  trophy: {
    cup: iconCup,
    medal: iconMedal,
  },
}

export const countWorldCup = 0
export const uefaCup = 0


export const background = {
  startProject: backgroundFootballLive,
  startPage: backgroundStartPage,
}


export const nationalTournaments: NationalTournaments = {
  'concacaf': {
    id: '5-concacaf',
    title: 'CONCACAF Gold Cup',
    iconCup: iconConcacafCup,
    path: 'concacaf-cup',
    color: '#300010',
  },
  'conmebol': {
    id: '6-conmebol',
    title: 'CONMEBOL Copa América',
    iconCup: iconConmebolCup,
    path: 'conmebol-cup',
    color: '#292600',
  },
  'ofc': {
    id: '7-ofc',
    title: 'OFC Nations Cup',
    iconCup: iconOfcCup,
    path: 'ofc-cup',
    color: '#5E2A00',
  },
  'worldCup': {
    id: '1-worldCup',
    title: 'FIFA World Cup',
    iconCup: iconWorldCup,
    path: 'fifa-world-cup',
    color: '#5F5C1C',
    size: '190px',
  },
  'uefa': {
    id: '2-uefa',
    title: 'European Championship',
    iconCup: iconUefaCup,
    path: 'uefa-cup',
    color: '#002645',
  },
  'afc': {
    id: '3-afc',
    title: 'AFC Asian Cup',
    iconCup: iconAfcCup,
    path: 'afc-cup',
    color: '#2C003D',
  },
  'caf': {
    id: '4-caf',
    title: 'Africa Cup of Nations',
    iconCup: iconCafCup,
    path: 'caf-cup',
    color: '#012B00',
  },
}

export const nationalTournamentsKeys: NameTournament[]= Object.keys(nationalTournaments) as NameTournament[];


















export const tournamentsWorldCup: number[] = [ 1930, 1934, 1938, 1950, 1954, 1958, 1962, 1966, 1970, 1974, 
                              1978, 1982, 1986, 1990, 1994, 1998, 2002, 2006, 2010, 2014, 
                              2018, 2022]


export const dataFifaWorldCup: DataFifaWorldCup = {
  ['1930'] : {
    // image: {
    //   background: background1930,
    //   background2: background1930_2,
    //   logo: logo1930,
    //   ball: ballImg,
    // },
    image: {
      background: 'background1930',
      background2: 'background1930_2',
      logo: 'logo1930',
      ball: 'ballImg',
    },
    statistic: {
      hostCountry: 'Uruguay',
      teamsInFinalStage: 13,
      teamsInQualification: 0,
      matches: 18,
      goals: 70,
      goalsPerMatch: 3.89,
      topScorer: 'G.Stábile',
      topScorerGoals: 8,
    },
    info: {
      title: '1930 FIFA World Cup',
      dates: "The first FIFA World Cup in football was the inaugural in Uruguay from 13 to 30 July 1930.",
      peculiarities: [
        "Only a handful of European teams chose to participate because of the difficulty of traveling to South America due to the Great Depression",
        "Francisco Varallo from Argentina was the last surviving player from this World Cup. He died in 2010 at the age of 100.",
        "The first World Cup was the only one without qualification.",
        "France's Lucien Laurent was the scorer of the first World Cup goal",
        "All matches were played in the Uruguayan capital, Montevideo."
      ]
    },
    qualification: 'Not qualification',
    finalStage: [
      {
        id: '1-1930',
        date: '13.07.1930',
        stage: 'group 1',
        teams: ['France', 'Mexico'],
        score: [[4, 1], [], []],
        goals: [
          { playersScoredGoal: ['L. Laurent', 'Langiller', 'Maschinot'],
            timeGoals: ['19', '40', '43, 87'] }, 
          { playersScoredGoal: ['Carreño'],
            timeGoals: ['80'] }, 
        ],
        stadium: 
        {title: 'Estadio Pocitos',
          city: 'Montevideo',
          country: 'Uruguay',
          attendance: '4 444',
        }
      },
      {
        id: '2-1930',
        date: '13.07.1930',
        stage: 'group 4',
        teams: ['United States', 'Belgium'],
        score: [[3, 0], [], []],
        goals: [
          { playersScoredGoal: ['McGhee', 'Florie', 'Patenaude'],
            timeGoals: ['23', '45', '69'] }, 
          { playersScoredGoal: [''],
            timeGoals: [''] }, 
        ],
        stadium: 
        {title: 'Estadio Parque Central',
          city: 'Montevideo',
          country: 'Uruguay',
          attendance: '18 346',
        }
      },
      {
        id: '3-1930',
        date: '14.07.1930',
        stage: 'group 2',
        teams: ['Yugoslavia', 'Brazil'],
        score: [[2, 1], [], []],
        goals: [
          { playersScoredGoal: ['Tirnanić', 'Bek'],
            timeGoals: ['21', '30'] }, 
          { playersScoredGoal: ['Preguinho'],
            timeGoals: ['62'] }, 
        ],
        stadium: 
        {title: 'Estadio Parque Central',
          city: 'Montevideo',
          country: 'Uruguay',
          attendance: '24 059',
        }
      },
      {
        id: '4-1930',
        date: '14.07.1930',
        stage: 'group 3',
        teams: ['Romania', 'Peru'],
        score: [[3, 1], [], []],
        goals: [
          { playersScoredGoal: ['Deșu', 'Stanciu', 'Kovács'],
            timeGoals: ['1', '79', '89'] }, 
          { playersScoredGoal: ['De Souza'],
            timeGoals: ['75'] }, 
        ],
        stadium: 
        {title: 'Estadio Pocitos',
          city: 'Montevideo',
          country: 'Uruguay',
          attendance: '2 549',
        }
      },
      {
        id: '5-1930',
        date: '15.07.1930',
        stage: 'group 1',
        teams: ['Argentina', 'France'],
        score: [[1, 0], [], []],
        goals: [
          { playersScoredGoal: ['Monti'],
            timeGoals: ['81'] }, 
          { playersScoredGoal: [''],
            timeGoals: [''] }, 
        ],
        stadium: 
        {title: 'Estadio Parque Central',
          city: 'Montevideo',
          country: 'Uruguay',
          attendance: '23 409',
        }
      },
      {
        id: '6-1930',
        date: '16.07.1930',
        stage: 'group 1',
        teams: ['Chile', 'Mexico'],
        score: [[3, 0], [], []],
        goals: [
          { playersScoredGoal: ['Vidal', 'M. Rosas'],
            timeGoals: ['1, 65', '52(o.g.)'] }, 
          { playersScoredGoal: [''],
            timeGoals: [''] }, 
        ],
        stadium: 
        {title: 'Estadio Parque Central',
          city: 'Montevideo',
          country: 'Uruguay',
          attendance: '9 249',
        }
      },
      {
        id: '7-1930',
        date: '17.07.1930',
        stage: 'group 2',
        teams: ['Yugoslavia', 'Bolivia'],
        score: [[4, 0], [], []],
        goals: [
          { playersScoredGoal: ['Bek', 'Marjanović', 'Vujadinović'],
            timeGoals: ['60, 67', '65', '85'] }, 
          { playersScoredGoal: [''],
            timeGoals: [''] }, 
        ],
        stadium: 
        {title: 'Estadio Parque Central',
          city: 'Montevideo',
          country: 'Uruguay',
          attendance: '18 306',
        }
      },
      {
        id: '8-1930',
        date: '17.07.1930',
        stage: 'group 4',
        teams: ['United States', 'Paraguay'],
        score: [[3, 0], [], []],
        goals: [
          { playersScoredGoal: ['Patenaude'],
            timeGoals: ['10, 15, 50'] }, 
          { playersScoredGoal: [''],
            timeGoals: [''] }, 
        ],
        stadium: 
        {title: 'Estadio Parque Central',
          city: 'Montevideo',
          country: 'Uruguay',
          attendance: '18 306',
        }
      },
      {
        id: '9-1930',
        date: '18.07.1930',
        stage: 'group 3',
        teams: ['Uruguay', 'Peru'],
        score: [[1, 0], [], []],
        goals: [
          { playersScoredGoal: ['Vargas Peña'],
            timeGoals: ['40'] }, 
          { playersScoredGoal: [''],
            timeGoals: [''] }, 
        ],
        stadium: 
        {title: 'Estadio Centenario',
          city: 'Montevideo',
          country: 'Uruguay',
          attendance: '12 000',
        }
      },
      {
        id: '10-1930',
        date: '19.07.1930',
        stage: 'group 1',
        teams: ['Chile', 'France'],
        score: [[1, 0], [], []],
        goals: [
          { playersScoredGoal: ['Subiabre'],
            timeGoals: ['67'] }, 
          { playersScoredGoal: [''],
            timeGoals: [''] }, 
        ],
        stadium: 
        {title: 'Estadio Centenario',
          city: 'Montevideo',
          country: 'Uruguay',
          attendance: '2 000',
        }
      },
      {
        id: '11-1930',
        date: '19.07.1930',
        stage: 'group 1',
        teams: ['Argentina', 'Mexico'],
        score: [[6, 3], [], []],
        goals: [
          { playersScoredGoal: ['Stábile', 'Zumelzú', 'Varallo'],
            timeGoals: ['8, 17, 80', '12, 55', '53'] }, 
          { playersScoredGoal: ['M. Rosas', 'Gayón'],
            timeGoals: ['42(pen.), 65', '75'] }, 
        ],
        stadium: 
        {title: 'Estadio Centenario',
          city: 'Montevideo',
          country: 'Uruguay',
          attendance: '42 100',
        }
      },
      {
        id: '12-1930',
        date: '20.07.1930',
        stage: 'group 2',
        teams: ['Brazil', 'Bolivia'],
        score: [[4, 0], [], []],
        goals: [
          { playersScoredGoal: ['Moderato', 'Preguinho'],
            timeGoals: ['37, 73', '57, 83'] }, 
          { playersScoredGoal: [''],
            timeGoals: [''] }, 
        ],
        stadium: 
        {title: 'Estadio Centenario',
          city: 'Montevideo',
          country: 'Uruguay',
          attendance: '25 466',
        }
      },
      {
        id: '13-1930',
        date: '20.07.1930',
        stage: 'group 4',
        teams: ['Paraguay', 'Belgium'],
        score: [[1, 0], [], []],
        goals: [
          { playersScoredGoal: ['Vargas Peña'],
            timeGoals: ['40',] }, 
          { playersScoredGoal: [''],
            timeGoals: [''] }, 
        ],
        stadium: 
        {title: 'Estadio Centenario',
          city: 'Montevideo',
          country: 'Uruguay',
          attendance: '12 000',
        }
      },
      {
        id: '14-1930',
        date: '21.07.1930',
        stage: 'group 3',
        teams: ['Uruguay', 'Romania'],
        score: [[4, 0], [], []],
        goals: [
          { playersScoredGoal: ['Dorado', 'Scarone', 'Anselmo', 'Cea'],
            timeGoals: ['7', '26', '31', '35'] }, 
          { playersScoredGoal: [''],
            timeGoals: [''] }, 
        ],
        stadium: 
        {title: 'Estadio Centenario',
          city: 'Montevideo',
          country: 'Uruguay',
          attendance: '70 022',
        }
      },
      {
        id: '15-1930',
        date: '22.07.1930',
        stage: 'group 1',
        teams: ['Argentina', 'Chile'],
        score: [[3, 1], [], []],
        goals: [
          { playersScoredGoal: ['Stábile', 'M. Evaristo'],
            timeGoals: ['12, 13', '51'] }, 
          { playersScoredGoal: ['	Subiabre'],
            timeGoals: ['15'] }, 
        ],
        stadium: 
        {title: 'Estadio Centenario',
          city: 'Montevideo',
          country: 'Uruguay',
          attendance: '41 459',
        }
      },
      {
        id: '16-1930',
        date: '26.07.1930',
        stage: '1/2 finals',
        teams: ['Argentina', 'United States'],
        score: [[6, 1], [2, 2], [5, 4]],
        goals: [
          { playersScoredGoal: ['Monti', 'Scopelli', 'Stábile', 'Peucelle'],
            timeGoals: ['20', '56', '69, 87', '80, 85'] }, 
          { playersScoredGoal: ['Brown'],
            timeGoals: ['89'] }, 
        ],
        stadium: 
        {title: 'Estadio Centenario',
          city: 'Montevideo',
          country: 'Uruguay',
          attendance: '72 886',
        }
      },
      {
        id: '17-1930',
        date: '27.07.1930',
        stage: '1/2 finals',
        teams: ['Uruguay', 'Yugoslavia'],
        score: [[6, 1], [], []],
        goals: [
          { playersScoredGoal: ['Cea', 'Anselmo', 'Iriarte'],
            timeGoals: ['18, 67, 72', '20, 31', '61'] }, 
          { playersScoredGoal: ['Vujadinović'],
            timeGoals: ['4'] }, 
        ],
        stadium: 
        {title: 'Estadio Centenario',
          city: 'Montevideo',
          country: 'Uruguay',
          attendance: '79 867',
        }
      },
      {
        id: '18-1930',
        date: '30.07.1930',
        stage: 'final',
        teams: ['Uruguay', 'Argentina'],
        score: [[4, 2], [], []],
        goals: [
          { playersScoredGoal: ['Dorado', 'Cea', 'Iriarte', 'Castro'],
            timeGoals: ['12', '57', '68', '89'] }, 
          { playersScoredGoal: ['Peucelle', 'Stábile'],
            timeGoals: ['20', '37'] }, 
        ],
        stadium: 
        {title: 'Estadio Centenario',
          city: 'Montevideo',
          country: 'Uruguay',
          attendance: '68 346',
        }
      },
    ]
  },
}