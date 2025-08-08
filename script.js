/*
 * Global data for the wine cellar. Each entry includes core details
 * along with tasting notes, serving window, peak year, pairing suggestions
 * and an icon indicating the general style of the wine.
 */
const wines = [
  {
    bottle: "Gran Enemigo – Gualtallary",
    country: "Argentina",
    region: "Uco Valley (Mendoza)",
    vintage: 2019,
    style: "Red",
    grapes: "Cabernet Franc, Malbec",
    window: "2023–2035",
    peak: "2029",
    pairing: "Structured, mineral Malbec with Cabernet Franc notes; great with grilled red meats and Argentine dishes.",
    meal: "Argentine asado: mixed grilled meats (steak, chorizo) with chimichurri.",
    icon: "fa-wine-bottle"
  },
  {
    bottle: "Lorenzo Lo Sagrado Cabernet Franc",
    country: "Argentina",
    region: "Agrelo, Luján de Cuyo (Mendoza)",
    vintage: 2019,
    style: "Red",
    grapes: "Cabernet Franc",
    window: "2024–2032",
    peak: "2027",
    pairing: "Bright red‑fruit Cabernet Franc; suits herb‑roasted poultry, pork or lamb, and peppery dishes.",
    meal: "Roast duck with plum sauce and herb‑roasted root vegetables.",
    icon: "fa-wine-bottle"
  },
  {
    bottle: "Praepositus Grüner Veltliner",
    country: "Italy",
    region: "Alto Adige (Valle Isarco)",
    vintage: 2018,
    style: "White",
    grapes: "Grüner Veltliner",
    window: "2020–2028",
    peak: "2023",
    pairing: "Crisp Alpine white with notes of green apple, citrus and herbs; pairs with grilled fish, asparagus and Alpine cheeses.",
    meal: "Grilled trout with herb butter and roasted potatoes.",
    icon: "fa-wine-glass"
  },
  {
    bottle: "New Chapter Grüner Veltliner",
    country: "Austria",
    region: "Niederösterreich",
    vintage: 2021,
    style: "White",
    grapes: "Grüner Veltliner",
    window: "2022–2026",
    peak: "2023",
    pairing: "Crisp Grüner Veltliner with white pepper and citrus; complements schnitzel and spicy Asian cuisine.",
    meal: "Wiener Schnitzel with lemon and potato salad.",
    icon: "fa-wine-glass"
  },
  {
    bottle: "Santa Rita \"Casa Real\" Cabernet Sauvignon Reserva Especial",
    country: "Chile",
    region: "Maipo Valley",
    vintage: 2018,
    style: "Red",
    grapes: "Cabernet Sauvignon",
    window: "2024–2038",
    peak: "2030",
    pairing: "Classic Chilean Cabernet with cassis, cedar and mint; needs grilled steaks, lamb or aged cheeses.",
    meal: "Ribeye steak with rosemary roasted potatoes.",
    icon: "fa-wine-bottle"
  },
  {
    bottle: "Garage Wine Co. \"Truquilemu Vineyard\" Carignan Field Blend Lot 97",
    country: "Chile",
    region: "Maule Valley",
    vintage: 2019,
    style: "Red",
    grapes: "Carignan",
    window: "2024–2034",
    peak: "2028",
    pairing: "Concentrated Carignan blend with dark fruit and spice; pairs with game, barbecue and hearty stews.",
    meal: "Slow‑cooked venison stew with root vegetables and polenta.",
    icon: "fa-wine-bottle"
  },
  {
    bottle: "Domaine Huet – Clos du Bourg Moelleux",
    country: "France",
    region: "Vouvray (Loire)",
    vintage: 2018,
    style: "Sweet",
    grapes: "Chenin Blanc",
    window: "2022–2040+",
    peak: "2030",
    pairing: "Sweet Chenin Blanc with honeyed stone fruit; pairs with foie‑gras, blue cheese or spicy Asian food.",
    meal: "Foie gras terrine with brioche and fig jam.",
    icon: "fa-ice-cream"
  },
  {
    bottle: "Corton \"Le Clos du Roi\" Grand Cru (Domaine d’Ardhuy)",
    country: "France",
    region: "Burgundy (Corton)",
    vintage: 2018,
    style: "Red",
    grapes: "Pinot Noir",
    window: "2025–2040",
    peak: "2030",
    pairing: "Grand Cru Pinot Noir with intense cherry and earth; needs time; pairs with duck, beef or mushroom dishes.",
    meal: "Beef Bourguignon (slow‑braised beef in red wine with mushrooms).",
    icon: "fa-wine-bottle"
  },
  {
    bottle: "Clos de Saint Yves (Domaine des Baumard)",
    country: "France",
    region: "Savennières (Loire)",
    vintage: 2019,
    style: "White",
    grapes: "Chenin Blanc",
    window: "2023–2030",
    peak: "2026",
    pairing: "Dry Chenin Blanc with notes of quince, honey and chalky minerality; works with shellfish, poultry and creamy sauces.",
    meal: "Pan‑seared sea bass with beurre blanc and asparagus.",
    icon: "fa-wine-glass"
  },
  {
    bottle: "E. Guigal – Crozes‑Hermitage",
    country: "France",
    region: "Northern Rhône",
    vintage: 2019,
    style: "Red",
    grapes: "Syrah",
    window: "2023–2030",
    peak: "2026",
    pairing: "Syrah showing black‑pepper and blackberry; pairs with lamb, grilled meats or cassoulet.",
    meal: "Herb‑crusted rack of lamb with ratatouille.",
    icon: "fa-wine-bottle"
  },
  {
    bottle: "Château La Nerthe \"Clos de Beauvenir\"",
    country: "France",
    region: "Châteauneuf‑du‑Pape",
    vintage: 2021,
    style: "White",
    grapes: "Roussanne (dominant)",
    window: "2024–2032",
    peak: "2026",
    pairing: "White Rhône blend, honeyed stone fruit and floral notes; suits poultry, rich fish or truffle dishes.",
    meal: "Roast chicken with truffle butter and sautéed wild mushrooms.",
    icon: "fa-wine-glass"
  },
  {
    bottle: "Famille Perrin Château de Beaucastel Roussanne Vieilles Vignes",
    country: "France",
    region: "Châteauneuf‑du‑Pape",
    vintage: 2022,
    style: "White",
    grapes: "Roussanne",
    window: "2024–2034",
    peak: "2028",
    pairing: "Complex, oak‑fermented Roussanne; pairs with lobster, scallops or creamy pasta.",
    meal: "Butter‑poached lobster with tarragon cream sauce.",
    icon: "fa-wine-glass"
  },
  {
    bottle: "Joseph Mellot \"Cuvée Pierre‑Étienne\" Sancerre",
    country: "France",
    region: "Sancerre (Loire)",
    vintage: 2017,
    style: "White",
    grapes: "Sauvignon Blanc",
    window: "2020–2030",
    peak: "2025",
    pairing: "Mature Sancerre with citrus and flinty notes; ideal with goat cheese, shellfish and light poultry.",
    meal: "Goat‑cheese and herb salad.",
    icon: "fa-wine-glass"
  },
  {
    bottle: "Château d’Agassac",
    country: "France",
    region: "Haut‑Médoc (Bordeaux)",
    vintage: 2012,
    style: "Red",
    grapes: "Cabernet Sauvignon & Merlot",
    window: "2015–2030",
    peak: "2023",
    pairing: "Cabernet‑Merlot blend; great with steak, duck confit and aged cheeses.",
    meal: "Duck confit with potatoes.",
    icon: "fa-wine-bottle"
  },
  {
    bottle: "Château Prince Chenin Sec \"Les Ardoisières\"",
    country: "France",
    region: "Anjou (Loire)",
    vintage: 2019,
    style: "White",
    grapes: "Chenin Blanc",
    window: "2022–2032",
    peak: "2026",
    pairing: "Dry Chenin Blanc; pairs with seafood, poultry and creamy sauces.",
    meal: "Roast chicken with lemon and thyme.",
    icon: "fa-wine-glass"
  },
  {
    bottle: "Bernard Lonclas Blanc de Blancs Extra Brut Vintage",
    country: "France",
    region: "Champagne",
    vintage: 2015,
    style: "Sparkling",
    grapes: "Chardonnay",
    window: "2020–2030",
    peak: "2025",
    pairing: "Extra‑Brut vintage Blanc de Blancs; crisp citrus and brioche; pairs with seafood and sushi.",
    meal: "Pan‑seared scallops with lemon butter.",
    icon: "fa-champagne-glass"
  },
  {
    bottle: "Gaston Chiquet Rosé Premier Cru Brut",
    country: "France",
    region: "Champagne (Dizy)",
    vintage: 2023,
    style: "Sparkling",
    grapes: "Pinot Noir, Chardonnay, Pinot Meunier",
    window: "2024–2028",
    peak: "2025",
    pairing: "Rosé Champagne with red‑fruit notes; great with charcuterie, salmon and berry desserts.",
    meal: "Smoked salmon blinis with crème fraîche.",
    icon: "fa-champagne-glass"
  },
  {
    bottle: "Thiénot \"Cuvée Alain Thiénot\" Champagne",
    country: "France",
    region: "Champagne",
    vintage: 2008,
    style: "Sparkling",
    grapes: "Pinot Noir & Chardonnay",
    window: "2015–2030",
    peak: "2025",
    pairing: "Vintage Champagne; delicious with oysters, caviar and delicate seafood.",
    meal: "Fresh oysters with mignonette.",
    icon: "fa-champagne-glass"
  },
  {
    bottle: "Selbach-Oster Graacher Domprobst Riesling Spätlese",
    country: "Germany",
    region: "Mosel",
    vintage: 2021,
    style: "Sweet",
    grapes: "Riesling",
    window: "2024–2045",
    peak: "2032",
    pairing: "Sweet but balanced Riesling; great with spicy Asian, pork dishes or fruity desserts.",
    meal: "Thai red curry with pork and pineapple.",
    icon: "fa-ice-cream"
  },
  {
    bottle: "Lungarotti \"Rubesco Vigna Monticchio\" (Torgiano Rosso Riserva)",
    country: "Italy",
    region: "Umbria (Torgiano)",
    vintage: 2015,
    style: "Red",
    grapes: "Sangiovese, Canaiolo",
    window: "2020–2035",
    peak: "2028",
    pairing: "Sangiovese/Canaiolo blend with earthy cherry and leather; pairs with roast pork, game or aged Pecorino.",
    meal: "Osso buco with saffron risotto.",
    icon: "fa-wine-bottle"
  },
  {
    bottle: "Lungarotti Montefalco Sagrantino DOCG",
    country: "Italy",
    region: "Umbria (Montefalco)",
    vintage: 2017,
    style: "Red",
    grapes: "Sagrantino",
    window: "2027–2047",
    peak: "2032",
    pairing: "Powerful, tannic Sagrantino; traditionally paired with lamb and Umbrian dishes.",
    meal: "Braised lamb shank with wild mushrooms and truffle polenta.",
    icon: "fa-wine-bottle"
  },
  {
    bottle: "Castello Banfi Poggio all’Oro Brunello di Montalcino Riserva",
    country: "Italy",
    region: "Tuscany (Brunello di Montalcino)",
    vintage: 2016,
    style: "Red",
    grapes: "Sangiovese",
    window: "2026–2046",
    peak: "2032",
    pairing: "Powerful Sangiovese; great with steak, game and rich pasta dishes.",
    meal: "Bistecca alla Fiorentina (Tuscan steak).",
    icon: "fa-wine-bottle"
  },
  {
    bottle: "Volpaia Coltassala",
    country: "Italy",
    region: "Tuscany (Chianti Classico)",
    vintage: 2019,
    style: "Red",
    grapes: "Sangiovese & Mammolo",
    window: "2025–2040",
    peak: "2032",
    pairing: "Gran Selezione Chianti; pairs beautifully with Tuscan ragù and roasts.",
    meal: "Pappardelle al ragù di cinghiale (wild boar ragù).",
    icon: "fa-wine-bottle"
  },
  {
    bottle: "Triacca San Domenico Sforzato di Valtellina",
    country: "Italy",
    region: "Lombardy (Valtellina)",
    vintage: 2017,
    style: "Red",
    grapes: "Nebbiolo (Chiavennasca)",
    window: "2025–2038",
    peak: "2030",
    pairing: "Dried‑grape Nebbiolo (Sfursat); suits braised meats and aged cheeses.",
    meal: "Braised beef cheeks with polenta.",
    icon: "fa-wine-bottle"
  },
  {
    bottle: "Casa Ferreirinha Castas Escondidas Douro",
    country: "Portugal",
    region: "Douro",
    vintage: 2019,
    style: "Red",
    grapes: "Touriga Franca, Tinta Barroca & others",
    window: "2024–2034",
    peak: "2028",
    pairing: "Rich Douro blend; pairs with grilled beef, game and hearty stews.",
    meal: "Portuguese churrasco (mixed grilled meats).",
    icon: "fa-wine-bottle"
  },
  {
    bottle: "Quinta da Leda (Casa Ferreirinha)",
    country: "Portugal",
    region: "Douro",
    vintage: 2015,
    style: "Red",
    grapes: "Touriga Nacional, Tinta Roriz, Tinta Barroca, others",
    window: "2024–2040",
    peak: "2030",
    pairing: "Structured Touriga blend; dark fruit and chocolate; pairs with grilled beef, venison or Portuguese stews.",
    meal: "Portuguese cozido (mixed meat and vegetable stew).",
    icon: "fa-wine-bottle"
  },
  {
    bottle: "Guarita da Chocapalha",
    country: "Portugal",
    region: "Lisbon region",
    vintage: 2016,
    style: "Red",
    grapes: "Alicante Bouschet",
    window: "2022–2030",
    peak: "2025",
    pairing: "Alicante Bouschet from old vines; ripe plum and spice; pairs with roast pork and chouriço dishes.",
    meal: "Porco Preto (roast Iberian pork) with roasted root vegetables.",
    icon: "fa-wine-bottle"
  },
  {
    bottle: "Ferreira Vintage Port",
    country: "Portugal",
    region: "Douro",
    vintage: 2018,
    style: "Fortified",
    grapes: "Touriga Nacional, Touriga Franca, Tinta Barroca, Tinta Roriz, others",
    window: "2030–2075",
    peak: "2045",
    pairing: "Fortified wine with immense power; matches blue cheeses, dark chocolate or dried fruits.",
    meal: "Stilton cheese with walnut and fig tart.",
    icon: "fa-whiskey-glass"
  },
  {
    bottle: "Quinta da Manoella Vinhas Velhas",
    country: "Portugal",
    region: "Douro",
    vintage: 2019,
    style: "Red",
    grapes: "Field blend (Touriga Nacional, etc.)",
    window: "2025–2035",
    peak: "2029",
    pairing: "Old‑vine Douro red; concentrated dark fruit and spice; pairs with game, grilled lamb or rich stews.",
    meal: "Wild boar ragù with tagliatelle.",
    icon: "fa-wine-bottle"
  },
  {
    bottle: "Madre de Agua Vinha Velhas Tinto",
    country: "Portugal",
    region: "Dão",
    vintage: 2017,
    style: "Red",
    grapes: "Alfrocheiro, Touriga Nacional & others",
    window: "2024–2032",
    peak: "2026",
    pairing: "Elegant Portuguese red; pairs with roast lamb, game and hearty dishes.",
    meal: "Roast lamb with rosemary and roasted potatoes.",
    icon: "fa-wine-bottle"
  },
  {
    bottle: "Torre Muga Rioja",
    country: "Spain",
    region: "Rioja",
    vintage: 2019,
    style: "Red",
    grapes: "Tempranillo, Graciano, Mazuelo",
    window: "2025–2040",
    peak: "2032",
    pairing: "Tempranillo blend; dark cherry, leather and vanilla; pairs with lamb, Ibérico ham or mushroom dishes.",
    meal: "Slow‑cooked lamb shoulder with chorizo and roasted potatoes.",
    icon: "fa-wine-bottle"
  },
  {
    bottle: "Arzuaga Reserva Especial",
    country: "Spain",
    region: "Ribera del Duero",
    vintage: 2019,
    style: "Red",
    grapes: "Tempranillo & Cabernet Sauvignon",
    window: "2027–2042",
    peak: "2031",
    pairing: "Elegant Tempranillo/Cabernet blend; ideal with roast lamb, suckling pig or Ibérico pork.",
    meal: "Roast suckling lamb with rosemary.",
    icon: "fa-wine-bottle"
  },
  {
    bottle: "El Veneno Garnacha",
    country: "Spain",
    region: "Alicante",
    vintage: 2020,
    style: "Red",
    grapes: "Garnacha",
    window: "2023–2030",
    peak: "2026",
    pairing: "Mediterranean Garnacha with ripe berry fruit and herbs; pairs with grilled meats, paella and tapas.",
    meal: "Paella Valenciana (rabbit, chicken and beans).",
    icon: "fa-wine-bottle"
  },
  {
    bottle: "Plácet de Valtomelloso (white Rioja)",
    country: "Spain",
    region: "Rioja",
    vintage: 2021,
    style: "White",
    grapes: "Viura",
    window: "2023–2028",
    peak: "2025",
    pairing: "Elegant, oak‑fermented Viura; works with seafood, paella or grilled vegetables.",
    meal: "Seafood paella with clams, mussels and prawns.",
    icon: "fa-wine-glass"
  },
  {
    bottle: "Vi de Vila Gratallops",
    country: "Spain",
    region: "Priorat (Catalonia)",
    vintage: 2022,
    style: "Red",
    grapes: "Garnacha & Carignan",
    window: "2025–2035",
    peak: "2028",
    pairing: "Grenache/Carignan blend; mineral and intense; pairs with lamb, grilled beef or Catalan dishes.",
    meal: "Grilled lamb chops with rosemary and garlicky white beans.",
    icon: "fa-wine-bottle"
  },
  {
    bottle: "J. Lohr \"Cuvée POM\"",
    country: "United States",
    region: "California (Paso Robles)",
    vintage: 2018,
    style: "Red",
    grapes: "Merlot, Cabernet Sauvignon, Cabernet Franc, Malbec",
    window: "2023–2035",
    peak: "2026",
    pairing: "Bordeaux‑style blend (Merlot‑dominant); blackberry and mocha; pairs with prime rib or braised beef.",
    meal: "Beef short ribs braised in red wine with mashed potatoes.",
    icon: "fa-wine-bottle"
  }
];

