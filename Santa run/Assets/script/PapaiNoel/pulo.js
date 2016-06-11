#pragma strict
var A : Vector2;
var B : Vector2;
var tof : boolean = false;
var cont : float;
static var podepular : boolean = true;
static var vivo : boolean = true;
function Start () {

}

function Update () {

if ((vivo)&&(Input.GetMouseButton(0))&&(Input.mousePosition.x > Screen.width*0.75)&&(Input.mousePosition.y < Screen.height/8))
{
	tof = true;
	podepular = false;
}

if(tof)
{
	
	cont += Time.deltaTime;
	if(cont < 0.5)
	{
		transform.Translate(0,8*Time.deltaTime,0);
		personagem.colision = false;
		GetComponent.<Animation>().Stop("anda");
		GetComponent.<Animation>().Play("pulo");	
	}
	else if (!GetComponent.<Animation>().IsPlaying("pulo"))
	{	
		cont = 0;
		tof = false;
		personagem.colision = false;
	}
}
}