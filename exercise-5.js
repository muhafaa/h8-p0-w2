/* 1. Let's Form a Sentence

    var word = 'JavaScript';
    var second = 'is';
    var third = 'awesome';
    var fourth = 'and';
    var fifth = 'I';
    var sixth = 'love';
    var seventh = 'it!';

    console.log(word,' '+second,' '+third,' '+fourth,' '+fifth,' '+sixth,' '+seventh);


 2. Index Accessing-1 by 1
    var word = 'God i love Javascript programming';
    var firstWord   = word[0] + word[1] + word[2];
    var secondWord  = word[4]; 
    var thirdWord   = word[6] + word[7] + word[8] + word[9]; 
    var fourthWord  = word[11] + word [12] + word[13] + word[14] + word[15] +
                    word[16] + word[17] + word[18] + word[19] +word[20];
    var fifthWord   = word[21] + word[22] + word[23] + word[24] + word[25] +
                    word[26] + word[27] + word[28] + word[29] + word[30] + 
                    word[31] + word[32]; 

    console.log('First Word: ' + firstWord);
    console.log('Second Word: ' + secondWord);
    console.log('Third Word: ' + thirdWord);
    console.log('Fourth Word: ' + fourthWord);
    console.log('Fifth Word: ' + fifthWord);

 3. Breaking Sentence Using Substring
    var word = 'wow JavaScript is so cool';
    var firstWord = word.substring(0, 3);
    var secondWord = word.substring(4, 14); 
    var thirdWord = word.substring(15, 17); 
    var fourthWord = word.substring(18, 20); 
    var fifthWord = word.substring(21); 

    console.log('First Word: ' + firstWord);
    console.log('Second Word: ' + secondWord);
    console.log('Third Word: ' + thirdWord);
    console.log('Fourth Word: ' + fourthWord);
    console.log('Fifth Word: ' + fifthWord);

 4. Breaking Sentence and Count Each Lenght
    var word = 'wow JavaScript is so cool';
    var firstWord = word.substring(0, 3);
    var secondWord = word.substring(4, 14); 
    var thirdWord = word.substring(15, 17); 
    var fourthWord = word.substring(18, 20); 
    var fifthWord = word.substring(21); 

    var firstWordLength = firstWord.length;
    var secondWordLength = secondWord.length;
    var thirdWordLength = thirdWord.length;
    var fourthWordLength = fourthWord.length
    var fifthWordLength = fifthWord.length

    console.log('First Word: ' + firstWord + ', with length: ' + firstWordLength);
    console.log('Second Word: ' + secondWord + ', with length: ' + secondWordLength);
    console.log('Third Word: ' + thirdWord + ', with length: ' + thirdWordLength);
    console.log('Fourth Word: ' + fourthWord + ', with length: ' + fourthWordLength);
    console.log('Fifth Word: ' + fifthWord + ', with length: ' + fifthWordLength);
    */