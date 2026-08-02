function PopularCuisine() {

const cuisines=[

"🍕 Pizza",

"🍔 Burger",

"🍛 Indian",

"🍜 Chinese",

"🍣 Sushi",

"🥗 Healthy"

];

return(

<section className="container py-5">

<h2 className="fw-bold mb-4">

Popular Cuisines

</h2>

<div className="row">

{

cuisines.map((item,index)=>(

<div

key={index}

className="col-md-2"

>

<div

className="card border-0 shadow rounded-4 text-center p-4"

style={{

cursor:"pointer",

transition:"0.3s"

}}

>

<h3>

{item}

</h3>

</div>

</div>

))

}

</div>

</section>

);

}

export default PopularCuisine;