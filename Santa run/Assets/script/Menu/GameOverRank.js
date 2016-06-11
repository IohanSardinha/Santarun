#pragma strict
static var xy : int;
function Start () {
xy = 0;
}

function Update () {



}

function OnMouseOver () {

if(Input.GetMouseButton(0))
{
	Application.LoadLevel("Rank");
	rank.y = personagem.pts;
	//rank.z += 1;
	//print(rank.z);
	print(xy);
	xy ++;
	
	rank.podeadd = true;
}

}