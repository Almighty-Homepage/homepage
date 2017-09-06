function location_change(x) {/*메뉴바 누르면 해당 홈페이지로 이동함*/

     if( x == 1) location.href = "./History.html";
     else if (x == 2) location.href = "./NoticeBoard.html";
     else if( x == 3) location.href = "./ReferenceBoard.html";
     else if( x == 4) location.href = "./ActivityBoard.html";
     else if( x == 5) location.href = "./FreeBoard.html";
     else if( x == 6) location.href = "./PhotoBoard.html";
}
function Now(y){/*현재 펼쳐진 메뉴표시*/
  document.getElementById("menu"+y).setAttribute("style", "background-color: red;");
}

function home(){/*로고 누르면 메인으로 이동한다.*/
 location.href = "./Main.html";
}
