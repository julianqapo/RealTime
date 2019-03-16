/*
let v = 0;
document.addEventListener("DOMContentLoaded", ()=> {v = prompt("Write The Estimate Time You Want to Spend : ", "")
})
*/


//write coments


let sub = document.getElementById("sub")
let ul = document.getElementById("ul")
let form = document.querySelector("#form")

function add(){
    let txt = document.getElementById("txt").value    
    let li = document.createElement("li")
    li.setAttribute("class", "lis")
   // li.setAttribute("onclick", "addCom()")
    if (txt == ""){
        document.getElementById("txt").setAttribute("placeholder", "   Can't be empty")
    } else{
        document.getElementById("txt").setAttribute("placeholder", "   What's on your mind!")
        li.innerText = txt
        ul.appendChild(li)
        let del = document.createElement("input")
        del.setAttribute("type", "submit")
        del.setAttribute("value", "Remove")
        del.setAttribute("class", "del")
        li.appendChild(del)
        //from here
        let inp2 = document.createElement("input")
        inp2.setAttribute("type", "text")
        inp2.setAttribute("class", "inp2")
        let sub2 = document.createElement("input")
        sub2.setAttribute("type", "submit")
        sub2.setAttribute("value", "Add Comment")
        sub2.setAttribute("class", "sub2")
       // sub2.setAttribute("onclick", "addCom()")
        li.appendChild(inp2)
        li.appendChild(sub2)
        sub2.addEventListener("click", function(e){
            let li2 = document.createElement("li")
            let del2 = document.createElement("input")
            del2.setAttribute("type", "submit")
            del2.setAttribute("value", "X")
            del2.setAttribute("class", "del2")
            li2.innerText = inp2.value
            li2.appendChild(del2)
            ul2.appendChild(li2)
            inp2.value = ""
          
        })

       

        let ul2 = document.createElement("ul")
        ul2.setAttribute("class", "ul2")
        li.insertAdjacentElement("beforeend", ul2)
        //li.appendChild(ul2)
        

    }
}




sub.addEventListener("click", function(e){
    e.preventDefault()
    add()
    form.reset()
})

/*
ul.addEventListener("mouseover", function(e){
 // let  li = document.getElementsByClassName("lis") 
  
  if (e.target.className == "lis" && e.target.firstElementChild == null){
    e.target.appendChild(del)
  }  
})*/

//edit post






// delet that comment
ul.addEventListener("click", function(e){
    if (e.target.className == "del" || e.target.className == "del2" ){
      e.target.parentElement.remove()
    }
})



// count down
function stime(du,tv){   
    setInterval(function(){
        let min = parseInt(du / 60);
        let sec = parseInt(du% 60);

        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;
        tv.textContent = min +":"+ sec
        if (--du<0){
            
            tv.innerText = "YOUR TIME IS UP."
                console.log("done")
                let lists= document.querySelectorAll("li");
                for (let i= 0; i<lists.length; i++){
                    lists[i].setAttribute("class", "finish")                   
                    document.body.removeAttribute("style")
                    document.body.style.backgroundColor = "aqua";
                }            
        }
       
    },1000 )
}


let run = document.getElementById("run")
let tv = document.getElementById("tv")
run.addEventListener("click", function (){
    let est = document.getElementById("es");
    stime(est.value * 60, tv ) 
    run.remove();
    est.remove();
})


//goals
let pgoal = document.getElementById("goal")
function goal(){    
   let txt = `in a world that we find it hard to control our time, we've found a way to hurt your eyes and make you suffer if you think of an extra second.
    <br> don't just say "smoking kills" we all know that, give us a solution.`
    pgoal.innerHTML == ""? pgoal.innerHTML=txt : pgoal.innerHTML = ""
}


//changing photos
let dShow = document.getElementById("dShow")
let pic = document.querySelector("img")

let storedPics = []
function addPhotos(){ 
    let picLinks = document.getElementById("picLinks").value 
    storedPics.push(picLinks+".jpg")  
    dShow.insertAdjacentHTML("afterbegin","<img"+" " +"src="+picLinks+".jpg"+ " " +"width="+"200" +">")
    console.log(storedPics)  
}

//setting background photo

let dPic = document.getElementById("dPic")
dShow.addEventListener('click', function(e){
    let photo = e.target.getAttribute("src")
    let xx =document.body.style.backgroundImage =  "url" + "(" + photo + ")"
    document.body.style.backgroundSize="100% 100%"
    console.log(xx)
    console.log(photo)
})


//add comment
/*
setInterval(function lCom(){
    if (document.querySelector("#lis") == null){
        console.log("not yet")
    }else{
        let listComment = document.querySelector(".lis")
        console.log(listComment)
    }
},10)
*/



/*
changing background photo
let x =0 
function changeIt(){    
        setInterval(function(){ 
        if (x < storedPics.length){
            pic.setAttribute("src", storedPics[x])
            x++ 
            console.log(x)
        } else if (x>storedPics.length){
            x = 0;
            pic.setAttribute("src", storedPics[x])
            x++
        }         
        }, 6000)  
}
*/

/*
//create your weather
//slide show imgs, on click push to array


let slid = document.getElementById("slid")
let play = document.getElementById("play")

play.addEventListener('click', function(){
    let req = new XMLHttpRequest();
    req.open('GET', 'https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg')
    req.onload = function(){
        let pic = req.responseText
        console.log(pic)
    }
    req.send() 
})
*/
