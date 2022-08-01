
/**
 * Hàm dùng để ẩn hiện giá combobox-value
 * PA_Dương (01/08/2022)
 */
 function iconDropDown(){
    let me = this;
    let cbbValueClass;

    cbbValueClass = document.getElementById("combobox-value").className;
    if(cbbValueClass == "combobox-value"){
        document.getElementById("combobox-value").classList.add("combobox-hide");
        document.getElementById("icon-cbb").className = "fas fa-angle-down";
    }
    else{
        document.getElementById("combobox-value").classList.remove("combobox-hide");
        document.getElementById("icon-cbb").className = "fas fa-angle-up";
    }
}

/**
 * Hàm hiện value của item lên input-combobox
 * PA_Dương (01/08/2002)
 */
function comboboxItem(id){
    let me = this;

    document.getElementById("input-combobox").value = document.getElementById(id).innerHTML;
    document.getElementById("combobox-value").classList.add("combobox-hide");
    document.getElementById("icon-cbb").className = "fas fa-angle-down";
}