function copyAddress() {
    const addressText = document.getElementById("contractAddress").textContent;
    navigator.clipboard.writeText(addressText)
        .then(() => {
            alert("Address copier avec succes!");
        })
        .catch(err => {
            console.error("Erreur de copie: ", err);
        });
}