// Assign a stable id to each wine entry corresponding to its index in the array.
wines.forEach((w, i) => {
  w.id = i;
});

/*
 * Colour palette for assigning colours to each wine style. Colours will be
 * cycled through if there are more styles than colours in the palette. The
 * palette uses a variety of rich, warm tones suitable for a wine-focused
 * interface.
 */
const _styleColourPalette = [
  '#7d0024', // deep red
  '#c09553', // golden tan
  '#d65b84', // rosé
  '#58627a', // slate blue
  '#a75334', // tawny
  '#8b5e3c', // chestnut
  '#4c6a92', // steel blue
  '#6b8e23', // olive green
  '#9e4784', // mauve
  '#00a3a1'  // teal
];

/*
 * Generate a mapping from each unique wine style to a colour from the
 * palette. This mapping is computed once at load time and used when
 * rendering style badges in the table. If the number of unique styles
 * exceeds the palette length, colours repeat.
 */
const _styleColourMap = {};
(() => {
  const uniqueStyles = [...new Set(wines.map(w => w.style))];
  uniqueStyles.forEach((style, idx) => {
    _styleColourMap[style] = _styleColourPalette[idx % _styleColourPalette.length];
  });
})();

/*
 * Helper to gather unique values for a given key from the wines array.
 */
