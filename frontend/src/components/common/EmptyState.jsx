function EmptyState({ title, description }) {

  return (

    <div className="container py-5 text-center">

      <img
        src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png"
        alt="Empty"
        width="180"
      />

      <h3 className="mt-4">
        {title}
      </h3>

      <p className="text-muted">
        {description}
      </p>

    </div>

  );

}

export default EmptyState;