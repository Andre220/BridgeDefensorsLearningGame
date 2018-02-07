function Intro()
{                              	
  this.button_play = new Button("imagem/start.png", 195 ,50 ,100, 100, 195, 50);
  this.cena = new mySprite ("imagem/fundo.jpg", 0, 0, 500, 375, 0, 0, 1280, 720, 1, 0); 
                   
  this.mouse_down = function(mouse)
  {       
    console.log("INTRO mouse down mouse X " + mouse.x + " mouse Y " + mouse.y );

    if(this.button_play.clicked(mouse)) 
    {
      currentScene = SCENE.MENU;
    }    
       
  };
     	
	this.Update=function()
  {  
    
  };
   
  this.Draw=function()
	{

    screen.clearRect(0, 0, canvas.width, canvas.height);

    this.cena.Draw;

    screen.font = "20px Comic Sans MS";
		screen.fillStyle = "#000000";
		screen.fillText("INTRO" , 20, 20);
		
    this.button_play.Draw();
    console.log("Draw - Intro");

	}   
}