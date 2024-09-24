
function checkEmtyValue(theThongBao, value) {
    if (value == "") {
        theThongBao.innerHTML = "Vui lòng không được bỏ trống"
        return false;
    } else {
        theThongBao.innerHTML = ""
        return true
    }
}

function checkAccount(theThongBao, value) {
    let regex = /^[0-9]{4,6}$/
    if (!regex.test(value)) {
        theThongBao.innerHTML = "Tài khoản tối đa 4 - 6 ký số"
        return false
    } else {
        theThongBao.innerHTML = ""
        return true
    }
}
function checkName(theThongBao, value) {
    let regex = /^[A-Za-z\s]+$/;
    if (!regex.test(value)) {
        theThongBao.innerHTML = "Tên nhân viên phải là chữ"
        return false
    } else {
        theThongBao.innerHTML = ""
        return true
    }
}
function checkEmail(theThongBao, value) {
    let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!regex.test(value)) {
        theThongBao.innerHTML = "Email phải đúng định dạng"
        return false
    } else {
        theThongBao.innerHTML = ""
        return true
    }
}
function checkPassword(theThongBao, value) {
    let regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;
    if (!regex.test(value)) {
        theThongBao.innerHTML = "Mật khẩu từ 6-10 ký tự, chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt";
        return false;
    } else {
        theThongBao.innerHTML = "";
        return true;
    }
}

function checkDate(theThongBao, value) {
    let regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d{2}$/;
    if (!regex.test(value)) {
        theThongBao.innerHTML = "Ngày làm không đúng định dạng mm/dd/yyyy";
        return false;
    } else {
        theThongBao.innerHTML = "";
        return true;
    }
}

function checkSalary(theThongBao, value) {
    if (isNaN(value)) {
        theThongBao.innerHTML = "Vui lòng nhập số không được nhập chữ"
        return false;
    }
    if (value < 1000000 || value > 20000000) {
        theThongBao.innerHTML = "Lương cơ bản phải từ 1,000,000 đến 20,000,000";
        return false;
    } else {
        theThongBao.innerHTML = "";
        return true;
    }
}
function checkPosition(theThongBao, value) {
    if (value == "") {
        theThongBao.innerHTML = "Phải chọn chức vụ hợp lệ";
        return false;   
    }else{
        theThongBao.innerHTML=""
        return true;
    }
}
function checkWorkingHours(theThongBao, gioLam) {
    if (isNaN(gioLam)) {
        theThongBao.innerHTML = "Vui lòng nhập số không được nhập chữ";
        return false
    }
    if (gioLam< 80 || gioLam > 200) {
        theThongBao.innerHTML = "Số giờ làm phải từ 80 đến 200 giờ";
        return false;
    } else {
        theThongBao.innerHTML = "";
        return true;
    }
}

//Tìm kiếm nhân viên bằng oninput
 document.getElementById("searchName").oninput = function (event) {
    let keyword = event.target.value.trim().toLowerCase();
    let newKeyWord = removeVietnameseTones(keyword);
    let nhanVien = new NhanVien();

    let arrSearch = arrNhanVien.filter((items) => {
       
        Object.assign(nhanVien, items);

       let timKiemXepLoai = removeVietnameseTones(nhanVien.xepLoaiNhanVien(nhanVien.gioLam).trim().toLowerCase());

         return timKiemXepLoai.includes(newKeyWord);
     });
    renDerDataNhanVien(arrSearch);
 };

//Tìm kiếm nhân viên bằng onclick
// document.getElementById("btnTimNV").onclick = function () {
//     let arr = arrNhanVien
//     let keyword = document.getElementById("searchName").value.trim().toLowerCase();
//     let newKeyWord = removeVietnameseTones(keyword);
//     let arrKetQua =[];
//     for(let i of arr){
//         let newNhanVien = new NhanVien();
//         Object.assign(newNhanVien,i)
//         let timKiemXepLoaiNV = newNhanVien.xepLoaiNhanVien(newNhanVien.gioLam);
//         let newtimKiemXepLoaiNV = removeVietnameseTones(timKiemXepLoaiNV.trim().toLowerCase());
//             if(newtimKiemXepLoaiNV.includes(newKeyWord)){
//                 arrKetQua.push(newNhanVien);
//             }
//         }
//         renDerDataNhanVien(arrKetQua);  
//     }
    
    


