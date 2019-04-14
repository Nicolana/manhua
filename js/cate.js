$.get('../json/acg-nav.json', function(data){
  var html = " ";
  for (var i in data){
    // i is index
    // console.log(i, ":", data[i]);
    var lists = "";
    for (var j in data[i].data){
      var item = `<li class="attr" data-tag='${data[i].data[j]["data-tag"]}'>${data[i].data[j]["text"]}</li>`;
      lists += item
    }
    lists = "<ul><li class=\"attr active\" data-tag='1'>全部</li>" + lists + "</ul>"

    var box = `<div class="acg-nav-box">
      <h2 class="acg-nav-title">${data[i].title}</h2>
      <div class="acg-nav-item">
        ${lists}
      </div>
    </div>`
    html += box
  };
  $(".acg-nav-main").html(html);
})

$.get('../json/items.json', function(data){
  for (var i in data){
    var box = $("<div class=\"nav-box-item\"></div>");
    var cover = `<img src="${data[i].cover}" alt="${data[i].title}">`;
    var title = `<h2 class="nav-box-title">${data[i].title}</h2>`;
    var tags = data[i].tag.join("/");
    tags = `<div class="nav-box-tag">${tags}</div>`;
    var likes = `<div class="nav-box-like"><i class="fa fa-thumbs-up"></i>(${data[i].like})</div>`;
    var div = document.createElement('div');
    $(div).addClass('nav-box-content');
    $(div).append(tags + likes);
    box.append(cover + title);
    box.append(div)
    $(".nav-box-main").append(box);
  }
})

$('.m-style').pagination({
    mode: 'fixed',
    callback: function (api) {
        $('.now').text(api.getCurrent());
    }
}, function (api) {
    $('.now').text(api.getCurrent());
});
