

const data = [{nombre: 'pedro', apellido: 'torres', correo: 'pedro@gmail.com', password: '12345'}]
const user = document.getElementById('user')
const password = document.getElementById('password')
const boton = document.getElementById('boton')



const nombres = document.getElementById('nombres')
const apellidos = document.getElementById('apellidos')
const correo = document.getElementById('correo') 
const pass = document.getElementById('pass') 
const registrar = document.getElementById('registrar') 


async function obtenerDatos() {
   const data = localStorage.getItem('users')
   const data2 = JSON.parse(data)

   mostrarDatos(data2)
   
}

obtenerDatos()


function mostrarDatos(data) {
  

console.log(data);



if (boton) {
    
boton.addEventListener('click',(e)=> {
    e.preventDefault()
  
    const userr = data.find((e)=> e.correo === user.value && e.password === password.value)
  
  
    if (userr) {
        window.location.href = 'Pagina principal.html'
    } else {
      alert('Credenciales Incorrectas')
    }
  
  
  })
  
}


if (registrar) {
    registrar.addEventListener("click",(e)=>{
        e.preventDefault()

        const data = localStorage.getItem('users')
         const data2 = JSON.parse(data)
         
         data2.push({nombre: nombres.value, apellido: apellidos.value, correo: correo.value, password: pass.value})

         localStorage.setItem('users', JSON.stringify(data2));

        nombres.innerHTML = ''
        apellidos.innerHTML = ''
        correo.innerHTML = ''
        pass.innerHTML = ''
        registrar.innerHTML = ''
    
        window.location.href = 'login.html'
    
    
    }) 
}
}





