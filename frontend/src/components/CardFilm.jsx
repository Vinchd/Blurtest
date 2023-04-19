import PropTypes from "prop-types";

function CardFilm({ testarr }) {
  return (
    <div className="cardfilm md:mt-0">
      <h3 className="cardfilmTitle h-7 md:text-2xl mb-10">Theme</h3>

      <div className=" mt-3 mb-2 overflow-hidden rounded ">
        <img
          className=" affiche w-52 rounded md:w-80 md:mt-0 "
          src={`https://image.tmdb.org/t/p/w500${testarr.poster_path}`}
          alt="affiche film"
        />
      </div>
    </div>
  );
}

CardFilm.propTypes = {
  testarr: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardFilm;