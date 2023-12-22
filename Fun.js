function showImage(){
     var ran=Math.floor((Math.random())*6);
     var ran1=Math.floor((Math.random())*6);
     ran=ran+1;
     ran1=ran1+1;
     var idk = "./dice"+ ran +".png";
     var idk1 = "./dice"+ ran1 +".png";
     document.querySelector(".img1").setAttribute("src",idk);
     document.querySelector(".img2").setAttribute("src",idk1);
     if(ran>ran1){
          document.querySelector("#Welcon").innerHTML="Player 1 Win!!!";
     }
     else{
          document.querySelector("#Welcon").innerHTML="Player 2 Win!!!";
     }
}