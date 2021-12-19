/** Bài tập 1
 * Khối 1 : Input
 * soLe
 * soChan
 * 
 * Khối 2 :
 * Cho i chạy từ 0 đến 100
 * % 2 == 0 => số chẵn
 * % 2 != 0 => số lẽ 
 * 
 * Khối 3: Output
 * output : in tất cả số chẳng và lẻ < 100
 */

// Kiểu While
document.getElementById('btnTotal1While').onclick = function () {
    var soChan = '';
    var soLe = '';
    var count = 1;
    while (count < 100) {
        if (count % 2 == 0) {
            soChan += ' ' + count;
        } else {
            soLe += ' ' + count;
        }
        count++;
    }
    document.getElementById('txtTotal1While').innerHTML = "Số chẵn là: " + soChan + "<br>" + "Số lẻ là: " + soLe;
}

// Kiểu For
document.getElementById('btnTotal1For').onclick = function () {
    var soChan = '';
    var soLe = '';
    for (var i = 1; i < 100; i++) {
        if (i % 2 == 0) {
            soChan += ' ' + i;
        } else {
            soLe += ' ' + i;
        }
    }

    document.getElementById('txtTotal1For').innerHTML = "Số chẵn là: " + soChan + "<br>" + "Số lẻ là: " + soLe;
}