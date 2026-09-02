const CSV_DATA =
`Name,Gender,Branch,Room Number,Car Number,D1T,D2T,Outing Number,Separate Event Number,BGL
ALDRINNE M. ARRO,M,ALABANG,,,Track 3 : Personal Management,Track 2 : Bible Study,,,FALSE
ANGELO V. DEGORIO,M,ALABANG,,,Track 2 : Participating in worship,Track 1 : Leading worship,,,FALSE
LEMUEL GAVIN SARET,M,ALABANG,,,Track 1 : How to run a ministry,Track 2 : Bible Study,,,FALSE
JON RAY BIEN D. LOGICA,M,ALABANG,,,Track 4 : How to make our branches attractive to younger generation,Track 2 : Bible Study,,,FALSE
JOHN ADRIAN A. CIELOS,M,ALABANG,,,Track 4 : How to make our branches attractive to younger generation,Track 2 : Bible Study,,,FALSE
PAMELA ANN M. DUQUE,F,ALABANG,,,Track 3 : Personal Management,Track 2 : Bible Study,,,FALSE
RICHMOND M. BANZUELO,M,ALABANG,,,Track 2 : Participating in worship,Track 3 : Rekindling Commitment,,,FALSE
ANJIL S. AUSTRIA,M,ALABANG,,,Track 3 : Personal Management,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
CHRISTIAN VANESSA OLEA AUSTRIA,F,ALABANG,,,Track 3 : Personal Management,Track 2 : Bible Study,,,FALSE
OLEEN JOYCE B FLORENDO,F,ALABANG,,,Track 2 : Participating in worship,Track 3 : Rekindling Commitment,,,FALSE
JOBELLE S. GALLO,F,ALABANG,,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
RIZA L. BERSABAL,F,ALABANG,,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
JAKE D. DELA CRUZ,M,ALABANG,,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
MIKHAELLA L RACELIS,F,ALABANG,,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
IRA JAMAICA T. LACO,F,ALABANG,,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
JAN AUDI BLEZ M. NAVARRO,M,ALABANG,,,Track 2 : Participating in worship,Track 1 : Leading worship,,,FALSE
MARC RAZEL B. BUENAFE,M,ALABANG,,,Track 1 : How to run a ministry,Track 3 : Rekindling Commitment,,,FALSE
DYVE D CANDAZA,M,ALABANG,,,Track 3 : Personal Management,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
JOANNA MARIE I QUINTOS,F,ALABANG,,,Track 3 : Personal Management,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
JON SAMUEL S MENDEZ,M,ALABANG,,,Track 4 : How to make our branches attractive to younger generation,Track 3 : Rekindling Commitment,,,FALSE
IÑIGO MIGUEL G. VILLANUEVA,M,ALABANG,,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
MAUI ARCA,M,ALABANG,,,Track 2 : Participating in worship,Track 3 : Rekindling Commitment,,,FALSE
CAMILLE R. GARCIA,F,ALABANG,,,Track 2 : Participating in worship,Track 3 : Rekindling Commitment,,,FALSE
AMIEL M. MALONZO,M,ANGELES,,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
ALDWYN JOHN T BAUTISTA,M,ANGELES,,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
AIRAM MIGUEL M. DIZON,M,ANGELES,,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
ALLAINE CASTRO GALANG,F,ANGELES,,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
JIANE RHANE A. REGALA,F,ANGELES,,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
KIMBERLY Q. DELA CRUZ,F,ANGELES,,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
MICHAELA ANTONETTE M. PANTIG,F,ANGELES,,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
NIKI G. INARDA,F,ANGELES,,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
JOSE LORENZO M. CUNANAN,M,ANGELES,,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,,,TRUE
KATHY ROSE T. SANTOS,F,ANGELES,,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,,,TRUE
JAN MARVIN P. DELA CRUZ,M,ANGELES,,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
KIMBERLY F. POLICARPIO,F,ANGELES,,,Track 2 : Participating in worship,Track 3 : Rekindling Commitment,,,FALSE
JILLIAN MAE D. GUIAO,F,ANGELES,,,Track 3 : Personal Management,Track 2 : Bible Study,,,FALSE
JELLY B AGUSTIN,F,ANGELES,,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
ISMINE JOICE S. HIPOLITO,F,ANGELES,,,Track 3 : Personal Management,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
MARK SPENCER R. MALIG,M,ANGELES,,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
JUN EXEQUIEL E. SAYLON,M,ANGELES,,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
KRISHIA JANINE P. GUBATON,F,ANGELES,,,Track 4 : How to make our branches attractive to younger generation,Track 3 : Rekindling Commitment,,,FALSE
GLENINE ANNE P PANGILINAN,F,ANGELES,,,Track 3 : Personal Management,Track 2 : Bible Study,,,FALSE
MARVIN SANTOS MACAPINLAC,M,ANGELES,,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
JAIME JUROE S BONITO,M,ANGELES,,,Track 1 : How to run a ministry,Track 3 : Rekindling Commitment,,,FALSE
JOVINIA S LUCAS,F,BAGUIO,,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
ELLISON DALE M. RAGUDO,M,BAGUIO,,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
CATHERINE ROSE D. SACANLE,F,BAGUIO,,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
RICHARD DEAN F. BASA,M,BAGUIO,,,Track 3 : Personal Management,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
RICHARD M. BUHAYO,M,BAGUIO,,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
RENZ IVERSON B. MACAGBA,M,BAGUIO,,,Track 1 : How to run a ministry,Track 3 : Rekindling Commitment,,,FALSE
GELLAINE A. SALVACION,F,BATANGAS,,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
ERICA MAE I. MERCADO,F,BATANGAS,,,Track 2 : Participating in worship,Track 1 : Leading worship,,,FALSE
CHRISHA MAE S. REMORERAS,F,BATANGAS,,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
DENISE JAMES C CHUA,F,BATANGAS,,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
JUDY ANNE J PEÑA,F,BATANGAS,,,Track 1 : How to run a ministry,Track 3 : Rekindling Commitment,,,FALSE
MARY ANTONETTE B. MIRANDA,F,BATANGAS,,,Track 3 : Personal Management,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
MARY LOURDES D. BORBON,F,BATANGAS,,,Track 4 : How to make our branches attractive to younger generation,Track 2 : Bible Study,,,FALSE
KATHERINE MENDEZ,F,BATANGAS,,,Track 1 : How to run a ministry,Track 3 : Rekindling Commitment,,,FALSE
ANGEL S. DEL ROSARIO,M,BATANGAS,,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
LYZETTE A. LAZARTE,F,BATANGAS,,,Track 3 : Personal Management,Track 2 : Bible Study,,,FALSE
IVY MELISSA M. BALUYOT,F,BGC,,,Track 4 : How to make our branches attractive to younger generation,Track 2 : Bible Study,,,FALSE
SAMANTHA B. MARWELES,F,BGC,,,Track 2 : Participating in worship,Track 1 : Leading worship,,,FALSE
ARNEL BIEN H. FRANCISCO,M,BGC,,,Track 1 : How to run a ministry,Track 3 : Rekindling Commitment,,,FALSE
RINO C. BALUYOT JR.,M,BGC,,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
ARIANNE NINA M. AREVALO,F,BGC,,,Track 4 : How to make our branches attractive to younger generation,Track 3 : Rekindling Commitment,,,FALSE
MICHELLE ANGELICA C. ARRANZ,F,BGC,,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
RHOMEL ISAAC B. MARCOJOS,M,BGC,,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
PRECILYN B. CASPILLO,F,BGC,,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
IRINE T. SALES,F,BGC,,,Track 3 : Personal Management,Track 1 : Leading worship,,,FALSE
MERIE JUDAINE D. CARINGAL,F,BGC,,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
MARICAR D. AUDITOR,F,BGC,,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
HERBERT JOSEPH ROXAS ESLING,M,BGC,,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
JUSTIN ANTHONY B. BUENAFE,M,BGC,,,Track 3 : Personal Management,Track 2 : Bible Study,,,FALSE
KRISTALYNNE B. GREGANDA,F,CABUYAO,,,Track 3 : Personal Management,Track 1 : Leading worship,,,FALSE
NICOLE JOYCE V TUPAS,F,CABUYAO,,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
JUAN FRANCO B DE GUZMAN,M,CABUYAO,,,Track 4 : How to make our branches attractive to younger generation,Track 3 : Rekindling Commitment,,,FALSE
MARK DAVID T. DOMINO,M,CABUYAO,,,Track 1 : How to run a ministry,Track 2 : Bible Study,,,FALSE
FRANCISCO EZEKIEL M. ESPINOSA,M,CAVITE,,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
CHRISTINE JOY M. ROMILLA,F,CAVITE,,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
CHRISTIAN M DELA GRACIA,M,CAVITE,,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
AYN CYRIL TIANGCO,M,CAVITE,,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
MARK ANGEL V. REYES,M,CAVITE,,,Track 3 : Personal Management,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
KIM PAULO SIERRA,M,CAVITE,,,Track 4 : How to make our branches attractive to younger generation,Track 2 : Bible Study,,,FALSE
VEENUZ MARGARETTE C. DEL ROSARIO,F,CAVITE,,,Track 1 : How to run a ministry,Track 2 : Bible Study,,,FALSE
KATERINE GAIL CATACUTAN PANGILINAN,F,CAVITE,,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
RINA MARIE A. VERANO,F,CAVITE,,,Track 4 : How to make our branches attractive to younger generation,Track 3 : Rekindling Commitment,,,FALSE
ROWELL IAN S. SALVADOR,M,CAVITE,,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
SEAN VINCENT L. CABEZAS,M,CAVITE,,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
AILEEN MAY B. TOLENTINO,F,CAVITE,,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
ROLLAINE JOVEL JAMLIG PADDRES,F,CAVITE,,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
PRINCESS ANN L. PAGBILAO,F,CAVITE,,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
ALAIZA T. ENCARNACION,F,CAVITE,,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
REMEDIOS BEATRICE N. GAON,F,CAVITE,,,Track 1 : How to run a ministry,Track 2 : Bible Study,,,FALSE
DEO J. JOLLOSO,M,CAVITE,,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
MARK JASON UMAS-AS CASIL,M,CAVITE,,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
JUVY GRACE B. ADRIAS,F,CAVITE,,,Track 2 : Participating in worship,Track 3 : Rekindling Commitment,,,FALSE
FRANCES MARGARET D CHUAHIONG,F,CAVITE,,,Track 3 : Personal Management,Track 2 : Bible Study,,,FALSE
MARY CARELL D. SABA,F,CAVITE,,,Track 1 : How to run a ministry,Track 3 : Rekindling Commitment,,,FALSE
JAYCEL C. CAPUNONG,F,CAVITE,,,Track 3 : Personal Management,Track 1 : Leading worship,,,FALSE
HENSON B. GLODO,M,CENTRAL,,,Track 4 : How to make our branches attractive to younger generation,Track 2 : Bible Study,,,FALSE
JAMINO F. GONZALES,M,CENTRAL,,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
RHOMEL IGNATIUS B. MARCOJOS,M,CENTRAL,,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
CHARISSE N. SANCHEZ,F,CENTRAL,,,Track 1 : How to run a ministry,Track 3 : Rekindling Commitment,,,FALSE
CARLOS V. PALATTAO,M,CENTRAL,,,Track 4 : How to make our branches attractive to younger generation,Track 3 : Rekindling Commitment,,,FALSE
SHAINA R DUCUT,F,CENTRAL,,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
MANLEY M. SALAZAR JR.,M,CENTRAL,,,Track 3 : Personal Management,Track 1 : Leading worship,,,FALSE
JOSHUA MIKHAEL O. BONDOC,M,CENTRAL,,,Track 2 : Participating in worship,Track 1 : Leading worship,,,FALSE
"JONINA RAE, DARLUCIO, VILVESTRE",F,CENTRAL,,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
ARLENE WARKEY PAN,F,CENTRAL,,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
PATRICIA DOLORES VICTORIA S RODRIGUEZ,F,CENTRAL,,,Track 3 : Personal Management,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
JAN KREINDEL V LOZANO,M,CENTRAL,,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
REGINE V. GERVACIO,F,DAGUPAN,,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
JOSE MARIE GARIN ESPANOL,M,DAGUPAN,,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
REGINE A. UNGSON,F,DAGUPAN,,,Track 4 : How to make our branches attractive to younger generation,Track 2 : Bible Study,,,FALSE
CHRISTINA S. BEDAÑA,F,GREENHILLS,,,Track 4 : How to make our branches attractive to younger generation,Track 2 : Bible Study,,,FALSE
ANDREA G. SARONG,F,GREENHILLS,,,Track 1 : How to run a ministry,Track 2 : Bible Study,,,FALSE
ANDREA DES D. TRIA,F,GREENHILLS,,,Track 1 : How to run a ministry,Track 3 : Rekindling Commitment,,,FALSE
MARIE JONEL CHRISTINE E. REYES,F,GREENHILLS,,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
SZABELLA ELISSE M. DE CASA,F,GREENHILLS,,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
MARY ABIGAIL T OTILANO,F,GREENHILLS,,,Track 1 : How to run a ministry,Track 2 : Bible Study,,,FALSE
ANNA JOY T. QUIRANTE,F,GREENHILLS,,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
DIANNE NICOLE A. PADILLA,F,GREENHILLS,,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
TRIXIA SAM O. BURAGA,F,GREENHILLS,,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
RENZCIV C. QUICIO,M,GREENHILLS,,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
ANGELICA B. SALAZAR,F,GREENHILLS,,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
JULIA LEONORE D PEREA,F,GREENHILLS,,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
VENNICK JAMES B. PARAS,M,GREENHILLS,,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
PAULINE MAE R ROQUID,F,GREENHILLS,,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
ELORDE G GALICIA,M,GREENHILLS,,,Track 3 : Personal Management,Track 1 : Leading worship,,,FALSE
VICTOR EMMANUEL F. FUENTES,M,GREENHILLS,,,Track 2 : Participating in worship,Track 3 : Rekindling Commitment,,,FALSE
DEAN R. JULIAN,M,GREENHILLS,,,Track 2 : Participating in worship,Track 1 : Leading worship,,,FALSE
MATTHEW JOSEPH OBRA PADERON,M,GREENHILLS,,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
NERICK JOHN A BAYRON,M,GREENHILLS,,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
JOHN MICHAEL M. DUDAS,M,GREENHILLS,,,Track 3 : Personal Management,Track 2 : Bible Study,,,FALSE
MARY JANE P VASQUEZ,F,LOS BAÑOS,,,Track 1 : How to run a ministry,Track 3 : Rekindling Commitment,,,FALSE
CHRISTINE G. BALMES,F,LOS BAÑOS,,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
JOHN MARK AZURIN ENCINARES,M,LOS BAÑOS,,,Track 3 : Personal Management,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
ARIANNE L. AFABLE,F,LOS BAÑOS,,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
CHRISTOPHER L. RELATIVO,M,LOS BAÑOS,,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
NOEL E. TEMARIO,M,LOS BAÑOS,,,Track 2 : Participating in worship,Track 1 : Leading worship,,,FALSE
MEANNE P. ANDES,F,LOS BAÑOS,,,Track 4 : How to make our branches attractive to younger generation,Track 3 : Rekindling Commitment,,,FALSE
KENA D. CARBONERA,F,LOS BAÑOS,,,Track 3 : Personal Management,Track 2 : Bible Study,,,FALSE
CHARLES EDGAR FRIEDRICK V. BELOSO,M,LUCENA,,,Track 1 : How to run a ministry,Track 2 : Bible Study,,,FALSE
YSABEL PATRICIA M. ZABELLA,F,LUCENA,,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
ABRAM CAESAR C. MAAÑO,M,LUCENA,,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
MARK JOVEN VILLACARLOS,M,LUCENA,,,Track 3 : Personal Management,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
GIFT FLORENCE NEIL A. JASUL,M,LUCENA,,,Track 2 : Participating in worship,Track 3 : Rekindling Commitment,,,FALSE
LORENZO MARWIN M. LUNA,M,MAKATI,,,Track 1 : How to run a ministry,Track 2 : Bible Study,,,FALSE
HANS CHRISTIAN ANDERSON A. LABIRAN,M,MAKATI,,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
JANA MARIE R. REYNALDO,F,MAKATI,,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
GAIL BEATRICE H. VILLAMIEL,F,MAKATI,,,Track 3 : Personal Management,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
JANINE S. VALERIO,F,MAKATI,,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
RUBY ROSA V. MANICANI,F,MAKATI,,,Track 1 : How to run a ministry,Track 3 : Rekindling Commitment,,,FALSE
NIÑA JEAN S. COMANDA,F,MAKATI,,,Track 2 : Participating in worship,Track 3 : Rekindling Commitment,,,FALSE
MAYLINDA COMAHIG,F,MAKATI,,,Track 3 : Personal Management,Track 2 : Bible Study,,,FALSE
JOSE GAMALIEL S FELONGCO,M,MAKATI,,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
KRISTINE JOY CUNANAN,F,MAKATI,,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
LOI ANN DC SALAS,F,MAKATI,,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
NOIMEE NAVARRO,F,MAKATI,,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
CYRAH MARIAH CONTRERAS,F,MAKATI,,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
KATRINA MAE J PERNATO,F,MAKATI,,,Track 1 : How to run a ministry,Track 2 : Bible Study,,,FALSE
JOHN MICHAEL C SERRANO,M,MAKATI,,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
DAVID M. SALIM,M,MAKATI,,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
ZAIRAH P. AYONAYON,F,MAKATI,,,Track 2 : Participating in worship,Track 1 : Leading worship,,,FALSE
ZACH DOMINIC D. JACOB,M,MANILA,,,Track 1 : How to run a ministry,Track 2 : Bible Study,,,FALSE
MERSAN S. CANONIGO JR.,M,MANILA,,,Track 1 : How to run a ministry,Track 3 : Rekindling Commitment,,,FALSE
DOMINIQUE T. CRUZ,F,MANILA,,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
NEIL RYAN NUNEZ,M,MANILA,,,Track 1 : How to run a ministry,Track 2 : Bible Study,,,FALSE
MARY BERNADINE C. CALICDAN,F,MANILA,,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
MA. ELENA G. DUMAUAL,F,MANILA,,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
DIMPOL CANTOR REGUINDIN,F,MANILA,,,Track 2 : Participating in worship,Track 1 : Leading worship,,,FALSE
KARREN N. BUENAOBRA,F,MANILA,,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
BEVERLY GRACE C. ALCAYNO,F,MANILA,,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
SHIELA MAE B NIONES,F,MANILA,,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
LIEZL S. MANZANO,F,MANILA,,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
MARIANE G. ALMENDRAL,F,MANILA,,,Track 4 : How to make our branches attractive to younger generation,Track 3 : Rekindling Commitment,,,FALSE
JAYSON C. FRANCO,M,MANILA,,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
JARIZA DARYL T. MEJIA,F,MANILA,,,Track 3 : Personal Management,Track 2 : Bible Study,,,FALSE
JUDERICO TANAY,M,MANILA,,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
JOSH FELJON A. AJOC,M,MANILA,,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
NADINE ROYCE T. NUÑEZ,F,MANILA,,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
MICHELLE G. CATUBIG,F,MANILA,,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
MARK ANTHONY C. PASCUAL,M,MANILA,,,Track 3 : Personal Management,Track 1 : Leading worship,,,FALSE
RAYMOND P. DALAY,M,OTHERS,,,,,,,FALSE
J-ZEL A. MAGTIBAY,F,OTHERS,,,,,,,FALSE
ZIZETTE NUQUI DALAY,F,OTHERS,,,,,,,FALSE
ENRICO A. OCAMPO,M,OTHERS,,,,,,,FALSE
PETER JESS V. LEGASPI,M,OTHERS,,,,,,,FALSE
MA CHRISTIANA CARMELA DALANGIN,F,OTHERS,,,,,,,FALSE
TED TE,M,OTHERS,,,,,,,FALSE
KRISTEL MAE OLIVEROS,F,OTHERS,,,,,,,FALSE
JEROME J. ORBE,M,OTHERS,,,,,,,FALSE
PATRICK ANTHONY M. CALALO,M,OTHERS,,,,,,,FALSE
ELMER S. LACSAMANA,M,OTHERS,,,,,,,FALSE
AURORA V LACASTE,F,OTHERS,,,,,,,FALSE
THERESE GABRIELLE A. SOLA,F,QUEZON CITY,,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
ANDREA COLEEN P. VELASCO,F,QUEZON CITY,,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
ANGELINE CAMILLE C. JIMENEZ,F,QUEZON CITY,,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
JEREMIAH A. SALVEDIA,M,QUEZON CITY,,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
HANNAH LUZ R. IGNACIO,F,QUEZON CITY,,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
ROBIN VICTORIA N. RACELA,F,QUEZON CITY,,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
MA ANGELICA NICOLE R JACOBA,F,QUEZON CITY,,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
HONEY CRISRIL M. CALIMOT,F,QUEZON CITY,,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
MARIA ANGELICA P. AGBAYANI,F,QUEZON CITY,,,Track 2 : Participating in worship,Track 3 : Rekindling Commitment,,,FALSE
MICHELLE CARLA M. CABUCO,F,QUEZON CITY,,,Track 4 : How to make our branches attractive to younger generation,Track 3 : Rekindling Commitment,,,FALSE
TATYANA MARIE U. GONZAGA,F,QUEZON CITY,,,Track 3 : Personal Management,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
DANIEL GABRIEL R. DE GUZMAN,M,QUEZON CITY,,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
MARIA SONJA B. DELA CRUZ,F,QUEZON CITY,,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
DAVID MIGUEL R. DE GUZMAN,M,QUEZON CITY,,,Track 4 : How to make our branches attractive to younger generation,Track 2 : Bible Study,,,FALSE
JOSE ROSENDO R. CACHO,M,QUEZON CITY,,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
WALFREDO L. GARCIA II,M,QUEZON CITY,,,Track 3 : Personal Management,Track 1 : Leading worship,,,FALSE
LANCE MATTHEW MIRANDA CALMA,M,QUEZON CITY,,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
THERESE PAMAN,F,YP LNP,,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
EZEKIELA ARCEO LACSAMANA,F,YP PAMPANGA - BALE,,,Track 1 : How to run a ministry,Track 2 : Bible Study,,,FALSE
CHRISTINE ALEXANDRA S. ALMAZAN,F,YP PAMPANGA - BALE,,,Track 2 : Participating in worship,Track 1 : Leading worship,,,FALSE` ;
