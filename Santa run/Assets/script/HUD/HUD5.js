#pragma strict
var skin : GUISkin;
function Start () {

}

function Update () {

}

function OnGUI () {
	if(morte.hud)
	{
		GUI.skin = skin;
		skin.label.fontSize = Screen.width/25;
		GUI.Label (Rect (Screen.width/4, Screen.height*0.75, 500, 500), "Criado por : Iohan Sardinha");	
		GUI.Label (Rect (Screen.width/4.5, Screen.height*0.8, 500, 500), "Desenhos por : Lara Miranda");	
		GUI.Label (Rect (Screen.width/6, Screen.height*0.85, 500, 500), "Orientação de : Prof. Djan Krystlonc");	
		GUI.Label (Rect (Screen.width/3.5, Screen.height*0.9, 500, 500), "Desenvolvido no P.D.E");
		GUI.Label (Rect (Screen.width/4.2, Screen.height*0.95, 500, 500), "2013 - Colégio Metropolitano");		
		}
}