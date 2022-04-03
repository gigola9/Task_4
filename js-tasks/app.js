function task1(text) {
    document.write("<p><i><b><u>" + text + "</u></b></i></p>");
    document.write(`<hr>`);
}
task1("Some random text");

function task3(text, size) {
    document.write(`<p style="font-size: ${size}px;">${text}</p>`);
    document.write(`<hr>`);
}
task3("text text text", 30);

function task4(width, height) {
    document.write(`    
    <table style="width: ${width}px; height: ${height}px;">
        <tr>
        <td>1</td>
        <td>2</td>
        </tr>
        <tr>
        <td>3</td>
        <td>4</td>
        </tr>
    </table>`);
    document.write(`<hr>`);
}
task4(200, 200);

function task12(n) {
    for(let i = 1; i <= n; i++) {
        document.write(`<p>${i}</p>`);
    }
    document.write(`<hr>`);
}
task12(15);

function task14(m, n) {
    if (n > m) {
        for(let i = m; i <= n; i++) {
            document.write(`<p>${i}</p>`);
        }
    } else {
        for(let i = m; i >= n; i--) {
            document.write(`<p>${i}</p>`);
        }
    }
    document.write(`<hr>`);
}
task14(17, 15);