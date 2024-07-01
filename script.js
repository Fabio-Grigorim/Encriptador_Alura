function encryptText() {
    const inputText = document.getElementById("inputText").value;
    const encryptedText = encrypt(inputText);
    document.getElementById("result").innerText = encryptedText;
}

function decryptText() {
    const inputText = document.getElementById("inputText").value;
    const decryptedText = decrypt(inputText);
    document.getElementById("result").innerText = decryptedText;
}

function encrypt(text) {
    return text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function decrypt(text) {
    return text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}        

function copyToClipboard() {
    const resultText = document.getElementById("result").innerText;
        navigator.clipboard.writeText(resultText).then(() => {
        alert("Texto copiado para a área de transferência!");
        }).catch(err => {
        console.error("Erro ao copiar o texto: ", err);
        });
}
