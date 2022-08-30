const loadData = async(id) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${id}`;
    const res = await fetch(url)
    const data = await res.json()
    displayData(data.data)
}
// display data on the UI
const displayData = (phones) => {
    console.log(phones);

    // show more button implement

    const btnAll = document.getElementById('btn-show-more');
    if(phones.length > 12){
        phones = phones.slice(0,12);
        btnAll.classList.remove('d-none')
    }else{
        btnAll.classList.add('d-none')
    }
    // wnaring messege displaying 
    const warningText = document.getElementById('warning');
    if(phones.length === 0){
        warningText.classList.remove('d-none')
    }else{
        warningText.classList.add('d-none');
    }

    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';
    phones.forEach(phone => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.</p>
                <button onclick="showMoreData()" href="#" class="btn btn-primary">Go somewhere</button>
        </div>
    </div>
    `;
    phoneContainer.appendChild(div);
    })
    loading(false)
}
// search button
document.getElementById('search-button').addEventListener('click', () => {
    loading(true)
    const searchfield = document.getElementById('search-field');
    const searchInput = searchfield.value;
    loadData(searchInput);
})

const loading = (isLoading) => {
    const loader = document.getElementById('loading');
    if(isLoading){
        loader.classList.remove('d-none');
    }else{
        loader.classList.add('d-none');
    }
}
