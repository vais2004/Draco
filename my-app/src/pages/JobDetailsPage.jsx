import Header from "../components/Header"

const JobDetailsPage=()=>{
    return(
        <>
        <Header/>
        <main className="container my-3">
            <h1>{detail.jobTitle}</h1>
        <div className="row">
            <div key={detail._id} className="col-md-12 ">
              <div className="card ">
                <div className="card-body">

                  <p className="card-text">
                    <strong>Company name:</strong> {detail.companyDetails.companyName}
                  </p>
                  <p className="card-text">
                    <strong>Location:</strong> {detail.companyDetails.location}
                  </p>
                  <p className="card-text">
                    <strong>Salary:</strong> {detail.companyDetails.salary}
                  </p>
                  <p className="card-text">
                    <strong>Job Type:</strong> {detail.companyDetails.jobType}
                  </p>
                  <p className="card-text">
                    <strong>Description:</strong> {detail.jobDescription}
                  </p>
                  <ul><li>{detail.qualifications}</li></ul>
                 
                </div>
              </div>
            </div>
        
        </div>
        </main>
        
        </>
    )
}

export default JobDetailsPage