#pragma strict
var pause : boolean = false;
var skin : GUISkin;
function Start () {

}

function Update () {

	if((Input.GetMouseButton(0))&&(pause))
	{
		Time.timeScale = 1;
		pause = false;
	}

}

function OnGUI () {

if(pause)
{
	GUI.skin = skin;
	GUI.Label (Rect (Screen.width/5.5, Screen.height/2, 500, 500), "Toque na tela para continuar");	
}

if(GUI.Button(Rect(Screen.width*0.87,0,Screen.width/8,Screen.height/10),"| |"))
{	
	if(!pause)
	{
		Time.timeScale = 0;
		pause = true;
	}
}

}