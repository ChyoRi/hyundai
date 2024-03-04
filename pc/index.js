const sideMenuProfileBtn = document.querySelector('.side-menu-btn.profile');
const sideMenuContents = document.querySelector('.side-menu-contents-wrap');
const sideMenuActiveBtn = document.querySelector('.side-menu-icon-btn');
const mainList = document.querySelectorAll('.main-list > a');
const subListWrap = document.querySelectorAll('.sub-list-wrap');
const subList = document.querySelectorAll('.sub-list > a');
const familySelectList = document.querySelector('.family-select-box-list');
const familySelectBoxBtn = document.querySelector('.family-select-box-btn');
const pathSelectList = document.querySelector('.path-select-box-list');
const pathSelectBoxBtn = document.querySelector('.path-select-box-btn');
const tabBtnFrame = document.querySelector('.total-tab-list-wrap');
const tabBtnListWrap = document.querySelector('.total-tab-list');
const tabBtnList = document.querySelectorAll('.total-tab-item');
const tabContListWrap = document.querySelector('.total-tab-cont-area');
const tabContList = document.querySelectorAll('.total-tab-cont');
const tabPrevBtn = document.querySelector('.prev-btn');
const tabNextBtn = document.querySelector('.next-btn');

const sideMenuOpen = () => {
  sideMenuContents.classList.add('active');
}

const sideMenuClose = () => {
  sideMenuContents.classList.remove('active');
}

// 메인 nav sub-list default 상태 확인

subListWrap.forEach(item => {
  if(item.classList.contains('active')) {
    item.style.maxHeight = item.scrollHeight + 'px'
  } else {
    item.style.maxHeight = null;
  }
})

// 메인 list active 활성화

let activeList;

const mainListActive = (e) => {
  let target = e.currentTarget;
  const subMenu = target.nextElementSibling;

  if(subMenu == undefined) {
    activeList = 0
  } else {
    activeList = 1
  }

  if(activeList === 0) {
    mainList.forEach(item => {
      item.classList.remove('active');
    });

    subListWrap.forEach(item => {
      item.classList.remove('active');
      item.style.maxHeight = null;
    })

    target.classList.add('active');
  }

  if(activeList === 1) {
    if(target.classList.contains('active')) {
      target.classList.remove('active')
      subMenu.classList.remove('active');
      subMenu.style.maxHeight = null;
    } else {
      mainList.forEach(item => {
        item.classList.remove('active');
      });
      target.classList.add('active');
      subMenu.classList.add('active');
      subMenu.style.maxHeight = subMenu.scrollHeight + 'px';
    }
  }
}

// 서브 list active 활성화

const subListActive = (e) => {
  let target = e.currentTarget;
  
  subList.forEach(item => {
    item.classList.remove('active');
  });

  target.classList.add('active');
}

// 셀렉트 박스 활성화

const selectBoxExpend = (e, select) => {
  const arrow = e.currentTarget.children[1];
  arrow.classList.toggle('active');
  select.classList.toggle('active');
}

// 탭 메뉴

let tabBtnListClientWidth = tabBtnListWrap.clientWidth;
let tabBtnListScrollWidth = tabBtnListWrap.scrollWidth;
let tabContWidth = tabContList[0].clientWidth;

const tabActive = (e) => {
  let target = e.currentTarget;
  let idx = [...tabBtnList].indexOf(target);
  
  tabBtnList.forEach(item => {
    item.children[0].classList.remove('active');
  });

  tabContList.forEach(item => {
    item.classList.remove('active');
  });

  tabBtnList[idx].children[0].classList.add('active');
  tabContList[idx].classList.add('active');
  tabContListWrap.style.translate = `-${tabContWidth * idx}px 0`

}

// tab prev, next 버튼

let tabBtnListTransLate = 0;

const tabPrev = () => {
  
  if(tabBtnListTransLate === 0) return;

  if(tabBtnListTransLate >= 806) {
    tabBtnListTransLate -= tabBtnListClientWidth;
    tabBtnListWrap.style.translate = `-${tabBtnListTransLate}px 0`;
  }
}

const tabNext = () => {

  if(tabBtnListScrollWidth < 806) {
    return;
  } else {
    if ((tabBtnListTransLate + tabBtnListClientWidth) > tabBtnListScrollWidth) return;
    tabBtnListTransLate += tabBtnListClientWidth;
    tabBtnListWrap.style.translate = `-${tabBtnListTransLate}px 0`;
  }
}


// 이벤트 리스너

sideMenuProfileBtn.addEventListener('click', sideMenuOpen);
sideMenuActiveBtn.addEventListener('click', sideMenuClose);

mainList.forEach(item => {
  item.addEventListener('click', mainListActive);
});

subList.forEach(item => {
  item.addEventListener('click', subListActive);
});

familySelectBoxBtn.addEventListener('click', (e) => selectBoxExpend(e, familySelectList));
pathSelectBoxBtn.addEventListener('click', (e) => selectBoxExpend(e, pathSelectList));

tabBtnList.forEach(item => {
  item.addEventListener('click', tabActive);
})

tabPrevBtn.addEventListener('click', tabPrev);
tabNextBtn.addEventListener('click', tabNext);