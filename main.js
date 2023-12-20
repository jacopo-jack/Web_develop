/* creo una classe che estenda un elemento( qui header) html 
e tra le graffe incollo l'html che voglio estendere
ATTENZIONE! TUTTO IN UNA FUNZIONE CALLBACK PER NON GENERARE PROBLEMI
METODO DA USATE THIS.INNERELEMENT*/
class MyHeader extends HTMLElement  {
    connectedCallback(){
       this.innerHTML = 
        '<header><a href="index.html"><img src="#" alt="home"></img></a><nav><ul><li><a href="index.html">Home</a></li></ul><ul><li><a href="about.html">About</a></li></ul><ul><li><a href="contact.html">Contact</a></li></ul></nav></header>'
    
    }
    
}
//creo due classi per gli articoli
class MyArticle1 extends HTMLElement{
    connectedCallback(){
    this.innerHTML = '<article>'+
                             '<h1>Esempio di my-article</h1>'+
                      '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>'
                      '</article>'  



    }
}
class MyArticle2 extends HTMLElement{
    connectedCallback(){
        this.innerHTML = '<article>'+
    '<h1>Altro esempio di my-article</h1>'+
    '<p>Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Nulla posuere sollicitudin aliquam ultrices sagittis orci a. Pretium aenean pharetra magna ac placerat vestibulum lectus. Scelerisque in dictum non consectetur a erat nam. Molestie ac feugiat sed lectus vestibulum mattis. Feugiat in fermentum posuere urna nec tincidunt praesent. Nec feugiat in fermentum posuere urna nec. Nec nam aliquam sem et tortor. Et tortor at risus viverra. Velit egestas dui id ornare arcu odio ut sem nulla. Et odio pellentesque diam volutpat. Tristique senectus et netus et malesuada fames ac. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Iaculis eu non diam phasellus vestibulum. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Vitae justo eget magna fermentum iaculis. Sed augue lacus viverra vitae. Purus ut faucibus pulvinar elementum integer. Cursus risus at ultrices mi tempus imperdiet nulla. Egestas diam in arcu cursus euismod quis.</p>'
    '</article>'    
}
    
}

// poi lo definisco col metodo customElements
customElements.define('my-header',MyHeader)
customElements.define('my-article1',MyArticle1)
customElements.define('my-article2',MyArticle2

// per altre funzionalità del sito
function taglist(){
    const list = document.querySelector("#common_tags);
    const display = document.querySelector("#Inner_element");
    list.style.display = "block";
    display.style.display = "block";
}
    
        


             
