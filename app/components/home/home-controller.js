function HomeController() {
    var homeService = new HomeService()

    function drawHomes(homes) {
        var template = ''
        homes.forEach((home) => {
            template += `
                <div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="card">
                        <img class="card-img-top listing-image" src="${home.img}" alt="placeholder image">
                        <div class="card-block">
                            <h4>Description: ${home.description}</h4>
                            <h4>Sq ft: ${home.sqft}</h4>
                            <h4>Price: $${home.price}</h4>
                        </div>
                    </div>
                </div>
            `
        })
        document.getElementById('results').innerHTML = template
    }

    this.addHome = function(event){
        event.preventDefault()
        var form = event.target

        var home = {
            description: form.description.value,
            sqft: form.sqft.value,
            price: form['price-tag'].value,
            img: form.img.value
        }

        homeService.addHome(home)
        homeService.getHomes(drawHomes)
        form.reset()
    }

    homeService.getHomes(drawHomes)

}