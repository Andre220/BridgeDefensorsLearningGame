function Button(arquivo, sw, sh, x, y, w, h)
{
	
    this.button = new mySprite(arquivo, 0, 0, sw, sh, x, y, w, h, 1, 1);
      
    this.Draw = function()
    {  
        this.button.Draw();    
    };
    
    this.clicked = function(mouse)
    {    
        this.test = new mySprite("", 0, 0, 1, 1, mouse.x, mouse.y, 1, 1, 1, 1);
        
        console.log("mouse X " + this.test.x);

        console.log("mouse Y " + this.test.y);

        console.log("button X " + this.button.x);

        console.log("button Y " + this.button.y);

        if(this.button.Collided(this.test))
        {
           return true;
        }
        return false;
    };
}