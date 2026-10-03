// missions.js
// Dati missioni + timeline + traduzioni pannello informativo.
// Ogni missione contiene tutte le proprie traduzioni disponibili.
// I cluster condividono identificativo DOM, nome e stile tra desktop e mobile.
// Espone la variabile globale: window.DASH_DATA

(function(){
  const DASH_DATA = {
    scale: { startYear: 1990, endYear: 2030 },
    clusters: {
      sun: { elementId:"cluster-sun", label:"Sun", panelClass:"" },
      mercury: { elementId:"cluster-mercury", label:"Mercury", panelClass:"" },
      earth: { elementId:"cluster-earth", label:"Earth Orbit", panelClass:"earth-panel" },
      moon: { elementId:"cluster-moon", label:"Moon", panelClass:"lunar-panel" },
      moon_dro: { elementId:"cluster-moon-drol1", label:"Moon Lagrange/DRO", panelClass:"lunar-panel" },
      l1: { elementId:"cluster-l1", label:"Lagrange L1", panelClass:"lagrange-panel" },
      l2: { elementId:"cluster-l2", label:"Lagrange L2", panelClass:"lagrange-panel" },
      mars: { elementId:"cluster-mars", label:"Mars", panelClass:"mars-panel" },
      asteroids: { elementId:"cluster-asteroids", label:"Asteroid Belt", panelClass:"" },
      jupiter: { elementId:"cluster-jupiter", label:"Jupiter", panelClass:"" },
      deepspace: { elementId:"cluster-deepspace", label:"Beyond Solar System", panelClass:"" },
    },

    missions: [
      /* ===== SUN ===== */
      {
        id:"stereoA",
        cluster:"sun",
        type:"generic",
        label:"🛰️ STEREO A 🇺🇸",
        name:"STEREO A",
        url:"https://stereo-ssc.nascom.nasa.gov/",
        summaries:{
          en:"STEREO (Solar TErrestrial RElations Observatory) studies the Sun and the heliosphere using twin spacecraft launched in 2006. STEREO-A continues to observe solar eruptions and the solar wind from a heliocentric orbit that provides a different viewpoint than Earth, supporting space-weather monitoring and 3D reconstruction of coronal mass ejections.",
          it:"STEREO (Solar TErrestrial RElations Observatory) studia il Sole e l’eliosfera con due sonde gemelle lanciate nel 2006. STEREO-A continua a osservare eruzioni solari e vento solare da un’orbita eliocentrica con un punto di vista diverso dalla Terra, utile per il monitoraggio dello space weather e la ricostruzione 3D delle CME.",
          es:"STEREO estudia el Sol y la heliosfera. STEREO-A observa erupciones y viento solar desde una órbita heliocéntrica con un punto de vista distinto al de la Tierra, útil para el “space weather”.",
          pt:"A STEREO estuda o Sol e a heliosfera. A STEREO-A observa erupções e o vento solar de uma órbita heliocêntrica com um ponto de vista diferente do da Terra, apoiando o monitoramento do “space weather”.",
          fr:"STEREO étudie le Soleil et l’héliosphère. STEREO-A observe éruptions et vent solaire depuis une orbite héliocentrique offrant un point de vue différent de la Terre, utile pour la météo spatiale.",
          de:"STEREO untersucht Sonne und Heliosphäre. STEREO-A beobachtet Eruptionen und Sonnenwind aus einer heliozentrischen Bahn mit anderem Blickwinkel als von der Erde – nützlich für Weltraumwetter."
        },
        events:[
          {date:"2006-10-26", label:"Launch", type:"start"},
          {date:"2006-12-15", label:"Lunar swingby → heliocentric orbit ahead of Earth"}
        ]
      },
      {
        id:"parker",
        cluster:"sun",
        type:"generic",
        label:"🛰️ Parker Solar Probe 🇺🇸",
        name:"Parker Solar Probe",
        url:"http://parkersolarprobe.jhuapl.edu/",
        summaries:{
          en:"Parker Solar Probe flies closer to the Sun than any previous mission to directly sample the solar corona and trace how the solar wind is heated and accelerated. Using repeated Venus gravity assists, it gradually shrinks its orbit, measuring particles, fields and imaging the corona to improve our understanding of space weather.",
          it:"Parker Solar Probe si avvicina al Sole più di qualunque missione precedente per campionare direttamente la corona e capire come il vento solare viene riscaldato e accelerato. Con ripetute assistenze gravitazionali di Venere riduce progressivamente l’orbita, misurando particelle e campi e osservando la corona per migliorare la previsione dello space weather.",
          es:"Parker Solar Probe se acerca a la corona para medir partículas y campos in situ. Asistencias gravitatorias de Venus reducen su órbita y mejoran la comprensión del “space weather”.",
          pt:"A Parker Solar Probe chega muito perto da coroa para medir partículas e campos in situ. Assistências gravitacionais de Vênus reduzem a órbita e ajudam a entender o “space weather”.",
          fr:"Parker Solar Probe frôle la couronne solaire pour mesurer directement particules et champs. Des assistances gravitationnelles de Vénus réduisent l’orbite et améliorent la compréhension de la météo spatiale.",
          de:"Parker Solar Probe nähert sich der Korona wie keine Mission zuvor und misst Teilchen/Felder direkt. Venus-Swingbys verkleinern die Bahn und verbessern das Verständnis des Weltraumwetters."
        },
        events:[
          {date:"2018-08-12", label:"Launch", type:"start"},
          {date:"2021-04-29", label:"8th perihelion (~10.4 million km from Sun)"},
          {date:"2024-11-06", label:"Final Venus gravity assist"},
          {date:"2024-12-24", label:"Record perihelion (~6.1 million km from Sun)"}
        ]
      },
      {
        id:"solarOrbiter",
        cluster:"sun",
        type:"generic",
        label:"🛰️ Solar Orbiter 🇪🇺🇺🇸",
        name:"Solar Orbiter",
        url:"https://www.esa.int/Science_Exploration/Space_Science/Solar_Orbiter",
        summaries:{
          en:"Solar Orbiter is an ESA–NASA mission that combines in-situ measurements with high-resolution imaging to link solar surface activity to the heliosphere. Its trajectory uses gravity assists to increase orbital inclination, enabling views of the Sun’s higher latitudes and helping explain the origins of the solar wind and space-weather drivers.",
          it:"Solar Orbiter è una missione ESA–NASA che unisce misure in situ e imaging ad alta risoluzione per collegare l’attività solare all’eliosfera. Con assistenze gravitazionali aumenta l’inclinazione orbitale, permettendo osservazioni a latitudini più elevate e aiutando a chiarire l’origine del vento solare e dei fenomeni che guidano lo space weather.",
          es:"Solar Orbiter combina medidas in situ e imágenes de alta resolución para vincular la actividad solar con la heliosfera. Los sobrevuelos aumentan la inclinación y permiten ver latitudes solares más altas.",
          pt:"O Solar Orbiter combina medições in situ e imagens de alta resolução para ligar a atividade solar à heliosfera. As assistências aumentam a inclinação e permitem observar latitudes mais altas do Sol.",
          fr:"Solar Orbiter combine mesures in situ et imagerie haute résolution pour relier l’activité solaire à l’héliosphère. Les survols augmentent l’inclinaison et permettent des vues à plus haute latitude.",
          de:"Solar Orbiter verbindet In-situ-Messungen mit hochauflösender Bildgebung. Swingbys erhöhen die Bahnneigung und ermöglichen Beobachtungen höherer Sonnenbreiten."
        },
        events:[
          {date:"2020-02-10", label:"Launch", type:"start"},
          {date:"2020-06-15", label:"First perihelion (~0.52 AU)"},
          {date:"2020-07-16", label:"First close solar images released ('campfires')"},
          {date:"2022-03-26", label:"First close perihelion (~0.32 AU)"},
          {date:"2025-02-18", label:"Venus flyby (inclination phase)"}
        ]
      },

      /* ===== MERCURY ===== */
      {
        id:"bepi",
        cluster:"mercury",
        type:"generic",
        label:"🛸 BepiColombo 🇪🇺🇯🇵",
        name:"BepiColombo",
        url:"https://www.esa.int/Science_Exploration/Space_Science/BepiColombo",
        summaries:{
          en:"BepiColombo is a joint ESA–JAXA mission to study Mercury’s composition, magnetic field, exosphere and interior. It uses multiple gravity assists before delivering two orbiters to Mercury, aiming to explain Mercury’s unusual properties and its interaction with the solar wind.",
          it:"BepiColombo è una missione congiunta ESA–JAXA per studiare composizione, campo magnetico, esosfera e interno di Mercurio. Sfrutta numerose assistenze gravitazionali prima di inserire due orbiter attorno al pianeta, con l’obiettivo di spiegare le sue caratteristiche peculiari e l’interazione col vento solare.",
          es:"BepiColombo (ESA–JAXA) estudia Mercurio: composición, campo magnético, exosfera e interior. Varias asistencias gravitatorias preceden la inserción orbital y la entrega de dos orbitadores.",
          pt:"A BepiColombo (ESA–JAXA) estuda Mercúrio: composição, campo magnético, exosfera e interior. Múltiplas assistências gravitacionais antecedem a inserção orbital e a entrega de dois orbitadores.",
          fr:"BepiColombo (ESA–JAXA) étudie Mercure : composition, champ magnétique, exosphère et intérieur. Plusieurs assistances gravitationnelles précèdent l’insertion orbitale et la livraison de deux orbiteurs.",
          de:"BepiColombo (ESA–JAXA) erforscht Merkur: Zusammensetzung, Magnetfeld, Exosphäre und Inneres. Mehrere Swingbys gehen der Orbitinsertion und dem Einsatz zweier Orbiter voraus."
        },
        events:[
          {date:"2018-10-20", label:"Launch", type:"start"},
          {date:"2020-04-10", label:"Earth flyby (assist)"},
          {date:"2020-10-15", label:"1st Venus flyby"},
          {date:"2021-10-01", label:"1st Mercury flyby"},
          {date:"2026-11-21", label:"Mercury orbit insertion (planned)"}
        ]
      },

      /* ===== EARTH ===== */
      {
        id:"hubble",
        cluster:"earth",
        type:"telescope",
        label:"⭐ Hubble 🇺🇸🇪🇺",
        name:"Hubble Space Telescope",
        url:"https://hubblesite.org/",
        summaries:{
          en:"Hubble is a space-based observatory launched in 1990 that transformed astronomy with high-resolution imaging and spectroscopy from the ultraviolet to the near-infrared. It has produced landmark results on galaxy evolution, star formation, dark energy constraints and exoplanet atmospheres, supported by multiple servicing missions.",
          it:"Hubble è un osservatorio spaziale lanciato nel 1990 che ha rivoluzionato l’astronomia con immagini e spettroscopia ad alta risoluzione dall’ultravioletto al vicino infrarosso. Ha prodotto risultati fondamentali su evoluzione delle galassie, formazione stellare, vincoli sull’energia oscura e atmosfere di esopianeti, grazie anche a numerose missioni di servicing.",
          es:"Hubble, lanzado en 1990, transformó la astronomía con imágenes y espectroscopía de alta resolución (UV a infrarrojo cercano). Sus misiones de servicio sostuvieron descubrimientos clave sobre galaxias, estrellas, cosmología y exoplanetas.",
          pt:"O Hubble, lançado em 1990, transformou a astronomia com imagem e espectroscopia de alta resolução (UV ao infravermelho próximo). As missões de manutenção sustentaram resultados marcantes em galáxias, estrelas, cosmologia e exoplanetas.",
          fr:"Hubble, lancé en 1990, a transformé l’astronomie avec imagerie et spectroscopie de haute résolution (UV à proche IR). Ses campagnes et missions de maintenance ont produit des résultats majeurs sur galaxies, étoiles, cosmologie et exoplanètes.",
          de:"Hubble (Start 1990) revolutionierte die Astronomie mit hochauflösender Bildgebung und Spektroskopie von UV bis nahes IR. Wartungsmissionen ermöglichten zahlreiche Durchbrüche zu Galaxien, Sternentstehung, Kosmologie und Exoplaneten."
        },
        events:[
          {date:"1990-04-24", label:"Launch", type:"start"},
          {date:"1993-12-02", label:"SM1"},
          {date:"1997-02-11", label:"SM2"},
          {date:"1999-12-20", label:"SM3A"},
          {date:"2002-03-01", label:"SM3B"},
          {date:"2009-05-11", label:"SM4"}
        ]
      },
      {
        id:"iss",
        cluster:"earth",
        type:"station",
        label:"🏠 ISS 🌍",
        name:"International Space Station",
        url:"https://www.nasa.gov/international-space-station/",
        summaries:{
          en:"The International Space Station is a permanently crewed research platform in low Earth orbit. It supports microgravity experiments, technology demonstrations and long-duration human spaceflight research, while serving as a hub for international collaboration and operational experience for future exploration missions.",
          it:"La Stazione Spaziale Internazionale è una piattaforma di ricerca in orbita bassa con equipaggio permanente. Supporta esperimenti in microgravità, dimostrazioni tecnologiche e studi sul volo umano di lunga durata, ed è un laboratorio di cooperazione internazionale e di esperienza operativa in vista di future missioni di esplorazione.",
          es:"La ISS es una plataforma de investigación tripulada en órbita baja para experimentos en microgravedad, demostraciones tecnológicas y estudios de vuelos de larga duración, con colaboración internacional.",
          pt:"A ISS é uma plataforma de pesquisa tripulada em órbita baixa para experimentos em microgravidade, demonstrações tecnológicas e estudos de voo humano de longa duração, com cooperação internacional.",
          fr:"L’ISS est un laboratoire habité en orbite basse pour expériences en microgravité, démonstrations technologiques et recherche sur les vols de longue durée, au cœur d’une coopération internationale.",
          de:"Die ISS ist ein dauerhaft bemanntes Forschungslabor im niedrigen Erdorbit für Mikrogravitationsexperimente, Technologietests und Langzeit-Raumflugforschung – getragen von internationaler Zusammenarbeit."
        },
        events:[
          {date:"1998-11-20", label:"Launch (Zarya)", type:"start"},
          {date:"2000-11-02", label:"Permanently inhabited", type:"start"},
          {date:"2030", label:"End of operations (planned; deorbit early 2031)", type:"end"}
        ]
      },
      {
        id:"chandra",
        cluster:"earth",
        type:"telescope",
        label:"⭐ Chandra 🇺🇸",
        name:"Chandra X-ray Observatory",
        url:"https://chandra.harvard.edu/",
        summaries:{
          en:"Chandra is NASA’s flagship X-ray observatory, launched in 1999 to study high-energy phenomena such as black holes, supernova remnants, galaxy clusters and hot intergalactic gas. Its sharp X-ray vision has provided key insights into cosmic structure formation and extreme astrophysical processes.",
          it:"Chandra è l’osservatorio X della NASA lanciato nel 1999 per studiare fenomeni ad alta energia come buchi neri, resti di supernova, ammassi di galassie e gas caldo intergalattico. La sua elevata risoluzione in banda X ha fornito risultati cruciali sulla formazione delle strutture cosmiche e sui processi astrofisici estremi.",
          es:"Chandra es el observatorio de rayos X de la NASA (1999) para fenómenos energéticos: agujeros negros, supernovas, cúmulos y gas caliente. Su resolución ha sido clave en astrofísica de altas energías.",
          pt:"O Chandra é o observatório de raios X da NASA (1999) para fenômenos energéticos: buracos negros, supernovas, aglomerados e gás quente. Sua alta resolução impulsionou a astrofísica de altas energias.",
          fr:"Chandra est l’observatoire X de la NASA (1999) dédié aux phénomènes énergétiques : trous noirs, supernovae, amas de galaxies et gaz chaud. Sa résolution X a apporté des avancées majeures en astrophysique des hautes énergies.",
          de:"Chandra (NASA, 1999) ist das Röntgenobservatorium für hochenergetische Phänomene wie Schwarze Löcher, Supernova-Reste und Galaxienhaufen. Die scharfe Röntgensicht lieferte zentrale Erkenntnisse der Hochenergie-Astrophysik."
        },
        events:[{date:"1999-07-23", label:"Launch", type:"start"}]
      },
      {
        id:"xmm",
        cluster:"earth",
        type:"telescope",
        label:"⭐ XMM-Newton 🇪🇺",
        name:"XMM-Newton",
        url:"https://www.cosmos.esa.int/web/xmm-newton",
        summaries:{
          en:"XMM-Newton is ESA’s X-ray observatory launched in 1999. With large collecting area and multiple instruments, it studies hot and energetic objects—galaxy clusters, accreting black holes, neutron stars and stellar coronae—complementing other multiwavelength observatories.",
          it:"XMM-Newton è l’osservatorio X dell’ESA lanciato nel 1999. Grazie a una grande area di raccolta e a più strumenti, studia oggetti caldi ed energetici—ammassi di galassie, buchi neri in accrescimento, stelle di neutroni e corone stellari—integrando le osservazioni multi-banda di altri osservatori.",
          es:"XMM-Newton (ESA, 1999) observa el Universo en rayos X con gran área colectora e instrumentos múltiples. Estudia cúmulos, agujeros negros en acreción, estrellas de neutrones y coronas estelares.",
          pt:"O XMM-Newton (ESA, 1999) observa o Universo em raios X com grande área coletora e vários instrumentos. Estuda aglomerados, buracos negros em acreção, estrelas de nêutrons e coroas estelares.",
          fr:"XMM-Newton (ESA, 1999) observe l’Univers en rayons X avec une grande surface collectrice et plusieurs instruments. Il étudie amas, trous noirs accrétants, étoiles à neutrons et couronnes stellaires.",
          de:"XMM-Newton (ESA, 1999) ist ein Röntgenobservatorium mit großer Sammelfläche und mehreren Instrumenten. Es untersucht u.a. Galaxienhaufen, akkretierende Schwarze Löcher, Neutronensterne und Sternkoronen."
        },
        events:[{date:"1999-12-10", label:"Launch", type:"start"}]
      },
      {
        id:"swift",
        cluster:"earth",
        type:"telescope",
        label:"⭐ Swift 🇺🇸",
        name:"Neil Gehrels Swift Observatory",
        url:"https://swift.gsfc.nasa.gov/",
        summaries:{
          en:"Swift is a multiwavelength observatory designed to rapidly detect and follow up gamma-ray bursts. It combines gamma-ray, X-ray and UV/optical instruments to capture the early afterglow and monitor transient events, also contributing to studies of supernovae, tidal disruption events and variable AGN. A 2026 commercial reboost attempt was cancelled, so Swift’s decaying orbit is expected to lead to reentry.",
          it:"Swift è un osservatorio multi-banda progettato per rilevare rapidamente i gamma-ray burst e seguirne l’evoluzione. Combina strumenti in gamma, X e UV/ottico per osservare l’afterglow iniziale e monitorare transienti, contribuendo anche a studi su supernovae, eventi di distruzione mareale e AGN variabili. Un tentativo commerciale di reboost nel 2026 è stato annullato: senza di esso l’orbita in decadimento porterà al rientro in atmosfera.",
          es:"Swift detecta rápidamente estallidos de rayos gamma y los sigue en varias longitudes de onda (gamma, X, UV/óptico). También estudia otros transitorios como supernovas y AGN variables. Un intento comercial de elevar su órbita en 2026 fue cancelado, por lo que se espera su reentrada.",
          pt:"O Swift detecta rapidamente GRBs e faz acompanhamento multi-comprimento de onda (gama, X, UV/óptico). Também observa outros transientes como supernovas e AGNs variáveis. Uma tentativa comercial de elevar sua órbita em 2026 foi cancelada, e a reentrada é esperada.",
          fr:"Swift détecte rapidement les sursauts gamma et en assure le suivi multi-longueurs d’onde (gamma, X, UV/optique). Il observe aussi d’autres transitoires comme supernovae et noyaux actifs variables. Une tentative commerciale de rehaussement d’orbite en 2026 a été annulée ; sa rentrée atmosphérique est donc attendue.",
          de:"Swift ist auf die schnelle Entdeckung und Nachbeobachtung von Gamma-Ray Bursts ausgelegt (Gamma, Röntgen, UV/optisch). Zudem liefert es Daten zu weiteren Transienten wie Supernovae und variablen AGN. Ein kommerzieller Reboost-Versuch 2026 wurde abgebrochen; der Wiedereintritt wird daher erwartet."
        },
        events:[
          {date:"2004-11-20", label:"Launch", type:"start"},
          {date:"2026-07-03", label:"Katalyst LINK reboost spacecraft launched"},
          {date:"2026-08-19", label:"Reboost attempt cancelled (LINK attitude-control problems)"}
        ]
      },
      {
        id:"tess",
        cluster:"earth",
        type:"telescope",
        label:"⭐ TESS 🇺🇸",
        name:"TESS",
        url:"https://heasarc.gsfc.nasa.gov/docs/tess/",
        summaries:{
          en:"TESS surveys nearly the entire sky to discover exoplanets via the transit method, focusing on bright nearby stars suited for follow-up. It also delivers high-cadence photometry used for stellar variability and time-domain astrophysics, enabling broad community science.",
          it:"TESS esplora quasi tutto il cielo per scoprire esopianeti con il metodo dei transiti, concentrandosi su stelle brillanti e vicine ideali per follow-up. Fornisce anche fotometria ad alta cadenza utile per variabilità stellare e astrofisica time-domain, abilitando ampia scienza di comunità.",
          es:"TESS explora casi todo el cielo para descubrir exoplanetas por tránsitos, centrado en estrellas cercanas y brillantes. También ofrece fotometría de alta cadencia para variabilidad estelar y astronomía temporal.",
          pt:"O TESS faz um levantamento de quase todo o céu para descobrir exoplanetas por trânsito, focando estrelas próximas e brilhantes. Também fornece fotometria de alta cadência para variabilidade estelar e astrofísica temporal.",
          fr:"TESS balaie presque tout le ciel pour découvrir des exoplanètes par transits autour d’étoiles proches et brillantes. Il fournit aussi une photométrie à haute cadence utile pour la variabilité stellaire et l’astrophysique du domaine temporel.",
          de:"TESS durchsucht nahezu den gesamten Himmel nach Exoplaneten via Transitmethode, besonders um helle, nahe Sterne. Die hochkadenzige Photometrie dient zudem der Sternvariabilität und Zeitdomänen-Astrophysik."
        },
        events:[
          {date:"2018-04-18", label:"Launch", type:"start"},
          {date:"2020-07", label:"First mission extension (EM1) starts"}
        ]
      },
      {
        id:"cheops",
        cluster:"earth",
        type:"telescope",
        label:"⭐ CHEOPS 🇪🇺",
        name:"CHEOPS",
        url:"https://www.cosmos.esa.int/web/cheops",
        summaries:{
          en:"CHEOPS is an ESA mission dedicated to precise photometry of known exoplanet host stars. It measures planet radii and refines densities when combined with mass measurements, helping characterize super-Earths and mini-Neptunes and prioritize targets for atmospheric studies.",
          it:"CHEOPS è una missione ESA dedicata alla fotometria di precisione di stelle note con esopianeti. Misura con accuratezza i raggi planetari e, combinando le masse, migliora le densità, aiutando a caratterizzare super-Terre e mini-Nettuni e a selezionare target per studi atmosferici.",
          es:"CHEOPS hace fotometría de precisión de exoplanetas conocidos para medir radios y refinar densidades (con masas). Ayuda a caracterizar supertierras y mini-neptunos y priorizar objetivos para atmósferas.",
          pt:"O CHEOPS faz fotometria de precisão de exoplanetas conhecidos para medir raios e refinar densidades (com massas). Ajuda a caracterizar super-Terras e mini-Netunos e priorizar alvos atmosféricos.",
          fr:"CHEOPS réalise une photométrie de précision de systèmes exoplanétaires connus pour mesurer les rayons et affiner les densités (avec les masses). Il aide à caractériser super-Terres et mini-Neptunes et à prioriser des cibles atmosphériques.",
          de:"CHEOPS führt Präzisions-Photometrie bekannter Exoplanetensysteme durch, misst Radien und verfeinert Dichten (mit Massen). Es unterstützt die Charakterisierung von Supererden/Mini-Neptunen und die Auswahl von Zielen für Atmosphärenstudien."
        },
        events:[
          {date:"2019-12-18", label:"Launch", type:"start"},
          {date:"2023-03", label:"Mission extension approved"}
        ]
      },
      {
        id:"tiangong",
        cluster:"earth",
        type:"station",
        label:"🏠 Tiangong 🇨🇳",
        name:"Tiangong Space Station",
        url:"https://en.wikipedia.org/wiki/Tiangong_space_station",
        summaries:{
          en:"Tiangong is China’s modular space station in low Earth orbit, supporting crewed missions, scientific experiments and technology demonstrations. It provides long-duration operations experience and a platform for domestic and potential international research activities.",
          it:"Tiangong è la stazione spaziale modulare cinese in orbita bassa, dedicata a missioni con equipaggio, esperimenti scientifici e dimostrazioni tecnologiche. Offre esperienza operativa di lunga durata e una piattaforma per ricerca nazionale e potenzialmente internazionale.",
          es:"Tiangong es la estación espacial modular china en órbita baja, con misiones tripuladas, experimentos y demostraciones tecnológicas. Proporciona una plataforma para operaciones de larga duración e investigación.",
          pt:"A Tiangong é a estação espacial modular chinesa em órbita baixa, com missões tripuladas, experimentos e demonstrações tecnológicas. Fornece uma plataforma para operações de longa duração e pesquisa.",
          fr:"Tiangong est la station spatiale modulaire chinoise en orbite basse, supportant missions habitées, expériences et démonstrations technologiques. Elle offre une plateforme pour des opérations de longue durée et la recherche.",
          de:"Tiangong ist Chinas modulare Raumstation im niedrigen Erdorbit für bemannte Missionen, Experimente und Technologiedemos. Sie dient als Plattform für Langzeitbetrieb und Forschung."
        },
        events:[{date:"2021-04-29", label:"First module launch", type:"start"}]
      },
      {
        id:"proba3",
        cluster:"earth",
        type:"telescope",
        label:"🛰️ Proba-3 🇪🇺",
        name:"Proba-3",
        url:"https://www.esa.int/Enabling_Support/Space_Engineering_Technology/Proba-3",
        summaries:{
          en:"Proba-3 is an ESA technology and science mission that demonstrates precision formation flying between two spacecraft to create an artificial solar eclipse. By aligning an occulter and a coronagraph with extreme accuracy, it enables observations of the solar corona close to the Sun’s limb.",
          it:"Proba-3 è una missione ESA tecnologica e scientifica che dimostra il volo in formazione di precisione tra due satelliti per creare un’eclissi solare artificiale. Allineando con grande accuratezza un occultatore e un coronografo, permette osservazioni della corona molto vicino al bordo solare.",
          es:"Proba-3 demuestra vuelo en formación de precisión con dos satélites para crear un eclipse solar artificial (ocultador + coronógrafo). Permite observar la corona muy cerca del borde solar.",
          pt:"A Proba-3 demonstra voo em formação de precisão com dois satélites para criar um eclipse solar artificial (ocultador + coronógrafo). Permite observar a coroa muito perto do limbo solar.",
          fr:"Proba-3 démontre le vol en formation de précision entre deux satellites afin de créer une éclipse solaire artificielle (occultateur + coronographe). Cela permet d’observer la couronne au plus près du limbe solaire.",
          de:"Proba-3 demonstriert hochpräzises Formationsfliegen zweier Satelliten, um eine künstliche Sonnenfinsternis zu erzeugen (Okkluder + Koronograph). Damit lässt sich die Korona nahe am Sonnenrand beobachten."
        },
        events:[{date:"2024-12-05", label:"Launch", type:"start"}]
      },
      {
        id:"spherex",
        cluster:"earth",
        type:"telescope",
        label:"⭐ SPHEREx 🇺🇸",
        name:"SPHEREx",
        url:"https://science.nasa.gov/mission/spherex/",
        summaries:{
          en:"SPHEREx is a NASA all-sky near-infrared spectral survey mission designed to map hundreds of millions of galaxies and study cosmic inflation, galaxy evolution and the distribution of water and organic molecules in the Milky Way. It provides broad spectral coverage for large-scale astrophysics.",
          it:"SPHEREx è una missione NASA di survey spettrale all-sky nel vicino infrarosso, progettata per mappare centinaia di milioni di galassie e studiare inflazione cosmica, evoluzione galattica e distribuzione di acqua e molecole organiche nella Via Lattea. Offre una copertura spettrale ampia per l’astrofisica su grande scala.",
          es:"SPHEREx es una misión de sondeo espectral en infrarrojo cercano de todo el cielo para mapear cientos de millones de galaxias y estudiar inflación, evolución galáctica y moléculas (agua/orgánicas) en la Vía Láctea.",
          pt:"A SPHEREx é uma missão de levantamento espectral no infravermelho próximo, de céu inteiro, para mapear centenas de milhões de galáxias e estudar inflação, evolução galáctica e moléculas (água/orgânicas) na Via Láctea.",
          fr:"SPHEREx est une mission de relevé spectroscopique infrarouge proche, couvrant tout le ciel, pour cartographier des centaines de millions de galaxies et étudier inflation, évolution galactique et molécules (eau/organique) dans la Voie lactée.",
          de:"SPHEREx ist eine all-sky Nahinfrarot-Spektral-Survey-Mission, die hunderte Millionen Galaxien kartiert und Inflation, Galaxienentwicklung sowie Wasser/organische Moleküle in der Milchstraße untersucht."
        },
        events:[
          {date:"2025-03-12", label:"Launch", type:"start"},
          {date:"2025-12", label:"First complete sky map"}
        ]
      },
            {
        id:"smile",
        cluster:"earth",
        type:"telescope",
        label:"⭐ SMILE 🇪🇺🇨🇳",
        name:"SMILE",
        url:"https://www.cosmos.esa.int/web/smile/home",
        summaries:{
          en:"SMILE is a joint ESA-CAS space mission to study the Sun-Earth interaction, designed to globally map the magnetosphere in X-rays and study geomagnetic storms, ultraviolet polar auroras, and space weather dynamics. It offers continuous large-scale monitoring for space physics.",
          it:"SMILE è una missione spaziale congiunta ESA-CAS per lo studio dell'interazione Sole-Terra, progettata per mappare globalmente nei raggi X la magnetosfera e studiare tempeste geomagnetiche, aurore polari in ultravioletto e dinamiche del meteo spaziale. Offre un monitoraggio continuo su larga scala per la fisica spaziale.",
          es:"SMILE es una misión espacial conjunta ESA-CAS para el estudio de la interacción Sol-Tierra, diseñada para mapear globalmente la magnetosfera en rayos X y estudiar tormentas geomagnéticas, auroras polares en ultravioleta y la dinámica del clima espacial. Ofrece una monitorización continua a gran escala para la física espacial.",
          pt:"SMILE é uma missão espacial conjunta ESA-CAS para o estudo da interação Sol-Terra, concebida para mapear globalmente a magnetosfera em raios X e estudar tempestades geomagnéticas, auroras polares em ultravioleta e as dinâmicas do clima espacial. Oferece uma monitorização contínua em larga escala para a física espacial.",
          fr:"SMILE est une mission spatiale conjointe ESA-CAS pour l'étude de l'interaction Soleil-Terre, conçue pour cartographier globalement la magnétosphère en rayons X et étudier les tempêtes géomagnétiques, les aurores polaires en ultraviolet et la dynamique de la météorologie spatiale. Elle offre une surveillance continue à grande échelle pour la physique spatiale.",
          de:"SMILE ist eine gemeinsame Weltraummission von ESA und CAS zur Untersuchung der Sonne-Erde-Wechselwirkung, die darauf ausgelegt ist, die Magnetosphäre global im Röntgenbereich zu kartieren und geomagnetische Stürme, ultraviolette Polarlichter sowie die Dynamik des Weltraumwetters zu untersuchen. Sie bietet eine kontinuierliche, großräumige Überwachung für die Weltraumphysik."
        },
        events:[
          {date:"2026-05-19", label:"Launch", type:"start"}
        ]
      },

      /* ===== MOON Lagrange / DRO ===== */
      {
        id:"artemisP1",
        cluster:"moon_dro",
        type:"lunar",
        label:"🛰️ ARTEMIS P1 🇺🇸",
        name:"ARTEMIS P1",
        url:"https://science.nasa.gov/mission/themis/",
        summaries:{
          en:"ARTEMIS repurposed two THEMIS spacecraft to study the Moon’s space environment. ARTEMIS P1 operates in Earth–Moon libration and related trajectories to observe plasma and fields and their interaction with the lunar environment.",
          it:"ARTEMIS riutilizza due sonde THEMIS per studiare l’ambiente spaziale lunare. ARTEMIS P1 opera su traiettorie legate ai punti di librazione Terra–Luna per misurare plasmi e campi e l’interazione con l’ambiente della Luna.",
          es:"ARTEMIS reutiliza dos sondas THEMIS para estudiar el entorno espacial lunar. P1 opera en trayectorias ligadas a puntos de libración Tierra-Luna y mide plasmas y campos.",
          pt:"A ARTEMIS reutiliza duas sondas THEMIS para estudar o ambiente espacial lunar. A P1 opera em trajetórias ligadas a pontos de libração Terra-Lua e mede plasmas e campos.",
          fr:"ARTEMIS réutilise deux sondes THEMIS pour étudier l’environnement spatial lunaire. P1 opère sur des trajectoires liées aux points de libration Terre–Lune et mesure plasmas et champs.",
          de:"ARTEMIS nutzt zwei ehemalige THEMIS-Sonden, um die lunare Weltraumumgebung zu untersuchen. P1 fliegt librationsnahe Trajektorien im Erde-Mond-System und misst Plasma und Felder."
        },
        events:[
          {date:"2007-02-17", label:"Launch (as THEMIS)", type:"start"},
          {date:"2009-07-20", label:"THEMIS-B/C repositioning begins as ARTEMIS P1/P2"},
          {date:"2010-08-25", label:"P1 enters Lissajous orbit near Earth–Moon L2"}
        ]
      },
      {
        id:"artemisP2",
        cluster:"moon_dro",
        type:"lunar",
        label:"🛰️ ARTEMIS P2 🇺🇸",
        name:"ARTEMIS P2",
        url:"https://science.nasa.gov/mission/themis/",
        summaries:{
          en:"ARTEMIS P2 was redirected to lunar-related orbits to investigate the Moon’s interaction with the solar wind and Earth’s magnetotail, characterizing plasma processes and boundary regions in the Earth–Moon system.",
          it:"ARTEMIS P2 è stata reindirizzata verso orbite legate al sistema Terra–Luna per studiare l’interazione tra Luna, vento solare e coda magnetica terrestre, caratterizzando processi di plasma e regioni di confine nel sistema Terra–Luna.",
          es:"ARTEMIS P2 estudia la interacción de la Luna con el viento solar y la magnetocola terrestre. Sus medidas caracterizan procesos de plasma y regiones límite del sistema Tierra-Luna.",
          pt:"A ARTEMIS P2 estuda a interação da Lua com o vento solar e a cauda magnetosférica da Terra. As medições caracterizam processos de plasma e regiões de fronteira no sistema Terra-Lua.",
          fr:"ARTEMIS P2 étudie l’interaction de la Lune avec le vent solaire et la magnétosphère terrestre. Ses mesures caractérisent processus plasma et régions de frontières dans le système Terre–Lune.",
          de:"ARTEMIS P2 untersucht die Wechselwirkung des Mondes mit Sonnenwind und Erd-Magnetotail. Die Messungen charakterisieren Plasmaprozesse und Grenzregionen im Erde-Mond-System."
        },
        events:[
          {date:"2007-02-17", label:"Launch (as THEMIS)", type:"start"},
          {date:"2009-07-20", label:"THEMIS-B/C repositioning begins as ARTEMIS P1/P2"},
          {date:"2010-10-22", label:"P2 enters Lissajous orbit near Earth–Moon L1"}
        ]
      },
      {
        id:"queqiao1",
        cluster:"moon_dro",
        type:"lunar",
        label:"🌐 Queqiao-1 🇨🇳",
        name:"Queqiao-1",
        url:"https://en.wikipedia.org/wiki/Queqiao-1",
        summaries:{
          en:"Queqiao-1 is a relay satellite near the Earth–Moon L2 region, enabling communications for Chang’e-4 operations on the lunar far side through continuous relay links.",
          it:"Queqiao-1 è un satellite relay nella regione del punto L2 Terra–Luna, che abilita le comunicazioni per le operazioni Chang’e-4 sul lato nascosto della Luna tramite collegamenti di rilancio continui.",
          es:"Queqiao-1 es un satélite de retransmisión cerca de L2 Tierra-Luna para comunicaciones con Chang’e-4 en la cara oculta. Proporciona un enlace continuo para datos y telemetría sin visibilidad directa con la Tierra.",
          pt:"O Queqiao-1 é um satélite retransmissor perto de L2 Terra-Lua para comunicações com a Chang’e-4 no lado oculto. Fornece um enlace contínuo para dados e telemetria fora da linha de visada direta.",
          fr:"Queqiao-1 est un satellite relais près de la région Terre–Lune L2, assurant les communications de Chang’e-4 sur la face cachée. Il fournit un lien continu pour données et télémesure hors ligne de visée directe.",
          de:"Queqiao-1 ist ein Relaissatellit nahe Erde-Mond L2 für die Kommunikation der Chang’e-4-Mission auf der Mondrückseite. Er ermöglicht kontinuierliche Daten-/Telemetrie-Übertragung ohne direkte Sichtlinie zur Erde."
        },
        events:[{date:"2018-05-20", label:"Launch", type:"start"}]
      },
      {
        id:"change5orb",
        cluster:"moon_dro",
        type:"lunar",
        label:"🛸 Chang'e 5 🇨🇳 (orbiter)",
        name:"Chang'e 5 (orbiter extended)",
        url:"https://en.wikipedia.org/wiki/Chang%27e_5",
        summaries:{
          en:"Chang’e-5 returned lunar samples in 2020. The orbiter has supported extended operations and complex trajectories in the Earth–Moon system, demonstrating navigation capability useful for future architectures.",
          it:"Chang’e-5 ha riportato campioni lunari nel 2020. L’orbiter ha supportato operazioni estese e traiettorie complesse nel sistema Terra–Luna, dimostrando capacità di navigazione utili per future architetture.",
          es:"Chang’e-5 trajo muestras lunares a la Tierra en 2020. El orbitador ha apoyado operaciones de misión extendida y trayectorias complejas en el sistema Tierra–Luna, demostrando capacidades de navegación útiles para futuras arquitecturas.",
          pt:"A Chang’e-5 trouxe amostras lunares à Terra em 2020. O orbitador apoiou operações de missão estendida e trajetórias complexas no sistema Terra–Lua, demonstrando capacidades de navegação úteis para futuras arquiteturas.",
          fr:"Chang’e-5 a rapporté des échantillons lunaires sur Terre en 2020. L’orbiteur a assuré des opérations de mission prolongée et suivi des trajectoires complexes dans le système Terre–Lune, démontrant des capacités de navigation utiles aux futures architectures.",
          de:"Chang’e-5 brachte 2020 Mondproben zur Erde zurück. Der Orbiter unterstützte den erweiterten Missionsbetrieb und komplexe Flugbahnen im Erde–Mond-System und demonstrierte dabei Navigationsfähigkeiten, die für künftige Missionsarchitekturen nützlich sind."
        },
        events:[
          {date:"2020-11-23", label:"Launch", type:"start"},
          {date:"2021-03-15", label:"Orbiter at Sun–Earth L1"},
          {date:"2021-09-09", label:"Lunar flyby"},
          {date:"2022-01", label:"Transition toward distant retrograde orbit (DRO)"}
        ]
      },
      {
        id:"droAB",
        cluster:"moon_dro",
        type:"lunar",
        label:"🌐🌐 DRO A/B 🇨🇳",
        name:"DRO A/B",
        url:"https://www.china-in-space.com/p/china-begins-operating-first-distant",
        summaries:{
          en:"DRO A/B refers to a pair of spacecraft operating in a distant retrograde orbit (DRO) in the Earth–Moon system, demonstrating long-term operations and communications in stable cis-lunar orbits.",
          it:"DRO A/B indica una coppia di veicoli operanti in orbita retrograda distante (DRO) nel sistema Terra–Luna, dimostrando operazioni di lunga durata e comunicazioni in orbite cis-lunari stabili.",
          es:"DRO A/B se refiere a dos naves en órbita retrógrada distante (DRO) del sistema Tierra-Luna. Demuestran operaciones prolongadas y comunicaciones en órbitas cislunares estables.",
          pt:"DRO A/B refere-se a duas naves em órbita retrógrada distante (DRO) no sistema Terra-Lua. Demonstram operações de longa duração e comunicações em órbitas cislunares estáveis.",
          fr:"DRO A/B désigne deux engins en orbite rétrograde lointaine (DRO) du système Terre–Lune. Ces missions démontrent opérations de longue durée et communications dans des orbites cislunaires stables.",
          de:"DRO A/B bezeichnet zwei Raumfahrzeuge in einer fernen retrograden Bahn (DRO) im Erde-Mond-System. Solche Missionen demonstrieren Langzeitbetrieb und Kommunikation in stabilen cislunaren Orbits."
        },
        events:[{date:"2024-03-13", label:"Launch", type:"start"}]
      },

      /* ===== MOON ===== */
      {
        id:"lro",
        cluster:"moon",
        type:"lunar",
        label:"🛰️ LRO 🇺🇸 (orbiter)",
        name:"Lunar Reconnaissance Orbiter",
        url:"https://www.nasa.gov/mission_pages/LRO/main/index.html",
        summaries:{
          en:"LRO maps the Moon in high detail with imagery, topography, temperatures and radiation measurements, supporting science, landing site assessment and future exploration.",
          it:"LRO mappa la Luna in grande dettaglio con immagini, topografia, temperature e misure radiative, supportando scienza, valutazione dei siti e futura esplorazione.",
          es:"LRO cartografía la Luna en alta resolución para ciencia y exploración. Proporciona imágenes, topografía, temperaturas y medidas del entorno radiativo, clave para sitios de aterrizaje y geología.",
          pt:"O LRO mapeia a Lua em alta resolução para ciência e exploração. Fornece imagens, topografia, temperaturas e medições do ambiente radiativo, essenciais para sítios de pouso e geologia.",
          fr:"LRO cartographie la Lune à haute résolution pour la science et l’exploration. Il fournit imagerie, topographie, températures et mesures de l’environnement radiatif, essentielles pour sites d’atterrissage et géologie.",
          de:"LRO kartiert den Mond hochauflösend für Wissenschaft und künftige Exploration. Daten zu Bildgebung, Topografie, Temperatur und Strahlungsumgebung sind zentral für Landeplatz-Analysen und Geologie."
        },
        events:[{date:"2009-06-18", label:"Launch", type:"start"}]
      },
      {
        id:"queqiao2",
        cluster:"moon",
        type:"lunar",
        label:"🌐 Queqiao-2 🇨🇳",
        name:"Queqiao-2",
        url:"https://en.wikipedia.org/wiki/Queqiao-2",
        summaries:{
          en:"Queqiao-2 is a communications relay mission intended to support lunar far-side and polar operations by providing relay links where direct Earth contact is limited by geometry.",
          it:"Queqiao-2 è una missione di rilancio comunicazioni per supportare operazioni sul lato nascosto e in regioni polari, fornendo collegamenti relay quando il contatto diretto con la Terra è limitato dalla geometria.",
          es:"Queqiao-2 es una misión de retransmisión para apoyar operaciones lunares (polos/cara oculta). Los satélites relay son cruciales cuando la geometría limita el contacto directo con la Tierra.",
          pt:"O Queqiao-2 é uma missão de retransmissão para apoiar operações lunares (polos/lado oculto). Satélites relé são essenciais quando a geometria limita o contato direto com a Terra.",
          fr:"Queqiao-2 est une mission de relais de communications visant à soutenir opérations lunaires (pôles/face cachée). Les satellites relais permettent un lien durable quand la géométrie empêche le contact direct avec la Terre.",
          de:"Queqiao-2 ist eine Kommunikations-Relay-Mission zur Unterstützung von Operationen auf der Mondrückseite und in Polarregionen. Relais-Satelliten sind entscheidend, wenn direkte Erdverbindung geometrisch eingeschränkt ist."
        },
        events:[{date:"2024-03-20", label:"Launch", type:"start"}]
      },
      {
        id:"change4",
        cluster:"moon",
        type:"rover",
        label:"🚙 Chang'e 4 🇨🇳",
        name:"Chang'e 4",
        url:"https://en.wikipedia.org/wiki/Chang%27e_4",
        summaries:{
          en:"Chang’e-4 achieved the first soft landing on the Moon’s far side in 2019 and deployed the Yutu-2 rover, studying far-side geology and environment via a relay satellite.",
          it:"Chang’e-4 ha realizzato nel 2019 il primo atterraggio morbido sul lato nascosto della Luna e ha dispiegato il rover Yutu-2, studiando geologia e ambiente del far side tramite un satellite relay.",
          es:"Chang’e-4 logró en 2019 el primer aterrizaje suave en la cara oculta y desplegó el rover Yutu-2. Estudia geología y entorno del “far side” mediante un satélite relay.",
          pt:"A Chang’e-4 realizou em 2019 o primeiro pouso suave no lado oculto e liberou o rover Yutu-2. Estuda geologia e ambiente do far side via satélite relé.",
          fr:"Chang’e-4 a réalisé en 2019 le premier atterrissage en douceur sur la face cachée et a déployé le rover Yutu-2. La mission étudie géologie et environnement du far side via un relais de communications.",
          de:"Chang’e-4 erreichte 2019 die erste weiche Landung auf der Mondrückseite und setzte den Rover Yutu-2 ab. Die Mission untersucht Geologie und Umwelt der Rückseite über ein Kommunikations-Relay."
        },
        events:[
          {date:"2018-12-07", label:"Launch", type:"start"},
          {date:"2019-01-03", label:"Far-side soft landing"},
          {date:"2019-01-03", label:"Yutu-2 rover deployed"}
        ]
      },
      {
        id:"chandrayaan2",
        cluster:"moon",
        type:"lunar",
        label:"🛰️ Chandrayaan-2 🇮🇳",
        name:"Chandrayaan-2 (orbiter)",
        url:"https://www.isro.gov.in/Chandrayaan2.html",
        summaries:{
          en:"Chandrayaan-2 includes an orbiter carrying instruments to study lunar surface composition, exosphere and water-ice signatures, supporting science and future resource assessment.",
          it:"Chandrayaan-2 include un orbiter con strumenti per studiare composizione superficiale, esosfera e possibili segnali di ghiaccio d’acqua, supportando scienza e valutazione di risorse future.",
          es:"Chandrayaan-2 (ISRO) incluye un orbitador operativo que estudia composición superficial, exosfera y posibles firmas de hielo de agua. Sus datos apoyan ciencia lunar y evaluación de sitios/recursos.",
          pt:"A Chandrayaan-2 (ISRO) inclui um orbitador operacional que estuda composição da superfície, exosfera e possíveis assinaturas de gelo de água. Seus dados apoiam ciência lunar e avaliação de sítios/recursos.",
          fr:"Chandrayaan-2 (ISRO) comprend un orbiteur opérationnel étudiant composition de surface, exosphère et signatures de glace d’eau. Ses données soutiennent la science lunaire et l’évaluation de sites/ressources.",
          de:"Chandrayaan-2 (ISRO) umfasst einen weiterhin aktiven Orbiter zur Untersuchung von Oberflächenzusammensetzung, Exosphäre und möglichen Wassereis-Signaturen. Die Daten unterstützen Mondforschung sowie Standort-/Ressourcenbewertung."
        },
        events:[{date:"2019-07-22", label:"Launch", type:"start"}]
      },
      {
        id:"danuri",
        cluster:"moon",
        type:"lunar",
        label:"🛰️ Danuri (KPLO) 🇰🇷",
        name:"Danuri / KPLO",
        url:"https://pda.kasi.re.kr/mission-danuri.php?lang=en",
        summaries:{
          en:"Danuri (KPLO) is South Korea’s lunar orbiter studying geology, resources and environment while demonstrating deep-space navigation and delivering high-quality imagery from lunar orbit.",
          it:"Danuri (KPLO) è l’orbiter lunare della Corea del Sud: studia geologia, risorse e ambiente e dimostra navigazione nello spazio profondo, fornendo immagini di qualità dalla orbita lunare.",
          es:"Danuri (KPLO) es el orbitador lunar de Corea del Sur para geología, recursos y entorno, apoyando exploración futura. Demuestra navegación de espacio profundo y proporciona imágenes y observaciones científicas.",
          pt:"A Danuri (KPLO) é o orbitador lunar da Coreia do Sul para geologia, recursos e ambiente, apoiando exploração futura. Demonstra navegação em espaço profundo e fornece imagens e observações científicas.",
          fr:"Danuri (KPLO) est l’orbiteur lunaire sud-coréen, dédié à géologie, ressources et environnement et au soutien d’une exploration future. Il démontre navigation lointaine et fournit imagerie et observations scientifiques.",
          de:"Danuri (KPLO) ist Südkoreas Mondorbiter zur Untersuchung von Geologie, Ressourcen und Umwelt sowie zur Unterstützung künftiger Exploration. Er demonstriert Deep-Space-Navigation und liefert hochwertige Bilddaten und Messungen."
        },
        events:[{date:"2022-08-05", label:"Launch", type:"start"}]
      },
      {
        id:"tiandu12",
        cluster:"moon",
        type:"lunar",
        label:"🌐🌐 Tiandu 1/2 🇨🇳",
        name:"Tiandu 1/2",
        url:"https://en.wikipedia.org/wiki/Tiandu",
        summaries:{
          en:"Tiandu 1/2 are Chinese spacecraft associated with lunar communications/navigation technology demonstrations, testing relay and positioning concepts in the Earth–Moon system.",
          it:"Tiandu 1/2 sono veicoli cinesi associati a dimostrazioni tecnologiche per comunicazioni/navigazione lunare, testando concetti di relay e posizionamento nel sistema Terra–Luna.",
          es:"Tiandu 1/2 son vehículos espaciales chinos destinados a demostraciones tecnológicas de comunicaciones y navegación lunar, que prueban conceptos de retransmisión y posicionamiento en el sistema Tierra–Luna.",
          pt:"Tiandu 1/2 são veículos espaciais chineses destinados a demonstrações tecnológicas de comunicações e navegação lunar, testando conceitos de retransmissão e posicionamento no sistema Terra–Lua.",
          fr:"Tiandu 1/2 sont des engins spatiaux chinois associés à des démonstrations technologiques de communication et de navigation lunaires, testant des concepts de relais et de positionnement dans le système Terre–Lune.",
          de:"Tiandu 1/2 sind chinesische Raumfahrzeuge für Technologiedemonstrationen zur Kommunikation und Navigation am Mond. Sie erproben Konzepte für die Signalweiterleitung und Positionsbestimmung im Erde–Mond-System."
        },
        events:[{date:"2024-03-20", label:"Launch", type:"start"}]
      },

      /* ===== L1 ===== */
      {
        id:"wind",
        cluster:"l1",
        type:"lagrange",
        label:"🛰️ WIND 🇺🇸",
        name:"WIND",
        url:"https://wind.nasa.gov/",
        summaries:{
          en:"WIND measures solar wind plasma, magnetic fields and energetic particles near Sun–Earth L1, providing long-term context for heliophysics and space-weather studies.",
          it:"WIND misura plasma del vento solare, campi magnetici e particelle energetiche vicino a L1 Sole–Terra, fornendo contesto di lungo periodo per eliofisica e space weather.",
          es:"WIND mide plasma del viento solar, campos magnéticos y partículas cerca de L1. Sus observaciones continuas aportan contexto para heliofísica y predicción del “space weather”.",
          pt:"A WIND mede plasma do vento solar, campos magnéticos e partículas perto de L1. Observações contínuas dão contexto para heliofísica e previsão do “space weather”.",
          fr:"WIND mesure plasma du vent solaire, champs magnétiques et particules près de la région L1. Ses observations continues fournissent un contexte essentiel pour l’héliophysique et la prévision de la météo spatiale.",
          de:"WIND misst Sonnenwind-Plasma, Magnetfelder und energiereiche Teilchen nahe L1. Die Langzeitdaten sind wichtig für Helio-Physik und Weltraumwetter-Vorhersage."
        },
        events:[
          {date:"1994-11-01", label:"Launch", type:"start"},
          {date:"1996-11", label:"Halo orbit insertion around L1"},
          {date:"2004", label:"Return to permanent L1 operations"},
          {date:"2019-11-01", label:"25 years of observations"}
        ]
      },
      {
        id:"soho",
        cluster:"l1",
        type:"lagrange",
        label:"🛰️ SOHO 🇪🇺🇺🇸",
        name:"SOHO",
        url:"https://soho.nascom.nasa.gov/",
        summaries:{
          en:"SOHO is a cornerstone ESA–NASA solar observatory at Sun–Earth L1. It studies the Sun’s interior, atmosphere and solar wind; its coronagraph images are iconic for tracking CMEs.",
          it:"SOHO è un osservatorio solare fondamentale ESA–NASA in L1 Sole–Terra. Studia interno e atmosfera del Sole e il vento solare; le sue immagini coronografiche sono iconiche per il tracciamento delle CME.",
          es:"SOHO (ESA–NASA) es un observatorio solar clave en L1 que estudia interior, atmósfera y viento solar. Sus coronógrafos siguen las CME, útiles para ciencia y monitorización del “space weather”.",
          pt:"O SOHO (ESA–NASA) é um observatório solar em L1 que estuda interior, atmosfera e vento solar. Seus coronógrafos acompanham CMEs, úteis para ciência e monitoramento do “space weather”.",
          fr:"SOHO (ESA–NASA) est un observatoire solaire clé à L1, étudiant intérieur, atmosphère et vent solaire. Ses coronographes suivent les éjections de masse coronale, utiles pour science et surveillance de la météo spatiale.",
          de:"SOHO (ESA–NASA) ist ein zentrales Sonnenobservatorium bei L1. Es untersucht Sonneninneres/Atmosphäre und Sonnenwind; die Koronographen verfolgen CMEs für Wissenschaft und Weltraumwetter-Monitoring."
        },
        events:[
          {date:"1995-12-02", label:"Launch", type:"start"},
          {date:"1996-02-14", label:"Halo L1 orbital insertion"},
          {date:"1998-06-25", label:"Contact lost"},
          {date:"1998-09-16", label:"Mission recovery complete"}
        ]
      },
      {
        id:"ace",
        cluster:"l1",
        type:"lagrange",
        label:"🛰️ ACE 🇺🇸",
        name:"ACE",
        url:"https://solarsystem.nasa.gov/missions/ace/in-depth/",
        summaries:{
          en:"ACE samples the solar wind and energetic particles near Sun–Earth L1. Its continuous upstream measurements are important for heliophysics and operational space-weather forecasting.",
          it:"ACE campiona il vento solare e particelle energetiche vicino a L1 Sole–Terra. Le sue misure continue “a monte” sono importanti per eliofisica e previsione operativa dello space weather.",
          es:"ACE toma muestras continuas del viento solar y partículas energéticas cerca de L1. Sus medidas “upstream” son valiosas para heliofísica y predicción operativa de tormentas geomagnéticas.",
          pt:"O ACE amostra continuamente o vento solar e partículas energéticas perto de L1. As medições a montante são valiosas para heliofísica e previsão operacional de tempestades geomagnéticas.",
          fr:"ACE échantillonne en continu le vent solaire et les particules énergétiques près de L1. Ses mesures amont sont précieuses pour l’héliophysique et les services opérationnels de prévision des tempêtes géomagnétiques.",
          de:"ACE misst kontinuierlich Sonnenwind und energiereiche Teilchen nahe L1. Diese Upstream-Daten sind wichtig für Helio-Physik und die operative Vorhersage geomagnetischer Stürme."
        },
        events:[
          {date:"1997-08-25", label:"Launch", type:"start"},
          {date:"1997-12-12", label:"Halo orbit insertion at L1"},
          {date:"2017-08-25", label:"20 years of operations"}
        ]
      },
      {
        id:"aditya",
        cluster:"l1",
        type:"lagrange",
        label:"🛰️ Aditya-L1 🇮🇳",
        name:"Aditya-L1",
        url:"https://www.isro.gov.in/Aditya_L1.html",
        summaries:{
          en:"Aditya-L1 is India’s solar observatory near Sun–Earth L1 to study the solar corona, flares and the solar wind environment with coronal imaging and in-situ measurements.",
          it:"Aditya-L1 è l’osservatorio solare indiano vicino a L1 Sole–Terra per studiare corona, brillamenti e ambiente del vento solare con imaging coronale e misure in situ.",
          es:"Aditya-L1 es el observatorio solar de India cerca de L1 para estudiar corona, fulguraciones y entorno del viento solar. Combina imagen coronal y medidas in situ para comprender mejor la actividad solar.",
          pt:"A Aditya-L1 é o observatório solar da Índia perto de L1 para estudar coroa, erupções e o ambiente do vento solar. Combina imagem coronal e medições in situ para entender melhor a atividade solar.",
          fr:"Aditya-L1 est l’observatoire solaire indien près de L1, dédié à la couronne, aux éruptions et à l’environnement du vent solaire. Il combine imagerie coronale et mesures in situ pour mieux comprendre l’activité solaire.",
          de:"Aditya-L1 ist Indiens Sonnenobservatorium nahe L1 zur Untersuchung von Korona, Flares und Sonnenwindumgebung. Es kombiniert Korona-Bildgebung mit In-situ-Messungen zur besseren Erklärung solarer Aktivität."
        },
        events:[
          {date:"2023-09-02", label:"Launch", type:"start"},
          {date:"2024-01-06", label:"Halo L1 orbital insertion"}
        ]
      },
      {
        id:"imap",
        cluster:"l1",
        type:"lagrange",
        label:"🛰️ IMAP 🇺🇸",
        name:"IMAP",
        url:"https://imap.princeton.edu/",
        summaries:{
          en:"IMAP studies the heliosphere boundary and local interstellar medium by mapping energetic neutral atoms and measuring particles/fields from a stable vantage near L1.",
          it:"IMAP studia il confine dell’eliosfera e il mezzo interstellare locale mappando atomi neutri energetici e misurando particelle/campi da una posizione stabile vicino a L1.",
          es:"IMAP estudiará el límite de la heliosfera y el medio interestelar local mapeando átomos neutros energéticos y midiendo partículas y campos desde una posición estable cerca de L1.",
          pt:"A IMAP estudará a fronteira da heliosfera e o meio interestelar local mapeando átomos neutros energéticos e medindo partículas e campos a partir de uma posição estável perto de L1.",
          fr:"IMAP étudiera la frontière de l’héliosphère et le milieu interstellaire local en cartographiant des atomes neutres énergétiques et en mesurant particules et champs depuis une position stable près de L1.",
          de:"IMAP untersucht die Heliosphären-Grenze und das lokale interstellare Medium, kartiert energiereiche neutrale Atome und misst Teilchen/Felder von einer stabilen Position nahe L1."
        },
        events:[
          {date:"2025-09-24", label:"Launch", type:"start"},
          {date:"2026-01-10", label:"Halo L1 orbital insertion"}
        ]
      },
      {
        id:"cgo",
        cluster:"l1",
        type:"lagrange",
        label:"🛰️ CGO 🇺🇸",
        name:"Carruthers Geocorona Observatory",
        url:"https://science.nasa.gov/mission/carruthers-geocorona-observatory/",
        summaries:{
          en:"Carruthers Geocorona Observatory is designed to image Earth’s geocorona in ultraviolet, improving understanding of the extended hydrogen envelope and its interaction with the solar wind.",
          it:"Il Carruthers Geocorona Observatory è progettato per osservare la geocorona terrestre in ultravioletto, migliorando la comprensione dell’involucro esteso di idrogeno e della sua interazione col vento solare.",
          es:"El Carruthers Geocorona Observatory observará en UV la geocorona terrestre (envoltura extendida de hidrógeno) y su variabilidad, para comprender mejor el entorno cercano a la Tierra y su interacción con el viento solar.",
          pt:"O Carruthers Geocorona Observatory observará em UV a geocorona da Terra (envelope estendido de hidrogênio) e sua variabilidade, para entender melhor o ambiente próximo à Terra e a interação com o vento solar.",
          fr:"Le Carruthers Geocorona Observatory observera en UV la géocouronne terrestre (enveloppe d’hydrogène étendue) et ses variations, afin de mieux comprendre l’environnement proche-Terre et ses interactions avec le vent solaire.",
          de:"Das Carruthers Geocorona Observatory wird die irdische Geokorona im UV abbilden und ihre Variabilität untersuchen, um die nahe Erdumgebung und die Wechselwirkung mit dem Sonnenwind besser zu verstehen."
        },
        events:[{date:"2025-09-24", label:"Launch", type:"start"}]
      },
      {
        id:"swfo",
        cluster:"l1",
        type:"lagrange",
        label:"🛰️ SOLAR-1 🇺🇸",
        name:"SOLAR-1 (ex SWFO-L1)",
        url:"https://www.nesdis.noaa.gov/our-satellites/future-programs/swfo/space-weather-follow-lagrange-1-swfo-l1",
        summaries:{
          en:"SOLAR-1 (Space weather Observations at L1 to Advance Readiness), formerly SWFO-L1, is NOAA’s spacecraft intended to provide operational solar-wind and magnetic-field measurements from Sun–Earth L1 to support forecasting of geomagnetic storms and other space-weather effects.",
          it:"SOLAR-1 (Space weather Observations at L1 to Advance Readiness), ex SWFO-L1, è il satellite NOAA pensato per fornire misure operative di vento solare e campo magnetico da L1 Sole–Terra, supportando la previsione di tempeste geomagnetiche e altri effetti di space weather.",
          es:"SOLAR-1 (antes SWFO-L1), satélite de la NOAA, proporciona medidas operativas continuas del viento solar y del campo magnético desde L1. El monitoreo “upstream” ayuda a predecir tormentas geomagnéticas e impactos en satélites, comunicaciones y redes eléctricas.",
          pt:"O SOLAR-1 (antigo SWFO-L1), satélite da NOAA, fornece medições operacionais contínuas do vento solar e do campo magnético a partir de L1. O monitoramento a montante ajuda a prever tempestades geomagnéticas e impactos em satélites, comunicações e redes elétricas.",
          fr:"SOLAR-1 (ex-SWFO-L1), satellite de la NOAA, fournit des mesures opérationnelles continues du vent solaire et du champ magnétique depuis L1. La surveillance amont aide à prévoir tempêtes géomagnétiques et impacts sur satellites, communications et réseaux électriques.",
          de:"SOLAR-1 (ehemals SWFO-L1), ein NOAA-Satellit, liefert kontinuierliche operative Messungen von Sonnenwind und Magnetfeld von L1 aus. Das Upstream-Monitoring unterstützt Vorhersagen geomagnetischer Stürme und Auswirkungen auf Satelliten, Kommunikation und Stromnetze."
        },
        events:[
          {date:"2025-09-24", label:"Launch", type:"start"},
          {date:"2026-01-23", label:"L1 orbit reached; renamed SOLAR-1"}
        ]
      },

      /* ===== L2 ===== */
      {
        id:"spek",
        cluster:"l2",
        type:"lagrange",
        label:"🛰️ Spektr-RG 🇷🇺🇩🇪",
        name:"Spektr-RG",
        url:"https://iki.cosmos.ru/en/research/missions/spektr-rg",
        summaries:{
          en:"Spektr-RG is an X-ray astronomy mission operating near Sun–Earth L2, conducting an all-sky survey and building large catalogs of high-energy sources for cosmology and astrophysics.",
          it:"Spektr-RG è una missione di astronomia X vicino a L2 Sole–Terra, dedicata a un survey all-sky e alla creazione di grandi cataloghi di sorgenti ad alta energia per cosmologia e astrofisica.",
          es:"Spektr-RG es una misión de astronomía de rayos X cerca de L2 que realiza un sondeo del cielo. Genera grandes catálogos de fuentes (cúmulos, AGN, etc.) útiles para cosmología y astrofísica.",
          pt:"A Spektr-RG é uma missão de astronomia de raios X perto de L2, realizando um levantamento do céu. Produz grandes catálogos de fontes (aglomerados, AGNs etc.) úteis para cosmologia e astrofísica.",
          fr:"Spektr-RG est une mission d’astronomie X près de L2, réalisant un relevé du ciel en rayons X. Elle produit de grands catalogues de sources (amas, AGN…) utiles pour cosmologie et astrophysique.",
          de:"Spektr-RG ist eine Röntgenastronomie-Mission nahe L2 mit einem All-Sky-Survey. Sie erstellt große Quellenkataloge (u.a. Galaxienhaufen, AGN) für Kosmologie und Astrophysik."
        },
        events:[{date:"2019-07-13", label:"Launch", type:"start"}]
      },
      {
        id:"jwst",
        cluster:"l2",
        type:"lagrange",
        label:"⭐ James Webb 🇺🇸🇪🇺🇨🇦",
        name:"James Webb Space Telescope",
        url:"https://webb.nasa.gov/",
        summaries:{
          en:"The James Webb Space Telescope is a large infrared observatory designed to study the early universe, galaxy evolution, star formation and exoplanet atmospheres. Operating around Sun–Earth L2, Webb’s sensitivity enables deep surveys and detailed spectroscopy of faint targets.",
          it:"Il James Webb Space Telescope è un grande osservatorio infrarosso per studiare universo primordiale, evoluzione delle galassie, formazione stellare e atmosfere di esopianeti. Attorno a L2 Sole–Terra, la sua sensibilità permette survey profondi e spettroscopia dettagliata di sorgenti deboli.",
          es:"JWST es un gran observatorio infrarrojo para estudiar el universo temprano, la evolución de galaxias, la formación estelar y atmósferas de exoplanetas. Desde L2 permite sondeos profundos y espectroscopía detallada de objetivos muy débiles.",
          pt:"O JWST é um grande observatório infravermelho para estudar o universo primordial, a evolução das galáxias, a formação estelar e atmosferas de exoplanetas. Em torno de L2, permite levantamentos profundos e espectroscopia detalhada de alvos muito fracos.",
          fr:"JWST est un grand observatoire infrarouge pour l’Univers primordial, l’évolution des galaxies, la formation stellaire et les atmosphères d’exoplanètes. En orbite autour de L2, il permet des relevés profonds et une spectroscopie détaillée de cibles très faibles.",
          de:"JWST ist ein großes Infrarot-Observatorium für frühes Universum, Galaxienentwicklung, Sternentstehung und Exoplanetenatmosphären. Um L2 ermöglicht es tiefe Surveys und detaillierte Spektroskopie sehr lichtschwacher Ziele."
        },
        events:[{date:"2021-12-25", label:"Launch", type:"start"}]
      },
      {
        id:"euclid",
        cluster:"l2",
        type:"lagrange",
        label:"⭐ Euclid 🇪🇺",
        name:"Euclid",
        url:"https://www.esa.int/Science_Exploration/Space_Science/Euclid",
        summaries:{
          en:"Euclid is an ESA cosmology mission to map the dark universe by surveying billions of galaxies and measuring weak lensing and clustering from Sun–Earth L2.",
          it:"Euclid è una missione ESA di cosmologia per mappare l’universo oscuro tramite survey di miliardi di galassie e misure di lensing debole e clustering da L2 Sole–Terra.",
          es:"Euclid cartografía el universo oscuro observando miles de millones de galaxias mediante lente gravitatoria débil y clustering. Desde L2 combina sondeos amplios y profundos para limitar materia oscura y energía oscura.",
          pt:"A Euclid mapeia o universo escuro observando bilhões de galáxias via lente gravitacional fraca e clustering. A partir de L2, combina levantamentos amplos e profundos para restringir matéria escura e energia escura.",
          fr:"Euclid cartographie l’Univers sombre en sondant des milliards de galaxies via lentilles gravitationnelles faibles et clustering. Depuis L2, il combine relevés larges et profonds pour contraindre matière noire et énergie noire.",
          de:"Euclid kartiert das „dunkle Universum“ durch schwache Gravitationslinsen und Galaxien-Clustering bei Milliarden Galaxien. Von L2 aus kombiniert es weite und tiefe Surveys zur Eingrenzung von Dunkler Materie und Dunkler Energie."
        },
        events:[{date:"2023-07-01", label:"Launch", type:"start"}]
      },
      {
        id:"roman",
        cluster:"l2",
        type:"lagrange",
        label:"⭐ Nancy Grace Roman 🇺🇸",
        name:"Nancy Grace Roman Space Telescope",
        url:"https://science.nasa.gov/mission/roman-space-telescope/",
        summaries:{
          en:"NASA’s Nancy Grace Roman Space Telescope is a wide-field infrared observatory launched on 30 August 2026 aboard a Falcon Heavy. Its destination is Sun–Earth L2, where it will survey large areas of the sky to study dark energy, dark matter, galaxy evolution and exoplanets. Its coronagraph will demonstrate technologies for directly imaging planets around other stars.",
          it:"Il Nancy Grace Roman Space Telescope della NASA è un osservatorio infrarosso ad ampio campo, lanciato il 30 agosto 2026 con un Falcon Heavy. La sua destinazione è L2 Sole–Terra, da dove esplorerà vaste regioni del cielo per studiare energia oscura, materia oscura, evoluzione delle galassie ed esopianeti. Il coronografo sperimenterà tecnologie per osservare direttamente pianeti attorno ad altre stelle.",
          es:"El telescopio espacial Nancy Grace Roman de la NASA es un observatorio infrarrojo de amplio campo, lanzado el 30 de agosto de 2026 en un Falcon Heavy. Su destino es L2 Sol–Tierra, desde donde observará grandes regiones del cielo para estudiar la energía oscura, la materia oscura, la evolución de las galaxias y los exoplanetas. Su coronógrafo demostrará tecnologías para obtener imágenes directas de planetas alrededor de otras estrellas.",
          pt:"O telescópio espacial Nancy Grace Roman da NASA é um observatório infravermelho de amplo campo, lançado em 30 de agosto de 2026 por um Falcon Heavy. Seu destino é L2 Sol–Terra, de onde observará grandes regiões do céu para estudar energia escura, matéria escura, evolução das galáxias e exoplanetas. Seu coronógrafo demonstrará tecnologias para obter imagens diretas de planetas ao redor de outras estrelas.",
          fr:"Le télescope spatial Nancy Grace Roman de la NASA est un observatoire infrarouge à grand champ, lancé le 30 août 2026 à bord d’une Falcon Heavy. Sa destination est L2 Soleil–Terre, d’où il observera de vastes régions du ciel pour étudier l’énergie sombre, la matière noire, l’évolution des galaxies et les exoplanètes. Son coronographe démontrera des technologies d’imagerie directe de planètes autour d’autres étoiles.",
          de:"Das Nancy Grace Roman Space Telescope der NASA ist ein Infrarotobservatorium mit großem Sichtfeld, das am 30. August 2026 mit einer Falcon Heavy gestartet wurde. Sein Ziel ist Sonne–Erde L2, von wo aus es große Himmelsbereiche untersuchen wird, um Dunkle Energie, Dunkle Materie, Galaxienentwicklung und Exoplaneten zu erforschen. Sein Koronograf wird Technologien zur direkten Abbildung von Planeten um andere Sterne demonstrieren."
        },
        events:[{date:"2026-08-30", label:"Launch (Falcon Heavy)", type:"start"}]
      },
      {
        id:"change6",
        cluster:"l2",
        type:"lagrange",
        label:"🛰️ Chang'e 6 🇨🇳 (orbiter)",
        name:"Chang'e 6",
        url:"https://en.wikipedia.org/wiki/Chang%27e_6",
        summaries:{
          en:"Chang’e-6 is a Chinese lunar sample-return mission designed for far-side materials, relying on relay architecture and complex Earth–Moon navigation including libration-region operations.",
          it:"Chang’e-6 è una missione cinese di prelievo e recupero di campioni progettata per materiali del lato nascosto, basata su relay e navigazione complessa Terra–Luna, includendo operazioni in regioni di librazione.",
          es:"Chang’e-6 es una misión china de retorno de muestras lunares diseñada para recoger materiales de la cara oculta. Se basa en una arquitectura de retransmisión y una navegación compleja entre la Tierra y la Luna, incluidas operaciones en regiones de libración.",
          pt:"A Chang’e-6 é uma missão chinesa de retorno de amostras lunares concebida para coletar materiais do lado oculto. Baseia-se em uma arquitetura de retransmissão e em navegação complexa entre a Terra e a Lua, incluindo operações em regiões de libração.",
          fr:"Chang’e-6 est une mission chinoise de retour d’échantillons lunaires conçue pour prélever des matériaux sur la face cachée. Elle repose sur une architecture de relais et une navigation complexe entre la Terre et la Lune, comprenant des opérations dans les régions de libration.",
          de:"Chang’e-6 ist eine chinesische Mission zur Rückführung von Mondproben, die für Material von der Mondrückseite konzipiert wurde. Sie nutzt eine Relaisarchitektur und komplexe Navigation zwischen Erde und Mond, einschließlich des Betriebs in Librationsregionen."
        },
        events:[
          {date:"2024-05-03", label:"Launch", type:"start"},
          {date:"2024-09-09", label:"L2 orbital insertion"}
        ]
      },

      /* ===== MARS ===== */
      {
        id:"odyssey",
        cluster:"mars",
        type:"generic",
        label:"🛰️ Mars Odyssey 🇺🇸",
        name:"Mars Odyssey",
        url:"https://science.nasa.gov/mission/odyssey/",
        summaries:{
          en:"Mars Odyssey is a long-lived NASA orbiter studying Martian geology and climate and serving as a communications relay for surface missions.",
          it:"Mars Odyssey è un orbiter NASA di lunga durata che studia geologia e clima marziani e funge da relay di comunicazioni per missioni di superficie.",
          es:"Mars Odyssey es un orbitador de larga duración que estudia geología y clima de Marte y actúa como relay de comunicaciones para misiones de superficie. Ha cartografiado firmas relacionadas con agua y sigue apoyando operaciones.",
          pt:"A Mars Odyssey é um orbitador de longa duração que estuda geologia e clima de Marte e atua como relé de comunicações para missões de superfície. Mapeou assinaturas relacionadas à água e continua apoiando operações.",
          fr:"Mars Odyssey est un orbiteur NASA de longue durée qui étudie géologie et climat martiens et sert aussi de relais de communications pour les missions de surface. Il a cartographié des signatures liées à l’eau et continue à soutenir les opérations.",
          de:"Mars Odyssey ist ein langlebiger NASA-Orbiter zur Erforschung von Mars-Geologie und -Klima und dient zudem als Kommunikations-Relay. Er kartierte u.a. wasserbezogene Signaturen und unterstützt weiterhin Oberflächenmissionen."
        },
        events:[
          {date:"2001-04-07", label:"Launch", type:"start"},
          {date:"2001-10-24", label:"Mars orbit insertion"}
        ]
      },
      {
        id:"marsExpress",
        cluster:"mars",
        type:"generic",
        label:"🛰️ Mars Express 🇪🇺",
        name:"Mars Express",
        url:"https://www.esa.int/Science_Exploration/Space_Science/Mars_Express",
        summaries:{
          en:"Mars Express is ESA’s first mission to Mars, studying atmosphere, surface and subsurface with long-term monitoring supporting the broader Mars exploration program.",
          it:"Mars Express è la prima missione ESA su Marte: studia atmosfera, superficie e sottosuolo e fornisce monitoraggio di lungo periodo al programma di esplorazione marziana.",
          es:"Mars Express, primera misión de la ESA a Marte, estudia atmósfera, superficie y subsuelo. Aporta monitorización de largo plazo y resultados clave sobre historia del agua y escape atmosférico.",
          pt:"A Mars Express, primeira missão da ESA a Marte, estuda atmosfera, superfície e subsolo. Fornece monitoramento de longo prazo e resultados importantes sobre história da água e escape atmosférico.",
          fr:"Mars Express, première mission martienne de l’ESA, étudie atmosphère, surface et sous-surface. Elle fournit un suivi de longue durée et des résultats clés sur l’histoire de l’eau et l’échappement atmosphérique.",
          de:"Mars Express, ESAs erste Marsmission, untersucht Atmosphäre, Oberfläche und Untergrund. Sie liefert Langzeit-Monitoring sowie wichtige Ergebnisse zur Wassergeschichte und zum atmosphärischen Verlust."
        },
        events:[
          {date:"2003-06-02", label:"Launch", type:"start"},
          {date:"2003-12-25", label:"Mars orbit insertion"}
        ]
      },
      {
        id:"mro",
        cluster:"mars",
        type:"generic",
        label:"🛰️ MRO 🇺🇸 (orbiter)",
        name:"Mars Reconnaissance Orbiter",
        url:"https://mars.nasa.gov/mro/",
        summaries:{
          en:"MRO provides high-resolution imaging and spectroscopy of Mars, monitors climate, scouts landing sites and serves as a vital communications relay.",
          it:"MRO fornisce immagini e spettroscopia ad alta risoluzione, monitora il clima, seleziona siti di atterraggio ed è un relay di comunicazioni essenziale.",
          es:"MRO aporta imágenes y espectroscopía de altísima resolución de Marte, monitoriza el clima y evalúa sitios de aterrizaje. También es un relay de comunicaciones clave para misiones de superficie.",
          pt:"O MRO fornece imagens e espectroscopia de altíssima resolução de Marte, monitora o clima e avalia locais de pouso. Também é um relé de comunicações vital para missões de superfície.",
          fr:"MRO fournit une imagerie et une spectroscopie très haute résolution de Mars, surveille le climat et repère des sites d’atterrissage. Il sert aussi de relais de communications essentiel pour les missions de surface.",
          de:"MRO liefert hochauflösende Bildgebung und Spektroskopie des Mars, überwacht das Klima und erkundet Landeplätze. Zudem ist es ein zentraler Kommunikations-Relay für Oberflächenmissionen."
        },
        events:[
          {date:"2005-08-12", label:"Launch", type:"start"},
          {date:"2006-03-10", label:"Mars orbit insertion"}
        ]
      },
      {
        id:"curiosity",
        cluster:"mars",
        type:"rover",
        label:"🚙 Curiosity 🇺🇸",
        name:"Curiosity (MSL)",
        url:"https://mars.nasa.gov/msl/home/",
        summaries:{
          en:"Curiosity explores Gale Crater since 2012 to assess past habitability, studying rocks, sediments and organics and measuring radiation and environmental conditions.",
          it:"Curiosity esplora il cratere Gale dal 2012 per valutare l’abitabilità passata, studiando rocce, sedimenti e organici e misurando radiazione e condizioni ambientali.",
          es:"Curiosity explora el cráter Gale desde 2012 para evaluar la habitabilidad pasada. Analiza rocas y sedimentos, mide el entorno y continúa un recorrido que ayuda a entender la transición de Marte hacia su estado actual.",
          pt:"O Curiosity explora a cratera Gale desde 2012 para avaliar a habitabilidade passada. Analisa rochas e sedimentos, mede o ambiente e segue uma longa travessia que esclarece a evolução de Marte até o estado atual.",
          fr:"Curiosity explore le cratère Gale depuis 2012 pour évaluer l’habitabilité passée. Il analyse roches et sédiments, mesure l’environnement et poursuit une traversée qui éclaire l’évolution de Mars d’un passé plus humide à l’état actuel.",
          de:"Curiosity erkundet seit 2012 den Gale-Krater, um frühere Bewohnbarkeit zu bewerten. Es untersucht Gestein/Sedimente, misst Umweltbedingungen und verfolgt eine Langzeitroute, die den Wandel des Mars von einem feuchteren früheren Zustand zum heutigen erklärt."
        },
        events:[
          {date:"2011-11-26", label:"Launch", type:"start"},
          {date:"2012-08-06", label:"Landing"}
        ]
      },
      {
        id:"tgo",
        cluster:"mars",
        type:"generic",
        label:"🛰️ TGO ExoMars 🇪🇺",
        name:"ExoMars Trace Gas Orbiter",
        url:"https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/Exploration/ExoMars",
        summaries:{
          en:"ExoMars TGO studies trace gases (including methane) in the Martian atmosphere and also serves as a communications relay, supporting science and mission planning.",
          it:"ExoMars TGO studia gas in tracce (incluso il metano) nell’atmosfera marziana e funge anche da relay, supportando scienza e pianificazione di missioni future.",
          es:"ExoMars TGO mide con precisión gases traza (incluido metano) en la atmósfera marciana y actúa como relay. Sus datos apoyan la comprensión atmosférica y la planificación de futuras misiones.",
          pt:"O ExoMars TGO mede com precisão gases traço (incluindo metano) na atmosfera marciana e atua como relé. Seus dados apoiam a compreensão atmosférica e o planejamento de futuras missões.",
          fr:"ExoMars TGO mesure avec précision les gaz en trace (dont le méthane) dans l’atmosphère martienne et sert de relais. Ses données soutiennent la compréhension des processus atmosphériques et la planification de missions futures.",
          de:"ExoMars TGO misst Spurengase (u.a. Methan) in der Marsatmosphäre hochpräzise und dient als Kommunikations-Relay. Die Daten unterstützen Atmosphärenforschung und Missionsplanung."
        },
        events:[
          {date:"2016-03-14", label:"Launch", type:"start"},
          {date:"2016-10-19", label:"Mars orbit insertion"},
          {date:"2016-10-19", label:"Schiaparelli probe crash"}
        ]
      },
      {
        id:"hope",
        cluster:"mars",
        type:"generic",
        label:"🛰️ EMM/Hope 🇦🇪",
        name:"Emirates Mars Mission (Hope)",
        url:"https://space.gov.ae/en/initiatives-and-projects/emirates-mars-mission",
        summaries:{
          en:"Hope is the UAE’s first interplanetary mission: an orbiter studying Mars’ atmosphere and weather globally, including how hydrogen and oxygen escape to space.",
          it:"Hope è la prima missione interplanetaria degli Emirati Arabi Uniti: un orbiter che studia atmosfera e meteorologia marziane su scala globale, incluso come idrogeno e ossigeno sfuggono nello spazio.",
          es:"Hope, primera misión interplanetaria de EAU, es un orbitador que estudia la atmósfera y el clima marcianos a escala global. Busca entender variaciones diarias/estacionales y el escape de hidrógeno y oxígeno.",
          pt:"A Hope, primeira missão interplanetária dos EAU, é um orbitador que estuda a atmosfera e o tempo marciano em escala global. Busca entender variações diárias/sazonais e o escape de hidrogênio e oxigênio.",
          fr:"Hope, première mission interplanétaire des Émirats, est un orbiteur étudiant l’atmosphère et la météo martiennes à l’échelle globale. Il vise à comprendre les variations journalières/saisonnières et l’échappement d’hydrogène et d’oxygène.",
          de:"Hope, die erste interplanetare Mission der VAE, ist ein Orbiter zur globalen Untersuchung von Marsatmosphäre und Wetter. Ziel ist das Verständnis von Tages-/Saisonvariationen sowie des Entweichens von Wasserstoff und Sauerstoff."
        },
        events:[
          {date:"2020-07-20", label:"Launch", type:"start"},
          {date:"2021-02", label:"Mars orbit insertion"}
        ]
      },
      {
        id:"tianwen1",
        cluster:"mars",
        type:"generic",
        label:"🛸 Tianwen-1 🇨🇳 (orbiter)",
        name:"Tianwen-1",
        url:"https://en.wikipedia.org/wiki/Tianwen-1",
        summaries:{
          en:"Tianwen-1 is China’s first independent Mars mission. The orbiter continues Mars science and communications support after demonstrating complex deep-space navigation and multi-element operations.",
          it:"Tianwen-1 è la prima missione marziana indipendente cinese. L’orbiter continua scienza e supporto comunicazioni dopo aver dimostrato navigazione complessa e operazioni multi-elemento.",
          es:"Tianwen-1 es la primera misión marciana independiente de China, con orbitador y rover (Zhurong). El orbitador continúa estudios y sirve de relay, demostrando navegación y operaciones complejas.",
          pt:"A Tianwen-1 é a primeira missão marciana independente da China, com orbitador e rover (Zhurong). O orbitador continua estudos e atua como relé, demonstrando navegação e operações complexas.",
          fr:"Tianwen-1 est la première mission martienne indépendante de la Chine, avec orbiteur et rover (Zhurong). L’orbiteur poursuit l’étude de Mars et assure des fonctions de relais, démontrant navigation interplanétaire et opérations complexes.",
          de:"Tianwen-1 ist Chinas erste eigenständige Marsmission mit Orbiter und Rover (Zhurong). Der Orbiter setzt Untersuchungen fort und unterstützt die Kommunikation – ein Nachweis komplexer Deep-Space-Navigation und Multi-Element-Operationen."
        },
        events:[
          {date:"2020-07-23", label:"Launch", type:"start"},
          {date:"2021-02-10", label:"Mars orbit insertion"},
          {date:"2021-05-14", label:"Zhurong landing"},
          {date:"2022-05-20", label:"Zhurong hibernation"}
        ]
      },
      {
        id:"perseverance",
        cluster:"mars",
        type:"rover",
        label:"🚙 Perseverance 🇺🇸",
        name:"Perseverance (Mars 2020)",
        url:"https://mars.nasa.gov/mars2020/",
        summaries:{
          en:"Perseverance explores Jezero Crater to search for signs of ancient life and collect samples for potential return. It also demonstrated Ingenuity, expanding future Mars exploration capabilities.",
          it:"Perseverance esplora Jezero per cercare tracce di vita antica e raccogliere campioni per un possibile ritorno. Ha anche dimostrato Ingenuity, ampliando le capacità per future esplorazioni marziane.",
          es:"Perseverance explora el cráter Jezero para buscar señales de vida antigua y recolectar muestras. Lleva instrumentos de geología/astrobiología y demostró nuevas capacidades con el helicóptero Ingenuity.",
          pt:"O Perseverance explora a cratera Jezero para buscar sinais de vida antiga e coletar amostras. Leva instrumentos de geologia/astrobiologia e demonstrou novas capacidades com o helicóptero Ingenuity.",
          fr:"Perseverance explore le cratère Jezero pour rechercher des indices de vie ancienne et collecter des échantillons. Il embarque des instruments de géologie/astrobiologie et a démontré de nouvelles capacités via l’hélicoptère Ingenuity.",
          de:"Perseverance erkundet den Jezero-Krater, sucht nach Spuren früheren Lebens und sammelt Proben für eine mögliche Rückführung. Geologie-/Astrobiologie-Instrumente an Bord; zudem demonstrierte die Mission neue Fähigkeiten mit dem Helikopter Ingenuity."
        },
        events:[
          {date:"2020-07-30", label:"Launch", type:"start"},
          {date:"2021-02-18", label:"Landing"},
          {date:"2021-04-19", label:"Ingenuity first flight"}
        ]
      },
      {
        id:"escapade",
        cluster:"mars",
        type:"generic",
        label:"🛰️🛰️ EscaPADE 🇺🇸",
        name:"EscaPADE",
        url:"https://escapade.ssl.berkeley.edu/",
        summaries:{
          en:"EscaPADE is a twin-spacecraft mission designed to study solar-wind interaction with Mars’ magnetosphere/atmosphere and help explain atmospheric loss, separating spatial vs temporal variability with coordinated measurements.",
          it:"EscaPADE è una missione a due sonde per studiare l’interazione del vento solare con magnetosfera/atmosfera di Marte e chiarire la perdita atmosferica, distinguendo variabilità spaziale e temporale con misure coordinate.",
          es:"EscaPADE es una misión de dos sondas para estudiar la interacción del viento solar con la magnetosfera y la atmósfera de Marte y la pérdida atmosférica. Medidas coordinadas separan variabilidad espacial y temporal.",
          pt:"A EscaPADE é uma missão com duas sondas para estudar a interação do vento solar com a magnetosfera e a atmosfera de Marte e a perda atmosférica. Medições coordenadas separam variabilidade espacial e temporal.",
          fr:"EscaPADE est une mission à deux sondes étudiant l’interaction vent solaire–magnétosphère/atmosphère martienne et la perte atmosphérique. Les mesures coordonnées aident à distinguer variabilité spatiale et temporelle des processus plasma.",
          de:"EscaPADE ist eine Zwei-Sonden-Mission zur Untersuchung der Wechselwirkung des Sonnenwinds mit Mars-Magnetosphäre und -Atmosphäre sowie des Atmosphärenverlusts. Koordinierte Messungen trennen räumliche von zeitlicher Variabilität in Plasmaprozessen."
        },
        events:[
          {date:"2025-11-13", label:"Launch", type:"start"},
          {date:"2027-09", label:"Mars orbit insertion"}
        ]
      },

      /* ===== ASTEROIDS ===== */
      {
        id:"hayabusa2",
        cluster:"asteroids",
        type:"generic",
        label:"🛸 Hayabusa 2 🇯🇵",
        name:"Hayabusa2",
        url:"https://www.hayabusa2.jaxa.jp/en/",
        summaries:{
          en:"Hayabusa2 returned samples from asteroid Ryugu and continues extended operations to additional targets, demonstrating precision navigation and sample return from primitive bodies.",
          it:"Hayabusa2 ha riportato campioni dall’asteroide Ryugu e continua una missione estesa verso altri target, dimostrando navigazione di precisione e prelievo e recupero di campioni da corpi primitivi.",
          es:"Hayabusa2 devolvió muestras del asteroide Ryugu y continúa una misión extendida a otros objetivos. Demostró navegación precisa, interacción con la superficie y retorno de muestras, clave para estudiar cuerpos primitivos.",
          pt:"A Hayabusa2 trouxe amostras do asteroide Ryugu e continua uma missão estendida a outros alvos. Demonstrou navegação precisa, interação com a superfície e retorno de amostras, essenciais para estudar corpos primitivos.",
          fr:"Hayabusa2 a rapporté des échantillons de l’astéroïde Ryugu et poursuit une mission étendue vers d’autres cibles. Elle a démontré navigation de précision, interaction avec la surface et retour d’échantillons, essentiels pour l’étude des corps primitifs.",
          de:"Hayabusa2 brachte Proben vom Asteroiden Ryugu zur Erde zurück und läuft in einer erweiterten Mission zu weiteren Zielen. Präzisionsnavigation, Oberflächenkontakt und Sample-Return liefern Schlüsselwissen über primitive Kleinkörper."
        },
        events:[
          {date:"2014-12-03", label:"Launch", type:"start"},
          {date:"2026-07-05", label:"(98943) Torifune flyby"},
          {date:"2031", label:"(162173) 1998 KY26"}
        ]
      },
      {
        id:"osirisApex",
        cluster:"asteroids",
        type:"generic",
        label:"🛸 OSIRIS-APEX 🇺🇸",
        name:"OSIRIS-APEX",
        url:"https://science.nasa.gov/mission/osiris-apex/",
        summaries:{
          en:"OSIRIS-APEX extends OSIRIS-REx after Bennu sample return, targeting asteroid Apophis for close observation during its 2029 Earth flyby to study surface changes and properties.",
          it:"OSIRIS-APEX estende OSIRIS-REx dopo il prelievo e recupero di campioni da Bennu, puntando all’asteroide Apophis durante il flyby del 2029 per studiare proprietà e cambiamenti superficiali.",
          es:"OSIRIS-APEX es la misión extendida de OSIRIS-REx tras el retorno de muestras de Bennu. Observará de cerca el asteroide Apophis durante su paso de 2029 para estudiar propiedades y cambios superficiales.",
          pt:"A OSIRIS-APEX é a missão estendida da OSIRIS-REx após o retorno de amostras de Bennu. Observará de perto o asteroide Apophis no flyby de 2029 para estudar propriedades e mudanças na superfície.",
          fr:"OSIRIS-APEX est la mission prolongée d’OSIRIS-REx après le retour d’échantillons de Bennu. Elle observera de près l’astéroïde Apophis lors de son passage de 2029, pour étudier ses propriétés et changements de surface.",
          de:"OSIRIS-APEX ist die erweiterte Mission von OSIRIS-REx nach dem Bennu-Sample-Return. Sie untersucht den Asteroiden Apophis beim nahen Vorbeiflug 2029, um Eigenschaften und mögliche Oberflächenänderungen zu messen."
        },
        events:[
          {date:"2016-09-08", label:"OSIRIS-REx launch", type:"start"},
          {date:"2022-04", label:"Extension approved as OSIRIS-APEX"},
          {date:"2023-09-24", label:"Bennu sample capsule delivered to Earth; spacecraft continues as OSIRIS-APEX"},
          {date:"2029-04", label:"Arrival at Apophis (after its 13 Apr 2029 Earth flyby)"}
        ]
      },
      {
        id:"lucy",
        cluster:"asteroids",
        type:"generic",
        label:"🛸 Lucy 🇺🇸",
        name:"Lucy",
        url:"https://lucy.swri.edu/",
        summaries:{
          en:"Lucy explores Jupiter Trojan asteroids via multiple flybys, comparing diverse primitive bodies that may preserve clues to early solar-system formation.",
          it:"Lucy esplora gli asteroidi troiani di Giove con molteplici flyby, confrontando corpi primitivi che possono conservare indizi sulla formazione del primo Sistema Solare.",
          es:"Lucy explorará asteroides troyanos de Júpiter mediante múltiples sobrevuelos para comparar composición e historia de estos cuerpos primitivos. Los troyanos pueden conservar pistas del sistema solar temprano.",
          pt:"A Lucy explorará asteroides troianos de Júpiter com múltiplos flybys para comparar composição e história desses corpos primitivos. Troianos podem preservar pistas do início do Sistema Solar.",
          fr:"Lucy explore des astéroïdes troyens de Jupiter via une tournée de survols, pour comparer composition et histoire de ces corps primitifs. Les troyens peuvent conserver des indices sur les premiers réservoirs de matière du Système solaire.",
          de:"Lucy untersucht Jupiter-Trojaner in einer Serie von Flybys, um Zusammensetzung und Geschichte dieser primitiven Körper zu vergleichen. Trojaner könnten Hinweise auf frühe Materiereservoire des Sonnensystems bewahren."
        },
        events:[
          {date:"2021-10-16", label:"Launch", type:"start"},
          {date:"2023-11-01", label:"(152830) Dinkinesh flyby"},
          {date:"2025-04-20", label:"(52246) Donaldjohanson flyby"},
          {date:"2027-08-12", label:"(3548) Eurybates flyby"},
          {date:"2027-09-15", label:"(15094) Polymele flyby"},
          {date:"2028-04-18", label:"(11351) Leucus flyby"},
          {date:"2028-11-11", label:"(21900) Orus flyby"}
        ]
      },
      {
        id:"psyche",
        cluster:"asteroids",
        type:"generic",
        label:"🛸 Psyche 🇺🇸",
        name:"Psyche",
        url:"https://psyche.ssl.berkeley.edu/",
        summaries:{
          en:"Psyche visits asteroid (16) Psyche, thought to be metal-rich and possibly an exposed core, mapping composition, gravity and magnetic properties to inform planetesimal differentiation.",
          it:"Psyche visita l’asteroide (16) Psyche, ritenuto ricco di metalli e forse un nucleo esposto, mappando composizione, gravità e proprietà magnetiche per capire la differenziazione dei planetesimi.",
          es:"Psyche visitará el asteroide (16) Psyche, rico en metal y quizá un núcleo expuesto de un planetesimal. Al mapear composición, gravedad y magnetismo, ayudará a entender la diferenciación de cuerpos tempranos.",
          pt:"A Psyche visitará o asteroide (16) Psyche, rico em metal e possivelmente um núcleo exposto de um planetesimal. Ao mapear composição, gravidade e magnetismo, ajuda a entender a diferenciação dos primeiros corpos.",
          fr:"Psyche visitera l’astéroïde métallique (16) Psyche, potentiellement le noyau exposé d’un planétésimal. En cartographiant composition, gravité et magnétisme, la mission éclaire la différenciation des premiers corps planétaires.",
          de:"Psyche besucht den metallreichen Asteroiden (16) Psyche, möglicherweise ein freigelegter Kern eines frühen Planetesimals. Kartierung von Zusammensetzung, Gravitation und Magnetismus beleuchtet die Differenzierung planetarer Bausteine."
        },
        events:[
          {date:"2023-10-13", label:"Launch", type:"start"},
          {date:"2029-08", label:"(16) Psyche orbital insertion"}
        ]
      },
      {
        id:"hera",
        cluster:"asteroids",
        type:"generic",
        label:"🛸 Hera 🇪🇺",
        name:"Hera",
        url:"https://www.esa.int/Space_Safety/Hera",
        summaries:{
          en:"Hera characterizes the Didymos binary asteroid system and measures the effects of NASA’s DART impact, improving understanding of kinetic-impact techniques for planetary defense.",
          it:"Hera caratterizza il sistema binario Didymos e misura gli effetti dell’impatto DART, migliorando la comprensione delle tecniche di deflessione con impattatore cinetico per la difesa planetaria.",
          es:"Hera viajará al sistema binario Didymos para medir los efectos del impacto DART y caracterizar el asteroide y su luna. Ayuda a entender técnicas de impacto cinético para defensa planetaria.",
          pt:"A Hera irá ao sistema binário Didymos para medir os efeitos do impacto DART e caracterizar o asteroide e sua lua. Ajuda a entender técnicas de impacto cinético para defesa planetária.",
          fr:"Hera se rend au système binaire Didymos pour mesurer les effets de l’impact DART et caractériser l’astéroïde et sa lune. Les résultats améliorent la compréhension des techniques d’impact cinétique pour la défense planétaire.",
          de:"Hera fliegt zum binären Didymos-System, misst die Folgen des DART-Impacts und charakterisiert Asteroid und Mond. Die Ergebnisse verbessern das Verständnis kinetischer Impaktoren für die planetare Verteidigung."
        },
        events:[
          {date:"2024-10-07", label:"Launch", type:"start"},
          {date:"2025-03-12", label:"Mars flyby"},
          {date:"2026-11", label:"Didymos orbital insertion"}
        ]
      },
      {
        id:"tianwen2",
        cluster:"asteroids",
        type:"generic",
        label:"🛸 Tianwen-2 🇨🇳",
        name:"Tianwen-2",
        url:"https://en.wikipedia.org/wiki/Tianwen-2",
        summaries:{
          en:"Tianwen-2 targets a near-Earth asteroid for sampling and later a comet flyby, aiming to study primitive materials and small-body evolution with a multi-target tour.",
          it:"Tianwen-2 punta al campionamento di un asteroide near-Earth e poi a un flyby cometario, per studiare materiali primitivi ed evoluzione dei piccoli corpi con una missione multi-target.",
          es:"Tianwen-2 apunta a muestrear un asteroide cercano a la Tierra y luego explorar un cometa para estudiar materiales primitivos y la evolución de cuerpos menores. Misiones multiobjetivo comparan distintos reservorios de materia temprana.",
          pt:"A Tianwen-2 pretende coletar amostras de um asteroide próximo da Terra e depois explorar um cometa para estudar materiais primitivos e a evolução de pequenos corpos. Missões multi-alvo comparam diferentes reservatórios de matéria antiga.",
          fr:"Tianwen-2 vise l’échantillonnage d’un astéroïde proche de la Terre puis l’exploration d’une comète, pour étudier des matériaux primitifs et l’évolution des petits corps. Les missions multi-cibles comparent différents réservoirs de matière ancienne.",
          de:"Tianwen-2 zielt auf die Probenahme eines erdnahen Asteroiden und später die Erkundung eines Kometen, um primitive Materialien und die Entwicklung kleiner Körper zu untersuchen. Mehrziel-Missionen erlauben Vergleiche verschiedener Materiereservoire des frühen Sonnensystems."
        },
        events:[
          {date:"2025-05-28", label:"Launch", type:"start"},
          {date:"2026-07-04", label:"Arrival at (469219) Kamoʻoalewa; sampling campaign Jul 2026–Apr 2027"},
          {date:"2027-11-29", label:"Sample return capsule landing (planned)"},
          {date:"2033", label:"311P/PANSTARRS comet flyby"}
        ]
      },

      /* ===== JUPITER ===== */
      {
        id:"juno",
        cluster:"jupiter",
        type:"generic",
        label:"🛰️ Juno 🇺🇸 (orbiter)",
        name:"Juno",
        url:"https://www.nasa.gov/mission_pages/juno/main/index.html",
        summaries:{
          en:"Juno orbits Jupiter to study interior structure, atmosphere and magnetosphere via gravity, magnetic-field and composition measurements, reshaping models of giant-planet formation.",
          it:"Juno orbita Giove per studiarne struttura interna, atmosfera e magnetosfera con misure di gravità, campo magnetico e composizione, migliorando i modelli di formazione dei pianeti giganti.",
          es:"Juno estudia el interior, la atmósfera y la magnetosfera de Júpiter. Sus medidas de gravedad, campo magnético y composición profunda mejoran modelos de formación y ofrecen vistas espectaculares de nubes y auroras.",
          pt:"A Juno estuda o interior, a atmosfera e a magnetosfera de Júpiter. Medições de gravidade, campo magnético e composição profunda refinam modelos de formação e oferecem vistas espetaculares de nuvens e auroras.",
          fr:"Juno étudie l’intérieur, l’atmosphère et la magnétosphère de Jupiter. Les mesures de gravité, champ magnétique et composition profonde améliorent les modèles de formation des géantes et fournissent des vues spectaculaires des nuages et aurores.",
          de:"Juno erforscht Jupiters Inneres, Atmosphäre und Magnetosphäre. Messungen von Gravitation, Magnetfeld und tiefer Zusammensetzung verbessern Modelle der Gasriesen-Entstehung und liefern eindrucksvolle Ansichten von Wolken und Polarlichtern."
        },
        events:[
          {date:"2011-08-05", label:"Launch", type:"start"},
          {date:"2016-07-05", label:"Jupiter orbital insertion"}
        ]
      },
      {
        id:"juice",
        cluster:"jupiter",
        type:"generic",
        label:"🛸 JUICE 🇪🇺",
        name:"JUICE",
        url:"https://www.esa.int/Science_Exploration/Space_Science/Juice",
        summaries:{
          en:"JUICE studies Jupiter and its icy moons, focusing on habitability and subsurface oceans, and will eventually orbit Ganymede for detailed measurements.",
          it:"JUICE studia Giove e le sue lune ghiacciate, con focus su abitabilità e oceani sotterranei, e infine orbiterà Ganimede per misure dettagliate.",
          es:"JUICE (ESA) estudiará Júpiter y sus lunas heladas, con foco en Ganímedes, Calisto y Europa. Investigará habitabilidad, océanos internos e interacciones magnetosféricas y finalmente orbitará Ganímedes.",
          pt:"A JUICE (ESA) estudará Júpiter e suas luas geladas, com foco em Ganimedes, Calisto e Europa. Investigará habitabilidade, oceanos internos e interações magnetosféricas e, por fim, orbitará Ganimedes.",
          fr:"JUICE (ESA) étudiera Jupiter et ses lunes glacées, en se concentrant sur Ganymède, Callisto et Europe. Elle investiguera habitabilité, océans internes et interactions magnétosphériques, puis orbitera Ganymède pour des mesures détaillées.",
          de:"JUICE (ESA) untersucht Jupiter und seine Eismonde mit Fokus auf Ganymed, Kallisto und Europa. Es geht um Habitabilität, unterirdische Ozeane und magnetosphärische Wechselwirkungen; später wird JUICE Ganymed umkreisen."
        },
        events:[
          {date:"2023-04-14", label:"Launch", type:"start"},
          {date:"2031-07", label:"Jupiter orbital insertion"}
        ]
      },
      {
        id:"europaClipper",
        cluster:"jupiter",
        type:"generic",
        label:"🛸 Europa Clipper 🇺🇸",
        name:"Europa Clipper",
        url:"https://europa.nasa.gov/",
        summaries:{
          en:"Europa Clipper assesses Europa’s habitability through multiple flybys, studying ice shell, subsurface ocean, composition and geology and searching for possible plumes.",
          it:"Europa Clipper valuta l’abitabilità di Europa con molti flyby, studiando guscio di ghiaccio, oceano sotterraneo, composizione e geologia e cercando eventuali pennacchi.",
          es:"Europa Clipper evaluará la habitabilidad de Europa con múltiples sobrevuelos, estudiando hielo, océano, composición y geología, y buscando posibles plumas. Proveerá contexto para futuras misiones de aterrizaje o muestreo.",
          pt:"A Europa Clipper avaliará a habitabilidade de Europa com múltiplos flybys, estudando gelo, oceano, composição e geologia e buscando possíveis plumas. Fornecerá contexto para futuras missões de pouso ou amostragem.",
          fr:"Europa Clipper évaluera l’habitabilité d’Europe via de multiples survols, étudiant glace, océan, composition et géologie et recherchant d’éventuels panaches. Elle fournira un contexte clé pour de futures missions d’atterrissage ou d’échantillonnage.",
          de:"Europa Clipper bewertet die Habitabilität von Europa durch viele Flybys, untersucht Eisschale, Ozean, Zusammensetzung und Geologie und sucht nach möglichen Plumes. Die Daten liefern Schlüsselkontext für künftige Lander- oder Probenmissionen."
        },
        events:[
          {date:"2024-10-14", label:"Launch", type:"start"},
          {date:"2030-04-11", label:"Jupiter arrival / operations begin"}
        ]
      },

      /* ===== DEEP SPACE ===== */
      {
        id:"newHorizons",
        cluster:"deepspace",
        type:"interstellar",
        label:"🛸 New Horizons 🇺🇸",
        name:"New Horizons",
        url:"http://pluto.jhuapl.edu/",
        summaries:{
          en:"New Horizons performed the first Pluto flyby and later visited Kuiper Belt object Arrokoth, transforming knowledge of the outer solar system; it continues operating in the Kuiper Belt.",
          it:"New Horizons ha effettuato il primo flyby di Plutone e poi di Arrokoth nella Kuiper Belt, rivoluzionando la conoscenza del Sistema Solare esterno; continua a operare nella fascia di Kuiper.",
          es:"New Horizons realizó el primer sobrevuelo de Plutón y de Arrokoth, transformando el conocimiento del sistema solar externo. Sigue operando en el Cinturón de Kuiper con mediciones de polvo/partículas y observaciones lejanas.",
          pt:"A New Horizons fez o primeiro flyby de Plutão e de Arrokoth, transformando o conhecimento do Sistema Solar externo. Continua operando no Cinturão de Kuiper com medições de poeira/partículas e observações distantes.",
          fr:"New Horizons a survolé Pluton puis l’objet de la ceinture de Kuiper Arrokoth, transformant notre compréhension des confins du Système solaire. Elle continue d’opérer dans la Kuiper Belt en mesurant poussières/particules et en effectuant des observations lointaines.",
          de:"New Horizons absolvierte den ersten Vorbeiflug an Pluto und am Kuiper-Belt-Objekt Arrokoth und veränderte unser Bild des äußeren Sonnensystems. Die Sonde arbeitet weiter im Kuipergürtel mit Staub/Teilchenmessungen und Fernbeobachtungen."
        },
        events:[
          {date:"2006-01-19", label:"Launch", type:"start"},
          {date:"2007-02-28", label:"Jupiter flyby"},
          {date:"2015-07-14", label:"Pluto flyby"},
          {date:"2019-01-01", label:"Arrokoth flyby"}
        ]
      },
      {
        id:"voyager1",
        cluster:"deepspace",
        type:"interstellar",
        label:"✨ Voyager 1 🇺🇸",
        name:"Voyager 1",
        url:"https://voyager.jpl.nasa.gov/",
        summaries:{
          en:"Voyager 1 explored Jupiter and Saturn and continues outward to study the heliosphere boundary and interstellar space, returning engineering/science data as communications permit.",
          it:"Voyager 1 ha esplorato Giove e Saturno e prosegue verso i confini dell’eliosfera e lo spazio interstellare, trasmettendo dati scientifici e di ingegneria finché le comunicazioni lo consentono.",
          es:"Voyager 1 (1977) exploró Júpiter y Saturno y luego continuó hacia el límite de la heliosfera y el espacio interestelar. Sigue siendo un símbolo de exploración profunda y aún envía datos según lo permitan las comunicaciones.",
          pt:"A Voyager 1 (1977) explorou Júpiter e Saturno e depois seguiu para a fronteira da heliosfera e o espaço interestelar. É um símbolo da exploração profunda e ainda transmite dados enquanto as comunicações permitem.",
          fr:"Voyager 1 (1977) a exploré Jupiter et Saturne avant de poursuivre vers la frontière de l’héliosphère et l’espace interstellaire. Elle reste un symbole de l’exploration lointaine et transmet encore des données tant que les communications le permettent.",
          de:"Voyager 1 (1977) erforschte Jupiter und Saturn und flog anschließend zur Heliosphären-Grenze und in den interstellaren Raum. Sie ist ein Symbol der Tiefraumforschung und sendet – soweit möglich – weiterhin Daten."
        },
        timelineScale:{startYear:1975, endYear:2030},
        sources:["https://science.nasa.gov/mission/voyager/voyager-1/", "https://voyager.gsfc.nasa.gov/mission.html", "https://science.nasa.gov/blogs/voyager/"],
        events:[
          {"date":"1977-09-05","label":"Launch","type":"start"},
          {"date":"1979-03-05","label":"Jupiter flyby"},
          {"date":"1980-11-12","label":"Saturn flyby"}
        ]
      },
      {
        id:"voyager2",
        cluster:"deepspace",
        type:"interstellar",
        label:"✨ Voyager 2 🇺🇸",
        name:"Voyager 2",
        url:"https://voyager.jpl.nasa.gov/",
        summaries:{
          en:"Voyager 2 is the only spacecraft to have visited all four giant planets—Jupiter, Saturn, Uranus and Neptune—and now continues into interstellar space measuring plasma and magnetic environment.",
          it:"Voyager 2 è l’unica sonda ad aver visitato Giove, Saturno, Urano e Nettuno, e ora prosegue nello spazio interstellare misurando ambiente di plasma e campo magnetico.",
          es:"Voyager 2 (1977) es la única nave que visitó los cuatro gigantes: Júpiter, Saturno, Urano y Neptuno. Ahora continúa hacia el espacio interestelar midiendo plasma y campo magnético más allá de la heliosfera.",
          pt:"A Voyager 2 (1977) é a única nave que visitou os quatro gigantes: Júpiter, Saturno, Urano e Netuno. Agora segue para o espaço interestelar medindo plasma e campo magnético além da heliosfera.",
          fr:"Voyager 2 (1977) est la seule sonde à avoir visité les quatre géantes : Jupiter, Saturne, Uranus et Neptune. Elle poursuit désormais sa route dans l’espace interstellaire et mesure plasma et champ magnétique au-delà de l’héliosphère.",
          de:"Voyager 2 (1977) ist das einzige Raumfahrzeug, das alle vier Gasriesen besuchte: Jupiter, Saturn, Uranus und Neptun. Heute fliegt sie weiter in den interstellaren Raum und misst Plasma sowie Magnetfeld jenseits der Heliosphäre."
        },
        timelineScale:{startYear:1975, endYear:2030},
        sources:["https://science.nasa.gov/mission/voyager/voyager-2/", "https://voyager.gsfc.nasa.gov/mission.html", "https://science.nasa.gov/blogs/voyager/"],
        events:[
          {"date":"1977-08-20","label":"Launch","type":"start"},
          {"date":"1979-07-09","label":"Jupiter flyby"},
          {"date":"1981-08-26","label":"Saturn flyby"},
          {"date":"1986-01-24","label":"Uranus flyby"},
          {"date":"1989-08-25","label":"Neptune flyby"}
        ]
      },
    ]
  };

  window.DASH_DATA = DASH_DATA;
})();

