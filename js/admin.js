// Initialize DOM elements
const mobileMenu = document.getElementById("mobile-menu");
const navbarBurger = document.querySelector(".navbar-burger");
const navbar = document.getElementById("navbar");

// Mobile menu toggle function
function toggleMobileMenu() {
  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("slide-in");
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70, // Adjust for fixed navbar
        behavior: "smooth",
      });
      // Close mobile menu if open
      if (mobileMenu.classList.contains("slide-in")) {
        toggleMobileMenu();
      }
    }
  });
});

// Event listener for navbar burger
if (navbarBurger){
  navbarBurger.addEventListener("click", toggleMobileMenu);
}



// courses
const courses = JSON.parse(localStorage.getItem("courses")) || [
  {
    title:"HTML & CSS",
    instractor:"Yasser Mohamed",
    price:"30",
    discraption:"HTML & CSS is a programming language that is used to create dynamic and interactive web applications.",
    img:"https://nouvil.net/wp-content/uploads/2023/06/New-Project-1.png",
  },
  {
    title:"JavaScript",
    instractor:"Yasser Mohamed",
    price:"50",
    discraption:"JavaScript is a programming language that is used to create dynamic and interactive web pages.",
    img:"https://miro.medium.com/v2/resize:fit:1200/1*bz9rrfjqI1o8CkvJ0705GQ.jpeg",
  },
  {
    title:"Python",
    instractor:"Omar Mohamed",
    price:"30",
    discraption:"Python is a programming language that is used to create dynamic and interactive web pages.",
    img:"https://images.hdqwalls.com/wallpapers/python-logo-4k-i6.jpg",
  },
  {
    title:"TypeScript",
    instractor:"Rami Amin",
    price:"25",
    discraption:"TypeScript is a programming language that is used to create dynamic and interactive web pages",
    img:"https://149695847.v2.pressablecdn.com/wp-content/uploads/2022/04/types.png",
  },
  {
    title:"PHP",
    instractor:"Mohamed Hamed",
    price:"40",
    discraption:"PHP is a programming language that is used to create dynamic and interactive web pages.",
    img:"https://rundiz.com/wordpress/wp-content/uploads/agnicms-importer/exported-media/public/upload/media/d8c03a42ddbe224bbccaf124516a072b.png",
  },
  {
    title:"C++",
    instractor:"Yasser Mohamed",
    price:"30",
    discraption:"C++ is a programming language that is used to create dynamic and interactive web applications.",
    img:"https://tse2.mm.bing.net/th/id/OIP.bsc1QJcK-lo3GTIvlX8gNgAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    title:"React Js",
    instractor:"Ahmed Khaled",
    price:"20",
    discraption:"React Js is a JavaScript library for building user interfaces",
    img:"https://www.colourtheme.com/images/reactJS_logo.webp",
  },
  {
    title:"Angular",
    instractor:"Yasser Mohamed",
    price:"50",
    discraption:"Angular is a framework for building dynamic and interactive web applications.",
    img:"https://www.mindinventory.com/blog/wp-content/uploads/2022/11/angular-15-1.webp",
  },
  {
    title:"NodeJs",
    instractor:"Mohamed Hamed",
    price:"60",
    discraption:"Node.js is a runtime environment for executing JavaScript code on the server side.",
    img:"https://th.bing.com/th/id/R.e0a16154e345422aaa9ee5c132ef3008?rik=F%2fuPi1lFTsq%2bmg&riu=http%3a%2f%2fwww.nacios.it%2fwp-content%2fuploads%2f2015%2f10%2fnodejs-1920x1200.png&ehk=jtkLMoetTQR7u6oN%2f46%2fwYw6xQt1wCNvJ4YSlKDBBmU%3d&risl=&pid=ImgRaw&r=0",
  },

];


let mode = "create";
let tmp;



