function math_BMI(){
    // debugger
    let height = Number(document.getElementById("height").value);
    let weight = Number(document.getElementById("weight").value);
    let result = "";

    result = weight / Math.pow(height,2);
    if(result <16){
        document.getElementById("result").innerHTML = "Gầy cấp độ III";
    }else if(result <17){
        document.getElementById("result").innerHTML = "Gầy cấp độ II";
    }
    else if(result <18.5){
        document.getElementById("result").innerHTML = "Gầy cấp độ I";
    }
    else if(result <25){
        document.getElementById("result").innerHTML = "Gầy bình thường";
    }
    else if(result <30){
        document.getElementById("result").innerHTML = "Thừa cân";
    }
    else if(result <35){
        document.getElementById("result").innerHTML = "Béo phì cấp độ I";
    }
    else if(result <40){
        document.getElementById("result").innerHTML = "Béo phì cấp độ II";
    }else{
        document.getElementById("result").innerHTML = "Béo phì cấp độ III";
    }
}