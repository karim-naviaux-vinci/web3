import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const OpinionContext = createContext(null);

export default OpinionContext;

const VoteProvider = ({ children }) => {
    const [opinions, setOpinions] = useState([]);
    const [opinion, setOpinion] = useState("");
    const [votes, setVotes] = useState(0); 

    const showAllOpinions = () => {
        const allOpinions = opinions.sort((a, b) => b.nbVotes - a.nbVotes);
        return allOpinions;

    }

    const addOpinion = (content) => {
        const newOpinion = {
            id : uuidv4(),
            content,
            nbVotes : votes
        };
        setOpinion(newOpinion);
        setOpinions([...opinions, newOpinion]);
    };

    const addVote = (id) => {
        const updatedOpinions = opinions.map(opinion => {
            if (opinion.id === id) {
                return { ...opinion, nbVotes: opinion.nbVotes + 1 };
            }
            return opinion;
        });
        setOpinions(updatedOpinions);
    }

    return (
        <OpinionContext.Provider value={{ showAllOpinions, addOpinion, addVote }}>
            {children}
        </OpinionContext.Provider>
    );
};

export { VoteProvider };