import React, {useState} from 'react'

function Form() {
    const [rating, setRating] = useState("");
    const [duration, setDuration] = useState("");
   const [title, setTittle] = useState("");

   const handleSubmit = (e) => {

    const newrate = { title, rating, duration };

    

    fetch("http://localhost:3001/movies", {
      method: "POST",
      headers: {  "Content-Type": "application/json" },
      body: JSON.stringify(newrate)
    }).then(() => console.log("new rate added"));
  }


  return (
    <div>       
        
        <div className='container'>
    <form onSubmit={handleSubmit}>
<div className="mb-3 divs">
<label for="movie"  className="form-label">Movie</label>
<input type="movie" id="movie" value={title} onChange={(e) => setTittle(e.target.value)} className="form-control" />
</div>
<div className="mb-3 divs ">
<label className="form-label">Rating</label>
<input type="number" className="form-control" value={rating} onChange={(e) => setRating(e.target.value)} />
</div>
<div className="mb-3 divs ">
<label className="form-label">Duration</label>
<input type="text" className="form-control" value={duration} onChange={(e) => setDuration(e.target.value)} />
</div>
<button type="submit" className="btn btn-primary divs">Submit</button>
</form>
</div></div>
  )
}

export default Form