// add course
function SaveCourses(){
  const addCourseForm = document.getElementById("addCourseForm");
  if(!addCourseForm) return;
  addCourseForm.addEventListener("submit",function(e){
    e.preventDefault();
    let course = {
      title : document.getElementById("CourseName").value,
      instractor : document.getElementById("InstractorName").value,
      price : document.getElementById("Price").value,
      discraption : document.getElementById("Discraption").value,
      img : document.getElementById("ImgCourse").value,
    }
    if (mode === "edit"){
      mode = "create";
      document.getElementById("addCourse").innerHTML = "Add Course";
      courses[tmp] = course;
      localStorage.setItem("courses",JSON.stringify(courses));
      alert("Course Edited Successfully");
      document.getElementById("tbody").innerHTML = ``;
      ReadCourses();
      addCourseForm.reset();

    }else{
      courses.push(course);
      localStorage.setItem("courses",JSON.stringify(courses));
      alert("Course Added Successfully");
      document.getElementById("tbody").innerHTML = ``;
      ReadCourses();
      addCourseForm.reset();
    }

  })
}

// Show courses in courses page
function ShowCoursesInCourses(){
  const coursesList = document.getElementById("courses-list2");
  if(!coursesList) return;
  coursesList.innerHTML = "";
  courses.forEach((course , index) =>{
    coursesList.innerHTML += `
        <div id="${index}" class="card-course w-full mx-auto my-4 max-w-[18rem] bg-[#1a1a1c] rounded-lg shadow-sm overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300 border-3 border-[#1a1a1c]  hover:border-indigo-600">
            <a href="#">
                <img class=" w-full h-[170px]" src="${course.img}" alt="product image" />
            </a>
            <div class="px-4 py-4 flex flex-col gap-3">
                <a href="#">
                    <h2 class="text-2xl font-semibold tracking-tight text-[#eeeeee]">${course.title}</h2>
                </a>
                <a href="#">
                    <h3 class="text-lg font-medium tracking-tight text-[#eeeeee]">${course.instractor}</h3>
                </a>
                <div class="flex items-center ">
                    <div class="flex items-center space-x-1 rtl:space-x-reverse">
                        <svg class="w-4 h-4 hover:scale-110 cursor-pointer transition-all duration-300 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                        <svg class="w-4 h-4 hover:scale-110 cursor-pointer transition-all duration-300 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                        <svg class="w-4 h-4 hover:scale-110 cursor-pointer transition-all duration-300 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                        <svg class="w-4 h-4 hover:scale-110 cursor-pointer transition-all duration-300 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                        <svg class="w-4 h-4 hover:scale-110 cursor-pointer transition-all duration-300 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                    </div>
    
                </div>
                <div class="flex items-center justify-between">
                    <span class="card-price text-3xl font-bold text-[#eeeeee]"><span class="text-indigo-500">$</span>${course.price}</span>
                    <button data-index="${index}" class="card-btn text-[#eeeeee] cursor-pointer bg-indigo-500 hover:bg-indigo-600 hover:text-white font-semibold rounded-xl text-base px-4 py-2 text-center transition-all duration-300">Learn Now</button>
                </div>
            </div>
        </div>`;
        
  });
  AddCoursePage();
}

function ShowCoursesInHome(){
  const coursesList = document.getElementById("courses-list");
  if(!coursesList) return;
  coursesList.innerHTML = "";
  for(let x = courses.length - 1; x >= courses.length - 10; x--){
    if(courses[x] && courses[x].img){
      coursesList.innerHTML += `
          <div id="${x}" class="card-course w-full mx-auto my-4 max-w-[18rem] bg-[#1a1a1c] rounded-lg shadow-sm overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300 border-3 border-[#1a1a1c]  hover:border-indigo-600">
              <a href="#">
                  <img class="w-full h-[170px]" src="${courses[x].img}" alt="product image" />
              </a>
              <div class="px-4 py-4 flex flex-col gap-3">
                  <a href="#">
                      <h2 class="text-2xl font-semibold tracking-tight text-[#eeeeee]">${courses[x].title}</h2>
                  </a>
                  <a href="#">
                      <h3 class="text-lg font-medium tracking-tight text-[#eeeeee]">${courses[x].instractor}</h3>
                  </a>
                  <div class="flex items-center ">
                      <div class="flex items-center space-x-1 rtl:space-x-reverse">
                          <svg class="w-4 h-4 hover:scale-110 cursor-pointer transition-all duration-300 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                          </svg>
                          <svg class="w-4 h-4 hover:scale-110 cursor-pointer transition-all duration-300 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                          </svg>
                          <svg class="w-4 h-4 hover:scale-110 cursor-pointer transition-all duration-300 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                          </svg>
                          <svg class="w-4 h-4 hover:scale-110 cursor-pointer transition-all duration-300 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                          </svg>
                          <svg class="w-4 h-4 hover:scale-110 cursor-pointer transition-all duration-300 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                          </svg>
                      </div>
                  </div>
                  <div class="flex items-center justify-between">
                      <span class="card-price text-3xl font-bold text-[#eeeeee]"><span class="text-indigo-500">$</span>${courses[x].price}</span>
                      <button data-index="${x}" class="card-btn text-[#eeeeee] cursor-pointer bg-indigo-500 hover:bg-indigo-600 hover:text-white font-semibold rounded-xl text-base px-4 py-2 text-center transition-all duration-300">Learn Now</button>
                  </div>
              </div>
          </div>`;
    }

  };
  AddCoursePage();
}

