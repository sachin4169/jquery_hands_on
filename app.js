$("#create_chessboard").click(()=> {
    $("#chesstable").empty();
    console.log("clicked");
    var trow = `<tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>`

  $("#chesstable").css({"border":"1px solid black"})
    for(let i = 0; i<8; i++){
        $("#chesstable").append(trow);
    }
});

$("#remove_chessboard").click(()=>{
    $("#chesstable").empty();
});

$("#btn").click(()=>{
   var x = $("#btn");
   if(x.html() == "Click Me"){
       x.empty();
       x.append("You clicked me")
   }else{
    x.empty();
    x.append("Click Me")
   }
});
$("#para").mouseover(()=>{ 
    $('#para').css({"background-color":"green", "color": "#fff", "font-size":"25px","padding":"15px"})
});
$("#para").mouseout(()=>{
    $('#para').css({"background-color":"#fff", "color": "#000", "font-size":"16px","padding":"0px"})
});

$("#remove").click(()=>{
    $(".test").remove();
    $(".demo").remove();
})
$("#getclass").click(()=>{
    var classList = $("#test").attr("class");
    var classArr = classList.split(/\s+/);
        
    $.each(classArr, function(index, value){
        $("#gclass").append( index + ": " + value +" ,");
});
});

// Green background color, white text color, 25 pixels font size and a padding of 15 pixels