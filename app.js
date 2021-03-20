var count =0;
var value =document.querySelector("#value");
var btns =document.querySelectorAll(".btn");
console.log(btns)
btns.forEach(
    function(btn){
        btn.addEventListener("click",function(e){
            var style =(e.currentTarget.classList);
            if(style.contains("decrease")){
                count--;
            }else if(style.contains("increase")){
                count++
            }
                else{
                    count=0;
                }
            value.textContent=count;
        })
    })