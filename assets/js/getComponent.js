export async function setHTML(source) {
    if(document.getElementById(source)){
        let response = await fetch(`/components/partials/_${source}.html`);
        document.getElementById(source).outerHTML = await response.text();
        import (`/assets/js/components/${source}.js`);
    }
}

export async function getHTML(source) {
    let response = await fetch(`/components/_${source}.html`);
    let data = await response.text();

    return data;
}

export default setHTML;