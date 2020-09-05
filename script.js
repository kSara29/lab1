

var form = document.querySelector('.form'),
	text = document.querySelector("#text"),
	btn = document.querySelector("#btn"),
	feedback = document.querySelector(".feedback"),
	email = document.querySelector("#email"),
	e_error = document.querySelector("#e_error"),
	t_error = document.querySelector("#t_error");
	
let fbList = [];


form.addEventListener('submit', function (event){
	event.preventDefault();
	let newFB = email.value + `<br>` + text.value + `<br>` + getDate();
	
	if (!valid()) return;

	FbList.push(newFB);	

	DisplayFeedBack();
	text.value = "";
	email.value = "";
	e_error.innerText = "";
	t_error.innerText = "";

	var anhi = document.form.score
	for (i=0; i< anhi.length; i++) {
        anhi[i].checked = false;
    }

});

	
//выводим отзывы списком
function DisplayFeedBack(){
	let DisplayFB = "";
	for(let i=0; i<fbList.length; i++)
		{
		DisplayFB +=`
		<ol style="border:4px double black; width:550px;background:#6eebb7; padding:10px">
		${i + 1} ${fbList[i]}</label>
		<p style="font-size=5px"></p>
		</ol><br>
			`;
		feedback.innerHTML= DisplayFB;
		}
}


//функция даты
function getDate()
    {
        var today=new Date();
        return today.toLocaleString()+"\n";
    }


function emailValidation(email){
	const re= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

function valid(){
var tooggle=true;

if (!emailValidation(email.value)) 
	{
    e_error.innerText = "This email isn't valid";
	e_error.style.color = "red";
	tooggle=false;
	}
if(text.value.length<3)
	{
		t_error.innerText = "This message less than 3 symbols";
		t_error.style.color = "red";
		tooggle=false;
	}
else if(text.value.length>100)
	{
		t_error.innerText = "This message more than 100 symbols";
		t_error.style.color = "red";
		tooggle=false;
	}

	return tooggle;
}
