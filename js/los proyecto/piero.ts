var config = {
    coreData: {
      appId: "vscode"
    }
  };
  if (window.awa) {
    awa.init(config);
  }
function hola(){
  console.log("feos");
  console.error("hola");  
}  
hola()