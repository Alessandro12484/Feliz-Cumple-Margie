const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("openBtn");
const resetBtn = document.getElementById("resetBtn");
const message = document.getElementById("message");

const text = `Dios me la guíe siempre por el buen camino, la bendiga en cada paso que dé y le conceda todos los deseos y anhelos de su corazón.

Deseo poder seguir compartiendo toda una vida con usted, acompañandola en cada etapa, celebrar sus logros, apoyarle cuando lo necesite y estar presente en todos esos momentos que todavía nos quedan por vivir.

Espero que siempre recuerde lo valiosa e importante que es para mí. 

La Adoro con toda mi alma❤️

Con mucho cariño,
Alessandro.`;

let index = 0;
let typing;

function typeWriter() {

    if (index < text.length) {

        message.innerHTML += text.charAt(index);

        index++;

        typing = setTimeout(typeWriter, 35);
    }
}

openBtn.addEventListener("click", () => {

    envelope.classList.add("open");

    index = 0;
    message.innerHTML = "";

    setTimeout(() => {
        typeWriter();
    }, 900);

});

resetBtn.addEventListener("click", () => {

    clearTimeout(typing);

    envelope.classList.remove("open");

    message.innerHTML = "";

    index = 0;
});