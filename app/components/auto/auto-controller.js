function AutoController() {
    var autoService = new AutoService()

    function drawAutos(autos) {
        var template = ''
        autos.forEach((auto) => {
            template += `
                <div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="card">
                        <img class="card-img-top listing-image" src="${auto.img}" alt="placeholder image">
                        <div class="card-block">
                            <h4>Description: ${auto.description}</h4>
                            <h4>Year: ${auto.year}</h4>
                            <h4>Price: $${auto.price}</h4>
                        </div>
                    </div>
                </div>    
            `
        })
        document.getElementById('results').innerHTML = template
    }

    this.addAuto = function (event) {
        event.preventDefault()
        var form = event.target

        var auto = {
            description: form.description.value,
            year: form.year.value,
            price: form['price-tag'].value,
            img: form.img.value
        }

        autoService.addAuto(auto)
        autoService.getAutos(drawAutos)
        form.reset()
    }

    autoService.getAutos(drawAutos)

}