import Header from "../components/Header"

const PostAJob=()=>{
    return(
        <>
        <Header/>
        <main className="container mt-3">
            <h1>Post a Job</h1>
            
            <form>
            <label>Job Title:</label>
            <input className="form-control" name='jobTitle' value={formData.jobTitle} onChange={handleChange}type="text"/>
            <br/>
            <label>Company Name:</label>
            <input className="form-control" name='companyName' value={formData.companyName} onChange={handleChange}type="text"/>
            <br/>
            <label>Location:</label>
            <input className="form-control" name='location' value={formData.location} onChange={handleChange}type="text"/>
            <br/>
            <label>Salary:</label>
            <input className="form-control" name='salary' value={formData.salary} onChange={handleChange}type="text"/>
            <br/>
            <label>Job Type:</label>
            <input className="form-control" name='jobType' value={formData.jobType} onChange={handleChange}type="text"/>
            <br/>
            <label>Job Description:</label>
            <textarea className="form-control" name='jobDescription' value={formData.jobDescription} onChange={handleChange}></textarea>
            <br/>
            <label>Job Qualifications:</label>
            <textarea className="form-control" name='qualifications' value={formData.qualifications} onChange={handleChange}></textarea>
            <br/>
                <button className="btn btn-primary col-3 mb-5" type="submit">Post Job</button>
            </form>
        </main>
        </>
    )
}

export default PostAJob