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
   Los proyectos de Colombia salen de la web de la filial, euroconsult.com.co
   (sección «Proyectos», consultada el 8 de octubre de 2026): cliente, ubicación,
   tipo, fechas, alcance y descripción de cada ficha. `reto`, `sol` e `imp` se
   han redactado solo con lo que dicen esas fichas; las fotos proj-*.webp de
   Colombia son las mismas de esa web. No hay importes en las fichas, así que
   `monto` se omite. Se han traído 7 de los 12 proyectos publicados; los otros
   cinco (vías regionales Pueblo Rico – Riosucio, vías terciarias de Magdalena,
   puente La Nevera en Orocué, aeropuerto El Edén de Armenia y gestión vial en
   Antioquia) pueden añadirse de la misma fuente. */
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
    es: { kicker: "Movilidad urbana", title: "Adecuación de la Troncal TransMilenio de la Avenida 68 (Carrera 68), Grupo 7", ubi: "Bogotá D.C. (Colombia)", sector: "Transporte", tipo: "Transporte urbano / BRT",
      reto: "Adaptar al sistema TransMilenio un tramo de 3,05 km de la Carrera 68, entre la Calle 66 y la Carrera 65A, dentro de una troncal de 17 km, manteniendo la actividad de una de las avenidas más transitadas de Bogotá.",
      sol: "Junto al Consorcio Bulevar: carriles mixtos y carriles BRT, tres estaciones, puente vehicular, puentes peatonales y rampas, 2.900 m de ciclorruta con cicloestaciones y bicipuente, más de 80.000 m² de espacio público y renovación de las redes hidráulicas y de servicios.",
      imp: "Una movilidad más sostenible, segura y eficiente para las localidades de Barrios Unidos, Engativá y Suba, con más de 10 UPZ beneficiadas. Obra en ejecución hasta octubre de 2026, con mantenimiento posterior hasta 2031." },
    en: { kicker: "Urban mobility", title: "Adaptation of the Avenida 68 (Carrera 68) TransMilenio trunk line, Group 7", ubi: "Bogotá D.C. (Colombia)", sector: "Transport", tipo: "Urban transport / BRT",
      reto: "To adapt a 3.05 km section of Carrera 68, between Calle 66 and Carrera 65A, to the TransMilenio system as part of a 17 km trunk line, while keeping one of Bogotá's busiest avenues in operation.",
      sol: "Together with Consorcio Bulevar: mixed-traffic and BRT lanes, three stations, a road bridge, footbridges and ramps, 2,900 m of cycle path with cycle stations and a cycle bridge, over 80,000 m² of public space and the renewal of water and utility networks.",
      imp: "More sustainable, safer and more efficient mobility for the districts of Barrios Unidos, Engativá and Suba, benefiting more than 10 planning zones. Works under way until October 2026, followed by maintenance until 2031." },
    fr: { kicker: "Mobilité urbaine", title: "Adaptation du tronc TransMilenio de l'Avenida 68 (Carrera 68), groupe 7", ubi: "Bogotá D.C. (Colombie)", sector: "Transport", tipo: "Transport urbain / BRT",
      reto: "Adapter au système TransMilenio un tronçon de 3,05 km de la Carrera 68, entre la Calle 66 et la Carrera 65A, au sein d'un axe de 17 km, tout en maintenant l'activité de l'une des avenues les plus fréquentées de Bogotá.",
      sol: "Avec le Consorcio Bulevar : voies mixtes et voies BRT, trois stations, un pont routier, des passerelles piétonnes et des rampes, 2 900 m de piste cyclable avec stations vélo et passerelle cyclable, plus de 80 000 m² d'espace public et renouvellement des réseaux hydrauliques et de services.",
      imp: "Une mobilité plus durable, plus sûre et plus efficace pour les localités de Barrios Unidos, Engativá et Suba, avec plus de 10 zones de planification bénéficiaires. Travaux en cours jusqu'en octobre 2026, suivis d'une maintenance jusqu'en 2031." },
    pt: { kicker: "Mobilidade urbana", title: "Adequação do eixo TransMilenio da Avenida 68 (Carrera 68), Grupo 7", ubi: "Bogotá D.C. (Colômbia)", sector: "Transportes", tipo: "Transporte urbano / BRT",
      reto: "Adaptar ao sistema TransMilenio um troço de 3,05 km da Carrera 68, entre a Calle 66 e a Carrera 65A, dentro de um eixo de 17 km, mantendo a atividade de uma das avenidas mais movimentadas de Bogotá.",
      sol: "Em conjunto com o Consorcio Bulevar: faixas mistas e faixas BRT, três estações, ponte rodoviária, pontes pedonais e rampas, 2.900 m de ciclovia com cicloestações e ponte ciclável, mais de 80.000 m² de espaço público e renovação das redes hidráulicas e de serviços.",
      imp: "Uma mobilidade mais sustentável, segura e eficiente para as localidades de Barrios Unidos, Engativá e Suba, com mais de 10 zonas de planeamento beneficiadas. Obra em execução até outubro de 2026, com manutenção posterior até 2031." }
  },
  {
    id: "torre-control-popayan",
    destacado: true, // sale en el carrusel de la portada
    img: "assets/img/proj-torre-control-popayan.webp",
    cliente: "Aeronáutica Civil de Colombia",
    es: { kicker: "Infraestructura aeroportuaria", title: "Construcción de la Torre de Control del Aeropuerto Guillermo León Valencia de Popayán", ubi: "Popayán, Cauca (Colombia)", sector: "Transporte", tipo: "Aeroportuaria",
      reto: "Levantar una nueva torre de control en un aeropuerto en servicio, con montaje especializado en altura y estrictos protocolos de seguridad industrial.",
      sol: "Construcción y supervisión técnica rigurosa del conjunto, desde la estructura hasta el montaje de la cabina, bajo contrato con la Aeronáutica Civil.",
      imp: "Una infraestructura aeronáutica estratégica que refuerza la conectividad aérea y el desarrollo regional del Cauca. Iniciada en 2024, en desarrollo." },
    en: { kicker: "Airport infrastructure", title: "Construction of the control tower at Guillermo León Valencia Airport, Popayán", ubi: "Popayán, Cauca (Colombia)", sector: "Transport", tipo: "Airport",
      reto: "To build a new control tower at an airport in operation, with specialised work at height and strict industrial-safety protocols.",
      sol: "Construction and rigorous technical supervision of the whole, from the structure to the assembly of the cab, under contract to Colombia's civil aviation authority.",
      imp: "A strategic piece of air-navigation infrastructure that strengthens air connectivity and regional development in Cauca. Started in 2024, under way." },
    fr: { kicker: "Infrastructure aéroportuaire", title: "Construction de la tour de contrôle de l'aéroport Guillermo León Valencia de Popayán", ubi: "Popayán, Cauca (Colombie)", sector: "Transport", tipo: "Aéroportuaire",
      reto: "Ériger une nouvelle tour de contrôle dans un aéroport en exploitation, avec un montage spécialisé en hauteur et de stricts protocoles de sécurité industrielle.",
      sol: "Construction et supervision technique rigoureuse de l'ensemble, de la structure au montage de la vigie, sous contrat avec l'Aeronáutica Civil de Colombie.",
      imp: "Une infrastructure aéronautique stratégique qui renforce la connectivité aérienne et le développement régional du Cauca. Lancée en 2024, en cours." },
    pt: { kicker: "Infraestrutura aeroportuária", title: "Construção da torre de controlo do Aeroporto Guillermo León Valencia de Popayán", ubi: "Popayán, Cauca (Colômbia)", sector: "Transportes", tipo: "Aeroportuária",
      reto: "Erguer uma nova torre de controlo num aeroporto em funcionamento, com montagem especializada em altura e rigorosos protocolos de segurança industrial.",
      sol: "Construção e supervisão técnica rigorosa do conjunto, da estrutura à montagem da cabina, sob contrato com a Aeronáutica Civil da Colômbia.",
      imp: "Uma infraestrutura aeronáutica estratégica que reforça a conectividade aérea e o desenvolvimento regional do Cauca. Iniciada em 2024, em desenvolvimento." }
  },
  {
    id: "quibdo-pereira",
    img: "assets/img/proj-quibdo-pereira.webp",
    cliente: "INVIAS – Instituto Nacional de Vías",
    es: { kicker: "Infraestructura vial", title: "Interventoría integral del corredor vial Quibdó – Pereira, Transversal Central del Pacífico", ubi: "Chocó y Risaralda (Colombia)", sector: "Transporte", tipo: "Carreteras",
      reto: "Garantizar la seguridad, la calidad y el cumplimiento normativo de las obras en una vía estratégica que conecta el Pacífico con el centro del país.",
      sol: "Interventoría técnica, administrativa, financiera, jurídica y ambiental de las obras de construcción, mejoramiento, rehabilitación, mantenimiento y atención de puntos críticos, en un plazo de 19 meses y 22 días (diciembre de 2024 – julio de 2026).",
      imp: "Más de 54.000 habitantes beneficiados y un impulso al desarrollo económico, turístico y social de la región." },
    en: { kicker: "Road infrastructure", title: "Comprehensive supervision of the Quibdó – Pereira road corridor, Central Pacific Transversal", ubi: "Chocó and Risaralda (Colombia)", sector: "Transport", tipo: "Roads",
      reto: "To guarantee the safety, quality and regulatory compliance of the works on a strategic road linking the Pacific coast with the centre of the country.",
      sol: "Technical, administrative, financial, legal and environmental supervision of the construction, upgrading, rehabilitation, maintenance and critical-point works, over 19 months and 22 days (December 2024 – July 2026).",
      imp: "More than 54,000 inhabitants benefited and a boost to the economic, tourist and social development of the region." },
    fr: { kicker: "Infrastructure routière", title: "Supervision intégrale du corridor routier Quibdó – Pereira, Transversale centrale du Pacifique", ubi: "Chocó et Risaralda (Colombie)", sector: "Transport", tipo: "Routes",
      reto: "Garantir la sécurité, la qualité et la conformité réglementaire des travaux sur un axe stratégique reliant le Pacifique au centre du pays.",
      sol: "Supervision technique, administrative, financière, juridique et environnementale des travaux de construction, d'amélioration, de réhabilitation, d'entretien et de traitement des points critiques, sur 19 mois et 22 jours (décembre 2024 – juillet 2026).",
      imp: "Plus de 54 000 habitants bénéficiaires et un élan pour le développement économique, touristique et social de la région." },
    pt: { kicker: "Infraestrutura rodoviária", title: "Fiscalização integral do corredor rodoviário Quibdó – Pereira, Transversal Central do Pacífico", ubi: "Chocó e Risaralda (Colômbia)", sector: "Transportes", tipo: "Estradas",
      reto: "Garantir a segurança, a qualidade e o cumprimento normativo das obras numa via estratégica que liga o Pacífico ao centro do país.",
      sol: "Fiscalização técnica, administrativa, financeira, jurídica e ambiental das obras de construção, melhoramento, reabilitação, manutenção e atenção a pontos críticos, num prazo de 19 meses e 22 dias (dezembro de 2024 – julho de 2026).",
      imp: "Mais de 54.000 habitantes beneficiados e um impulso ao desenvolvimento económico, turístico e social da região." }
  },
  {
    id: "aeropuertos-ibague-neiva",
    img: "assets/img/proj-aeropuertos-ibague-neiva.webp",
    cliente: "Unidad Administrativa Especial de Aeronáutica Civil",
    es: { kicker: "Infraestructura aeroportuaria", title: "Interventoría integral al mantenimiento de los aeropuertos de Ibagué y Neiva", ubi: "Tolima y Huila (Colombia)", sector: "Transporte", tipo: "Aeroportuaria",
      reto: "Asegurar la calidad, la seguridad y el cumplimiento normativo de las obras de mantenimiento en dos terminales en operación.",
      sol: "Supervisión técnica, administrativa y ambiental del mantenimiento de la infraestructura física lado tierra y de los sistemas aeroportuarios de ambos aeropuertos, durante 19 meses (marzo de 2025 – julio de 2026).",
      imp: "Dos aeropuertos regionales con infraestructura y sistemas en mejores condiciones de servicio para pasajeros y personal operativo." },
    en: { kicker: "Airport infrastructure", title: "Comprehensive supervision of maintenance works at Ibagué and Neiva airports", ubi: "Tolima and Huila (Colombia)", sector: "Transport", tipo: "Airport",
      reto: "To ensure the quality, safety and regulatory compliance of maintenance works at two terminals in operation.",
      sol: "Technical, administrative and environmental supervision of the maintenance of landside facilities and airport systems at both airports, over 19 months (March 2025 – July 2026).",
      imp: "Two regional airports with facilities and systems in better operating condition for passengers and operational staff." },
    fr: { kicker: "Infrastructure aéroportuaire", title: "Supervision intégrale de la maintenance des aéroports d'Ibagué et de Neiva", ubi: "Tolima et Huila (Colombie)", sector: "Transport", tipo: "Aéroportuaire",
      reto: "Assurer la qualité, la sécurité et la conformité réglementaire des travaux de maintenance dans deux aérogares en exploitation.",
      sol: "Supervision technique, administrative et environnementale de la maintenance des infrastructures côté ville et des systèmes aéroportuaires des deux aéroports, pendant 19 mois (mars 2025 – juillet 2026).",
      imp: "Deux aéroports régionaux dont les installations et les systèmes offrent de meilleures conditions de service aux passagers et au personnel d'exploitation." },
    pt: { kicker: "Infraestrutura aeroportuária", title: "Fiscalização integral da manutenção dos aeroportos de Ibagué e Neiva", ubi: "Tolima e Huila (Colômbia)", sector: "Transportes", tipo: "Aeroportuária",
      reto: "Assegurar a qualidade, a segurança e o cumprimento normativo das obras de manutenção em dois terminais em operação.",
      sol: "Supervisão técnica, administrativa e ambiental da manutenção da infraestrutura física do lado terra e dos sistemas aeroportuários de ambos os aeroportos, durante 19 meses (março de 2025 – julho de 2026).",
      imp: "Dois aeroportos regionais com infraestruturas e sistemas em melhores condições de serviço para passageiros e pessoal operacional." }
  },
  {
    id: "aeropuerto-el-pindo",
    destacado: true, // sale en el carrusel de la portada
    img: "assets/img/proj-aeropuerto-el-pindo.webp",
    cliente: "Unidad Administrativa Especial de Aeronáutica Civil",
    es: { kicker: "Infraestructura aeroportuaria", title: "Interventoría integral del mantenimiento y rehabilitación de la pista del Aeropuerto El Pindo de Montelíbano", ubi: "Montelíbano, Córdoba (Colombia)", sector: "Transporte", tipo: "Aeroportuaria",
      reto: "Devolver a la pista, la calle de rodaje, la plataforma y las zonas de seguridad unas condiciones que garanticen una operación aérea fiable, segura y eficiente.",
      sol: "Revisión y aprobación de los estudios y diseños (pavimentos, geometría, señalización y plan de adaptación de la guía ambiental) e interventoría integral de la rehabilitación, con supervisión técnica, administrativa y ambiental. Inicio en enero de 2025.",
      imp: "Mayor seguridad operacional y confort en despegues y aterrizajes, con un efecto directo en la conectividad aérea de la región." },
    en: { kicker: "Airport infrastructure", title: "Comprehensive supervision of the runway maintenance and rehabilitation at El Pindo Airport, Montelíbano", ubi: "Montelíbano, Córdoba (Colombia)", sector: "Transport", tipo: "Airport",
      reto: "To restore the runway, taxiway, apron and safety areas to a condition that guarantees reliable, safe and efficient air operations.",
      sol: "Review and approval of the studies and designs (pavements, geometry, markings and the environmental-guide adaptation plan) and comprehensive supervision of the rehabilitation, with technical, administrative and environmental oversight. Started in January 2025.",
      imp: "Greater operational safety and comfort on take-off and landing, with a direct effect on the region's air connectivity." },
    fr: { kicker: "Infrastructure aéroportuaire", title: "Supervision intégrale de l'entretien et de la réhabilitation de la piste de l'aéroport El Pindo de Montelíbano", ubi: "Montelíbano, Córdoba (Colombie)", sector: "Transport", tipo: "Aéroportuaire",
      reto: "Rendre à la piste, à la voie de circulation, à l'aire de trafic et aux zones de sécurité des conditions garantissant une exploitation aérienne fiable, sûre et efficace.",
      sol: "Révision et approbation des études et conceptions (chaussées, géométrie, signalisation et plan d'adaptation du guide environnemental) et supervision intégrale de la réhabilitation, avec suivi technique, administratif et environnemental. Démarrage en janvier 2025.",
      imp: "Une sécurité opérationnelle et un confort accrus au décollage et à l'atterrissage, avec un effet direct sur la connectivité aérienne de la région." },
    pt: { kicker: "Infraestrutura aeroportuária", title: "Fiscalização integral da manutenção e reabilitação da pista do Aeroporto El Pindo de Montelíbano", ubi: "Montelíbano, Córdoba (Colômbia)", sector: "Transportes", tipo: "Aeroportuária",
      reto: "Devolver à pista, ao caminho de circulação, à plataforma e às zonas de segurança condições que garantam uma operação aérea fiável, segura e eficiente.",
      sol: "Revisão e aprovação dos estudos e projetos (pavimentos, geometria, sinalização e plano de adaptação do guia ambiental) e fiscalização integral da reabilitação, com supervisão técnica, administrativa e ambiental. Início em janeiro de 2025.",
      imp: "Maior segurança operacional e conforto nas descolagens e aterragens, com efeito direto na conectividade aérea da região." }
  },
  {
    id: "transversal-casanare",
    img: "assets/img/proj-transversal-casanare.webp",
    cliente: "INVIAS – Instituto Nacional de Vías",
    es: { kicker: "Infraestructura vial", title: "Construcción de la Transversal del Casanare, sector Orocué", ubi: "Orocué, Casanare (Colombia)", sector: "Transporte", tipo: "Carreteras",
      reto: "Dotar al departamento del Casanare de una vía clave para su movilidad y competitividad, en un entorno llanero de comunidades dispersas.",
      sol: "Ejecución de las obras viales con supervisión y control técnico orientados a la calidad, la seguridad y la sostenibilidad, acompañados de programas sociales con la comunidad local. Obra en curso.",
      imp: "Mejor calidad de vida para más de 13.800 personas, generación de empleo y fortalecimiento del tejido social de la región." },
    en: { kicker: "Road infrastructure", title: "Construction of the Transversal del Casanare, Orocué section", ubi: "Orocué, Casanare (Colombia)", sector: "Transport", tipo: "Roads",
      reto: "To give the department of Casanare a key road for its mobility and competitiveness, in a plains landscape of scattered communities.",
      sol: "Execution of the road works with technical supervision and control focused on quality, safety and sustainability, together with social programmes for the local community. Works under way.",
      imp: "A better quality of life for more than 13,800 people, job creation and a stronger social fabric in the region." },
    fr: { kicker: "Infrastructure routière", title: "Construction de la Transversale du Casanare, secteur d'Orocué", ubi: "Orocué, Casanare (Colombie)", sector: "Transport", tipo: "Routes",
      reto: "Doter le département du Casanare d'un axe clé pour sa mobilité et sa compétitivité, dans un paysage de plaines aux communautés dispersées.",
      sol: "Exécution des travaux routiers avec une supervision et un contrôle techniques axés sur la qualité, la sécurité et la durabilité, accompagnés de programmes sociaux avec la communauté locale. Travaux en cours.",
      imp: "Une meilleure qualité de vie pour plus de 13 800 personnes, la création d'emplois et le renforcement du tissu social de la région." },
    pt: { kicker: "Infraestrutura rodoviária", title: "Construção da Transversal do Casanare, setor de Orocué", ubi: "Orocué, Casanare (Colômbia)", sector: "Transportes", tipo: "Estradas",
      reto: "Dotar o departamento de Casanare de uma via fundamental para a sua mobilidade e competitividade, numa paisagem de planícies com comunidades dispersas.",
      sol: "Execução das obras rodoviárias com supervisão e controlo técnico orientados para a qualidade, a segurança e a sustentabilidade, acompanhados de programas sociais com a comunidade local. Obra em curso.",
      imp: "Melhor qualidade de vida para mais de 13.800 pessoas, criação de emprego e reforço do tecido social da região." }
  },
  {
    id: "mantenimiento-vial-tolima",
    img: "assets/img/proj-mantenimiento-vial-tolima.webp",
    cliente: "INVIAS – Instituto Nacional de Vías",
    es: { kicker: "Conservación vial", title: "Administración vial de las carreteras nacionales de la Dirección Territorial Tolima (Grupo AMV 2, Lote 2)", ubi: "Fresno, Mariquita y Honda, Tolima (Colombia)", sector: "Transporte", tipo: "Conservación de carreteras",
      reto: "Garantizar la conservación, el mantenimiento y la atención integral de la red vial nacional en el norte del Tolima, con respuesta inmediata ante emergencias.",
      sol: "Consultoría especializada en administración vial desde julio de 2024: limpieza de cunetas, poda, inspecciones técnicas de puentes y mantenimiento preventivo de los tramos críticos.",
      imp: "Más de 116.000 personas beneficiadas por una movilidad más segura y eficiente, con efecto en el desarrollo económico y territorial de la región." },
    en: { kicker: "Road maintenance", title: "Road administration of the national roads of the Tolima Territorial Directorate (Group AMV 2, Lot 2)", ubi: "Fresno, Mariquita and Honda, Tolima (Colombia)", sector: "Transport", tipo: "Road maintenance",
      reto: "To guarantee the upkeep, maintenance and comprehensive care of the national road network in northern Tolima, with immediate response to emergencies.",
      sol: "Specialised road-administration consultancy since July 2024: ditch cleaning, pruning, technical bridge inspections and preventive maintenance of critical sections.",
      imp: "More than 116,000 people benefiting from safer and more efficient mobility, with an effect on the region's economic and territorial development." },
    fr: { kicker: "Entretien routier", title: "Administration routière des routes nationales de la Direction territoriale du Tolima (groupe AMV 2, lot 2)", ubi: "Fresno, Mariquita et Honda, Tolima (Colombie)", sector: "Transport", tipo: "Entretien des routes",
      reto: "Garantir la conservation, l'entretien et la prise en charge intégrale du réseau routier national dans le nord du Tolima, avec une réponse immédiate aux urgences.",
      sol: "Conseil spécialisé en administration routière depuis juillet 2024 : curage des fossés, élagage, inspections techniques des ponts et entretien préventif des tronçons critiques.",
      imp: "Plus de 116 000 personnes bénéficiant d'une mobilité plus sûre et plus efficace, avec un effet sur le développement économique et territorial de la région." },
    pt: { kicker: "Conservação rodoviária", title: "Administração viária das estradas nacionais da Direção Territorial do Tolima (Grupo AMV 2, Lote 2)", ubi: "Fresno, Mariquita e Honda, Tolima (Colômbia)", sector: "Transportes", tipo: "Conservação de estradas",
      reto: "Garantir a conservação, a manutenção e a atenção integral da rede rodoviária nacional no norte do Tolima, com resposta imediata a emergências.",
      sol: "Consultoria especializada em administração viária desde julho de 2024: limpeza de valetas, poda, inspeções técnicas de pontes e manutenção preventiva dos troços críticos.",
      imp: "Mais de 116.000 pessoas beneficiadas por uma mobilidade mais segura e eficiente, com efeito no desenvolvimento económico e territorial da região." }
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
