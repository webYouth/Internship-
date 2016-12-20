/*
 * author:webYouth
 */
/*点击*/
mainFn();
function mainFn(){
    navClick();
    casenavClick();
    mouseOnFn();
}
function navClick(){
    var oLi = document.getElementsByClassName('fs14');
    for(var i = 0;i<oLi.length;i++){
        oLi[i].addEventListener('click',function (e) {
            var oSp = document.querySelectorAll('.moniboder');
            for(var j = 0;j<oSp.length;j++){
                oSp[j].style.display = 'none';
                oSp[j].classList.remove('active');
            }
            this.querySelector('.moniboder').style.display = 'block';
            this.querySelector('.moniboder').classList.add('active');
        });
    }
}

function casenavClick() {
    var oLi = document.getElementsByClassName('linkna');
    for(var i = 0; i<oLi.length;i++){
        oLi[i].addEventListener('click',function (e) {
            var oA = document.querySelectorAll('.linkna');
            for(var j = 0; j<oA.length;j++){
                oA[j].classList.remove('navactive');
            }
            this.classList.add('navactive');
        });
    }
}

function mouseOnFn(){
    var oDv = document.querySelectorAll('.menber1');
    for(var i = 0;i<oDv.length;i++){
        oDv[i].addEventListener('mouseover',function (e) {
            this.querySelector('.infowrap').style.display = 'block';
            this.querySelector('.menname').style.color = '#37bda1'
        });
        oDv[i].addEventListener('mouseout',function (e) {
            this.querySelector('.infowrap').style.display = 'none';
            this.querySelector('.menname').style.color = '#062033';
        });
    }
}