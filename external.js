$(function () {
    // todo: does it work with hover?
    var data = $('div.symbol_links > h3 > a');

    console.log(data);

    var symbols = [];

    for (var i = 0, len = data.length; i < len; i++) {
        symbols.push(data[i].innerHTML.replace('\n', '').trim());
    }

    console.log(symbols);


});