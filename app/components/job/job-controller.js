function JobController() {
    var jobService = new JobService()

    function drawJobs(jobs) {
        var template = ''
        jobs.forEach((job) => {
            template += `
                <div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="card">
                        <img class="card-img-top listing-image" src="${job.img}" alt="placeholder image">
                        <div class="card-block">
                            <h4>Job Title: ${job.title}</h4>
                            <h4>Description: ${job.description}</h4>
                            <h4>Salary: $${job.price}</h4>
                        </div>
                    </div>
                </div>          
            `
        })
        //debugger
        document.getElementById('results').innerHTML = template
    }

    this.addJob = function(event){
        event.preventDefault()
        var form = event.target

        var job = {
            title: form.title.value,
            description: form.description.value,
            price: form['price-tag'].value,
            img: form.img.value
        }

        jobService.addJob(job)
        jobService.getJobs(drawJobs)
        form.reset()
    }
    jobService.getJobs(drawJobs)

}