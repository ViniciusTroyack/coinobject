function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const coin = {
  state: 0,

  flip: function () {
    this.state = getRndInteger(0, 1);
  },

  toString: function () {
    return this.state === 0 ? "Heads" : "Tails";
  },

  toHTML: function () {
    const image = document.createElement("img");
    if (this.state === 0) {
      image.src = "./images/head.png";
      image.alt = "Heads";
    } else {
      image.src = "./images/tails.png";
      image.alt = "Tails";
    }
    return image;
  },
};

function display20Flips() {
  const results = [];
  let i = 0;
  let pagina = document.querySelector("body");
  while (i < 20) {
    coin.flip();
    pagina.append(coin.toString() + " ");
    results.push(coin.toString());
    i++
  }
  return results;
}

function display20Images() {
  const results = [];
  let i = 0;
  let pagina = document.querySelector("body");
  while (i < 20) {
    coin.flip();
    pagina.append(coin.toHTML());
    results.push(coin.toString());
    i++
  }
  return results;
}

let btn20flips = document.createElement('button');
let btn20images = document.createElement('button');
btn20flips.innerText = "Display 20 Flips";
btn20images.innerText = "Display 20 Images";
document.querySelector("body").append(btn20flips, btn20images);
btn20flips.addEventListener('click', display20Flips);
btn20images.addEventListener('click', display20Images);