async function fit(){
    var name = document.getElementById("name").value
    var fy = document.getElementById("Founded_Year").value
    var city = document.getElementById("City").value
    var nation = document.getElementById("Nation").value
    var industry = document.getElementById("Industry").value
    var founder = document.getElementById("Founder").value
    var investory = document.getElementById("Investory").value
    var tf = document.getElementById("Total_Founding").value
    var ct = document.getElementById("Company_Type").value
    var os = document.getElementById("Operating_Status").value
    var ls = document.getElementById("Last_Valuation").value
    var fb = document.getElementById("trash").value
    var result = eel.pred(name,fy,city,nation,industry,founder,investory,tf,ct,os,ls,fb)
    result(call_Back) // a little bit weird https://youtu.be/IbGJaTkyuXA?t=239
}   

eel.expose(call_Back)

function call_Back(output){
    document.getElementById("res").textContent = output
}