function SearchCourses() {
  let Search = document.getElementById("CourseSearchCourses");
  if (!Search) return;

  Search.addEventListener("input", function () {
    let searchValue = Search.value.toLowerCase();
    let filteredCourses = courses.filter(course =>
      course.title.toLowerCase().includes(searchValue)
    );
    localStorage.setItem("filteredCourses", JSON.stringify(filteredCourses));

    let coursesList = "";

    if (filteredCourses.length === 0) {
      coursesList = `<p class="text-white text-xl text-center mt-6">Courses Not Found</p>`;
    } else {
      filteredCourses.forEach((course , index) => {
        coursesList += `
            <div id="${index}" class="card-course w-full mx-auto my-4 max-w-[18rem] bg-[#1a1a1c] rounded-lg shadow-sm overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300 border-3 border-[#1a1a1c]  hover:border-indigo-600">
              <a href="#">
                  <img class=" w-full h-[170px]" src="${course.img}" alt="product image" />
              </a>
              <div class="px-4 py-4 flex flex-col gap-3">
                  <a href="#">
                      <h2 class="text-2xl font-semibold tracking-tight text-[#eeeeee]">${course.title}</h2>
                  </a>
                  <a href="#">
                      <h3 class="text-lg font-medium tracking-tight text-[#eeeeee]">${course.instractor}</h3>
                  </a>
                  <div class="flex items-center ">
                      <div class="flex items-center space-x-1 rtl:space-x-reverse">
                          <svg class="w-4 h-4 hover:scale-110 cursor-pointer transition-all duration-300 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                          </svg>
                          <svg class="w-4 h-4 hover:scale-110 cursor-pointer transition-all duration-300 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                          </svg>
                          <svg class="w-4 h-4 hover:scale-110 cursor-pointer transition-all duration-300 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                          </svg>
                          <svg class="w-4 h-4 hover:scale-110 cursor-pointer transition-all duration-300 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                          </svg>
                          <svg class="w-4 h-4 hover:scale-110 cursor-pointer transition-all duration-300 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                          </svg>
                      </div>
        
                  </div>
                  <div class="flex items-center justify-between">
                      <span class="card-price text-3xl font-bold text-[#eeeeee]"><span class="text-indigo-500">$</span>${course.price}</span>
                      <button data-index="${index}" class="card-btn cursor-pointer text-[#eeeeee] bg-indigo-500 hover:bg-indigo-600 hover:text-white font-semibold rounded-xl text-base px-4 py-2 text-center transition-all duration-300">Learn Now</button>
                  </div>
              </div>
            </div>`;
      });
    };

    document.getElementById("courses-list2").innerHTML = coursesList;
    AddCoursePage();
  });
}
function SearchHome() {
  let Search = document.getElementById("CourseSearchHome");
  if (!Search) return;

  Search.addEventListener("input", function () {
    let searchValue = Search.value.toLowerCase();
    let filteredCourses = courses.filter(course =>
      course.title.toLowerCase().includes(searchValue)
    );
    
    localStorage.setItem("filteredCourses", JSON.stringify(filteredCourses));

    let coursesList = "";

    if (filteredCourses.length === 0) {
      coursesList = `<p class="text-white text-xl text-center mt-6">Courses Not Found</p>`;
    } else {
      filteredCourses.forEach((course,index) => {
        coursesList += `
        <div id="${index}" class="card-course w-full mx-auto my-4 max-w-[18rem] bg-[#1a1a1c] rounded-lg shadow-sm overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300 border-3 border-[#1a1a1c]  hover:border-indigo-600">
            <a href="#">
                <img class=" w-full h-[170px]" src="${course.img}" alt="product image" />
            </a>
            <div class="px-4 py-4 flex flex-col gap-3">
                <a href="#">
                    <h2 class="text-2xl font-semibold tracking-tight text-[#eeeeee]">${course.title}</h2>
                </a>
                <a href="#">
                    <h3 class="text-lg font-medium tracking-tight text-[#eeeeee]">${course.instractor}</h3>
                </a>
                <div class="flex items-center">
                    <div class="flex items-center space-x-1 rtl:space-x-reverse">
                        <svg class="w-4 h-4 hover:scale-110 cursor-pointer transition-all duration-300 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                        <svg class="w-4 h-4 hover:scale-110 cursor-pointer transition-all duration-300 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                        <svg class="w-4 h-4 hover:scale-110 cursor-pointer transition-all duration-300 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                        <svg class="w-4 h-4 hover:scale-110 cursor-pointer transition-all duration-300 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                        <svg class="w-4 h-4 hover:scale-110 cursor-pointer transition-all duration-300 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                    </div>
    
                </div>
                <div class="flex items-center justify-between">
                    <span class="card-price text-3xl font-bold text-[#eeeeee]"><span class="text-indigo-500">$</span>${course.price}</span>
                    <button data-index="${index}" class="card-btn cursor-pointer text-[#eeeeee] bg-indigo-500 hover:bg-indigo-600 hover:text-white font-semibold rounded-xl text-base px-4 py-2 text-center transition-all duration-300">Learn Now</button>
                </div>
            </div>
        </div>`;
      });
    };

    document.getElementById("courses-list").innerHTML = coursesList;
    AddCoursePage();
  });
}

