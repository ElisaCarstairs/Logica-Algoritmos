function generatePINs(digits, current, used, results) {
    if (current.length === 2) {
        results.push(current);
        return;
    }

    for (let i = 0; i < digits.length; i++) {
        if (used[i]) continue; // ya se usó este dígito

        used[i] = true; // marcar como usado
        generatePINs(digits, current + digits[i], used, results);
        used[i] = false; // desmarcar (backtrack)
    }
}

function findAllPINs(digits) {
    const results = [];
    const used = new Array(digits.length).fill(false);
    generatePINs(digits, '', used, results);
    return results;
}

console.log(findAllPINs(['1', '2', '3']));
