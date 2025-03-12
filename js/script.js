$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    data: {
        results: 8,
        nat: "es",
        seed: "foo"
    },
    success: function(dataResult) {
        console.log(dataResult);
        let users = dataResult.results;
        
        $.each(users, function(i, user){
            const card = `
                        <div class="col d-flex justify-content-center">
                            <div class="card w-100 h-100 user-card shadow align-items-center p-2">
                                <img src="${user.picture.large}" 
                                    class="card-img-top user-img rounded-circle p-3"
                                    alt="${user.name.first}">
                                <div class="card-body text-center">
                                    <h5 class="card-title">${user.name.first} ${user.name.last}</h5>
                                    <p class="text-muted">${user.location.city}</p>
                                    <div class="small">
                                        <a href="#" class="d-block">${user.email}</a>
                                        <span class="d-block">${user.phone}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
            `;

            // Por cada usuario se genera un card que iremos insertando dentro de un elemento del HTML 
            $("#users-container").append(card);
        });
    },
    error: function(xhr, status, error) {
        console.log("Error al obtener los usuarios: " + status);
    }
});