
	var maxstrlen=10;
    function Q(s){return document.getElementById(s);} 
    function checkWord(c){
        len=maxstrlen;
        var str = c.value;
        myLen=getStrleng(str);
        //var wck=Q("wordCheck");
		var Down = document.getElementById("Download");
        if(myLen>len){
            c.value=str.substring(0,i+1);
        }
        else{
            //wck.innerHTML = Math.floor(len-myLen);
			var per=Math.floor((myLen/len)*100)
            Down.value = per;
			if(per == 10 ){
				changeColor1()
			}
			if(per == 30 ){
				changeColor2()
			}
			if(per == 40 ){
				changeColor3()
			}
			if(per == 60 ){
				changeColor4()
			}
			if(per == 80 ){
				changeColor5()
			}
			if(per == 100 ){
				changeColor6()
			}
           }
    }
    function getStrleng(str){
        myLen =0;
        i=0;
        for(;(i<str.length)&&(myLen<=maxstrlen*2);i++){
        if(str.charCodeAt(i)>0&&str.charCodeAt(i)<128) //字符编码，128以内的是数字，英文字符，已经英文的符号等
        myLen++;
        else
        myLen+=2;
    }
    return myLen;
	}
    function changeColor1(){
			x=document.getElementById("text1");
  			x.style.color="White";
		}
	function changeColor2(){
			x=document.getElementById("text2");
  			x.style.color="White";
		}
	function changeColor3(){
			x=document.getElementById("text3");
  			x.style.color="White";
		}
	function changeColor4(){
			x=document.getElementById("text4");
  			x.style.color="White";
		}
	function changeColor5(){
			x=document.getElementById("text5");
  			x.style.color="White";
		}
	function changeColor6(){
			x=document.getElementById("text6");
  			x.style.color="White";
		}