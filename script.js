// navIcon

const navIcon = document.getElementById("navicon");
const navBar = document.getElementById("navbar");
// console.log(navBar);

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
  const plants = allplantsdata.plants
  manageSpinner(true)

  const slicesPlants = plants.slice(0, 9)
  const parentCart = document.getElementById('parent-cart')
  parentCart.innerHTML = ""
  slicesPlants.forEach(slicePlant => {
      const sliceCart = document.createElement('div');
      sliceCart.innerHTML = `
    
    <!-- cart made by rahat -->

                    <div class="cart p-5 mb-5 bg-[#fff] rounded-lg">
                        <div class="img">
                            <img class="mx-auto w-full mb-3 h-[200px] object-cover rounded-lg" src="${slicePlant.image}" alt="">
                        </div> 
                        <h1 class="mb-3 font-semibold text-2xl">${slicePlant.name}</h1>
                        <p class="mb-3">${slicePlant.description}</p>
                        
                        <div class="category-price flex items-center justify-between mb-4">
                            <div class="category">
                                <p class="text-lg px-2 rounded-xl text-[#15803d] bg-[#dcfce7]">${slicePlant.category}</p>
                            </div>

                            <div class="price flex gap-1">
                                <p class="font-bold text-lg  text-[#15803d]"><span class="flex-1">${slicePlant.price}</span></p>
                                <span class="font-bold text-lg  text-[#15803d]">$</span>
                            </div>
                            
                        </div>

                        <button type="submit" class="btn btn-active btn-success rounded-[20px] bg-[#15803d] w-full p-5 border-none outline-none text-[#fff] add-to-cart">Add to Cart</button>


                   </div>
      
    
    `
    parentCart.appendChild(sliceCart);
    
  })

  manageSpinner(false) 

  
}





// Add to cart history 


const blankArrey = []


blankArrey.forEach(historyBlank => {
  console.log(historyBlank)
})


 

document.getElementById('parent-cart').addEventListener('click', (e) => {
  if (e.target.classList.contains('add-to-cart')) {
    const cart = e.target.closest('.cart');
    const treesName = cart.children[1].innerText
    const treesPrice = cart.children[3].children[1].children[0].innerText;
    // console.log(treesPrice)
    



    const treesData = {
      name: `${treesName}`,
      price: `${treesPrice}`
    }

    const treesPrices = {
      total: `${treesPrice}`
    }

    blankArrey.push(treesData)
    historyCreate(blankArrey)
  }
});






const historyCreate = (foundsArrey) => {
  totalPrice = 0;
  const cartHistory = document.getElementById('add-to-cart-history')
  cartHistory.innerHTML = ""
  // Catch price
  
  foundsArrey.forEach(found => {
    // const priceConverted = parseInt(found.price)
    // console.log(priceConverted)
    const cartHistoryChild = document.createElement('div')
    cartHistoryChild.innerHTML = `
    
      <div class="cart-containar mt-4 p-4 bg-[#f0fdf4] rounded-lg w-full flex items-center justify-between">
                                <div class="text-content">
                                    <h1 class="font-semibold text-xl">${found.name}</h1>
                                    <p class="text-gray-500 text-lg"><span>${found.price}</span> $</p>
                                </div>

                                <div class="icon">
                                    <i class="fa-solid fa-xmark"></i>
                                </div>
                            </div>
    
    `

    cartHistory.appendChild(cartHistoryChild)

    const treesHistoryPricesConverted = parseInt(found.price);

    // console.log(treesHistoryPricesConverted)
    totalPrice += treesHistoryPricesConverted

    catchPrice(totalPrice)
    })
}

function catchPrice(prices) {
  // console.log(prices)
}



// Catch price








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
    // console.log(category)
    categoriesBtn.className = "md:w-full btn-outline border md:text-lg md:border-none md:outline-none md:bg-transparent hover:bg-[#15803d] hover:text-[#fff] text-left p-2 mr-2 mb-2 text-[#000000] text-left ct-btn-hover"
    categoriesBtn.textContent = `${category.category_name}`
    categoriesBtn.onclick = () => categoryBtnClick(category.id)
    
    categoriesParent.appendChild(categoriesBtn)
  })
}


const categoryBtnClick = (id) => {
  const url = `https://openapi.programming-hero.com/api/category/${id}`
  fetch(url)
    .then(res => res.json())
    .then(data => childCreatedByCategories(data))
}


const childCreatedByCategories = (ctId) => {
  const plants = ctId.plants
  console.log(plants)
    const parentCart = document.getElementById('parent-cart')
    parentCart.innerHTML = ""
  plants.forEach(plant => {
    console.log(plant)
    const childCart = document.createElement('div');
    childCart.innerHTML = `
    
    <!-- cart made by rahat -->

                    <div class="cart p-5 mb-5 bg-[#fff] rounded-lg">
                        <div class="img">
                            <img class="mx-auto w-full mb-3 h-[200px] object-cover rounded-lg" src="${plant.image}" alt="">
                        </div> 
                        <h1 class="mb-3 font-semibold text-2xl">${plant.name}</h1>
                        <p class="mb-3">${plant.description}</p>
                        
                        <div class="category-price flex items-center justify-between mb-4">
                            <div class="category">
                                <p class="text-lg px-2 rounded-xl text-[#15803d] bg-[#dcfce7]">${plant.category}</p>
                            </div>

                            <div class="price flex gap-1">
                                <p class="font-bold text-lg  text-[#15803d]"><span>${plant.price}</span></p>
                                <span class="font-bold text-lg  text-[#15803d]">$</span>
                            </div>
                            
                        </div>

                        <button type="submit" class="btn btn-active btn-success rounded-[20px] bg-[#15803d] w-full p-5 border-none outline-none text-[#fff] add-to-cart">Add to Cart</button>


                   </div>
      
    
    `
     parentCart.appendChild(childCart);
  })

 
}



const manageSpinner = (status) => {
  if (status == true) {
    document.getElementById('spinner').classList.remove('hidden')
    // document.getElementById('parent-cart').classList.add('hidden')
  } else {
    document.getElementById('parent-cart').classList.remove('hidden')
    // document.getElementById('spinner').classList.add('hidden')
  }

}







loadCategories()
loadAllPlants();