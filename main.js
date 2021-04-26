const num_to_str = {
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine', 
    0: 'Zero'
};

// Initialize response variable
let res = '';

// Iterate over the each argument passed through argv
for (let i = 2; i < process.argv.length; i++) {
    // Reset work variables each iteration
    let num_as_string = '';
    let curr_num = parseInt(process.argv[i]);
    let remainder = 0;

    do {
        // Work backwards through each provided integer
        remainder = curr_num % 10;
        curr_num = Math.floor(curr_num / 10);

        // Generate phonetic equivalent of integer
        num_as_string = num_to_str[remainder] + num_as_string;
    } while (curr_num > 0)

    // Add it to response variable
    res += num_as_string + ', ';
}

// Print response to stdout while removing trailing ', ' 
console.log(res.slice(0, -2));