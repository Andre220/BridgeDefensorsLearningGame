function Menu()
{                            
//file, sw, sh, x, y, w, h
//file, sx, sy, sw, sh, x, y, w, h, frames, fps
  this.button_play = new Button("imagem/Tela principal/Botao Start.png", 1250, 625, 440, 310, 400, 200);
  this.cena = new mySprite ("imagem/Tela principal/Fundo Camuflagem.png", 0, 0, 1280, 720, 0, 0, 1280, 720, 1, 0); 

   this.Update=function()
  {
  };
   
  this.Draw=function()
  {

    screen.clearRect(0, 0, canvas.width, canvas.height);
    screen.font = "20px Comic Sans MS";
    screen.fillStyle = "#000000";
    screen.fillText("MENU" , 20, 20);
    
    this.cena.Draw();
    this.button_play.Draw();
  }   
   
  this.mouse_down = function(mouse)
  {       
    console.log("INTRO mouse down mouse X " + mouse.x + " mouse Y " + mouse.y );

    if(this.button_play.clicked(mouse)) 
    {
      currentScene = SCENE.NIVEL_1;
    }    
       
  };

  this.mouse_up=function(mouse)
  {
    console.log("INTRO mouse up mouse X " + mouse.x + " mouse Y " + mouse.y );
  };

  this.key_down =function(key)
  {
   	
  };
 
  this.key_up =function(key)
  {
    
  };   

}