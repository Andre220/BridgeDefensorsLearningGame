function Level_01()
{
	//this.Variavel = diz que aquela variavel em questao pertence apenas aquele classe, logo, nao pode ser chamado em nenhuma outra classe.

	/*
	% = pega o resto da divisão 
	o if irá sempre testar se o que está entre () é VERDADEIRO.

	*/

	//(file, sw, sh, x, y, w, h)
	//(file, sx, sy, sw, sh, x, y, w, h, frames, fps)
	
//JOGADOR

	this.tank1 = new mySprite ("imagem/fase1/tanque.png", 0, 0, 417, 152, 590, 540, 100, 75, 1, 0);
	this.tank2 = new mySprite ("imagem/fase1/A.A.E.png", 0, 0, 181, 222, 115, 270, 75, 50, 1, 0);
	this.tank3 = new mySprite ("imagem/fase1/A.A.D.png", 0, 0, 181, 222, 1095, 270, 75, 50, 1, 0);

	//inimigos

	this.nave1 = new mySprite ("imagem/fase1/nave.png", 0, 0, 60, 30, canvas.width + 180, Math.floor((Math.random() % 3 * 200)) , 60, 30, 1, 0);
	this.nave1.velx = 10;
	this.nave1.vely = 0;

	this.nave2 = new mySprite ("imagem/fase1/nave.png", 0, 0, 60, 30, canvas.width + 180, Math.floor((Math.random() % 3 * 100)), 60, 30, 1, 0);
	this.nave2.velx = 15;
	this.nave2.vely = 0;

	this.nave3 = new mySprite ("imagem/fase1/nave.png", 0, 0, 60, 30, canvas.width + 180, Math.floor((Math.random() % 3 * 50)), 60, 30, 1, 0); 
	this.nave3.velx = 25;
	this.nave3.vely = 0;

	this.listnaves = new Array();
	this.listnaves.push(this.nave1, this.nave2, this.nave3);

//cenario

	this.predios1 = new mySprite ("imagem/fase1/predio1.png", 0, 0, 378, 1230, 0, 320, 150, 300, 1, 0);
	this.predios2 = new mySprite ("imagem/fase1/Predio2.png", 0, 0, 378, 1230, 150, 320, 150, 300, 1, 0);
	this.predios3 = new mySprite ("imagem/fase1/predio3.png", 0, 0, 378, 1230, canvas.width - 150, 320, 150, 300, 1, 0);
	this.predios4 = new mySprite ("imagem/fase1/predio1.png", 0, 0, 378, 1230, canvas.width - 300, 320, 150, 300, 1, 0);
	this.ponte = new mySprite ("imagem/fase1/ponte.png", 0, 0, 2505, 418, 300, 470, 680, 150, 1, 0);
	this.cena = new mySprite ("imagem/fase1/Ceu.png", 0, 0, 1280, 720, 0, 0, 1280, 720, 1, 0); 

//pontuacao
	this.pointScreen = new mySprite("imagem/fase1/points screen.png", 0, 0, 3001, 63, 0, 690, 1280, 30, 1, 1);
	this.points = 0;
//outros

	// tiros
	
	this.listTiro = new Array();

//FUNÇAO

	this.Update = function()
	{
		//nave se movimentando
		
		for(this.i = 0;this.i < this.listnaves.length; this.i++)
		{
		this.listnaves[this.i].x -= this.listnaves[this.i].velx;		
		};

	//tiros		
	
	if(PoderAtirar == true)
	{
		if(cima_apertei)
		{
			this.tiroMeio = new mySprite ("imagem/fase1/nave.png", 0, 0, 60, 30, 640, 580, 5, 15, 1, 1);
			this.tiroMeio.velx = 0; 
			this.tiroMeio.vely = -10;
			this.listTiro.push(this.tiroMeio);
			console.log ("meio" + this.listTiro.length)
			PoderAtirar = false;
		}

		if(esquerda_apertei)
		{
			this.tiroEsquerda = new mySprite ("imagem/fase1/nave.png", 0, 0, 60, 30, 165, 275, 5, 15, 1, 1);
			this.tiroEsquerda.velx = 10;
			this.tiroEsquerda.vely = -10;
			this.listTiro.push(this.tiroEsquerda);
			console.log ("esquerda" + this.listTiro.length)
			PoderAtirar = false;
		}

		if(direita_apertei)
		{
			this.tiroDireita = new mySprite ("imagem/fase1/nave.png", 0, 0, 60, 30, 1115, 275, 5, 15, 1, 1);
			this.tiroDireita.velx = -10;
			this.tiroDireita.vely = -10;
			this.listTiro.push(this.tiroDireita);
			console.log ("direita" + this.listTiro.length)
			PoderAtirar = false;
		} 

		/*if (this.tempo >= 2)
		{
			this.tempo = 0;
		}*/
	}

		//tiro se movendo
		for (this.i = 0;this.i < this.listTiro.length;this.i++)
		{
			this.listTiro[this.i].x += this.listTiro[this.i].velx;
			this.listTiro[this.i].y += this.listTiro[this.i].vely;

			for (this.j = 0;this.j <this.listnaves.length;this.j++)
			{
				if (this.listTiro[this.i].Collided(this.listnaves[this.j]))
				{
				this.listnaves[this.j].x = 400;
				this.listnaves[this.j].y = 500;
				}
			}

			if (this.listTiro[this.i].y < -15 )
			{
				this.listTiro.splice(this.i, 1);
			}
		}

		console.log("QUANTOS TIROS " + this.listTiro.length);

		//nave voltando ao ponto de partida quando sai do canvas

		if (this.nave1.x < - 180)
		{  
			this.nave1.x = canvas.width;
			this.nave1.y = Math.floor((Math.random() % 3 * 200));
		}

		if ( this.nave2.x < - 180)
		{
			this.nave2.x = canvas.width;
			this.nave2.y = Math.floor((Math.random() % 3 * 200));
		}

		if ( this.nave3.x < - 180)
		{
			this.nave3.x = canvas.width;
			this.nave3.y = Math.floor((Math.random() % 3 * 200));
		}
	}
	
	this.Draw=function()
	{	
		//console.log("draw");

		screen.clearRect(0, 0, canvas.width, canvas.height);

		this.cena.Draw();
		
		for (this.j = 0;this.j < this.listnaves.length;this.j++)
		{
		this.listnaves[this.j].Draw();
		}

		for (this.i = 0;this.i < this.listTiro.length;this.i++)
		{
		this.listTiro[this.i].Draw();
		}

		this.tank1.Draw();
		this.tank2.Draw();
		this.tank3.Draw();
		this.predios1.Draw();
		this.predios2.Draw();
		this.predios3.Draw();
		this.predios4.Draw();
		this.ponte.Draw();
		this.pointScreen.Draw();
		//points.Draw();

		screen.font = "20px Comic Sans MS";
		screen.fillStyle="#000000";
		screen.fillText("tempo" + PoderAtirar, 20, 20);	
		
	}

	this.loop = function()
	{
		console.log("looooop");
		Update();
 		Draw();
		setTimeout(loop, 30);
	}

//H
	function setTime()
	{	
	
	}

	/*this.mouse_down = function(mouse)
	{
		console.log("hey")
	}

	this.mouse_up = function(mouse)
	{
		console.log("hey")
	}*/

	this.key_down=function(keyboard)
	{
		if(key.keyCode == 38 && cima_solto)
		{
		}

		if(key.keyCode == 37 && esquerda_solto)
		{
		}

		if(key.keyCode == 39 && direita_solto)
		{	
		}

		if(key.keyCode == 40 && baixo_solto)
		{	
		}
	}

	this.key_up=function(keyboard)
	{
		if(key.keyCode == 38 && cima_solto)
		{
		}

		if(key.keyCode == 37 && esquerda_solto)
		{
		}

		if(key.keyCode == 39 && direita_solto)
		{	
		}

		if(key.keyCode == 40 && baixo_solto)
		{	
		}
	}
}