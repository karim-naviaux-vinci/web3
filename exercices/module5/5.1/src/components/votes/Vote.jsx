import { useContext } from "react";
import  VoteContext from "../../contexts/vote.context";

const Vote = () => { 
    const { 
        voteGood, 
        voteBad, 
        voteNeutral, 
        addVoteGood, 
        addVoteBad, 
        addVoteNeutral, 
        resetVotes 
    } = useContext(VoteContext);

    return (
        <div>
            <h1>Vote</h1>
            <button onClick={addVoteGood}>Good</button>
            <button onClick={addVoteBad}>Bad</button>
            <button onClick={addVoteNeutral}>Neutral</button>
            <p>Good: {voteGood}</p>
            <p>Bad: {voteBad}</p>
            <p>Neutral: {voteNeutral}</p>
            <button onClick={resetVotes}>Reset</button>
        </div>
    )

    
};

export default Vote;