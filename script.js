var pageWidth, marginLeft, marginRight, colNumber, gutter;
form = document.getElementById("gridForm");
gridForm.addEventListener("submit", function(e){
    pageWidth = parseInt(document.getElementById("pageWidth").value);
    marginLeft = parseInt(document.getElementById("marginLeft").value);
    marginRight = parseInt(document.getElementById("marginRight").value);
    colNumber = parseInt(document.getElementById("colNumber").value);
    gutter = parseInt(document.getElementById("gutter").value);
    calculate();
    document.getElementById("resultsBlock").classList.add("active");
    e.preventDefault();
});

function calculate(){
    var contentWidth = pageWidth - (marginLeft + marginRight);
    document.getElementById("widthResult").innerHTML = contentWidth.toString() + "px";
    var colWidth = (contentWidth - (colNumber - 1) * gutter)/colNumber;
    document.getElementById("colResult").innerHTML = Math.floor(colWidth).toString() + "px";
}

