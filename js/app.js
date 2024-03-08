const formularioEncriptarDesencriptar = document.getElementById('formularioEncriptarDesencriptar');
const inputTexto = document.getElementById('inputTexto');
const botonEncriptar = document.getElementById('boton-encriptar');
const botonDesencriptar = document.getElementById('boton-desencriptar');
const tituloContenedorTexto = document.getElementById('titulo-contenedor-texto');
const contenido = document.getElementById('contenido');
const imgEsperandoTexto = document.getElementById('imgEsperandoTexto');
const botonCopiar = document.getElementById('boton-copiar');

const funcionEncriptar = () => {
    let texto = inputTexto.value
        .replace(/a/gi, 'a1q2w3e4r5t6y7u8i9o0p')
        .replace(/i/gi, 'igjhgfghfhg')
        .replace(/e/gi, 'enn32p')
        .replace(/u/gi, 'uwq2e')
        .replace(/o/gi, 'o78ttt');    
    
    return texto;
};

const funcionDesencriptar = () => {
    let texto = inputTexto.value
        .replace(/a1q2w3e4r5t6y7u8i9o0p/gi, 'a')
        .replace(/igjhgfghfhg/gi, 'i')
        .replace(/enn32p/gi, 'e')
        .replace(/uwq2e/gi, 'u')
        .replace(/o78ttt/gi, 'o');
        
    // Añado una iteración adicional para asegurar de que todas las coincidencias sean reemplazadas, me jodio bastante con el "o78ttt" que no se reemplazaba jaja-
    while(texto !== (texto = texto
        .replace(/a1q2w3e4r5t6y7u8i9o0p/gi, 'a')
        .replace(/igjhgfghfhg/gi, 'i')
        .replace(/enn32p/gi, 'e')
        .replace(/uwq2e/gi, 'u')
        .replace(/o78ttt/gi, 'o')));
        
    return texto;
}

document.addEventListener('DOMContentLoaded',()=>{
    inputTexto.innerHTML = '';
    botonEncriptar.addEventListener('click',(e)=>{
        e.preventDefault();
        if(inputTexto.value === ''){
            alert('Debes ingresar un texto para encriptar');
            return;
        }
        const textoEncriptado = funcionEncriptar();
        tituloContenedorTexto.innerHTML = 'Encriptando texto...';
        contenido.innerHTML= `
            <img src='./img/spinner.gif' width=40 alt="cargando">
            `;
        setTimeout(()=>{
            imgEsperandoTexto.style.display= 'none';
            tituloContenedorTexto.innerHTML="Texto Encriptado!";
            contenido.innerHTML=textoEncriptado;
        },2000)

    });

    botonDesencriptar.addEventListener('click',(e)=>{
        e.preventDefault();
        if(inputTexto.value === ''){
            alert('Debes ingresar un texto para desencriptar');
            return;
        }
        const textoDesencriptado = funcionDesencriptar();
        tituloContenedorTexto.innerHTML= "Desencriptando..."
        contenido.innerHTML= `
        <img src='./img/spinner.gif' width=60 alt="cargando">
        `;
    setTimeout(()=>{
        imgEsperandoTexto.style.display= 'none'
        tituloContenedorTexto.innerHTML = "Texto Desencriptado!"
        contenido.innerHTML=textoDesencriptado;
    },2000)
    });

    botonCopiar.addEventListener('click',()=>{
        const textarea = document.createElement('textarea');
        textarea.value = contenido.textContent;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('Texto copiado al portapapeles');
    });


})