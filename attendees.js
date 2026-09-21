const CSV_DATA =
`Name,Gender,Branch,Room Number,Car Number,D1T,D2T,Outing Number,Separate Event Number,BGL
RAYMOND P. DALAY,M,OTHERS,3,,,,1,,FALSE
ZIZETTE NUQUI DALAY,F,OTHERS,3,,,,,,FALSE
JOVINIA S LUCAS,F,BAGUIO,101,,Track 2 : Participating in worship,Track 2 : Bible Study,8,3,TRUE
PAULINE MAE R ROQUID,F,GREENHILLS,101,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,9,3,FALSE
ANDREA COLEEN P. VELASCO,F,QUEZON CITY,101,,Track 3 : Personal Management,Track 1 : Leading worship,10,3,FALSE
HONEY CRISRIL M. CALIMOT,F,QUEZON CITY,101,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,11,,FALSE
CATHERINE ROSE D. SACANLE,F,BAGUIO,102,,Track 1 : How to run a ministry,Track 1 : Leading worship,12,,FALSE
MARY LOURDES D. BORBON,F,BATANGAS,102,,Track 2 : Participating in worship,Track 2 : Bible Study,1,4,FALSE
REGINE A. UNGSON,F,DAGUPAN,102,,Track 4 : How to make our branches attractive to younger generation,Track 2 : Bible Study,2,4,TRUE
TRIXIA SAM O. BURAGA,F,GREENHILLS,102,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,3,4,FALSE
MERIE JUDAINE D. CARINGAL,F,BGC,103,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,4,8,FALSE
FRANCES MARGARET D CHUAHIONG,F,CAVITE,103,,Track 2 : Participating in worship,Track 2 : Bible Study,5,1,TRUE
CHARISSE N. SANCHEZ,F,CENTRAL,103,,Track 1 : How to run a ministry,Track 3 : Rekindling Commitment,6,1,FALSE
THERESE PAMAN,F,YP LNP,103,,Track 1 : How to run a ministry,Track 1 : Leading worship,7,1,FALSE
ISMINE JOICE S. HIPOLITO,F,ANGELES,104,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,8,5,FALSE
YSABEL PATRICIA M. ZABELLA,F,APNP,104,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,9,5,TRUE
GELLAINE A. SALVACION,F,BATANGAS,104,,Track 1 : How to run a ministry,Track 1 : Leading worship,10,,FALSE
MICHELLE ANGELICA C. ARRANZ,F,BGC,104,,Track 1 : How to run a ministry,Track 1 : Leading worship,11,5,FALSE
PRECILYN B. CASPILLO,F,BGC,105,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,12,8,FALSE
JANA MARIE R. REYNALDO,F,MAKATI,105,,Track 1 : How to run a ministry,Track 1 : Leading worship,1,2,TRUE
HANNAH LUZ R. IGNACIO,F,QUEZON CITY,105,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,2,2,FALSE
CHRISTINE ALEXANDRA S. ALMAZAN,F,YP PAMPANGA - BALE,105,,Track 2 : Participating in worship,Track 1 : Leading worship,3,2,FALSE
SAMANTHA B. MARWELES,F,BGC,106,,Track 2 : Participating in worship,Track 1 : Leading worship,4,3,FALSE
KIRSTEN MELORIE D. CRUZ,F,CABUYAO,106,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,5,3,FALSE
JAYCEL C. CAPUNONG,F,CAVITE,106,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,6,3,TRUE
JANINE S. VALERIO,F,MAKATI,106,,Track 2 : Participating in worship,Track 3 : Rekindling Commitment,7,3,FALSE
KATHY ROSE T. SANTOS,F,ANGELES,107,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,,4,FALSE
THERESA JOY MAITEM,F,BGC,107,,Track 4 : How to make our branches attractive to younger generation,Track 3 : Rekindling Commitment,8,4,FALSE
JUVY GRACE B. ADRIAS,F,CAVITE,107,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,9,4,FALSE
ARIANNE L. AFABLE,F,LOS BAÑOS,107,,Track 2 : Participating in worship,Track 2 : Bible Study,10,4,TRUE
JELLY B AGUSTIN,F,ANGELES,108,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,11,5,FALSE
KRISTALYNNE B. GREGANDA,F,CABUYAO,108,,Track 4 : How to make our branches attractive to younger generation,Track 3 : Rekindling Commitment,12,5,FALSE
ARLENE WARKEY PAN,F,CENTRAL,108,,Track 2 : Participating in worship,Track 2 : Bible Study,1,5,TRUE
DOMINIQUE T. CRUZ,F,MANILA,108,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,2,5,FALSE
CAMILLE R. GARCIA,F,ALABANG,109,,Track 2 : Participating in worship,Track 3 : Rekindling Commitment,3,6,TRUE
JIANE RHANE A. REGALA,F,ANGELES,109,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,4,6,FALSE
MARY ANTONETTE B. MIRANDA,F,BATANGAS,109,,Track 3 : Personal Management,Track 4 : How to reach out effectively to Gen Zs,5,6,FALSE
MEANNE P. ANDES,F,LOS BAÑOS,109,,Track 4 : How to make our branches attractive to younger generation,Track 3 : Rekindling Commitment,6,,FALSE
JILLIAN MAE D. GUIAO,F,ANGELES,110,,Track 3 : Personal Management,Track 2 : Bible Study,7,6,FALSE
ARIANNE NINA M. AREVALO,F,BGC,110,,Track 4 : How to make our branches attractive to younger generation,Track 3 : Rekindling Commitment,8,6,TRUE
REGINE V. GERVACIO,F,DAGUPAN,110,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,9,6,FALSE
KARREN N. BUENAOBRA,F,MANILA,110,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,10,6,FALSE
CHRISHA MAE S. REMORERAS,F,BATANGAS,111,,Track 2 : Participating in worship,Track 2 : Bible Study,11,7,TRUE
RINA MARIE A. VERANO,F,CAVITE,111,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,12,7,FALSE
KATRINA MAE J PERNATO,F,MAKATI,111,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,1,7,FALSE
LIEZL S. MANZANO,F,MANILA,111,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,2,7,FALSE
RIZA L. BERSABAL,F,ALABANG,112,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,3,8,FALSE
KATERINE GAIL CATACUTAN PANGILINAN,F,CAVITE,112,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,4,8,FALSE
MA. ELENA G. DUMAUAL,F,MANILA,112,,Track 2 : Participating in worship,Track 2 : Bible Study,5,8,FALSE
ANGELINE CAMILLE C. JIMENEZ,F,QUEZON CITY,112,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,6,8,TRUE
KIMBERLY F. POLICARPIO,F,ANGELES,113,,Track 2 : Participating in worship,Track 2 : Bible Study,7,7,FALSE
SZABELLA ELISSE M. DE CASA,F,GREENHILLS,113,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,8,,FALSE
BEVERLY GRACE C. ALCAYNO,F,MANILA,113,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,9,7,TRUE
MA ANGELICA NICOLE R JACOBA,F,QUEZON CITY,113,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,10,7,FALSE
KIMBERLY Q. DELA CRUZ,F,ANGELES,114,,Track 4 : How to make our branches attractive to younger generation,Track 3 : Rekindling Commitment,11,1,FALSE
ANDREA DES D. TRIA,F,GREENHILLS,114,,Track 2 : Participating in worship,Track 3 : Rekindling Commitment,12,1,TRUE
JARIZA DARYL T. MEJIA,F,MANILA,114,,Track 3 : Personal Management,Track 2 : Bible Study,1,1,FALSE
MARIA ANGELICA P. AGBAYANI,F,QUEZON CITY,114,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,2,1,FALSE
KRISHIA JANINE P. GUBATON,F,ANGELES,115,,Track 4 : How to make our branches attractive to younger generation,Track 3 : Rekindling Commitment,3,2,FALSE
AILEEN MAY B. TOLENTINO,F,CAVITE,115,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,4,2,TRUE
MICHELLE G. CATUBIG,F,MANILA,115,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,5,2,FALSE
MARIA SONJA B. DELA CRUZ,F,QUEZON CITY,115,,Track 2 : Participating in worship,Track 2 : Bible Study,6,2,FALSE
ALLAINE CASTRO GALANG,F,ANGELES,116,,Track 2 : Participating in worship,Track 2 : Bible Study,7,3,FALSE
MARY JANE P VASQUEZ,F,LOS BAÑOS,116,,Track 1 : How to run a ministry,Track 3 : Rekindling Commitment,8,3,FALSE
KRISTINE JOY CUNANAN,F,MAKATI,116,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,9,3,TRUE
MARIANE G. ALMENDRAL,F,MANILA,116,,Track 2 : Participating in worship,Track 3 : Rekindling Commitment,10,3,FALSE
MARY CARELL D. SABA,F,CAVITE,117,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,11,4,FALSE
PATRICIA DOLORES VICTORIA S RODRIGUEZ,F,CENTRAL,117,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,12,4,FALSE
CYRAH MARIAH CONTRERAS,F,MAKATI,117,,Track 2 : Participating in worship,Track 2 : Bible Study,1,4,TRUE
MARY BERNADINE C. CALICDAN,F,MANILA,117,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,2,4,FALSE
SHAINA R DUCUT,F,CENTRAL,118,,Track 1 : How to run a ministry,Track 1 : Leading worship,3,5,FALSE
LOI ANN DC SALAS,F,MAKATI,118,,Track 4 : How to make our branches attractive to younger generation,Track 2 : Bible Study,4,5,TRUE
MICHELLE CARLA M. CABUCO,F,QUEZON CITY,118,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,5,5,FALSE
EZEKIELA ARCEO LACSAMANA,F,YP PAMPANGA - BALE,118,,Track 1 : How to run a ministry,Track 2 : Bible Study,6,5,FALSE
IRA JAMAICA T. LACO,F,ALABANG,119,,Track 1 : How to run a ministry,Track 1 : Leading worship,7,6,FALSE
NICOLE JOYCE V TUPAS,F,CABUYAO,119,,Track 3 : Personal Management,Track 4 : How to reach out effectively to Gen Zs,8,6,TRUE
MAYLINDA COMAHIG,F,MAKATI,119,,Track 3 : Personal Management,Track 2 : Bible Study,9,6,FALSE
NADINE ROYCE T. NUÑEZ,F,MANILA,119,,Track 2 : Participating in worship,Track 2 : Bible Study,10,6,FALSE
JOANNA MARIE I QUINTOS,F,ALABANG,120,,Track 3 : Personal Management,Track 4 : How to reach out effectively to Gen Zs,11,7,FALSE
MICHAELA ANTONETTE M. PANTIG,F,ANGELES,120,,Track 1 : How to run a ministry,Track 1 : Leading worship,12,7,FALSE
CHRISTINE G. BALMES,F,LOS BAÑOS,120,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,1,7,TRUE
ROBIN VICTORIA N. RACELA,F,QUEZON CITY,120,,Track 4 : How to make our branches attractive to younger generation,Track 2 : Bible Study,2,7,FALSE
JOBELLE S. GALLO,F,ALABANG,121,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,3,8,FALSE
NIKI G. INARDA,F,ANGELES,121,,Track 4 : How to make our branches attractive to younger generation,Track 3 : Rekindling Commitment,4,8,FALSE
"JONINA RAE, DARLUCIO, VILVESTRE",F,CENTRAL,121,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,5,8,TRUE
SHIELA MAE B NIONES,F,MANILA,121,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,6,8,FALSE
CHRISTIAN VANESSA OLEA AUSTRIA,F,ALABANG,122,,Track 3 : Personal Management,Track 2 : Bible Study,7,1,TRUE
ERICA MAE I. MERCADO,F,BATANGAS,122,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,8,1,FALSE
NIÑA JEAN S. COMANDA,F,MAKATI,122,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,9,1,FALSE
TATYANA MARIE U. GONZAGA,F,QUEZON CITY,122,,Track 2 : Participating in worship,Track 2 : Bible Study,10,1,FALSE
MIKHAELLA L RACELIS,F,ALABANG,123,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,11,2,TRUE
DENISE JAMES C CHUA,F,BATANGAS,123,,Track 4 : How to make our branches attractive to younger generation,Track 3 : Rekindling Commitment,12,2,FALSE
NOIMEE NAVARRO,F,MAKATI,123,,Track 2 : Participating in worship,Track 3 : Rekindling Commitment,1,2,FALSE
THERESE GABRIELLE A. SOLA,F,QUEZON CITY,123,,Track 2 : Participating in worship,Track 2 : Bible Study,2,2,FALSE
OLEEN JOYCE B FLORENDO,F,ALABANG,124,,Track 2 : Participating in worship,Track 3 : Rekindling Commitment,3,3,FALSE
IRINE T. SALES,F,BGC,124,,Track 3 : Personal Management,Track 1 : Leading worship,4,3,TRUE
PRINCESS ANN L. PAGBILAO,F,CAVITE,124,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,5,3,FALSE
ANGELICA B. SALAZAR,F,GREENHILLS,124,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,6,3,FALSE
PAMELA ANN M. DUQUE,F,ALABANG,125,,Track 3 : Personal Management,Track 2 : Bible Study,7,4,FALSE
REMEDIOS BEATRICE N. GAON,F,CAVITE,125,,Track 1 : How to run a ministry,Track 2 : Bible Study,8,4,FALSE
ANNA JOY T. QUIRANTE,F,GREENHILLS,125,,Track 3 : Personal Management,Track 2 : Bible Study,9,4,FALSE
DIMPOL CANTOR REGUINDIN,F,MANILA,125,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,10,4,TRUE
RENALYN NAPILI RAMIZO,F,ANGELES,126,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,11,5,FALSE
JANE MONIQUE D. MACALALAD,F,BATANGAS,126,,Track 2 : Participating in worship,Track 1 : Leading worship,12,5,FALSE
CHRISTINA S. BEDAÑA,F,GREENHILLS,126,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,1,5,FALSE
GABRIELLE K BELMONTE,F,QUEZON CITY,126,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,2,5,TRUE
JONESTLE CENA,F,BGC,127,,Track 4 : How to make our branches attractive to younger generation,Track 2 : Bible Study,3,6,FALSE
CHRISTINE JOY M. ROMILLA,F,CAVITE,127,,Track 1 : How to run a ministry,Track 1 : Leading worship,4,6,FALSE
ANDREA G. SARONG,F,GREENHILLS,127,,Track 2 : Participating in worship,Track 2 : Bible Study,5,6,TRUE
RUBY ROSA V. MANICANI,F,MAKATI,127,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,6,6,FALSE
JUDY ANNE J PEÑA,F,BATANGAS,128,,Track 1 : How to run a ministry,Track 3 : Rekindling Commitment,7,7,FALSE
ALAIZA T. ENCARNACION,F,CAVITE,128,,Track 2 : Participating in worship,Track 2 : Bible Study,8,7,TRUE
DIANNE NICOLE A. PADILLA,F,GREENHILLS,128,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,9,7,FALSE
SARAH KAYE GAGNI,F,MAKATI,128,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,10,7,FALSE
KATHERINE MENDEZ,F,BATANGAS,129,,Track 1 : How to run a ministry,Track 3 : Rekindling Commitment,11,8,FALSE
ROLLAINE JOVEL JAMLIG PADDRES,F,CAVITE,129,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,12,8,FALSE
JULIA LEONORE D PEREA,F,GREENHILLS,129,,Track 2 : Participating in worship,Track 2 : Bible Study,1,8,TRUE
GAIL BEATRICE H. VILLAMIEL,F,MAKATI,129,,Track 2 : Participating in worship,Track 1 : Leading worship,2,8,FALSE
GLENINE ANNE P PANGILINAN,F,ANGELES,130,,Track 3 : Personal Management,Track 2 : Bible Study,3,1,FALSE
LYZETTE A. LAZARTE,F,BATANGAS,130,,Track 3 : Personal Management,Track 2 : Bible Study,4,1,FALSE
VEENUZ MARGARETTE C. DEL ROSARIO,F,CAVITE,130,,Track 1 : How to run a ministry,Track 2 : Bible Study,5,1,TRUE
MARIE JONEL CHRISTINE E. REYES,F,GREENHILLS,130,,Track 4 : How to make our branches attractive to younger generation,Track 3 : Rekindling Commitment,6,1,FALSE
MARICAR D. AUDITOR,F,BGC,131,,Track 2 : Participating in worship,Track 2 : Bible Study,7,2,FALSE
MARY ABIGAIL T OTILANO,F,GREENHILLS,131,,Track 1 : How to run a ministry,Track 2 : Bible Study,8,2,FALSE
KENA D. CARBONERA,F,LOS BAÑOS,131,,Track 3 : Personal Management,Track 2 : Bible Study,9,2,TRUE
ZAIRAH P. AYONAYON,F,MAKATI,131,,Track 2 : Participating in worship,Track 2 : Bible Study,10,2,FALSE
J-ZEL A. MAGTIBAY,F,OTHERS,132,,,,11,8,FALSE
KRISTEL MAE OLIVEROS,F,OTHERS,132,,,,12,,FALSE
AURORA V LACASTE,F,OTHERS,132,,,,1,,FALSE
PRINCESS SARAH MASABIO,F,OTHERS,132,,,,,,FALSE
ANGEL S. DEL ROSARIO,M,BATANGAS,201,,Track 3 : Personal Management,Track 1 : Leading worship,2,1,TRUE
AYN CYRIL TIANGCO,M,CAVITE,201,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,3,1,FALSE
RHOMEL IGNATIUS B. MARCOJOS,M,CENTRAL,201,,Track 3 : Personal Management,Track 4 : How to reach out effectively to Gen Zs,4,1,FALSE
MATTHEW JOSEPH OBRA PADERON,M,GREENHILLS,201,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,5,1,FALSE
ALDWYN JOHN T BAUTISTA,M,ANGELES,202,,Track 3 : Personal Management,Track 1 : Leading worship,6,1,TRUE
MARK ANGEL V. REYES,M,CAVITE,202,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,7,1,FALSE
JOSE MARIE GARIN ESPANOL,M,DAGUPAN,202,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,8,1,FALSE
DANIEL GABRIEL R. DE GUZMAN,M,QUEZON CITY,202,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,9,1,FALSE
MARK JASON UMAS-AS CASIL,M,CAVITE,203,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,10,2,FALSE
CHRISTOPHER L. RELATIVO,M,LOS BAÑOS,203,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,11,1,FALSE
JAYSON C. FRANCO,M,MANILA,203,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,12,2,FALSE
WALFREDO L. GARCIA II,M,QUEZON CITY,203,,Track 1 : How to run a ministry,Track 1 : Leading worship,1,2,TRUE
JUAN FRANCO B DE GUZMAN,M,CABUYAO,204,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,2,2,TRUE
NERICK JOHN A BAYRON,M,GREENHILLS,204,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,3,2,FALSE
JOHN MARK AZURIN ENCINARES,M,LOS BAÑOS,204,,Track 3 : Personal Management,Track 4 : How to reach out effectively to Gen Zs,4,2,FALSE
DAVID M. SALIM,M,MAKATI,204,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,5,2,FALSE
JON RAY BIEN D. LOGICA,M,ALABANG,205,,Track 4 : How to make our branches attractive to younger generation,Track 2 : Bible Study,6,2,FALSE
ELLISON DALE M. RAGUDO,M,BAGUIO,205,,Track 2 : Participating in worship,Track 2 : Bible Study,7,2,FALSE
RENZCIV C. QUICIO,M,GREENHILLS,205,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,8,3,TRUE
HANS CHRISTIAN ANDERSON A. LABIRAN,M,MAKATI,205,,Track 3 : Personal Management,Track 1 : Leading worship,9,3,FALSE
JOSE LORENZO M. CUNANAN,M,ANGELES,206,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,10,3,FALSE
ABRAM CAESAR C. MAAÑO,M,APNP,206,,Track 1 : How to run a ministry,Track 1 : Leading worship,11,3,TRUE
ROWELL IAN S. SALVADOR,M,CAVITE,206,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,12,3,FALSE
JEROME ENRIQUE J. GUSTILO,M,MAKATI,206,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,1,3,FALSE
JAIME JUROE S BONITO,M,ANGELES,207,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,2,3,TRUE
RICHARD M. BUHAYO,M,BAGUIO,207,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,3,3,FALSE
ARNEL BIEN H. FRANCISCO,M,BGC,207,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,4,3,FALSE
SEAN VINCENT L. CABEZAS,M,CAVITE,207,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,5,4,FALSE
JAN MARVIN P. DELA CRUZ,M,ANGELES,208,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,6,4,FALSE
CARLOS V. PALATTAO,M,CENTRAL,208,,Track 4 : How to make our branches attractive to younger generation,Track 3 : Rekindling Commitment,7,4,FALSE
VENNICK JAMES B. PARAS,M,GREENHILLS,208,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,8,4,FALSE
DAVID MIGUEL R. DE GUZMAN,M,QUEZON CITY,208,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,9,4,TRUE
ANGELO V. DEGORIO,M,ALABANG,209,,Track 2 : Participating in worship,Track 1 : Leading worship,10,4,TRUE
HENSON B. GLODO,M,CENTRAL,209,,Track 2 : Participating in worship,Track 2 : Bible Study,11,4,FALSE
JOHN MICHAEL M. DUDAS,M,GREENHILLS,209,,Track 3 : Personal Management,Track 2 : Bible Study,12,4,FALSE
JOHN MICHAEL C SERRANO,M,MAKATI,209,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,1,4,FALSE
AIRAM MIGUEL M. DIZON,M,ANGELES,210,,Track 2 : Participating in worship,Track 2 : Bible Study,2,5,FALSE
JAN KREINDEL V LOZANO,M,CENTRAL,210,,Track 2 : Participating in worship,Track 2 : Bible Study,3,5,FALSE
WILLIE C. FLORES JR.,M,GREENHILLS,210,,Track 2 : Participating in worship,Track 2 : Bible Study,4,5,FALSE
JUDERICO TANAY,M,MANILA,210,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,5,5,TRUE
ANJIL S. AUSTRIA,M,ALABANG,211,,Track 3 : Personal Management,Track 4 : How to reach out effectively to Gen Zs,6,5,FALSE
JUN EXEQUIEL E. SAYLON,M,ANGELES,211,,Track 1 : How to run a ministry,Track 1 : Leading worship,7,5,TRUE
JUSTIN ANTHONY B. BUENAFE,M,BGC,211,,Track 3 : Personal Management,Track 2 : Bible Study,8,5,FALSE
CHRISTOPHER NICOLO C. LINAAC,M,MAKATI,211,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,9,5,FALSE
DYVE D CANDAZA,M,ALABANG,212,,Track 3 : Personal Management,Track 4 : How to reach out effectively to Gen Zs,10,6,FALSE
RINO C. BALUYOT JR.,M,BGC,212,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,11,6,FALSE
LORENZO MARWIN M. LUNA,M,MAKATI,212,,Track 1 : How to run a ministry,Track 2 : Bible Study,12,6,FALSE
JOSH FELJON A. AJOC,M,MANILA,212,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,1,5,TRUE
IÑIGO MIGUEL G. VILLANUEVA,M,ALABANG,213,,Track 1 : How to run a ministry,Track 1 : Leading worship,2,6,FALSE
RICHARD DEAN F. BASA,M,BAGUIO,213,,Track 3 : Personal Management,Track 4 : How to reach out effectively to Gen Zs,3,6,FALSE
BRIAN F. LO,M,GREENHILLS,213,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,4,6,TRUE
MARK ANTHONY C. PASCUAL,M,MANILA,213,,Track 3 : Personal Management,Track 1 : Leading worship,5,6,FALSE
JAKE D. DELA CRUZ,M,ALABANG,214,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,6,6,FALSE
MARK SPENCER R. MALIG,M,ANGELES,214,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,7,7,FALSE
CHRISTIAN M DELA GRACIA,M,CAVITE,214,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,8,6,TRUE
VICTOR EMMANUEL F. FUENTES,M,GREENHILLS,214,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,9,7,FALSE
ALDRINNE M. ARRO,M,ALABANG,215,,Track 3 : Personal Management,Track 2 : Bible Study,10,7,TRUE
JEANO ROBERTO D. DELOS REYES,M,ALABANG,215,,Track 2 : Participating in worship,Track 2 : Bible Study,11,7,FALSE
GIFT FLORENCE NEIL A. JASUL,M,APNP,215,,Track 2 : Participating in worship,Track 2 : Bible Study,12,7,FALSE
MERSAN S. CANONIGO JR.,M,MANILA,215,,Track 1 : How to run a ministry,Track 3 : Rekindling Commitment,1,7,FALSE
JAN AUDI BLEZ M. NAVARRO,M,ALABANG,216,,Track 2 : Participating in worship,Track 1 : Leading worship,2,7,FALSE
MARK JOVEN VILLACARLOS,M,APNP,216,,Track 1 : How to run a ministry,Track 1 : Leading worship,3,7,FALSE
MARK DAVID T. DOMINO,M,CABUYAO,216,,Track 1 : How to run a ministry,Track 2 : Bible Study,4,7,TRUE
NEIL RYAN NUNEZ,M,MANILA,216,,Track 1 : How to run a ministry,Track 2 : Bible Study,5,7,FALSE
JOHN ADRIAN A. CIELOS,M,ALABANG,217,,Track 4 : How to make our branches attractive to younger generation,Track 2 : Bible Study,6,8,FALSE
RHOMEL ISAAC B. MARCOJOS,M,BGC,217,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,7,8,FALSE
NOEL E. TEMARIO,M,LOS BAÑOS,217,,Track 2 : Participating in worship,Track 1 : Leading worship,8,8,TRUE
ZACH DOMINIC D. JACOB,M,MANILA,217,,Track 1 : How to run a ministry,Track 2 : Bible Study,9,8,FALSE
JON SAMUEL S MENDEZ,M,ALABANG,218,,Track 4 : How to make our branches attractive to younger generation,Track 3 : Rekindling Commitment,10,8,FALSE
RENZ IVERSON B. MACAGBA,M,BAGUIO,218,,Track 1 : How to run a ministry,Track 3 : Rekindling Commitment,11,8,TRUE
RODDEN T DE CHAVEZ,M,BGC,218,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,12,8,FALSE
DEAN R. JULIAN,M,GREENHILLS,218,,Track 1 : How to run a ministry,Track 1 : Leading worship,1,8,FALSE
LEMUEL GAVIN SARET,M,ALABANG,219,,Track 1 : How to run a ministry,Track 2 : Bible Study,2,9,FALSE
CHARLES EDGAR FRIEDRICK V. BELOSO,M,APNP,219,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,3,9,TRUE
DEO J. JOLLOSO,M,CAVITE,219,,Track 2 : Participating in worship,Track 4 : How to reach out effectively to Gen Zs,4,9,FALSE
JOSE ROSENDO R. CACHO,M,QUEZON CITY,219,,Track 1 : How to run a ministry,Track 1 : Leading worship,5,9,FALSE
MARC RAZEL B. BUENAFE,M,ALABANG,220,,Track 1 : How to run a ministry,Track 3 : Rekindling Commitment,6,9,FALSE
HERBERT JOSEPH ROXAS ESLING,M,BGC,220,,Track 3 : Personal Management,Track 3 : Rekindling Commitment,7,9,TRUE
JOSHUA MIKHAEL O. BONDOC,M,CENTRAL,220,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,8,9,FALSE
ELORDE G GALICIA,M,GREENHILLS,220,,Track 4 : How to make our branches attractive to younger generation,Track 1 : Leading worship,9,9,FALSE
MAUI ARCA,M,ALABANG,221,,Track 2 : Participating in worship,Track 3 : Rekindling Commitment,10,10,FALSE
FRANCISCO EZEKIEL M. ESPINOSA,M,CAVITE,221,,Track 1 : How to run a ministry,Track 1 : Leading worship,11,10,FALSE
JAMINO F. GONZALES,M,CENTRAL,221,,Track 1 : How to run a ministry,Track 4 : How to reach out effectively to Gen Zs,12,10,TRUE
LANCE MATTHEW MIRANDA CALMA,M,QUEZON CITY,221,,Track 2 : Participating in worship,Track 3 : Rekindling Commitment,1,10,FALSE
RICHMOND M. BANZUELO,M,ALABANG,222,,Track 2 : Participating in worship,Track 3 : Rekindling Commitment,2,10,FALSE
KIM PAULO SIERRA,M,CAVITE,222,,Track 4 : How to make our branches attractive to younger generation,Track 2 : Bible Study,3,10,FALSE
MANLEY M. SALAZAR JR.,M,CENTRAL,222,,Track 3 : Personal Management,Track 1 : Leading worship,4,10,TRUE
JEREMIAH A. SALVEDIA,M,QUEZON CITY,222,,Track 4 : How to make our branches attractive to younger generation,Track 4 : How to reach out effectively to Gen Zs,5,10,FALSE
PETER JESS V. LEGASPI,M,OTHERS,223,,,,2,,FALSE
TED TE,M,OTHERS,223,,,,3,,FALSE
JEROME J. ORBE,M,OTHERS,223,,,,4,,FALSE
KYLE CRUZ,M,OTHERS,223,,,,,,FALSE
ENRICO A. OCAMPO,M,OTHERS,224,,,,5,,FALSE
PATRICK ANTHONY M. CALALO,M,OTHERS,224,,,,6,,FALSE
RAYMUND S. SAMSON,M,OTHERS,224,,,,7,,FALSE
NATHAN CHAVEZ,M,OTHERS,224,,,,,,FALSE
MA CHRISTIANA CARMELA DALANGIN,F,OTHERS,,,,,,,FALSE
ELMER S. LACSAMANA,M,OTHERS,,,,,,,FALSE` ;
