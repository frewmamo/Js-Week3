function outerFunction() {
    let pii = "Frew M";
    console.log(pii)
    function innerFunction() {
        var pii = {ssn: 555-55-5555};
    }
}
outerFunction();