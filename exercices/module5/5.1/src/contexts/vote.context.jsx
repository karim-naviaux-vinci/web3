import { createContext } from "react";
import { useState } from "react";

const VoteContext = createContext();

export default VoteContext;

const VoteProvider = ({ children }) => {
    const  [voteGood, setVoteGood] = useState(0);
    const  [voteBad, setVoteBad] = useState(0);
    const [voteNeutral, setVoteNeutral] = useState(0);

    const addVoteGood = () => setVoteGood(voteGood + 1);
    const addVoteBad = () => setVoteBad(voteBad + 1);
    const addVoteNeutral = () => setVoteNeutral(voteNeutral + 1);
    const resetVotes = () => {
        setVoteGood(0);
        setVoteBad(0);
        setVoteNeutral(0);
    };

    return (
        <VoteContext.Provider value={{ voteGood, voteBad, voteNeutral, addVoteGood, addVoteBad, addVoteNeutral, resetVotes }}>
            {children}
        </VoteContext.Provider>
    );
};

export { VoteProvider };