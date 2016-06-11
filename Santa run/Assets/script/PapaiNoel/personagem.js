#pragma strict
static var posis : Vector3;

static var ultdist : int = 500;
static var chanse : int = 9;

var maisvel : int;

static var x : int;

static var pts : int;
static var best : int;

var A : float;
var B : float;

var tof : boolean = false;

var dir : boolean = false;
var esq : boolean = false;

var atual : int;

static var colision : boolean = true;

var colision2 : boolean = false;
var colision3 : boolean = true;
var velocidade : float = 70;

var cont : float;
var podecontar : boolean = false;

var chamine : boolean = false;
var obstaculo : boolean = false;
var morreu : boolean = false;

function Start () {

maisvel = 1000;

best = PlayerPrefs.GetInt("Melhor");

}

function Update () {

posis = transform.position;
mouse();

if(maisvel - posis.x < 0)
{
	velocidade += 3;
	maisvel += 1000;
}

if(!colision2)
{
	transform.Translate(0,0,velocidade*Time.deltaTime);
	
	mover();
	
	if(colision)
	{
		if(colision3)
		{
			pulo.podepular = true;
			GetComponent.<Animation>().Play("anda"); 
		} 
		else
		{
			dir = false;
			esq = false;
		}                                                                       
	}
}

if(colision2)
{
	velocidade = 15;
	transform.Translate(0,0,velocidade*Time.deltaTime);
	pulo.podepular = false;
	
}

if((posis.y < -10)||(cont > 0.5))
{
	if(chamine)
	{
		morte.morreu = true;
		morte.bonus = true;
		chamine = false;
	}
	else if(obstaculo)
	{
		morte.morreu = true;
		morte.menu = true;
		obstaculo = false;
	}
	else if(morreu)
	{
		morte.morreu = true;
		morte.morte = true;
		morreu = false;
	}
if(posis.y < -5)
{
	morreu = true;
}

}

if(podecontar)
{
	cont = cont+Time.deltaTime*1; 
}


}

function OnCollisionEnter (collision:Collision){
if(collision.gameObject.tag == "cube")
{
	colision = true;
}
if(collision.gameObject.tag == "nada")
{
	colision2 = true;
	GetComponent.<Collider>().isTrigger = true;
	pulo.vivo = false;
	GetComponent.<Animation>().Play("caindo");
	
	
}
if((collision.gameObject.tag == "parede")&&(posis.y < 3.5))
{
	velocidade = 0;
	colision3 = false;
	pulo.podepular = false;
	pulo.vivo = false;
	GetComponent.<Animation>().Stop("anda");
	GetComponent.<Animation>().Play("parede");
	podecontar = true;
	morreu = true;
	//Application.LoadLevel("Morreu");
}
if(collision.gameObject.tag == "pilastra")
{
	velocidade = 0;
	colision3 = false;
	pulo.podepular = false;
	pulo.vivo = false;
	GetComponent.<Animation>().Stop("anda");
	GetComponent.<Animation>().Play("parede");
	podecontar = true;
	morreu = true;
	//Application.LoadLevel("Morreu");
}
if(collision.gameObject.tag == "chamine")
{
	velocidade = 0;
	GetComponent.<Animation>().Stop("anda");
	pulo.vivo = false;
	chamine = true;
	podecontar = true;
}
if(collision.gameObject.tag == "obstaculo")
{
	velocidade = 0;
	GetComponent.<Animation>().Stop("anda");
	pulo.vivo = false;
	obstaculo = true;
	podecontar = true;
}
print(maisvel - posis.x+" | "+velocidade);
}

function mover () {

if(dir)
	{
		if((atual == 0)&&(posis.z > -3))
		{
			transform.Translate(20*Time.deltaTime,0,0);
		}
		if((atual == 3)&&(posis.z > -6))
		{
			transform.Translate(20*Time.deltaTime,0,0);
		}
	}

	if(esq)
	{
		if((atual == 6)&&(posis.z < -3))
		{
			transform.Translate(-20*Time.deltaTime,0,0);
		}
		if((atual == 3)&&(posis.z < 0))
		{
			transform.Translate(-20*Time.deltaTime,0,0);
		}
	}

}

function mouse () {

if(Input.GetMouseButtonDown(0))
{
	A = Input.mousePosition.x;
}
if((Input.GetMouseButtonUp(0))&&(pulo.vivo))
{
	B = Input.mousePosition.x;
	tof = true;
	if(B - A > 10)
	{
		dir = true;
		esq = false;
		if((posis.z < 1)&&(posis.z > -1))
		{
			atual = 0;
		}
		if((posis.z < -2)&&(posis.z > -4))
		{
			atual = 3;
		}
		if((posis.z < -5)&&(posis.z > -7))
		{
			atual = 6;
		}
	}
	if(B - A < -10)
	{
		dir = false;
		esq = true;
		if((posis.z < 1)&&(posis.z > -1))
		{
			atual = 0;
		}
		if((posis.z < -2)&&(posis.z > -4))
		{
			atual = 3;
		}
		if((posis.z < -5)&&(posis.z > -7))
		{
			atual = 6;
		}
	}
}

}