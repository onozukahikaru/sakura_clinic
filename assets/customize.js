$(function () {
  // ボタン1 (背景色を黄色に、文字サイズを12pxに指定）
  $(".spr-summary-actions-newreview").click(function () {
    console.log("click");
    $(this).toggleClass(".on");
  });
});

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
