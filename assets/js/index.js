$(document).ready(function () {
  $(document).scroll(function () {
    $(".navbar").addClass("scrolled")

    var screenTop = $(document).scrollTop()

    if (screenTop === 0) {
      $(".navbar").removeClass("scrolled")
    }
  })
})
