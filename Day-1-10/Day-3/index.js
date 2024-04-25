const btn = document.querySelector("#btnitem");
const hexcode = document.querySelector("#hex_code");
const copybtn = document.querySelectorAll(".color_item_name i");
const rgbname = document.querySelector("#rgb_name");
const colorShow = document.querySelector(".color_show");
const colorItemName = document.querySelector(".color_item_name");
const show = document.querySelectorAll(".show");


function codegenerator() {
  let randomcode = "#";
  const hexcode = "0123456789ABCDEF";
  for (let index = 0; index < 6; index++) {
    randomcode += hexcode[Math.floor(Math.random() * 16)];
  }
  return randomcode;
}
btn.addEventListener("click", () => {
  colorShow.style.backgroundColor = codegenerator();
  hexcode.textContent = `${codegenerator()}`;
  let string = codegenerator();
  function hexToRgb(hex) {
    hex = hex.replace("#", "");
    // Convert the hex value to RGB
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    rgbname.textContent = `(${r}, ${g}, ${b})`;
  }
  const rgbColor = hexToRgb(string);
});

function copycode() {
  copybtn.forEach((e) => {
    
    e.addEventListener("click", function (colorItemName) {
    
      const textArea = document.createElement("textarea");
      if (colorItemName.target.childElementCount == 0) {
        textArea.value = hexcode.textContent;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
      } else {
        textArea.value = rgbname.textContent;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
      }
      //   colorItemName.add.classlist('hide');
      // show.add.classlist('show');
    })
    
  });
}
copycode();

