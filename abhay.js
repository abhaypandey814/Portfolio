var typed=new Typed(".typing",{
    strings:["","Python Programmer","Web Developer","Web Designer"],
    typeSpeed:100,
    Backspeed:60,
    loop:true
})

const nav = document.querySelector(".nav"),
      navList=nav.querySelectorAll("li"),
      totalNavList=navList.length,
      allsection=document.querySelectorAll(".section"),
      totalSection=allSection.length;
      for(let i=0;i<totalNavList;i++)
      {
        const a=navList[i].querySelector("a");
        a.addEventListener("click", function()
        {
            for(let j=0;j<totalNavList;j++)
            {
                if(navList[j].querySelector("a").classList.contains("active"))
                {
                    console.log(navList[j].querySelector("a"))
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            showsection(this);
        })
      }
      function showsection(element)
      {
        for(let i=0;i<totalSection; i++)
        {
            allSection[i].classList.remove("active");
        }
        const target=element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active")
      }