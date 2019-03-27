// achtung, ev. verdoppelung durch accordion.js


window.addEventListener('DOMContentLoaded', (event) => {
  var header = document.querySelector('header');
  mendAnchors();
});

// Problem: Accordion alters height of Page and thus Position
// of Anchor-Links: It breaks Jump-Targets for Anchor-Links.
// However, this can be mended.
function mendAnchors() {
  if (window.location.hash.substr(1)) {
    if (!header.classList.contains('shrink')) {
      header.classList.add('shrink');
      console.log('and header shrunk');
    }
    var hash = "#" + (window.location.hash.substr(1)); // test for hash-link in url
    var iconsSection = document.querySelector(hash);
    var heightOfHeader = header.getBoundingClientRect().height;
    var positionOfIcons = iconsSection.offsetTop;
    // console.log(iconsSection);
    // console.log(positionOfIcons);
    // console.log(heightOfHeader);
    // console.log(positionOfIcons + heightOfHeader);
    window.scrollTo(0, positionOfIcons + heightOfHeader);
    /*
    console.log("jumping to " + hash); 
    $(document).scrollTop( $(hash).offset().top );  
    console.log("jumped");
    // there is a problem with the top anchor-linked element getting overlapped by the header
    // let’s try to collapse the header after each jump.
    */
  }
}

