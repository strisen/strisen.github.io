$(document).ready(function () {
  $(document).scroll(function () {
    $(".navbar").addClass("scrolled")

    var screenTop = $(document).scrollTop()

    console.log(screenTop)

    if (screenTop === 0) {
      $(".navbar").removeClass("scrolled")
    }
  })

  $("#ahead").click(function () {
    $("html, body").animate({
      scrollTop : $("#header").offset().top }, 500)
  })

  $("#aabout").click(function () {
    $("html, body").animate({
      scrollTop : $("#header").offset().top + 2000 }, 500)
  })

  $("#aprojects").click(function () {
    $("html, body").animate({
      scrollTop : $("#header").offset().top + 547 }, 500)
  })

  $("#acontact").click(function () {
    $("html, body").animate({
      scrollTop : $("#header").offset().top + 2000 }, 500)
  })
})
