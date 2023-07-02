/* eslint-disable react/prop-types */
const Card = ({title,year,poster,type}) => {
    return(
        <div className="m-5 w-[220px] h-[350px] cursor-pointer">
            <img src={poster} alt={title} className="w-full object-cover"/>
            <h2>{title}</h2>
            <h2>{year}</h2>
            <h2>{type}</h2>
        </div>
    )
}
export default Card;