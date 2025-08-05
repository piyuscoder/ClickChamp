let div = document.querySelector(".main");
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let btn = document.querySelector(".first");
let count = 0;
let t = 15;
let divActive = false;
div.addEventListener("click", function () {
  if (divActive==true) {
    count++;
    h2.innerText = `Score : ${count}`;
  }
});
btn.addEventListener("click", function () {
  divActive = true;
  let interval = setInterval(() => {
    h3.innerText = `Time left : ${t}`;
    t--;
    if (t < 0) {
      clearInterval(interval);
       h3.innerHTML = `Time left  :  ${t+1}   <h4 style="color:red;"> Reload page to play game</h4>` ;
      divActive = false;
    }
  }, 1000);
});

