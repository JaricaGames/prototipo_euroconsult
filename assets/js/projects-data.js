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
   conviene que las revise un traductor.

   PROCEDENCIA DE LOS DATOS DE COLOMBIA
   Los proyectos de Colombia salen de la presentación
   «Presentacion_ECG_Ingenieria_Contratos_2026.pptx» de ECG Ingeniería SAS
   (diapositivas 8 a 39, 32 contratos): entidad, objeto, importe total del
   contrato en pesos colombianos (COP), participación de ECG en el consorcio,
   fechas y estado. `monto` recoge el importe TOTAL del contrato, no la parte
   de ECG, y lo dice entre paréntesis junto con las fechas y el estado.
   Los textos de `reto`, `sol` e `imp` y las fotos proj-*.webp de Colombia
   vienen de las fichas de la web de la filial (euroconsult.com.co, consultada
   el 8 de octubre de 2026) y solo existen para los proyectos que allí figuran.
   Se han traído 14 de los 32 contratos; el resto puede añadirse igual.

   CRITERIO DE SELECCIÓN
   De la presentación de Perú se han dejado fuera los contratos de menor
   importe (por debajo de unos 5 millones de soles), salvo los que aportan
   variedad de sector o de cliente: muelle de Ilo, cuenca del Rímac, sede del
   MINAGRI, base aeronaval del Callao y Longitudinal de la Sierra. De Colombia
   se han tomado los de mayor importe y los que abren sector (ferrocarril,
   aeropuerto El Dorado, puentes peatonales), más los que tienen ficha y foto
   en la web de la filial. */
