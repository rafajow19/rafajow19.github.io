(function(){
  var root=document.documentElement;
  try{var t=localStorage.getItem("tema");if(t)root.setAttribute("data-theme",t)}catch(e){}
  document.getElementById("tema").addEventListener("click",function(){
    var dark=root.getAttribute("data-theme")==="dark"||
      (!root.getAttribute("data-theme")&&!matchMedia("(prefers-color-scheme: light)").matches);
    var n=dark?"light":"dark";
    root.setAttribute("data-theme",n);
    try{localStorage.setItem("tema",n)}catch(e){}
  });
  var btns=document.querySelectorAll(".filters button");
  btns.forEach(function(b){
    b.addEventListener("click",function(){
      btns.forEach(function(x){x.setAttribute("aria-pressed",x===b)});
      document.querySelectorAll("#lista-projetos .unit").forEach(function(u){
        u.hidden=!(b.dataset.f==="todos"||u.dataset.s===b.dataset.f);
      });
    });
  });
})();
