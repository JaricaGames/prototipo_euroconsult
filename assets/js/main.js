/* ECPI — Sitio institucional
   Cambio de idioma (ES/EN/FR/PT) y entradas discretas al hacer scroll. */
(function () {
  'use strict';

  var dicts = {
    es: {
      meta_title: "ECPI — Euroconsult Proyectos de Ingeniería",
      meta_desc: "ECPI es la matriz de un grupo internacional de consultoría e ingeniería con sedes en España, Perú y Colombia. Precisión técnica e integración de servicios.",
      skip: "Ir al contenido", aria_nav: "Navegación principal", aria_lang: "Selección de idioma",
      nav1: "El grupo", nav2: "Áreas", nav3: "Presencia", navp: "Proyectos", nav4: "Compromiso", nav5: "Contacto",
      aria_proj: "Proyectos del grupo",
      sp_kicker: "Proyectos", sp_title: "Cada obra explica el reto, la solución y el impacto.",
      p1_kicker: "Proyecto destacado / Infraestructura aeroportuaria",
      p1_t: "Torre de Control — Aeropuerto Guillermo León Valencia",
      p1_alt: "Torre de control del Aeropuerto Guillermo León Valencia, Popayán",
      lbl_ubi: "Ubicación", lbl_sector: "Sector", lbl_tipo: "Tipología",
      p1_ubi: "Popayán, Cauca", p1_sector: "Transporte", p1_tipo: "Aeroportuaria",
      p_next: "Próximos proyectos", view_p: "Ver proyecto", back_p: "Todos los proyectos",
      reto_t: "El reto", sol_t: "La solución", imp_t: "El impacto",
      t_grupo: "El grupo — ECPI", t_areas: "Áreas de actuación — ECPI", t_presencia: "Presencia internacional — ECPI",
      t_proyectos: "Proyectos — ECPI", t_compromiso: "Compromiso — ECPI", t_contacto: "Contacto — ECPI",
      hito_k: "Trayectoria",
      hito1_t: "1968 — Fundación", hito1_p: "El grupo nace en Madrid como firma de ingeniería de consulta, en los años en que la disciplina se consolidaba en España.",
      hito2_t: "Consolidación", hito2_p: "Décadas de trabajo continuado para administraciones públicas, constructoras y concesionarias consolidan la firma como referencia técnica independiente.",
      hito3_t: "Expansión americana", hito3_p: "La marca Euroconsult cruza el Atlántico: las filiales de Perú y Colombia llevan el mismo criterio técnico a los mercados americanos.",
      a1_x: "Carreteras y ferrocarriles, estructuras y puentes, obras hidráulicas y actuaciones urbanas.",
      a2_x: "Presencia permanente en obra, ensayos de laboratorio y auscultación de estructuras.",
      a3_x: "Due diligence técnica, peritajes e informes independientes para decisiones de inversión.",
      a4_x: "Estudios de impacto, restauración de entornos y planificación territorial.",
      a5_x: "Oficina técnica, control económico y coordinación de disciplinas en todo el ciclo.",
      sede1_p: "Dirección técnica y coordinación del grupo. Desde Madrid se establecen los criterios de calidad comunes a todas las sedes.",
      sede2_p: "Euroconsult América atiende desde Lima los mercados de la costa del Pacífico sur, con equipos locales y respaldo de la matriz.",
      sede3_p: "Euroconsult Colombia opera desde Bogotá para el mercado andino y centroamericano, con la misma exigencia técnica del grupo.",
      pri1_t: "Rigor", pri1_p: "Cada dato se mide, se contrasta y se firma. No entregamos lo que no podemos defender.",
      pri2_t: "Coherencia", pri2_p: "Un mismo criterio técnico en todas las sedes, disciplinas y escalas de proyecto.",
      pri3_t: "Permanencia", pri3_p: "Acompañamos la vida completa de la obra: quien proyecta con nosotros sabe que seguiremos ahí.",
      ct_note: "Atendemos consultas institucionales en español, inglés, francés y portugués.",
      hero_kicker: "Euroconsult Proyectos de Ingeniería",
      hero_title: "La solidez de la ingeniería, proyectada hacia el futuro.",
      hero_sub: "ECPI es la matriz de un grupo internacional de consultoría e ingeniería. Reunimos disciplinas, sedes y equipos bajo un mismo criterio: precisión técnica e integración de servicios.",
      hero_cta: "Conocer el grupo",
      s1_kicker: "El grupo", s1_title: "Una matriz, una manera de entender la ingeniería.",
      s1_p1: "Euroconsult Proyectos de Ingeniería nace en Madrid en 1968, cuando la ingeniería de consulta española comenzaba a definirse como disciplina propia. Desde entonces, el grupo ha acompañado la planificación, el diseño y la vida útil de infraestructuras de transporte, edificación y obra civil, dentro y fuera de España.",
      s1_p2: "Nuestra posición es la del técnico independiente: asesoramos a quien decide, supervisamos a quien construye y verificamos lo que se entrega. Esa independencia, sostenida durante más de cinco décadas, es la base de la confianza que administraciones públicas, constructoras, concesionarias y organismos multilaterales depositan en el grupo.",
      s1_p3: "ECPI integra bajo una misma dirección técnica ingeniería, laboratorio, auscultación y consultoría de operación. La integración no es un catálogo: es la capacidad de responder de una obra desde el primer estudio hasta el último dato de monitorización.",
      mis_t: "Misión",
      mis_p: "Aportar certeza técnica a quienes planifican, construyen y gestionan infraestructuras, mediante servicios de ingeniería rigurosos, independientes e integrados.",
      vis_t: "Visión",
      vis_p: "Consolidarnos como grupo de referencia en consultoría de ingeniería entre Europa y América, reconocidos por la precisión de nuestro trabajo y la permanencia de nuestros compromisos.",
      s2_kicker: "Áreas de actuación", s2_title: "Disciplinas que se integran en un mismo criterio técnico.",
      a1_t: "Ingeniería civil e infraestructuras",
      a1_p: "Proyectos y estudios de carreteras, estructuras, obras hidráulicas y transporte, desde la planificación hasta el diseño de detalle.",
      a2_t: "Supervisión y control de obra",
      a2_p: "Asistencia técnica, vigilancia y control de calidad durante la ejecución, garantizando que lo construido responde a lo proyectado.",
      a3_t: "Consultoría técnica",
      a3_p: "Estudios de viabilidad, auditorías técnicas y asesoramiento independiente a administraciones y promotores.",
      a4_t: "Medio ambiente y territorio",
      a4_p: "Evaluación ambiental, ordenación del territorio e integración de las infraestructuras en su entorno.",
      a5_t: "Gestión integral de proyectos",
      a5_p: "Planificación, coordinación de disciplinas y control de plazos y costes a lo largo del ciclo de vida del proyecto.",
      s3_kicker: "Presencia internacional", s3_title: "Un grupo, tres sedes, dos continentes.",
      s3_p: "La arquitectura de marca del grupo proyecta una imagen global cohesiva: cada sede conserva su identidad regional bajo el respaldo común de ECPI.",
      lbl_matriz: "Matriz", lbl_filial: "Filial", lbl_filial2: "Filial",
      hq_city: "Madrid, España", f1_city: "Lima, Perú", f2_city: "Bogotá, Colombia",
      hq_city2: "Madrid, España", f1_city2: "Lima, Perú", f2_city2: "Bogotá, Colombia",
      f1_city3: "Lima, Perú", f2_city3: "Bogotá, Colombia",
      st1: "Sedes", st2: "Continentes", st3: "Áreas de actuación",
      s4_kicker: "Compromiso", s4_title: "Seis lados, una sola figura.",
      s4_p1: "El monograma hexagonal de ECPI no es un adorno: simboliza la precisión técnica y la integración de servicios. Como en un hexágono, cada lado —cada disciplina, cada sede, cada equipo— sostiene a los demás y da forma a un conjunto exacto.",
      s4_p2: "Esa es nuestra forma de trabajar: rigor en el detalle, coherencia en el conjunto y una sola voz técnica ante cada proyecto.",
      quote: "La precisión es una forma de respeto: por la obra, por el territorio y por quienes confían en nosotros.",
      s5_kicker: "Contacto", s5_title: "Contacto institucional",
      s5_p: "Para consultas institucionales, alianzas y relaciones con inversores:",
      footer_fil: "Filiales del grupo",
      footer_legal: "© 2026 Euroconsult Proyectos de Ingeniería. Todos los derechos reservados."
    },
    en: {
      meta_title: "ECPI — Euroconsult Proyectos de Ingeniería | Engineering group",
      meta_desc: "ECPI is the parent company of an international engineering consultancy group with offices in Spain, Peru and Colombia. Technical precision and integrated services.",
      skip: "Skip to content", aria_nav: "Main navigation", aria_lang: "Language selection",
      nav1: "The group", nav2: "Practice", nav3: "Presence", navp: "Projects", nav4: "Commitment", nav5: "Contact",
      aria_proj: "Group projects",
      sp_kicker: "Projects", sp_title: "Every work explains the challenge, the solution and the impact.",
      p1_kicker: "Featured project / Airport infrastructure",
      p1_t: "Control Tower — Guillermo León Valencia Airport",
      p1_alt: "Control tower at Guillermo León Valencia Airport, Popayán",
      lbl_ubi: "Location", lbl_sector: "Sector", lbl_tipo: "Typology",
      p1_ubi: "Popayán, Cauca", p1_sector: "Transport", p1_tipo: "Airport",
      p_next: "Upcoming projects", view_p: "View project", back_p: "All projects",
      reto_t: "The challenge", sol_t: "The solution", imp_t: "The impact",
      t_grupo: "The group — ECPI", t_areas: "Areas of practice — ECPI", t_presencia: "International presence — ECPI",
      t_proyectos: "Projects — ECPI", t_compromiso: "Commitment — ECPI", t_contacto: "Contact — ECPI",
      hito_k: "History",
      hito1_t: "1968 — Foundation", hito1_p: "The group was founded in Madrid as a consulting engineering firm, in the years when the discipline was taking shape in Spain.",
      hito2_t: "Consolidation", hito2_p: "Decades of sustained work for public administrations, contractors and concession holders established the firm as an independent technical reference.",
      hito3_t: "American expansion", hito3_p: "The Euroconsult name crossed the Atlantic: the Peruvian and Colombian subsidiaries bring the same technical standard to the American markets.",
      a1_x: "Roads and railways, structures and bridges, hydraulic works and urban schemes.",
      a2_x: "Permanent site presence, laboratory testing and structural monitoring.",
      a3_x: "Technical due diligence, expert appraisals and independent reports for investment decisions.",
      a4_x: "Impact studies, environmental restoration and spatial planning.",
      a5_x: "Technical office, cost control and coordination of disciplines across the whole cycle.",
      sede1_p: "Technical direction and coordination of the group. Madrid sets the quality standards shared by every office.",
      sede2_p: "From Lima, Euroconsult América serves the markets of the South Pacific coast, with local teams backed by the parent company.",
      sede3_p: "Euroconsult Colombia operates from Bogotá for the Andean and Central American market, with the group's same technical standard.",
      pri1_t: "Rigour", pri1_p: "Every figure is measured, checked and signed. We do not deliver what we cannot stand behind.",
      pri2_t: "Coherence", pri2_p: "One technical standard across every office, discipline and scale of project.",
      pri3_t: "Permanence", pri3_p: "We accompany the whole life of the work: those who design with us know we will still be there.",
      ct_note: "We handle institutional enquiries in Spanish, English, French and Portuguese.",
      hero_kicker: "Euroconsult Proyectos de Ingeniería",
      hero_title: "Engineering that endures, projected into the future.",
      hero_sub: "ECPI is the parent company of an international engineering and consultancy group. We bring together disciplines, offices and teams under a single standard: technical precision and integrated services.",
      hero_cta: "Discover the group",
      s1_kicker: "The group", s1_title: "One parent company, one way of understanding engineering.",
      s1_p1: "Euroconsult Proyectos de Ingeniería was founded in Madrid in 1968, when Spanish consulting engineering was beginning to define itself as a discipline in its own right. Since then, the group has accompanied the planning, design and service life of transport, building and civil infrastructure, in Spain and abroad.",
      s1_p2: "Ours is the position of the independent engineer: we advise those who decide, supervise those who build and verify what is delivered. That independence, sustained for more than five decades, is the basis of the trust that public administrations, contractors, concession holders and multilateral organisations place in the group.",
      s1_p3: "ECPI brings engineering, laboratory testing, structural monitoring and operations consultancy under a single technical direction. Integration is not a catalogue: it is the ability to answer for a work from the first study to the last monitoring data point.",
      mis_t: "Mission",
      mis_p: "To provide technical certainty to those who plan, build and manage infrastructure, through rigorous, independent and integrated engineering services.",
      vis_t: "Vision",
      vis_p: "To consolidate our position as a reference engineering consultancy group between Europe and the Americas, recognised for the precision of our work and the permanence of our commitments.",
      s2_kicker: "Areas of practice", s2_title: "Disciplines integrated under a single technical standard.",
      a1_t: "Civil engineering and infrastructure",
      a1_p: "Design and studies for roads, structures, hydraulic works and transport, from planning through to detailed design.",
      a2_t: "Site supervision and works control",
      a2_p: "Technical assistance, monitoring and quality control during construction, ensuring the built work matches the design.",
      a3_t: "Technical consultancy",
      a3_p: "Feasibility studies, technical audits and independent advice to public authorities and developers.",
      a4_t: "Environment and land planning",
      a4_p: "Environmental assessment, spatial planning and the integration of infrastructure into its surroundings.",
      a5_t: "Integrated project management",
      a5_p: "Planning, coordination of disciplines and control of schedule and cost across the project life cycle.",
      s3_kicker: "International presence", s3_title: "One group, three offices, two continents.",
      s3_p: "The group's brand architecture projects a cohesive global image: each office keeps its regional identity under the shared endorsement of ECPI.",
      lbl_matriz: "Parent company", lbl_filial: "Subsidiary", lbl_filial2: "Subsidiary",
      hq_city: "Madrid, Spain", f1_city: "Lima, Peru", f2_city: "Bogotá, Colombia",
      hq_city2: "Madrid, Spain", f1_city2: "Lima, Peru", f2_city2: "Bogotá, Colombia",
      f1_city3: "Lima, Peru", f2_city3: "Bogotá, Colombia",
      st1: "Offices", st2: "Continents", st3: "Areas of practice",
      s4_kicker: "Commitment", s4_title: "Six sides, a single figure.",
      s4_p1: "The ECPI hexagonal monogram is not an ornament: it stands for technical precision and the integration of services. As in a hexagon, each side — each discipline, each office, each team — supports the others and shapes an exact whole.",
      s4_p2: "That is how we work: rigour in the detail, coherence in the whole, and a single technical voice on every project.",
      quote: "Precision is a form of respect: for the work, for the territory, and for those who place their trust in us.",
      s5_kicker: "Contact", s5_title: "Institutional contact",
      s5_p: "For institutional enquiries, partnerships and investor relations:",
      footer_fil: "Group subsidiaries",
      footer_legal: "© 2026 Euroconsult Proyectos de Ingeniería. All rights reserved."
    },
    fr: {
      meta_title: "ECPI — Euroconsult Proyectos de Ingeniería | Groupe d'ingénierie",
      meta_desc: "ECPI est la maison mère d'un groupe international de conseil en ingénierie implanté en Espagne, au Pérou et en Colombie. Précision technique et intégration des services.",
      skip: "Aller au contenu", aria_nav: "Navigation principale", aria_lang: "Choix de la langue",
      nav1: "Le groupe", nav2: "Domaines", nav3: "Présence", navp: "Projets", nav4: "Engagement", nav5: "Contact",
      aria_proj: "Projets du groupe",
      sp_kicker: "Projets", sp_title: "Chaque ouvrage explique le défi, la solution et l'impact.",
      p1_kicker: "Projet phare / Infrastructure aéroportuaire",
      p1_t: "Tour de contrôle — Aéroport Guillermo León Valencia",
      p1_alt: "Tour de contrôle de l'aéroport Guillermo León Valencia, Popayán",
      lbl_ubi: "Localisation", lbl_sector: "Secteur", lbl_tipo: "Typologie",
      p1_ubi: "Popayán, Cauca", p1_sector: "Transport", p1_tipo: "Aéroportuaire",
      p_next: "Prochains projets", view_p: "Voir le projet", back_p: "Tous les projets",
      reto_t: "Le défi", sol_t: "La solution", imp_t: "L'impact",
      t_grupo: "Le groupe — ECPI", t_areas: "Domaines d'intervention — ECPI", t_presencia: "Présence internationale — ECPI",
      t_proyectos: "Projets — ECPI", t_compromiso: "Engagement — ECPI", t_contacto: "Contact — ECPI",
      hito_k: "Trajectoire",
      hito1_t: "1968 — Fondation", hito1_p: "Le groupe naît à Madrid comme société d'ingénierie de conseil, au moment où la discipline prenait forme en Espagne.",
      hito2_t: "Consolidation", hito2_p: "Des décennies de travail continu pour les administrations publiques, les constructeurs et les concessionnaires font de la société une référence technique indépendante.",
      hito3_t: "Expansion américaine", hito3_p: "La marque Euroconsult traverse l'Atlantique : les filiales du Pérou et de Colombie portent la même exigence technique sur les marchés américains.",
      a1_x: "Routes et chemins de fer, structures et ponts, ouvrages hydrauliques et aménagements urbains.",
      a2_x: "Présence permanente sur chantier, essais en laboratoire et auscultation des structures.",
      a3_x: "Due diligence technique, expertises et rapports indépendants pour les décisions d'investissement.",
      a4_x: "Études d'impact, restauration des milieux et planification territoriale.",
      a5_x: "Bureau d'études, contrôle économique et coordination des disciplines sur tout le cycle.",
      sede1_p: "Direction technique et coordination du groupe. Madrid établit les critères de qualité communs à toutes les implantations.",
      sede2_p: "Depuis Lima, Euroconsult América dessert les marchés de la côte du Pacifique sud, avec des équipes locales et l'appui de la maison mère.",
      sede3_p: "Euroconsult Colombia opère depuis Bogota pour le marché andin et centraméricain, avec la même exigence technique du groupe.",
      pri1_t: "Rigueur", pri1_p: "Chaque donnée est mesurée, contrastée et signée. Nous ne livrons pas ce que nous ne pouvons pas défendre.",
      pri2_t: "Cohérence", pri2_p: "Un même critère technique dans toutes les implantations, disciplines et échelles de projet.",
      pri3_t: "Permanence", pri3_p: "Nous accompagnons la vie entière de l'ouvrage : qui conçoit avec nous sait que nous serons toujours là.",
      ct_note: "Nous traitons les demandes institutionnelles en espagnol, anglais, français et portugais.",
      hero_kicker: "Euroconsult Proyectos de Ingeniería",
      hero_title: "La solidité de l'ingénierie, tournée vers l'avenir.",
      hero_sub: "ECPI est la maison mère d'un groupe international de conseil et d'ingénierie. Nous réunissons disciplines, implantations et équipes autour d'une même exigence : la précision technique et l'intégration des services.",
      hero_cta: "Découvrir le groupe",
      s1_kicker: "Le groupe", s1_title: "Une maison mère, une même conception de l'ingénierie.",
      s1_p1: "Euroconsult Proyectos de Ingeniería naît à Madrid en 1968, alors que l'ingénierie de conseil espagnole commençait à s'affirmer comme une discipline à part entière. Depuis, le groupe accompagne la planification, la conception et la vie utile d'infrastructures de transport, de bâtiment et de génie civil, en Espagne et à l'étranger.",
      s1_p2: "Notre position est celle du technicien indépendant : nous conseillons ceux qui décident, supervisons ceux qui construisent et vérifions ce qui est livré. Cette indépendance, maintenue pendant plus de cinq décennies, fonde la confiance que les administrations publiques, les entreprises de construction, les concessionnaires et les organismes multilatéraux accordent au groupe.",
      s1_p3: "ECPI intègre sous une même direction technique l'ingénierie, le laboratoire, l'auscultation et le conseil en exploitation. L'intégration n'est pas un catalogue : c'est la capacité de répondre d'un ouvrage depuis la première étude jusqu'à la dernière donnée de surveillance.",
      mis_t: "Mission",
      mis_p: "Apporter de la certitude technique à ceux qui planifient, construisent et exploitent les infrastructures, grâce à des services d'ingénierie rigoureux, indépendants et intégrés.",
      vis_t: "Vision",
      vis_p: "Devenir le groupe de conseil en ingénierie de référence entre l'Europe et l'Amérique, reconnu pour la précision de son travail et la constance de ses engagements.",
      s2_kicker: "Domaines d'intervention", s2_title: "Des disciplines intégrées sous une même exigence technique.",
      a1_t: "Génie civil et infrastructures",
      a1_p: "Études et projets de routes, d'ouvrages d'art, d'hydraulique et de transport, de la planification à la conception détaillée.",
      a2_t: "Supervision et contrôle de travaux",
      a2_p: "Assistance technique, suivi et contrôle qualité pendant l'exécution, pour garantir la conformité de l'ouvrage au projet.",
      a3_t: "Conseil technique",
      a3_p: "Études de faisabilité, audits techniques et conseil indépendant auprès des administrations et des maîtres d'ouvrage.",
      a4_t: "Environnement et territoire",
      a4_p: "Évaluation environnementale, aménagement du territoire et intégration des infrastructures dans leur environnement.",
      a5_t: "Gestion intégrée de projets",
      a5_p: "Planification, coordination des disciplines et maîtrise des délais et des coûts tout au long du cycle de vie du projet.",
      s3_kicker: "Présence internationale", s3_title: "Un groupe, trois sièges, deux continents.",
      s3_p: "L'architecture de marque du groupe projette une image globale cohérente : chaque siège conserve son identité régionale sous la caution commune d'ECPI.",
      lbl_matriz: "Maison mère", lbl_filial: "Filiale", lbl_filial2: "Filiale",
      hq_city: "Madrid, Espagne", f1_city: "Lima, Pérou", f2_city: "Bogota, Colombie",
      hq_city2: "Madrid, Espagne", f1_city2: "Lima, Pérou", f2_city2: "Bogota, Colombie",
      f1_city3: "Lima, Pérou", f2_city3: "Bogota, Colombie",
      st1: "Sièges", st2: "Continents", st3: "Domaines d'intervention",
      s4_kicker: "Engagement", s4_title: "Six côtés, une seule figure.",
      s4_p1: "Le monogramme hexagonal d'ECPI n'est pas un ornement : il symbolise la précision technique et l'intégration des services. Comme dans un hexagone, chaque côté — chaque discipline, chaque siège, chaque équipe — soutient les autres et dessine un ensemble exact.",
      s4_p2: "C'est notre manière de travailler : la rigueur dans le détail, la cohérence dans l'ensemble et une seule voix technique sur chaque projet.",
      quote: "La précision est une forme de respect : envers l'ouvrage, envers le territoire et envers ceux qui nous font confiance.",
      s5_kicker: "Contact", s5_title: "Contact institutionnel",
      s5_p: "Pour toute demande institutionnelle, alliance ou relation investisseurs :",
      footer_fil: "Filiales du groupe",
      footer_legal: "© 2026 Euroconsult Proyectos de Ingeniería. Tous droits réservés."
    },
    pt: {
      meta_title: "ECPI — Euroconsult Proyectos de Ingeniería | Grupo de engenharia",
      meta_desc: "A ECPI é a matriz de um grupo internacional de consultoria de engenharia com sedes em Espanha, no Peru e na Colômbia. Precisão técnica e integração de serviços.",
      skip: "Ir para o conteúdo", aria_nav: "Navegação principal", aria_lang: "Seleção de idioma",
      nav1: "O grupo", nav2: "Áreas de atuação", nav3: "Presença", navp: "Projetos", nav4: "Compromisso", nav5: "Contacto",
      aria_proj: "Projetos do grupo",
      sp_kicker: "Projetos", sp_title: "Cada obra explica o desafio, a solução e o impacto.",
      p1_kicker: "Projeto em destaque / Infraestrutura aeroportuária",
      p1_t: "Torre de Controlo — Aeroporto Guillermo León Valencia",
      p1_alt: "Torre de controlo do Aeroporto Guillermo León Valencia, Popayán",
      lbl_ubi: "Localização", lbl_sector: "Setor", lbl_tipo: "Tipologia",
      p1_ubi: "Popayán, Cauca", p1_sector: "Transportes", p1_tipo: "Aeroportuária",
      p_next: "Próximos projetos", view_p: "Ver projeto", back_p: "Todos os projetos",
      reto_t: "O desafio", sol_t: "A solução", imp_t: "O impacto",
      t_grupo: "O grupo — ECPI", t_areas: "Áreas de atuação — ECPI", t_presencia: "Presença internacional — ECPI",
      t_proyectos: "Projetos — ECPI", t_compromiso: "Compromisso — ECPI", t_contacto: "Contacto — ECPI",
      hito_k: "Trajetória",
      hito1_t: "1968 — Fundação", hito1_p: "O grupo nasce em Madrid como empresa de engenharia de consultoria, nos anos em que a disciplina se afirmava em Espanha.",
      hito2_t: "Consolidação", hito2_p: "Décadas de trabalho continuado para administrações públicas, construtoras e concessionárias consolidam a empresa como referência técnica independente.",
      hito3_t: "Expansão americana", hito3_p: "A marca Euroconsult atravessa o Atlântico: as filiais do Peru e da Colômbia levam o mesmo critério técnico aos mercados americanos.",
      a1_x: "Estradas e ferrovias, estruturas e pontes, obras hidráulicas e intervenções urbanas.",
      a2_x: "Presença permanente em obra, ensaios de laboratório e auscultação de estruturas.",
      a3_x: "Due diligence técnica, peritagens e relatórios independentes para decisões de investimento.",
      a4_x: "Estudos de impacte, recuperação de envolventes e planeamento territorial.",
      a5_x: "Gabinete técnico, controlo económico e coordenação de disciplinas em todo o ciclo.",
      sede1_p: "Direção técnica e coordenação do grupo. De Madrid definem-se os critérios de qualidade comuns a todas as sedes.",
      sede2_p: "A partir de Lima, a Euroconsult América serve os mercados da costa do Pacífico sul, com equipas locais e o respaldo da matriz.",
      sede3_p: "A Euroconsult Colombia opera a partir de Bogotá para o mercado andino e centro-americano, com a mesma exigência técnica do grupo.",
      pri1_t: "Rigor", pri1_p: "Cada dado é medido, contrastado e assinado. Não entregamos o que não podemos defender.",
      pri2_t: "Coerência", pri2_p: "Um mesmo critério técnico em todas as sedes, disciplinas e escalas de projeto.",
      pri3_t: "Permanência", pri3_p: "Acompanhamos a vida completa da obra: quem projeta connosco sabe que continuaremos lá.",
      ct_note: "Atendemos consultas institucionais em espanhol, inglês, francês e português.",
      hero_kicker: "Euroconsult Proyectos de Ingeniería",
      hero_title: "A solidez da engenharia, projetada para o futuro.",
      hero_sub: "A ECPI é a matriz de um grupo internacional de consultoria e engenharia. Reunimos disciplinas, sedes e equipas sob um mesmo critério: precisão técnica e integração de serviços.",
      hero_cta: "Conhecer o grupo",
      s1_kicker: "O grupo", s1_title: "Uma matriz, uma forma de entender a engenharia.",
      s1_p1: "A Euroconsult Proyectos de Ingeniería nasce em Madrid em 1968, quando a engenharia de consulta espanhola começava a definir-se como disciplina própria. Desde então, o grupo tem acompanhado o planeamento, o projeto e a vida útil de infraestruturas de transportes, edificação e obra civil, dentro e fora de Espanha.",
      s1_p2: "A nossa posição é a do técnico independente: aconselhamos quem decide, fiscalizamos quem constrói e verificamos o que se entrega. Essa independência, sustentada durante mais de cinco décadas, é a base da confiança que administrações públicas, construtoras, concessionárias e organismos multilaterais depositam no grupo.",
      s1_p3: "A ECPI integra, sob uma mesma direção técnica, engenharia, laboratório, auscultação e consultoria de operação. A integração não é um catálogo: é a capacidade de responder por uma obra desde o primeiro estudo até ao último dado de monitorização.",
      mis_t: "Missão",
      mis_p: "Proporcionar certeza técnica a quem planeia, constrói e gere infraestruturas, através de serviços de engenharia rigorosos, independentes e integrados.",
      vis_t: "Visão",
      vis_p: "Consolidar-nos como grupo de referência em consultoria de engenharia entre a Europa e a América, reconhecidos pela precisão do nosso trabalho e pela permanência dos nossos compromissos.",
      s2_kicker: "Áreas de atuação", s2_title: "Disciplinas integradas num mesmo critério técnico.",
      a1_t: "Engenharia civil e infraestruturas",
      a1_p: "Projetos e estudos de estradas, estruturas, obras hidráulicas e transportes, do planeamento ao projeto de execução.",
      a2_t: "Fiscalização e controlo de obra",
      a2_p: "Assistência técnica, acompanhamento e controlo de qualidade durante a execução, garantindo que o construído corresponde ao projetado.",
      a3_t: "Consultoria técnica",
      a3_p: "Estudos de viabilidade, auditorias técnicas e aconselhamento independente a administrações e promotores.",
      a4_t: "Ambiente e território",
      a4_p: "Avaliação ambiental, ordenamento do território e integração das infraestruturas na sua envolvente.",
      a5_t: "Gestão integral de projetos",
      a5_p: "Planeamento, coordenação de disciplinas e controlo de prazos e custos ao longo do ciclo de vida do projeto.",
      s3_kicker: "Presença internacional", s3_title: "Um grupo, três sedes, dois continentes.",
      s3_p: "A arquitetura de marca do grupo projeta uma imagem global coesa: cada sede mantém a sua identidade regional sob o respaldo comum da ECPI.",
      lbl_matriz: "Matriz", lbl_filial: "Filial", lbl_filial2: "Filial",
      hq_city: "Madrid, Espanha", f1_city: "Lima, Peru", f2_city: "Bogotá, Colômbia",
      hq_city2: "Madrid, Espanha", f1_city2: "Lima, Peru", f2_city2: "Bogotá, Colômbia",
      f1_city3: "Lima, Peru", f2_city3: "Bogotá, Colômbia",
      st1: "Sedes", st2: "Continentes", st3: "Áreas de atuação",
      s4_kicker: "Compromisso", s4_title: "Seis lados, uma única figura.",
      s4_p1: "O monograma hexagonal da ECPI não é um ornamento: simboliza a precisão técnica e a integração de serviços. Como num hexágono, cada lado — cada disciplina, cada sede, cada equipa — sustenta os restantes e dá forma a um conjunto exato.",
      s4_p2: "É assim que trabalhamos: rigor no detalhe, coerência no conjunto e uma única voz técnica em cada projeto.",
      quote: "A precisão é uma forma de respeito: pela obra, pelo território e por quem confia em nós.",
      s5_kicker: "Contacto", s5_title: "Contacto institucional",
      s5_p: "Para consultas institucionais, alianças e relações com investidores:",
      footer_fil: "Filiais do grupo",
      footer_legal: "© 2026 Euroconsult Proyectos de Ingeniería. Todos os direitos reservados."
    }
  };

  function apply(lang) {
    var d = dicts[lang] || dicts.es;
    document.documentElement.lang = lang;
    // Las páginas interiores declaran su título con <body data-title-key="...">
    var tk = document.body ? document.body.getAttribute('data-title-key') : null;
    document.title = (tk && d[tk]) ? d[tk] : d.meta_title;
    var m = document.querySelector('meta[name="description"]');
    if (!m) { m = document.createElement('meta'); m.setAttribute('name', 'description'); document.head.appendChild(m); }
    m.setAttribute('content', d.meta_desc);
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (d[k] != null) el.textContent = d[k];
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-aria');
      if (d[k]) el.setAttribute('aria-label', d[k]);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-alt');
      if (d[k]) el.setAttribute('alt', d[k]);
    });
    document.querySelectorAll('.langbtn').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang));
    });
    try { localStorage.setItem('ecpi-lang', lang); } catch (e) {}
    window.ECPI_LANG = lang;
    // Aviso para scripts de página (proyectos.html, proyecto.html) que generan contenido
    try { document.dispatchEvent(new CustomEvent('ecpi:lang', { detail: { lang: lang, dict: d } })); } catch (e) {}
  }

  function init() {
    document.querySelectorAll('.langbtn').forEach(function (b) {
      b.addEventListener('click', function () { apply(b.getAttribute('data-lang')); });
    });
    var saved = 'es';
    try { saved = localStorage.getItem('ecpi-lang') || 'es'; } catch (e) {}
    if (!dicts[saved]) saved = 'es';
    apply(saved);

    // Entradas discretas (una sola vez), respetando prefers-reduced-motion
    document.body.classList.add('js-anim');
    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !('IntersectionObserver' in window)) {
      document.querySelectorAll('.rv').forEach(function (el) { el.classList.add('on'); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); }
        });
      }, { threshold: 0.12 });
      document.querySelectorAll('.rv').forEach(function (el) { io.observe(el); });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
