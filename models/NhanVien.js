class NhanVien{
    tknv="";
    name="";
    email="";
    password="";
    datepicker="";
    luongCB= "";
    chucvu="";
    gioLam= "";

    tinhTongLuong = function(chucVu,luongCoBan){
        let tongLuong = 0;
        if(chucVu == "Sếp"){
            tongLuong = luongCoBan * 3;
        }else if(chucVu == "Trưởng phòng"){
            tongLuong = luongCoBan * 2;
        }else if(chucVu == "Nhân viên"){
            tongLuong = luongCoBan;
        }
        return tongLuong.toLocaleString('vi', {style : 'currency', currency : 'VND'});;
    }
    xepLoaiNhanVien = function(time){
        if(time >= 192){
            return "Nhân viên Xuất sắc"
        }else if(time>=176 && time < 192){
            return "Nhân viên giỏi"
        }else if(time >= 160 && time < 176){
            return "Nhân viên khá"
        }else if(time < 160){
            return "Nhân viên trung bình"
        }
    }
}