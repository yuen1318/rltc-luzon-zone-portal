const CSV_DATA =
`Name,Gender,Branch,Room Number,Car Number,D1T,D2T,Outing Number,Separate Event Number,BGL
RAYMOND P. DALAY,M,OTHERS,3,,,,,,FALSE
ZIZETTE NUQUI DALAY,F,OTHERS,3,,,,,,FALSE
JOVINIA S LUCAS,F,BAGUIO,101,,Track 2 : Participating in worship,Track 2 : Bible Study,,,TRUE
MARY ANTONETTE B. MIRANDA,F,BATANGAS,101,,Track 3 : Personal Management,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
PAULINE MAE R ROQUID,F,GREENHILLS,101,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
ANDREA COLEEN P. VELASCO,F,QUEZON CITY,101,,Track 3 : Personal Management,Track 1 : Leading worship,,,FALSE
CATHERINE ROSE D. SACANLE,F,BAGUIO,102,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
MARY LOURDES D. BORBON,F,BATANGAS,102,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
REGINE A. UNGSON,F,DAGUPAN,102,,Track 4 : How to make our branches attractive to younger generation,Track 2 : Bible Study,,,TRUE
TRIXIA SAM O. BURAGA,F,GREENHILLS,102,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
MERIE JUDAINE D. CARINGAL,F,BGC,103,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
FRANCES MARGARET D CHUAHIONG,F,CAVITE,103,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
CHARISSE N. SANCHEZ,F,CENTRAL,103,,Track 1 : How to run a ministry,Track 3 : Rekindling Commitment,,,FALSE
THERESE PAMAN,F,YP LNP,103,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,TRUE
ISMINE JOICE S. HIPOLITO,F,ANGELES,104,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
YSABEL PATRICIA M. ZABELLA,F,APNP,104,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,,,TRUE
GELLAINE A. SALVACION,F,BATANGAS,104,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
MICHELLE ANGELICA C. ARRANZ,F,BGC,104,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
PRECILYN B. CASPILLO,F,BGC,105,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
JANA MARIE R. REYNALDO,F,MAKATI,105,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
HANNAH LUZ R. IGNACIO,F,QUEZON CITY,105,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
CHRISTINE ALEXANDRA S. ALMAZAN,F,YP PAMPANGA - BALE,105,,Track 2 : Participating in worship,Track 1 : Leading worship,,,TRUE
SAMANTHA B. MARWELES,F,BGC,106,,Track 2 : Participating in worship,Track 1 : Leading worship,,,FALSE
KIRSTEN MELORIE D. CRUZ,F,CABUYAO,106,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,,,TRUE
JAYCEL C. CAPUNONG,F,CAVITE,106,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
JANINE S. VALERIO,F,MAKATI,106,,Track 2 : Participating in worship,Track 3 : Rekindling Commitment,,,FALSE
KATHY ROSE T. SANTOS,F,ANGELES,107,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
THERESA JOY MAITEM,F,BGC,107,,Track 4 : How to make our branches attractive to younger generation,Track 3 : Rekindling Commitment,,,FALSE
JUVY GRACE B. ADRIAS,F,CAVITE,107,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
ARIANNE L. AFABLE,F,LOS BAÑOS,107,,Track 2 : Participating in worship,Track 2 : Bible Study,,,TRUE
JELLY B AGUSTIN,F,ANGELES,108,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
KRISTALYNNE B. GREGANDA,F,CABUYAO,108,,Track 4 : How to make our branches attractive to younger generation,Track 3 : Rekindling Commitment,,,FALSE
ARLENE WARKEY PAN,F,CENTRAL,108,,Track 2 : Participating in worship,Track 2 : Bible Study,,,TRUE
DOMINIQUE T. CRUZ,F,MANILA,108,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
CAMILLE R. GARCIA,F,ALABANG,109,,Track 2 : Participating in worship,Track 3 : Rekindling Commitment,,,TRUE
JIANE RHANE A. REGALA,F,ANGELES,109,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
MEANNE P. ANDES,F,LOS BAÑOS,109,,Track 4 : How to make our branches attractive to younger generation,Track 3 : Rekindling Commitment,,,FALSE
HONEY CRISRIL M. CALIMOT,F,QUEZON CITY,109,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
JILLIAN MAE D. GUIAO,F,ANGELES,110,,Track 3 : Personal Management,Track 2 : Bible Study,,,FALSE
ARIANNE NINA M. AREVALO,F,BGC,110,,Track 4 : How to make our branches attractive to younger generation,Track 3 : Rekindling Commitment,,,TRUE
REGINE V. GERVACIO,F,DAGUPAN,110,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
KARREN N. BUENAOBRA,F,MANILA,110,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
CHRISHA MAE S. REMORERAS,F,BATANGAS,111,,Track 2 : Participating in worship,Track 2 : Bible Study,,,TRUE
RINA MARIE A. VERANO,F,CAVITE,111,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
KATRINA MAE J PERNATO,F,MAKATI,111,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
LIEZL S. MANZANO,F,MANILA,111,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
RIZA L. BERSABAL,F,ALABANG,112,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
KATERINE GAIL CATACUTAN PANGILINAN,F,CAVITE,112,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
MA. ELENA G. DUMAUAL,F,MANILA,112,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
ANGELINE CAMILLE C. JIMENEZ,F,QUEZON CITY,112,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,TRUE
KIMBERLY F. POLICARPIO,F,ANGELES,113,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
SZABELLA ELISSE M. DE CASA,F,GREENHILLS,113,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
BEVERLY GRACE C. ALCAYNO,F,MANILA,113,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,,,TRUE
MA ANGELICA NICOLE R JACOBA,F,QUEZON CITY,113,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
KIMBERLY Q. DELA CRUZ,F,ANGELES,114,,Track 4 : How to make our branches attractive to younger generation,Track 3 : Rekindling Commitment,,,FALSE
ANDREA DES D. TRIA,F,GREENHILLS,114,,Track 2 : Participating in worship,Track 3 : Rekindling Commitment,,,TRUE
JARIZA DARYL T. MEJIA,F,MANILA,114,,Track 3 : Personal Management,Track 2 : Bible Study,,,FALSE
MARIA ANGELICA P. AGBAYANI,F,QUEZON CITY,114,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
KRISHIA JANINE P. GUBATON,F,ANGELES,115,,Track 4 : How to make our branches attractive to younger generation,Track 3 : Rekindling Commitment,,,FALSE
AILEEN MAY B. TOLENTINO,F,CAVITE,115,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,,,TRUE
MICHELLE G. CATUBIG,F,MANILA,115,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
MARIA SONJA B. DELA CRUZ,F,QUEZON CITY,115,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
ALLAINE CASTRO GALANG,F,ANGELES,116,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
MARY JANE P VASQUEZ,F,LOS BAÑOS,116,,Track 1 : How to run a ministry,Track 3 : Rekindling Commitment,,,FALSE
KRISTINE JOY CUNANAN,F,MAKATI,116,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,TRUE
MARIANE G. ALMENDRAL,F,MANILA,116,,Track 2 : Participating in worship,Track 3 : Rekindling Commitment,,,FALSE
MARY CARELL D. SABA,F,CAVITE,117,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
PATRICIA DOLORES VICTORIA S RODRIGUEZ,F,CENTRAL,117,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
CYRAH MARIAH CONTRERAS,F,MAKATI,117,,Track 2 : Participating in worship,Track 2 : Bible Study,,,TRUE
MARY BERNADINE C. CALICDAN,F,MANILA,117,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
SHAINA R DUCUT,F,CENTRAL,118,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
LOI ANN DC SALAS,F,MAKATI,118,,Track 4 : How to make our branches attractive to younger generation,Track 2 : Bible Study,,,FALSE
MICHELLE CARLA M. CABUCO,F,QUEZON CITY,118,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
EZEKIELA ARCEO LACSAMANA,F,YP PAMPANGA - BALE,118,,Track 1 : How to run a ministry,Track 2 : Bible Study,,,TRUE
IRA JAMAICA T. LACO,F,ALABANG,119,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
NICOLE JOYCE V TUPAS,F,CABUYAO,119,,Track 3 : Personal Management,Track 4 : How to reach out effectively to Gen Zs,,,TRUE
MAYLINDA COMAHIG,F,MAKATI,119,,Track 3 : Personal Management,Track 2 : Bible Study,,,FALSE
NADINE ROYCE T. NUÑEZ,F,MANILA,119,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
JOANNA MARIE I QUINTOS,F,ALABANG,120,,Track 3 : Personal Management,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
MICHAELA ANTONETTE M. PANTIG,F,ANGELES,120,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
CHRISTINE G. BALMES,F,LOS BAÑOS,120,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,TRUE
ROBIN VICTORIA N. RACELA,F,QUEZON CITY,120,,Track 4 : How to make our branches attractive to younger generation,Track 2 : Bible Study,,,FALSE
JOBELLE S. GALLO,F,ALABANG,121,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
NIKI G. INARDA,F,ANGELES,121,,Track 4 : How to make our branches attractive to younger generation,Track 3 : Rekindling Commitment,,,FALSE
"JONINA RAE, DARLUCIO, VILVESTRE",F,CENTRAL,121,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,,,TRUE
SHIELA MAE B NIONES,F,MANILA,121,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
CHRISTIAN VANESSA OLEA AUSTRIA,F,ALABANG,122,,Track 3 : Personal Management,Track 2 : Bible Study,,,TRUE
ERICA MAE I. MERCADO,F,BATANGAS,122,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
NIÑA JEAN S. COMANDA,F,MAKATI,122,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
TATYANA MARIE U. GONZAGA,F,QUEZON CITY,122,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
MIKHAELLA L RACELIS,F,ALABANG,123,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
DENISE JAMES C CHUA,F,BATANGAS,123,,Track 4 : How to make our branches attractive to younger generation,Track 3 : Rekindling Commitment,,,TRUE
NOIMEE NAVARRO,F,MAKATI,123,,Track 2 : Participating in worship,Track 3 : Rekindling Commitment,,,FALSE
THERESE GABRIELLE A. SOLA,F,QUEZON CITY,123,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
OLEEN JOYCE B FLORENDO,F,ALABANG,124,,Track 2 : Participating in worship,Track 3 : Rekindling Commitment,,,FALSE
IRINE T. SALES,F,BGC,124,,Track 3 : Personal Management,Track 1 : Leading worship,,,TRUE
PRINCESS ANN L. PAGBILAO,F,CAVITE,124,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
ANGELICA B. SALAZAR,F,GREENHILLS,124,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
PAMELA ANN M. DUQUE,F,ALABANG,125,,Track 3 : Personal Management,Track 2 : Bible Study,,,FALSE
REMEDIOS BEATRICE N. GAON,F,CAVITE,125,,Track 1 : How to run a ministry,Track 2 : Bible Study,,,FALSE
ANNA JOY T. QUIRANTE,F,GREENHILLS,125,,Track 3 : Personal Management,Track 2 : Bible Study,,,FALSE
DIMPOL CANTOR REGUINDIN,F,MANILA,125,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,TRUE
RENALYN NAPILI RAMIZO,F,ANGELES,126,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
JANE MONIQUE D. MACALALAD,F,BATANGAS,126,,Track 2 : Participating in worship,Track 1 : Leading worship,,,FALSE
CHRISTINA S. BEDAÑA,F,GREENHILLS,126,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
GABRIELLE K BELMONTE,F,QUEZON CITY,126,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,TRUE
JONESTLE CENA,F,BGC,127,,Track 4 : How to make our branches attractive to younger generation,Track 2 : Bible Study,,,FALSE
CHRISTINE JOY M. ROMILLA,F,CAVITE,127,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
ANDREA G. SARONG,F,GREENHILLS,127,,Track 2 : Participating in worship,Track 2 : Bible Study,,,TRUE
RUBY ROSA V. MANICANI,F,MAKATI,127,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
JUDY ANNE J PEÑA,F,BATANGAS,128,,Track 1 : How to run a ministry,Track 3 : Rekindling Commitment,,,FALSE
ALAIZA T. ENCARNACION,F,CAVITE,128,,Track 2 : Participating in worship,Track 2 : Bible Study,,,TRUE
DIANNE NICOLE A. PADILLA,F,GREENHILLS,128,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
SARAH KAYE GAGNI,F,MAKATI,128,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
KATHERINE MENDEZ,F,BATANGAS,129,,Track 1 : How to run a ministry,Track 3 : Rekindling Commitment,,,FALSE
ROLLAINE JOVEL JAMLIG PADDRES,F,CAVITE,129,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
JULIA LEONORE D PEREA,F,GREENHILLS,129,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
GAIL BEATRICE H. VILLAMIEL,F,MAKATI,129,,Track 2 : Participating in worship,Track 1 : Leading worship,,,TRUE
GLENINE ANNE P PANGILINAN,F,ANGELES,130,,Track 3 : Personal Management,Track 2 : Bible Study,,,FALSE
LYZETTE A. LAZARTE,F,BATANGAS,130,,Track 3 : Personal Management,Track 2 : Bible Study,,,FALSE
VEENUZ MARGARETTE C. DEL ROSARIO,F,CAVITE,130,,Track 1 : How to run a ministry,Track 2 : Bible Study,,,TRUE
MARIE JONEL CHRISTINE E. REYES,F,GREENHILLS,130,,Track 4 : How to make our branches attractive to younger generation,Track 3 : Rekindling Commitment,,,FALSE
MARICAR D. AUDITOR,F,BGC,131,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
MARY ABIGAIL T OTILANO,F,GREENHILLS,131,,Track 1 : How to run a ministry,Track 2 : Bible Study,,,FALSE
KENA D. CARBONERA,F,LOS BAÑOS,131,,Track 3 : Personal Management,Track 2 : Bible Study,,,TRUE
ZAIRAH P. AYONAYON,F,MAKATI,131,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
J-ZEL A. MAGTIBAY,F,OTHERS,132,,,,,,FALSE
KRISTEL MAE OLIVEROS,F,OTHERS,132,,,,,,FALSE
AURORA V LACASTE,F,OTHERS,132,,,,,,FALSE
ANGEL S. DEL ROSARIO,M,BATANGAS,201,,Track 3 : Personal Management,Track 1 : Leading worship,,,TRUE
AYN CYRIL TIANGCO,M,CAVITE,201,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
RHOMEL IGNATIUS B. MARCOJOS,M,CENTRAL,201,,Track 3 : Personal Management,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
MATTHEW JOSEPH OBRA PADERON,M,GREENHILLS,201,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
ALDWYN JOHN T BAUTISTA,M,ANGELES,202,,Track 3 : Personal Management,Track 1 : Leading worship,,,TRUE
MARK ANGEL V. REYES,M,CAVITE,202,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
JOSE MARIE GARIN ESPANOL,M,DAGUPAN,202,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
DANIEL GABRIEL R. DE GUZMAN,M,QUEZON CITY,202,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
MARK JASON UMAS-AS CASIL,M,CAVITE,203,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
CHRISTOPHER L. RELATIVO,M,LOS BAÑOS,203,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,TRUE
JAYSON C. FRANCO,M,MANILA,203,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
WALFREDO L. GARCIA II,M,QUEZON CITY,203,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
JUAN FRANCO B DE GUZMAN,M,CABUYAO,204,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,TRUE
NERICK JOHN A BAYRON,M,GREENHILLS,204,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
JOHN MARK AZURIN ENCINARES,M,LOS BAÑOS,204,,Track 3 : Personal Management,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
DAVID M. SALIM,M,MAKATI,204,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
JON RAY BIEN D. LOGICA,M,ALABANG,205,,Track 4 : How to make our branches attractive to younger generation,Track 2 : Bible Study,,,FALSE
ELLISON DALE M. RAGUDO,M,BAGUIO,205,,Track 2 : Participating in worship,Track 2 : Bible Study,,,TRUE
RENZCIV C. QUICIO,M,GREENHILLS,205,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
HANS CHRISTIAN ANDERSON A. LABIRAN,M,MAKATI,205,,Track 3 : Personal Management,Track 1 : Leading worship,,,FALSE
JOSE LORENZO M. CUNANAN,M,ANGELES,206,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
ABRAM CAESAR C. MAAÑO,M,APNP,206,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,TRUE
ROWELL IAN S. SALVADOR,M,CAVITE,206,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
JEROME ENRIQUE J. GUSTILO,M,MAKATI,206,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
JAIME JUROE S BONITO,M,ANGELES,207,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,TRUE
RICHARD M. BUHAYO,M,BAGUIO,207,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
ARNEL BIEN H. FRANCISCO,M,BGC,207,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
SEAN VINCENT L. CABEZAS,M,CAVITE,207,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
JAN MARVIN P. DELA CRUZ,M,ANGELES,208,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,,,TRUE
CARLOS V. PALATTAO,M,CENTRAL,208,,Track 4 : How to make our branches attractive to younger generation,Track 3 : Rekindling Commitment,,,FALSE
VENNICK JAMES B. PARAS,M,GREENHILLS,208,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
DAVID MIGUEL R. DE GUZMAN,M,QUEZON CITY,208,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
ANGELO V. DEGORIO,M,ALABANG,209,,Track 2 : Participating in worship,Track 1 : Leading worship,,,TRUE
HENSON B. GLODO,M,CENTRAL,209,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
JOHN MICHAEL M. DUDAS,M,GREENHILLS,209,,Track 3 : Personal Management,Track 2 : Bible Study,,,FALSE
JOHN MICHAEL C SERRANO,M,MAKATI,209,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
AIRAM MIGUEL M. DIZON,M,ANGELES,210,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
JAN KREINDEL V LOZANO,M,CENTRAL,210,,Track 2 : Participating in worship,Track 2 : Bible Study,,,TRUE
WILLIE C. FLORES JR.,M,GREENHILLS,210,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
JUDERICO TANAY,M,MANILA,210,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
ANJIL S. AUSTRIA,M,ALABANG,211,,Track 3 : Personal Management,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
JUN EXEQUIEL E. SAYLON,M,ANGELES,211,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,TRUE
JUSTIN ANTHONY B. BUENAFE,M,BGC,211,,Track 3 : Personal Management,Track 2 : Bible Study,,,FALSE
CHRISTOPHER NICOLO C. LINAAC,M,MAKATI,211,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
DYVE D CANDAZA,M,ALABANG,212,,Track 3 : Personal Management,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
RINO C. BALUYOT JR.,M,BGC,212,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
LORENZO MARWIN M. LUNA,M,MAKATI,212,,Track 1 : How to run a ministry,Track 2 : Bible Study,,,FALSE
JOSH FELJON A. AJOC,M,MANILA,212,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,TRUE
IÑIGO MIGUEL G. VILLANUEVA,M,ALABANG,213,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
RICHARD DEAN F. BASA,M,BAGUIO,213,,Track 3 : Personal Management,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
BRIAN F. LO,M,GREENHILLS,213,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,,,TRUE
MARK ANTHONY C. PASCUAL,M,MANILA,213,,Track 3 : Personal Management,Track 1 : Leading worship,,,FALSE
JAKE D. DELA CRUZ,M,ALABANG,214,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
MARK SPENCER R. MALIG,M,ANGELES,214,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
CHRISTIAN M DELA GRACIA,M,CAVITE,214,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,TRUE
VICTOR EMMANUEL F. FUENTES,M,GREENHILLS,214,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
ALDRINNE M. ARRO,M,ALABANG,215,,Track 3 : Personal Management,Track 2 : Bible Study,,,TRUE
GIFT FLORENCE NEIL A. JASUL,M,APNP,215,,Track 2 : Participating in worship,Track 2 : Bible Study,,,FALSE
MERSAN S. CANONIGO JR.,M,MANILA,215,,Track 1 : How to run a ministry,Track 3 : Rekindling Commitment,,,FALSE
JAN AUDI BLEZ M. NAVARRO,M,ALABANG,216,,Track 2 : Participating in worship,Track 1 : Leading worship,,,FALSE
MARK JOVEN VILLACARLOS,M,APNP,216,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
MARK DAVID T. DOMINO,M,CABUYAO,216,,Track 1 : How to run a ministry,Track 2 : Bible Study,,,TRUE
NEIL RYAN NUNEZ,M,MANILA,216,,Track 1 : How to run a ministry,Track 2 : Bible Study,,,FALSE
JOHN ADRIAN A. CIELOS,M,ALABANG,217,,Track 4 : How to make our branches attractive to younger generation,Track 2 : Bible Study,,,FALSE
RHOMEL ISAAC B. MARCOJOS,M,BGC,217,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,TRUE
NOEL E. TEMARIO,M,LOS BAÑOS,217,,Track 2 : Participating in worship,Track 1 : Leading worship,,,FALSE
ZACH DOMINIC D. JACOB,M,MANILA,217,,Track 1 : How to run a ministry,Track 2 : Bible Study,,,FALSE
JON SAMUEL S MENDEZ,M,ALABANG,218,,Track 4 : How to make our branches attractive to younger generation,Track 3 : Rekindling Commitment,,,FALSE
RENZ IVERSON B. MACAGBA,M,BAGUIO,218,,Track 1 : How to run a ministry,Track 3 : Rekindling Commitment,,,TRUE
RODDEN T DE CHAVEZ,M,BGC,218,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,FALSE
DEAN R. JULIAN,M,GREENHILLS,218,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
LEMUEL GAVIN SARET,M,ALABANG,219,,Track 1 : How to run a ministry,Track 2 : Bible Study,,,FALSE
CHARLES EDGAR FRIEDRICK V. BELOSO,M,APNP,219,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,TRUE
DEO J. JOLLOSO,M,CAVITE,219,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,,,FALSE
JOSE ROSENDO R. CACHO,M,QUEZON CITY,219,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
MARC RAZEL B. BUENAFE,M,ALABANG,220,,Track 1 : How to run a ministry,Track 3 : Rekindling Commitment,,,FALSE
HERBERT JOSEPH ROXAS ESLING,M,BGC,220,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,,,TRUE
JOSHUA MIKHAEL O. BONDOC,M,CENTRAL,220,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
ELORDE G GALICIA,M,GREENHILLS,220,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,,FALSE
MAUI ARCA,M,ALABANG,221,,Track 2 : Participating in worship,Track 3 : Rekindling Commitment,,,FALSE
FRANCISCO EZEKIEL M. ESPINOSA,M,CAVITE,221,,Track 1 : How to run a ministry,Track 1 : Leading worship,,,FALSE
JAMINO F. GONZALES,M,CENTRAL,221,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,,,TRUE
LANCE MATTHEW MIRANDA CALMA,M,QUEZON CITY,221,,Track 2 : Participating in worship,Track 3 : Rekindling Commitment,,,FALSE
RICHMOND M. BANZUELO,M,ALABANG,222,,Track 2 : Participating in worship,Track 3 : Rekindling Commitment,,,FALSE
KIM PAULO SIERRA,M,CAVITE,222,,Track 4 : How to make our branches attractive to younger generation,Track 2 : Bible Study,,,FALSE
MANLEY M. SALAZAR JR.,M,CENTRAL,222,,Track 3 : Personal Management,Track 1 : Leading worship,,,FALSE
JEREMIAH A. SALVEDIA,M,QUEZON CITY,222,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,,,TRUE
PETER JESS V. LEGASPI,M,OTHERS,223,,,,,,FALSE
TED TE,M,OTHERS,223,,,,,,FALSE
JEROME J. ORBE,M,OTHERS,223,,,,,,FALSE
KYLE CRUZ,M,OTHERS,223,,,,,,FALSE
ENRICO A. OCAMPO,M,OTHERS,224,,,,,,FALSE
PATRICK ANTHONY M. CALALO,M,OTHERS,224,,,,,,FALSE
RAYMUND S. SAMSON,M,OTHERS,224,,,,,,FALSE
NATHAN CHAVEZ,M,OTHERS,224,,,,,,FALSE
MA CHRISTIANA CARMELA DALANGIN,F,OTHERS,,,,,,,FALSE
ELMER S. LACSAMANA,M,OTHERS,,,,,,,FALSE` ;
