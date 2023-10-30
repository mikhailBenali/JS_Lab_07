async function readData() {
    let response = await fetch("https://mikhailbenali.github.io/JSON_fetch_test_repo/LAB_07.json");
    let data = await response.json();
    console.log(data);
    document.getElementById("jsonContent").innerText = JSON.stringify(data);
}

readData();