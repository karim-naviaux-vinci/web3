import {React, useContext} from "react";
import OpinionContext from "../contexts/opinion.context";


const Opinion = ({id, content, nbVotes}) => {
    const { addVote } = useContext(OpinionContext);

    const handleVote = (e) => {
        e.preventDefault();
        addVote(id);
    }

    return (
        <tr>
            <td>{content}</td>
            <td>{nbVotes}</td>
            <td>
                <button onClick={handleVote}>voter</button>
            </td>
        </tr>
    );
}

export default Opinion;