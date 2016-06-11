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
		skin.label.fontSize = Screen.width/20;
		GUI.Label (Rect (Screen.width/4, Screen.height*0.8, 500, 500), "(Toque para recomeçar)");
		GUI.Label (Rect (Screen.width/3, Screen.height/8, 500, 500), "Pontos : "+personagem.pts);
		GUI.Label (Rect (Screen.width/4, Screen.height/6, 500, 500), "Melhor pontuação : "+personagem.best);
	}
}