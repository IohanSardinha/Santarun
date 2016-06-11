#pragma strict

function Start () {

}

function Update () {

}

function OnMouseOver () {

if(Input.GetMouseButton(0))
{
	morte.morreu = true;
	morte.voltar = true;
	pulo.vivo = true;
	personagem.pts = 0;
}

}