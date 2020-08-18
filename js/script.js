
window.addEventListener("load", function(){
   document.querySelector(".preloader").classList.add("opacity-0");

   setTimeout(function(){
   document.querySelector(".preloader").style.display="none";
   },1000)
})

// certificate Item Filter

const filterContainer=document.querySelector(".certificate-filter"),
      filterBtns=filterContainer.children,
      totalFilterBtn=filterBtns.length,
      certificateItems=document.querySelectorAll(".certificate-item"),
      totalcertificateItem=certificateItems.length;

      for(let i=0; i<totalFilterBtn; i++){
      filterBtns[i].addEventListener("click", function(){
         filterContainer.querySelector(".active").classList.remove("active");
         this.classList.add("active");

               const filterValue=this.getAttribute("data-filter");
               for(let k=0; k<totalcertificateItem; k++){
               if(filterValue === certificateItems[k].getAttribute("data-category")){
                  certificateItems[k].classList.remove("hide");	
                  certificateItems[k].classList.add("show");
               }
               else{
                  certificateItems[k].classList.remove("show");
                     certificateItems[k].classList.add("hide");	
               }
               if(filterValue === "all"){
                     certificateItems[k].classList.remove("hide");	
                  certificateItems[k].classList.add("show");	
               }
               }

      })
      }



// certificate Lightbox
const lightbox=document.querySelector(".lightbox"),
      lightboxImg=lightbox.querySelector(".lightbox-img"),
      lightboxClose=lightbox.querySelector(".lightbox-close"),
      lightboxText=lightbox.querySelector(".caption-text"),
      lightboxCounter=lightbox.querySelector(".caption-counter");
   let itemIndex=0;

for(let i=0; i<totalcertificateItem; i++){
      certificateItems[i].addEventListener("click", function(){
      itemIndex=i;
      changeItem();
      toggleLightbox();
      })
}
   function  nextItem() {
   if(itemIndex === totalcertificateItem-1){
      itemIndex=0;
   }
   else{
      itemIndex++	
   }
      changeItem();    	
   }

   function  prevItem() {
   if(itemIndex === 0){
      itemIndex=totalcertificateItem-1;
   }
   else{
      itemIndex--;	
   }
      changeItem();    	
   }

   function toggleLightbox(){
   lightbox.classList.toggle("open");
   }

function changeItem(){
   imgSrc=certificateItems[itemIndex].querySelector(".certificate-img img").getAttribute("src");
   lightboxImg.src=imgSrc;
   lightboxText.innerHTML=certificateItems[itemIndex].querySelector("h4").innerHTML;
   lightboxCounter.innerHTML= (itemIndex+1) + " of " + totalcertificateItem; 
}

// close Lightbox
lightbox.addEventListener("click",function(event){
   if(event.target === lightboxClose || event.target === lightbox){
   toggleLightbox();
   }

}) 


// Aside Navbar
   const nav=document.querySelector(".nav"),
         navList=nav.querySelectorAll("li"),
         totalNavList=navList.length,
         allSection=document.querySelectorAll(".section"),
         totalSection=allSection.length;

for(let i=0; i<totalNavList; i++){
      const a=navList[i].querySelector("a");
      a.addEventListener("click", function(){
               // remove back section Class
               removeBackSectionClass();

         for(let j=0; j<totalNavList; j++){
         if(navList[j].querySelector("a").classList.contains("active")){
            // add back section Class
            addBackSectionClass(j)
            
         }
         navList[j].querySelector("a").classList.remove("active");

         }

         this.classList.add("active");
      showSection(this);

      if(window.innerWidth < 1200){
         asideSectionTogglerBtn();    	
      }

      })
}

function removeBackSectionClass(){
   for(let i=0; i<totalSection; i++){
            allSection[i].classList.remove("back-section");
            }
}
function addBackSectionClass(num){
   allSection[num].classList.add("back-section");
}
function showSection(element){
         for(let i=0; i<totalSection; i++){
            allSection[i].classList.remove("active");
         }
      const target=element.getAttribute("href").split("#")[1];
   document.querySelector("#"+target).classList.add("active")         
      
}

function updateNav(element){
      for(let i=0; i<totalNavList; i++){
      navList[i].querySelector("a").classList.remove("active");   	  	
      const target=element.getAttribute("href").split("#")[1];
      if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
         navList[i].querySelector("a").classList.add("active");
      }
      }
      
}

   const navTogglerBtn=document.querySelector(".nav-toggler"),
         aside=document.querySelector(".aside");

   navTogglerBtn.addEventListener("click",asideSectionTogglerBtn)
   
   function asideSectionTogglerBtn(){
      aside.classList.toggle("open");    	
      navTogglerBtn.classList.toggle("open");
      for(let i=0; i<totalSection; i++){
            allSection[i].classList.toggle("open");
         }
   }

// Contact form validation

/**

const form = document.getElementById('contact-form');
const name = document.getElementById('sendername');
const email = document.getElementById('senderemail');
const subject = document.getElementById('sendersubject');
const message = document.getElementById('sendermessage');
      
form.addEventListener('submit',(e) => {
   e.preventDefault();
   validateInputs();
});
   
function validateInputs(){
   const nameValue = name.value.trim();
   const emailValue = email.value.trim();
   const subjectValue = subject.value.trim();
   const messageValue = message.value.trim();

   if (nameValue === ''){
      setError(name,'Please enter your name');
   }else{
      setSuccess(name)
   }

   if (emailValue === ''){
      setError(email,'Please enter your email');
   }else if (!isEmail(emailValue)){
      setError(email,'Please enter valid email');
   }
   else{
      setSuccess(email)
   }

   if (subjectValue === ''){
      setError(subject,'Please enter subject');
   }else{
      setSuccess(subject)
   }

   if (messageValue === ''){
      setError(message,'Please enter subject');
   }else{
      setSuccess(message)
   }
}

function setError(inputField, errMessage){
   const formItem = inputField.parentElement;
   formItem.parentElement.classList.remove("success");
   const smallTag = formItem.querySelector("small");
   smallTag.innerText = errMessage;
   formItem.parentElement.classList.add("error");
}

function setSuccess(inputField){
   const successMessage = "Perfect !"
   const formItem = inputField.parentElement;
   formItem.parentElement.classList.remove("error");
   const smallTag = formItem.querySelector("small");
   smallTag.innerText = successMessage;
   formItem.parentElement.classList.add("success");
}

function isEmail(email){
   return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

*/
// Contact form 

window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};
formbutton("create", {action: "https://formspree.io/xbjzergk"})


