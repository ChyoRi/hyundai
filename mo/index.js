const selectBoxBtn = document.querySelector('.total-select-box-btn');
const selectBoxCurrentText = document.querySelector('.select-box-current');
const selectBoxList = document.querySelector('.total-select-box-list');
const selectOptionBtn = document.querySelectorAll('.total-select-box-list > li > button');


const selectBoxExpend = (e) => {
  const arrow = e.currentTarget.children[1];
  arrow.classList.toggle('active');
  selectBoxList.classList.toggle('active');
}

const selectOption = (e) => {
  let target = e.currentTarget;
  let targetIdx = target.getAttribute('data-id');
  let targetText = target.innerText;
  let currentText = selectBoxCurrentText.innerText;
  selectBoxCurrentText.innerText = targetText;
  target.innerText = currentText;
  console.log(targetIdx);
}

selectBoxBtn.addEventListener('click', selectBoxExpend);
selectOptionBtn.forEach(item => {
  item.addEventListener('click', selectOption);
});