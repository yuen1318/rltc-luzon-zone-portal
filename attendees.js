const CSV_DATA =
`Name,Gender,Branch,Room Number,Car Number,D1T,D2T,Outing Number,Separate Event Number,BGL
ALDRINNE M. ARRO,M,ALABANG,215,,Track 3 : Personal Management,Track 2 : Bible Study,,,TRUE
ANGELO V. DEGORIO,M,ALABANG,209,,Track 2 : Participating in worship,Track 1 : Leading worship,,,FALSE
LEMUEL GAVIN SARET,M,ALABANG,219,,Track 1 : How to run a ministry,Track 2 : Bible Study,,,FALSE
JON RAY BIEN D. LOGICA,M,ALABANG,205,,Track 4 : How to make our branches attractive to younger generation,Track 2 : Bible Study,,,FALSE
JOHN ADRIAN A. CIELOS,M,ALABANG,217,,Track 4 : How to make our branches attractive to younger generation,Track 2 : Bible Study,,,FALSE
PAMELA ANN M. DUQUE,F,ALABANG,125,,Track 3 : Personal Management,Track 2 : Bible Study,,,FALSE
RICHMOND M. BANZUELO,M,ALABANG,222,,Track 2 : Participating in worship,Track 3 : Rekindling Commitment,,,FALSE
ANJIL S. AUSTRIA,M,ALABANG,211,,Track 3 : Personal Management,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
CHRISTIAN VANESSA OLEA AUSTRIA,F,ALABANG,122,,Track 3 : Personal Management,Track 2 : Bible Study,,,TRUE
OLEEN JOYCE B FLORENDO,F,ALABANG,124,,Track 2 : Participating in worship,Track 3 : Rekindling Commitment,,,FALSE
JOBELLE S. GALLO,F,ALABANG,121,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
RIZA L. BERSABAL,F,ALABANG,112,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
JAKE D. DELA CRUZ,M,ALABANG,214,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
MIKHAELLA L RACELIS,F,ALABANG,123,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
IRA JAMAICA T. LACO,F,ALABANG,119,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
JAN AUDI BLEZ M. NAVARRO,M,ALABANG,216,,Track 2 : Participating in worship,Track 1 : Leading worship,,,FALSE
MARC RAZEL B. BUENAFE,M,ALABANG,220,,Track 1 : How to run a ministry,Track 3 : Rekindling Commitment,,,FALSE
DYVE D CANDAZA,M,ALABANG,212,,Track 3 : Personal Management,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
JOANNA MARIE I QUINTOS,F,ALABANG,120,,Track 3 : Personal Management,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
JON SAMUEL S MENDEZ,M,ALABANG,218,,Track 4 : How to make our branches attractive to younger generation,Track 3 : Rekindling Commitment,,,FALSE
IÑIGO MIGUEL G. VILLANUEVA,M,ALABANG,213,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
MAUI ARCA,M,ALABANG,221,,Track 2 : Participating in worship,Track 3 : Rekindling Commitment,,,FALSE
CAMILLE R. GARCIA,F,ALABANG,109,,Track 2 : Participating in worship,Track 3 : Rekindling Commitment,,,TRUE
ALDWYN JOHN T BAUTISTA,M,ANGELES,202,,Track 3 : Personal Management,Track 1 : Leading worship,,,FALSE
AIRAM MIGUEL M. DIZON,M,ANGELES,210,,Track 2 : Participating in worship,Track 2 : Bible Study,,,TRUE
ALLAINE CASTRO GALANG,F,ANGELES,116,,Track 2 : Participating in worship,Track 2 : Bible Study,,,TRUE
JIANE RHANE A. REGALA,F,ANGELES,109,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
KIMBERLY Q. DELA CRUZ,F,ANGELES,114,,Track 4 : How to make our branches attractive to younger generation,Track 3 : Rekindling Commitment,,,FALSE
MICHAELA ANTONETTE M. PANTIG,F,ANGELES,120,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
NIKI G. INARDA,F,ANGELES,121,,Track 4 : How to make our branches attractive to younger generation,Track 3 : Rekindling Commitment,,,FALSE
JOSE LORENZO M. CUNANAN,M,ANGELES,206,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
KATHY ROSE T. SANTOS,F,ANGELES,107,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
JAN MARVIN P. DELA CRUZ,M,ANGELES,208,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
KIMBERLY F. POLICARPIO,F,ANGELES,113,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
JILLIAN MAE D. GUIAO,F,ANGELES,110,,Track 3 : Personal Management,Track 2 : Bible Study,,,FALSE
JELLY B AGUSTIN,F,ANGELES,108,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
ISMINE JOICE S. HIPOLITO,F,ANGELES,104,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
MARK SPENCER R. MALIG,M,ANGELES,214,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
JUN EXEQUIEL E. SAYLON,M,ANGELES,211,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
KRISHIA JANINE P. GUBATON,F,ANGELES,115,,Track 4 : How to make our branches attractive to younger generation,Track 3 : Rekindling Commitment,,,FALSE
GLENINE ANNE P PANGILINAN,F,ANGELES,130,,Track 3 : Personal Management,Track 2 : Bible Study,,,TRUE
JAIME JUROE S BONITO,M,ANGELES,207,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
RENALYN NAPILI RAMIZO,F,ANGELES,126,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
JOVINIA S LUCAS,F,BAGUIO,101,,Track 2 : Participating in worship,Track 2 : Bible Study,,,TRUE
ELLISON DALE M. RAGUDO,M,BAGUIO,205,,Track 2 : Participating in worship,Track 2 : Bible Study,,,TRUE
CATHERINE ROSE D. SACANLE,F,BAGUIO,102,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
RICHARD DEAN F. BASA,M,BAGUIO,213,,Track 3 : Personal Management,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
RICHARD M. BUHAYO,M,BAGUIO,207,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
RENZ IVERSON B. MACAGBA,M,BAGUIO,218,,Track 1 : How to run a ministry,Track 3 : Rekindling Commitment,,,TRUE
GELLAINE A. SALVACION,F,BATANGAS,104,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
ERICA MAE I. MERCADO,F,BATANGAS,122,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
CHRISHA MAE S. REMORERAS,F,BATANGAS,111,,Track 2 : Participating in worship,Track 2 : Bible Study,,,TRUE
DENISE JAMES C CHUA,F,BATANGAS,123,,Track 4 : How to make our branches attractive to younger generation,Track 3 : Rekindling Commitment,,,TRUE
JUDY ANNE J PEÑA,F,BATANGAS,128,,Track 1 : How to run a ministry,Track 3 : Rekindling Commitment,,,FALSE
MARY ANTONETTE B. MIRANDA,F,BATANGAS,101,,Track 3 : Personal Management,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
MARY LOURDES D. BORBON,F,BATANGAS,102,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
KATHERINE MENDEZ,F,BATANGAS,129,,Track 1 : How to run a ministry,Track 3 : Rekindling Commitment,,,FALSE
ANGEL S. DEL ROSARIO,M,BATANGAS,201,,Track 3 : Personal Management,Track 1 : Leading worship,,,TRUE
LYZETTE A. LAZARTE,F,BATANGAS,130,,Track 3 : Personal Management,Track 2 : Bible Study,,,FALSE
JANE MONIQUE D. MACALALAD,F,BATANGAS,126,,Track 2 : Participating in worship,Track 1 : Leading worship,,,FALSE
JONESTLE CENA,F,BGC,127,,Track 4 : How to make our branches attractive to younger generation,Track 2 : Bible Study,,,FALSE
SAMANTHA B. MARWELES,F,BGC,106,,Track 2 : Participating in worship,Track 1 : Leading worship,,,FALSE
ARNEL BIEN H. FRANCISCO,M,BGC,207,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,TRUE
RINO C. BALUYOT JR.,M,BGC,212,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
ARIANNE NINA M. AREVALO,F,BGC,110,,Track 4 : How to make our branches attractive to younger generation,Track 3 : Rekindling Commitment,,,TRUE
MICHELLE ANGELICA C. ARRANZ,F,BGC,104,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
RHOMEL ISAAC B. MARCOJOS,M,BGC,217,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
PRECILYN B. CASPILLO,F,BGC,105,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
IRINE T. SALES,F,BGC,124,,Track 3 : Personal Management,Track 1 : Leading worship,,,TRUE
MERIE JUDAINE D. CARINGAL,F,BGC,103,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
MARICAR D. AUDITOR,F,BGC,131,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
HERBERT JOSEPH ROXAS ESLING,M,BGC,220,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,TRUE
JUSTIN ANTHONY B. BUENAFE,M,BGC,211,,Track 3 : Personal Management,Track 2 : Bible Study,,,FALSE
THERESA JOY MAITEM,F,BGC,107,,Track 4 : How to make our branches attractive to younger generation,Track 3 : Rekindling Commitment,,,FALSE
RODDEN T DE CHAVEZ,M,BGC,218,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
KRISTALYNNE B. GREGANDA,F,CABUYAO,108,,Track 4 : How to make our branches attractive to younger generation,Track 3 : Rekindling Commitment,,,FALSE
NICOLE JOYCE V TUPAS,F,CABUYAO,119,,Track 3 : Personal Management,Track 4 : How to reach out effectively to Gen Zs,,,TRUE
JUAN FRANCO B DE GUZMAN,M,CABUYAO,204,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,TRUE
MARK DAVID T. DOMINO,M,CABUYAO,216,,Track 1 : How to run a ministry,Track 2 : Bible Study,,,TRUE
KIRSTEN MELORIE D. CRUZ,F,CABUYAO,106,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,,,TRUE
FRANCISCO EZEKIEL M. ESPINOSA,M,CAVITE,221,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
CHRISTINE JOY M. ROMILLA,F,CAVITE,127,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
CHRISTIAN M DELA GRACIA,M,CAVITE,214,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,TRUE
AYN CYRIL TIANGCO,M,CAVITE,201,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
MARK ANGEL V. REYES,M,CAVITE,202,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
KIM PAULO SIERRA,M,CAVITE,222,,Track 4 : How to make our branches attractive to younger generation,Track 2 : Bible Study,,,FALSE
VEENUZ MARGARETTE C. DEL ROSARIO,F,CAVITE,130,,Track 1 : How to run a ministry,Track 2 : Bible Study,,,FALSE
KATERINE GAIL CATACUTAN PANGILINAN,F,CAVITE,112,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
RINA MARIE A. VERANO,F,CAVITE,111,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
ROWELL IAN S. SALVADOR,M,CAVITE,206,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
SEAN VINCENT L. CABEZAS,M,CAVITE,207,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
AILEEN MAY B. TOLENTINO,F,CAVITE,115,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,,,TRUE
ROLLAINE JOVEL JAMLIG PADDRES,F,CAVITE,129,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
PRINCESS ANN L. PAGBILAO,F,CAVITE,124,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
ALAIZA T. ENCARNACION,F,CAVITE,128,,Track 2 : Participating in worship,Track 2 : Bible Study,,,TRUE
REMEDIOS BEATRICE N. GAON,F,CAVITE,125,,Track 1 : How to run a ministry,Track 2 : Bible Study,,,FALSE
DEO J. JOLLOSO,M,CAVITE,219,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
MARK JASON UMAS-AS CASIL,M,CAVITE,203,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
JUVY GRACE B. ADRIAS,F,CAVITE,107,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
FRANCES MARGARET D CHUAHIONG,F,CAVITE,103,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
MARY CARELL D. SABA,F,CAVITE,117,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
JAYCEL C. CAPUNONG,F,CAVITE,106,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
HENSON B. GLODO,M,CENTRAL,209,,Track 2 : Participating in worship,Track 2 : Bible Study,,,TRUE
JAMINO F. GONZALES,M,CENTRAL,221,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,TRUE
RHOMEL IGNATIUS B. MARCOJOS,M,CENTRAL,201,,Track 3 : Personal Management,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
CHARISSE N. SANCHEZ,F,CENTRAL,103,,Track 1 : How to run a ministry,Track 3 : Rekindling Commitment,,,FALSE
CARLOS V. PALATTAO,M,CENTRAL,208,,Track 4 : How to make our branches attractive to younger generation,Track 3 : Rekindling Commitment,,,FALSE
SHAINA R DUCUT,F,CENTRAL,118,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
MANLEY M. SALAZAR JR.,M,CENTRAL,222,,Track 3 : Personal Management,Track 1 : Leading worship,,,FALSE
JOSHUA MIKHAEL O. BONDOC,M,CENTRAL,220,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
"JONINA RAE, DARLUCIO, VILVESTRE",F,CENTRAL,121,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,,,TRUE
ARLENE WARKEY PAN,F,CENTRAL,108,,Track 2 : Participating in worship,Track 2 : Bible Study,,,TRUE
PATRICIA DOLORES VICTORIA S RODRIGUEZ,F,CENTRAL,117,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
JAN KREINDEL V LOZANO,M,CENTRAL,210,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
REGINE V. GERVACIO,F,DAGUPAN,110,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
JOSE MARIE GARIN ESPANOL,M,DAGUPAN,202,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,TRUE
REGINE A. UNGSON,F,DAGUPAN,102,,Track 4 : How to make our branches attractive to younger generation,Track 2 : Bible Study,,,TRUE
CHRISTINA S. BEDAÑA,F,GREENHILLS,126,,Track 4 : How to make our branches attractive to younger generation,Track 2 : Bible Study,,,FALSE
ANDREA G. SARONG,F,GREENHILLS,127,,Track 2 : Participating in worship,Track 2 : Bible Study,,,TRUE
ANDREA DES D. TRIA,F,GREENHILLS,114,,Track 2 : Participating in worship,Track 3 : Rekindling Commitment,,,TRUE
MARIE JONEL CHRISTINE E. REYES,F,GREENHILLS,130,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
SZABELLA ELISSE M. DE CASA,F,GREENHILLS,113,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
MARY ABIGAIL T OTILANO,F,GREENHILLS,131,,Track 1 : How to run a ministry,Track 2 : Bible Study,,,FALSE
ANNA JOY T. QUIRANTE,F,GREENHILLS,125,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
DIANNE NICOLE A. PADILLA,F,GREENHILLS,128,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
TRIXIA SAM O. BURAGA,F,GREENHILLS,102,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
RENZCIV C. QUICIO,M,GREENHILLS,205,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
ANGELICA B. SALAZAR,F,GREENHILLS,124,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
JULIA LEONORE D PEREA,F,GREENHILLS,129,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
VENNICK JAMES B. PARAS,M,GREENHILLS,208,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
PAULINE MAE R ROQUID,F,GREENHILLS,101,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
ELORDE G GALICIA,M,GREENHILLS,220,,Track 3 : Personal Management,Track 1 : Leading worship,,,FALSE
VICTOR EMMANUEL F. FUENTES,M,GREENHILLS,214,,Track 2 : Participating in worship,Track 3 : Rekindling Commitment,,,FALSE
DEAN R. JULIAN,M,GREENHILLS,218,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
MATTHEW JOSEPH OBRA PADERON,M,GREENHILLS,201,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
NERICK JOHN A BAYRON,M,GREENHILLS,204,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
JOHN MICHAEL M. DUDAS,M,GREENHILLS,209,,Track 3 : Personal Management,Track 2 : Bible Study,,,FALSE
BRIAN F. LO,M,GREENHILLS,213,,,,,,TRUE
WILLIE C. FLORES JR.,M,GREENHILLS,210,,,,,,FALSE
MARY JANE P VASQUEZ,F,LOS BAÑOS,116,,Track 1 : How to run a ministry,Track 3 : Rekindling Commitment,,,FALSE
CHRISTINE G. BALMES,F,LOS BAÑOS,120,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,TRUE
JOHN MARK AZURIN ENCINARES,M,LOS BAÑOS,204,,Track 3 : Personal Management,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
ARIANNE L. AFABLE,F,LOS BAÑOS,107,,Track 2 : Participating in worship,Track 2 : Bible Study,,,TRUE
CHRISTOPHER L. RELATIVO,M,LOS BAÑOS,203,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,TRUE
NOEL E. TEMARIO,M,LOS BAÑOS,217,,Track 2 : Participating in worship,Track 1 : Leading worship,,,TRUE
MEANNE P. ANDES,F,LOS BAÑOS,109,,Track 4 : How to make our branches attractive to younger generation,Track 3 : Rekindling Commitment,,,FALSE
KENA D. CARBONERA,F,LOS BAÑOS,131,,Track 3 : Personal Management,Track 2 : Bible Study,,,TRUE
CHARLES EDGAR FRIEDRICK V. BELOSO,M,LUCENA,219,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,TRUE
YSABEL PATRICIA M. ZABELLA,F,LUCENA,104,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,,,TRUE
ABRAM CAESAR C. MAAÑO,M,LUCENA,206,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,TRUE
MARK JOVEN VILLACARLOS,M,LUCENA,216,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
GIFT FLORENCE NEIL A. JASUL,M,LUCENA,215,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
LORENZO MARWIN M. LUNA,M,MAKATI,212,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
HANS CHRISTIAN ANDERSON A. LABIRAN,M,MAKATI,205,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
JANA MARIE R. REYNALDO,F,MAKATI,105,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
GAIL BEATRICE H. VILLAMIEL,F,MAKATI,129,,Track 3 : Personal Management,Track 4 : How to reach out effectively to Gen Zs,,,TRUE
JANINE S. VALERIO,F,MAKATI,106,,Track 3 : Personal Management,Track 2 : Bible Study,,,FALSE
RUBY ROSA V. MANICANI,F,MAKATI,127,,Track 1 : How to run a ministry,Track 3 : Rekindling Commitment,,,FALSE
NIÑA JEAN S. COMANDA,F,MAKATI,122,,Track 2 : Participating in worship,Track 3 : Rekindling Commitment,,,FALSE
MAYLINDA COMAHIG,F,MAKATI,119,,Track 3 : Personal Management,Track 2 : Bible Study,,,FALSE
SARAH KAYE GAGNI,F,MAKATI,128,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
KRISTINE JOY CUNANAN,F,MAKATI,116,,Track 4 : How to make our branches attractive to younger generation,Track 2 : Bible Study,,,FALSE
LOI ANN DC SALAS,F,MAKATI,118,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
NOIMEE NAVARRO,F,MAKATI,123,,Track 2 : Participating in worship,Track 3 : Rekindling Commitment,,,FALSE
CYRAH MARIAH CONTRERAS,F,MAKATI,117,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,,,TRUE
KATRINA MAE J PERNATO,F,MAKATI,111,,Track 1 : How to run a ministry,Track 2 : Bible Study,,,FALSE
JOHN MICHAEL C SERRANO,M,MAKATI,209,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
DAVID M. SALIM,M,MAKATI,204,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
ZAIRAH P. AYONAYON,F,MAKATI,131,,,,,,FALSE
JEROME ENRIQUE J. GUSTILO,M,MAKATI,206,,Track 2 : Participating in worship,Track 1 : Leading worship,,,FALSE
CHRISTOPHER NICOLO C. LINAAC,M,MAKATI,211,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,TRUE
ZACH DOMINIC D. JACOB,M,MANILA,217,,Track 1 : How to run a ministry,Track 2 : Bible Study,,,FALSE
MERSAN S. CANONIGO JR.,M,MANILA,215,,Track 1 : How to run a ministry,Track 3 : Rekindling Commitment,,,FALSE
DOMINIQUE T. CRUZ,F,MANILA,108,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
NEIL RYAN NUNEZ,M,MANILA,216,,Track 1 : How to run a ministry,Track 2 : Bible Study,,,FALSE
MARY BERNADINE C. CALICDAN,F,MANILA,117,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
MA. ELENA G. DUMAUAL,F,MANILA,112,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
DIMPOL CANTOR REGUINDIN,F,MANILA,125,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,TRUE
KARREN N. BUENAOBRA,F,MANILA,110,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
BEVERLY GRACE C. ALCAYNO,F,MANILA,113,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,,,TRUE
SHIELA MAE B NIONES,F,MANILA,121,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
LIEZL S. MANZANO,F,MANILA,111,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
MARIANE G. ALMENDRAL,F,MANILA,116,,Track 2 : Participating in worship,Track 3 : Rekindling Commitment,,,FALSE
JAYSON C. FRANCO,M,MANILA,203,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
JARIZA DARYL T. MEJIA,F,MANILA,114,,Track 3 : Personal Management,Track 2 : Bible Study,,,FALSE
JUDERICO TANAY,M,MANILA,210,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
JOSH FELJON A. AJOC,M,MANILA,212,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,TRUE
NADINE ROYCE T. NUÑEZ,F,MANILA,119,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
MICHELLE G. CATUBIG,F,MANILA,115,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
MARK ANTHONY C. PASCUAL,M,MANILA,213,,Track 3 : Personal Management,Track 1 : Leading worship,,,FALSE
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
THERESE GABRIELLE A. SOLA,F,QUEZON CITY,123,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
ANDREA COLEEN P. VELASCO,F,QUEZON CITY,101,,Track 3 : Personal Management,Track 1 : Leading worship,,,FALSE
ANGELINE CAMILLE C. JIMENEZ,F,QUEZON CITY,112,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,TRUE
JEREMIAH A. SALVEDIA,M,QUEZON CITY,222,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,,,TRUE
HANNAH LUZ R. IGNACIO,F,QUEZON CITY,105,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
ROBIN VICTORIA N. RACELA,F,QUEZON CITY,120,,Track 4 : How to make our branches attractive to younger generation,Track 2 : Bible Study,,,FALSE
MA ANGELICA NICOLE R JACOBA,F,QUEZON CITY,113,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
HONEY CRISRIL M. CALIMOT,F,QUEZON CITY,109,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
MARIA ANGELICA P. AGBAYANI,F,QUEZON CITY,114,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
MICHELLE CARLA M. CABUCO,F,QUEZON CITY,118,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
TATYANA MARIE U. GONZAGA,F,QUEZON CITY,122,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
DANIEL GABRIEL R. DE GUZMAN,M,QUEZON CITY,202,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
MARIA SONJA B. DELA CRUZ,F,QUEZON CITY,115,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
DAVID MIGUEL R. DE GUZMAN,M,QUEZON CITY,208,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,,,TRUE
JOSE ROSENDO R. CACHO,M,QUEZON CITY,219,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
WALFREDO L. GARCIA II,M,QUEZON CITY,203,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
LANCE MATTHEW MIRANDA CALMA,M,QUEZON CITY,221,,Track 2 : Participating in worship,Track 3 : Rekindling Commitment,,,FALSE
GABRIELLE K BELMONTE,F,QUEZON CITY,126,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,TRUE
THERESE PAMAN,F,YP LNP,103,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,TRUE
EZEKIELA ARCEO LACSAMANA,F,YP PAMPANGA - BALE,118,,Track 1 : How to run a ministry,Track 2 : Bible Study,,,TRUE
CHRISTINE ALEXANDRA S. ALMAZAN,F,YP PAMPANGA - BALE,105,,Track 2 : Participating in worship,Track 1 : Leading worship,,,TRUE` ;
