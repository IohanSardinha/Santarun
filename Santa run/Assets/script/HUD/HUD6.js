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
		skin.label.fontSize = Screen.width/10;
		GUI.Label (Rect (Screen.width/4, Screen.height*0.1, 500, 500), "Rank TOP 5");
	}
}