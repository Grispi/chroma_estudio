$(document).ready(function() {
  $(".img-responsive").click(function(event) {
    // variable for the carousel index so when clicking the image
    // show the same image in the carousel.-
    var indexCarousel = $(".img-responsive").index(this);

    // activate the carousel with the index
    $(".carousel").carousel(indexCarousel);

    // show the modal
    $("#modal-gallery").modal("show");
  });

  // variable for the images before clone
  var images = $(".img-responsive");
  // variable which duplicate each images and add the div tag
  var carouselItems = images
    // duplicate elemets otherwise they are taken out of the origin list
    .clone()
    // to each image wrap in the div tag with the class 'item'
    // and then an active class to the first element
    .map(function(index, img) {
      return (
        $('<div class="item" />')
          .toggleClass("active", index === 0)
          .append(img)
          // i need to return a DOM element
          .get(0)
      );
    });

  // include the divs with the images in the .carousel-inner tag html
  $(".carousel-inner").html(carouselItems);

  // Indicator for the carousel
  var carouselIndicators = images.map(
    (index, el) =>
      $('<li data-target="#carousel-example-generic" />').attr(
        "data-slide-to",
        index
      )[0]
  );
  $(".carousel-indicators").html(carouselIndicators);
  // without interval so doesn't cicle when is hidden
  $(".carousel").carousel({ interval: false });
  // end carousel and modal

  // filter menu in main.html
  // first hidden all and then show only the div class i click
  $("#residentialFilter a").click(function() {
    $("div.responsive").css({ display: "none" });
    $("div.house")
      .parent()
      .css({
        display: ""
      });
  });
  $("#multiFamilyFilter a").click(function() {
    $("div.responsive").css({ display: "none" });
    $("div.multiFamily")
      .parent()
      .css({ display: "" });
  });
  $("#commercialFilter a").click(function() {
    $("div.responsive").css({ display: "none" });
    $("div.commercial")
      .parent()
      .css({ display: "" });
  });
  $("#officesFilter a").click(function() {
    $("div.responsive").css({ display: "none" });
    $("div.offices")
      .parent()
      .css({ display: "" });
  });
  $("#projectsFilter a").click(function() {
    $("div.responsive").css({ display: "" });
  });
});
