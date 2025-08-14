console.log("Anagram Finder");

function findAnagrams(dictionary) {
    let anagrams: any = [];
    const seen = new Set();

    for (let i = 0; i < dictionary.length; i++) {
        if (seen.has(dictionary[i])) {
            continue;
        }
        seen.add(dictionary[i]);
        const currentAnagramGroup = [dictionary[i]];
        for (let j = i + 1; j < dictionary.length; j++) {
            if (dictionary[i] === dictionary[j]) {
                continue;
            }
            if (dictionary[i].split("").sort().join("") === dictionary[j].split("").sort().join("")) {
                currentAnagramGroup.push(dictionary[j]);
                seen.add(dictionary[j]);
            }
        }
        if (currentAnagramGroup.length > 1) {
            anagrams.push(...currentAnagramGroup);
        }
    }

    return anagrams;
}
function sortDictionary(dictionary) {
    dictionary.sort();
}

console.log(findAnagrams(["Enlist", "google", "inlets", "elgoog"])); // ["enlist", "inlets"]