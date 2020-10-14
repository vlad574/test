$('.btn-p').click(function (){
    $('.eyes').removeClass('close')
})
$('.btn-s').click(function (){
    $('.eyes').addClass('close')
})
$('.box-patch-right').draggable({
    cancel: ".ui-rotatable-handle",
    stop: function(e, ui) {
        actionPupilCreate('patch','patchRight');
    }
});
$('.box-patch-left').draggable({
    cancel: ".ui-rotatable-handle",
    stop: function(e, ui) {
        actionPupilCreate('patch','patchLeft');
    }
});
$('.box-patch').resizable().rotatable();
$('.box-scotch-left').draggable({
    cancel: ".ui-rotatable-handle",
    stop: function(e, ui) {
        actionPupilCreate('scotch','scotchleft');
    }
});
$('.box-scotch-right').draggable({
    cancel: ".ui-rotatable-handle",
    stop: function(e, ui) {
        actionPupilCreate('scotch','scotchRight');
    }
});
$('.box-scotch').resizable().rotatable();
$('.box-shetka').draggable({
    cancel: ".ui-rotatable-handle",
    stop: function(e, ui) {
        actionPupilCreate('shetka','shetka');
    }
});
$('.box-shetka').resizable().rotatable();
$('.box-glue').draggable({
    cancel: ".ui-rotatable-handle",
    stop: function(e, ui) {
        actionPupilCreate('kley','kley');
    }
});
$('.box-obez').draggable({
    cancel: ".ui-rotatable-handle",
    stop: function(e, ui) {
        actionPupilCreate('obezjirivatel','obezjirivatel');
    }
});
$('.box-praymer').draggable({
    cancel: ".ui-rotatable-handle",
    stop: function(e, ui) {
        actionPupilCreate('praymer','praymer');
    }
});
$('.box-sponj').draggable({
    cancel: ".ui-rotatable-handle",
    stop: function(e, ui) {
        actionPupilCreate('sponj','sponj');
    }
});

var arrPupil = [];
var list = [];
function actionPupilCreate(item,el){
       if(!obj[el]){
            arrPupil.push(item);
        }
        obj[el] = true;
        for(var i = 0; i<arrPupil.length;i++){
            if(arrPupil[i] != arrActionConst[i]){
                obj[el] = false;
                arrPupil.pop();
                $('ul li').eq(i).html(createItemAnswer(false));
                $('ul li').eq(i).show();
            }else{
                $('ul li').eq(i).html(createItemAnswer(true));
                $('ul li').eq(i).show();
            }
        }
}
function createItemAnswer(type){
    if(type){
        var item = `<span>
            <img src="/test/img/ansOk.png" alt="">
                Верно
            </span>`
    }else{
        var item =`<span>
            <img src="/test/img/nsErr.png" alt="">
                Не верно
            </span>`
    }
    return item
}
var obj = {
    sponj:false,
    patchLeft:false,
    patchRight:false,
    obezjirivatel:false,
    praymer:false,
    shetka:false,
    scotchLeft:false,
    scotchRight:false,
}
var arrActionConst =  ['sponj','patch','patch','obezjirivatel','praymer','shetka','scotch','scotch','kley'];

