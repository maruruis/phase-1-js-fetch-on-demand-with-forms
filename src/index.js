const init = () => {
    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit', (e) => {
        e.preventDefault()
        console.log(e)
    const input = document.querySelector('input#searchByID')
    console.log(input.value)

    fetch(`http://localhost:3000/movies/${input.value}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const title = document.querySelector('section#movieDetails h4')
        const summary = document.querySelector('section#movieDetails p')
        title.innerText = data.title;
        summary.inmerText = data.summary;
    })
    })
  
}

document.addEventListener('DOMContentLoaded', init);