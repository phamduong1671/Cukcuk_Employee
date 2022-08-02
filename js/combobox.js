
/**
 * Hàm dùng để ẩn hiện giá combobox-value
 * PA_Dương (01/08/2022)
 */
 function iconDropDown(id){
    let me = this;
    let cbbValueClass, a, b, c, d;

    if(id == "icon-dropdown1"){
        a = "combobox-value1";
        b = "icon-cbb1";
        c = "combobox-value2";
        d = "icon-cbb2";
    }
    if(id == "icon-dropdown2"){
        a = "combobox-value2";
        b = "icon-cbb2";
        c = "combobox-value1";
        d = "icon-cbb1";

    }

    cbbValueClass = document.getElementById(a).className;
    if(cbbValueClass == "combobox-value"){
        document.getElementById(a).classList.add("combobox-hide");
        document.getElementById(b).className = "fas fa-angle-down";
    }
    else{
        document.getElementById(a).classList.remove("combobox-hide");
        document.getElementById(b).className = "fas fa-angle-up";
        document.getElementById(c).classList.add("combobox-hide");
        document.getElementById(d).className = "fas fa-angle-down";
    }
}

/**
 * Hàm hiện value của item lên input-combobox
 * PA_Dương (01/08/2002)
 */
function comboboxItem(id){
    let me = this;
    let a, b, c;
    c = document.getElementById(id).parentNode.id;

    if(c == "combobox-value1"){
        a = "input-combobox1";
        b = "icon-cbb1";
    }
    if(c == "combobox-value2"){
        a = "input-combobox2";
        b = "icon-cbb2";
    }

    document.getElementById(a).value = document.getElementById(id).innerHTML;
    document.getElementById(c).classList.add("combobox-hide");
    document.getElementById(b).className = "fas fa-angle-down";
}