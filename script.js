const panels=document.querySelectorAll(".fp")

panels.forEach((panel)=>{
    panel.addEventListener("click", () =>{
        removeActiveClasses();
        panel.classList.add("active");
        });
    });

function removeActiveClasses(){
    panels.forEach((panel)=>{
        panel.classList.remove("active");
    })
}