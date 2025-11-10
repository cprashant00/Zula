import React from "react";
import "./AppBrain.css";
import Accordion from "./Accordion";

import RankingImage from "../../assets/AppBrain/Ranking.jpg";

const Ranking = () => {
  const accordionItems = [
    {
      title: "Track your Google Play rankings",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at commodo enim. Phasellus sit amet posuere diam, ac rutrum dui.",
    },
    {
      title: "Benchmark your app against competitors",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lorem eget nisl placerat tincidunt.",
    },
    {
      title: "Insight in User engagement and Retention",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lorem eget nisl placerat tincidunt.",
    },
    {
      title: "Improve your app with AppBrain Apptimizer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lorem eget nisl placerat tincidunt.",
    },
  ];

  return (
    <div className="section Monetise-grid2">
      <div className="align-center">
        <div className="image-column">
          <img src={RankingImage} alt="Ranking Image" className="image" />
        </div>
      </div>
      <div className="align-center">
        <div className="app-Brain-text-column">
          <h2 className="app-Brain-heading">AppBrain Ranking</h2>
          <p className="app-Brain-description">
            Optimize user acquisition and retention by analyzing your app's
            market position and understanding your users through our free
            analytics service.
          </p>
          <div>
            <Accordion items={accordionItems} />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Ranking;
