/** Bài tập 3
 * Khối 1: Input
 * num
 * 
 * Khối 2 : 
 * Cho i chạy từ 0 đến 10000
 * num++
 * i += num
 * 
 * Khối 3:
 * in ra số nguyên dương nhỏ nhất
 */

document.getElementById('btnTotal3').onclick = function () {
    var num = 0;
    for (var i = 0; i < 10000;) {
        num++;
        i += num;
    }
    document.getElementById('txtTotal3').innerHTML = 'Số nguyên dương nhỏ nhất: ' + num;
}

/** Bài tập 4
 * Khối 1: Input
 * x, n
 * luyThua
 * total
 * 
 * Khối 2:
 * Cho i chạy từ 1 đến n
 * luyThua = x ** i
 * total += luyThua
 * 
 * Khối 3: Output
 * tính tổng S(n) = x + x^2 + x^3 + … + x^n
 */

document.getElementById('btnTotal4').onclick = function () {
    var x = document.getElementById('inpNumberX4').value;
    var n = document.getElementById('inpNumberN4').value;
    var luyThua = 0;
    var total = 0;
    for (var i = 1; i <= n; i++) {
        luyThua = x ** i;
        total += luyThua;
    }

    document.getElementById('txtTotal4').innerHTML = total;
}



/** Bài tập 5
 * Khối 1: Input
 * n
 * giaiThua = 1
 * 
 * Khối 2:
 * Cho i chạy từ 1 đến n
 * giaiThua *= i
 * 
 * Khối 3: Output
 * tính 1*2*...*n
 */

document.getElementById('btnTotal5').onclick = function () {
    var n = document.getElementById('inpNumber5').value;
    var giaiThua = 1;
    for (var i = 1; i <= n; i++) {
        giaiThua *= i;
    }

    document.getElementById('txtTotal5').innerHTML = giaiThua;
}


/** Bài tập 6
 * Khối 1: Input
 * content
 * 
 * Khối 2:
 * Cho i chạy từ 1 đến n
 *      if i % 2 == 0 -> div chẵn
 *      else -> div lẻ
 * 
 * Khối 3: Output
 * xuất div chẵn lẻ
 */

document.getElementById('btnTotal6').onclick = function () {
    var content = '';
    for (var i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            content += "<div style='background-color: red; color:white;margin-bottom:0;'>Div chẵn</div>";
        } else {
            content += "<div style='background-color: blue; color:white;margin-bottom:0;'>Div lẻ</div>";
        }
    }
    document.getElementById('txtTotal6').innerHTML = content;
}




/** Bài tập 7
 * Khối 1: Input
 * n
 * soNguyenTo
 * count
 * 
 * Khối 2:
 * + Nếu n<2 => Không có số nguyên tố
 * + Nếu n>=2 :
 * Cho i chạy 2 -> n 
 * kiểm tra từng giá trị i :
 * - Cho j chạy từ 2 đến sqrt(i) 
 * - Nếu i%j = 0 => count++
 * - Nếu count = 0 => số i là số nguyên tố => ketQua += " " + i;
 * - Xét lại count =0;
 * 
 * Khối 3: Output
 * xuất ra các số nguyên tố
 */

document.getElementById('btnTotal7').onclick = function () {
    var n = document.getElementById('inpNumber7').value;
    var soNguyenTo = '';
    var count = 0;
    if (n < 2) {
        soNguyenTo = "";
    } else {
        for (var i = 2; i <= n; i++) {
            for (var j = 2; j <= Math.sqrt(i); j++) {
                if (i % j == 0) {
                    count++;
                }
            }
            if (count == 0) {
                soNguyenTo += " " + i;
            }
            count = 0;
        }
    }
    document.getElementById("txtTotal7").innerHTML = "Số nguyên tố là: " + soNguyenTo;
}