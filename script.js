function transcribe() {
    var inputDNA = document.getElementById("inputDNA").value.toUpperCase();
    var displayDNA = document.getElementById("displayDNA");
    var displayNonsenseDNA = document.getElementById("displayNonsenseDNA");
    var displaymRNA = document.getElementById("displaymRNA");

    // Transcribe DNA to DNA Nonsense
    var nonsenseDNA = inputDNA.replace(/A|T|G|C/g, function(match) {
        switch (match) {
            case 'A':
                return 'T';
            case 'T':
                return 'A';
            case 'G':
                return 'C';
            case 'C':
                return 'G';
            default:
                return match;
        }
    });

    // Transcribe DNA to mRNA
    var mRNA = inputDNA.replace(/A|T|G|C/g, function(match) {
        switch (match) {
            case 'A':
                return 'U';
            case 'T':
                return 'A';
            case 'G':
                return 'C';
            case 'C':
                return 'G';
            default:
                return match;
        }
    });

    displayDNA.textContent = inputDNA;
    displayNonsenseDNA.textContent = nonsenseDNA;
    displaymRNA.textContent = mRNA;
}
