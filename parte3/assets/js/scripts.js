const msg = document.getElementById("msg");

      const btn = document.getElementById("btn");
      btn.addEventListener("click", () => {
        const num1 = document.getElementById("num-1").value;
        const num2 = document.getElementById("num-2").value;
        const num3 = document.getElementById("num-3").value;

        const pass = num1 + num2 + num3;

        if (pass == "911") {
          msg.innerHTML = "Contraseña 1 correcta";
        } else if (pass == "714") {
          msg.innerHTML = "Contraseña 2 correcta";
        } else {
          msg.innerHTML = "Contraseña incorrecta";
        }
        
        });
        