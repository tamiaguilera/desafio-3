const img = document.getElementById("img");
    img.addEventListener("click", () => {
        if(img.classList.contains("border")){
            img.classList.remove("border")
        }else {
            img.classList.add("border")
        }
 });