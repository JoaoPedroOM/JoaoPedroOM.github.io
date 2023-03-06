const htmlInfos = document.querySelectorAll('.projects-skills .htmlInfo')
const cssInfos = document.querySelectorAll('.projects-skills .cssInfo')
const jsInfos = document.querySelectorAll('.projects-skills .jsInfo')

const modalHtml = document.querySelector('.modal-wrapper-html')
const modalCss = document.querySelector('.modal-wrapper-css')
const modalJs = document.querySelector('.modal-wrapper-js')

const btnCloseHtml = document.querySelector('.close-html')
const btnCloseCss = document.querySelector('.close-css')
const btnCloseJs = document.querySelector('.close-js')

//Modal HTML
htmlInfos.forEach(function(htmlInfo) {
  htmlInfo.addEventListener('click', function () {
    modalHtml.classList.add('open');
  });
});

btnCloseHtml.onclick = () => {
  modalHtml.classList.remove('open');
}

//Model CSS
cssInfos.forEach(function(cssInfo) {
  cssInfo.addEventListener('click', function() {
    modalCss.classList.add('open');
  })
})
btnCloseCss.onclick = () =>{
  modalCss.classList.remove('open');
}


//Modal JS 
jsInfos.forEach(function(jsInfo) {
  jsInfo.addEventListener('click', function () {
    modalJs.classList.add('open');
  });
});

btnCloseJs.onclick = () => {
  modalJs.classList.remove('open');
}

