let orange = 100;
let apple = 120;

if(orange < apple) {
  alert("ミカンの値段がリンゴより安い");
} else if(orange == apple) {
  alert("みかんとりんごは同じ値段")
} else{
  alert("みかんの値段がリンゴより高い")
}

//繰り返し処理
let max =100;
let num = 1;
let count = 0;

while(num < max) {
  num = num * 2;
  count = count + 1;
}

alert("２を掛けつづけて"+max+"を越えるのに必要だった回数は"+count+"回です");

//for処理
let i;
let num1 = 0;

for(i = 1;i < 11;i++) {
  num1 = num1 + i ;
}
alert("1から10まで足した結果は"+num1+"です");

//確認問題
let ls_1 = 10;
let ls_2 = 1;

alert(ls_1+"+"+ls_2+"="+(ls_1+ls_2));
alert(ls_1+"-"+ls_2+"="+(ls_1-ls_2));
alert(ls_1+"*"+ls_2+"="+(ls_1*ls_2));
alert(ls_1+"/"+ls_2+"="+(ls_1/ls_2));