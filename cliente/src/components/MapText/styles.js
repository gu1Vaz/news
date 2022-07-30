
export const comment = (dado) =>{
    let div = document.createElement("div");
    dado = dado.split(".");
    dado.pop();
    dado.forEach(d => {
        div.append(d+".\n");
    });

    div.style.background = "#f1f2f3";
    div.style.padding = "1.4%";
    div.style.whiteSpace = "pre-wrap"
    div.style.marginBottom = "1%";
    return div.outerHTML;
} 