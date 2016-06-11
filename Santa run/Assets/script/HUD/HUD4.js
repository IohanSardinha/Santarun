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
		GUI.Label (Rect (Screen.width/50, Screen.height/50, 500, 500), "Pontos : "+personagem.pts);
	}
}