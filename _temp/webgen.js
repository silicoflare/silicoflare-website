setTimeout(function () {
    var t = document.createElement("title");
    t.innerHTML = "Dynamic HTML";
    document.head.appendChild(t);
}, 2000);

var b = document.body;

setTimeout(function () {
    var temp = document.createElement("h1");
    temp.innerHTML = "This is a heading!!";
    b.append(temp);
}, 2000);

setTimeout(function () {
    temp = document.createElement("h2");
    temp.innerHTML = 'Welcome!!';
    b.append(temp);
}, 2000);

setTimeout(function () {
    var d = document;
    temp = d.createElement("div");
    temp.innerHTML = "This webpage has been ENTIRELY constructed piece-by-piece with JavaScript! Can you believe how powerful dynamically generated pages have become??";
    b.append(temp);
}, 2000);

