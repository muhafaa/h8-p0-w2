var tanggal = Math.round(Math.random() * 31)    // 1-31
var bulan   = Math.round(Math.random() * 13)    // 1-12 *13 = biar default tampil
var tahun   = Math.round((Math.random() * 300) + 1900)  // 1900-2200

switch (bulan) {
    case 1:
        console.log(`Date : ${tanggal} Januari ${tahun}`);
        break;
    case 2:
        console.log(`Date : ${tanggal} Februari ${tahun}`);
        break;
    case 3:
        console.log(`Date : ${tanggal} Maret ${tahun}`);
        break;
    case 4:
        console.log(`Date : ${tanggal} April ${tahun}`);
        break;
    case 5:
        console.log(`Date : ${tanggal} Mei ${tahun}`);
        break;
    case 6:
        console.log(`Date : ${tanggal} Juni ${tahun}`);
        break;
    case 7:
        console.log(`Date : ${tanggal} Juli ${tahun}`);
        break;
    case 8:
        console.log(`Date : ${tanggal} Agustus ${tahun}`);
        break;
    case 9:
        console.log(`Date : ${tanggal} September ${tahun}`);
        break;
    case 10:
        console.log(`Date : ${tanggal} Oktober ${tahun}`);
        break;
    case 11:
        console.log(`Date : ${tanggal} November ${tahun}`);
        break;
    case 12:
        console.log(`Date : ${tanggal} Desember ${tahun}`);
        break;
    default:
        console.log('Date value is out of range');
        break;
}
