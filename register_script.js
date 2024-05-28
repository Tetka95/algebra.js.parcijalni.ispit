function genLozinku () {
    let lozinka = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz0123456789@#$';

    for (let i = 1; i <=10; i++) {
        let char = Math.floor(Math.random() * str.length + 1);
        lozinka += str.charAt(char)
    }
    return lozinka;
}

function ispisLozinke () {

}