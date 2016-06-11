#pragma strict
var chao1 : GameObject;
var chao2 : GameObject;
var chao3 : GameObject;

var chaoFurado1 : GameObject;
var chaoFurado2 : GameObject;

var chaoObstaculo1 : GameObject;
var chaoObstaculo2 : GameObject;

var chaoPilar1 : GameObject;
var chaoPilar2 : GameObject;

var chaoNormal1 : GameObject;
var chaoNormal2 : GameObject;

var chaoChamine : GameObject;

var frente : Vector3;

var lado1 : Vector3;
var lado2 : Vector3;

var cont : boolean = true;

var rdm1 : int;
var rdm2 : int;
var rdm3 : int;
var rdm4 : int;

function Start () {

rdm1 = Random.value*10;

rdm2 = Random.value*10;
rdm3 = Random.value*10;

rdm4 = Random.value*10;

EscolherChao();

while(chao2 == chao1)
{
	rdm2 = Random.value*10;
	EscolherChao();
}


while((chao3 == chao1)||(chao3 == chao2))
{
	rdm3 = Random.value*10;
	EscolherChao();
}

EscolherChao();

posicionar();

}

function Update () {

if ((transform.position.x+transform.localScale.x/2 - personagem.posis.x < 500)&&(cont))
{
	Instantiate(chao1,frente,transform.rotation);
	Instantiate(chao2,lado1,transform.rotation);
	Instantiate(chao3,lado2,transform.rotation);
	
	cont = false;
}
if (transform.position.x+transform.localScale.x/2 - personagem.posis.x < -10)
{
	Destroy(gameObject);
	personagem.pts += 11;
}
}

function EscolherChao () {

if(rdm1 == 0)
{
	chao1 = chaoFurado1;
}

if(rdm1 == 1)
{
	chao1 = chaoFurado1;
}

if(rdm1 == 2)
{
	chao1 = chaoObstaculo1;
}

if(rdm1 == 3)
{
	chao1 = chaoObstaculo1;
}

if(rdm1 == 4)
{
	chao1 = chaoPilar1;
}

if(rdm1 == 5)
{
	chao1 = chaoPilar1;
}

if(rdm1 == 6)
{
	chao1 = chaoNormal1;
}

if(rdm1 == 7)
{
	chao1 = chaoNormal1;
}

if(rdm1 == 8)
{
	chao1 = chaoNormal1;
}

if(rdm1 == 9)
{
	chao1 = chaoNormal1;
}

//RDM2

if(rdm2 == 0)
{
	chao2 = chaoFurado2;
}

if(rdm2 == 1)
{
	chao2 = chaoFurado2;
}

if(rdm2 == 2)
{
	chao2 = chaoObstaculo2;
}

if(rdm2 == 3)
{
	chao2 = chaoObstaculo2;
}

if(rdm2 == 4)
{
	chao2 = chaoPilar2;
}

if(rdm2 == 5)
{
	chao2 = chaoNormal2;
}

if(rdm2 == 6)
{
	chao2 = chaoNormal2;
}

if(rdm2 == 7)
{
	chao2 = chaoNormal2;
}

if(rdm2 == 8)
{
	chao2 = chaoNormal2;
}

if(rdm2 == 9)
{
	chao2 = chaoNormal2;
	if ((rdm4 >= personagem.chanse)&&(personagem.ultdist - transform.position.x < 0))
	{
		chao2 = chaoChamine;
		personagem.ultdist = personagem.ultdist + 500;
		personagem.chanse = personagem.chanse-1;
	}
}

//RDM3

if(rdm3 == 0)
{
	chao3 = chaoFurado2;
}

if(rdm3 == 1)
{
	chao3 = chaoFurado2;
}

if(rdm3 == 2)
{
	chao3 = chaoObstaculo2;
}

if(rdm3 == 3)
{
	chao3 = chaoObstaculo2;
}

if(rdm3 == 4)
{
	chao3 = chaoPilar2;
}

if(rdm3 == 5)
{
	chao3 = chaoNormal2;
}

if(rdm3 == 6)
{
	chao3 = chaoNormal2;
}

if(rdm3 == 7)
{
	chao3 = chaoNormal2;
}

if(rdm3 == 8)
{
	chao3 = chaoNormal2;
}

if(rdm3 == 9)
{
	chao3 = chaoNormal2;
	if ((rdm4 >= personagem.chanse)&&(personagem.ultdist - transform.position.x < 0))
	{
		chao3 = chaoChamine;
		personagem.ultdist = personagem.ultdist + 500;
		personagem.chanse = personagem.chanse-1;
		
	}
}

}

function posicionar () {

frente.x = transform.position.x+(chao1.transform.localScale.x/2)+(transform.localScale.x/2)-2;
frente.y = transform.position.y;
frente.z = transform.position.z;

lado1.z = transform.position.z-(chao2.transform.localScale.z/2)-(transform.localScale.z/2);
lado2.z = (transform.position.z-(chao3.transform.localScale.z/2)-(transform.localScale.z/2))*2;

lado1.x = lado2.x = transform.position.x;
lado1.y = lado2.y = transform.position.y;

}