function register(){
  const form = document.getElementById("registerForm");
  if(!form) return;
  form.addEventListener("submit",function(e){
    e.preventDefault();
    const FristName = document.getElementById("FristName").value.trim();
    const LastName = document.getElementById("LastName").value.trim();
    const Email = document.getElementById("Email").value.trim();
    const Password = document.getElementById("Password").value.trim();
    const ConfirmPassword = document.getElementById("ConfirmPassword").value.trim();

    if(Password !== ConfirmPassword){
      alert("Password Not Match");
      return;
    };

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find(user => user.Email === Email)) {
      alert("Email Already Exists");
      return;
    };

    const role = Email === "CodeZone@gmail.com" ? "admin" : "user";
    
    let user = {FristName , LastName , Email , Password , role};
    users.push({FristName , LastName , Email , Password , role});
    localStorage.setItem("users",JSON.stringify(users));
    localStorage.setItem("loggedInUser",JSON.stringify(user));
    alert("You Have Registered Successfully");
    form.reset();
    window.location.href = "home.html";


  })
}

function login(){
  const form = document.getElementById("loginForm");
  if(!form) return;
  form.addEventListener("submit",function(e){
    e.preventDefault();
    const Email = document.getElementById("Email").value.trim();
    const Password = document.getElementById("Password").value.trim();

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users.find(user => user.Email === Email && user.Password.toLowerCase() === Password.toLowerCase())
    if (user) {
      localStorage.setItem("loggedInUser",JSON.stringify(user));
      alert("You Have Logged In Successfully");
      form.reset();
      window.location.href = "home.html";
    }else{
      alert("Wrong Email Or Password");
      return;
    };

  })
}

function logout(){
  const logout = document.getElementById("logout");
  if(!logout) return; 
  logout.addEventListener("click",function(e){
    e.preventDefault();
    alert("Are You Sure ?");
    localStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
  })
}

