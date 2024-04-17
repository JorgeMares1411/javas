document.querySelector("#btn").onclick=()=>{
Swal.fire("Ejemplo Alerta Bonita 1");
}
document.querySelector("#btn1").onclick=()=>{
    Swal.fire({
        title: "Buen trabajo!",
        text: "Presiona el boton!",
        icon: "success"
      });

    }

    document.querySelector("#btn2").onclick=()=>{
    Swal.fire({
        title: "Profe me califica?",
        text: "Porfa?",
        icon: "question"
      });

    }
    document.querySelector("#btn3").onclick=()=>{
        Swal.fire({
            title: "Hola?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonColor: "#2B6FE7",
            cancelButtonColor:"#118216",
            denyButtonColor:"#F5000F",

            confirmButtonText: "Guardar",
            denyButtonText: `No guardar`
           
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire("Guardar!", "", "Siguiente");
            } else if (result.isDenied) {
              Swal.fire("deseas guardar", "", "info");
            }
          });
        }
        document.querySelector("#btn4").onclick=()=>{
            Swal.fire({
                title: "Holaaaaaaaaaaaaaaaaaaaaaa",
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
              });
            }
            document.querySelector("#btn5").onclick=()=>{
                Swal.fire({
                    title: "URUUUUUs!",
                    text: "Imagen",
                    imageUrl: "data:image/jpeg;base64,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",
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: "Custom image"
                  });
                }

                document.querySelector("#btn6").onclick=()=>{
                    let timerInterval;
Swal.fire({
  title: "Auto close !",
  html: "Hello <b></b> Lael.",
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading();
    const timer = Swal.getPopup().querySelector("b");
    timerInterval = setInterval(() => {
      timer.textContent = `${Swal.getTimerLeft()}`;
    }, 100);
  },
  willClose: () => {
    clearInterval(timerInterval);
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log("Espera");
  }
});
                    }

                    document.querySelector("#btn7").onclick=()=>{
                    Swal.fire({
                        title: "Login",
                        input: "Ingresarl",
                        inputAttributes: {
                          autocapitalize: ""
                        },
                        showCancelButton: true,
                        confirmButtonText: "Abrir",
                        showLoaderOnConfirm: true,
                        preConfirm: async (login) => {
                          try {
                            const githubUrl = `
                              https://api.github.com/users/${login}
                            `;
                            const response = await fetch(githubUrl);
                            if (!response.ok) {
                              return Swal.showValidationMessage(`
                                ${JSON.stringify(await response.json())}
                              `);
                            }
                            return response.json();
                          } catch (error) {
                            Swal.showValidationMessage(`
                              Request failed: ${error}
                            `);
                          }
                        },
                        allowOutsideClick: () => !Swal.isLoading()
                      }).then((result) => {
                        if (result.isConfirmed) {
                          Swal.fire({
                            title: `${result.value.login}'s avatar`,
                            imageUrl: result.value.avatar_url
                          });
                        }
                      });
                    }