let ref_section = document.getElementById('ref')
let ref_btn = document.getElementById('ref_btn')

ref_btn?.addEventListener('click', ()=>{
    ref_section!.classList.toggle('hide')
})


//**print section */

let print_btn = document.getElementById('print_btn')

print_btn?.addEventListener('click', ()=>{
    window.print()
})