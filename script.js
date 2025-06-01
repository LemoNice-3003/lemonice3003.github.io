var form = document.forms.myGameSite;
// ①クリック時に実行する関数
function saveDetaUpload (e) {
    const showOpenFileDialog = () => new Promise(resolve => {
        const input = document.createElement('input');
        input.type = 'file';    //inputのタイプ
        input.accept = 'text/plain';    //読み込むファイルの種類
        input.onchange = () => { resolve(input.files); };
        input.click();
    });
    (async () => {
        const files = await showOpenFileDialog();   //fileにダイアログで選択したtxtファイルのデータを渡す
        const content = await files[0].text();  //contentに開いたtxtファイルの中身を移す
        // alert(content);
        document.getElementById("output").innerHTML = content;  //読み込んだ内容の表示
        if (content == "0") {
            $(function changeColor(){
                $("p").css({"color" : "red"});
            });
        }
        else if (content == "1") {
            $(function changeColor(){
                $("p").css({"color" : "blue"});
            });
        }
        else {
        }
    })();
}
// ②IMG要素をすべてセレクト
document.querySelectorAll("img").forEach((imgElm) => {
    // ③要素のクリックイベントにイベントリスナーをひもづける
    imgElm.addEventListener('click', saveDetaUpload);
})
document.addEventListener('keydown', function(event) {
    if ((event.ctrlKey || event.metaKey) && (event.key === '+' || event.key === '-' || event.key === '0')) {
      event.preventDefault();
    }
});

document.addEventListener('wheel', function(event) {
    if (event.ctrlKey) {
      event.preventDefault();
    }
}, { passive: false });

const con = document.querySelector('#js-con');
const ham = document.querySelector('#js-hamburger');
const nav = document.querySelector('#js-nav');
ham.addEventListener('click', function () {

  con.classList.toggle('active');
  ham.classList.toggle('active');
  nav.classList.toggle('active');

});
// $(function(){
//    $("span").css({"color" : "red", "font-size" : "100px", "border" : "solid 5px"});
// });
