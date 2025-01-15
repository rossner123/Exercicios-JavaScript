let list1 = document.getElementById("list1")
let list2 = document.getElementById("list2")
let listas = document.querySelectorAll(".list")

listas.forEach((lista) => {
    Array.from(lista.children).forEach((item) => {
        item.addEventListener("click", () => {
            if(item.parentElement === list1){
                list2.appendChild(item)
            }
            else{
                list1.appendChild(item)
            }
        })
    })
})
