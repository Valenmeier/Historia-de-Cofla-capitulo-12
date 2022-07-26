const materiasHTML=document.querySelector(`.materias`);

const materias= [
    {
        nombre:`Fisica 4`,
        nota: 7
    },
    {
        nombre:`calculo 3`,
        nota: 8
    },
    {
        nombre:`Base de datos 3`,
        nota: 9
    },
    {
        nombre:`Matemáticas discretas 2`,
        nota: 8
    },
    {
        nombre:`Programación 4`,
        nota: 10
    },
]

const obtenerMateria=(id)=> {
    return new Promise((resolve,reject)=> {
        let materia= materias[id];
        if (materia == undefined) reject(`La materia no existe`)
        else setTimeout(()=> {
            resolve(materia)
        },Math.random()*5000)
    })
}

// obtenerMateria(0).then(resultado=>console.log(resultado)).catch((rechazo)=>console.log(rechazo))
// obtenerMateria(1).then(resultado=>console.log(resultado)).catch((rechazo)=>console.log(rechazo))
// obtenerMateria(2).then(resultado=>console.log(resultado)).catch((rechazo)=>console.log(rechazo))
// obtenerMateria(3).then(resultado=>console.log(resultado)).catch((rechazo)=>console.log(rechazo))
// obtenerMateria(4).then(resultado=>console.log(resultado)).catch((rechazo)=>console.log(rechazo))
// obtenerMateria(5).then(resultado=>console.log(resultado)).catch((rechazo)=>console.log(rechazo))

const devolverMaterias= async()=> {
    let materia= []
    for (let i=0; i<materias.length;i++) {
        materia[i]=await obtenerMateria(i);
        console.log(materia[i])
        // materia[i].then(materia=>console.log(materia)).catch(`la materia no existe`)
        let newHTMLCode=`
        <div class="materia">
               <div class="nombre">${materia[i].nombre}</div>
               <div class="nota">${materia[i].nota}</div>
          </div>
        `
        materiasHTML.innerHTML+=newHTMLCode
    }
}

devolverMaterias()