//1번
const t1 = (month) => {
    var x = (month + 2) / 3
    return parseInt(x);
}

console.log(t1(1) + "분기");
console.log(t1(2) + "분기");
console.log(t1(3) + "분기");
console.log(t1(4) + "분기");
console.log(t1(5) + "분기");
console.log(t1(6) + "분기");
console.log(t1(7) + "분기");
console.log(t1(8) + "분기");
console.log(t1(9) + "분기");
console.log(t1(10) + "분기");
console.log(t1(11) + "분기");
console.log(t1(12) + "분기");


//2번
const t2 = (ids) => {
    var cnt = 0
    while (true) {
        if (!ids.includes(cnt)) return cnt;
        cnt++;
        if (cnt==ids.length) break;
    }
    return cnt;
}

console.log(t2([0, 1, 2, 4, 5, 6, 7, 8, 9]));


//3번 
    const t3 = (games) => {
        let score = 0;
        for (let value of games) {
            if (value[0] > value[2]) score += 3;
            else if (value[0] < value[2]) score++;
        }
        return score;
    }

console.log(t3(["1:1", "1:3", "3:1"]));


//4번
const fruits = {
    1: "kiwi",
    2: "pear",
    3: "kiwi",
    4: "banana",
    5: "melon",
    6: "banana",
    7: "melon",
    8: "pineapple",
    9: "apple",
    10: "pineapple",
    11: "cucumber",
    12: "pineapple",
    13: "cucumber",
    14: "orange",
    15: "grape",
    16: "orange",
    17: "grape",
    18: "apple",
    19: "grape",
    20: "cherry",
    21: "pear",
    22: "cherry",
    23: "pear",
    24: "kiwi",
    25: "banana",
    26: "kiwi",
    27: "apple",
    28: "melon",
    29: "banana",
    30: "melon",
    31: "pineapple",
    32: "melon",
    33: "pineapple",
    34: "cucumber",
    35: "orange",
    36: "apple",
    37: "orange",
    38: "grape",
    39: "orange",
    40: "grape",
    41: "cherry",
    42: "pear",
    43: "cherry",
    44: "pear",
    45: "apple",
    46: "pear",
    47: "kiwi",
    48: "banana",
    49: "kiwi",
    50: "banana",
    51: "melon",
    52: "pineapple",
    53: "melon",
    54: "apple",
    55: "cucumber",
    56: "pineapple",
    57: "cucumber",
    58: "orange",
    59: "cucumber",
    60: "orange",
    61: "grape",
    62: "cherry",
    63: "apple",
    64: "cherry",
    65: "pear",
    66: "cherry",
    67: "pear",
    68: "kiwi",
    69: "pear",
    70: "kiwi",
    71: "banana",
    72: "apple",
    73: "banana",
    74: "melon",
    75: "pineapple",
    76: "melon",
    77: "pineapple",
    78: "cucumber",
    79: "pineapple",
    80: "cucumber",
    81: "apple",
    82: "grape",
    83: "orange",
    84: "grape",
    85: "cherry",
    86: "grape",
    87: "cherry",
    88: "pear",
    89: "cherry",
    90: "apple",
    91: "kiwi",
    92: "banana",
    93: "kiwi",
    94: "banana",
    95: "melon",
    96: "banana",
    97: "melon",
    98: "pineapple",
    99: "apple",
    100: "pineappl"
};


const t4 = (n) => {
    let num = n;
    n = String(n);
    while (true) {
        for (let i = 0; i < n.length; i++) num -= parseInt(n[i]);
        n = String(num);
        if (num <= 100) {
            return fruits[num];
        }
    }
}

console.log(t4(3402));


// 선택 1번
const t5 = (str) => {
    let count = 0
    const vowels = ["a", "e", "i", "o", "u"]
    for (let i of str)
        if (vowels.includes(i)) count++;
    return count;
}

console.log(t5("abracadabra"));


// 선택 2번
const t6 = (sample) => {
    return sample.sort(function (a, b) {
        return a - b;
    })[1];
}

console.log(t6([999, 865, 5335]));


// 선택 3번
const t7 = (arr) => {
    let answer = Array();
    for (let i of arr) if (i.length == 4) answer.push(i);
    return answer;
}

console.log(t7(["Ryan", "Kieran", "Mark"]));


//선택 4번
const t8 = (nums) => {
    let num = nums.split(" ");
    for(let i in num) num[i] %= 2;
    return num.filter(e => 1 === e).length == 1 ? num.findIndex(v => v === 1)+1 : num.findIndex(v => v === 0)+1 
}

console.log(t8("2 4 7 8 10"));
console.log(t8("1 2 1 1"));