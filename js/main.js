let personas = [
  new Persona("Luciano","Costa"),
  
  new Persona("Federico","Olmy"),
];

function mostrarPersonas(params) {
  console.log(`Mostrar Personas`);

  let personasUl = document.getElementById("personas");
  let texto = "";

  for (let persona of personas) {
    texto += `<li> ${persona.nombre} ${persona.apellido} </li>`;
  }

  personasUl.innerHTML = texto;
}

function agregarPersona() {
    
    const forma = document.forms['forma'];
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];

    if (nombre.value !='' && apellido.value != '') {
        const persona = 
        new Persona(nombre.value,apellido.value);
    
        console.log(persona);
        personas.push(persona);
    
        mostrarPersonas();
        
    } else {

        console.log(`No hay nada `);
        
        
    }

}
