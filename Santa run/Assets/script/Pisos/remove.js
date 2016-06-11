#pragma strict

function Start () {

}

function Update () {
if (transform.position.x+transform.localScale.x/2 - personagem.posis.x < -50)
{
	Destroy(gameObject);
	personagem.pts += 11;
}
}