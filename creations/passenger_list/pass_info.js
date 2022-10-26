var passNo = 0;
			
	function add()	{
		passNo++;
		var temp = document.getElementById("passTemp").content;
		var stuff = document.importNode(temp, true);
		stuff.querySelector(".passenger").setAttribute("id","pass"+passNo);
		stuff.querySelector(".data").textContent = "  PASSENGER "+passNo+"  ";
		stuff.querySelector(".closebutton").setAttribute("id",passNo);
		stuff.querySelector(".closebutton").setAttribute("onclick","del("+passNo+");");
		stuff.querySelector(".age").setAttribute("oninput","getConc("+passNo+");");
		document.getElementById("passList").appendChild(stuff);
	}
	
	function del(num)	{
		var divi = document.getElementById("pass"+num);
		divi.remove();
		for(i=num+1;i<=passNo;i++)	{
			var work = document.getElementById("pass"+i);
			work.querySelector(".data").textContent = "  PASSENGER "+(i-1)+"  ";
			work.querySelector(".closebutton").setAttribute("id",(i-1));
			work.querySelector(".closebutton").setAttribute("onclick","del("+(i-1)+");");
			work.setAttribute("id","pass"+(i-1));
		}
		passNo--;
	}
	
	function submit()	{
		var details = new Array(passNo);
		for(var i = 1 ; i <= passNo ; i++)
		{
			details[i-1] = {"passNo":0, "passName":"", "age":0, "gender":"", "berth":"", "conc":""};
			var work = document.getElementById("pass"+i);
			details[i-1].passNo = i;
			details[i-1].passName = work.querySelector(".passName").value;
			details[i-1].age = work.querySelector(".age").value;
			details[i-1].gender = work.querySelector(".gender").value;
			details[i-1].berth = work.querySelector(".berth").value;
			details[i-1].conc = work.querySelector(".conc").checked;
		}
		sessionStorage.setItem("details",JSON.stringify(details));
		window.location.href = "pass_display.html";
	}
	
	function getConc(num)	{
		document.getElementById("pass"+num).querySelector(".sp").hidden = (document.getElementById("pass"+num).querySelector(".age").value > 55) ? false : true;
	}