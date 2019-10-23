// 	1. Melakukan Loopoing menggunakan while
	var loop1 = 0
	var loop2 = 22

	// LOOP PERTAMA
	console.log(' LOOPING PERTAMA')
	while(loop1 <= 20){
		loop1 += 2
		console.log(`${loop1} - I love coding`)
	}

	// LOOP PERTAMA
	console.log(' LOOPING KEDUA')
	while(loop2 >= 0){
		loop2 -= 2
		console.log(`${loop2} - I will became fullstack developer`)
	}

//	2. Melakukan Looping Menggunakan for
	
	// LOOP PERTAMA
	console.log('  LOOPING PERTAMA') 
	for (var i = 1; i <= 20; i++) {
		console.log(`${i} - I love coding`)
	}

	// LOOP KEDUA
	console.log('  LOOPING KEDUA') 
	for (var i = 20; i >= 1; i--) {
		console.log(`${i} - I love coding`)
	}

//	3. Angka Ganjil dan Genap

	// Ganji - Genap
	for (var i = 1; i <= 100; i++) {
		if (i % 2 == 0) {
			console.log(`GENAP`)
		} else {
			console.log('GANJIL')
		}
	}

	// Pertambahan counter 2
	for (var i = 1; i <= 100; i+=2) {
		if (i % 3 == 0) {
			console.log(`${i} KELIPATAN 3`)
		} else {
			console.log('')
		}
	}

	// Pertambahan counter 5
	for (var i = 1; i <= 100; i+=5) {
		if (i % 6 == 0) {
			console.log(`${i} KELIPATAN 6`)
		} else {
			console.log('')
		}
	}

	// Pertambahan counter 9
	for (var i = 1; i <= 100; i+=9) {
		if (i % 10 == 0) {
			console.log(`${i} KELIPATAN 10`)
		} else {
			console.log('')
		}
	}