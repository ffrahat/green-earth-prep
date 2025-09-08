// navIcon

const navIcon = document.getElementById("navicon");
const navBar = document.getElementById("navbar");
console.log(navBar);

navIcon.addEventListener("click", () => {
  console.log("clicked");
  navBar.classList.toggle("nav-shows");
});

// Get The api

const url = "https://openapi.programming-hero.com/api/plants";

fetch(url)
  .then((response) => response.json())
  .then((data) => pushData(data));

const pushData = (catchObj) => {
  // console.log(catchObj)

  const plants = catchObj.plants;

  const fontPageShows = plants.slice(0, 9);
    fontPageShows.forEach((fontPage) => {
      // console.log(fontPage)
      const parentCart = document.getElementById('parent-cart')
      const cart = document.createElement('div')
      cart.innerHTML = `
      
                <div class="cart p-5 mb-5 bg-[#fff] rounded-lg">
                        <div class="img">
                            <img class="mx-auto w-full mb-3 h-[200px] object-cover rounded-lg" src="${fontPage.image}" alt="">
                        </div> 
                        <h1 class="mb-3 font-semibold text-2xl">${fontPage.name}</h1>
                        <p class="mb-3">${fontPage.description}</p>
                        
                        <div class="category-price flex items-center justify-between mb-4">
                            <div class="category">
                                <p class="text-lg px-2 rounded-xl text-[#15803d] bg-[#dcfce7]">${fontPage.category}</p>
                            </div>

                            <div class="price">
                                <p class="font-bold text-lg  text-[#15803d]"><span>${fontPage.price}</span> $</p>
                            </div>
                            
                        </div>

                        <button type="submit" class="btn btn-active btn-success rounded-[20px] bg-[#15803d] w-full p-5 border-none outline-none text-[#fff] add-to-cart">Add to Cart</button>


                   </div>
      
      
      `

      parentCart.appendChild(cart)

      // new 

      const myCarts = cart.querySelectorAll('.add-to-cart')
      myCarts.forEach(mycart => {
        mycart.addEventListener('click', (e) => {
          console.log(mycart.parentNode)
        })
      })
  });
    
    

  plants.forEach((plant) => {
    // console.log(plant)
  });
};
