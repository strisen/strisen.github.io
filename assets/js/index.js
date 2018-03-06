$(document).ready(function () {
  $(document).scroll(function () {
    $(".navbar").addClass("scrolled")

    var screenTop = $(document).scrollTop()

    console.log(screenTop)

    if (screenTop === 0) {
      $(".navbar").removeClass("scrolled")
    }
  })

  $("#brand").click(function () {
    let header = document.getElementById("header")
    header.scrollIntoView({behavior: "smooth"})
  })

  $("#ahead").click(function () {
    let header = document.getElementById("header")
    header.scrollIntoView({behavior: "smooth"})
  })

  $("#aabout").click(function () {
    let about = document.getElementById("about")
    about.scrollIntoView({behavior: "smooth"})
  })

  $("#aprojects").click(function () {
      let projects = document.getElementById("projects")
      projects.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
  })

  $("#acontact").click(function () {
    let contact = document.getElementById("contact")
    contact.scrollIntoView({behavior: "smooth"})
  })
})
