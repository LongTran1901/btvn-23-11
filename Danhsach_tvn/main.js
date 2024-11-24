function danhSach(){
    const thanhVien = [
        { hoTen: "Trần Minh Long", gioiTinh: "Nam", noiSinh: "Nam Định" },
        { hoTen: "Nguyễn Nam Khánh", gioiTinh: "Nam", noiSinh: "Hà Nội" },
        { hoTen: "Nguyễn Việt Dương", gioiTinh: "Nam", noiSinh: "Hà Nội" },
        { hoTen: "Trần Đình Hưng Thịnh", gioiTinh: "Nam", noiSinh: "Nghệ An" },
        { hoTen: "Nguyễn Quang Huy", gioiTinh: "Nam", noiSinh: "Hà Nội" },
        { hoTen: "Nguyễn Công Mạnh", gioiTinh: "Nam", noiSinh: "Hà Tĩnh" },
        { hoTen: "Đào Thế Vũ", gioiTinh: "Nam", noiSinh: "Bắc Ninh" },
    ];

    const table = document.getElementById('danhSach');

    table.innerHTML = `
    <tr>
        <th>Họ Tên</th>
        <th>Giới Tính</th>
        <th>Nơi Sinh</th>
    </tr>
`;

// Thêm dữ liệu thành viên vào bảng
    for (const tv of thanhVien) {
        const row = `
        <tr>
            <td>${tv.hoTen}</td>
            <td>${tv.gioiTinh}</td>
            <td>${tv.noiSinh}</td>
        </tr>
    `;
        table.innerHTML += row;
    }
}