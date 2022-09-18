const textAnim = document.getElementById("animated");
let text = textAnim.innerText;
textAnim.innerText = "";
const speed = 180;
let i = 0;

const animation = () => {
  if (i < text.length) {
    textAnim.innerText += text.charAt(i);
    i++;
    setTimeout(animation, speed);
  }
};
setTimeout(animation, speed);
