export type Statue = {
  name: string;
  artist: string;
  year: string;
  coordinates: [number, number];
  image: string;
  description?: string;
};

export const statues: Statue[] = [
    {
    name: "Solitude",
    artist: "Didier Audrat",
    year: "2022",
    coordinates: [2.3102, 48.88322],
    image: "/images/solitude.png",
    description: 'La première sculpture d’une femme noire à Paris. Solitude a lutté contre l’esclavage en Guadeloupe. Elle tient une proclamation de Louis Delgrès, appelant les Guadeloupéens au combat contre le rétablissement de l’esclavage en 1802.'
  },
  {
    name: "Sarah Bernhardt",
    artist: "François Sicard",
    year: "1926",
    coordinates: [2.3100, 48.8822],
    image: "/images/bernhardt.png",
    description: "Sarah Bernhardt était une actrice, dramaturge et sculptrice française du XIXe et du XXe siècle, célèbre pour ses performances théâtrales."
  },
  {
    name: "George Sand",
    artist: "François Sicard",
    year: "1904",
    coordinates: [2.3371, 48.8502],
    image: "/images/sand.png",
    description: 'George Sand est une écrivaine française majeure du XIXe siècle, connue pour ses romans, ses engagements politiques et sa défense des droits des femmes. Née Aurore Dupin, elle adopte le pseudonyme masculin George Sand afin de pouvoir publier plus librement dans un milieu littéraire dominé par les hommes.'
  },
  {
    name: "Hotel de Ville",
    artist: "Plusieurs artistes",
    year: "XIXe siècle",
    coordinates: [2.352133, 48.855769],
    image: "/images/hoteldeville.png",
    description: 'L’hôtel de ville de Paris abrite plusieurs sculptures dédiées aux femmes illustres (Marie-Thérèse Rodet Geoffrin, Germaine de Staël, Élisabeth Vigée Le Brun, George Sand, Manon Roland, Marie de Rabutin-Chantal)'
  },
  {
    name: "Dalida",
    artist: "Aslan",
    year: "1997",
    coordinates: [2.338238, 48.888372],
    image: "/images/dalida.png",
    description: 'Une chanteuse franco-italienne qui habitait à Montmartre, où se trouve ce buste. Le buste est très sexualisé et, même si elle est habillée dans la sculpture, des gens caressent sa poitrine au point que le bronze en est terni.',
  },
  {
    name: "Edith Piaf",
    artist: "Lisbeth Delisle",
    year: "2003",
    coordinates: [2.405186, 48.864807],
    image: "/images/piaf.png",
    description: "Edith Piaf était une chanteuse française du XXe siècle, célèbre pour ses chansons d'amour et de la vie parisienne. La statue a été érigée pour commémorer le 40ème anniversaire de sa mort. "
  },
  {
    name: "Agrippine",
    artist: "Robert Dosis",
    year: "1685–1690",
    coordinates: [2.324222, 48.863964],
    image: "/images/agrippine.png",
    description: 'Agrippine la Jeune est une impératrice romaine, sœur de l’empereur Caligula, épouse de l’empereur Claude et mère de Néron. Cette statue est placée dans le jardin des Tuileries en 1722'
  },
  {
    name: "Sappho",
    artist: "Pierre Loison",
    year: "1859",
    coordinates: [2.338312, 48.861374],
    image: "/images/sappho2.png",
    description: 'Sappho était une poétesse grecque de l’Antiquité, connue pour ses poèmes lyriques et son influence sur la littérature occidentale. Elle a exprimé dans ces écrits son attraction pour les femmes, ce qui a conduit à l’utilisation du terme « saphisme » pour décrire les relations amoureuses entre femmes.'
  },
  {
    name: "Berty Albrecht",
    artist: "Michèle Forgeois",
    year: "1984",
    coordinates: [2.379804, 48.840175],
    image: "/images/albrecht.png",
    description: 'Albrecht est une militante, féministe, et antifasciste française. Elle participe à l’un des mouvements principaux de la résistance intérieure pendant la deuxième guerre mondiale. Engagée dans la lutte contre l’occupation allemande et le régime de Vichy, elle joue un rôle important dans l’organisation de réseaux clandestins et la diffusion de journaux résistants. Le monument présente deux visages de Berty sur le monument, représentant sa double vie et ses activités dans la résistance.'
  },
  {
    name: "Maria Deraismes",
    artist: "Louis-Ernest Barrias",
    year: "1898",
    coordinates: [2.326530, 48.893801],
    image: "/images/deraismes2.png",
    description: 'Maria Deraismes était une féministe, conférencière, et militante française du XIXe siècle, connue pour son engagement dans les mouvements de libération des femmes. Un an après sa mort, son nom est donné à une rue de Paris, et une statue est érigée en son honneur. Elle est presenté ici dans une position oratoire, debout, rien de comparable aux statues de femmes de l’époque, qui sont souvent assises ou allongées.'
  },
  {
    name: "Porte de la Chapelle, Dix Femmes Illustres",
    artist: "Paname 2024, Marie 3D",
    year: "2024",
    coordinates: [2.359007, 48.897295],
    image: "/images/portelachapelle.png",
    description: "Ces statues ont fait partie de la cérémonie d’ouverture des Jeux olympiques de Paris 2024. Elles ont émergé de la Seine pendant la cérémonie. Après les JO, ces sculptures ont été installées à la Porte de la Chapelle dans le but de renforcer la présence féminine dans l’espace public. La série se compose de dix femmes politiques, sportives, philosophiques, militantes et artistiques (Olympe de Gouges, Alice Milliat, Gisèle Halimi, Simone de Beauvoir, Paulette Nardal, Jeanne Barret, Louise Michel, Christine de Pizan, Alice Guy, Simone Veil)."
  },
  {
    name: "Clara de Hirsch et Marguerite Boucicaut",
    artist: "Paul Moreau-Vauthier",
    year: "1870",
    coordinates: [2.325824, 48.851518],
    image: "/images/hirsch.png",
    description: "Clara de Hirsch et Marguerite Boucicaut étaient deux femmes françaises du XIXe siècle, connues pour leur activité philanthropique."  
  },
  {
    name: "Luxembourg – Reines et Femmes Illustres",
    artist: "Plusieurs artistes",
    year: "XIXe siècle",
    coordinates: [2.338216, 48.847413],
    image: "/images/luxembourg.png",
    description: "En 1843, le duc Decazes, Grand référendaire de la Chambre des pairs, a jugé les nus féminins du jardin de luxembourg de  « fort mauvais goût». Ainsi, une série de vingt sculptures de reines de France et de femmes illustres est commandée. La série se compose de Sainte Clotilde, Marguerite de Provence, Anne de Bretagne, Anne d’Autriche, Blanche de Castille, Anne de Beaujeu, Valentine de Milan, Marguerite d’Angoulême, Marie de Médicis, Marguerite d’Anjou, Louis de Savoie, Anne-Marie-Louise d’Orléans, Clémence Isaure, Jeanne d’Albret, Marie Stuart, Sainte Geneviève, Mathilde, Berthe ou Bertrade, et Sainte Bathilde. "
  },
  {
    name: "Jeanne d’Arc",
    artist: "Emmanuel Frémiet",
    year: "1874",
    coordinates: [2.332186, 48.863854],
    image: "/images/jeanne.png",
    description: "Une commande du gouvernement français, ce monument est situé à côté du lieu où Jeanne a essayé de s’emparer de Paris. Jeanne d’Arc est une jeune paysanne française née en 1412 à Domrémy. Elle affirme, dès l’adolescence, entendre des voix divines lui demandant de libérer la France de l’occupation anglaise pendant la guerre de Cent Ans. Elle parvient à convaincre le futur roi Charles VII de lui confier une armée et joue un rôle important dans la guerre de cent ans. Capturée en 1430 par les Bourguignons, elle est condamnée et brûlée vive à Rouen en 1431, à l’âge de 19 ans."
  }
];