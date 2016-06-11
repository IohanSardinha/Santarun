#pragma strict
var skin : GUISkin;
var posi : int;
function Start () {
posi = 0;
}

function Update () {

}

function OnGUI () {
	GUI.skin = skin;
	skin.label.fontSize = Screen.width/20;
	if(posi == 0)
	{
		GUI.Label (Rect (Screen.width/5, Screen.height/3, 500, 500), "Deslize o dedo para os lados,");
		GUI.Label (Rect (Screen.width/3.5, Screen.height/2.5, 500, 500), " para se movimentar");	
	}
	if(posi == 1)
	{
		GUI.Label (Rect (Screen.width/5.5, Screen.height/3, 500, 500), "Para pular toque o botão vermelho");
		GUI.Label (Rect (Screen.width/4, Screen.height/2.5, 500, 500), " no canto inferior direito");	
	}
	if(posi == 2)
	{
		GUI.Label (Rect (Screen.width/3.5, Screen.height/3, 500, 500), "Desvie das pilastras ");
		GUI.Label (Rect (Screen.width/3.4, Screen.height/2.5, 500, 500), " e pule os obstáculos");	
	}
	if(posi == 3)
	{
		GUI.Label (Rect (Screen.width/4.5, Screen.height/3, 500, 500), "Encoste nas chaminés para");
		GUI.Label (Rect (Screen.width/3, Screen.height/2.5, 500, 500), " entrar no bônus");	
	}
	if(posi == 4)
	{
		GUI.Label (Rect (Screen.width/2.5, Screen.height/3, 500, 500), "No Bônus:");
		GUI.Label (Rect (Screen.width/8, Screen.height/2.5, 500, 500), "Pule qualquer coisa na sua frente");	
	}
	if(posi == 5)
	{
		GUI.Label (Rect (Screen.width/5, Screen.height/3, 500, 500), "Chegue o mais longe possível");
		GUI.Label (Rect (Screen.width/3, Screen.height/2.5, 500, 500), "Máximo de pontos");	
		GUI.Label (Rect (Screen.width/2.3, Screen.height/2.1, 500, 500), "Se divirta");	
	}
	if(posi >= 6)
	{
		Application.LoadLevel("Game");
		StartMenu.tuto = 1;
	}
	if(posi <= 4)
	{
		if(GUI.Button(Rect(Screen.width/7,Screen.height*0.9,Screen.width/7,Screen.height/15),"Pular"))
		{
		Application.LoadLevel("Game");
		StartMenu.tuto = 1;
		}
	}
	
	if(GUI.Button(Rect(Screen.width*0.8,Screen.height*0.9,Screen.width/7,Screen.height/15),"Próximo"))
	{
		posi++;
	}
}