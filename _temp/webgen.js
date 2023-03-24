var t = document.createElement("title");
t.innerHTML = "Dynamic HTML";
document.head.appendChild(t);

var b = document.body;

var temp = document.createElement("h1");
temp.innerHTML = "This is a heading!!";
b.append(temp);

temp = document.createElement("h2");
temp.innerHTML = 'Welcome!!';
b.append(temp);

var d = document;
temp = d.createElement("div");
temp.innerHTML = "This webpage has been ENTIRELY constructed piece-by-piece with JavaScript! Can you believe how powerful dynamically generated pages have become??";
b.append(temp);