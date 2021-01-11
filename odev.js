window.mockApiUrl = "https://5ff3c4b916cf4f0017c1f65f.mockapi.io/pets/";

window.removePet = (id) => {

    return fetch(`${window.mockApiUrl}${id}`, {
        method: 'delete',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    })
        .then(() => {
            (window.location.reload(true))
        })
}

window.openPetDetail = (id) => {
    fetch(`${window.mockApiUrl}${id}`)
        .then((resp) => resp.json())
        .then((data) =>{
            const addingHTML = `<div class="modal fade" id="exampleModal${data.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Data Specifications</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <b> Data Name:</b>  <br> ${data.name} <br>
                    <b> Data Image:</b> <br> ${data.image} <br>
                    <b> Data Description:</b> <br> ${data.description}
                  </div>    
                </div>
              </div>
            </div>`;
            document.querySelector("body").innerHTML += addingHTML;
        })
    .then(() => {
        $(`#exampleModal${id}`).modal("show");
    })

}
