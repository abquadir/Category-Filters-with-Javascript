const menu = [ 
    
    {
      id: 1,
      category:"bikes",
      img: "./images/bike1.jpg",
  
    },
    {
      id: 2,
      category:"bikes",
      img: "./images/bike2.jpg",
      
    },
    {
      id: 3,
      category:"cars",
      img: "./images/car1.jpg",
    },
      
    {
      id: 4,
      category:"bikes",
      img: "./images/bike3.jpg",
    },
    {
      id: 5,
      category:"cars",
      img: "./images/car2.jpg",
    },
    {
      id: 6,
      category:"bikes",
      img: "./images/bike4.jpg",
    },
    {
        id: 4,
        category:"bikes",
        img: "./images/bike5.jpg",
      },
      {
        id: 5,
        category:"cars",
        img: "./images/car3.jpg",
      },
      {
        id: 1,
        category:"cars",
        img: "./images/car5.jpg",
      },
  ];

  const container = document.querySelector(".container")
  const filterBtns = document.querySelectorAll(".btn  .btn-b")

  window.addEventListener("DOMContentLoaded",function(){
      displayProjectsItem(menu)
  });

  filterBtns.forEach((btn) => {
    btn.addEventListener("click",(e)=>{
      const category=e.currentTarget.dataset.id;
      const menucategory = menu.filter(function(proj){
        //  


        if(proj.category === category){
          return proj;
        }
     
      })
      // console.log(menucategory );
      if(category==="all"){
        displayProjectsItem(menu)
      }
      else{
        displayProjectsItem(menucategory )
      }
    })
  });

function displayProjectsItem(projectItem ){
    let displayProject = projectItem.map(function(item){
        // console.log(item);
        return  `   <div class="box a">
        <img src="${item.img}" alt="">
            </div>`
      })
      displayProject = displayProject.join("")
      container.innerHTML =displayProject
}