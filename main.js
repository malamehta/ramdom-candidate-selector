
// var ShowName=document.getElementById('player-name');
var cid=0;
var info_arr=[];
var selected=[];
var unselected=[];
var currentSelected=null;
var currentselected_content=document.getElementById("currentselected-content");
var notselected_content=document.getElementById("notselected-content");
var selected_content=document.getElementById("selected-content");
var ele=document.getElementById('scroll-area');
function addName(event){
    var div=document.createElement('div');
    div.className='name-content';
    var span1=document.createElement('span');
    span1.className="cid";
    var span2=document.createElement('span');
    span2.className="candidate-name";
    var span3=document.createElement('span');
    span3.className="cross-btn";
    
    div.appendChild(span1);
    div.appendChild(span2);
    div.appendChild(span3);
    notselected_content.appendChild(div);
    var GetName=document.getElementById('txt').value;
    cid=cid+1;
    span1.innerHTML=cid;
    span2.innerText=GetName;
    span3.innerHTML='<input type="button" value="X" onclick="removeItem(this);" >'
    //storing objects in array
    info_arr.push({"cid":cid,"name":GetName});
    // console.log(info_arr);
    unselected.push(cid);
    //making input field empty
    var GetName=document.getElementById('txt').value="";
}
// remove item
function removeItem(e){
    var item=e.parentNode.parentNode;
    item.parentNode.removeChild(item);
}
//get random number
function random(){
    var showNum =document.getElementById("number");
    var index =Math.floor(Math.random()*unselected.length);
    var item=unselected[index];
    showNum.innerHTML=item;
    if(unselected.length<=0){
        alert("No more player....");
        showNum.innerHTML="0";
        // selected_name.innerHTML="completed";
    }
    else{
        unselected.splice(index,1);
        if(currentSelected!=null){
            selected.push(currentSelected);
        }   
        currentSelected=item;
        
    }
     
    //   console.log(index);
    //   console.log(item); 
    //   console.log(unselected);
    //   console.log(selected)
      var selected_name=document.getElementById("selectedName");
      const a = info_arr.find(n => n.cid == item);
    //   var selectedPlayer=a.name;
      selected_name.innerHTML=a.name;
    updateNameField(selected,unselected,currentSelected);
    // console.log(selected);
    // console.log(unselected);
    // console.log(currentSelected);
      
          
      
} 
function updateNameField(selected,notselected,currentselected){
    //    selected_content.innerHTML="";
    //    notselected_content.innerHTML="";
    //    currentselected_content.innerHTML="";
       var nameContent=notselected_content.getElementsByClassName("name-content");
    //    console.log(nameContent);
    for(var i=0;i<nameContent.length;i++){
        if(nameContent[i].getElementsByClassName('cid')[0].innerHTML==currentselected){
            // console.log(nameContent[i]);
           
            if(currentselected_content.getElementsByClassName('name-content')[0]!=undefined){
                currentselected_content.getElementsByClassName('name-content')[0].classList.remove('current');
                currentselected_content.getElementsByClassName('name-content')[0].classList.add('selected');
                selected_content.append(currentselected_content.getElementsByClassName('name-content')[0]);

            }  
            nameContent[i].classList.add("current");        
            currentselected_content.innerHTML=nameContent[i].outerHTML;
            nameContent[i].remove();
        }
    }


}






