/* ECPI — Datos de proyectos del grupo.
   Añadir aquí nuevos proyectos: aparecerán automáticamente en la cuadrícula
   (proyectos.html) y tendrán su página de detalle (proyecto.html?id=<id>).
   `img` es opcional: si falta, se muestra un marcador de posición.
   `destacado: true` hace que el proyecto salga en el carrusel de la portada.
   La portada NO los muestra todos: enseña como mucho ECPI_HOME_MAX (ver abajo)
   y respeta el orden de esta lista. Al marcar uno nuevo como destacado,
   quita el destacado de otro; si no, el nuevo se queda fuera por el tope.

   PROCEDENCIA DE LOS DATOS DE PERÚ
   Los proyectos de Euroconsult América salen de la presentación
   «ECG. Euroconsult America. Perú (1).pptx» (diapositivas 4 a 15). De ahí
   vienen, literales, tres datos: nombre oficial, cliente e importe. La
   ubicación, el sector y la tipología se han deducido del propio nombre o del
   cliente, así que conviene repasarlos.
   `reto`, `sol` e `imp` NO figuran en esa presentación y se han dejado vacíos
   a propósito: la página de detalle oculta ese bloque cuando falta. Rellénalos
   proyecto a proyecto cuando haya información real; no hay que inventarlos.
   Las versiones EN/FR/PT de los títulos son traducción automática del español:
   conviene que las revise un traductor. */
