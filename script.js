// navIcon

const navIcon = document.getElementById("navicon");
const navBar = document.getElementById("navbar");
console.log(navBar);

navIcon.addEventListener("click", () => {
  console.log("clicked");
  navBar.classList.toggle("nav-shows");
});

// Get The api


const loadAllPlants = () => {
  const url = 'https://openapi.programming-hero.com/api/plants'
  fetch(url)
    .then(res => res.json())
    .then(data => pushAllPlants(data))
}
const pushAllPlants = (allplantsdata) => {
  // console.log(allplantsdata.plants)
}




// Category Loads 

const loadCategories = () => {
  const url = 'https://openapi.programming-hero.com/api/categories'
  fetch(url)
    .then(res => res.json())
    .then(data => allCategories(data))
}


const allCategories = (categoriesData) => {
  const mainCategories = categoriesData.categories
  const categoriesParent = document.getElementById('categories-parent')
  mainCategories.forEach(category => {
    const categoriesBtn = document.createElement('button')
    console.log(category)
    categoriesBtn.className = "md:w-full btn-outline border md:text-lg md:border-none md:outline-none md:bg-transparent hover:bg-[#15803d] hover:text-[#fff] text-left p-2 mr-2 mb-2 text-[#000000] text-left ct-btn-hover"
    categoriesBtn.textContent = `${category.category_name }`

    categoriesParent.appendChild(categoriesBtn)
  })
}
















loadCategories()
loadAllPlants();