// Database of items mapped to requested categories
const imageDatabase = [
  {
    id: 1,
    title: "Minimalist Mountain Sunset",
    category: "wallpapers",
    categoryLabel: "Wallpapers",
    description: "High-resolution scenic, artistic, and minimalist backgrounds optimized for desktop or mobile screens.",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    author: "Elena Rostova",
    avatar: "https://i.pravatar.cc/100?img=32"
  },
  {
    id: 2,
    title: "Abstract Chrome Sphere",
    category: "3d-renders",
    categoryLabel: "3D Renders",
    description: "Computer-generated abstract shapes, digital environments, and futuristic objects.",
    url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    author: "Marcus Vance",
    avatar: "https://i.pravatar.cc/100?img=12"
  },
  {
    id: 3,
    title: "Pine Forest Mist",
    category: "nature",
    categoryLabel: "Nature",
    description: "Landscapes, wildlife, forests, oceans, mountains, and celestial events.",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",
    author: "Sarah Jenkins",
    avatar: "https://i.pravatar.cc/100?img=47"
  },
  {
    id: 4,
    title: "Aged Dark Wood Texture",
    category: "textures",
    categoryLabel: "Textures & Patterns",
    description: "Close-up details of surfaces like wood, fabric, stone, metal, and abstract designs.",
    url: "https://images.unsplash.com/photo-1546484475-7f7bd55792da?auto=format&fit=crop&w=800&q=80",
    author: "David K.",
    avatar: "https://i.pravatar.cc/100?img=60"
  },
  {
    id: 5,
    title: "Modern Glass Skyscraper",
    category: "architecture",
    categoryLabel: "Architecture",
    description: "Buildings, interiors, urban structures, bridges, and geometric designs.",
    url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    author: "Kenji Sato",
    avatar: "https://i.pravatar.cc/100?img=3"
  },
  {
    id: 6,
    title: "Rainy Night in Tokyo",
    category: "street",
    categoryLabel: "Street Photography",
    description: "Candid shots of city life, urban environments, and human interactions in public spaces.",
    url: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=800&q=80",
    author: "Liam O'Connor",
    avatar: "https://i.pravatar.cc/100?img=11"
  },
  {
    id: 7,
    title: "Santorini Coastline Vistas",
    category: "travel",
    categoryLabel: "Travel",
    description: "Destinations, landmarks, cultural experiences, and scenic vistas from around the globe.",
    url: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80",
    author: "Chloe Bennett",
    avatar: "https://i.pravatar.cc/100?img=23"
  },
  {
    id: 8,
    title: "Thoughtful Golden Hour Portrait",
    category: "people",
    categoryLabel: "People",
    description: "Portraits, lifestyle shots, diverse groups, and candid human expressions.",
    url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    author: "Amara Diallo",
    avatar: "https://i.pravatar.cc/100?img=49"
  },
  {
    id: 9,
    title: "Vintage 35mm Grain Beach",
    category: "film",
    categoryLabel: "Film",
    description: "Analog-style photography capturing vintage aesthetics, grain, and nostalgic color grading.",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    author: "Julian Thorne",
    avatar: "https://i.pravatar.cc/100?img=68"
  },
  {
    id: 10,
    title: "Prism Light Refraction",
    category: "experimental",
    categoryLabel: "Experimental",
    description: "Avant-garde, unique, and boundary-pushing artistic visual concepts.",
    url: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800&q=80",
    author: "Zoe Sterling",
    avatar: "https://i.pravatar.cc/100?img=44"
  }
];

const categoryMetaData = {
  all: {
    title: "Explore All Visual Categories",
    desc: "Discover free high-resolution photos curated across every main creative domain."
  },
  wallpapers: {
    title: "Wallpapers",
    desc: "High-resolution scenic, artistic, and minimalist backgrounds optimized for desktop or mobile screens."
  },
  "3d-renders": {
    title: "3D Renders",
    desc: "Computer-generated abstract shapes, digital environments, and futuristic objects."
  },
  nature: {
    title: "Nature",
    desc: "Landscapes, wildlife, forests, oceans, mountains, and celestial events."
  },
  textures: {
    title: "Textures & Patterns",
    desc: "Close-up details of surfaces like wood, fabric, stone, metal, and abstract designs."
  },
  architecture: {
    title: "Architecture",
    desc: "Buildings, interiors, urban structures, bridges, and geometric designs."
  },
  street: {
    title: "Street Photography",
    desc: "Candid shots of city life, urban environments, and human interactions in public spaces."
  },
  travel: {
    title: "Travel",
    desc: "Destinations, landmarks, cultural experiences, and scenic vistas from around the globe."
  },
  people: {
    title: "People",
    desc: "Portraits, lifestyle shots, diverse groups, and candid human expressions."
  },
  film: {
    title: "Film",
    desc: "Analog-style photography capturing vintage aesthetics, grain, and nostalgic color grading."
  },
  experimental: {
    title: "Experimental",
    desc: "Avant-garde, unique, and boundary-pushing artistic visual concepts."
  }
};

// DOM Elements
const imageGrid = document.getElementById("image-grid");
const categoryTitle = document.getElementById("category-title");
const categoryDesc = document.getElementById("category-desc");
const categoryButtons = document.querySelectorAll(".cat-btn");

// Render Function
function renderImages(filterCategory = "all") {
  imageGrid.innerHTML = "";
  
  const filteredData = filterCategory === "all" 
    ? imageDatabase 
    : imageDatabase.filter(img => img.category === filterCategory);

  filteredData.forEach(item => {
    const card = document.createElement("div");
    card.className = "grid-item";
    card.innerHTML = `
      <img src="${item.url}" alt="${item.title}" loading="lazy">
      <div class="overlay">
        <div class="overlay-top">
          <span class="badge">${item.categoryLabel}</span>
        </div>
        <div class="overlay-bottom">
          <div class="author">
            <img src="${item.avatar}" alt="${item.author}" class="author-avatar">
            <span class="author-name">${item.author}</span>
          </div>
          <button class="btn-download" onclick="alert('Downloading high-res image...')">Download</button>
        </div>
      </div>
    `;
    imageGrid.appendChild(card);
  });
}

// Category Button Filter Handler
categoryButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    categoryButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const categoryKey = btn.getAttribute("data-category");
    
    // Update Header Text dynamically
    if (categoryMetaData[categoryKey]) {
      categoryTitle.textContent = categoryMetaData[categoryKey].title;
      categoryDesc.textContent = categoryMetaData[categoryKey].desc;
    }

    renderImages(categoryKey);
  });
});

// Initial Render
renderImages();