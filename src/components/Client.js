import "../App.css";

const client = {
  name: "Kaivalya Infotech",
  url: "https://kaivalyainfotech.vercel.app",
};

const Client = () => {
  return (
    <div className="client-container" id="client">
      <h2 className="client-title">My Client</h2>

      <div className="client-single">
        <h1 className="client-name">
          Kaivalya <span className="highlight">Infotech</span>
        </h1>

        <a
          href={client.url}
          target="_blank"
          rel="noopener noreferrer"
          className="client-link"
          title={`Visit ${client.name}`}
        >
          https://kaivalyainfotech.com
        </a>
      </div>
    </div>
  );
};

export default Client;
