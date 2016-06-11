#pragma strict
static var morreu : boolean = false;
static var menu : boolean = false;
static var morte : boolean = false;
static var voltar : boolean = false;
static var bonus : boolean = false;
static var hud : boolean = true;
var y : int;
var cont : float;
function Start () {

}

function Update () {
if((morreu)&&(y < 14))
{
	transform.Translate(-100*Time.deltaTime,0,0);
	y++;
}
if(y >= 14)
{
	cont +=Time.deltaTime;
}
if(cont > 0.5)
{
	hud = false;
	if(menu)
	{
		Application.LoadLevel("Game");
		pulo.vivo = true;
		hud = true;
		if(personagem.pts > personagem.best)
		{
			personagem.best = personagem.pts;
		}
	}
	if(morte)
	{
		if(personagem.pts > personagem.best)
		{
			personagem.best = personagem.pts;
			PlayerPrefs.SetInt("Melhor",personagem.best);
		}
		Application.LoadLevel("Morreu");
		pulo.vivo = true;
		hud = true;
	}
	if(voltar)
	{
		if(personagem.pts > personagem.best)
		{
			personagem.best = personagem.pts;
			PlayerPrefs.SetInt("Melhor",personagem.best);
		}
		Application.LoadLevel("Menu");
		pulo.vivo = true;
		hud = true;
	}
	if(bonus)
	{
		Application.LoadLevel("Bonus");
		pulo.vivo = true;
		hud = true;
	}
	bonus = false;
	menu = false;
	morte = false;
	voltar = false;
	morreu = false;
}
}