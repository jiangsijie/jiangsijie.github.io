window.onload=function(){
	var oTab=getByClass("tab")[0];
	var oTabCon=getByClass("tab-content")[0];
	var aTabLi=oTab.getElementsByTagName('li');
	var aTabConLi=oTabCon.getElementsByTagName('li');

	for(var i=0;i<aTabLi.length;i++){
		aTabLi[i].index=i;
		aTabLi[i].onclick=function(){
			for(var j=0;j<aTabLi.length;j++){
				aTabLi[j].className="";
				aTabConLi[j].className="";
			}
			aTabLi[this.index].className="tab-selected";
			aTabConLi[this.index].className="tab-selected";
		}
	}
}
function getByClass(sClass,oParent) {
	var oPa=oParent?oParent:document;
	var aEle=oPa.getElementsByTagName('*');
	var i=0;
	var aResult=[];
	for(i=0;i<aEle.length;i++){
		if(aEle[i].className == sClass) {
			aResult.push(aEle[i]);
		}
	}
	return aResult;
}