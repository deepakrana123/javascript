function $(selector){
    const self={
        element:document.querySelector(selector),
        html:()=>self.element,
        on:(event,callBack)=>{
            document.addEventListener(event,callBack)   
        },
        hide:()=>{
            self.element.style.display="none"
        },
        attr:(name,value)=>{
            if(value==null){
                self.element.getAttribute(name)
            }
            else{
                self.element.setAttribute(name,value)
            }
        }
    }
    return self
}


$('h1').attr('class','hello devendra')