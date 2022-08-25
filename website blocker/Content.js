const generateSTYLES = () => {
  return `<style>@import url(https://fonts.googleapis.com/css?family=opensans:500);
  body {
    background: #0b0b0b;;
   
  }

  ._404 {
    font-size: 25px;
    position: relative;
    display: block;
    z-index: 2;
    height: 250px;
    color: white;
    margin-top: 22%;
    margin-left: 24%;
  
  }
  #_1 {
    font-size: 25px;
    height: 309px;
    margin-top: 13px;
    }
  #_2 {
    font-size: 15px;
    margin-top: -26%;
  }
  #btn{
    color: #f5ffff;
    background-color: #0f668a;
    border-radius: 17px;
    height: 41px;
    width: 122px;
    font-size: 20px;
    margin-top: 24px;
}
  }
  
</style>`;
};

const generateHTML = (pageName) => {
  return `
   
  <div  class='_404'>
      <div>This site can't be reached</div>
      <div id='_1'>check if there is a typo in ${pageName}</div>
      <div id='_2'>DNS_PROBE_FINISHED_NXDOMAIN</div>
      <button id="btn" onclick="location.href='www.${pageName}.com';">Reload</button>
  </div>
   `;
};

switch (window.location.hostname) {
  case "www.youtube.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("YOUTUBE");
    break;
  case "www.netflix.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("NETFLIX");
    break;
  case "www.linkedin.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("linkedin");
    break;
  case "www.amazon.in":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("Amazon");
    break;

}
