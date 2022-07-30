import { comment } from "./styles";

const verfAtr = (elem)=>{
    if (elem.includes("//"))
        elem = comment(elem.slice(2));
    return elem;
}

const markup = (dado) => {
    let vet  = dado.split(`<newline>`);
    for (let i = 0; i < vet.length; i++) {
        vet[i] = verfAtr(vet[i]);
    }
    return vet;
}
export {markup}