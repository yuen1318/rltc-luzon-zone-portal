const CSV_DATA =
`Name,Gender,Branch,Room Number,Car Number,D1T,D2T,Outing Number,Separate Event Number,BGL
ALDRINNE M. ARRO,M,ALABANG,101,,Track 3 : Personal Management,Track 2 : Bible Study,,,TRUE
ANGELO V. DEGORIO,M,ALABANG,102,,Track 2 : Participating in worship,Track 1 : Leading worship,,,FALSE
LEMUEL GAVIN SARET,M,ALABANG,103,,Track 1 : How to run a ministry,Track 2 : Bible Study,,,FALSE
JON RAY BIEN D. LOGICA,M,ALABANG,104,,Track 4 : How to make our branches attractive to younger generation,Track 2 : Bible Study,,,FALSE
JOHN ADRIAN A. CIELOS,M,ALABANG,105,,Track 4 : How to make our branches attractive to younger generation,Track 2 : Bible Study,,,FALSE
PAMELA ANN M. DUQUE,F,ALABANG,,,Track 3 : Personal Management,Track 2 : Bible Study,,,FALSE
RICHMOND M. BANZUELO,M,ALABANG,106,,Track 2 : Participating in worship,Track 3 : Rekindling Commitment,,,FALSE
ANJIL S. AUSTRIA,M,ALABANG,107,,Track 3 : Personal Management,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
CHRISTIAN VANESSA OLEA AUSTRIA,F,ALABANG,,,Track 3 : Personal Management,Track 2 : Bible Study,,,FALSE
OLEEN JOYCE B FLORENDO,F,ALABANG,,,Track 2 : Participating in worship,Track 3 : Rekindling Commitment,,,FALSE
JOBELLE S. GALLO,F,ALABANG,,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
RIZA L. BERSABAL,F,ALABANG,,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
JAKE D. DELA CRUZ,M,ALABANG,108,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
MIKHAELLA L RACELIS,F,ALABANG,,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
IRA JAMAICA T. LACO,F,ALABANG,,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
JAN AUDI BLEZ M. NAVARRO,M,ALABANG,109,,Track 2 : Participating in worship,Track 1 : Leading worship,,,FALSE
MARC RAZEL B. BUENAFE,M,ALABANG,110,,Track 1 : How to run a ministry,Track 3 : Rekindling Commitment,,,FALSE
DYVE D CANDAZA,M,ALABANG,111,,Track 3 : Personal Management,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
JOANNA MARIE I QUINTOS,F,ALABANG,,,Track 3 : Personal Management,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
JON SAMUEL S MENDEZ,M,ALABANG,112,,Track 4 : How to make our branches attractive to younger generation,Track 3 : Rekindling Commitment,,,TRUE
IÑIGO MIGUEL G. VILLANUEVA,M,ALABANG,113,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
MAUI ARCA,M,ALABANG,114,,Track 2 : Participating in worship,Track 3 : Rekindling Commitment,,,FALSE
CAMILLE R. GARCIA,F,ALABANG,,,Track 2 : Participating in worship,Track 3 : Rekindling Commitment,,,FALSE
ALDWYN JOHN T BAUTISTA,M,ANGELES,110,,Track 3 : Personal Management,Track 1 : Leading worship,,,TRUE
AIRAM MIGUEL M. DIZON,M,ANGELES,111,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
ALLAINE CASTRO GALANG,F,ANGELES,201,,Track 2 : Participating in worship,Track 2 : Bible Study,,,TRUE
JIANE RHANE A. REGALA,F,ANGELES,202,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
KIMBERLY Q. DELA CRUZ,F,ANGELES,203,,Track 4 : How to make our branches attractive to younger generation,Track 3 : Rekindling Commitment,,,FALSE
MICHAELA ANTONETTE M. PANTIG,F,ANGELES,,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
NIKI G. INARDA,F,ANGELES,,,Track 4 : How to make our branches attractive to younger generation,Track 3 : Rekindling Commitment,,,FALSE
JOSE LORENZO M. CUNANAN,M,ANGELES,112,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
KATHY ROSE T. SANTOS,F,ANGELES,,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
JAN MARVIN P. DELA CRUZ,M,ANGELES,113,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
KIMBERLY F. POLICARPIO,F,ANGELES,,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
JILLIAN MAE D. GUIAO,F,ANGELES,,,Track 3 : Personal Management,Track 2 : Bible Study,,,FALSE
JELLY B AGUSTIN,F,ANGELES,,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
ISMINE JOICE S. HIPOLITO,F,ANGELES,,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
MARK SPENCER R. MALIG,M,ANGELES,114,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
JUN EXEQUIEL E. SAYLON,M,ANGELES,115,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
KRISHIA JANINE P. GUBATON,F,ANGELES,,,Track 4 : How to make our branches attractive to younger generation,Track 3 : Rekindling Commitment,,,FALSE
GLENINE ANNE P PANGILINAN,F,ANGELES,,,Track 3 : Personal Management,Track 2 : Bible Study,,,FALSE
JAIME JUROE S BONITO,M,ANGELES,116,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
RENALYN NAPILI RAMIZO,F,ANGELES,,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
JOVINIA S LUCAS,F,BAGUIO,,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
ELLISON DALE M. RAGUDO,M,BAGUIO,102,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
CATHERINE ROSE D. SACANLE,F,BAGUIO,,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
RICHARD DEAN F. BASA,M,BAGUIO,103,,Track 3 : Personal Management,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
RICHARD M. BUHAYO,M,BAGUIO,104,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
RENZ IVERSON B. MACAGBA,M,BAGUIO,105,,Track 1 : How to run a ministry,Track 3 : Rekindling Commitment,,,TRUE
GELLAINE A. SALVACION,F,BATANGAS,,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
ERICA MAE I. MERCADO,F,BATANGAS,,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
CHRISHA MAE S. REMORERAS,F,BATANGAS,,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
DENISE JAMES C CHUA,F,BATANGAS,,,Track 4 : How to make our branches attractive to younger generation,Track 3 : Rekindling Commitment,,,FALSE
JUDY ANNE J PEÑA,F,BATANGAS,201,,Track 1 : How to run a ministry,Track 3 : Rekindling Commitment,,,FALSE
MARY ANTONETTE B. MIRANDA,F,BATANGAS,202,,Track 3 : Personal Management,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
MARY LOURDES D. BORBON,F,BATANGAS,,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
KATHERINE MENDEZ,F,BATANGAS,,,Track 1 : How to run a ministry,Track 3 : Rekindling Commitment,,,FALSE
ANGEL S. DEL ROSARIO,M,BATANGAS,115,,Track 3 : Personal Management,Track 1 : Leading worship,,,TRUE
LYZETTE A. LAZARTE,F,BATANGAS,,,Track 3 : Personal Management,Track 2 : Bible Study,,,FALSE
JANE MONIQUE D. MACALALAD,F,BATANGAS,,,Track 2 : Participating in worship,Track 1 : Leading worship,,,FALSE
IVY MELISSA M. BALUYOT,F,BGC,116,,Track 4 : How to make our branches attractive to younger generation,Track 2 : Bible Study,,,FALSE
SAMANTHA B. MARWELES,F,BGC,,,Track 2 : Participating in worship,Track 1 : Leading worship,,,FALSE
ARNEL BIEN H. FRANCISCO,M,BGC,114,,Track 1 : How to run a ministry,Track 3 : Rekindling Commitment,,,TRUE
RINO C. BALUYOT JR.,M,BGC,115,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
ARIANNE NINA M. AREVALO,F,BGC,,,Track 4 : How to make our branches attractive to younger generation,Track 3 : Rekindling Commitment,,,FALSE
MICHELLE ANGELICA C. ARRANZ,F,BGC,,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
RHOMEL ISAAC B. MARCOJOS,M,BGC,,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
PRECILYN B. CASPILLO,F,BGC,,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
IRINE T. SALES,F,BGC,,,Track 3 : Personal Management,Track 1 : Leading worship,,,FALSE
MERIE JUDAINE D. CARINGAL,F,BGC,,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
MARICAR D. AUDITOR,F,BGC,,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
HERBERT JOSEPH ROXAS ESLING,M,BGC,117,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
JUSTIN ANTHONY B. BUENAFE,M,BGC,118,,Track 3 : Personal Management,Track 2 : Bible Study,,,FALSE
THERESA JOY MAITEM,F,BGC,,,,,,,FALSE
RODDEN T DE CHAVEZ,M,BGC,119,,,,,,FALSE
KRISTALYNNE B. GREGANDA,F,CABUYAO,,,Track 4 : How to make our branches attractive to younger generation,Track 3 : Rekindling Commitment,,,FALSE
NICOLE JOYCE V TUPAS,F,CABUYAO,,,Track 3 : Personal Management,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
JUAN FRANCO B DE GUZMAN,M,CABUYAO,113,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,TRUE
MARK DAVID T. DOMINO,M,CABUYAO,114,,Track 1 : How to run a ministry,Track 2 : Bible Study,,,FALSE
KIRSTEN MELORIE D. CRUZ,F,CABUYAO,,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
FRANCISCO EZEKIEL M. ESPINOSA,M,CAVITE,101,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
CHRISTINE JOY M. ROMILLA,F,CAVITE,,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
CHRISTIAN M DELA GRACIA,M,CAVITE,102,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,TRUE
AYN CYRIL TIANGCO,M,CAVITE,103,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
MARK ANGEL V. REYES,M,CAVITE,104,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
KIM PAULO SIERRA,M,CAVITE,105,,Track 4 : How to make our branches attractive to younger generation,Track 2 : Bible Study,,,FALSE
VEENUZ MARGARETTE C. DEL ROSARIO,F,CAVITE,,,Track 1 : How to run a ministry,Track 2 : Bible Study,,,FALSE
KATERINE GAIL CATACUTAN PANGILINAN,F,CAVITE,,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
RINA MARIE A. VERANO,F,CAVITE,,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
ROWELL IAN S. SALVADOR,M,CAVITE,106,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
SEAN VINCENT L. CABEZAS,M,CAVITE,107,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
AILEEN MAY B. TOLENTINO,F,CAVITE,,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
ROLLAINE JOVEL JAMLIG PADDRES,F,CAVITE,,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
PRINCESS ANN L. PAGBILAO,F,CAVITE,,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
ALAIZA T. ENCARNACION,F,CAVITE,,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
REMEDIOS BEATRICE N. GAON,F,CAVITE,,,Track 1 : How to run a ministry,Track 2 : Bible Study,,,FALSE
DEO J. JOLLOSO,M,CAVITE,108,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,,,TRUE
MARK JASON UMAS-AS CASIL,M,CAVITE,109,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
JUVY GRACE B. ADRIAS,F,CAVITE,,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
FRANCES MARGARET D CHUAHIONG,F,CAVITE,,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
MARY CARELL D. SABA,F,CAVITE,,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
JAYCEL C. CAPUNONG,F,CAVITE,,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
HENSON B. GLODO,M,CENTRAL,117,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
JAMINO F. GONZALES,M,CENTRAL,118,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,TRUE
RHOMEL IGNATIUS B. MARCOJOS,M,CENTRAL,119,,Track 3 : Personal Management,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
CHARISSE N. SANCHEZ,F,CENTRAL,,,Track 1 : How to run a ministry,Track 3 : Rekindling Commitment,,,FALSE
CARLOS V. PALATTAO,M,CENTRAL,120,,Track 4 : How to make our branches attractive to younger generation,Track 3 : Rekindling Commitment,,,FALSE
SHAINA R DUCUT,F,CENTRAL,,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
MANLEY M. SALAZAR JR.,M,CENTRAL,121,,Track 3 : Personal Management,Track 1 : Leading worship,,,TRUE
JOSHUA MIKHAEL O. BONDOC,M,CENTRAL,122,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
"JONINA RAE, DARLUCIO, VILVESTRE",F,CENTRAL,,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
ARLENE WARKEY PAN,F,CENTRAL,,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
PATRICIA DOLORES VICTORIA S RODRIGUEZ,F,CENTRAL,,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
JAN KREINDEL V LOZANO,M,CENTRAL,123,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
REGINE V. GERVACIO,F,DAGUPAN,,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
JOSE MARIE GARIN ESPANOL,M,DAGUPAN,116,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,TRUE
REGINE A. UNGSON,F,DAGUPAN,,,Track 4 : How to make our branches attractive to younger generation,Track 2 : Bible Study,,,FALSE
CHRISTINA S. BEDAÑA,F,GREENHILLS,201,,Track 4 : How to make our branches attractive to younger generation,Track 2 : Bible Study,,,FALSE
ANDREA G. SARONG,F,GREENHILLS,202,,Track 2 : Participating in worship,Track 2 : Bible Study,,,TRUE
ANDREA DES D. TRIA,F,GREENHILLS,203,,Track 2 : Participating in worship,Track 3 : Rekindling Commitment,,,FALSE
MARIE JONEL CHRISTINE E. REYES,F,GREENHILLS,,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
SZABELLA ELISSE M. DE CASA,F,GREENHILLS,,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
MARY ABIGAIL T OTILANO,F,GREENHILLS,,,Track 1 : How to run a ministry,Track 2 : Bible Study,,,FALSE
ANNA JOY T. QUIRANTE,F,GREENHILLS,,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
DIANNE NICOLE A. PADILLA,F,GREENHILLS,,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
TRIXIA SAM O. BURAGA,F,GREENHILLS,,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
RENZCIV C. QUICIO,M,GREENHILLS,115,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
ANGELICA B. SALAZAR,F,GREENHILLS,,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
JULIA LEONORE D PEREA,F,GREENHILLS,,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
VENNICK JAMES B. PARAS,M,GREENHILLS,116,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
PAULINE MAE R ROQUID,F,GREENHILLS,,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
ELORDE G GALICIA,M,GREENHILLS,117,,Track 3 : Personal Management,Track 1 : Leading worship,,,TRUE
VICTOR EMMANUEL F. FUENTES,M,GREENHILLS,118,,Track 2 : Participating in worship,Track 3 : Rekindling Commitment,,,FALSE
DEAN R. JULIAN,M,GREENHILLS,119,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,TRUE
MATTHEW JOSEPH OBRA PADERON,M,GREENHILLS,120,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
NERICK JOHN A BAYRON,M,GREENHILLS,121,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
JOHN MICHAEL M. DUDAS,M,GREENHILLS,122,,Track 3 : Personal Management,Track 2 : Bible Study,,,FALSE
BRIAN F. LO,M,GREENHILLS,123,,,,,,TRUE
WILLIE C. FLORES JR.,M,GREENHILLS,124,,,,,,FALSE
MARY JANE P VASQUEZ,F,LOS BAÑOS,,,Track 1 : How to run a ministry,Track 3 : Rekindling Commitment,,,FALSE
CHRISTINE G. BALMES,F,LOS BAÑOS,,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
JOHN MARK AZURIN ENCINARES,M,LOS BAÑOS,110,,Track 3 : Personal Management,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
ARIANNE L. AFABLE,F,LOS BAÑOS,,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
CHRISTOPHER L. RELATIVO,M,LOS BAÑOS,111,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,TRUE
NOEL E. TEMARIO,M,LOS BAÑOS,112,,Track 2 : Participating in worship,Track 1 : Leading worship,,,FALSE
MEANNE P. ANDES,F,LOS BAÑOS,,,Track 4 : How to make our branches attractive to younger generation,Track 3 : Rekindling Commitment,,,FALSE
KENA D. CARBONERA,F,LOS BAÑOS,,,Track 3 : Personal Management,Track 2 : Bible Study,,,FALSE
CHARLES EDGAR FRIEDRICK V. BELOSO,M,LUCENA,106,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,TRUE
YSABEL PATRICIA M. ZABELLA,F,LUCENA,,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
ABRAM CAESAR C. MAAÑO,M,LUCENA,107,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
MARK JOVEN VILLACARLOS,M,LUCENA,108,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
GIFT FLORENCE NEIL A. JASUL,M,LUCENA,109,,Track 2 : Participating in worship,Track 2 : Bible Study,,,TRUE
LORENZO MARWIN M. LUNA,M,MAKATI,124,,,,,,TRUE
HANS CHRISTIAN ANDERSON A. LABIRAN,M,MAKATI,101,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
JANA MARIE R. REYNALDO,F,MAKATI,,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
GAIL BEATRICE H. VILLAMIEL,F,MAKATI,,,Track 3 : Personal Management,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
JANINE S. VALERIO,F,MAKATI,,,Track 3 : Personal Management,Track 2 : Bible Study,,,FALSE
RUBY ROSA V. MANICANI,F,MAKATI,,,Track 1 : How to run a ministry,Track 3 : Rekindling Commitment,,,FALSE
NIÑA JEAN S. COMANDA,F,MAKATI,,,Track 2 : Participating in worship,Track 3 : Rekindling Commitment,,,FALSE
MAYLINDA COMAHIG,F,MAKATI,,,Track 3 : Personal Management,Track 2 : Bible Study,,,FALSE
JOSE GAMALIEL S FELONGCO,M,MAKATI,102,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
KRISTINE JOY CUNANAN,F,MAKATI,,,Track 4 : How to make our branches attractive to younger generation,Track 2 : Bible Study,,,FALSE
LOI ANN DC SALAS,F,MAKATI,,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
NOIMEE NAVARRO,F,MAKATI,,,Track 2 : Participating in worship,Track 3 : Rekindling Commitment,,,FALSE
CYRAH MARIAH CONTRERAS,F,MAKATI,,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
KATRINA MAE J PERNATO,F,MAKATI,,,Track 1 : How to run a ministry,Track 2 : Bible Study,,,FALSE
JOHN MICHAEL C SERRANO,M,MAKATI,103,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,TRUE
DAVID M. SALIM,M,MAKATI,104,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,TRUE
ZAIRAH P. AYONAYON,F,MAKATI,,,,,,,FALSE
JEROME ENRIQUE J. GUSTILO,M,MAKATI,105,,Track 2 : Participating in worship,Track 1 : Leading worship,,,FALSE
CHRISTOPHER NICOLO C. LINAAC,M,MAKATI,106,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
ZACH DOMINIC D. JACOB,M,MANILA,107,,Track 1 : How to run a ministry,Track 2 : Bible Study,,,TRUE
MERSAN S. CANONIGO JR.,M,MANILA,108,,Track 1 : How to run a ministry,Track 3 : Rekindling Commitment,,,FALSE
DOMINIQUE T. CRUZ,F,MANILA,,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
NEIL RYAN NUNEZ,M,MANILA,109,,Track 1 : How to run a ministry,Track 2 : Bible Study,,,FALSE
MARY BERNADINE C. CALICDAN,F,MANILA,,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
MA. ELENA G. DUMAUAL,F,MANILA,201,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
DIMPOL CANTOR REGUINDIN,F,MANILA,202,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
KARREN N. BUENAOBRA,F,MANILA,203,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,TRUE
BEVERLY GRACE C. ALCAYNO,F,MANILA,,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
SHIELA MAE B NIONES,F,MANILA,,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
LIEZL S. MANZANO,F,MANILA,,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
MARIANE G. ALMENDRAL,F,MANILA,,,Track 2 : Participating in worship,Track 3 : Rekindling Commitment,,,FALSE
JAYSON C. FRANCO,M,MANILA,110,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
JARIZA DARYL T. MEJIA,F,MANILA,,,Track 3 : Personal Management,Track 2 : Bible Study,,,FALSE
JUDERICO TANAY,M,MANILA,111,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
JOSH FELJON A. AJOC,M,MANILA,112,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
NADINE ROYCE T. NUÑEZ,F,MANILA,,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
MICHELLE G. CATUBIG,F,MANILA,,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
MARK ANTHONY C. PASCUAL,M,MANILA,113,,Track 3 : Personal Management,Track 1 : Leading worship,,,FALSE
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
RAYMUND S. SAMSON,M,OTHERS,,,,,,,FALSE
THERESE GABRIELLE A. SOLA,F,QUEZON CITY,,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
ANDREA COLEEN P. VELASCO,F,QUEZON CITY,,,Track 3 : Personal Management,Track 1 : Leading worship,,,FALSE
ANGELINE CAMILLE C. JIMENEZ,F,QUEZON CITY,,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
JEREMIAH A. SALVEDIA,M,QUEZON CITY,120,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,,,TRUE
HANNAH LUZ R. IGNACIO,F,QUEZON CITY,,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
ROBIN VICTORIA N. RACELA,F,QUEZON CITY,,,Track 4 : How to make our branches attractive to younger generation,Track 2 : Bible Study,,,FALSE
MA ANGELICA NICOLE R JACOBA,F,QUEZON CITY,,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
HONEY CRISRIL M. CALIMOT,F,QUEZON CITY,,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
MARIA ANGELICA P. AGBAYANI,F,QUEZON CITY,,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
MICHELLE CARLA M. CABUCO,F,QUEZON CITY,,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
TATYANA MARIE U. GONZAGA,F,QUEZON CITY,,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
DANIEL GABRIEL R. DE GUZMAN,M,QUEZON CITY,121,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
MARIA SONJA B. DELA CRUZ,F,QUEZON CITY,,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
DAVID MIGUEL R. DE GUZMAN,M,QUEZON CITY,122,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,,,TRUE
JOSE ROSENDO R. CACHO,M,QUEZON CITY,123,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
WALFREDO L. GARCIA II,M,QUEZON CITY,124,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
LANCE MATTHEW MIRANDA CALMA,M,QUEZON CITY,101,,Track 2 : Participating in worship,Track 3 : Rekindling Commitment,,,FALSE
GABRIELLE K BELMONTE,F,QUEZON CITY,,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
THERESE PAMAN,F,YP LNP,,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
EZEKIELA ARCEO LACSAMANA,F,YP PAMPANGA - BALE,,,Track 1 : How to run a ministry,Track 2 : Bible Study,,,FALSE
CHRISTINE ALEXANDRA S. ALMAZAN,F,YP PAMPANGA - BALE,,,Track 2 : Participating in worship,Track 1 : Leading worship,,,FALSE` ;