window.ECPI_PROJECTS = [
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
    id: "transmilenio-carrera-68",
    destacado: true, // sale en el carrusel de la portada
    img: "assets/img/proj-transmilenio-carrera-68.webp",
    cliente: "Instituto de Desarrollo Urbano – IDU (Bogotá D.C.)",
    es: { kicker: "Movilidad urbana", title: "Interventoría integral de la adecuación de la Avenida 68 (Carrera 68) al sistema TransMilenio, Grupo 7", ubi: "Bogotá D.C. (Colombia)", sector: "Transporte", tipo: "Transporte urbano / BRT", monto: "34.630.366.494 COP (importe total del contrato IDU-605-2020, 2020 – 2031; participación del 25 % en el Consorcio Bulevar 68)",
      reto: "Adaptar al sistema TransMilenio un tramo de 3,05 km de la Carrera 68, entre la Calle 66 y la Carrera 65A, dentro de una troncal de 17 km, manteniendo la actividad de una de las avenidas más transitadas de Bogotá.",
      sol: "Interventoría integral, en el Consorcio Bulevar 68, de la construcción de carriles mixtos y carriles BRT, tres estaciones, puente vehicular, puentes peatonales y rampas, 2.900 m de ciclorruta con cicloestaciones y bicipuente, más de 80.000 m² de espacio público y la renovación de las redes hidráulicas y de servicios.",
      imp: "Una movilidad más sostenible, segura y eficiente para las localidades de Barrios Unidos, Engativá y Suba, con más de 10 UPZ beneficiadas. Construcción hasta octubre de 2026 y mantenimiento posterior hasta 2031." },
    en: { kicker: "Urban mobility", title: "Comprehensive supervision of the adaptation of Avenida 68 (Carrera 68) to the TransMilenio system, Group 7", ubi: "Bogotá D.C. (Colombia)", sector: "Transport", tipo: "Urban transport / BRT", monto: "COP 34,630,366,494 (total value of contract IDU-605-2020, 2020 – 2031; 25% share in Consorcio Bulevar 68)",
      reto: "To adapt a 3.05 km section of Carrera 68, between Calle 66 and Carrera 65A, to the TransMilenio system as part of a 17 km trunk line, while keeping one of Bogotá's busiest avenues in operation.",
      sol: "Comprehensive supervision, within Consorcio Bulevar 68, of the construction of mixed-traffic and BRT lanes, three stations, a road bridge, footbridges and ramps, 2,900 m of cycle path with cycle stations and a cycle bridge, over 80,000 m² of public space and the renewal of water and utility networks.",
      imp: "More sustainable, safer and more efficient mobility for the districts of Barrios Unidos, Engativá and Suba, benefiting more than 10 planning zones. Construction until October 2026, followed by maintenance until 2031." },
    fr: { kicker: "Mobilité urbaine", title: "Supervision intégrale de l'adaptation de l'Avenida 68 (Carrera 68) au système TransMilenio, groupe 7", ubi: "Bogotá D.C. (Colombie)", sector: "Transport", tipo: "Transport urbain / BRT", monto: "34 630 366 494 COP (montant total du contrat IDU-605-2020, 2020 – 2031 ; participation de 25 % au Consorcio Bulevar 68)",
      reto: "Adapter au système TransMilenio un tronçon de 3,05 km de la Carrera 68, entre la Calle 66 et la Carrera 65A, au sein d'un axe de 17 km, tout en maintenant l'activité de l'une des avenues les plus fréquentées de Bogotá.",
      sol: "Supervision intégrale, au sein du Consorcio Bulevar 68, de la construction de voies mixtes et de voies BRT, trois stations, un pont routier, des passerelles piétonnes et des rampes, 2 900 m de piste cyclable avec stations vélo et passerelle cyclable, plus de 80 000 m² d'espace public et le renouvellement des réseaux hydrauliques et de services.",
      imp: "Une mobilité plus durable, plus sûre et plus efficace pour les localités de Barrios Unidos, Engativá et Suba, avec plus de 10 zones de planification bénéficiaires. Construction jusqu'en octobre 2026, puis maintenance jusqu'en 2031." },
    pt: { kicker: "Mobilidade urbana", title: "Fiscalização integral da adequação da Avenida 68 (Carrera 68) ao sistema TransMilenio, Grupo 7", ubi: "Bogotá D.C. (Colômbia)", sector: "Transportes", tipo: "Transporte urbano / BRT", monto: "34.630.366.494 COP (valor total do contrato IDU-605-2020, 2020 – 2031; participação de 25 % no Consorcio Bulevar 68)",
      reto: "Adaptar ao sistema TransMilenio um troço de 3,05 km da Carrera 68, entre a Calle 66 e a Carrera 65A, dentro de um eixo de 17 km, mantendo a atividade de uma das avenidas mais movimentadas de Bogotá.",
      sol: "Fiscalização integral, no Consorcio Bulevar 68, da construção de faixas mistas e faixas BRT, três estações, ponte rodoviária, pontes pedonais e rampas, 2.900 m de ciclovia com cicloestações e ponte ciclável, mais de 80.000 m² de espaço público e a renovação das redes hidráulicas e de serviços.",
      imp: "Uma mobilidade mais sustentável, segura e eficiente para as localidades de Barrios Unidos, Engativá e Suba, com mais de 10 zonas de planeamento beneficiadas. Construção até outubro de 2026 e manutenção posterior até 2031." }
  },
  {
    id: "ferrocarril-bogota-belencito",
    cliente: "Agencia Nacional de Infraestructura – ANI",
    es: { kicker: "Infraestructura ferroviaria", title: "Interventoría integral del mantenimiento y la operación del corredor férreo Bogotá – Belencito (278,4 km)", ubi: "Cundinamarca y Boyacá (Colombia)", sector: "Transporte", tipo: "Ferrocarriles", monto: "22.749.054.166 COP (importe total del contrato, en ejecución hasta abril de 2030; participación del 25 % en el Consorcio CFBB)" },
    en: { kicker: "Railway infrastructure", title: "Comprehensive supervision of the maintenance and operation of the Bogotá – Belencito railway corridor (278.4 km)", ubi: "Cundinamarca and Boyacá (Colombia)", sector: "Transport", tipo: "Railways", monto: "COP 22,749,054,166 (total contract value, under way until April 2030; 25% share in Consorcio CFBB)" },
    fr: { kicker: "Infrastructure ferroviaire", title: "Supervision intégrale de l'entretien et de l'exploitation du corridor ferroviaire Bogotá – Belencito (278,4 km)", ubi: "Cundinamarca et Boyacá (Colombie)", sector: "Transport", tipo: "Chemins de fer", monto: "22 749 054 166 COP (montant total du contrat, en cours jusqu'en avril 2030 ; participation de 25 % au Consorcio CFBB)" },
    pt: { kicker: "Infraestrutura ferroviária", title: "Fiscalização integral da manutenção e operação do corredor ferroviário Bogotá – Belencito (278,4 km)", ubi: "Cundinamarca e Boyacá (Colômbia)", sector: "Transportes", tipo: "Ferrovias", monto: "22.749.054.166 COP (valor total do contrato, em execução até abril de 2030; participação de 25 % no Consorcio CFBB)" }
  },
  {
    id: "torre-control-popayan",
    destacado: true, // sale en el carrusel de la portada
    img: "assets/img/proj-torre-control-popayan.webp",
    cliente: "Aeronáutica Civil de Colombia",
    es: { kicker: "Infraestructura aeroportuaria", title: "Interventoría integral de las obras de terminación de la Torre de Control del Aeropuerto Guillermo León Valencia de Popayán", ubi: "Popayán, Cauca (Colombia)", sector: "Transporte", tipo: "Aeroportuaria", monto: "1.155.997.892 COP (contrato 22001462 H3 de 2022, 2023 – 2026, terminado)",
      reto: "Terminar la construcción de la nueva torre de control de un aeropuerto en servicio, con montaje especializado en altura y estrictos protocolos de seguridad industrial.",
      sol: "Interventoría integral de las obras, con supervisión técnica rigurosa desde la estructura hasta el montaje de la cabina, bajo contrato con la Aeronáutica Civil.",
      imp: "Una infraestructura aeronáutica estratégica que refuerza la conectividad aérea y el desarrollo regional del Cauca. Contrato terminado en febrero de 2026." },
    en: { kicker: "Airport infrastructure", title: "Comprehensive supervision of the works to complete the control tower at Guillermo León Valencia Airport, Popayán", ubi: "Popayán, Cauca (Colombia)", sector: "Transport", tipo: "Airport", monto: "COP 1,155,997,892 (contract 22001462 H3 of 2022, 2023 – 2026, completed)",
      reto: "To complete the construction of a new control tower at an airport in operation, with specialised work at height and strict industrial-safety protocols.",
      sol: "Comprehensive supervision of the works, with rigorous technical oversight from the structure to the assembly of the cab, under contract to Colombia's civil aviation authority.",
      imp: "A strategic piece of air-navigation infrastructure that strengthens air connectivity and regional development in Cauca. Contract completed in February 2026." },
    fr: { kicker: "Infrastructure aéroportuaire", title: "Supervision intégrale des travaux d'achèvement de la tour de contrôle de l'aéroport Guillermo León Valencia de Popayán", ubi: "Popayán, Cauca (Colombie)", sector: "Transport", tipo: "Aéroportuaire", monto: "1 155 997 892 COP (contrat 22001462 H3 de 2022, 2023 – 2026, achevé)",
      reto: "Achever la construction de la nouvelle tour de contrôle d'un aéroport en exploitation, avec un montage spécialisé en hauteur et de stricts protocoles de sécurité industrielle.",
      sol: "Supervision intégrale des travaux, avec un suivi technique rigoureux de la structure au montage de la vigie, sous contrat avec l'Aeronáutica Civil de Colombie.",
      imp: "Une infrastructure aéronautique stratégique qui renforce la connectivité aérienne et le développement régional du Cauca. Contrat achevé en février 2026." },
    pt: { kicker: "Infraestrutura aeroportuária", title: "Fiscalização integral das obras de conclusão da torre de controlo do Aeroporto Guillermo León Valencia de Popayán", ubi: "Popayán, Cauca (Colômbia)", sector: "Transportes", tipo: "Aeroportuária", monto: "1.155.997.892 COP (contrato 22001462 H3 de 2022, 2023 – 2026, concluído)",
      reto: "Concluir a construção da nova torre de controlo de um aeroporto em funcionamento, com montagem especializada em altura e rigorosos protocolos de segurança industrial.",
      sol: "Fiscalização integral das obras, com supervisão técnica rigorosa da estrutura à montagem da cabina, sob contrato com a Aeronáutica Civil da Colômbia.",
      imp: "Uma infraestrutura aeronáutica estratégica que reforça a conectividade aérea e o desenvolvimento regional do Cauca. Contrato concluído em fevereiro de 2026." }
  },
  {
    id: "aeropuerto-el-dorado",
    cliente: "Aeronáutica Civil de Colombia",
    es: { kicker: "Infraestructura aeroportuaria", title: "Interventoría integral de la terminación de la calle de rodaje Lima y del paso a desnivel (box culvert) del Aeropuerto Internacional El Dorado", ubi: "Bogotá D.C. (Colombia)", sector: "Transporte", tipo: "Aeroportuaria", monto: "6.349.840.000 COP (2021 – 2023, terminado; participación del 40 % en el Consorcio Ecodorado)" },
    en: { kicker: "Airport infrastructure", title: "Comprehensive supervision of the completion of taxiway Lima and the box-culvert underpass at El Dorado International Airport", ubi: "Bogotá D.C. (Colombia)", sector: "Transport", tipo: "Airport", monto: "COP 6,349,840,000 (2021 – 2023, completed; 40% share in Consorcio Ecodorado)" },
    fr: { kicker: "Infrastructure aéroportuaire", title: "Supervision intégrale de l'achèvement de la voie de circulation Lima et du passage inférieur (box culvert) de l'aéroport international El Dorado", ubi: "Bogotá D.C. (Colombie)", sector: "Transport", tipo: "Aéroportuaire", monto: "6 349 840 000 COP (2021 – 2023, achevé ; participation de 40 % au Consorcio Ecodorado)" },
    pt: { kicker: "Infraestrutura aeroportuária", title: "Fiscalização integral da conclusão do caminho de circulação Lima e da passagem desnivelada (box culvert) do Aeroporto Internacional El Dorado", ubi: "Bogotá D.C. (Colômbia)", sector: "Transportes", tipo: "Aeroportuária", monto: "6.349.840.000 COP (2021 – 2023, concluído; participação de 40 % no Consorcio Ecodorado)" }
  },
  {
    id: "quibdo-pereira",
    img: "assets/img/proj-quibdo-pereira.webp",
    cliente: "INVIAS – Instituto Nacional de Vías",
    es: { kicker: "Infraestructura vial", title: "Interventoría integral del corredor vial Quibdó – Pereira, Transversal Central del Pacífico", ubi: "Chocó y Risaralda (Colombia)", sector: "Transporte", tipo: "Carreteras", monto: "14.499.999.999 COP (contrato 4329 de 2024, 2024 – 2026, en ejecución; participación del 92 % en el Consorcio Intervial 091)",
      reto: "Garantizar la seguridad, la calidad y el cumplimiento normativo de las obras en una vía estratégica que conecta el Pacífico con el centro del país.",
      sol: "Interventoría técnica, administrativa, financiera, jurídica y ambiental de las obras de construcción, mejoramiento, rehabilitación, mantenimiento y atención de puntos críticos, en un plazo de 19 meses y 22 días (diciembre de 2024 – julio de 2026).",
      imp: "Más de 54.000 habitantes beneficiados y un impulso al desarrollo económico, turístico y social de la región." },
    en: { kicker: "Road infrastructure", title: "Comprehensive supervision of the Quibdó – Pereira road corridor, Central Pacific Transversal", ubi: "Chocó and Risaralda (Colombia)", sector: "Transport", tipo: "Roads", monto: "COP 14,499,999,999 (contract 4329 of 2024, 2024 – 2026, under way; 92% share in Consorcio Intervial 091)",
      reto: "To guarantee the safety, quality and regulatory compliance of the works on a strategic road linking the Pacific coast with the centre of the country.",
      sol: "Technical, administrative, financial, legal and environmental supervision of the construction, upgrading, rehabilitation, maintenance and critical-point works, over 19 months and 22 days (December 2024 – July 2026).",
      imp: "More than 54,000 inhabitants benefited and a boost to the economic, tourist and social development of the region." },
    fr: { kicker: "Infrastructure routière", title: "Supervision intégrale du corridor routier Quibdó – Pereira, Transversale centrale du Pacifique", ubi: "Chocó et Risaralda (Colombie)", sector: "Transport", tipo: "Routes", monto: "14 499 999 999 COP (contrat 4329 de 2024, 2024 – 2026, en cours ; participation de 92 % au Consorcio Intervial 091)",
      reto: "Garantir la sécurité, la qualité et la conformité réglementaire des travaux sur un axe stratégique reliant le Pacifique au centre du pays.",
      sol: "Supervision technique, administrative, financière, juridique et environnementale des travaux de construction, d'amélioration, de réhabilitation, d'entretien et de traitement des points critiques, sur 19 mois et 22 jours (décembre 2024 – juillet 2026).",
      imp: "Plus de 54 000 habitants bénéficiaires et un élan pour le développement économique, touristique et social de la région." },
    pt: { kicker: "Infraestrutura rodoviária", title: "Fiscalização integral do corredor rodoviário Quibdó – Pereira, Transversal Central do Pacífico", ubi: "Chocó e Risaralda (Colômbia)", sector: "Transportes", tipo: "Estradas", monto: "14.499.999.999 COP (contrato 4329 de 2024, 2024 – 2026, em execução; participação de 92 % no Consorcio Intervial 091)",
      reto: "Garantir a segurança, a qualidade e o cumprimento normativo das obras numa via estratégica que liga o Pacífico ao centro do país.",
      sol: "Fiscalização técnica, administrativa, financeira, jurídica e ambiental das obras de construção, melhoramento, reabilitação, manutenção e atenção a pontos críticos, num prazo de 19 meses e 22 dias (dezembro de 2024 – julho de 2026).",
      imp: "Mais de 54.000 habitantes beneficiados e um impulso ao desenvolvimento económico, turístico e social da região." }
  },
  {
    id: "troncal-orinoquia-guaviare",
    cliente: "INVIAS – Instituto Nacional de Vías",
    es: { kicker: "Infraestructura vial", title: "Interventoría del mejoramiento y mantenimiento de la Troncal de la Orinoquía (San José – El Retorno – Calamar)", ubi: "Guaviare (Colombia)", sector: "Transporte", tipo: "Carreteras", monto: "21.999.237.400 COP (contrato 1000-2021, 2021 – 2030, en ejecución; participación del 40 % en el Consorcio Ecovisión 190)" },
    en: { kicker: "Road infrastructure", title: "Supervision of the upgrading and maintenance of the Troncal de la Orinoquía (San José – El Retorno – Calamar)", ubi: "Guaviare (Colombia)", sector: "Transport", tipo: "Roads", monto: "COP 21,999,237,400 (contract 1000-2021, 2021 – 2030, under way; 40% share in Consorcio Ecovisión 190)" },
    fr: { kicker: "Infrastructure routière", title: "Supervision de l'amélioration et de l'entretien de la Troncal de la Orinoquía (San José – El Retorno – Calamar)", ubi: "Guaviare (Colombie)", sector: "Transport", tipo: "Routes", monto: "21 999 237 400 COP (contrat 1000-2021, 2021 – 2030, en cours ; participation de 40 % au Consorcio Ecovisión 190)" },
    pt: { kicker: "Infraestrutura rodoviária", title: "Fiscalização do melhoramento e manutenção da Troncal de la Orinoquía (San José – El Retorno – Calamar)", ubi: "Guaviare (Colômbia)", sector: "Transportes", tipo: "Estradas", monto: "21.999.237.400 COP (contrato 1000-2021, 2021 – 2030, em execução; participação de 40 % no Consorcio Ecovisión 190)" }
  },
  {
    id: "transversal-boyaca",
    cliente: "INVIAS – Instituto Nacional de Vías",
    es: { kicker: "Infraestructura vial", title: "Interventoría del mejoramiento y mantenimiento de la Transversal de Boyacá (Puerto Boyacá – Otanche – Chiquinquirá – Páez)", ubi: "Boyacá (Colombia)", sector: "Transporte", tipo: "Carreteras" },
    en: { kicker: "Road infrastructure", title: "Supervision of the upgrading and maintenance of the Transversal de Boyacá (Puerto Boyacá – Otanche – Chiquinquirá – Páez)", ubi: "Boyacá (Colombia)", sector: "Transport", tipo: "Roads" },
    fr: { kicker: "Infrastructure routière", title: "Supervision de l'amélioration et de l'entretien de la Transversal de Boyacá (Puerto Boyacá – Otanche – Chiquinquirá – Páez)", ubi: "Boyacá (Colombie)", sector: "Transport", tipo: "Routes" },
    pt: { kicker: "Infraestrutura rodoviária", title: "Fiscalização do melhoramento e manutenção da Transversal de Boyacá (Puerto Boyacá – Otanche – Chiquinquirá – Páez)", ubi: "Boyacá (Colômbia)", sector: "Transportes", tipo: "Estradas" }
  },
  {
    id: "transversal-casanare",
    img: "assets/img/proj-transversal-casanare.webp",
    cliente: "INVIAS – Instituto Nacional de Vías",
    es: { kicker: "Infraestructura vial", title: "Interventoría de la atención de vías regionales en Arauca y Casanare, con obras de mejoramiento (Transversal del Casanare, Orocué)", ubi: "Arauca y Casanare (Colombia)", sector: "Transporte", tipo: "Carreteras", monto: "16.329.282.420 COP (contrato 1002 de 2022, 2023 – 2027, en ejecución; participación del 70 % en el Consorcio Vías ECG)",
      reto: "Dotar a los llanos de Arauca y Casanare de vías regionales en condiciones, dentro del programa de obra pública «Vías para la conexión de territorios, el crecimiento sostenible y la reactivación 2.0».",
      sol: "Interventoría de las obras de mejoramiento, con supervisión y control técnico orientados a la calidad, la seguridad y la sostenibilidad, acompañados de programas sociales con la comunidad local.",
      imp: "En Orocué, la Transversal del Casanare mejora la calidad de vida de más de 13.800 personas, genera empleo y fortalece el tejido social de la región." },
    en: { kicker: "Road infrastructure", title: "Supervision of regional road works in Arauca and Casanare, including upgrading works (Transversal del Casanare, Orocué)", ubi: "Arauca and Casanare (Colombia)", sector: "Transport", tipo: "Roads", monto: "COP 16,329,282,420 (contract 1002 of 2022, 2023 – 2027, under way; 70% share in Consorcio Vías ECG)",
      reto: "To provide the plains of Arauca and Casanare with regional roads in proper condition, under the public-works programme 'Vías para la conexión de territorios, el crecimiento sostenible y la reactivación 2.0'.",
      sol: "Supervision of the upgrading works, with technical control focused on quality, safety and sustainability, together with social programmes for the local community.",
      imp: "In Orocué, the Transversal del Casanare improves the quality of life of more than 13,800 people, creates jobs and strengthens the region's social fabric." },
    fr: { kicker: "Infrastructure routière", title: "Supervision de l'entretien des routes régionales d'Arauca et de Casanare, avec travaux d'amélioration (Transversale du Casanare, Orocué)", ubi: "Arauca et Casanare (Colombie)", sector: "Transport", tipo: "Routes", monto: "16 329 282 420 COP (contrat 1002 de 2022, 2023 – 2027, en cours ; participation de 70 % au Consorcio Vías ECG)",
      reto: "Doter les plaines d'Arauca et de Casanare de routes régionales en bon état, dans le cadre du programme de travaux publics « Vías para la conexión de territorios, el crecimiento sostenible y la reactivación 2.0 ».",
      sol: "Supervision des travaux d'amélioration, avec un contrôle technique axé sur la qualité, la sécurité et la durabilité, accompagné de programmes sociaux avec la communauté locale.",
      imp: "À Orocué, la Transversale du Casanare améliore la qualité de vie de plus de 13 800 personnes, crée des emplois et renforce le tissu social de la région." },
    pt: { kicker: "Infraestrutura rodoviária", title: "Fiscalização da atenção a vias regionais em Arauca e Casanare, com obras de melhoramento (Transversal do Casanare, Orocué)", ubi: "Arauca e Casanare (Colômbia)", sector: "Transportes", tipo: "Estradas", monto: "16.329.282.420 COP (contrato 1002 de 2022, 2023 – 2027, em execução; participação de 70 % no Consorcio Vías ECG)",
      reto: "Dotar as planícies de Arauca e Casanare de vias regionais em condições, no âmbito do programa de obra pública «Vías para la conexión de territorios, el crecimiento sostenible y la reactivación 2.0».",
      sol: "Fiscalização das obras de melhoramento, com supervisão e controlo técnico orientados para a qualidade, a segurança e a sustentabilidade, acompanhados de programas sociais com a comunidade local.",
      imp: "Em Orocué, a Transversal do Casanare melhora a qualidade de vida de mais de 13.800 pessoas, cria emprego e reforça o tecido social da região." }
  },
  {
    id: "puentes-peatonales-bogota",
    cliente: "Instituto de Desarrollo Urbano – IDU (Bogotá D.C.)",
    es: { kicker: "Estructuras", title: "Interventoría de la conservación de puentes peatonales de Bogotá D.C., Grupo 1: superestructura, subestructura y accesos", ubi: "Bogotá D.C. (Colombia)", sector: "Transporte", tipo: "Puentes", monto: "7.517.783.314 COP (contrato IDU-1601-2025, 2026 – 2028, en ejecución; participación del 50 % en el Consorcio Estructuras Urbanas)" },
    en: { kicker: "Structures", title: "Supervision of the upkeep of pedestrian bridges in Bogotá D.C., Group 1: superstructure, substructure and access ramps", ubi: "Bogotá D.C. (Colombia)", sector: "Transport", tipo: "Bridges", monto: "COP 7,517,783,314 (contract IDU-1601-2025, 2026 – 2028, under way; 50% share in Consorcio Estructuras Urbanas)" },
    fr: { kicker: "Structures", title: "Supervision de la conservation des passerelles piétonnes de Bogotá D.C., groupe 1 : superstructure, infrastructure et accès", ubi: "Bogotá D.C. (Colombie)", sector: "Transport", tipo: "Ponts", monto: "7 517 783 314 COP (contrat IDU-1601-2025, 2026 – 2028, en cours ; participation de 50 % au Consorcio Estructuras Urbanas)" },
    pt: { kicker: "Estruturas", title: "Fiscalização da conservação de pontes pedonais de Bogotá D.C., Grupo 1: superestrutura, subestrutura e acessos", ubi: "Bogotá D.C. (Colômbia)", sector: "Transportes", tipo: "Pontes", monto: "7.517.783.314 COP (contrato IDU-1601-2025, 2026 – 2028, em execução; participação de 50 % no Consorcio Estructuras Urbanas)" }
  },
  {
    id: "aeropuertos-ibague-neiva",
    img: "assets/img/proj-aeropuertos-ibague-neiva.webp",
    cliente: "Unidad Administrativa Especial de Aeronáutica Civil",
    es: { kicker: "Infraestructura aeroportuaria", title: "Interventoría integral al mantenimiento de los aeropuertos de Ibagué y Neiva", ubi: "Tolima y Huila (Colombia)", sector: "Transporte", tipo: "Aeroportuaria", monto: "1.810.753.100 COP (contrato 24001369 H3, 2025 – 2026, en ejecución)",
      reto: "Asegurar la calidad, la seguridad y el cumplimiento normativo de las obras de mantenimiento en dos terminales en operación.",
      sol: "Supervisión técnica, administrativa y ambiental del mantenimiento de la infraestructura física lado tierra y de los sistemas aeroportuarios de ambos aeropuertos, hasta julio de 2026.",
      imp: "Dos aeropuertos regionales con infraestructura y sistemas en mejores condiciones de servicio para pasajeros y personal operativo." },
    en: { kicker: "Airport infrastructure", title: "Comprehensive supervision of maintenance works at Ibagué and Neiva airports", ubi: "Tolima and Huila (Colombia)", sector: "Transport", tipo: "Airport", monto: "COP 1,810,753,100 (contract 24001369 H3, 2025 – 2026, under way)",
      reto: "To ensure the quality, safety and regulatory compliance of maintenance works at two terminals in operation.",
      sol: "Technical, administrative and environmental supervision of the maintenance of landside facilities and airport systems at both airports, until July 2026.",
      imp: "Two regional airports with facilities and systems in better operating condition for passengers and operational staff." },
    fr: { kicker: "Infrastructure aéroportuaire", title: "Supervision intégrale de la maintenance des aéroports d'Ibagué et de Neiva", ubi: "Tolima et Huila (Colombie)", sector: "Transport", tipo: "Aéroportuaire", monto: "1 810 753 100 COP (contrat 24001369 H3, 2025 – 2026, en cours)",
      reto: "Assurer la qualité, la sécurité et la conformité réglementaire des travaux de maintenance dans deux aérogares en exploitation.",
      sol: "Supervision technique, administrative et environnementale de la maintenance des infrastructures côté ville et des systèmes aéroportuaires des deux aéroports, jusqu'en juillet 2026.",
      imp: "Deux aéroports régionaux dont les installations et les systèmes offrent de meilleures conditions de service aux passagers et au personnel d'exploitation." },
    pt: { kicker: "Infraestrutura aeroportuária", title: "Fiscalização integral da manutenção dos aeroportos de Ibagué e Neiva", ubi: "Tolima e Huila (Colômbia)", sector: "Transportes", tipo: "Aeroportuária", monto: "1.810.753.100 COP (contrato 24001369 H3, 2025 – 2026, em execução)",
      reto: "Assegurar a qualidade, a segurança e o cumprimento normativo das obras de manutenção em dois terminais em operação.",
      sol: "Supervisão técnica, administrativa e ambiental da manutenção da infraestrutura física do lado terra e dos sistemas aeroportuários de ambos os aeroportos, até julho de 2026.",
      imp: "Dois aeroportos regionais com infraestruturas e sistemas em melhores condições de serviço para passageiros e pessoal operacional." }
  },
  {
    id: "aeropuerto-el-pindo",
    destacado: true, // sale en el carrusel de la portada
    img: "assets/img/proj-aeropuerto-el-pindo.webp",
    cliente: "Unidad Administrativa Especial de Aeronáutica Civil",
    es: { kicker: "Infraestructura aeroportuaria", title: "Interventoría integral del mantenimiento y rehabilitación de la pista del Aeropuerto El Pindo de Montelíbano", ubi: "Montelíbano, Córdoba (Colombia)", sector: "Transporte", tipo: "Aeroportuaria", monto: "319.537.906 COP (contrato 24001290-H3, 2025, terminado)",
      reto: "Devolver a la pista, la calle de rodaje, la plataforma y las zonas de seguridad unas condiciones que garanticen una operación aérea fiable, segura y eficiente.",
      sol: "Revisión y aprobación de los estudios y diseños (pavimentos, geometría, señalización y plan de adaptación de la guía ambiental) e interventoría integral de la rehabilitación, con supervisión técnica, administrativa y ambiental, a lo largo de 2025.",
      imp: "Mayor seguridad operacional y confort en despegues y aterrizajes, con un efecto directo en la conectividad aérea de la región." },
    en: { kicker: "Airport infrastructure", title: "Comprehensive supervision of the runway maintenance and rehabilitation at El Pindo Airport, Montelíbano", ubi: "Montelíbano, Córdoba (Colombia)", sector: "Transport", tipo: "Airport", monto: "COP 319,537,906 (contract 24001290-H3, 2025, completed)",
      reto: "To restore the runway, taxiway, apron and safety areas to a condition that guarantees reliable, safe and efficient air operations.",
      sol: "Review and approval of the studies and designs (pavements, geometry, markings and the environmental-guide adaptation plan) and comprehensive supervision of the rehabilitation, with technical, administrative and environmental oversight, throughout 2025.",
      imp: "Greater operational safety and comfort on take-off and landing, with a direct effect on the region's air connectivity." },
    fr: { kicker: "Infrastructure aéroportuaire", title: "Supervision intégrale de l'entretien et de la réhabilitation de la piste de l'aéroport El Pindo de Montelíbano", ubi: "Montelíbano, Córdoba (Colombie)", sector: "Transport", tipo: "Aéroportuaire", monto: "319 537 906 COP (contrat 24001290-H3, 2025, achevé)",
      reto: "Rendre à la piste, à la voie de circulation, à l'aire de trafic et aux zones de sécurité des conditions garantissant une exploitation aérienne fiable, sûre et efficace.",
      sol: "Révision et approbation des études et conceptions (chaussées, géométrie, signalisation et plan d'adaptation du guide environnemental) et supervision intégrale de la réhabilitation, avec suivi technique, administratif et environnemental, tout au long de 2025.",
      imp: "Une sécurité opérationnelle et un confort accrus au décollage et à l'atterrissage, avec un effet direct sur la connectivité aérienne de la région." },
    pt: { kicker: "Infraestrutura aeroportuária", title: "Fiscalização integral da manutenção e reabilitação da pista do Aeroporto El Pindo de Montelíbano", ubi: "Montelíbano, Córdoba (Colômbia)", sector: "Transportes", tipo: "Aeroportuária", monto: "319.537.906 COP (contrato 24001290-H3, 2025, concluído)",
      reto: "Devolver à pista, ao caminho de circulação, à plataforma e às zonas de segurança condições que garantam uma operação aérea fiável, segura e eficiente.",
      sol: "Revisão e aprovação dos estudos e projetos (pavimentos, geometria, sinalização e plano de adaptação do guia ambiental) e fiscalização integral da reabilitação, com supervisão técnica, administrativa e ambiental, ao longo de 2025.",
      imp: "Maior segurança operacional e conforto nas descolagens e aterragens, com efeito direto na conectividade aérea da região." }
  },
  {
    id: "mantenimiento-vial-tolima",
    img: "assets/img/proj-mantenimiento-vial-tolima.webp",
    cliente: "INVIAS – Instituto Nacional de Vías",
    es: { kicker: "Conservación vial", title: "Administración vial de las carreteras nacionales de la Dirección Territorial Tolima, Lote 2", ubi: "Fresno, Mariquita y Honda, Tolima (Colombia)", sector: "Transporte", tipo: "Conservación de carreteras", monto: "3.089.425.878 COP (contrato 2018 de 2024, 2024 – 2026, en ejecución; participación del 60 % en el Consorcio Admivial ECG-Ingecon)",
      reto: "Garantizar la conservación, el mantenimiento y la atención integral de la red vial nacional en el norte del Tolima, con respuesta inmediata ante emergencias.",
      sol: "Consultoría especializada en administración vial desde julio de 2024: limpieza de cunetas, poda, inspecciones técnicas de puentes y mantenimiento preventivo de los tramos críticos.",
      imp: "Más de 116.000 personas beneficiadas por una movilidad más segura y eficiente, con efecto en el desarrollo económico y territorial de la región." },
    en: { kicker: "Road maintenance", title: "Road administration of the national roads of the Tolima Territorial Directorate, Lot 2", ubi: "Fresno, Mariquita and Honda, Tolima (Colombia)", sector: "Transport", tipo: "Road maintenance", monto: "COP 3,089,425,878 (contract 2018 of 2024, 2024 – 2026, under way; 60% share in Consorcio Admivial ECG-Ingecon)",
      reto: "To guarantee the upkeep, maintenance and comprehensive care of the national road network in northern Tolima, with immediate response to emergencies.",
      sol: "Specialised road-administration consultancy since July 2024: ditch cleaning, pruning, technical bridge inspections and preventive maintenance of critical sections.",
      imp: "More than 116,000 people benefiting from safer and more efficient mobility, with an effect on the region's economic and territorial development." },
    fr: { kicker: "Entretien routier", title: "Administration routière des routes nationales de la Direction territoriale du Tolima, lot 2", ubi: "Fresno, Mariquita et Honda, Tolima (Colombie)", sector: "Transport", tipo: "Entretien des routes", monto: "3 089 425 878 COP (contrat 2018 de 2024, 2024 – 2026, en cours ; participation de 60 % au Consorcio Admivial ECG-Ingecon)",
      reto: "Garantir la conservation, l'entretien et la prise en charge intégrale du réseau routier national dans le nord du Tolima, avec une réponse immédiate aux urgences.",
      sol: "Conseil spécialisé en administration routière depuis juillet 2024 : curage des fossés, élagage, inspections techniques des ponts et entretien préventif des tronçons critiques.",
      imp: "Plus de 116 000 personnes bénéficiant d'une mobilité plus sûre et plus efficace, avec un effet sur le développement économique et territorial de la région." },
    pt: { kicker: "Conservação rodoviária", title: "Administração viária das estradas nacionais da Direção Territorial do Tolima, Lote 2", ubi: "Fresno, Mariquita e Honda, Tolima (Colômbia)", sector: "Transportes", tipo: "Conservação de estradas", monto: "3.089.425.878 COP (contrato 2018 de 2024, 2024 – 2026, em execução; participação de 60 % no Consorcio Admivial ECG-Ingecon)",
      reto: "Garantir a conservação, a manutenção e a atenção integral da rede rodoviária nacional no norte do Tolima, com resposta imediata a emergências.",
      sol: "Consultoria especializada em administração viária desde julho de 2024: limpeza de valetas, poda, inspeções técnicas de pontes e manutenção preventiva dos troços críticos.",
      imp: "Mais de 116.000 pessoas beneficiadas por uma mobilidade mais segura e eficiente, com efeito no desenvolvimento económico e territorial da região." }
  },
  {
    id: "caminos-vecinales-cundinamarca",
    cliente: "Instituto de Infraestructura y Concesiones de Cundinamarca – ICCU",
    es: { kicker: "Infraestructura vial", title: "Interventoría de las vías del programa «Caminos Vecinales, Caminos para Quedarse» en Cundinamarca, Lote 1", ubi: "Cundinamarca (Colombia)", sector: "Transporte", tipo: "Carreteras", monto: "3.903.576.140 COP (contrato ICCU-CTO-218 de 2025, 2025 – 2026, en ejecución)" },
    en: { kicker: "Road infrastructure", title: "Supervision of the roads of the 'Caminos Vecinales, Caminos para Quedarse' programme in Cundinamarca, Lot 1", ubi: "Cundinamarca (Colombia)", sector: "Transport", tipo: "Roads", monto: "COP 3,903,576,140 (contract ICCU-CTO-218 of 2025, 2025 – 2026, under way)" },
    fr: { kicker: "Infrastructure routière", title: "Supervision des routes du programme « Caminos Vecinales, Caminos para Quedarse » dans le Cundinamarca, lot 1", ubi: "Cundinamarca (Colombie)", sector: "Transport", tipo: "Routes", monto: "3 903 576 140 COP (contrat ICCU-CTO-218 de 2025, 2025 – 2026, en cours)" },
    pt: { kicker: "Infraestrutura rodoviária", title: "Fiscalização das vias do programa «Caminos Vecinales, Caminos para Quedarse» em Cundinamarca, Lote 1", ubi: "Cundinamarca (Colômbia)", sector: "Transportes", tipo: "Estradas", monto: "3.903.576.140 COP (contrato ICCU-CTO-218 de 2025, 2025 – 2026, em execução)" }
  },
  {
    id: "vias-espacio-publico-cali",
    cliente: "Distrito Especial de Santiago de Cali – Secretaría de Infraestructura",
    es: { kicker: "Infraestructura urbana", title: "Interventoría de las obras de infraestructura vial y espacio público del Distrito Especial de Santiago de Cali", ubi: "Cali, Valle del Cauca (Colombia)", sector: "Transporte", tipo: "Vía urbana", monto: "2.754.829.678 COP (2026 – 2027, en ejecución)" },
    en: { kicker: "Urban infrastructure", title: "Supervision of road infrastructure and public-space works in the Special District of Santiago de Cali", ubi: "Cali, Valle del Cauca (Colombia)", sector: "Transport", tipo: "Urban road", monto: "COP 2,754,829,678 (2026 – 2027, under way)" },
    fr: { kicker: "Infrastructure urbaine", title: "Supervision des travaux d'infrastructure routière et d'espace public du District spécial de Santiago de Cali", ubi: "Cali, Valle del Cauca (Colombie)", sector: "Transport", tipo: "Voirie urbaine", monto: "2 754 829 678 COP (2026 – 2027, en cours)" },
    pt: { kicker: "Infraestrutura urbana", title: "Fiscalização das obras de infraestrutura rodoviária e espaço público do Distrito Especial de Santiago de Cali", ubi: "Cali, Valle del Cauca (Colômbia)", sector: "Transportes", tipo: "Via urbana", monto: "2.754.829.678 COP (2026 – 2027, em execução)" }
  },
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
    cliente: "Gobierno Regional del Callao",
    es: { kicker: "Infraestructura vial urbana", title: "Construcción de la vía Costa Verde, tramo Callao", ubi: "Callao (Perú)", sector: "Transporte", tipo: "Vía urbana", monto: "5.405.787,09 soles; obra: 313.155.462,27 soles" },
    en: { kicker: "Urban road infrastructure", title: "Construction of the Costa Verde expressway, Callao section", ubi: "Callao (Peru)", sector: "Transport", tipo: "Urban road", monto: "5,405,787.09 soles; works: 313,155,462.27 soles" },
    fr: { kicker: "Infrastructure routière urbaine", title: "Construction de la voie Costa Verde, section Callao", ubi: "Callao (Pérou)", sector: "Transport", tipo: "Voirie urbaine", monto: "5 405 787,09 soles ; travaux : 313 155 462,27 soles" },
    pt: { kicker: "Infraestrutura rodoviária urbana", title: "Construção da via Costa Verde, trecho Callao", ubi: "Callao (Peru)", sector: "Transportes", tipo: "Via urbana", monto: "5.405.787,09 soles; obra: 313.155.462,27 soles" }
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
    id: "hospitales-san-martin",
    cliente: "Proyecto Especial Huallaga Central",
    es: { kicker: "Infraestructura hospitalaria", title: "Expediente técnico y construcción de los hospitales de Picota, Saposoa, San José de Sisa, Bellavista y Tocache", ubi: "Región San Martín (Perú)", sector: "Edificación", tipo: "Sanitaria", monto: "7.213.708,00 soles" },
    en: { kicker: "Hospital infrastructure", title: "Detailed design and construction of the Picota, Saposoa, San José de Sisa, Bellavista and Tocache hospitals", ubi: "San Martín region (Peru)", sector: "Building", tipo: "Healthcare", monto: "7,213,708.00 soles" },
    fr: { kicker: "Infrastructure hospitalière", title: "Dossier technique et construction des hôpitaux de Picota, Saposoa, San José de Sisa, Bellavista et Tocache", ubi: "Région de San Martín (Pérou)", sector: "Bâtiment", tipo: "Santé", monto: "7 213 708,00 soles" },
    pt: { kicker: "Infraestrutura hospitalar", title: "Projeto de execução e construção dos hospitais de Picota, Saposoa, San José de Sisa, Bellavista e Tocache", ubi: "Região de San Martín (Peru)", sector: "Edificação", tipo: "Saúde", monto: "7.213.708,00 soles" }
  },
  {
    id: "sede-minagri",
    img: "assets/img/proj-sede-minagri.webp",
    cliente: "MINAGRI",
    es: { kicker: "Edificación institucional", title: "Mejoramiento e implementación de la nueva sede del MINAGRI", ubi: "Lima (Perú)", sector: "Edificación", tipo: "Institucional", monto: "2.746.804,35 soles" },
    en: { kicker: "Institutional building", title: "Refurbishment and fit-out of the new MINAGRI headquarters", ubi: "Lima (Peru)", sector: "Building", tipo: "Institutional", monto: "2,746,804.35 soles" },
    fr: { kicker: "Bâtiment institutionnel", title: "Amélioration et aménagement du nouveau siège du MINAGRI", ubi: "Lima (Pérou)", sector: "Bâtiment", tipo: "Institutionnel", monto: "2 746 804,35 soles" },
    pt: { kicker: "Edificação institucional", title: "Melhoramento e implementação da nova sede do MINAGRI", ubi: "Lima (Peru)", sector: "Edificação", tipo: "Institucional", monto: "2.746.804,35 soles" }
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
    cliente: "Marina de Guerra del Perú",
    es: { kicker: "Infraestructura militar", title: "Construcción de la nueva base aeronaval del Callao", ubi: "Callao (Perú)", sector: "Edificación", tipo: "Militar", monto: "6.173.102,80 soles" },
    en: { kicker: "Military infrastructure", title: "Construction of the new Callao naval air base", ubi: "Callao (Peru)", sector: "Building", tipo: "Military", monto: "6,173,102.80 soles" },
    fr: { kicker: "Infrastructure militaire", title: "Construction de la nouvelle base aéronavale de Callao", ubi: "Callao (Pérou)", sector: "Bâtiment", tipo: "Militaire", monto: "6 173 102,80 soles" },
    pt: { kicker: "Infraestrutura militar", title: "Construção da nova base aeronaval de Callao", ubi: "Callao (Peru)", sector: "Edificação", tipo: "Militar", monto: "6.173.102,80 soles" }
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
    id: "muelle-ilo",
    cliente: "ENAPU",
    es: { kicker: "Infraestructura portuaria", title: "Rehabilitación y reparación del muelle del terminal portuario de Ilo", ubi: "Ilo, Moquegua (Perú)", sector: "Transporte", tipo: "Portuaria", monto: "1.484.941,51 soles" },
    en: { kicker: "Port infrastructure", title: "Rehabilitation and repair of the quay at the Ilo port terminal", ubi: "Ilo, Moquegua (Peru)", sector: "Transport", tipo: "Port", monto: "1,484,941.51 soles" },
    fr: { kicker: "Infrastructure portuaire", title: "Réhabilitation et réparation du quai du terminal portuaire d'Ilo", ubi: "Ilo, Moquegua (Pérou)", sector: "Transport", tipo: "Portuaire", monto: "1 484 941,51 soles" },
    pt: { kicker: "Infraestrutura portuária", title: "Reabilitação e reparação do cais do terminal portuário de Ilo", ubi: "Ilo, Moquegua (Peru)", sector: "Transportes", tipo: "Portuária", monto: "1.484.941,51 soles" }
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