window.ECPI_PROJECTS = [
  {
    id: "puente-verde-huampani",
    cliente: "Provías Nacional – MTC",
    es: { kicker: "Infraestructura de puentes", title: "Rehabilitación de los puentes Verde, Huampaní y Huáncar", ubi: "Perú", sector: "Transporte", tipo: "Puentes", monto: "23.914.250,72 soles (expediente técnico aprobado)" },
    en: { kicker: "Bridge infrastructure", title: "Rehabilitation of the Verde, Huampaní and Huáncar bridges", ubi: "Peru", sector: "Transport", tipo: "Bridges", monto: "23,914,250.72 soles (detailed design approved)" },
    fr: { kicker: "Infrastructure de ponts", title: "Réhabilitation des ponts Verde, Huampaní et Huáncar", ubi: "Pérou", sector: "Transport", tipo: "Ponts", monto: "23 914 250,72 soles (dossier technique approuvé)" },
    pt: { kicker: "Infraestrutura de pontes", title: "Reabilitação das pontes Verde, Huampaní e Huáncar", ubi: "Peru", sector: "Transportes", tipo: "Pontes", monto: "23.914.250,72 soles (projeto de execução aprovado)" }
  },
  {
    id: "cuenca-huaura",
    cliente: "Programa Subsectorial de Irrigaciones – PSI",
    es: { kicker: "Gestión de cuencas", title: "Plan integral para el control de inundaciones y movimientos de masa de la cuenca del río Huaura", ubi: "Cuenca del río Huaura, Lima (Perú)", sector: "Agua", tipo: "Hidrología", monto: "8.226.083,03 soles" },
    en: { kicker: "River basin management", title: "Comprehensive plan for flood and mass-movement control in the Huaura river basin", ubi: "Huaura river basin, Lima (Peru)", sector: "Water", tipo: "Hydrology", monto: "8,226,083.03 soles" },
    fr: { kicker: "Gestion des bassins", title: "Plan intégral de contrôle des inondations et des mouvements de masse du bassin du fleuve Huaura", ubi: "Bassin du fleuve Huaura, Lima (Pérou)", sector: "Eau", tipo: "Hydrologie", monto: "8 226 083,03 soles" },
    pt: { kicker: "Gestão de bacias", title: "Plano integral para o controlo de inundações e movimentos de massa da bacia do rio Huaura", ubi: "Bacia do rio Huaura, Lima (Peru)", sector: "Água", tipo: "Hidrologia", monto: "8.226.083,03 soles" }
  },
  {
    id: "hospital-maria-auxiliadora",
    img: "assets/img/proj-hospital-maria-auxiliadora.webp",
    cliente: "Gobierno Regional de Amazonas",
    es: { kicker: "Infraestructura hospitalaria", title: "Mejoramiento del Hospital María Auxiliadora", ubi: "Amazonas (Perú)", sector: "Edificación", tipo: "Sanitaria", monto: "1.330.259,00 soles" },
    en: { kicker: "Hospital infrastructure", title: "Upgrade of the María Auxiliadora Hospital", ubi: "Amazonas (Peru)", sector: "Building", tipo: "Healthcare", monto: "1,330,259.00 soles" },
    fr: { kicker: "Infrastructure hospitalière", title: "Amélioration de l'hôpital María Auxiliadora", ubi: "Amazonas (Pérou)", sector: "Bâtiment", tipo: "Santé", monto: "1 330 259,00 soles" },
    pt: { kicker: "Infraestrutura hospitalar", title: "Melhoramento do Hospital María Auxiliadora", ubi: "Amazonas (Peru)", sector: "Edificação", tipo: "Saúde", monto: "1.330.259,00 soles" }
  },
  {
    id: "ivn-gallinazos",
    cliente: "Rutas de Lima",
    es: { kicker: "Infraestructura vial", title: "Informe de puesta a punto del IVN Gallinazos, Panamericana Norte km 26+050 – 26+777", ubi: "Lima (Perú)", sector: "Transporte", tipo: "Carreteras" },
    en: { kicker: "Road infrastructure", title: "Commissioning report for the Gallinazos road-safety works, Panamericana Norte km 26+050 – 26+777", ubi: "Lima (Peru)", sector: "Transport", tipo: "Roads" },
    fr: { kicker: "Infrastructure routière", title: "Rapport de mise au point de l'IVN Gallinazos, Panamericana Norte km 26+050 – 26+777", ubi: "Lima (Pérou)", sector: "Transport", tipo: "Routes" },
    pt: { kicker: "Infraestrutura rodoviária", title: "Relatório de afinação do IVN Gallinazos, Panamericana Norte km 26+050 – 26+777", ubi: "Lima (Peru)", sector: "Transportes", tipo: "Estradas" }
  },
  {
    id: "huallanca-caraz",
    destacado: true, // sale en el carrusel de la portada
    img: "assets/img/proj-huallanca-caraz.webp",
    cliente: "Provías Nacional – MTC",
    es: { kicker: "Infraestructura vial", title: "Mejoramiento de la carretera Huallanca – Caraz", ubi: "Áncash (Perú)", sector: "Transporte", tipo: "Carreteras", monto: "2.746.306,86 soles; obra: 489.733.111,65 soles" },
    en: { kicker: "Road infrastructure", title: "Upgrade of the Huallanca – Caraz road", ubi: "Áncash (Peru)", sector: "Transport", tipo: "Roads", monto: "2,746,306.86 soles; works: 489,733,111.65 soles" },
    fr: { kicker: "Infrastructure routière", title: "Amélioration de la route Huallanca – Caraz", ubi: "Áncash (Pérou)", sector: "Transport", tipo: "Routes", monto: "2 746 306,86 soles ; travaux : 489 733 111,65 soles" },
    pt: { kicker: "Infraestrutura rodoviária", title: "Melhoramento da estrada Huallanca – Caraz", ubi: "Áncash (Peru)", sector: "Transportes", tipo: "Estradas", monto: "2.746.306,86 soles; obra: 489.733.111,65 soles" }
  },
  {
    id: "puente-salitral-chamorro",
    cliente: "Provías Nacional – MTC",
    es: { kicker: "Infraestructura de puentes", title: "Expediente técnico y ejecución de la rehabilitación de los puentes Salitral y Chamorro y sus accesos", ubi: "Perú", sector: "Transporte", tipo: "Puentes", monto: "69.747.273,25 soles (expediente técnico aprobado)" },
    en: { kicker: "Bridge infrastructure", title: "Detailed design and execution of the rehabilitation of the Salitral and Chamorro bridges and their approaches", ubi: "Peru", sector: "Transport", tipo: "Bridges", monto: "69,747,273.25 soles (detailed design approved)" },
    fr: { kicker: "Infrastructure de ponts", title: "Dossier technique et exécution de la réhabilitation des ponts Salitral et Chamorro et de leurs accès", ubi: "Pérou", sector: "Transport", tipo: "Ponts", monto: "69 747 273,25 soles (dossier technique approuvé)" },
    pt: { kicker: "Infraestrutura de pontes", title: "Projeto de execução e execução da reabilitação das pontes Salitral e Chamorro e dos seus acessos", ubi: "Peru", sector: "Transportes", tipo: "Pontes", monto: "69.747.273,25 soles (projeto de execução aprovado)" }
  },
  {
    id: "red-vial-4-pativilca-salaverry",
    cliente: "AUNOR",
    es: { kicker: "Infraestructura vial", title: "Rehabilitación de la calzada actual de la Red Vial N.º 4, Pativilca – Salaverry", ubi: "Pativilca – Salaverry (Perú)", sector: "Transporte", tipo: "Carreteras", monto: "6.458.606,86 soles" },
    en: { kicker: "Road infrastructure", title: "Rehabilitation of the existing carriageway of Road Network No. 4, Pativilca – Salaverry", ubi: "Pativilca – Salaverry (Peru)", sector: "Transport", tipo: "Roads", monto: "6,458,606.86 soles" },
    fr: { kicker: "Infrastructure routière", title: "Réhabilitation de la chaussée actuelle du réseau routier n° 4, Pativilca – Salaverry", ubi: "Pativilca – Salaverry (Pérou)", sector: "Transport", tipo: "Routes", monto: "6 458 606,86 soles" },
    pt: { kicker: "Infraestrutura rodoviária", title: "Reabilitação da faixa de rodagem atual da Rede Viária n.º 4, Pativilca – Salaverry", ubi: "Pativilca – Salaverry (Peru)", sector: "Transportes", tipo: "Estradas", monto: "6.458.606,86 soles" }
  },
  {
    id: "parque-yahuar-huaca",
    cliente: "Proyecto Especial Panamericanos – MINEDU",
    es: { kicker: "Infraestructura deportiva", title: "Mejoramiento del Parque Zonal Yahuar Huaca", ubi: "Bellavista, Callao (Perú)", sector: "Edificación", tipo: "Deportiva", monto: "2.121.411,06 soles" },
    en: { kicker: "Sports infrastructure", title: "Upgrade of the Yahuar Huaca district park", ubi: "Bellavista, Callao (Peru)", sector: "Building", tipo: "Sports", monto: "2,121,411.06 soles" },
    fr: { kicker: "Infrastructure sportive", title: "Amélioration du parc de quartier Yahuar Huaca", ubi: "Bellavista, Callao (Pérou)", sector: "Bâtiment", tipo: "Sportive", monto: "2 121 411,06 soles" },
    pt: { kicker: "Infraestrutura desportiva", title: "Melhoramento do Parque Zonal Yahuar Huaca", ubi: "Bellavista, Callao (Peru)", sector: "Edificação", tipo: "Desportiva", monto: "2.121.411,06 soles" }
  },
  {
    id: "diez-puentes-reemplazo",
    destacado: true, // sale en el carrusel de la portada
    img: "assets/img/proj-diez-puentes-reemplazo.webp",
    cliente: "Provías Nacional – MTC",
    es: { kicker: "Infraestructura de puentes", title: "Construcción de 10 puentes por reemplazo en Sullana, Aguas Verdes y El Alamor", ubi: "Piura y Tumbes (Perú)", sector: "Transporte", tipo: "Puentes", monto: "7.040.312,28 soles" },
    en: { kicker: "Bridge infrastructure", title: "Construction of 10 replacement bridges in Sullana, Aguas Verdes and El Alamor", ubi: "Piura and Tumbes (Peru)", sector: "Transport", tipo: "Bridges", monto: "7,040,312.28 soles" },
    fr: { kicker: "Infrastructure de ponts", title: "Construction de 10 ponts de remplacement à Sullana, Aguas Verdes et El Alamor", ubi: "Piura et Tumbes (Pérou)", sector: "Transport", tipo: "Ponts", monto: "7 040 312,28 soles" },
    pt: { kicker: "Infraestrutura de pontes", title: "Construção de 10 pontes de substituição em Sullana, Aguas Verdes e El Alamor", ubi: "Piura e Tumbes (Peru)", sector: "Transportes", tipo: "Pontes", monto: "7.040.312,28 soles" }
  },
  {
    id: "villa-rica-puerto-bermudez",
    cliente: "Provías Nacional – MTC",
    es: { kicker: "Infraestructura vial", title: "Mejoramiento de la carretera Villa Rica – Puerto Bermúdez", ubi: "Pasco (Perú)", sector: "Transporte", tipo: "Carreteras", monto: "5.379.711,95 soles; obra: 916.129.982,77 soles" },
    en: { kicker: "Road infrastructure", title: "Upgrade of the Villa Rica – Puerto Bermúdez road", ubi: "Pasco (Peru)", sector: "Transport", tipo: "Roads", monto: "5,379,711.95 soles; works: 916,129,982.77 soles" },
    fr: { kicker: "Infrastructure routière", title: "Amélioration de la route Villa Rica – Puerto Bermúdez", ubi: "Pasco (Pérou)", sector: "Transport", tipo: "Routes", monto: "5 379 711,95 soles ; travaux : 916 129 982,77 soles" },
    pt: { kicker: "Infraestrutura rodoviária", title: "Melhoramento da estrada Villa Rica – Puerto Bermúdez", ubi: "Pasco (Peru)", sector: "Transportes", tipo: "Estradas", monto: "5.379.711,95 soles; obra: 916.129.982,77 soles" }
  },
  {
    id: "costa-verde-callao",
    img: "assets/img/proj-costa-verde-callao.webp",
    destacado: true, // sale en el carrusel de la portada
    cliente: "Gobierno Regional del Callao",
    es: { kicker: "Infraestructura vial urbana", title: "Construcción de la vía Costa Verde, tramo Callao", ubi: "Callao (Perú)", sector: "Transporte", tipo: "Vía urbana", monto: "5.405.787,09 soles; obra: 313.155.462,27 soles" },
    en: { kicker: "Urban road infrastructure", title: "Construction of the Costa Verde expressway, Callao section", ubi: "Callao (Peru)", sector: "Transport", tipo: "Urban road", monto: "5,405,787.09 soles; works: 313,155,462.27 soles" },
    fr: { kicker: "Infrastructure routière urbaine", title: "Construction de la voie Costa Verde, section Callao", ubi: "Callao (Pérou)", sector: "Transport", tipo: "Voirie urbaine", monto: "5 405 787,09 soles ; travaux : 313 155 462,27 soles" },
    pt: { kicker: "Infraestrutura rodoviária urbana", title: "Construção da via Costa Verde, trecho Callao", ubi: "Callao (Peru)", sector: "Transportes", tipo: "Via urbana", monto: "5.405.787,09 soles; obra: 313.155.462,27 soles" }
  },
  {
    id: "moquegua-arequipa",
    cliente: "Provías Nacional – MTC",
    es: { kicker: "Infraestructura vial", title: "Mejoramiento de la red vial departamental Moquegua – Arequipa", ubi: "Moquegua y Arequipa (Perú)", sector: "Transporte", tipo: "Carreteras", monto: "3.613.673,47 soles" },
    en: { kicker: "Road infrastructure", title: "Upgrade of the Moquegua – Arequipa departmental road network", ubi: "Moquegua and Arequipa (Peru)", sector: "Transport", tipo: "Roads", monto: "3,613,673.47 soles" },
    fr: { kicker: "Infrastructure routière", title: "Amélioration du réseau routier départemental Moquegua – Arequipa", ubi: "Moquegua et Arequipa (Pérou)", sector: "Transport", tipo: "Routes", monto: "3 613 673,47 soles" },
    pt: { kicker: "Infraestrutura rodoviária", title: "Melhoramento da rede viária departamental Moquegua – Arequipa", ubi: "Moquegua e Arequipa (Peru)", sector: "Transportes", tipo: "Estradas", monto: "3.613.673,47 soles" }
  },
  {
    id: "av-evitamiento-cusco",
    cliente: "Gobierno Regional de Cusco",
    es: { kicker: "Infraestructura vial urbana", title: "Mejoramiento del tránsito peatonal y vehicular de la avenida Evitamiento", ubi: "Cusco (Perú)", sector: "Transporte", tipo: "Vía urbana", monto: "11.273.168,94 soles" },
    en: { kicker: "Urban road infrastructure", title: "Improvement of pedestrian and vehicle traffic on Evitamiento avenue", ubi: "Cusco (Peru)", sector: "Transport", tipo: "Urban road", monto: "11,273,168.94 soles" },
    fr: { kicker: "Infrastructure routière urbaine", title: "Amélioration du trafic piétonnier et automobile de l'avenue Evitamiento", ubi: "Cusco (Pérou)", sector: "Transport", tipo: "Voirie urbaine", monto: "11 273 168,94 soles" },
    pt: { kicker: "Infraestrutura rodoviária urbana", title: "Melhoramento do trânsito pedonal e automóvel da avenida Evitamiento", ubi: "Cusco (Peru)", sector: "Transportes", tipo: "Via urbana", monto: "11.273.168,94 soles" }
  },
  {
    id: "malecon-grau-chorrillos",
    cliente: "Organización Internacional para las Migraciones – OIM",
    es: { kicker: "Infraestructura vial urbana", title: "Mejoramiento de la geometría vial de la avenida Malecón Grau, tramo Circuito de Playas – avenida Huaylas", ubi: "Chorrillos, Lima (Perú)", sector: "Transporte", tipo: "Vía urbana", monto: "2.944.501,88 soles" },
    en: { kicker: "Urban road infrastructure", title: "Road geometry improvement on Malecón Grau avenue, Circuito de Playas – Huaylas avenue section", ubi: "Chorrillos, Lima (Peru)", sector: "Transport", tipo: "Urban road", monto: "2,944,501.88 soles" },
    fr: { kicker: "Infrastructure routière urbaine", title: "Amélioration de la géométrie routière de l'avenue Malecón Grau, section Circuito de Playas – avenue Huaylas", ubi: "Chorrillos, Lima (Pérou)", sector: "Transport", tipo: "Voirie urbaine", monto: "2 944 501,88 soles" },
    pt: { kicker: "Infraestrutura rodoviária urbana", title: "Melhoramento da geometria viária da avenida Malecón Grau, trecho Circuito de Playas – avenida Huaylas", ubi: "Chorrillos, Lima (Peru)", sector: "Transportes", tipo: "Via urbana", monto: "2.944.501,88 soles" }
  },
  {
    id: "costa-verde-san-miguel",
    cliente: "Organización Internacional para las Migraciones – OIM",
    es: { kicker: "Infraestructura vial urbana", title: "Vía Costa Verde, tramo Rafael Escardó – jirón Virú", ubi: "San Miguel, Lima (Perú)", sector: "Transporte", tipo: "Vía urbana", monto: "2.551.058,88 soles" },
    en: { kicker: "Urban road infrastructure", title: "Costa Verde expressway, Rafael Escardó – Virú street section", ubi: "San Miguel, Lima (Peru)", sector: "Transport", tipo: "Urban road", monto: "2,551,058.88 soles" },
    fr: { kicker: "Infrastructure routière urbaine", title: "Voie Costa Verde, section Rafael Escardó – rue Virú", ubi: "San Miguel, Lima (Pérou)", sector: "Transport", tipo: "Voirie urbaine", monto: "2 551 058,88 soles" },
    pt: { kicker: "Infraestrutura rodoviária urbana", title: "Via Costa Verde, trecho Rafael Escardó – rua Virú", ubi: "San Miguel, Lima (Peru)", sector: "Transportes", tipo: "Via urbana", monto: "2.551.058,88 soles" }
  },
  {
    id: "hospitales-san-martin",
    cliente: "Proyecto Especial Huallaga Central",
    es: { kicker: "Infraestructura hospitalaria", title: "Expediente técnico y construcción de los hospitales de Picota, Saposoa, San José de Sisa, Bellavista y Tocache", ubi: "Región San Martín (Perú)", sector: "Edificación", tipo: "Sanitaria", monto: "7.213.708,00 soles" },
    en: { kicker: "Hospital infrastructure", title: "Detailed design and construction of the Picota, Saposoa, San José de Sisa, Bellavista and Tocache hospitals", ubi: "San Martín region (Peru)", sector: "Building", tipo: "Healthcare", monto: "7,213,708.00 soles" },
    fr: { kicker: "Infrastructure hospitalière", title: "Dossier technique et construction des hôpitaux de Picota, Saposoa, San José de Sisa, Bellavista et Tocache", ubi: "Région de San Martín (Pérou)", sector: "Bâtiment", tipo: "Santé", monto: "7 213 708,00 soles" },
    pt: { kicker: "Infraestrutura hospitalar", title: "Projeto de execução e construção dos hospitais de Picota, Saposoa, San José de Sisa, Bellavista e Tocache", ubi: "Região de San Martín (Peru)", sector: "Edificação", tipo: "Saúde", monto: "7.213.708,00 soles" }
  },
  {
    id: "sede-minagri",
    destacado: true, // sale en el carrusel de la portada
    img: "assets/img/proj-sede-minagri.webp",
    cliente: "MINAGRI",
    es: { kicker: "Edificación institucional", title: "Mejoramiento e implementación de la nueva sede del MINAGRI", ubi: "Lima (Perú)", sector: "Edificación", tipo: "Institucional", monto: "2.746.804,35 soles" },
    en: { kicker: "Institutional building", title: "Refurbishment and fit-out of the new MINAGRI headquarters", ubi: "Lima (Peru)", sector: "Building", tipo: "Institutional", monto: "2,746,804.35 soles" },
    fr: { kicker: "Bâtiment institutionnel", title: "Amélioration et aménagement du nouveau siège du MINAGRI", ubi: "Lima (Pérou)", sector: "Bâtiment", tipo: "Institutionnel", monto: "2 746 804,35 soles" },
    pt: { kicker: "Edificação institucional", title: "Melhoramento e implementação da nova sede do MINAGRI", ubi: "Lima (Peru)", sector: "Edificação", tipo: "Institucional", monto: "2.746.804,35 soles" }
  },
  {
    id: "colegios-lima-sur",
    cliente: "Pronied",
    es: { kicker: "Infraestructura educativa", title: "Construcción de los colegios María Reiche, Divino Maestro y Santa Rosa", ubi: "San Juan de Miraflores y Villa El Salvador, Lima (Perú)", sector: "Edificación", tipo: "Educativa", monto: "1.989.082,12 soles" },
    en: { kicker: "Education infrastructure", title: "Construction of the María Reiche, Divino Maestro and Santa Rosa schools", ubi: "San Juan de Miraflores and Villa El Salvador, Lima (Peru)", sector: "Building", tipo: "Education", monto: "1,989,082.12 soles" },
    fr: { kicker: "Infrastructure éducative", title: "Construction des écoles María Reiche, Divino Maestro et Santa Rosa", ubi: "San Juan de Miraflores et Villa El Salvador, Lima (Pérou)", sector: "Bâtiment", tipo: "Éducation", monto: "1 989 082,12 soles" },
    pt: { kicker: "Infraestrutura educativa", title: "Construção das escolas María Reiche, Divino Maestro e Santa Rosa", ubi: "San Juan de Miraflores e Villa El Salvador, Lima (Peru)", sector: "Edificação", tipo: "Educativa", monto: "1.989.082,12 soles" }
  },
  {
    id: "reservorio-picchu",
    cliente: "EPS SEDACUSCO S.A.",
    es: { kicker: "Abastecimiento de agua", title: "Nuevo reservorio Picchu", ubi: "Cusco (Perú)", sector: "Agua", tipo: "Abastecimiento", monto: "441.471,67 soles" },
    en: { kicker: "Water supply", title: "New Picchu water reservoir", ubi: "Cusco (Peru)", sector: "Water", tipo: "Water supply", monto: "441,471.67 soles" },
    fr: { kicker: "Adduction d'eau", title: "Nouveau réservoir Picchu", ubi: "Cusco (Pérou)", sector: "Eau", tipo: "Adduction d'eau", monto: "441 471,67 soles" },
    pt: { kicker: "Abastecimento de água", title: "Novo reservatório Picchu", ubi: "Cusco (Peru)", sector: "Água", tipo: "Abastecimento", monto: "441.471,67 soles" }
  },
  {
    id: "sede-sunat",
    destacado: true, // sale en el carrusel de la portada
    img: "assets/img/proj-sede-sunat.webp",
    cliente: "SUNAT",
    es: { kicker: "Edificación institucional", title: "Expediente técnico y ejecución de la nueva sede de la SUNAT", ubi: "Perú", sector: "Edificación", tipo: "Institucional", monto: "9.442.506,98 soles" },
    en: { kicker: "Institutional building", title: "Detailed design and construction of the new SUNAT headquarters", ubi: "Peru", sector: "Building", tipo: "Institutional", monto: "9,442,506.98 soles" },
    fr: { kicker: "Bâtiment institutionnel", title: "Dossier technique et exécution du nouveau siège de la SUNAT", ubi: "Pérou", sector: "Bâtiment", tipo: "Institutionnel", monto: "9 442 506,98 soles" },
    pt: { kicker: "Edificação institucional", title: "Projeto de execução e execução da nova sede da SUNAT", ubi: "Peru", sector: "Edificação", tipo: "Institucional", monto: "9.442.506,98 soles" }
  },
  {
    id: "av-sanchez-cerro-piura",
    cliente: "Gobierno Regional de Piura",
    es: { kicker: "Infraestructura vial urbana", title: "Mejoramiento de la avenida Sánchez Cerro, tramo avenida Gullman – avenida Chulucanas", ubi: "Piura (Perú)", sector: "Transporte", tipo: "Vía urbana", monto: "5.268.785,39 soles" },
    en: { kicker: "Urban road infrastructure", title: "Upgrade of Sánchez Cerro avenue, Gullman avenue – Chulucanas avenue section", ubi: "Piura (Peru)", sector: "Transport", tipo: "Urban road", monto: "5,268,785.39 soles" },
    fr: { kicker: "Infrastructure routière urbaine", title: "Amélioration de l'avenue Sánchez Cerro, section avenue Gullman – avenue Chulucanas", ubi: "Piura (Pérou)", sector: "Transport", tipo: "Voirie urbaine", monto: "5 268 785,39 soles" },
    pt: { kicker: "Infraestrutura rodoviária urbana", title: "Melhoramento da avenida Sánchez Cerro, trecho avenida Gullman – avenida Chulucanas", ubi: "Piura (Peru)", sector: "Transportes", tipo: "Via urbana", monto: "5.268.785,39 soles" }
  },
  {
    id: "san-jose-sisa-bellavista",
    cliente: "Proyecto Especial Huallaga Central",
    es: { kicker: "Infraestructura vial", title: "Rehabilitación y mejoramiento de la carretera departamental, tramo San José de Sisa – desvío Bellavista", ubi: "Región San Martín (Perú)", sector: "Transporte", tipo: "Carreteras", monto: "6.928.677,72 soles" },
    en: { kicker: "Road infrastructure", title: "Rehabilitation and upgrade of the departmental road, San José de Sisa – Bellavista junction section", ubi: "San Martín region (Peru)", sector: "Transport", tipo: "Roads", monto: "6,928,677.72 soles" },
    fr: { kicker: "Infrastructure routière", title: "Réhabilitation et amélioration de la route départementale, section San José de Sisa – bifurcation Bellavista", ubi: "Région de San Martín (Pérou)", sector: "Transport", tipo: "Routes", monto: "6 928 677,72 soles" },
    pt: { kicker: "Infraestrutura rodoviária", title: "Reabilitação e melhoramento da estrada departamental, trecho San José de Sisa – desvio Bellavista", ubi: "Região de San Martín (Peru)", sector: "Transportes", tipo: "Estradas", monto: "6.928.677,72 soles" }
  },
  {
    id: "panamericanos-2019",
    cliente: "Proyecto Especial Panamericanos / MINEDU",
    es: { kicker: "Infraestructura deportiva", title: "Supervisión del plan maestro de los XVIII Juegos Panamericanos 2019", ubi: "Lima (Perú)", sector: "Edificación", tipo: "Deportiva", monto: "989.339,39 soles" },
    en: { kicker: "Sports infrastructure", title: "Supervision of the master plan for the XVIII Pan American Games 2019", ubi: "Lima (Peru)", sector: "Building", tipo: "Sports", monto: "989,339.39 soles" },
    fr: { kicker: "Infrastructure sportive", title: "Supervision du plan directeur des XVIIIes Jeux panaméricains 2019", ubi: "Lima (Pérou)", sector: "Bâtiment", tipo: "Sportive", monto: "989 339,39 soles" },
    pt: { kicker: "Infraestrutura desportiva", title: "Supervisão do plano diretor dos XVIII Jogos Pan-Americanos 2019", ubi: "Lima (Peru)", sector: "Edificação", tipo: "Desportiva", monto: "989.339,39 soles" }
  },
  {
    id: "juanjui-tocache",
    cliente: "Provías Nacional – MTC",
    es: { kicker: "Infraestructura vial", title: "Rehabilitación y mejoramiento de la carretera Juanjuí – Tocache", ubi: "Región San Martín (Perú)", sector: "Transporte", tipo: "Carreteras", monto: "9.064.309,85 soles" },
    en: { kicker: "Road infrastructure", title: "Rehabilitation and upgrade of the Juanjuí – Tocache road", ubi: "San Martín region (Peru)", sector: "Transport", tipo: "Roads", monto: "9,064,309.85 soles" },
    fr: { kicker: "Infrastructure routière", title: "Réhabilitation et amélioration de la route Juanjuí – Tocache", ubi: "Région de San Martín (Pérou)", sector: "Transport", tipo: "Routes", monto: "9 064 309,85 soles" },
    pt: { kicker: "Infraestrutura rodoviária", title: "Reabilitação e melhoramento da estrada Juanjuí – Tocache", ubi: "Região de San Martín (Peru)", sector: "Transportes", tipo: "Estradas", monto: "9.064.309,85 soles" }
  },
  {
    id: "autopista-del-sol-nino",
    cliente: "OSITRAN",
    es: { kicker: "Concesiones viales", title: "Rehabilitación por ocurrencia del fenómeno de El Niño en la Autopista del Sol, tramo Trujillo – Sullana", ubi: "La Libertad, Lambayeque y Piura (Perú)", sector: "Transporte", tipo: "Autopistas", monto: "26.782.020,10 soles" },
    en: { kicker: "Road concessions", title: "Rehabilitation after the El Niño phenomenon on the Autopista del Sol, Trujillo – Sullana section", ubi: "La Libertad, Lambayeque and Piura (Peru)", sector: "Transport", tipo: "Motorways", monto: "26,782,020.10 soles" },
    fr: { kicker: "Concessions routières", title: "Réhabilitation après le phénomène El Niño sur l'Autopista del Sol, section Trujillo – Sullana", ubi: "La Libertad, Lambayeque et Piura (Pérou)", sector: "Transport", tipo: "Autoroutes", monto: "26 782 020,10 soles" },
    pt: { kicker: "Concessões rodoviárias", title: "Reabilitação após a ocorrência do fenómeno El Niño na Autopista del Sol, trecho Trujillo – Sullana", ubi: "La Libertad, Lambayeque e Piura (Peru)", sector: "Transportes", tipo: "Autoestradas", monto: "26.782.020,10 soles" }
  },
  {
    id: "base-aeronaval-callao",
    img: "assets/img/proj-base-aeronaval-callao.webp",
    destacado: true, // sale en el carrusel de la portada
    cliente: "Marina de Guerra del Perú",
    es: { kicker: "Infraestructura militar", title: "Construcción de la nueva base aeronaval del Callao", ubi: "Callao (Perú)", sector: "Edificación", tipo: "Militar", monto: "6.173.102,80 soles" },
    en: { kicker: "Military infrastructure", title: "Construction of the new Callao naval air base", ubi: "Callao (Peru)", sector: "Building", tipo: "Military", monto: "6,173,102.80 soles" },
    fr: { kicker: "Infrastructure militaire", title: "Construction de la nouvelle base aéronavale de Callao", ubi: "Callao (Pérou)", sector: "Bâtiment", tipo: "Militaire", monto: "6 173 102,80 soles" },
    pt: { kicker: "Infraestrutura militar", title: "Construção da nova base aeronaval de Callao", ubi: "Callao (Peru)", sector: "Edificação", tipo: "Militar", monto: "6.173.102,80 soles" }
  },
  {
    id: "cuenca-rio-mala",
    cliente: "Programa Subsectorial de Irrigaciones – PSI",
    es: { kicker: "Gestión de cuencas", title: "Plan integral para el control de inundaciones y movimientos de masa de la cuenca del río Mala", ubi: "Cuenca del río Mala, Lima (Perú)", sector: "Agua", tipo: "Hidrología", monto: "1.186.891,20 soles" },
    en: { kicker: "River basin management", title: "Comprehensive plan for flood and mass-movement control in the Mala river basin", ubi: "Mala river basin, Lima (Peru)", sector: "Water", tipo: "Hydrology", monto: "1,186,891.20 soles" },
    fr: { kicker: "Gestion des bassins", title: "Plan intégral de contrôle des inondations et des mouvements de masse du bassin du fleuve Mala", ubi: "Bassin du fleuve Mala, Lima (Pérou)", sector: "Eau", tipo: "Hydrologie", monto: "1 186 891,20 soles" },
    pt: { kicker: "Gestão de bacias", title: "Plano integral para o controlo de inundações e movimentos de massa da bacia do rio Mala", ubi: "Bacia do rio Mala, Lima (Peru)", sector: "Água", tipo: "Hidrologia", monto: "1.186.891,20 soles" }
  },
  {
    id: "cuenca-rio-rimac",
    cliente: "Programa Subsectorial de Irrigaciones – PSI",
    es: { kicker: "Gestión de cuencas", title: "Plan integral para el control de inundaciones y movimientos de masa de la cuenca del río Rímac", ubi: "Cuenca del río Rímac, Lima (Perú)", sector: "Agua", tipo: "Hidrología", monto: "1.646.902,40 soles" },
    en: { kicker: "River basin management", title: "Comprehensive plan for flood and mass-movement control in the Rímac river basin", ubi: "Rímac river basin, Lima (Peru)", sector: "Water", tipo: "Hydrology", monto: "1,646,902.40 soles" },
    fr: { kicker: "Gestion des bassins", title: "Plan intégral de contrôle des inondations et des mouvements de masse du bassin du fleuve Rímac", ubi: "Bassin du fleuve Rímac, Lima (Pérou)", sector: "Eau", tipo: "Hydrologie", monto: "1 646 902,40 soles" },
    pt: { kicker: "Gestão de bacias", title: "Plano integral para o controlo de inundações e movimentos de massa da bacia do rio Rímac", ubi: "Bacia do rio Rímac, Lima (Peru)", sector: "Água", tipo: "Hidrologia", monto: "1.646.902,40 soles" }
  },
  {
    id: "cuenca-rio-casma",
    cliente: "Programa Subsectorial de Irrigaciones – PSI",
    es: { kicker: "Gestión de cuencas", title: "Plan integral para el control de inundaciones y movimientos de masa de la cuenca del río Casma", ubi: "Cuenca del río Casma, Áncash (Perú)", sector: "Agua", tipo: "Hidrología", monto: "1.186.891,20 soles" },
    en: { kicker: "River basin management", title: "Comprehensive plan for flood and mass-movement control in the Casma river basin", ubi: "Casma river basin, Áncash (Peru)", sector: "Water", tipo: "Hydrology", monto: "1,186,891.20 soles" },
    fr: { kicker: "Gestion des bassins", title: "Plan intégral de contrôle des inondations et des mouvements de masse du bassin du fleuve Casma", ubi: "Bassin du fleuve Casma, Áncash (Pérou)", sector: "Eau", tipo: "Hydrologie", monto: "1 186 891,20 soles" },
    pt: { kicker: "Gestão de bacias", title: "Plano integral para o controlo de inundações e movimentos de massa da bacia do rio Casma", ubi: "Bacia do rio Casma, Áncash (Peru)", sector: "Água", tipo: "Hidrologia", monto: "1.186.891,20 soles" }
  },
  {
    id: "muelle-ilo",
    cliente: "ENAPU",
    es: { kicker: "Infraestructura portuaria", title: "Rehabilitación y reparación del muelle del terminal portuario de Ilo", ubi: "Ilo, Moquegua (Perú)", sector: "Transporte", tipo: "Portuaria", monto: "1.484.941,51 soles" },
    en: { kicker: "Port infrastructure", title: "Rehabilitation and repair of the quay at the Ilo port terminal", ubi: "Ilo, Moquegua (Peru)", sector: "Transport", tipo: "Port", monto: "1,484,941.51 soles" },
    fr: { kicker: "Infrastructure portuaire", title: "Réhabilitation et réparation du quai du terminal portuaire d'Ilo", ubi: "Ilo, Moquegua (Pérou)", sector: "Transport", tipo: "Portuaire", monto: "1 484 941,51 soles" },
    pt: { kicker: "Infraestrutura portuária", title: "Reabilitação e reparação do cais do terminal portuário de Ilo", ubi: "Ilo, Moquegua (Peru)", sector: "Transportes", tipo: "Portuária", monto: "1.484.941,51 soles" }
  },
  {
    id: "vial-paquete-8",
    cliente: "MTC",
    es: { kicker: "Infraestructura vial", title: "Recuperación y reposición de la infraestructura vial, paquete 8: Cayaltí – Lambayeque y Casa Blanca – Cajamarca", ubi: "Lambayeque y Cajamarca (Perú)", sector: "Transporte", tipo: "Carreteras", monto: "1.667.473,86 soles" },
    en: { kicker: "Road infrastructure", title: "Recovery and replacement of road infrastructure, package 8: Cayaltí – Lambayeque and Casa Blanca – Cajamarca", ubi: "Lambayeque and Cajamarca (Peru)", sector: "Transport", tipo: "Roads", monto: "1,667,473.86 soles" },
    fr: { kicker: "Infrastructure routière", title: "Récupération et remise en état de l'infrastructure routière, lot 8 : Cayaltí – Lambayeque et Casa Blanca – Cajamarca", ubi: "Lambayeque et Cajamarca (Pérou)", sector: "Transport", tipo: "Routes", monto: "1 667 473,86 soles" },
    pt: { kicker: "Infraestrutura rodoviária", title: "Recuperação e reposição da infraestrutura viária, pacote 8: Cayaltí – Lambayeque e Casa Blanca – Cajamarca", ubi: "Lambayeque e Cajamarca (Peru)", sector: "Transportes", tipo: "Estradas", monto: "1.667.473,86 soles" }
  },
  {
    id: "vial-paquete-11",
    cliente: "MTC",
    es: { kicker: "Infraestructura vial", title: "Recuperación y reposición de la infraestructura vial, paquete 11: Pámpano – Ticrapo – Castrovirreyna – Santa Inés", ubi: "Huancavelica (Perú)", sector: "Transporte", tipo: "Carreteras", monto: "2.510.156,61 soles" },
    en: { kicker: "Road infrastructure", title: "Recovery and replacement of road infrastructure, package 11: Pámpano – Ticrapo – Castrovirreyna – Santa Inés", ubi: "Huancavelica (Peru)", sector: "Transport", tipo: "Roads", monto: "2,510,156.61 soles" },
    fr: { kicker: "Infrastructure routière", title: "Récupération et remise en état de l'infrastructure routière, lot 11 : Pámpano – Ticrapo – Castrovirreyna – Santa Inés", ubi: "Huancavelica (Pérou)", sector: "Transport", tipo: "Routes", monto: "2 510 156,61 soles" },
    pt: { kicker: "Infraestrutura rodoviária", title: "Recuperação e reposição da infraestrutura viária, pacote 11: Pámpano – Ticrapo – Castrovirreyna – Santa Inés", ubi: "Huancavelica (Peru)", sector: "Transportes", tipo: "Estradas", monto: "2.510.156,61 soles" }
  },
  {
    id: "vial-paquete-7",
    cliente: "MTC",
    es: { kicker: "Infraestructura vial", title: "Supervisión de la conservación para la recuperación y reposición de la infraestructura vial, paquete 7: Huaura – Sayán – Churín – Oyón y Río Seco – Sayán", ubi: "Lima (Perú)", sector: "Transporte", tipo: "Carreteras", monto: "2.468.897,39 soles" },
    en: { kicker: "Road infrastructure", title: "Maintenance supervision for the recovery and replacement of road infrastructure, package 7: Huaura – Sayán – Churín – Oyón and Río Seco – Sayán", ubi: "Lima (Peru)", sector: "Transport", tipo: "Roads", monto: "2,468,897.39 soles" },
    fr: { kicker: "Infrastructure routière", title: "Supervision de l'entretien pour la récupération et la remise en état de l'infrastructure routière, lot 7 : Huaura – Sayán – Churín – Oyón et Río Seco – Sayán", ubi: "Lima (Pérou)", sector: "Transport", tipo: "Routes", monto: "2 468 897,39 soles" },
    pt: { kicker: "Infraestrutura rodoviária", title: "Supervisão da conservação para a recuperação e reposição da infraestrutura viária, pacote 7: Huaura – Sayán – Churín – Oyón e Río Seco – Sayán", ubi: "Lima (Peru)", sector: "Transportes", tipo: "Estradas", monto: "2.468.897,39 soles" }
  },
  {
    id: "deflectometria-autopista-sol",
    cliente: "OSITRAN",
    es: { kicker: "Concesiones viales", title: "Medición y evaluación de la deflectometría y la rugosidad (IRI) en la concesión de la Autopista del Sol, tramo óvalo Huanchaco – óvalo Chicama", ubi: "La Libertad (Perú)", sector: "Transporte", tipo: "Autopistas", monto: "118.500,00 soles" },
    en: { kicker: "Road concessions", title: "Deflection and roughness (IRI) measurement and assessment on the Autopista del Sol concession, Huanchaco roundabout – Chicama roundabout section", ubi: "La Libertad (Peru)", sector: "Transport", tipo: "Motorways", monto: "118,500.00 soles" },
    fr: { kicker: "Concessions routières", title: "Mesure et évaluation de la déflexion et de l'uni (IRI) sur la concession de l'Autopista del Sol, section rond-point Huanchaco – rond-point Chicama", ubi: "La Libertad (Pérou)", sector: "Transport", tipo: "Autoroutes", monto: "118 500,00 soles" },
    pt: { kicker: "Concessões rodoviárias", title: "Medição e avaliação da deflectometria e da irregularidade (IRI) na concessão da Autopista del Sol, trecho rotunda Huanchaco – rotunda Chicama", ubi: "La Libertad (Peru)", sector: "Transportes", tipo: "Autoestradas", monto: "118.500,00 soles" }
  },
  {
    id: "longitudinal-sierra-tramo-2",
    cliente: "Convial Sierra Norte",
    es: { kicker: "Infraestructura vial", title: "Servicios de gestión y conservación vial de la carretera Longitudinal de la Sierra, tramo 2: Cajamarca, Trujillo y desvío Chilete", ubi: "Cajamarca y La Libertad (Perú)", sector: "Transporte", tipo: "Carreteras", monto: "1.212.305,95 dólares estadounidenses" },
    en: { kicker: "Road infrastructure", title: "Road management and maintenance services on the Longitudinal de la Sierra highway, section 2: Cajamarca, Trujillo and Chilete junction", ubi: "Cajamarca and La Libertad (Peru)", sector: "Transport", tipo: "Roads", monto: "1,212,305.95 US dollars" },
    fr: { kicker: "Infrastructure routière", title: "Services de gestion et d'entretien routier de la route Longitudinal de la Sierra, section 2 : Cajamarca, Trujillo et bifurcation Chilete", ubi: "Cajamarca et La Libertad (Pérou)", sector: "Transport", tipo: "Routes", monto: "1 212 305,95 dollars américains" },
    pt: { kicker: "Infraestrutura rodoviária", title: "Serviços de gestão e conservação viária da estrada Longitudinal de la Sierra, trecho 2: Cajamarca, Trujillo e desvio Chilete", ubi: "Cajamarca e La Libertad (Peru)", sector: "Transportes", tipo: "Estradas", monto: "1.212.305,95 dólares americanos" }
  },
  {
    id: "corredor-tacna",
    cliente: "Provías Descentralizado – MTC",
    es: { kicker: "Infraestructura vial", title: "Gestión, mejoramiento y conservación vial del corredor vial Jorge Basadre, Candarave y Tarata", ubi: "Tacna (Perú)", sector: "Transporte", tipo: "Carreteras", monto: "12.039.228,20 soles" },
    en: { kicker: "Road infrastructure", title: "Road management, upgrade and maintenance of the Jorge Basadre, Candarave and Tarata road corridor", ubi: "Tacna (Peru)", sector: "Transport", tipo: "Roads", monto: "12,039,228.20 soles" },
    fr: { kicker: "Infrastructure routière", title: "Gestion, amélioration et entretien routier du corridor Jorge Basadre, Candarave et Tarata", ubi: "Tacna (Pérou)", sector: "Transport", tipo: "Routes", monto: "12 039 228,20 soles" },
    pt: { kicker: "Infraestrutura rodoviária", title: "Gestão, melhoramento e conservação viária do corredor viário Jorge Basadre, Candarave e Tarata", ubi: "Tacna (Peru)", sector: "Transportes", tipo: "Estradas", monto: "12.039.228,20 soles" }
  }
];
window.ECPI_GET_PROJECT = function (id) {
  var list = window.ECPI_PROJECTS;
  for (var i = 0; i < list.length; i++) { if (list[i].id === id) return list[i]; }
  return list[0];
};
/* Tope de tarjetas del carrusel de la portada. Por encima de 6 la fila de
   puntos de navegación se vuelve ilegible; sube el número solo si cambia
   ese diseño. No afecta a proyectos.html, que los muestra todos. */
window.ECPI_HOME_MAX = 6;
/* Proyectos de la portada: los marcados con `destacado`, en el orden de la
   lista y hasta el tope. Si no hay ninguno marcado, coge los primeros. */
window.ECPI_FEATURED = function () {
  var list = window.ECPI_PROJECTS, out = [], i;
  for (i = 0; i < list.length; i++) { if (list[i].destacado) out.push(list[i]); }
  if (!out.length) out = list.slice(0);
  return out.slice(0, window.ECPI_HOME_MAX);
};
