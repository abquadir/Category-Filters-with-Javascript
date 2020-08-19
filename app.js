const menu = [ 
    
    {
      id: 1,
      category:"bikes",
      img: "./images/bike1.jpg",
  
    },
  
    {
      id: 2,
      category:"hills",
      img: "./images/hill3.jpg",
    },
    {
      id: 3,
      category:"cars",
      img: "./images/car1.jpg",
    },
    {
      id: 4,
      category:"hills",
      img: "./images/hill5.jpg",
    },
      {
        id:5,
        category:"cars",
        img:"./images/car2.jpg"
      },
 
    {
      id: 6,
      category:"animals",
      img: "./images/animal3.jpg",}
   ,
    {
        id: 7,
        category:"bikes",
        img: "./images/bike5.jpg",
      },
      {
        id: 8,
        category:"cars",
        img: "./images/car4.jpg",
      },
      {
        id: 9,
        category:"cars",
        img: "./images/car5.jpg",
      },
      {
        id: 10,
        category:"hills",
        img: "./images/hill1.jpg",
      },
      {
        id:11,
        category:"animals",
        img: "./images/animal1.jpg",
      },
      {
        id: 12,
        category:"hills",
        img: "./images/hill5.jpg",
      },
      {
        id: 13,
        category:"bikes",
        img: "./images/bike4.jpg",
      },
        {
          id: 14,
          category:"animals",
          img: "./images/animal2.jpg",
        },
        {
          id: 15,
          category:"hills",
          img: "./images/hill2.jpg",
        },
        {
          id: 16,
          category:"cars",
          img: "./images/car3.jpg",
        }
        ,
        {
          id: 17,
          category:"bikes",
          img: "./images/bike2.jpg",
          
        },
        {
          id: 18,
          category:"animals",
          img: "./images/animal4.jpg",
        },
        {
            id: 19,
            category:"animals",
            img: "./images/animal5.jpg",
          },
          {
            id: 20,
            category:"bikes",
            img: "./images/bike3.jpg",
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