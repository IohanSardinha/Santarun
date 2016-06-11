#pragma strict

function Start () {

}

function Update () {
while (transform.position.z < -6.1 )
{
	transform.Translate(-1*Time.deltaTime,0,0);
	
}

while (transform.position.z > 0.1 )
{
	transform.Translate(1*Time.deltaTime,0,0);
	
}



}