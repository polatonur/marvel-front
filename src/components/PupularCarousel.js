export default ({ data }) => {
  return data.results.map((elem) => {
    return (
      elem.thumbnail.path !==
        "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" && (
        <div className="top-card">
          <div className="upper-card">
            <img
              src={elem.thumbnail.path + "." + elem.thumbnail.extension}
              alt=""
            />{" "}
          </div>
          <div className="bottom-card">
            {" "}
            <h2 className="comic-card-title">{elem.name}</h2>
          </div>
        </div>
      )
    );
  });
};
