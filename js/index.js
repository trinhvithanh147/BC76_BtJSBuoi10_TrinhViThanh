let arrNhanVien = [];

//Thêm nhân viên
document.getElementById("btnThemNV").onclick = function () {
    let nhanVien = getValueForm();
    if (nhanVien != null) {
        arrNhanVien.push(nhanVien);
        renDerDataNhanVien();
        setLocalStore("arr", arrNhanVien);
        $('#myModal').modal('hide');
        document.getElementById("formQLNV").reset();
    } 
    
};
//In đối tượng nhân viên ra table
function renDerDataNhanVien(arr = arrNhanVien) {
    let content = "";
    for (let i of arr) {
        let newNhanVien = new NhanVien();
        Object.assign(newNhanVien, i);
        let { tknv, name, email, datepicker, chucvu, gioLam } = newNhanVien
        const {luongCB} = newNhanVien;
        content += `
        <tr>
        <td>${tknv}</td>
        <td>${name}</td>
        <td>${email}</td>
        <td>${datepicker}</td>
        <td>${chucvu}</td>
        <td>${newNhanVien.tinhTongLuong(chucvu, luongCB )}</td>
        <td>${newNhanVien.xepLoaiNhanVien(gioLam )}</td>
        <td class="btn btn-danger opacity-75" onclick="deleteNhanVien('${email}')">Xóa</td>
        <td class="btn btn-danger opacity-75 " onclick="getInfoNhanVien('${email}')">Sửa</td>
        </tr>
        `;
    }
    document.getElementById("tableDanhSach").innerHTML = content;
}

//Local Storage

window.onload = function () {
    let dataLocal = getLocalStore("arr");
    if (dataLocal) {
        arrNhanVien = dataLocal;
        renDerDataNhanVien();
    }
};

function setLocalStore(key, value) {
    let dataString = JSON.stringify(value);
    localStorage.setItem(key, dataString);
}
function getLocalStore(key) {
    let dataLocal = localStorage.getItem(key);
    return dataLocal ? JSON.parse(dataLocal) : null;
}


//Lấy giá trị của Form
function getValueForm() {
    let flag = true;
    let nhanVien = new NhanVien();
    let arrField = document.querySelectorAll("#formQLNV input,#formQLNV select");
    for (let i of arrField) {
        let { id, value } = i;
        nhanVien[id] = value;
        let theThongBao = i.parentElement.nextElementSibling;
        let dataAccount = i.getAttribute("data-account");
        let dataName = i.getAttribute("data-name");
        let dataEmail = i.getAttribute("data-email");
        let dataPassword = i.getAttribute("data-password");
        let dataNgayLam = i.getAttribute("data-ngayLam");
        let dataLuong = i.getAttribute("data-luong");
        let dataChucVu = i.getAttribute("data-chucVu");
        let dataGioLam = i.getAttribute("data-gioLam");
        if(!checkEmtyValue(theThongBao,value)){
            flag = false;
        }else if(dataAccount=="account" && !checkAccount(theThongBao,value)){
            flag = false;
        }else if(dataName == "name" && !checkName(theThongBao,value)){
            flag = false;
        }else if(dataEmail == "email" && !checkEmail(theThongBao,value)){
            flag = false;
        }else if (dataPassword == "password" && !checkPassword(theThongBao, value)) {
            flag = false;
        } else if (dataNgayLam == "ngayLam" && !checkDate(theThongBao, value)) {
            flag = false;
        } else if (dataLuong == "luongCB" && !checkSalary(theThongBao,value)) {
            flag = false;
        } else if (dataGioLam == "gioLam" && !checkWorkingHours(theThongBao,value)) {
            flag = false;
        }
        if (dataChucVu == "chucVu" && !checkPosition(theThongBao,value)) {
            flag = false;
        }
    }
    return flag ? nhanVien : null
}

//Xóa Nhân viên
function deleteNhanVien(email) {
    let index = -1;
    for (let i in arrNhanVien) {
        if (arrNhanVien[i].email == email) {
            index = i;
            break;
        }
    }
    if (index != -1) {
        arrNhanVien.splice(index, 1);
        renDerDataNhanVien();
        setLocalStore("arr", arrNhanVien);
    }
}

//Get info Nhân viên
function getInfoNhanVien(email) {
    let arrField = document.querySelectorAll("#formQLNV input,#formQLNV select");
    let index = -1;
    for (let i in arrNhanVien) {
        if (arrNhanVien[i].email == email) {
            index = i;
            break;
        }
    }
    if (index != -1) {
        let nhanVien = arrNhanVien[index]
        for (let i of arrField) {
            i.value = nhanVien[i.id];
        }
        $('#myModal').modal('show');
    }
}
//Cập nhật Nhân viên

document.getElementById("btnCapNhat").onclick = function () {
    let nhanVien = getValueForm();
    let index = -1;
    let email = nhanVien.email;
    for (let i in arrNhanVien) {
        if (arrNhanVien[i].email == email) {
            index = i;
            break;
        }
    }
    if (index != -1) {
        arrNhanVien[index] = nhanVien;
        renDerDataNhanVien();
        setLocalStore("arr", arrNhanVien);
        
        $('#myModal').modal('hide');
    }  
}



