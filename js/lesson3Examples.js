const examples = () => {
  // includes

  let sentence = 'The quick brown fox jumps over the lazy dog.';
  const word = 'fox';

  if (word) console.log(word)

  console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
  // Expected output: "The word "fox" is in the sentence"

  //IndexOf

  const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

  const searchTerm = 'dog';
  const indexOfFirst = paragraph.indexOf(searchTerm);

  console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);
  // Expected output: "The index of the first "dog" from the beginning is 40"

  console.log(`The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);
  // Expected output: "The index of the 2nd "dog" is 52"

  //repeat


  const mood = 'Happy! ';

  console.log(`I feel ${mood.repeat(3)}`);
  // Expected output: "I feel Happy! Happy! Happy! "


  //slice возвращает строку без модивикации ооригинала


  let str = 'The quick brown fox jumps over the lazy dog.';

  console.log(str.slice(31));
  // Expected output: "the lazy dog."

  console.log(str.slice(4, 19));
  // Expected output: "quick brown fox"

  console.log(str.slice(-4));
  // Expected output: "dog."

  console.log(str.slice(-9, -5));
  // Expected output: "lazy"

  //split


  str = 'The quick brown fox jumps over the lazy dog.';

  const words = str.split(' ');
  console.log(words[3]);
  // Expected output: "fox"

  const chars = str.split('');
  console.log(chars[8]);
  // Expected output: "k"

  const strCopy = str.split();
  console.log(strCopy);
  // Expected output: Array ["The quick brown fox jumps over the lazy dog."]


  // !!!!!!!!!
  sentence = 'Mastering JS is a very helpful website';
  sentence.slice(-7); // 'website'
  sentence.substring(-5, 12); // 'Mastering JS'
  sentence.slice(0, -26); // 'Mastering JS'
  sentence.substring(12, 0); // 'Mastering JS'
  sentence.slice(12, 0); // ''
  sentence.slice(0, 12); // 'Mastering JS'


  /*
  What they have in common: (slice vs substring)

If start equals stop: returns an empty string
If stop is omitted: extracts characters to the end of the string
If either argument is greater than the string's length, the string's length will be used instead.
Distinctions of substring():

If start > stop, then substring will swap those 2 arguments.
If either argument is negative or is NaN, it is treated as if it were 0.
Distinctions of slice():

If start > stop, slice() will return the empty string. ("")
If start is negative: sets char from the end of string, exactly like substr() in Firefox. This behavior is observed in both Firefox and IE.
If stop is negative: sets stop to: string.length – Math.abs(stop) (original value), except bounded at 0 (thus, Math.max(0, string.length + stop)) as covered in the ECMA specification.
  */


  /*
  substr() Vs. substring()
  The difference is in the second argument. The second argument to substring is the index to stop at (but not include),
  but the second argument to substr is the maximum length to return.
  Moreover, substr() accepts a negative starting position as an offset from the end of the string. substring() does not.
  */
}
