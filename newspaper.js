let readmore=document.getElementById("readmore");
let extracontant=document.getElementById("extracontant");




readmore.onclick=()=>{
    if(extracontant.style.display==="none"){
        extracontant.style.display="inline";
        readmore.innerHTML="Read Less";
    }
    else{
        extracontant.style.display="none";
        readmore.innerHTML="Read More";
        
    }

}



let readmore1=document.getElementById("readmore1");
let extracontant1=document.getElementById("extracontant1");
readmore1.onclick=()=>{
    if(extracontant1.style.display==="none"){
        extracontant1.style.display="inline";
        readmore1.innerHTML="Read less";
    }
    else{
        extracontant1.style.display="none";
        readmore1.innerHTML="Read More";
    }

}

let readmore2=document.getElementById("readmore2");
let extracontant2=document.getElementById("extracontant2");
readmore2.onclick=()=>{
    if(extracontant2.style.display==="none"){
        extracontant2.style.display="inline";
        readmore2.innerHTML="Read less";
    }
    else{
        extracontant2.style.display="none";
        readmore2.innerHTML="Read More";
    }

}

let readmore3=document.getElementById("readmore3");
let extracontant3=document.getElementById("extracontant3");
readmore3.onclick=()=>{
    if(extracontant3.style.display==="none"){
        extracontant3.style.display="inline";
        readmore3.innerHTML="Read less";
    }
    else{
        extracontant3.style.display="none";
        readmore3.innerHTML="Read More";
    }

}



// Select all ads
let ads = document.querySelectorAll(".ad-box");
let index = 0;

// Function to show ads one by one
function showAds() {
  if (index < ads.length) {
    ads[index].style.display = "block";
    index++;
    setTimeout(showAds, 10000); // show next ad after 1 min
  }
}

// Start ads after 2 seconds
setTimeout(showAds, 2000);

// Close button functionality
document.querySelectorAll(".close-btn").forEach(btn => {
  btn.addEventListener("click", function() {
    this.parentElement.classList.add("hidden");
  });
});
