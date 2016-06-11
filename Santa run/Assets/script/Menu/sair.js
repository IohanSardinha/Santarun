#pragma strict

function Start () {

}

function Update () {
if (Application.platform == RuntimePlatform.Android)

{

	if (Input.GetKey(KeyCode.Escape))
	{
		Application.Quit();
	}
}
}