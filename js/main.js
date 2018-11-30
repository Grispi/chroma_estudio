$(document).ready(function() {

  $(".img-responsive").click(function(event){

      var indexCarousel = $( ".img-responsive" ).index( this )

      $('.carousel').carousel(indexCarousel);
      $("#modal-gallery").modal('show');



  });


  var carouselItems = $('.img-responsive').clone().map((index, el) =>
  $('<div class="item" />').toggleClass('active',index===0).append(el)[0]);
  $('.carousel-inner').html(carouselItems);


  var carouselIndicators = $('.myImg').map((index, el) =>
  $('<li data-target="#carousel-example-generic" />').attr("data-slide-to", index)[0]);
  $('.carousel-indicators').html(carouselIndicators);

  $('.carousel').carousel({interval:false});


});

  //  /* activate the carousel */
   // $("#modal-carousel").carousel({interval:false});
  //
  //  /* change modal title when slide changes */
  //  $("#modal-carousel").on("slid.bs.carousel",       function () {
  //       $(".modal-title")
  //       .html($(this)
  //       .find(".active img")
  //       .attr("title"));
  //  });
  //
  //  /* when clicking a thumbnail */
  //  $(".row .thumbnail").click(function(){
  //   var content = $(".carousel-inner");
  //   var title = $(".modal-title");
  //
  //   content.empty();
  //   title.empty();
  //
  // 	var id = this.id;
  //    var repo = $("#img-repo .item");
  //    var repoCopy = repo.filter("#" + id).clone();
  //    var active = repoCopy.first();
  //
  //   active.addClass("active");
  //   title.html(active.find("img").attr("title"));
  // 	content.append(repoCopy);
  //
  //   // show the modal
  // 	$("#modal-gallery").modal("show");
  // });

// });
