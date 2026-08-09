/* ECPI — Datos de proyectos del grupo.
   Añadir aquí nuevos proyectos: aparecerán automáticamente en la cuadrícula
   (proyectos.html) y tendrán su página de detalle (proyecto.html?id=<id>).
   `img` es opcional: si falta, se muestra un marcador de posición. */
window.ECPI_PROJECTS = [
  {
    id: "popayan", // <!-- dato editable -->
    img: "assets/img/proj-popayan.webp",
    es: { kicker: "Infraestructura aeroportuaria", title: "Torre de Control — Aeropuerto Guillermo León Valencia", ubi: "Popayán, Cauca (Colombia)", sector: "Transporte", tipo: "Aeroportuaria",
      reto: "Dotar al aeropuerto de una torre de control moderna, integrada en la operación diaria de un aeródromo en servicio.",
      sol: "Ingeniería y supervisión técnica del conjunto, coordinando disciplinas estructurales, de instalaciones y de navegación aérea.",
      imp: "Una infraestructura que ordena y asegura la operación aérea de Popayán y su región." },
    en: { kicker: "Airport infrastructure", title: "Control Tower — Guillermo León Valencia Airport", ubi: "Popayán, Cauca (Colombia)", sector: "Transport", tipo: "Airport",
      reto: "To provide the airport with a modern control tower, integrated into the daily operation of an airfield in service.",
      sol: "Engineering and technical supervision of the whole, coordinating structural, systems and air-navigation disciplines.",
      imp: "An infrastructure that organises and secures air operations for Popayán and its region." },
    fr: { kicker: "Infrastructure aéroportuaire", title: "Tour de contrôle — Aéroport Guillermo León Valencia", ubi: "Popayán, Cauca (Colombie)", sector: "Transport", tipo: "Aéroportuaire",
      reto: "Doter l'aéroport d'une tour de contrôle moderne, intégrée à l'exploitation quotidienne d'un aérodrome en service.",
      sol: "Ingénierie et supervision technique de l'ensemble, en coordonnant structures, installations et navigation aérienne.",
      imp: "Une infrastructure qui ordonne et sécurise l'exploitation aérienne de Popayán et de sa région." },
    pt: { kicker: "Infraestrutura aeroportuária", title: "Torre de Controlo — Aeroporto Guillermo León Valencia", ubi: "Popayán, Cauca (Colômbia)", sector: "Transportes", tipo: "Aeroportuária",
      reto: "Dotar o aeroporto de uma torre de controlo moderna, integrada na operação diária de um aeródromo em serviço.",
      sol: "Engenharia e supervisão técnica do conjunto, coordenando estruturas, instalações e navegação aérea.",
      imp: "Uma infraestrutura que organiza e assegura a operação aérea de Popayán e da sua região." }
  },
  {
    id: "viaducto-av", // <!-- dato editable: proyecto de ejemplo -->
    es: { kicker: "Ingeniería civil / Alta velocidad", title: "Supervisión de viaducto ferroviario de alta velocidad", ubi: "Castilla-La Mancha, España", sector: "Transporte", tipo: "Ferroviaria",
      reto: "Controlar la ejecución de un viaducto singular sin interrumpir el programa general de la línea.",
      sol: "Supervisión estructural continua, control geométrico y ensayos de materiales a pie de obra.",
      imp: "Un paso clave de la línea entregado con plena trazabilidad técnica." },
    en: { kicker: "Civil engineering / High speed", title: "Supervision of a high-speed railway viaduct", ubi: "Castilla-La Mancha, Spain", sector: "Transport", tipo: "Railway",
      reto: "To control the execution of a singular viaduct without disrupting the line's overall programme.",
      sol: "Continuous structural supervision, geometric control and on-site materials testing.",
      imp: "A key crossing of the line delivered with full technical traceability." },
    fr: { kicker: "Génie civil / Grande vitesse", title: "Supervision d'un viaduc ferroviaire à grande vitesse", ubi: "Castille-La Manche, Espagne", sector: "Transport", tipo: "Ferroviaire",
      reto: "Contrôler l'exécution d'un viaduc singulier sans perturber le programme général de la ligne.",
      sol: "Supervision structurelle continue, contrôle géométrique et essais de matériaux sur site.",
      imp: "Un franchissement clé de la ligne livré avec une traçabilité technique complète." },
    pt: { kicker: "Engenharia civil / Alta velocidade", title: "Fiscalização de viaduto ferroviário de alta velocidade", ubi: "Castela-Mancha, Espanha", sector: "Transportes", tipo: "Ferroviária",
      reto: "Controlar a execução de um viaduto singular sem interromper o programa geral da linha.",
      sol: "Fiscalização estrutural contínua, controlo geométrico e ensaios de materiais em obra.",
      imp: "Uma travessia chave da linha entregue com plena rastreabilidade técnica." }
  },
  {
    id: "presa", // <!-- dato editable: proyecto de ejemplo -->
    es: { kicker: "Obra hidráulica / Seguridad de presas", title: "Rehabilitación y auscultación de presa de gravedad", ubi: "Extremadura, España", sector: "Agua", tipo: "Hidráulica",
      reto: "Actualizar la seguridad de una presa en servicio con más de medio siglo de vida.",
      sol: "Diagnóstico estructural, plan de auscultación permanente y proyecto de rehabilitación por fases.",
      imp: "La presa sigue operando con criterios de seguridad actuales y datos en continuo." },
    en: { kicker: "Hydraulic works / Dam safety", title: "Rehabilitation and monitoring of a gravity dam", ubi: "Extremadura, Spain", sector: "Water", tipo: "Hydraulic",
      reto: "To bring the safety of a dam in service, over half a century old, up to current standards.",
      sol: "Structural diagnosis, a permanent monitoring plan and a phased rehabilitation design.",
      imp: "The dam keeps operating under current safety criteria, with continuous data." },
    fr: { kicker: "Ouvrages hydrauliques / Sécurité des barrages", title: "Réhabilitation et auscultation d'un barrage-poids", ubi: "Estrémadure, Espagne", sector: "Eau", tipo: "Hydraulique",
      reto: "Mettre à niveau la sécurité d'un barrage en service de plus d'un demi-siècle.",
      sol: "Diagnostic structurel, plan d'auscultation permanente et projet de réhabilitation par phases.",
      imp: "Le barrage continue d'exploiter selon les critères de sécurité actuels, avec des données en continu." },
    pt: { kicker: "Obras hidráulicas / Segurança de barragens", title: "Reabilitação e auscultação de barragem de gravidade", ubi: "Estremadura, Espanha", sector: "Água", tipo: "Hidráulica",
      reto: "Atualizar a segurança de uma barragem em serviço com mais de meio século de vida.",
      sol: "Diagnóstico estrutural, plano de auscultação permanente e projeto de reabilitação por fases.",
      imp: "A barragem continua a operar com critérios de segurança atuais e dados em contínuo." }
  },
  {
    id: "metro-lima", // <!-- dato editable: proyecto de ejemplo -->
    es: { kicker: "Auscultación / Infraestructura urbana", title: "Auscultación de túneles de la red de metro", ubi: "Lima, Perú", sector: "Transporte", tipo: "Túneles",
      reto: "Vigilar deformaciones en túneles bajo una ciudad densa y en operación.",
      sol: "Instrumentación continua, campañas de inspección y umbrales de alerta acordados con el operador.",
      imp: "Decisiones de mantenimiento basadas en datos, sin interrumpir el servicio." },
    en: { kicker: "Monitoring / Urban infrastructure", title: "Monitoring of metro network tunnels", ubi: "Lima, Peru", sector: "Transport", tipo: "Tunnels",
      reto: "To watch for deformations in tunnels beneath a dense city in operation.",
      sol: "Continuous instrumentation, inspection campaigns and alert thresholds agreed with the operator.",
      imp: "Maintenance decisions based on data, without interrupting the service." },
    fr: { kicker: "Auscultation / Infrastructure urbaine", title: "Auscultation des tunnels du réseau de métro", ubi: "Lima, Pérou", sector: "Transport", tipo: "Tunnels",
      reto: "Surveiller les déformations de tunnels sous une ville dense et en exploitation.",
      sol: "Instrumentation continue, campagnes d'inspection et seuils d'alerte convenus avec l'exploitant.",
      imp: "Des décisions de maintenance fondées sur les données, sans interrompre le service." },
    pt: { kicker: "Auscultação / Infraestrutura urbana", title: "Auscultação de túneis da rede de metro", ubi: "Lima, Peru", sector: "Transportes", tipo: "Túneis",
      reto: "Vigiar deformações em túneis sob uma cidade densa e em operação.",
      sol: "Instrumentação contínua, campanhas de inspeção e limiares de alerta acordados com o operador.",
      imp: "Decisões de manutenção baseadas em dados, sem interromper o serviço." }
  },
  {
    id: "ptar", // <!-- dato editable: proyecto de ejemplo -->
    es: { kicker: "Medio ambiente / Ciclo del agua", title: "Planta de tratamiento de aguas residuales", ubi: "Cundinamarca, Colombia", sector: "Agua", tipo: "Ambiental",
      reto: "Dimensionar el tratamiento para una población en crecimiento con vertido a un cauce sensible.",
      sol: "Ingeniería de proceso, diseño de detalle y asistencia técnica durante la puesta en marcha.",
      imp: "Vertido conforme a norma y un río en mejor estado aguas abajo." },
    en: { kicker: "Environment / Water cycle", title: "Wastewater treatment plant", ubi: "Cundinamarca, Colombia", sector: "Water", tipo: "Environmental",
      reto: "To size the treatment for a growing population discharging into a sensitive watercourse.",
      sol: "Process engineering, detailed design and technical assistance through commissioning.",
      imp: "A compliant discharge and a healthier river downstream." },
    fr: { kicker: "Environnement / Cycle de l'eau", title: "Station d'épuration des eaux usées", ubi: "Cundinamarca, Colombie", sector: "Eau", tipo: "Environnemental",
      reto: "Dimensionner le traitement pour une population croissante rejetant dans un cours d'eau sensible.",
      sol: "Ingénierie de procédé, conception détaillée et assistance technique jusqu'à la mise en service.",
      imp: "Un rejet conforme à la norme et une rivière en meilleur état en aval." },
    pt: { kicker: "Ambiente / Ciclo da água", title: "Estação de tratamento de águas residuais", ubi: "Cundinamarca, Colômbia", sector: "Água", tipo: "Ambiental",
      reto: "Dimensionar o tratamento para uma população em crescimento com descarga num curso de água sensível.",
      sol: "Engenharia de processo, projeto de execução e assistência técnica durante o arranque.",
      imp: "Descarga conforme a norma e um rio em melhor estado a jusante." }
  },
  {
    id: "corredor-4g", // <!-- dato editable: proyecto de ejemplo -->
    es: { kicker: "Carreteras / Concesiones", title: "Interventoría de corredor vial de cuarta generación", ubi: "Antioquia, Colombia", sector: "Transporte", tipo: "Carreteras",
      reto: "Verificar de forma independiente el avance y la calidad de un corredor concesionado.",
      sol: "Interventoría técnica, administrativa y ambiental a lo largo de todo el trazado.",
      imp: "Certeza para el concedente y el financiador en cada hito de obra." },
    en: { kicker: "Roads / Concessions", title: "Independent supervision of a fourth-generation road corridor", ubi: "Antioquia, Colombia", sector: "Transport", tipo: "Roads",
      reto: "To independently verify the progress and quality of a concessioned corridor.",
      sol: "Technical, administrative and environmental supervision along the whole alignment.",
      imp: "Certainty for the grantor and the lender at every construction milestone." },
    fr: { kicker: "Routes / Concessions", title: "Contrôle indépendant d'un corridor routier de quatrième génération", ubi: "Antioquia, Colombie", sector: "Transport", tipo: "Routes",
      reto: "Vérifier de manière indépendante l'avancement et la qualité d'un corridor concédé.",
      sol: "Contrôle technique, administratif et environnemental sur l'ensemble du tracé.",
      imp: "De la certitude pour le concédant et le financeur à chaque jalon du chantier." },
    pt: { kicker: "Estradas / Concessões", title: "Fiscalização independente de corredor rodoviário de quarta geração", ubi: "Antioquia, Colômbia", sector: "Transportes", tipo: "Estradas",
      reto: "Verificar de forma independente o avanço e a qualidade de um corredor concessionado.",
      sol: "Fiscalização técnica, administrativa e ambiental ao longo de todo o traçado.",
      imp: "Certeza para o concedente e o financiador em cada marco da obra." }
  }
];
window.ECPI_GET_PROJECT = function (id) {
  var list = window.ECPI_PROJECTS;
  for (var i = 0; i < list.length; i++) { if (list[i].id === id) return list[i]; }
  return list[0];
};
