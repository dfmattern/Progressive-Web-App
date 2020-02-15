const container = document.querySelector(".container");
const coffees = [
  { name: "Espresso", image: "assets/images/espresso.jpg" },
  { name: "Americano", image: "assets/images/americano.jpg" },
  { name: "Cappuccino", image: "assets/images/capuccino.jpg" },
  { name: "Latte", image: "assets/images/latte.jpg" },
  { name: "Mocha", image: "assets/images/mocha.jpg" },
  { name: "Machiato", image: "assets/images/machiato.jpg" },
  { name: "Breve", image: "assets/images/breve.jpg" },
  { name: "Cafe au Lait", image: "assets/images/cafeaulait.jpg" },
  { name: "Ristretto", image: "assets/images/ristretto.jpg" }
];
//console.log(coffees);


const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image }) =>
      (output += `
            <div class="card>
            <img class="card-avatar" src=${image}/>
            <h1 class="card-title">${name}</h1>
            <a class="card-link" href="#">Taste<a/>
            </div>
        `)
  );
  //console.log(showCoffees);
  
  container.innerHTML = output;
};

//document.addEventListener("DOMContentLoaded", showCoffees);