function _getUniqueValues(key) {
  return [...new Set(wines.map(wine => wine[key]))].sort();
}

/*
 * Populate the inventory table with wine data.
 */
function populateTable() {
  const tbody = document.querySelector('#wineTable tbody');
  wines.forEach(wine => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="icon-cell"><i class="fa-solid ${wine.icon}"></i></td>
      <td>${wine.bottle}</td>
      <td>${wine.country}</td>
      <td>${wine.region}</td>
      <td>${wine.vintage}</td>
      <td>${wine.style}</td>
      <td>${wine.grapes}</td>
      <td>${wine.window}</td>
      <td>${wine.peak}</td>
      <td>${wine.pairing}</td>
      <td>${wine.meal}</td>
    `;
    tbody.appendChild(tr);
  });
}

/*
 * Populate country filter with unique country names from the data.
 */
function populateCountryFilter() {
  const select = document.getElementById('countryFilter');
  // Remove any existing options except the first ("All") when repopulating
  while (select.options.length > 1) {
    select.remove(1);
  }
  const countries = _getUniqueValues('country');
  countries.forEach(country => {
    const option = document.createElement('option');
    option.value = country;
    option.textContent = country;
    select.appendChild(option);
  });
}

/*
 * Populate the style filter dropdown with all unique wine styles. As with
 * the country filter, an "All" option is provided to view all styles.
 */
function populateStyleFilter() {
  const select = document.getElementById('styleFilter');
  if (!select) return;
  // Clear existing options except the first
  while (select.options.length > 1) {
    select.remove(1);
  }
  const styles = _getUniqueValues('style');
  styles.forEach(style => {
    const option = document.createElement('option');
    option.value = style;
    option.textContent = style;
    select.appendChild(option);
  });
}

/*
 * Populate the vintage filter with unique vintage years from the data. Vintages
 * are sorted in ascending order to make it easy to select a particular year.
 */
function populateVintageFilter() {
  const select = document.getElementById('vintageFilter');
  if (!select) return;
  // Clear existing options except the first
  while (select.options.length > 1) {
    select.remove(1);
  }
  // Extract unique vintages
  const years = Array.from(new Set(wines.map(w => w.vintage))).sort((a, b) => a - b);
  years.forEach(year => {
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    select.appendChild(option);
  });
}

/*
 * Populate the grape filter dropdown with a unique list of individual grape
 * varieties. Because some entries have multiple grapes separated by commas,
 * we split and normalise them before deduplication.
 */
function populateGrapeFilter() {
  const select = document.getElementById('grapeFilter');
  if (!select) return;
  while (select.options.length > 1) {
    select.remove(1);
  }
  const grapesSet = new Set();
  wines.forEach(w => {
    w.grapes.split(',').forEach(g => {
      const trimmed = g.trim();
      if (trimmed) grapesSet.add(trimmed);
    });
  });
  const grapes = Array.from(grapesSet).sort((a, b) => a.localeCompare(b));
  grapes.forEach(g => {
    const option = document.createElement('option');
    option.value = g;
    option.textContent = g;
    select.appendChild(option);
  });
}

/*
 * Initialize the DataTable with search and sort capabilities.
 */
function initDataTable() {
  // Initialise DataTable with custom columns, search and filter behaviour.
  const table = $('#wineTable').DataTable({
    data: wines,
    paging: true,
    searching: true,
    info: false,
    // Default ordering: by country then vintage (ascending)
    order: [[2, 'asc'], [4, 'asc']],
    columns: [
      {
        className: 'details-control',
        orderable: false,
        data: null,
        defaultContent: '<i class="fa fa-plus-circle"></i>',
        width: '24px'
      },
      {
        data: 'bottle',
        title: 'Wine',
        render: function(data, type, row) {
          // Make the wine name a link to a dedicated details page
          return '<a href="wine.html?id=' + row.id + '" class="wine-link">' + data + '</a>';
        }
      },
      { data: 'country', title: 'Country' },
      { data: 'region', title: 'Region' },
      { data: 'vintage', title: 'Vintage' },
      {
        data: 'style',
        title: 'Style',
        render: function(data, type, row) {
          // Render a coloured badge for the style using the colour map.
          const colour = _styleColourMap[data] || '#999';
          return '<span class="badge" style="background-color:' + colour + ';">' + data + '</span>';
        }
      },
      { data: 'grapes', title: 'Grapes' },
      { data: 'window', title: 'Window' },
      { data: 'peak', title: 'Peak' }
    ],
    columnDefs: [
      { targets: [0], orderable: false }
    ],
    language: {
      search: '',
      searchPlaceholder: 'Search...'
    }
  });

  // Hook up custom search input to DataTable's search API
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('keyup', function() {
      table.search(this.value).draw();
    });
  }

  // Filter by country
  $('#countryFilter').on('change', function() {
    const val = $(this).val();
    table.column(2).search(val ? '^' + val + '$' : '', true, false).draw();
  });

  // Filter by style
  $('#styleFilter').on('change', function() {
    const val = $(this).val();
    // Search in the style column (index 5). Use regex to match the value inside the badge.
    table.column(5).search(val ? val : '', true, false).draw();
  });

  // Handle expandable row details for pairing and meal.
  $('#wineTable tbody').on('click', 'td.details-control', function() {
    const tr = $(this).closest('tr');
    const row = table.row(tr);
    const icon = $(this).find('i');
    if (row.child.isShown()) {
      // Collapse the child row
      row.child.hide();
      tr.removeClass('shown');
      icon.removeClass('fa-minus-circle').addClass('fa-plus-circle');
    } else {
      // Expand the child row with the pairing and meal details
      row.child(formatDetails(row.data())).show();
      tr.addClass('shown');
      icon.removeClass('fa-plus-circle').addClass('fa-minus-circle');
    }
  });

  // Filter by vintage
  $('#vintageFilter').on('change', function() {
    const val = $(this).val();
    table.column(4).search(val ? '^' + val + '$' : '', true, false).draw();
  });
  // Filter by grape variety (allow substring match)
  $('#grapeFilter').on('change', function() {
    const val = $(this).val();
    table.column(6).search(val ? val : '', true, false).draw();
  });
}

/*
 * Format the expandable child row contents for a given wine. This displays
 * pairing suggestions and the recommended meal in a clean layout within
 * the table. The returned HTML will be injected directly into the table
 * by DataTables.
 */
function formatDetails(wine) {
  return `<div class="details-container">
            <strong>Pairing:</strong> ${wine.pairing}<br/>
            <strong>Meal:</strong> ${wine.meal}
          </div>`;
}

/*
 * Compute and render key metrics onto the dashboard cards. Metrics include
 * total number of bottles, number of unique countries, number of styles and
 * the nearest upcoming peak year. If the dashboard cards are not present
 * (e.g. on detail pages), this function silently returns.
 */
function renderDashboard() {
  const totalCard = document.querySelector('#cardTotal .card-value');
  if (!totalCard) return; // dashboard not on this page
  const total = wines.length;
  const countries = countByKey('country');
  const styles = countByKey('style');
  // Determine the nearest upcoming peak year (>= current year)
  const currentYear = new Date().getFullYear();
  const peaks = wines.map(w => parseInt(w.peak)).filter(y => !isNaN(y) && y >= currentYear);
  const upcoming = peaks.length ? Math.min(...peaks) : '–';
  document.querySelector('#cardTotal .card-value').textContent = total;
  document.querySelector('#cardCountries .card-value').textContent = Object.keys(countries).length;
  document.querySelector('#cardStyles .card-value').textContent = Object.keys(styles).length;
  document.querySelector('#cardUpcoming .card-value').textContent = upcoming;
}

/*
 * Initialise the theme based on saved preference. Adds a click handler to
 * toggle between light and dark modes, storing the choice in localStorage.
 */
function initTheme() {
  const body = document.body;
  const toggleBtn = document.getElementById('themeToggle');
  // Determine saved theme
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    body.classList.add('dark-theme');
  }
  updateToggleIcon(saved === 'dark' ? 'dark' : 'light');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      body.classList.toggle('dark-theme');
      const isDark = body.classList.contains('dark-theme');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      updateToggleIcon(isDark ? 'dark' : 'light');
    });
  }
}

/*
 * Update the theme toggle icon (sun or moon) depending on the current theme.
 */
function updateToggleIcon(theme) {
  const icon = document.querySelector('#themeToggle i');
  if (!icon) return;
  if (theme === 'dark') {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
}

/*
 * Render the wine details page. When a page contains an element with the
 * id "wineDetails", this function reads the query parameter "id", looks
 * up the corresponding wine object, and fills the page with its
 * information. It also initialises note taking and tasting log features
 * using localStorage to persist data between sessions. If the page does
 * not contain #wineDetails or the id is invalid, the function exits.
 */
function initWinePage() {
  const container = document.getElementById('wineDetails');
  if (!container) return;
  const params = new URLSearchParams(window.location.search);
  const idParam = params.get('id');
  if (!idParam) return;
  const wine = wines.find(w => w.id === parseInt(idParam));
  if (!wine) {
    container.innerHTML = '<p>Wine not found.</p>';
    return;
  }
  // Build the detail markup
  container.querySelector('.wine-name').textContent = wine.bottle;
  container.querySelector('.wine-meta').innerHTML = `
    <span><strong>Country:</strong> ${wine.country}</span> | 
    <span><strong>Region:</strong> ${wine.region}</span> | 
    <span><strong>Vintage:</strong> ${wine.vintage}</span> | 
    <span><strong>Style:</strong> ${wine.style}</span> | 
    <span><strong>Grapes:</strong> ${wine.grapes}</span> | 
    <span><strong>Window:</strong> ${wine.window}</span> | 
    <span><strong>Peak:</strong> ${wine.peak}</span>
  `;
  container.querySelector('.wine-pairing').innerHTML = `<strong>Pairing:</strong> ${wine.pairing}<br/><strong>Meal:</strong> ${wine.meal}`;
  // Notes
  const notesKey = `notes_${wine.id}`;
  const notesInput = document.getElementById('notesInput');
  if (notesInput) {
    notesInput.value = localStorage.getItem(notesKey) || '';
    document.getElementById('saveNotesBtn').addEventListener('click', () => {
      localStorage.setItem(notesKey, notesInput.value);
      alert('Notes saved!');
    });
  }
  // Tasting log
  const logForm = document.getElementById('logForm');
  if (logForm) {
    logForm.addEventListener('submit', e => {
      e.preventDefault();
      const date = document.getElementById('logDate').value;
      const rating = document.getElementById('logRating').value;
      const comment = document.getElementById('logComment').value.trim();
      const logKey = `logs_${wine.id}`;
      const logs = JSON.parse(localStorage.getItem(logKey) || '[]');
      logs.push({ date, rating, comment });
      localStorage.setItem(logKey, JSON.stringify(logs));
      logForm.reset();
      renderLogs(wine.id);
    });
  }
  renderLogs(wine.id);
}

/*
 * Render the tasting logs for a given wine id. Creates a list of past
 * entries with the date, rating and comment. If no logs exist a friendly
 * message is shown.
 */
function renderLogs(id) {
  const logsContainer = document.getElementById('logsList');
  if (!logsContainer) return;
  logsContainer.innerHTML = '';
  const logs = JSON.parse(localStorage.getItem(`logs_${id}`) || '[]');
  if (!logs.length) {
    logsContainer.innerHTML = '<p>No tasting logs yet.</p>';
    return;
  }
  logs.forEach(entry => {
    const div = document.createElement('div');
    div.className = 'log-item';
    div.innerHTML = `<strong>${entry.date}</strong> – ${entry.rating}/5<br/>${entry.comment || ''}`;
    logsContainer.appendChild(div);
  });
}

/*
 * Utility to group wines by a given key and return a counts object.
 */
function countByKey(key) {
  const counts = {};
  wines.forEach(wine => {
    const value = wine[key];
    counts[value] = (counts[value] || 0) + 1;
  });
  return counts;
}

/*
 * Create a bar chart showing the number of wines per country.
 */
function createCountryChart() {
  const counts = countByKey('country');
  const labels = Object.keys(counts);
  const data = labels.map(c => counts[c]);
  const ctx = document.getElementById('chartCountry').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Number of wines',
        data: data,
        backgroundColor: 'rgba(125, 0, 36, 0.6)',
        borderColor: 'rgba(125, 0, 36, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: { beginAtZero: true, ticks: { precision: 0 } }
      },
      plugins: {
        legend: { display: false },
        title: { display: false }
      }
    }
  });
}

/*
 * Create a bar chart showing the number of wines per vintage year.
 */
function createVintageChart() {
  // Count wines by vintage
  const counts = {};
  wines.forEach(wine => {
    const year = wine.vintage;
    counts[year] = (counts[year] || 0) + 1;
  });
  // Sort by year
  const years = Object.keys(counts).sort((a, b) => parseInt(a) - parseInt(b));
  const data = years.map(y => counts[y]);
  const ctx = document.getElementById('chartVintage').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: years,
      datasets: [{
        label: 'Number of wines',
        data: data,
        backgroundColor: 'rgba(88, 20, 28, 0.6)',
        borderColor: 'rgba(88, 20, 28, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: { beginAtZero: true, ticks: { precision: 0 } }
      },
      plugins: {
        legend: { display: false },
        title: { display: false }
      }
    }
  });
}

/*
 * Create a doughnut chart showing distribution of wines by style.
 */
function createStyleChart() {
  const counts = countByKey('style');
  const labels = Object.keys(counts);
  const data = labels.map(style => counts[style]);
  const colors = [
    'rgba(125, 0, 36, 0.7)',
    'rgba(88, 20, 28, 0.7)',
    'rgba(200, 40, 60, 0.7)',
    'rgba(170, 50, 70, 0.7)',
    'rgba(150, 60, 80, 0.7)'
  ];
  const ctx = document.getElementById('chartStyle').getContext('2d');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: colors.slice(0, labels.length),
        borderColor: '#fff',
        borderWidth: 1
      }]
    },
    options: {
      plugins: {
        legend: {
          position: 'right',
          labels: {
            boxWidth: 15
          }
        },
        title: { display: false }
      }
    }
  });
}