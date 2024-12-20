const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function mouseFollowerCircle() {
  window.addEventListener("mousemove", function(details) {
     console.log( details.clientX,details.clientY);
      
  });
}

mouseFollowerCircle();
