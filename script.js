const item = document.getElementsByClassName("item")
const left= document.querySelector(".left")
const right= document.querySelector(".right")

for(lists of item){
    lists.addEventListener("dragstart",function(e){
        let select =e.target

        right.addEventListener("dragover",function(e){
            e.preventDefault()

        })
        right.addEventListener("drop",function(){
            right.appendChild(select)
            select=null;
        })
        left.addEventListener("dragover",function(e){
            e.preventDefault()

        })
        left.addEventListener("drop",function(){
            left.appendChild(select)
            select=null;
        })
    })
}