let elAlterable = document.querySelector('.alterable-text');
const textVariants = ['Design', 'Testing', 'Frontend', 'Backend'];

window.addEventListener('DOMContentLoaded', wordChanger)
let i = 0;
let j = 0;
function wordChanger() {
  if(i < textVariants[j].length){
    elAlterable.textContent += textVariants[j][i];
    i++;
    setTimeout(wordChanger, 180)
  }else{
    setTimeout(() => {
      elAlterable.textContent = "";
      if(j < textVariants.length - 1){
        j++;
      } else j = 0;
      i = 0;
      wordChanger()
    }, 900)
  }
  
}