function ReadCourses(){
  const tbody = document.getElementById("tbody");
  if(!tbody)return;
  courses.forEach((course , index) => {
    tbody.innerHTML +=`
      <tr class="odd:bg-transparent text-[#eeeeee] font-medium even:bg-[#1a1a1a]">
        <th scope="row" class="px-4 py-4 whitespace-nowrap">
            ${course.title}
        </th>
        <td class="px-4 py-4 whitespace-nowrap">
            ${course.instractor}
        </td>
        <td class="px-4 py-4 whitespace-nowrap">
            ${course.price}
        </td>
        <td class="px-4 py-4 whitespace-nowrap">
            <p class="font-medium cursor-pointer text-indigo-500 hover:underline" onclick="DeleteCourse(${index} , document.getElementById('tbody'))">Delete</p>
        </td>
        <td class="px-4 py-4 whitespace-nowrap">
            <p class="font-medium cursor-pointer text-indigo-500 hover:underline" onclick="EditCourse(${index})">Edit</p>
        </td>
      </tr>
       `
  })

}

function DeleteCourse(index , tbody){
  courses.splice(index , 1);
  localStorage.courses = JSON.stringify(courses);
  tbody.innerHTML = ``;
  ReadCourses();
  
}

function EditCourse(index){
  let course = courses[index];
  document.getElementById("CourseName").value = course.title;
  document.getElementById("InstractorName").value = course.instractor;
  document.getElementById("Price").value = course.price;
  document.getElementById("Discraption").value = course.discraption;
  document.getElementById("ImgCourse").value = course.img;
  scroll(
    {
      top : 0,
      behavior : "smooth"
    }
  )
  mode = "edit";
  tmp = index;
  document.getElementById("addCourse").innerHTML = "Edit Course";

}

// admin Search by name course
function adminSearch(){
  let Searchmode = "name";
  const searchByName = document.getElementById("searchByName")
  const searchByInstractor = document.getElementById("searchByInstractor")
  if(!searchByInstractor || !searchByName) return;
  // تغيير وضع البحث لما المستخدم يضغط على أي زر
  searchByName.addEventListener("click", function () {
    Searchmode = "name";
    document.getElementById("adminSearch").placeholder = "Search by Name ";
  });
  
  searchByInstractor.addEventListener("click", function () {
    document.getElementById("adminSearch").placeholder = "Search by Instractor ";
    Searchmode = "instractor";
  });

  // البحث الفعلي لما المستخدم يكتب في خانة البحث
  const Search = document.getElementById("adminSearch");
  if (!Search) return;

  Search.addEventListener("input", function (e) {
    let searchValue = e.target.value.toLowerCase();
    let tbody = document.getElementById("tbody");
    let tr = tbody.querySelectorAll("tr");

    tr.forEach((row) => {
      if (Searchmode === "name") {
        let title = row.querySelector("th").textContent.toLowerCase();
        row.style.display = title.includes(searchValue) ? "table-row" : "none";
      } else if (Searchmode === "instractor") {
        let instractor = row.querySelectorAll("td")[0].textContent.toLowerCase();
        row.style.display = instractor.includes(searchValue) ? "table-row" : "none";
      }
    });
  });
}

function Role() {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  if(!loggedInUser) return;
  const role = loggedInUser.role;
  if (role ==="admin"){

    let adminlinkpc = document.getElementsByClassName("adminlinkpc")
    for(let i = 0 ; i < adminlinkpc.length; i++){
      adminlinkpc[i].style.display = "inline-flex"
    }

    let adminlinkmb = document.getElementsByClassName("adminlinkmb")
    for(let i = 0 ; i < adminlinkmb.length; i++){
      adminlinkmb[i].style.display = "block"
    }

  }
}



