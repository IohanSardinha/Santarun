#pragma strict
var skin : GUISkin;
static var rank : float[];
 var x : int;
static var y : int;
static var z : int;
static var podeadd : boolean = false;
var temp1 : int;
var temp2 : int;
function Start () {

rank = new float[10];
rank[personagem.x] = personagem.pts;
personagem.x++;

}

function Update () {



for( var i : int; i < personagem.x; i++)
{
	if(rank[i] < rank[i+1])
	{
		temp1 = rank[i];
		temp2 = rank[i+1];
		rank[i] = temp2;
		rank[i+1] = temp1;
	}
	
}

print(rank[x]);

}

function OnGUI () {
	GUI.skin = skin;
	skin.label.fontSize = Screen.width/20;
	
	GUI.Label (Rect (Screen.width/2.5, Screen.height*0.3, 500, 500), "1º : "+rank[0]);
	
	GUI.Label (Rect (Screen.width/2.5, Screen.height*0.4, 500, 500), "2º : "+rank[1]);
	
	GUI.Label (Rect (Screen.width/2.5, Screen.height*0.5, 500, 500), "3º : "+rank[2]);
	
	GUI.Label (Rect (Screen.width/2.5, Screen.height*0.6, 500, 500), "4º : "+rank[3]);
	
	GUI.Label (Rect (Screen.width/2.5, Screen.height*0.7, 500, 500), "5º : "+rank[4]);
	
}
