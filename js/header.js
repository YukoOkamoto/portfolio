// ヘッダーの高さ分だけコンテンツを下げる
$(function () {
  const height = $(".js-header").height();
  $("about-wapper").css("margin-top", height + 20); 
});