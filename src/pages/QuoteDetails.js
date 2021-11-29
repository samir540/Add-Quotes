import { useParams, Route, Link } from "react-router-dom";
import {Fragment} from "react";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";



const DUMMY_DATA = [
  { id: "q1", author: "Sam", text: "Learning React is fun!" },
  { id: "q2", author: "Samsam", text: "Learning React amazingly is fun!" },
];


const QuoteDetails = () => {
    const params = useParams();
    const quote = DUMMY_DATA.find(quote=>quote.id===params.quotaId);
    if(!quote) {
      return <p>No quote</p>
    }
  return (
    <Fragment>
      <HighlightedQuote auhtor={quote.author} text={quote.text} />
      <Route path={`/quotes/${params.quotaId}`} exact>
        <div className="centered">
          <Link to={`/quotes/${params.quotaId}/comments`} className="btn--flat">
            Load comments
          </Link>
        </div>
      </Route>

      <Route path={`/quotes/${params.quotaId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetails;
