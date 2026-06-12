import "./App.css";
import Home from "./pages/Home";
import Play from "./pages/Play";
import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql";
import Rules from "./pages/Rules";
import Results from "./pages/Results";
import { useTabs } from "./hooks/useTabs";

function App() {
  const { currentTab, resultId, handleTabChange } = useTabs();

  return (
    <div className="App page">
      <ApolloProvider client={client}>
        {currentTab === "play" && (
          <Play onBack={() => handleTabChange("home")} onOver={handleTabChange} />
        )}
        {currentTab === "rules" && (
          <Rules onBack={() => handleTabChange("home")} />
        )}
        {currentTab === "results" && (
          <Results onTabChange={handleTabChange} resultId={resultId} />
        )}
        {!["play", "rules", "results"].includes(currentTab) && <Home onTabChange={handleTabChange} />}
      </ApolloProvider>
    </div>
  );
}

export default App;
