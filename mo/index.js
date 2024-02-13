const selectBoxBtn = document.querySelector('.total-select-box-btn');
const selectBoxList = document.querySelector('.total-select-box-list');
console.log(selectBoxBtn);

const selectBoxExpend = (e) => {
  const arrow = e.currentTarget.children[1];
  arrow.classList.toggle('active');
  selectBoxList.classList.toggle('active');
}

selectBoxBtn.addEventListener('click', selectBoxExpend);