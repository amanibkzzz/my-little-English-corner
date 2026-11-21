(function(){
  const KEY="littleEnglishCornerStreak";
  function localDate(){
    const d=new Date();
    return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");
  }
  function previousDate(date){
    const d=new Date(date+"T12:00:00");
    d.setDate(d.getDate()-1);
    return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");
  }
  function read(){
    try{
      const saved=JSON.parse(localStorage.getItem(KEY)||"null");
      if(!saved||typeof saved.currentStreak!=="number"||!saved.lastCompletedDate)return {currentStreak:0,lastCompletedDate:null};
      return saved;
    }catch(e){return {currentStreak:0,lastCompletedDate:null};}
  }
  let data=read();
  const today=localDate();
  if(data.lastCompletedDate&&data.lastCompletedDate!==today&&data.lastCompletedDate!==previousDate(today)){
    data.currentStreak=0;
    try{localStorage.setItem(KEY,JSON.stringify(data));}catch(e){}
  }
  function paint(){
    let box=document.getElementById("lec-streak");
    if(!box){
      box=document.createElement("div");
      box.id="lec-streak";
      box.setAttribute("role","status");
      box.style.cssText="margin:12px 0;padding:10px 14px;border:1px solid #f0dce9;border-radius:14px;background:#fff;color:#63445a;font:600 15px system-ui,sans-serif;text-align:center";
      const firstLink=document.querySelector("main>a,body>a");
      if(firstLink&&firstLink.parentNode)firstLink.insertAdjacentElement("afterend",box);
      else document.body.insertBefore(box,document.body.firstChild);
    }
    const completed=data.lastCompletedDate===localDate();
    box.innerHTML="";
    const mascot=document.createElement("img");
    mascot.src="https://raw.githubusercontent.com/amanibkzzz/youtube-caption-test/development/1000566655-removebg-preview.png";
    mascot.alt="Misho";
    mascot.style.cssText="display:block;width:88px;height:auto;max-height:100px;object-fit:contain;margin:0 auto 6px";
    const message=document.createElement("div");
    message.textContent="Misho's streak: "+data.currentStreak+" day"+(data.currentStreak===1?"":"s")+(completed?" · Today's exercise complete!":" · Complete any exercise to keep it going.");
    box.appendChild(mascot);
    box.appendChild(message);
  }
  window.recordExerciseCompletion=function(){
    const date=localDate();
    if(data.lastCompletedDate===date){paint();return;}
    data.currentStreak=(data.lastCompletedDate===previousDate(date))?data.currentStreak+1:1;
    data.lastCompletedDate=date;
    try{localStorage.setItem(KEY,JSON.stringify(data));}catch(e){}
    paint();
  };
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",paint);
  else paint();
})();