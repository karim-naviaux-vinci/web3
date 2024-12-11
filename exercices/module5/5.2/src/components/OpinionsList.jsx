import { useContext } from "react";
import OpinionContext from "../contexts/opinion.context";
import Opinion from "./Opinion";

const OpinionsList = () => {
    const { showAllOpinions } = useContext(OpinionContext);
    const opinions = showAllOpinions();
    console.table(opinions);

    return (
        <div>
            <h2>Opinions</h2>
            <table>
                <thead>
                    <tr>
                        <th>Opinion</th>
                        <th>Votes</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    opinions.map((opinion) => (
                        // eslint-disable-next-line react/jsx-key
                        <Opinion id={opinion.id} content={opinion.content} nbVotes={opinion.nbVotes} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default OpinionsList;