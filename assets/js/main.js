/* EC Proyectos de Ingeniería — Sitio institucional
   Cambio de idioma (ES/EN/FR/PT) y entradas discretas al hacer scroll. */
(function () {
  'use strict';

  var dicts = {
    es: {
      meta_title: "EC Proyectos de Ingeniería",
      meta_desc: "EC Proyectos de Ingeniería nace en 2024 para dar continuidad a las dos unidades productivas más importantes de Grupo Euroconsult. Más de 50 años de experiencia, con sedes en España, Perú y Colombia.",
      skip: "Ir al contenido", aria_nav: "Navegación principal", aria_lang: "Selección de idioma",
      nav1: "El grupo", nav2: "Áreas de negocio", nav3: "Presencia", navp: "Proyectos", nav4: "Compromiso", nav5: "Contacto",
      aria_proj: "Proyectos del grupo", aria_prev: "Proyecto anterior", aria_next: "Proyecto siguiente",
      sp_kicker: "Proyectos", sp_title: "Cada obra explica el reto, la solución y el impacto.",
      p1_kicker: "Proyecto destacado / Infraestructura aeroportuaria",
      p1_t: "Torre de Control — Aeropuerto Guillermo León Valencia",
      p1_alt: "Torre de control del Aeropuerto Guillermo León Valencia, Popayán",
      lbl_ubi: "Ubicación", lbl_sector: "Sector", lbl_tipo: "Tipología",
      p1_ubi: "Popayán, Cauca", p1_sector: "Transporte", p1_tipo: "Aeroportuaria",
      p_next: "Próximos proyectos", view_p: "Ver proyecto", back_p: "Todos los proyectos",
      reto_t: "El reto", sol_t: "La solución", imp_t: "El impacto",
      t_grupo: "El grupo — EC Proyectos de Ingeniería", t_areas: "Áreas de negocio — EC Proyectos de Ingeniería", t_presencia: "Presencia internacional — EC Proyectos de Ingeniería",
      t_proyectos: "Proyectos — EC Proyectos de Ingeniería", t_compromiso: "Compromiso — EC Proyectos de Ingeniería", t_contacto: "Contacto — EC Proyectos de Ingeniería",
      hito_k: "Trayectoria",
      hito1_t: "1968 — Grupo Euroconsult", hito1_p: "Nace en Madrid la compañía histórica de la ingeniería española de cuyas actividades procede hoy EC Proyectos de Ingeniería.",
      hito2_t: "Más de cinco décadas", hito2_p: "Las actividades hoy integradas en la compañía participan en numerosos proyectos para administraciones públicas, empresas y grandes infraestructuras.",
      hito3_t: "Presencia en América", hito3_p: "Las sedes de Lima y Bogotá extienden la actividad del grupo a los mercados andino y centroamericano.",
      a1_x: "Carreteras y ferrocarriles, estructuras y puentes, obras hidráulicas y actuaciones urbanas.",
      a2_x: "Presencia permanente en obra, ensayos de laboratorio y auscultación de estructuras.",
      a3_x: "Due diligence técnica, peritajes e informes independientes para decisiones de inversión.",
      a4_x: "Estudios de impacto, restauración de entornos y planificación territorial.",
      a5_x: "Oficina técnica, control económico y coordinación de disciplinas en todo el ciclo.",
      sede1_p: "Dirección técnica y coordinación del grupo. Desde Madrid se establecen los criterios de calidad comunes a todas las sedes.",
      sede2_p: "Euroconsult América atiende desde Lima los mercados de la costa del Pacífico sur, con equipos locales y respaldo de la matriz.",
      sede3_p: "Euroconsult Colombia opera desde Bogotá para el mercado andino y centroamericano, con la misma exigencia técnica del grupo.",
      pri1_t: "Experiencia", pri1_p: "Aplicamos el conocimiento acumulado durante décadas a cada nuevo proyecto.",
      pri2_t: "Rigor técnico", pri2_p: "La calidad y la excelencia técnica constituyen la base de nuestro trabajo.",
      pri3_t: "Innovación", pri3_p: "Incorporamos nuevas tecnologías, metodologías y herramientas que mejoran la eficiencia y la calidad de nuestros servicios.",
      ct_note: "Atendemos consultas institucionales en español, inglés, francés y portugués.",
      more1: "Historia y organización del grupo", more2: "Las áreas en detalle", more3: "Conocer nuestras sedes",
      morep: "Todos los proyectos", more4: "Nuestra forma de trabajar", more5: "Página de contacto",
      f_quienes: "Quiénes somos", f_mision: "Misión y visión", f_hacemos: "Qué hacemos", f_inicio: "Inicio",
      hq_city3: "Madrid, España",
      nav_cv: "Trabaja con nosotros", t_trabaja: "Trabaja con nosotros — EC Proyectos de Ingeniería", tj_kicker: "Talento",
      tj_p: "Buscamos ingenieros y técnicos que entiendan la precisión como una forma de respeto. Cuéntanos quién eres y adjunta tu currículum.",
      fm_nombre: "Nombre completo", fm_email: "Correo electrónico", fm_tel: "Teléfono (opcional)", fm_area: "Área de interés",
      fm_msg: "Mensaje / carta de presentación", fm_cv: "Currículum (PDF)", fm_send: "Enviar candidatura",
      fm_note: "Al enviar se abrirá tu aplicación de correo con los datos ya redactados; adjunta allí tu currículum antes de enviarlo a rrhh@ecpi.es.",
      f_legal: "Aviso legal y privacidad", t_legal: "Aviso legal y privacidad — EC Proyectos de Ingeniería",
      hero_kicker: "EC Proyectos de Ingeniería",
      hero_title: "Una nueva etapa respaldada por más de <span class='hl'>50 años</span> de experiencia",
      hero_sub: "Nacemos en 2024 para dar continuidad a las dos unidades productivas más importantes de <span class='hl-b'>Grupo Euroconsult</span>.",
      hero_cta: "Conocer el grupo",
      s1_kicker: "El grupo", s1_title: "Experiencia que permanece. Ingeniería que evoluciona.",
      s1_p1: "Nuestra historia está ligada a una larga trayectoria en el sector de la ingeniería y la consultoría técnica.",
      s1_p2: "Durante más de cinco décadas, las actividades hoy integradas en EC Proyectos de Ingeniería han participado en el desarrollo de numerosos proyectos, acumulando experiencia, conocimiento especializado y una profunda comprensión de las necesidades de administraciones públicas, empresas y grandes infraestructuras.",
      s1_p3: "En 2024 comienza una nueva etapa. La adquisición de dos unidades productivas procedentes de Euroconsult permite preservar y potenciar ese conocimiento dentro de una compañía renovada, creada con una clara orientación hacia la innovación, la excelencia técnica y el servicio al cliente.",
      mis_t: "Misión",
      mis_p: "Aportar certeza técnica a quienes planifican, construyen y gestionan infraestructuras, mediante servicios de ingeniería rigurosos, independientes e integrados.",
      vis_t: "Visión",
      vis_p: "Consolidarnos como grupo de referencia en consultoría de ingeniería entre Europa y América, reconocidos por la precisión de nuestro trabajo y la permanencia de nuestros compromisos.",
      s2_kicker: "Áreas de negocio", s2_title: "Los sectores donde el grupo aporta su criterio técnico.",
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
      s3_p: "La arquitectura de marca del grupo proyecta una imagen global cohesiva: cada sede conserva su identidad regional bajo el respaldo común de EC Proyectos de Ingeniería.",
      lbl_matriz: "Matriz", lbl_filial: "Filial", lbl_filial2: "Filial",
      hq_city: "Madrid, España", f1_city: "Lima, Perú", f2_city: "Bogotá, Colombia",
      hq_city2: "Madrid, España", f1_city2: "Lima, Perú", f2_city2: "Bogotá, Colombia",
      f1_city3: "Lima, Perú", f2_city3: "Bogotá, Colombia",
      map_link: "Ver en Google Maps",
      aria_menu: "Menú",
      an_intro: "Trabajamos sobre la infraestructura que sostiene la actividad de un territorio, desde los estudios previos hasta la puesta en servicio.",
      an_cta: "¿Tu proyecto encaja en alguna de estas áreas?",
      an1_t: "Transportes", an1_p: "Carreteras y ferrocarriles con sus estructuras: trazado, puentes y viaductos, y la conservación de la infraestructura ya en servicio.",
      an2_t: "Aeropuertos", an2_p: "Infraestructura aeroportuaria: campos de vuelo, plataformas y la edificación asociada, con la dirección técnica de la obra.",
      an3_t: "Puertos y costas", an3_p: "Obra marítima y protección del litoral: muelles, diques y dragados, con los estudios de dinámica litoral que los sostienen.",
      an4_t: "Aguas", an4_p: "Ciclo integral del agua: regulación y presas, abastecimiento y saneamiento, y obras de defensa frente a avenidas.",
      an5_t: "Edificación", an5_p: "Edificación pública y singular: equipamientos, rehabilitación y las instalaciones que los acompañan.",
      cli_kicker: "Clientes", cli_title: "Administraciones y entidades públicas que confían en el grupo.",
      org_kicker: "Estructura del grupo", org_title: "Una matriz en España y dos subsidiarias en América.", org_matriz: "Matriz del grupo",
      org_sub1: "Subsidiaria · Perú", org_sub2: "Subsidiaria · Colombia", org_legend: "Relación de propiedad",
      st1: "Sedes", st2: "Continentes", st3: "Áreas de actuación",
      s4_kicker: "Compromiso", s4_title: "Seis lados, una sola figura.",
      s4_p1: "El monograma hexagonal de EC Proyectos de Ingeniería no es un adorno: simboliza la precisión técnica y la integración de servicios. Como en un hexágono, cada lado —cada disciplina, cada sede, cada equipo— sostiene a los demás y da forma a un conjunto exacto.",
      s4_p2: "Esa es nuestra forma de trabajar: rigor en el detalle, coherencia en el conjunto y una sola voz técnica ante cada proyecto.",
      quote: "La precisión es una forma de respeto: por la obra, por el territorio y por quienes confían en nosotros.",
      s5_kicker: "Contacto", s5_title: "Contacto institucional",
      s5_p: "Para consultas institucionales, alianzas y relaciones con inversores:",
      footer_fil: "Filiales del grupo",
      footer_legal: "© 2026 EC Proyectos de Ingeniería. Todos los derechos reservados.",
      // Página «Hablemos de tu proyecto»
      nav_cta: "Hablemos de tu proyecto",
      t_hablemos: "Hablemos de tu proyecto — EC Proyectos de Ingeniería",
      hb_kicker: "Nuevo proyecto",
      hb_p: "Cuéntanos en qué estás trabajando: el alcance, la fase en la que se encuentra y los plazos que manejas. Revisaremos tu consulta y te responderemos con una primera valoración técnica.",
      fh_empresa: "Empresa u organización",
      fh_tipo: "Tipo de proyecto",
      fh_ubi: "Ubicación (opcional)",
      fh_msg: "Cuéntanos sobre el proyecto",
      fh_send: "Enviar consulta",
      fh_note: "Al enviar se abrirá tu aplicación de correo con los datos ya redactados; revísalos antes de enviarlos a info@ecpi.es.",
      sg_title: "Somos una empresa nueva, pero no partimos de cero.",
      sg_p1: "EC Proyectos de Ingeniería nace en 2024 como un nuevo proyecto empresarial creado para adquirir y dar continuidad a las dos unidades productivas más importantes de Grupo Euroconsult, compañía histórica de la ingeniería española fundada en 1968.",
      sg_p2: "Décadas de experiencia en ingeniería nos respaldan: integramos el conocimiento técnico, las capacidades especializadas y los profesionales procedentes de esas actividades, y los combinamos con una estructura empresarial más ágil, eficiente y orientada al futuro.",
      pp_title: "Nuestro punto de partida",
      pp1_t: "+50 años de trayectoria",
      pp1_p: "Una experiencia construida durante décadas de actividad en el sector de la ingeniería.",
      pp2_t: "2 unidades productivas",
      pp2_p: "Integradas en EC Proyectos de Ingeniería desde su constitución en 2024.",
      pp3_t: "Un equipo especializado",
      pp3_p: "Profesionales con amplia experiencia y conocimiento técnico en sus respectivas áreas de actividad.",
      pp4_t: "Una nueva visión",
      pp4_p: "Una organización moderna, flexible y preparada para afrontar los nuevos retos de la ingeniería.",
      hito4_t: "2024 — Nueva etapa",
      hito4_p: "La adquisición de dos unidades productivas procedentes de Euroconsult da origen a EC Proyectos de Ingeniería.",
      cr_title: "Continuidad y renovación",
      cr_intro: "EC Proyectos de Ingeniería representa la unión de dos conceptos que definen nuestra forma de entender el futuro.",
      cr1_t: "Continuidad",
      cr1_p: "Conservamos el conocimiento, la experiencia, las capacidades técnicas y la especialización desarrollados durante décadas.",
      cr2_t: "Renovación",
      cr2_p: "Incorporamos una nueva estructura empresarial, nuevas herramientas, innovación tecnológica y una forma de trabajar más flexible y orientada al cliente.",
      cr_out: "El resultado es una compañía capaz de ofrecer la experiencia de una organización consolidada con la agilidad de un nuevo proyecto empresarial.",
      nc_title: "Una nueva compañía con una larga historia detrás",
      nc_p1: "2024 no representa nuestro punto de partida técnico. Representa el comienzo de una nueva etapa empresarial.",
      nc_p2: "Una etapa construida sobre más de medio siglo de experiencia y preparada para afrontar los retos de la ingeniería del futuro.",
      fi_title: "Nuestra forma de entender la ingeniería",
      fi_intro: "Trabajamos para aportar soluciones técnicas de alto valor añadido, basándonos en cinco principios.",
      pri4_t: "Proximidad",
      pri4_p: "Trabajamos junto a nuestros clientes, entendiendo sus necesidades y acompañándolos durante todo el desarrollo de los proyectos.",
      pri5_t: "Compromiso",
      pri5_p: "Asumimos cada proyecto con responsabilidad, buscando soluciones fiables, eficientes y sostenibles.",
      claim_k: "EC Proyectos de Ingeniería",
      claim_t: "Más de 50 años de experiencia para construir los próximos 50."
    },
    en: {
      meta_title: "EC Proyectos de Ingeniería | Engineering company",
      meta_desc: "EC Proyectos de Ingeniería was founded in 2024 to carry forward the two most important production units of Grupo Euroconsult. More than 50 years of experience, with offices in Spain, Peru and Colombia.",
      skip: "Skip to content", aria_nav: "Main navigation", aria_lang: "Language selection",
      nav1: "The group", nav2: "Business areas", nav3: "Presence", navp: "Projects", nav4: "Commitment", nav5: "Contact",
      aria_proj: "Group projects", aria_prev: "Previous project", aria_next: "Next project",
      sp_kicker: "Projects", sp_title: "Every work explains the challenge, the solution and the impact.",
      p1_kicker: "Featured project / Airport infrastructure",
      p1_t: "Control Tower — Guillermo León Valencia Airport",
      p1_alt: "Control tower at Guillermo León Valencia Airport, Popayán",
      lbl_ubi: "Location", lbl_sector: "Sector", lbl_tipo: "Typology",
      p1_ubi: "Popayán, Cauca", p1_sector: "Transport", p1_tipo: "Airport",
      p_next: "Upcoming projects", view_p: "View project", back_p: "All projects",
      reto_t: "The challenge", sol_t: "The solution", imp_t: "The impact",
      t_grupo: "The group — EC Proyectos de Ingeniería", t_areas: "Business areas — EC Proyectos de Ingeniería", t_presencia: "International presence — EC Proyectos de Ingeniería",
      t_proyectos: "Projects — EC Proyectos de Ingeniería", t_compromiso: "Commitment — EC Proyectos de Ingeniería", t_contacto: "Contact — EC Proyectos de Ingeniería",
      hito_k: "History",
      hito1_t: "1968 — Grupo Euroconsult", hito1_p: "The landmark Spanish engineering firm from whose activities EC Proyectos de Ingeniería derives is founded in Madrid.",
      hito2_t: "More than five decades", hito2_p: "The activities now integrated into the company take part in numerous projects for public administrations, companies and major infrastructure.",
      hito3_t: "Presence in the Americas", hito3_p: "The Lima and Bogotá offices extend the group's activity to the Andean and Central American markets.",
      a1_x: "Roads and railways, structures and bridges, hydraulic works and urban schemes.",
      a2_x: "Permanent site presence, laboratory testing and structural monitoring.",
      a3_x: "Technical due diligence, expert appraisals and independent reports for investment decisions.",
      a4_x: "Impact studies, environmental restoration and spatial planning.",
      a5_x: "Technical office, cost control and coordination of disciplines across the whole cycle.",
      sede1_p: "Technical direction and coordination of the group. Madrid sets the quality standards shared by every office.",
      sede2_p: "From Lima, Euroconsult América serves the markets of the South Pacific coast, with local teams backed by the parent company.",
      sede3_p: "Euroconsult Colombia operates from Bogotá for the Andean and Central American market, with the group's same technical standard.",
      pri1_t: "Experience", pri1_p: "We apply the knowledge accumulated over decades to every new project.",
      pri2_t: "Technical rigour", pri2_p: "Quality and technical excellence are the foundation of our work.",
      pri3_t: "Innovation", pri3_p: "We adopt new technologies, methodologies and tools that improve the efficiency and quality of our services.",
      ct_note: "We handle institutional enquiries in Spanish, English, French and Portuguese.",
      more1: "History and organisation of the group", more2: "Our practice in detail", more3: "Our offices",
      morep: "All projects", more4: "How we work", more5: "Contact page",
      f_quienes: "Who we are", f_mision: "Mission and vision", f_hacemos: "What we do", f_inicio: "Home",
      hq_city3: "Madrid, Spain",
      nav_cv: "Work with us", t_trabaja: "Work with us — EC Proyectos de Ingeniería", tj_kicker: "Talent",
      tj_p: "We look for engineers and technicians who understand precision as a form of respect. Tell us who you are and attach your CV.",
      fm_nombre: "Full name", fm_email: "Email", fm_tel: "Phone (optional)", fm_area: "Area of interest",
      fm_msg: "Message / cover letter", fm_cv: "CV (PDF)", fm_send: "Send application",
      fm_note: "Submitting opens your email app with the details pre-filled; attach your CV there before sending it to rrhh@ecpi.es.",
      f_legal: "Legal notice & privacy", t_legal: "Legal notice & privacy — EC Proyectos de Ingeniería",
      hero_kicker: "EC Proyectos de Ingeniería",
      hero_title: "A new chapter backed by more than <span class='hl'>50 years</span> of experience",
      hero_sub: "Founded in 2024 to carry forward the two most important production units of <span class='hl-b'>Grupo Euroconsult</span>.",
      hero_cta: "Discover the group",
      s1_kicker: "The group", s1_title: "Experience that endures. Engineering that evolves.",
      s1_p1: "Our history is tied to a long track record in engineering and technical consultancy.",
      s1_p2: "For more than five decades, the activities now integrated into EC Proyectos de Ingeniería have taken part in the development of numerous projects, accumulating experience, specialised knowledge and a deep understanding of the needs of public administrations, companies and major infrastructure.",
      s1_p3: "A new chapter begins in 2024. The acquisition of two production units from Euroconsult makes it possible to preserve and strengthen that knowledge within a renewed company, created with a clear focus on innovation, technical excellence and client service.",
      mis_t: "Mission",
      mis_p: "To provide technical certainty to those who plan, build and manage infrastructure, through rigorous, independent and integrated engineering services.",
      vis_t: "Vision",
      vis_p: "To consolidate our position as a reference engineering consultancy group between Europe and the Americas, recognised for the precision of our work and the permanence of our commitments.",
      s2_kicker: "Business areas", s2_title: "The sectors where the group brings its technical judgement.",
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
      s3_p: "The group's brand architecture projects a cohesive global image: each office keeps its regional identity under the shared endorsement of EC Proyectos de Ingeniería.",
      lbl_matriz: "Parent company", lbl_filial: "Subsidiary", lbl_filial2: "Subsidiary",
      hq_city: "Madrid, Spain", f1_city: "Lima, Peru", f2_city: "Bogotá, Colombia",
      hq_city2: "Madrid, Spain", f1_city2: "Lima, Peru", f2_city2: "Bogotá, Colombia",
      f1_city3: "Lima, Peru", f2_city3: "Bogotá, Colombia",
      map_link: "View on Google Maps",
      aria_menu: "Menu",
      an_intro: "We work on the infrastructure that sustains a region, from preliminary studies through to commissioning.",
      an_cta: "Does your project fall within one of these areas?",
      an1_t: "Transport", an1_p: "Roads and railways with their structures: alignment, bridges and viaducts, and the upkeep of infrastructure already in service.",
      an2_t: "Airports", an2_p: "Airport infrastructure: airfields, aprons and associated buildings, with technical supervision of the works.",
      an3_t: "Ports and coasts", an3_p: "Marine works and coastal protection: quays, breakwaters and dredging, backed by coastal dynamics studies.",
      an4_t: "Water", an4_p: "The full water cycle: regulation and dams, supply and sanitation, and flood defence works.",
      an5_t: "Building", an5_p: "Public and landmark building: facilities, refurbishment and the services that go with them.",
      cli_kicker: "Clients", cli_title: "Public authorities and agencies that trust the group.",
      org_kicker: "Group structure", org_title: "One parent company in Spain and two subsidiaries in the Americas.", org_matriz: "Group parent company",
      org_sub1: "Subsidiary · Peru", org_sub2: "Subsidiary · Colombia", org_legend: "Ownership relationship",
      st1: "Offices", st2: "Continents", st3: "Areas of practice",
      s4_kicker: "Commitment", s4_title: "Six sides, a single figure.",
      s4_p1: "The EC Proyectos de Ingeniería hexagonal monogram is not an ornament: it stands for technical precision and the integration of services. As in a hexagon, each side — each discipline, each office, each team — supports the others and shapes an exact whole.",
      s4_p2: "That is how we work: rigour in the detail, coherence in the whole, and a single technical voice on every project.",
      quote: "Precision is a form of respect: for the work, for the territory, and for those who place their trust in us.",
      s5_kicker: "Contact", s5_title: "Institutional contact",
      s5_p: "For institutional enquiries, partnerships and investor relations:",
      footer_fil: "Group subsidiaries",
      footer_legal: "© 2026 EC Proyectos de Ingeniería. All rights reserved.",
      // Página «Hablemos de tu proyecto»
      nav_cta: "Let's talk about your project",
      t_hablemos: "Let's talk about your project — EC Proyectos de Ingeniería",
      hb_kicker: "New project",
      hb_p: "Tell us what you are working on: the scope, the stage it is at and the timescales you are working to. We will review your enquiry and reply with an initial technical assessment.",
      fh_empresa: "Company or organisation",
      fh_tipo: "Type of project",
      fh_ubi: "Location (optional)",
      fh_msg: "Tell us about the project",
      fh_send: "Send enquiry",
      fh_note: "On sending, your email application will open with the details already written; check them before sending to info@ecpi.es.",
      // Textos de la nueva etapa (2024). Las versiones EN/FR/PT las generó
      // Claude a partir del español: conviene que las revise un traductor.
      sg_title: "We are a new company, but we are not starting from scratch.",
      sg_p1: "EC Proyectos de Ingeniería was founded in 2024 as a new business venture created to acquire and carry forward the two most important production units of Grupo Euroconsult, a landmark firm in Spanish engineering founded in 1968.",
      sg_p2: "Decades of engineering experience stand behind us: we bring together the technical knowledge, the specialised capabilities and the professionals from those activities, and combine them with a more agile, efficient and forward-looking corporate structure.",
      pp_title: "Our starting point",
      pp1_t: "50+ years of track record",
      pp1_p: "Experience built over decades of activity in the engineering sector.",
      pp2_t: "2 production units",
      pp2_p: "Integrated into EC Proyectos de Ingeniería since its incorporation in 2024.",
      pp3_t: "A specialised team",
      pp3_p: "Professionals with extensive experience and technical knowledge in their respective fields.",
      pp4_t: "A new outlook",
      pp4_p: "A modern, flexible organisation prepared for the new challenges of engineering.",
      hito4_t: "2024 — A new chapter",
      hito4_p: "The acquisition of two production units from Euroconsult gives rise to EC Proyectos de Ingeniería.",
      cr_title: "Continuity and renewal",
      cr_intro: "EC Proyectos de Ingeniería represents the union of two ideas that define how we understand the future.",
      cr1_t: "Continuity",
      cr1_p: "We retain the knowledge, experience, technical capabilities and specialisation developed over decades.",
      cr2_t: "Renewal",
      cr2_p: "We bring in a new corporate structure, new tools, technological innovation and a more flexible, client-focused way of working.",
      cr_out: "The result is a company able to offer the experience of an established organisation with the agility of a new business venture.",
      nc_title: "A new company with a long history behind it",
      nc_p1: "2024 is not our technical starting point. It is the beginning of a new business chapter.",
      nc_p2: "A chapter built on more than half a century of experience and ready to face the challenges of the engineering of the future.",
      fi_title: "How we understand engineering",
      fi_intro: "We work to deliver high value-added technical solutions, based on five principles.",
      pri4_t: "Closeness",
      pri4_p: "We work alongside our clients, understanding their needs and supporting them throughout the development of their projects.",
      pri5_t: "Commitment",
      pri5_p: "We take on every project responsibly, seeking reliable, efficient and sustainable solutions.",
      claim_k: "EC Proyectos de Ingeniería",
      claim_t: "More than 50 years of experience to build the next 50."
    },
    fr: {
      meta_title: "EC Proyectos de Ingeniería | Groupe d'ingénierie",
      meta_desc: "EC Proyectos de Ingeniería naît en 2024 pour assurer la continuité des deux unités de production les plus importantes du Grupo Euroconsult. Plus de 50 ans d'expérience, avec des implantations en Espagne, au Pérou et en Colombie.",
      skip: "Aller au contenu", aria_nav: "Navigation principale", aria_lang: "Choix de la langue",
      nav1: "Le groupe", nav2: "Domaines d'activité", nav3: "Présence", navp: "Projets", nav4: "Engagement", nav5: "Contact",
      aria_proj: "Projets du groupe", aria_prev: "Projet précédent", aria_next: "Projet suivant",
      sp_kicker: "Projets", sp_title: "Chaque ouvrage explique le défi, la solution et l'impact.",
      p1_kicker: "Projet phare / Infrastructure aéroportuaire",
      p1_t: "Tour de contrôle — Aéroport Guillermo León Valencia",
      p1_alt: "Tour de contrôle de l'aéroport Guillermo León Valencia, Popayán",
      lbl_ubi: "Localisation", lbl_sector: "Secteur", lbl_tipo: "Typologie",
      p1_ubi: "Popayán, Cauca", p1_sector: "Transport", p1_tipo: "Aéroportuaire",
      p_next: "Prochains projets", view_p: "Voir le projet", back_p: "Tous les projets",
      reto_t: "Le défi", sol_t: "La solution", imp_t: "L'impact",
      t_grupo: "Le groupe — EC Proyectos de Ingeniería", t_areas: "Domaines d'activité — EC Proyectos de Ingeniería", t_presencia: "Présence internationale — EC Proyectos de Ingeniería",
      t_proyectos: "Projets — EC Proyectos de Ingeniería", t_compromiso: "Engagement — EC Proyectos de Ingeniería", t_contacto: "Contact — EC Proyectos de Ingeniería",
      hito_k: "Trajectoire",
      hito1_t: "1968 — Grupo Euroconsult", hito1_p: "Naît à Madrid la société historique de l'ingénierie espagnole dont proviennent les activités d'EC Proyectos de Ingeniería.",
      hito2_t: "Plus de cinq décennies", hito2_p: "Les activités aujourd'hui intégrées à la société participent à de nombreux projets pour des administrations publiques, des entreprises et de grandes infrastructures.",
      hito3_t: "Présence en Amérique", hito3_p: "Les implantations de Lima et de Bogotá étendent l'activité du groupe aux marchés andin et centraméricain.",
      a1_x: "Routes et chemins de fer, structures et ponts, ouvrages hydrauliques et aménagements urbains.",
      a2_x: "Présence permanente sur chantier, essais en laboratoire et auscultation des structures.",
      a3_x: "Due diligence technique, expertises et rapports indépendants pour les décisions d'investissement.",
      a4_x: "Études d'impact, restauration des milieux et planification territoriale.",
      a5_x: "Bureau d'études, contrôle économique et coordination des disciplines sur tout le cycle.",
      sede1_p: "Direction technique et coordination du groupe. Madrid établit les critères de qualité communs à toutes les implantations.",
      sede2_p: "Depuis Lima, Euroconsult América dessert les marchés de la côte du Pacifique sud, avec des équipes locales et l'appui de la maison mère.",
      sede3_p: "Euroconsult Colombia opère depuis Bogota pour le marché andin et centraméricain, avec la même exigence technique du groupe.",
      pri1_t: "Expérience", pri1_p: "Nous appliquons à chaque nouveau projet le savoir accumulé pendant des décennies.",
      pri2_t: "Rigueur technique", pri2_p: "La qualité et l'excellence technique constituent la base de notre travail.",
      pri3_t: "Innovation", pri3_p: "Nous intégrons de nouvelles technologies, méthodologies et outils qui améliorent l'efficacité et la qualité de nos services.",
      ct_note: "Nous traitons les demandes institutionnelles en espagnol, anglais, français et portugais.",
      more1: "Histoire et organisation du groupe", more2: "Nos domaines en détail", more3: "Nos implantations",
      morep: "Tous les projets", more4: "Notre façon de travailler", more5: "Page de contact",
      f_quienes: "Qui nous sommes", f_mision: "Mission et vision", f_hacemos: "Ce que nous faisons", f_inicio: "Accueil",
      hq_city3: "Madrid, Espagne",
      nav_cv: "Travaillez avec nous", t_trabaja: "Travaillez avec nous — EC Proyectos de Ingeniería", tj_kicker: "Talents",
      tj_p: "Nous recherchons des ingénieurs et des techniciens pour qui la précision est une forme de respect. Dites-nous qui vous êtes et joignez votre CV.",
      fm_nombre: "Nom complet", fm_email: "Adresse e-mail", fm_tel: "Téléphone (facultatif)", fm_area: "Domaine d'intérêt",
      fm_msg: "Message / lettre de motivation", fm_cv: "CV (PDF)", fm_send: "Envoyer la candidature",
      fm_note: "L'envoi ouvrira votre messagerie avec les informations préremplies ; joignez-y votre CV avant de l'envoyer à rrhh@ecpi.es.",
      f_legal: "Mentions légales et confidentialité", t_legal: "Mentions légales et confidentialité — EC Proyectos de Ingeniería",
      hero_kicker: "EC Proyectos de Ingeniería",
      hero_title: "Une nouvelle étape adossée à plus de <span class='hl'>50 ans</span> d'expérience",
      hero_sub: "Nous naissons en 2024 pour assurer la continuité des deux unités de production les plus importantes du <span class='hl-b'>Grupo Euroconsult</span>.",
      hero_cta: "Découvrir le groupe",
      s1_kicker: "Le groupe", s1_title: "L'expérience qui demeure. L'ingénierie qui évolue.",
      s1_p1: "Notre histoire est liée à un long parcours dans le secteur de l'ingénierie et du conseil technique.",
      s1_p2: "Pendant plus de cinq décennies, les activités aujourd'hui intégrées à EC Proyectos de Ingeniería ont participé au développement de nombreux projets, accumulant expérience, savoir-faire spécialisé et une compréhension approfondie des besoins des administrations publiques, des entreprises et des grandes infrastructures.",
      s1_p3: "En 2024 commence une nouvelle étape. L'acquisition de deux unités de production issues d'Euroconsult permet de préserver et de renforcer ce savoir-faire au sein d'une société renouvelée, créée avec une orientation claire vers l'innovation, l'excellence technique et le service au client.",
      mis_t: "Mission",
      mis_p: "Apporter de la certitude technique à ceux qui planifient, construisent et exploitent les infrastructures, grâce à des services d'ingénierie rigoureux, indépendants et intégrés.",
      vis_t: "Vision",
      vis_p: "Devenir le groupe de conseil en ingénierie de référence entre l'Europe et l'Amérique, reconnu pour la précision de son travail et la constance de ses engagements.",
      s2_kicker: "Domaines d'activité", s2_title: "Les secteurs où le groupe apporte son expertise technique.",
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
      s3_p: "L'architecture de marque du groupe projette une image globale cohérente : chaque siège conserve son identité régionale sous la caution commune d'EC Proyectos de Ingeniería.",
      lbl_matriz: "Maison mère", lbl_filial: "Filiale", lbl_filial2: "Filiale",
      hq_city: "Madrid, Espagne", f1_city: "Lima, Pérou", f2_city: "Bogota, Colombie",
      hq_city2: "Madrid, Espagne", f1_city2: "Lima, Pérou", f2_city2: "Bogota, Colombie",
      f1_city3: "Lima, Pérou", f2_city3: "Bogota, Colombie",
      map_link: "Voir sur Google Maps",
      aria_menu: "Menu",
      an_intro: "Nous intervenons sur l'infrastructure qui soutient l'activité d'un territoire, des études préalables à la mise en service.",
      an_cta: "Votre projet relève-t-il de l'un de ces domaines ?",
      an1_t: "Transports", an1_p: "Routes et voies ferrées et leurs ouvrages : tracé, ponts et viaducs, et l'entretien de l'infrastructure en service.",
      an2_t: "Aéroports", an2_p: "Infrastructure aéroportuaire : pistes, aires de trafic et bâtiments associés, avec la direction technique des travaux.",
      an3_t: "Ports et littoral", an3_p: "Travaux maritimes et protection du littoral : quais, digues et dragages, appuyés sur les études de dynamique littorale.",
      an4_t: "Eau", an4_p: "Cycle intégral de l'eau : régulation et barrages, adduction et assainissement, et ouvrages de défense contre les crues.",
      an5_t: "Bâtiment", an5_p: "Bâtiment public et singulier : équipements, réhabilitation et les installations qui les accompagnent.",
      cli_kicker: "Clients", cli_title: "Administrations et organismes publics qui font confiance au groupe.",
      org_kicker: "Structure du groupe", org_title: "Une maison mère en Espagne et deux filiales en Amérique.", org_matriz: "Maison mère du groupe",
      org_sub1: "Filiale · Pérou", org_sub2: "Filiale · Colombie", org_legend: "Lien de propriété",
      st1: "Sièges", st2: "Continents", st3: "Domaines d'intervention",
      s4_kicker: "Engagement", s4_title: "Six côtés, une seule figure.",
      s4_p1: "Le monogramme hexagonal d'EC Proyectos de Ingeniería n'est pas un ornement : il symbolise la précision technique et l'intégration des services. Comme dans un hexagone, chaque côté — chaque discipline, chaque siège, chaque équipe — soutient les autres et dessine un ensemble exact.",
      s4_p2: "C'est notre manière de travailler : la rigueur dans le détail, la cohérence dans l'ensemble et une seule voix technique sur chaque projet.",
      quote: "La précision est une forme de respect : envers l'ouvrage, envers le territoire et envers ceux qui nous font confiance.",
      s5_kicker: "Contact", s5_title: "Contact institutionnel",
      s5_p: "Pour toute demande institutionnelle, alliance ou relation investisseurs :",
      footer_fil: "Filiales du groupe",
      footer_legal: "© 2026 EC Proyectos de Ingeniería. Tous droits réservés.",
      // Página «Hablemos de tu proyecto»
      nav_cta: "Parlons de votre projet",
      t_hablemos: "Parlons de votre projet — EC Proyectos de Ingeniería",
      hb_kicker: "Nouveau projet",
      hb_p: "Dites-nous sur quoi vous travaillez : le périmètre, la phase où il se trouve et les délais que vous visez. Nous étudierons votre demande et vous répondrons avec une première évaluation technique.",
      fh_empresa: "Entreprise ou organisation",
      fh_tipo: "Type de projet",
      fh_ubi: "Localisation (facultatif)",
      fh_msg: "Parlez-nous du projet",
      fh_send: "Envoyer la demande",
      fh_note: "À l'envoi, votre application de messagerie s'ouvrira avec les données déjà rédigées ; vérifiez-les avant de les envoyer à info@ecpi.es.",
      // Textos de la nueva etapa (2024). Las versiones EN/FR/PT las generó
      // Claude a partir del español: conviene que las revise un traductor.
      sg_title: "Nous sommes une entreprise nouvelle, mais nous ne partons pas de zéro.",
      sg_p1: "EC Proyectos de Ingeniería naît en 2024 comme un nouveau projet d'entreprise créé pour acquérir et assurer la continuité des deux unités de production les plus importantes du Grupo Euroconsult, société historique de l'ingénierie espagnole fondée en 1968.",
      sg_p2: "Des décennies d'expérience en ingénierie nous soutiennent : nous intégrons le savoir-faire technique, les capacités spécialisées et les professionnels issus de ces activités, et nous les combinons avec une structure d'entreprise plus agile, efficace et tournée vers l'avenir.",
      pp_title: "Notre point de départ",
      pp1_t: "Plus de 50 ans de parcours",
      pp1_p: "Une expérience construite au fil de décennies d'activité dans le secteur de l'ingénierie.",
      pp2_t: "2 unités de production",
      pp2_p: "Intégrées à EC Proyectos de Ingeniería depuis sa constitution en 2024.",
      pp3_t: "Une équipe spécialisée",
      pp3_p: "Des professionnels dotés d'une large expérience et d'un savoir-faire technique dans leurs domaines respectifs.",
      pp4_t: "Une vision nouvelle",
      pp4_p: "Une organisation moderne, souple et préparée aux nouveaux défis de l'ingénierie.",
      hito4_t: "2024 — Nouvelle étape",
      hito4_p: "L'acquisition de deux unités de production issues d'Euroconsult donne naissance à EC Proyectos de Ingeniería.",
      cr_title: "Continuité et renouvellement",
      cr_intro: "EC Proyectos de Ingeniería représente l'union de deux notions qui définissent notre façon de concevoir l'avenir.",
      cr1_t: "Continuité",
      cr1_p: "Nous conservons le savoir, l'expérience, les capacités techniques et la spécialisation développés pendant des décennies.",
      cr2_t: "Renouvellement",
      cr2_p: "Nous intégrons une nouvelle structure d'entreprise, de nouveaux outils, l'innovation technologique et une façon de travailler plus souple et orientée vers le client.",
      cr_out: "Le résultat est une société capable d'offrir l'expérience d'une organisation établie avec l'agilité d'un nouveau projet d'entreprise.",
      nc_title: "Une société nouvelle avec une longue histoire derrière elle",
      nc_p1: "2024 ne représente pas notre point de départ technique. C'est le début d'une nouvelle étape entrepreneuriale.",
      nc_p2: "Une étape construite sur plus d'un demi-siècle d'expérience et prête à relever les défis de l'ingénierie de demain.",
      fi_title: "Notre façon de concevoir l'ingénierie",
      fi_intro: "Nous travaillons à apporter des solutions techniques à forte valeur ajoutée, en nous appuyant sur cinq principes.",
      pri4_t: "Proximité",
      pri4_p: "Nous travaillons aux côtés de nos clients, en comprenant leurs besoins et en les accompagnant tout au long du développement des projets.",
      pri5_t: "Engagement",
      pri5_p: "Nous assumons chaque projet avec responsabilité, en recherchant des solutions fiables, efficaces et durables.",
      claim_k: "EC Proyectos de Ingeniería",
      claim_t: "Plus de 50 ans d'expérience pour construire les 50 prochaines."
    },
    pt: {
      meta_title: "EC Proyectos de Ingeniería | Grupo de engenharia",
      meta_desc: "A EC Proyectos de Ingeniería nasce em 2024 para dar continuidade às duas unidades produtivas mais importantes do Grupo Euroconsult. Mais de 50 anos de experiência, com sedes em Espanha, Peru e Colômbia.",
      skip: "Ir para o conteúdo", aria_nav: "Navegação principal", aria_lang: "Seleção de idioma",
      nav1: "O grupo", nav2: "Áreas de negócio", nav3: "Presença", navp: "Projetos", nav4: "Compromisso", nav5: "Contacto",
      aria_proj: "Projetos do grupo", aria_prev: "Projeto anterior", aria_next: "Projeto seguinte",
      sp_kicker: "Projetos", sp_title: "Cada obra explica o desafio, a solução e o impacto.",
      p1_kicker: "Projeto em destaque / Infraestrutura aeroportuária",
      p1_t: "Torre de Controlo — Aeroporto Guillermo León Valencia",
      p1_alt: "Torre de controlo do Aeroporto Guillermo León Valencia, Popayán",
      lbl_ubi: "Localização", lbl_sector: "Setor", lbl_tipo: "Tipologia",
      p1_ubi: "Popayán, Cauca", p1_sector: "Transportes", p1_tipo: "Aeroportuária",
      p_next: "Próximos projetos", view_p: "Ver projeto", back_p: "Todos os projetos",
      reto_t: "O desafio", sol_t: "A solução", imp_t: "O impacto",
      t_grupo: "O grupo — EC Proyectos de Ingeniería", t_areas: "Áreas de negócio — EC Proyectos de Ingeniería", t_presencia: "Presença internacional — EC Proyectos de Ingeniería",
      t_proyectos: "Projetos — EC Proyectos de Ingeniería", t_compromiso: "Compromisso — EC Proyectos de Ingeniería", t_contacto: "Contacto — EC Proyectos de Ingeniería",
      hito_k: "Trajetória",
      hito1_t: "1968 — Grupo Euroconsult", hito1_p: "Nasce em Madrid a empresa histórica da engenharia espanhola de cujas atividades provém hoje a EC Proyectos de Ingeniería.",
      hito2_t: "Mais de cinco décadas", hito2_p: "As atividades hoje integradas na empresa participam em numerosos projetos para administrações públicas, empresas e grandes infraestruturas.",
      hito3_t: "Presença na América", hito3_p: "As sedes de Lima e Bogotá estendem a atividade do grupo aos mercados andino e centro-americano.",
      a1_x: "Estradas e ferrovias, estruturas e pontes, obras hidráulicas e intervenções urbanas.",
      a2_x: "Presença permanente em obra, ensaios de laboratório e auscultação de estruturas.",
      a3_x: "Due diligence técnica, peritagens e relatórios independentes para decisões de investimento.",
      a4_x: "Estudos de impacte, recuperação de envolventes e planeamento territorial.",
      a5_x: "Gabinete técnico, controlo económico e coordenação de disciplinas em todo o ciclo.",
      sede1_p: "Direção técnica e coordenação do grupo. De Madrid definem-se os critérios de qualidade comuns a todas as sedes.",
      sede2_p: "A partir de Lima, a Euroconsult América serve os mercados da costa do Pacífico sul, com equipas locais e o respaldo da matriz.",
      sede3_p: "A Euroconsult Colombia opera a partir de Bogotá para o mercado andino e centro-americano, com a mesma exigência técnica do grupo.",
      pri1_t: "Experiência", pri1_p: "Aplicamos a cada novo projeto o conhecimento acumulado durante décadas.",
      pri2_t: "Rigor técnico", pri2_p: "A qualidade e a excelência técnica constituem a base do nosso trabalho.",
      pri3_t: "Inovação", pri3_p: "Incorporamos novas tecnologias, metodologias e ferramentas que melhoram a eficiência e a qualidade dos nossos serviços.",
      ct_note: "Atendemos consultas institucionais em espanhol, inglês, francês e português.",
      more1: "História e organização do grupo", more2: "As áreas em detalhe", more3: "As nossas sedes",
      morep: "Todos os projetos", more4: "A nossa forma de trabalhar", more5: "Página de contacto",
      f_quienes: "Quem somos", f_mision: "Missão e visão", f_hacemos: "O que fazemos", f_inicio: "Início",
      hq_city3: "Madrid, Espanha",
      nav_cv: "Trabalhe connosco", t_trabaja: "Trabalhe connosco — EC Proyectos de Ingeniería", tj_kicker: "Talento",
      tj_p: "Procuramos engenheiros e técnicos que entendam a precisão como uma forma de respeito. Diga-nos quem é e anexe o seu currículo.",
      fm_nombre: "Nome completo", fm_email: "Email", fm_tel: "Telefone (opcional)", fm_area: "Área de interesse",
      fm_msg: "Mensagem / carta de apresentação", fm_cv: "Currículo (PDF)", fm_send: "Enviar candidatura",
      fm_note: "Ao enviar, abre-se a sua aplicação de correio com os dados preenchidos; anexe aí o seu currículo antes de o enviar para rrhh@ecpi.es.",
      f_legal: "Aviso legal e privacidade", t_legal: "Aviso legal e privacidade — EC Proyectos de Ingeniería",
      hero_kicker: "EC Proyectos de Ingeniería",
      hero_title: "Uma nova etapa apoiada em mais de <span class='hl'>50 anos</span> de experiência",
      hero_sub: "Nascemos em 2024 para dar continuidade às duas unidades produtivas mais importantes do <span class='hl-b'>Grupo Euroconsult</span>.",
      hero_cta: "Conhecer o grupo",
      s1_kicker: "O grupo", s1_title: "Experiência que permanece. Engenharia que evolui.",
      s1_p1: "A nossa história está ligada a um longo percurso no setor da engenharia e da consultoria técnica.",
      s1_p2: "Durante mais de cinco décadas, as atividades hoje integradas na EC Proyectos de Ingeniería participaram no desenvolvimento de numerosos projetos, acumulando experiência, conhecimento especializado e uma compreensão profunda das necessidades de administrações públicas, empresas e grandes infraestruturas.",
      s1_p3: "Em 2024 começa uma nova etapa. A aquisição de duas unidades produtivas provenientes da Euroconsult permite preservar e potenciar esse conhecimento dentro de uma empresa renovada, criada com uma clara orientação para a inovação, a excelência técnica e o serviço ao cliente.",
      mis_t: "Missão",
      mis_p: "Proporcionar certeza técnica a quem planeia, constrói e gere infraestruturas, através de serviços de engenharia rigorosos, independentes e integrados.",
      vis_t: "Visão",
      vis_p: "Consolidar-nos como grupo de referência em consultoria de engenharia entre a Europa e a América, reconhecidos pela precisão do nosso trabalho e pela permanência dos nossos compromissos.",
      s2_kicker: "Áreas de negócio", s2_title: "Os setores onde o grupo aplica o seu critério técnico.",
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
      s3_p: "A arquitetura de marca do grupo projeta uma imagem global coesa: cada sede mantém a sua identidade regional sob o respaldo comum da EC Proyectos de Ingeniería.",
      lbl_matriz: "Matriz", lbl_filial: "Filial", lbl_filial2: "Filial",
      hq_city: "Madrid, Espanha", f1_city: "Lima, Peru", f2_city: "Bogotá, Colômbia",
      hq_city2: "Madrid, Espanha", f1_city2: "Lima, Peru", f2_city2: "Bogotá, Colômbia",
      f1_city3: "Lima, Peru", f2_city3: "Bogotá, Colômbia",
      map_link: "Ver no Google Maps",
      aria_menu: "Menu",
      an_intro: "Trabalhamos sobre a infraestrutura que sustenta a atividade de um território, dos estudos prévios até à entrada em serviço.",
      an_cta: "O seu projeto enquadra-se numa destas áreas?",
      an1_t: "Transportes", an1_p: "Estradas e ferrovias com as suas estruturas: traçado, pontes e viadutos, e a conservação da infraestrutura em serviço.",
      an2_t: "Aeroportos", an2_p: "Infraestrutura aeroportuária: campos de voo, plataformas e a edificação associada, com a direção técnica da obra.",
      an3_t: "Portos e costas", an3_p: "Obra marítima e proteção do litoral: cais, molhes e dragagens, com os estudos de dinâmica litoral que os sustentam.",
      an4_t: "Águas", an4_p: "Ciclo integral da água: regulação e barragens, abastecimento e saneamento, e obras de defesa contra cheias.",
      an5_t: "Edificação", an5_p: "Edificação pública e singular: equipamentos, reabilitação e as instalações que as acompanham.",
      cli_kicker: "Clientes", cli_title: "Administrações e entidades públicas que confiam no grupo.",
      org_kicker: "Estrutura do grupo", org_title: "Uma matriz em Espanha e duas subsidiárias na América.", org_matriz: "Matriz do grupo",
      org_sub1: "Subsidiária · Peru", org_sub2: "Subsidiária · Colômbia", org_legend: "Relação de propriedade",
      st1: "Sedes", st2: "Continentes", st3: "Áreas de atuação",
      s4_kicker: "Compromisso", s4_title: "Seis lados, uma única figura.",
      s4_p1: "O monograma hexagonal da EC Proyectos de Ingeniería não é um ornamento: simboliza a precisão técnica e a integração de serviços. Como num hexágono, cada lado — cada disciplina, cada sede, cada equipa — sustenta os restantes e dá forma a um conjunto exato.",
      s4_p2: "É assim que trabalhamos: rigor no detalhe, coerência no conjunto e uma única voz técnica em cada projeto.",
      quote: "A precisão é uma forma de respeito: pela obra, pelo território e por quem confia em nós.",
      s5_kicker: "Contacto", s5_title: "Contacto institucional",
      s5_p: "Para consultas institucionais, alianças e relações com investidores:",
      footer_fil: "Filiais do grupo",
      footer_legal: "© 2026 EC Proyectos de Ingeniería. Todos os direitos reservados.",
      // Página «Hablemos de tu proyecto»
      nav_cta: "Vamos falar do seu projeto",
      t_hablemos: "Vamos falar do seu projeto — EC Proyectos de Ingeniería",
      hb_kicker: "Novo projeto",
      hb_p: "Conte-nos em que está a trabalhar: o âmbito, a fase em que se encontra e os prazos que tem em vista. Analisaremos a sua consulta e responderemos com uma primeira avaliação técnica.",
      fh_empresa: "Empresa ou organização",
      fh_tipo: "Tipo de projeto",
      fh_ubi: "Localização (opcional)",
      fh_msg: "Fale-nos do projeto",
      fh_send: "Enviar consulta",
      fh_note: "Ao enviar, abrir-se-á a sua aplicação de correio com os dados já redigidos; reveja-os antes de os enviar para info@ecpi.es.",
      // Textos de la nueva etapa (2024). Las versiones EN/FR/PT las generó
      // Claude a partir del español: conviene que las revise un traductor.
      sg_title: "Somos uma empresa nova, mas não partimos do zero.",
      sg_p1: "A EC Proyectos de Ingeniería nasce em 2024 como um novo projeto empresarial criado para adquirir e dar continuidade às duas unidades produtivas mais importantes do Grupo Euroconsult, empresa histórica da engenharia espanhola fundada em 1968.",
      sg_p2: "Décadas de experiência em engenharia sustentam-nos: integramos o conhecimento técnico, as capacidades especializadas e os profissionais provenientes dessas atividades, e combinamo-los com uma estrutura empresarial mais ágil, eficiente e orientada para o futuro.",
      pp_title: "O nosso ponto de partida",
      pp1_t: "+50 anos de trajetória",
      pp1_p: "Uma experiência construída ao longo de décadas de atividade no setor da engenharia.",
      pp2_t: "2 unidades produtivas",
      pp2_p: "Integradas na EC Proyectos de Ingeniería desde a sua constituição em 2024.",
      pp3_t: "Uma equipa especializada",
      pp3_p: "Profissionais com ampla experiência e conhecimento técnico nas respetivas áreas de atividade.",
      pp4_t: "Uma nova visão",
      pp4_p: "Uma organização moderna, flexível e preparada para os novos desafios da engenharia.",
      hito4_t: "2024 — Nova etapa",
      hito4_p: "A aquisição de duas unidades produtivas provenientes da Euroconsult dá origem à EC Proyectos de Ingeniería.",
      cr_title: "Continuidade e renovação",
      cr_intro: "A EC Proyectos de Ingeniería representa a união de dois conceitos que definem a nossa forma de entender o futuro.",
      cr1_t: "Continuidade",
      cr1_p: "Conservamos o conhecimento, a experiência, as capacidades técnicas e a especialização desenvolvidos durante décadas.",
      cr2_t: "Renovação",
      cr2_p: "Incorporamos uma nova estrutura empresarial, novas ferramentas, inovação tecnológica e uma forma de trabalhar mais flexível e orientada para o cliente.",
      cr_out: "O resultado é uma empresa capaz de oferecer a experiência de uma organização consolidada com a agilidade de um novo projeto empresarial.",
      nc_title: "Uma empresa nova com uma longa história atrás",
      nc_p1: "2024 não representa o nosso ponto de partida técnico. Representa o começo de uma nova etapa empresarial.",
      nc_p2: "Uma etapa construída sobre mais de meio século de experiência e preparada para enfrentar os desafios da engenharia do futuro.",
      fi_title: "A nossa forma de entender a engenharia",
      fi_intro: "Trabalhamos para oferecer soluções técnicas de elevado valor acrescentado, com base em cinco princípios.",
      pri4_t: "Proximidade",
      pri4_p: "Trabalhamos junto dos nossos clientes, entendendo as suas necessidades e acompanhando-os durante todo o desenvolvimento dos projetos.",
      pri5_t: "Compromisso",
      pri5_p: "Assumimos cada projeto com responsabilidade, procurando soluções fiáveis, eficientes e sustentáveis.",
      claim_k: "EC Proyectos de Ingeniería",
      claim_t: "Mais de 50 anos de experiência para construir os próximos 50."
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
    // Frases con una palabra destacada: el propio diccionario trae el <span> del
    // realce, para que cada idioma lo coloque donde le corresponde.
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-html');
      if (d[k] != null) el.innerHTML = d[k];
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
      b.setAttribute('aria-checked', String(b.getAttribute('data-lang') === lang));
    });
    // La pastilla cerrada toma la bandera y el código de la opción marcada
    var act = document.querySelector('.langbtn[data-lang="' + lang + '"]');
    var tr = document.querySelector('.lang-tr');
    if (act && tr) {
      var fl = tr.querySelector('.lang-fl'), src = act.querySelector('img');
      if (fl && src) fl.setAttribute('src', src.getAttribute('src'));
      var cd = tr.querySelector('.lang-code');
      if (cd) cd.textContent = lang.toUpperCase();
    }
    try { localStorage.setItem('ecpi-lang', lang); } catch (e) {}
    window.ECPI_LANG = lang;
    // Aviso para scripts de página (proyectos.html, proyecto.html) que generan contenido
    try { document.dispatchEvent(new CustomEvent('ecpi:lang', { detail: { lang: lang, dict: d } })); } catch (e) {}
  }

  // Desplegable de idioma. Se abre con la pastilla y se cierra al elegir, con
  // Escape, al tocar fuera o al desplazar la página —la cabecera se retira al
  // bajar y el menú se iría con ella—. Las flechas recorren las cuatro opciones.
  function langMenu() {
    var tr = document.querySelector('.lang-tr');
    var menu = document.getElementById('langmenu');
    if (!tr || !menu) return;
    var opts = Array.prototype.slice.call(menu.querySelectorAll('.langbtn'));

    function open(focus) {
      menu.hidden = false;
      tr.setAttribute('aria-expanded', 'true');
      if (focus === 'last') opts[opts.length - 1].focus();
      else if (focus) (menu.querySelector('.langbtn[aria-checked="true"]') || opts[0]).focus();
    }
    function close(back) {
      if (menu.hidden) return;
      menu.hidden = true;
      tr.setAttribute('aria-expanded', 'false');
      if (back) tr.focus();
    }
    function move(from, step) {
      var i = opts.indexOf(from) + step;
      if (i < 0) i = opts.length - 1;
      if (i >= opts.length) i = 0;
      opts[i].focus();
    }

    tr.addEventListener('click', function () {
      if (menu.hidden) open(false); else close(false);
    });
    tr.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); open(true); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); open('last'); }
      else if (e.key === 'Escape') close(false);
    });
    opts.forEach(function (b) {
      b.addEventListener('click', function () {
        apply(b.getAttribute('data-lang'));
        close(true);
      });
      b.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowDown') { e.preventDefault(); move(b, 1); }
        else if (e.key === 'ArrowUp') { e.preventDefault(); move(b, -1); }
        else if (e.key === 'Home') { e.preventDefault(); opts[0].focus(); }
        else if (e.key === 'End') { e.preventDefault(); opts[opts.length - 1].focus(); }
        else if (e.key === 'Escape') { e.preventDefault(); close(true); }
        else if (e.key === 'Tab') close(false);
      });
    });
    document.addEventListener('click', function (e) {
      if (!tr.contains(e.target) && !menu.contains(e.target)) close(false);
    });
    window.addEventListener('scroll', function () { close(false); }, { passive: true });
  }

  // Menu de movil. Mientras esta abierto se bloquea el desplazamiento del
  // documento: la cabecera se retira al bajar y se llevaria el panel con ella.
  // En el index eso obliga ademas a volverla opaca, porque sobre la portada va
  // transparente y el panel blanco colgaria de la nada.
  function burgerMenu() {
    var b = document.querySelector('.burger');
    var panel = document.getElementById('menumovil');
    var hdr = document.querySelector('.hdr');
    if (!b || !panel) return;

    function abrir() {
      panel.hidden = false;
      b.setAttribute('aria-expanded', 'true');
      document.documentElement.classList.add('menu-abierto');
      if (hdr) hdr.classList.add('solid');
    }
    function cerrar(volver) {
      if (panel.hidden) return;
      panel.hidden = true;
      b.setAttribute('aria-expanded', 'false');
      document.documentElement.classList.remove('menu-abierto');
      // El fondo de la cabecera vuelve a depender de donde este la pagina
      if (hdr) hdr.classList.toggle('solid', (window.scrollY || 0) > 100);
      if (volver) b.focus();
    }

    b.addEventListener('click', function () {
      if (panel.hidden) abrir(); else cerrar(false);
    });
    // Al elegir destino se cierra: si el enlace es un ancla de la misma pagina,
    // sin esto el panel se quedaria tapando aquello a lo que se ha saltado.
    panel.addEventListener('click', function (e) {
      if (e.target.closest && e.target.closest('a')) cerrar(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') cerrar(true);
    });
    // Al ensanchar, los enlaces vuelven a la barra y el panel sobra
    window.addEventListener('resize', function () {
      if (window.innerWidth > 1024) cerrar(false);
    });
  }

  // Selector de areas de negocio (index). Las filas son pestanas: se eligen con
  // el raton al pasar por encima, con un clic o con las flechas del teclado. La
  // foto y la descripcion viven en el HTML —las cinco, con su clave de idioma—,
  // asi que aqui solo se decide cual se ensena y no hay texto que traducir.
  function areaTabs() {
    var sel = document.querySelector('.asel');
    if (!sel) return;
    var tabs = Array.prototype.slice.call(sel.querySelectorAll('.abtn'));
    var fotos = document.querySelectorAll('.apic');
    var descs = document.querySelectorAll('.adesc');
    var panel = document.getElementById('apics');
    if (!tabs.length) return;

    function elegir(i, foco) {
      tabs.forEach(function (b, k) {
        var act = k === i;
        b.classList.toggle('on', act);
        b.setAttribute('aria-selected', String(act));
        b.tabIndex = act ? 0 : -1;          // el tabulador entra una vez, no cinco
      });
      for (var k = 0; k < fotos.length; k++) fotos[k].classList.toggle('on', k === i);
      for (var m = 0; m < descs.length; m++) descs[m].hidden = m !== i;
      if (panel && tabs[i].id) panel.setAttribute('aria-labelledby', tabs[i].id);
      if (foco) tabs[i].focus();
    }

    tabs.forEach(function (b, i) {
      b.addEventListener('click', function () { elegir(i); });
      b.addEventListener('mouseenter', function () { elegir(i); });
      b.addEventListener('focus', function () { elegir(i); });
      b.addEventListener('keydown', function (e) {
        var n = tabs.length;
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') { e.preventDefault(); elegir((i + 1) % n, true); }
        else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') { e.preventDefault(); elegir((i - 1 + n) % n, true); }
        else if (e.key === 'Home') { e.preventDefault(); elegir(0, true); }
        else if (e.key === 'End') { e.preventDefault(); elegir(n - 1, true); }
      });
    });
  }

  function init() {
    langMenu();
    burgerMenu();
    areaTabs();
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

    // Cabecera: se retira hacia arriba en cuanto se baja algo más de una muesca
    // de rueda y vuelve a asomar con una muesca hacia arriba, en cualquier punto
    // de la página. Se mide el recorrido acumulado en cada sentido —no la posición
    // absoluta— y el contador contrario se pone a cero al cambiar de dirección,
    // de modo que un temblor del trackpad no la haga aparecer y desaparecer.
    var hdr = document.querySelector('.hdr');
    if (hdr) {
      var BAJAR = 130;   // poco más de una muesca para esconderla
      var SUBIR = 100;   // ~1 muesca para recuperarla
      var FONDO = 100;   // hasta aquí la cabecera del index va transparente
      var previo = window.scrollY || document.documentElement.scrollTop || 0;
      var abajo = 0, arriba = 0, pending = false;
      var sync = function () {
        pending = false;
        var y = window.scrollY || document.documentElement.scrollTop || 0;
        var d = y - previo;
        previo = y;
        // el fondo depende de la posición, no del sentido de la marcha
        hdr.classList.toggle('solid', y > FONDO);
        if (y <= 4) {                      // arriba del todo siempre se ve
          abajo = arriba = 0;
          hdr.classList.remove('hid');
        } else if (d > 0) {
          abajo += d; arriba = 0;
          if (abajo > BAJAR) hdr.classList.add('hid');
        } else if (d < 0) {
          arriba -= d; abajo = 0;
          if (arriba > SUBIR) hdr.classList.remove('hid');
        }
      };
      sync();   // el estado inicial importa: la página puede cargar ya desplazada
      window.addEventListener('scroll', function () {
        if (!pending) { pending = true; requestAnimationFrame(sync); }
      }, { passive: true });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
