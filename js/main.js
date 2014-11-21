$(document).ready(function(){
  $("address").each(function(){                         
    var embed ="<iframe width='425' height='350' frameborder='0' scrolling='no'  marginheight='0' marginwidth='0'   src='https://maps.google.com/maps?&amp;q="+ encodeURIComponent( $(this).text() ) +"&amp;output=embed'></iframe>";
          $(this).html(embed);
                             
   });
});

var data={"parks":[
        {
            "ParkName":"Hondo Dog Park",
            "pLocation":"4499 NW 229th Ave.",
            "ParkType":"Dedicated",
            "SmallDog":"Yes",
            "Size":"3.75 acres"
        },
        {
            "ParkName":"Gabriel Park",
            "pLocation":"SW 45th Ave. and SW Vermont St.",
            "ParkType":"Dedicated",
            "SmallDog":"No",
            "Size":"1.75 acres"

        }
]}
function changeText(x) {
   document.getElementById('parkname').innerHTML = data.parks[x].ParkName;
   document.getElementById('location').innerHTML = data.parks[x].pLocation;
   document.getElementById('type').innerHTML = data.parks[x].ParkType;
   document.getElementById('small').innerHTML = data.parks[x].SmallDog;
   document.getElementById('size').innerHTML = data.parks[x].Size;
}
