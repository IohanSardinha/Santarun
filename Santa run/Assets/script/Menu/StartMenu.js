#pragma strict
static var tuto : int;
function Start () {

tuto = PlayerPrefs.GetInt("tutorial");

}

function Update () {
if(Input.GetMouseButton(0))
{
	if(tuto == 1)
	{
		morte.morreu = true;
		morte.menu = true;
		pulo.vivo = true;
		personagem.pts = 0;
	}
	if(tuto == 0)
	{
		tuto = 1;
		PlayerPrefs.SetInt("tutorial",tuto);
		Application.LoadLevel("Tutorial");
	}
	
}

}