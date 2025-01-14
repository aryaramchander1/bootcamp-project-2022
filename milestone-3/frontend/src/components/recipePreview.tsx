import { Link } from "react-router-dom";

interface Recipe {
    name: string;
    image: string;
    desc: string;
}
interface RecipePreviewProps extends Recipe {
    external?: boolean;
  }


function RecipePreview(props: RecipePreviewProps) {
    return (
    <div className="sub-section">
    <h2>
        <Link to={props.external ? `/externalRecipe/${props.name}` : `/recipe/${props.name}`} className="text">{props.name}</Link>
    </h2>
    <div className="sub-section-content">
        <img className="recipe-images-home" src={props.image} alt="picture of banana bread" width="200" height="200"/>
        <p className="text">
            {props.desc}
        </p>
    </div>
</div>);
}

export default RecipePreview;