function addmyValue() {
    var data = document.getElementById("username").value;
    localStorage.setItem("uname", data);
    var localstoragedata=  localStorage.getItem("uname");
    localStorage.removeItem("uname");
}