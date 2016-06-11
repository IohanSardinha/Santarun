#pragma strict
var skin : GUISkin;
function Start () {

}

function Update () {

}

function OnGUI () {
	GUI.skin = skin;
	skin.label.fontSize = Screen.width/10;
	GUI.Label (Rect (Screen.width/6.5, Screen.height/10, 500, 500), "VAAAAAI NOEL!");
}