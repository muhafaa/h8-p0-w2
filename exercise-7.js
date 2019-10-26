//	1. Menyusun barisan bintang 
    var rows

    for (rows = 1; rows <= 5; rows++) {
        console.log('*')
    }

//	2. Menyusun barisan bintang dengan nested looping
    var rows
    var cols

    for (rows = 1; rows <= 5; rows++){
    for (cols = '*'; cols.length < 5; cols.length++){
        cols += '*'
    }
    console.log(cols)
    }

//	3. Menyusun barisan tangga bintang dengan nested looping
    var rows;

    for (rows = ''; rows.length < 5; rows.length++) {
        rows += '*'
        console.log(rows);
    }
