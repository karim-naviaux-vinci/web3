import { useContext } from "react";
import OpinionContext  from "../contexts/opinion.context";

const OpinionForm = () => {
    const { addOpinion } = useContext(OpinionContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        addOpinion(e.target.opinion.value);
        e.target.opinion.value = "";
    };

    return (

        <form onSubmit={handleSubmit}>
            <input type="text" name="opinion" />
            <button type="submit">Submit</button>
        </form>
      
    );
}

export default OpinionForm;