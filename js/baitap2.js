/** Bài tập 2
 * Khối 1: Input
 * Đếm có bao nhiêu số / hết cho 3 - 0->1000
 * 
 * Khối 2:
 * Cho i chạy từ 0 đến 1000
 * num % 3 == 0
 * 
 * Khối 3: Output
 * in ra tất cả các số chia hết cho 3
 */

// Kiểu While
document.getElementById('btnTotal2While').onclick = function () {
    var dem = 0;
    var i = 0;
    while (i < 1000) {
        if (i % 3 == 0) {
            dem++;
        }
        i++;
    }
    document.getElementById("txtTotal2While").innerHTML = "Có " + dem + " Số chia hết cho 3";
}

// Kiểu For
document.getElementById('btnTotal2For').onclick = function () {
    var dem = 0;
    for (var i = 0; i < 1000; i++) {
        if (i % 3 == 0) {
            dem++;
        }
    }
    document.getElementById("txtTotal2For").innerHTML = "Có " + dem + " Số chia hết cho 3";
}