import HistoryCard from "../../components/HistoryCard/HistoryCard";

const History = () => {
    return (
      <div className="container">
        <h1>오늘의 우연</h1>
        <HistoryCard nickname="제이" metCount={5} isHeartFilled={false} />
        <HistoryCard nickname="제이" metCount={5} isHeartFilled={false} />

      </div>
    );};
  
  export default History;