function AddCoursePage(){
  const CardBtn = document.getElementsByClassName("card-btn");
  const SearchHome = document.getElementById("CourseSearchHome")
  const SearchCourses = document.getElementById("CourseSearchCourses")
  const filteredCourses = JSON.parse(localStorage.getItem("filteredCourses"))
  if(!CardBtn)return;
  for(let i = 0 ; i < CardBtn.length;i++){
    CardBtn[i].addEventListener("click",function(){
      const index = Number(this.dataset.index);

      if(window.location.pathname.includes("home.html")){
        if(index !== undefined && courses[index] &&  SearchHome.value.trim() ==""){

          localStorage.setItem("selectedCourse", JSON.stringify(courses[index]));
          window.location.href = "courespage.html";

        }else if(index !== undefined && filteredCourses[index] && SearchHome.value.trim() !==""){

          localStorage.setItem("selectedCourse", JSON.stringify(filteredCourses[index]));
          window.location.href = "courespage.html";

        }else{
          console.error("Course not found or index undefined");
        };
      }else if(window.location.pathname.includes("coureses.html")){
        if(index !== undefined && courses[index] &&  SearchCourses.value.trim() ==""){

          localStorage.setItem("selectedCourse", JSON.stringify(courses[index]));
          window.location.href = "courespage.html";

        }else if(index !== undefined && filteredCourses[index] && SearchCourses.value.trim() !==""){

          localStorage.setItem("selectedCourse", JSON.stringify(filteredCourses[index]));
          window.location.href = "courespage.html";

        }else{
          console.error("Course not found or index undefined");
        };
      }else{
        if(index !== undefined && courses[index]){
          localStorage.setItem("selectedCourse", JSON.stringify(courses[index]));
          window.location.href = "courespage.html";
        }else{
          console.error("Course not found or index undefined");
        };
      };

    });
  };
};

function LoadSelectedCoursePage() {
  let selectedCourse = JSON.parse(localStorage.getItem("selectedCourse"))
    let CoursePage = document.getElementById("CoursePage"); 
    CoursePage.innerHTML = `
    <div class="flex flex-col gap-6 w-full lg:w-1/2">
      <h2 id="CourseName" class="text-4xl font-bold text-white">Course : ${selectedCourse.title}</h2>
      <h3 id="InstractorName" class="text-[#eeeeee] font-semibold text-lg">Instructor : ${selectedCourse.instractor}</h3>
      <p id="Discraption" class="discraption text-[#eeeeee] font-medium w-full sm:w-10/12">${selectedCourse.discraption}</p>
      <span id="Price" class="price text-3xl font-bold text-[#eeeeee]">Price : <span class="text-indigo-500">$</span>${selectedCourse.price}</span>
      <div class="flex items-center gap-4 ">
          <div class="flex items-center space-x-1 rtl:space-x-reverse">
              <svg class="w-4 h-4 hover:scale-110 cursor-pointer transition-all duration-300 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <svg class="w-4 h-4 hover:scale-110 cursor-pointer transition-all duration-300 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <svg class="w-4 h-4 hover:scale-110 cursor-pointer transition-all duration-300 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <svg class="w-4 h-4 hover:scale-110 cursor-pointer transition-all duration-300 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <svg class="w-4 h-4 hover:scale-110 cursor-pointer transition-all duration-300 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
          </div>
          <p class="text-sm font-medium text-gray-300 underline">73 reviews</p>
      </div>
      <button class="w-full lg:w-10/12 text-[#eeeeee] my-4 bg-indigo-500 hover:bg-indigo-600 hover:text-white font-semibold rounded-xl  px-4 py-2 text-center cursor-pointer transition-all duration-300">Enroll Now</button>
    </div>

    <div class="w-full lg:w-1/2">
        <video id="video" class="w-full rounded-xl border-2 border-transparent hover:border-indigo-500 transition-all duration-300 " src="imgs/video.mp4"  controls poster="${selectedCourse.img}"></video>
    </div> 
    `
}

if (window.location.pathname.includes("courespage.html")) {
  LoadSelectedCoursePage();
}


document.addEventListener("DOMContentLoaded", function () {
  Role();
  SaveCourses();
  ShowCoursesInCourses();
  SearchCourses();
  SearchHome();
  register();
  login();
  logout();
  ReadCourses();
  adminSearch();
  ShowCoursesInHome();
}); 
