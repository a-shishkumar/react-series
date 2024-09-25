function renderElement(reactElement,maincontainer){
    const domelement=document.createElement(reactElement.type)
    console.log(domelement)
    domelement.innerHTML=reactElement.children
    // domelement.setAttribute('href',reactElement.props.href)
    // domelement.setAttribute('target',reactElement.props.target)

    for(const i in reactElement.props){
        if(i==='children')continue;
        domelement.setAttribute(i,reactElement.props[i])
        console.log(i)
    }

    maincontainer.appendChild(domelement)
}
const reactElement={
    type:'a',
    props:{
        href:'https://www.google.com',
        target:'_blank',
    },
    children:"click me to visit google"
}
const maincontainer=document.querySelector("#root")
renderElement(reactElement,maincontainer);
