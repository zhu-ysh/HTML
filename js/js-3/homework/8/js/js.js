function Login() {
    var n = document.getElementById("name").value;
    var d = document.getElementById("dept").value;
    // var p = parent.top1.window.document.getElementById("sp");
    var p = window.parent.frames["top1"].document.getElementById("sp");
    p.innerText= n+","+d;
}