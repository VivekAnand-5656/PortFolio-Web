
  let toggleBtn = document.querySelector("[data-collapse-toggle='navbar-sticky']");
  let navMenu = document.getElementById("navbar-sticky");
  let barsIcon = toggleBtn.querySelector("svg");   // hamburger icon
  let closeIcon = toggleBtn.querySelector("i");    // cross icon

  toggleBtn.onclick = function () {
    if (navMenu.classList.contains("hidden")) {
        navMenu.className="h-[5vh] w-[100%]  border-2 border-solid border-[#fff]";
        document.getElementById("u-link").className="bg-[#14243b]";
      // Show menu
      navMenu.classList.remove("hidden");
      barsIcon.classList.add("hidden");
      closeIcon.classList.remove("hidden");
    } else {
      // Hide menu
      navMenu.classList.add("hidden");
      barsIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    }
  };

  // jab link pe click ho to menu close ho jaye (mobile UX ke liye)
  document.querySelectorAll("#navbar-sticky a").forEach(link => {
    link.onclick = () => {
      navMenu.classList.add("hidden");
      barsIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    };
  }); 
//   ===== Contact =====
const names = document.getElementById("name");
const email = document.getElementById("email");
const text = document.getElementById("message");
const btn = document.getElementById("sub");
const form = document.getElementById("form");
const notify = document.getElementById("not");
let details=[];
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let obj ={
        namesD : names.value,
        mail : email.value,
        msg : text.value,
    }
    details.push(obj);
    notify.textContent="Details Send Successfully ✅";
    setTimeout(() => {
        notify.textContent="";
    }, 2000);
    
    form.reset();
})
console.log(details);

