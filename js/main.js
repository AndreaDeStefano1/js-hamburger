
  // onclick="document.getElementById('id1').style.color = 'red'">
  let apri = document.querySelector('i')
  let chiudi = document.querySelector('.close')
  let burger = document.querySelector('.hamburger-menu')
  console.log(burger);
  apri.addEventListener("click", function(){

    burger.classList.add('active')
  })

  chiudi.addEventListener("click", function(){

    burger.classList.remove('active')
  })