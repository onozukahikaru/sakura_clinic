$(function () {
  $('a[href^="#"]').click(function () {
    var adjust = -100;
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top + adjust;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});

var links = document.links;
for (let i = 0, linksLength = links.length; i < linksLength; i++) {
  if (links[i].hostname !== window.location.hostname) {
    links[i].target = "_blank";
    links[i].rel = "noreferrer noopener";
  }
}
