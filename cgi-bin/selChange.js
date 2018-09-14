function selChange(theSel,baseURL,targetWin)
{
  var currSel=theSel.selectedIndex;
  var currURL=theSel.options[currSel].value;
  if(currURL=="") return;
  baseURL=baseURL.substring(0,baseURL.lastIndexOf("/")+1);
  targetWin.location.href=baseURL+currURL;
  //theSel.selectedIndex=0;
}