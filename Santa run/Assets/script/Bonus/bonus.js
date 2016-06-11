#pragma strict
var ob1 : GameObject;
var ob2 : GameObject;
var ob3 : GameObject;

var rdm1 : int;
var rdm2 : int;
var rdm3 : int;

var urso1 : GameObject;
var urso2 : GameObject;

var presente1 : GameObject;
var presente2 : GameObject;

var chapeu1 : GameObject;
var chapeu2 : GameObject;

var vela1 : GameObject;
var vela2 : GameObject;

var nada1 : GameObject;
var nada2 : GameObject;

var posi1 : Vector3;
var posi2 : Vector3;
var posi3 : Vector3;

function Start () {

posicionar();

rdm1 = Random.value*5;

rdm2 = Random.value*5;
rdm3 = Random.value*5;

escolher();

while(ob2 == ob1)
{
	rdm2 = Random.value*5;
	escolher();
}


while((ob3 == ob1)||(ob3 == ob2))
{
	rdm3 = Random.value*5;
	escolher();
}
escolher();

if(transform.position.x < 1390)
{
	Instantiate(ob1,posi1,transform.rotation);
	Instantiate(ob2,posi2,transform.rotation);
	Instantiate(ob3,posi3,transform.rotation);
	
}

}

function Update () {
if (transform.position.x+transform.localScale.x/2 - personagem.posis.x < -10)
{
	Destroy(gameObject);
	personagem.pts+= 131;
}
}

function posicionar () {

posi1.x = transform.position.x + 100;
posi1.z = transform.position.z;
posi1.y = transform.position.y;


posi2.x = transform.position.x;
posi2.z = -3;
posi2.y = transform.position.y;

posi3.x = transform.position.x;
posi3.z = -6;
posi3.y = transform.position.y;


}

function escolher () {
//RDM1
if(rdm1 == 0)
{
	ob1 = presente1;
}
if(rdm1 == 1)
{
	ob1 = urso1;
}
if(rdm1 == 2)
{
	ob1 = vela1;
}
if(rdm1 == 3)
{
	ob1 = chapeu1;
}
if(rdm1 == 4)
{
	ob1 = nada1;
}

//RDM2
if(rdm2 == 0)
{
	ob2 = presente2;
}
if(rdm2 == 1)
{
	ob2 = urso2;
}
if(rdm2 == 2)
{
	ob2 = vela2;
}
if(rdm2 == 3)
{
	ob2 = chapeu2;
}
if(rdm2 == 4)
{
	ob2 = nada2;
}

//RDM3
if(rdm3 == 0)
{
	ob3 = presente2;
}
if(rdm3 == 1)
{
	ob3 = urso2;
}
if(rdm3 == 2)
{
	ob3 = vela2;
}
if(rdm3 == 3)
{
	ob3 = chapeu2;
}
if(rdm3 == 4)
{
	ob3 = nada2;
}
}