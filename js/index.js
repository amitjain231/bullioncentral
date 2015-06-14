function initBullionCentral()
{

}
	
function load_url(pi_src)
{
	var lv_url;
	
	switch(pi_src) 
	{
		case "HOME":
			lv_url = "misc/home.html";
			break;
		case "VB":
			lv_url = "http://www.vardhamanbullion.com/live";
			break;
		case "RB":
			lv_url = "http://www.rahulbullion.com";
			break;
		case "CG":
			lv_url = "http://capsliverates.com/pc.php";
			break;	
		case "SVBC":
			lv_url = "http://www.svbcgold.com/mobile";
			break;	
		case "DP":
			lv_url = "http://dpbullion.in/";
			break;
		default:
	}


	$("#id_iframe_webbview").attr("src", lv_url);
	
}
	
	