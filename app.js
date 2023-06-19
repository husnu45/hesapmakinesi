window.onload = function () {
  let listler = document.getElementsByTagName("li");
  let ekran = document.querySelectorAll(" p")[0];
  let temizle = document.getElementsByClassName("temizle")[0];

  for (let i = 0; i < listler.length; i += 1) {
    if (listler[i].innerHTML === "=") {
      listler[i].addEventListener("click", hesapla(i));
    } else {
      listler[i].addEventListener("click", degerekle(i));
    }
  }

  function degerekle(i) {
    return function () {
      if (listler[i].innerHTML === "÷") {
        ekran.innerHTML += "/ ";
      } else if (listler[i].innerHTML === "x") {
        ekran.innerHTML += "*";
      } else {
        ekran.innerHTML += listler[i].innerHTML;
      }
    };
  }

  temizle.onclick = function () {
    ekran.innerHTML = "";
  };

  function hesapla(i) {
    return function () {
      ekran.innerHTML = eval(ekran.innerHTML);
    };
  }
};
