const elements = document.getElementsByClassName("fadeInClass");

// listen for scroll event and call animate function
document.addEventListener("scroll", animate);

// check if element is in view
function inView(element) {
  // get window height
  var windowHeight = window.innerHeight;
  // get number of pixels that the document is scrolled
  var scrollY = window.scrollY || window.pageYOffset;

  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  var scrollPosition = scrollY + windowHeight;

  // get element position (distance from the top of the page to the bottom of the element)
  var elementPosition =
    element.getBoundingClientRect().top + scrollY + element.clientHeight;

  // is scroll position greater than element position? (is element in view?)
  if (scrollPosition > elementPosition) {
    return true;
  }

  return false;
}

// animate element when it is in view
function animate() {
  for (const element of elements) {
    // is element in view?
    if (inView(element)) {
      // element is in view, add class to element
      element.classList.add("fadeInClassAnimation");
    }
  }
}
