const appLoader = document.getElementById('app-loader')

// app loader
const deActiveApploader = () => {
      setTimeout(()=> {
         appLoader.setAttribute('active','false')
      },3000)
}



// run process
deActiveApploader()
