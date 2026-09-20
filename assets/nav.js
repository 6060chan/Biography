(function(){
  var pages=[
    {dir:"lessons",file:"0000-index.html",short:"總覽",label:"課程總覽"},
    {dir:"lessons",file:"0001-oral-history-interview-golden-rules.html",short:"一",label:"訪談五法則"},
    {dir:"lessons",file:"0002-from-recording-to-transcript.html",short:"二",label:"錄音轉逐字稿"},
    {dir:"lessons",file:"0003-ai-organizing-clusters-timeline.html",short:"三",label:"AI 整理術"},
    {dir:"lessons",file:"0004-voice-capture-chapter-drafting.html",short:"四",label:"口吻保持"},
    {dir:"lessons",file:"0005-assembling-the-book.html",short:"五",label:"組稿成書"},
    {dir:"reference",file:"001-question-bank.html",short:"問",label:"問題銀行"},
    {dir:"reference",file:"002-ai-organizing-prompt-cards.html",short:"卡",label:"提示詞卡"}
  ];

  var path=(location.pathname||"").replace(/\\/g,"/");
  var curFile=path.substring(path.lastIndexOf("/")+1);
  var inRef=path.indexOf("/reference/")>-1;
  var prefix=inRef?"../":"";

  function href(p){
    if(inRef){return prefix+p.dir+"/"+p.file;}
    if(p.dir==="reference"){return "../reference/"+p.file;}
    return p.file;
  }

  var nav=document.createElement("nav");
  nav.className="site-nav";
  var inner=document.createElement("div");
  inner.className="site-nav-inner";

  var brand=document.createElement("a");
  brand.className="site-brand";
  brand.href=href(pages[0]);
  brand.textContent="✉ AI 長者傳記學堂";
  inner.appendChild(brand);

  var links=document.createElement("div");
  links.className="site-links";

  pages.forEach(function(p){
    var a=document.createElement("a");
    a.className="site-link";
    a.href=href(p);
    a.setAttribute("data-label",p.label);
    a.textContent=p.short;
    if(p.file===curFile){a.classList.add("active");}
    links.appendChild(a);
  });

  inner.appendChild(links);
  nav.appendChild(inner);
  document.body.insertBefore(nav,document.body.firstChild);
})();
