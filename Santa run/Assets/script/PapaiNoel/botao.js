#pragma strict

function Start () {

}

function Update () {

if ((Input.GetMouseButton(0))&&(Input.mousePosition.x > Screen.width*0.75)&&(Input.mousePosition.y < Screen.height/8))
{
	GetComponent.<Animation>().Play("clica");
}

}