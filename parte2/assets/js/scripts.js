const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    const sticker1 = document.getElementById("sticker-1").value;
    const sticker2 = document.getElementById("sticker-2").value;
    const sticker3 = document.getElementById("sticker-3").value;
    const msg = document.getElementById("msg");

    const total = Number(sticker1) + Number(sticker2) + Number(sticker3);
    
    if (total <= 10) {
        msg.innerHTML = `Llevas ${total} stickers`;
      } else {
        msg.innerHTML = "Llevas muchos stickers" ;
      }
    });
    
 