

// show the header background color When the user scrolls down
  //Get the header ID
  var header = document.getElementById("header");
  
  // When the user scrolls down 20px from the top of the document, show the header background color
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      header.style.background = "rgba(0,0,0,0.6)";
    } else {
      header.style.background = "rgba(0,0,0,0)";
    }
  }
// End of scrolling down the header