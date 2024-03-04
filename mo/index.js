const selectBoxBtn = document.querySelector('.total-select-box-btn');
const selectBoxCurrentText = document.querySelector('.select-box-current');
const selectBoxList = document.querySelector('.total-select-box-list');
const selectOptionItem = document.querySelectorAll('.total-select-box-item');
const selectOptionBtn = document.querySelectorAll('.total-select-box-item > button');
const selectTabCont = document.querySelectorAll('.total-select-cont');


const selectBoxExpend = (e) => {
  const arrow = e.currentTarget.children[1];
  arrow.classList.toggle('active');
  selectBoxList.classList.toggle('active');
}

const selectOption = (e) => {
  let target = e.currentTarget;
  let targetBtn = target.children[0];
  let targetIdx = [...selectOptionItem].indexOf(target);
  selectOptionBtn.forEach(item => {
    item.classList.remove('active');
  });

  targetBtn.classList.add('active');

  selectBoxCurrentText.innerText = target.innerText;

  selectTabCont.forEach(item => {
    item.classList.remove('active');
  });

  selectTabCont[targetIdx].classList.add('active');
  selectBoxList.classList.remove('active');
}

selectBoxBtn.addEventListener('click', selectBoxExpend);
selectOptionItem.forEach(item => {
  item.addEventListener('click', selectOption);
});