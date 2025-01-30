
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from './components/Header';
import useFetch from './useFetch';

function App() {
  const { data, loading, error } = useFetch('https://ophiuchus.vercel.app/detail/all');

  return (
    <>
      <Header />
      <br />
      <main className="container">
        <h1>All Jobs</h1>
        <div className="row">
          {data?.map((detail) => (
            <div key={detail._id} className="col-md-4 mb-3">
              <div className="card py-3">
                <div className="card-body">
                  <h5 className="card-title">{detail.jobTitle}</h5>
                  <p className="card-text">
                    <strong>Company name:</strong> {detail.companyDetails.companyName}
                  </p>
                  <p className="card-text">
                    <strong>Location:</strong> {detail.companyDetails.location}
                  </p>
                  <p className="card-text">
                    <strong>Job Type:</strong> {detail.companyDetails.jobType}
                  </p>
                  <a href="/" className="btn btn-primary col-4 me-2">
                    See Details
                  </a>
                  <a href="/" className="col-4 btn btn-danger">
                    Delete
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default App;

