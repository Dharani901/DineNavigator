function FilterSidebar({

rating,

setRating,

cuisine,

setCuisine

}){

return(

<div className="card shadow rounded-4 border-0">

<div className="card-body">

<h4 className="fw-bold mb-4">

Filters

</h4>

<label>

Cuisine

</label>

<select

className="form-select mb-3"

value={cuisine}

onChange={(e)=>setCuisine(e.target.value)}

>

<option value="">

All

</option>

<option>

Indian

</option>

<option>

Chinese

</option>

<option>

Italian

</option>

<option>

Thai

</option>

<option>

Mexican

</option>

</select>

<label>

Minimum Rating

</label>

<input

type="range"

className="form-range"

min="0"

max="5"

step="0.5"

value={rating}

onChange={(e)=>setRating(e.target.value)}

/>

<p>

⭐ {rating} +

</p>

</div>

</div>

);

}

export default FilterSidebar;