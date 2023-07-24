import React from "react";

const Card = ({ item }) => {
  const {
    id,
    collegeName,
    image,
    applicationDeadline,
    AdmissionDate,
    upcomingEvents1,
    upcomingEvents2,
    total_research_projects,
    ongoing_projects,
    published_papers,
    research_centers,
    sportsName,
    coach,
    homeGround,
    currentRanking1,
    sport2,
    sport2Coach,
    ground,
    currentRanking,
  } = item;
  return (
    <div>
      <div className="hero h-auto bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="w-1/2 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-4xl font-bold">{collegeName}</h1>
            <p className=" font-bold"> <span className="text-xl font-bold text-cyan-600 py-6">AdmissionDate:</span> 
                {AdmissionDate}
            </p>
                 <p className="font-bold">  <span className="text-xl font-bold text-cyan-600 py-6">upcomingEvents1:</span> {upcomingEvents1}</p>
                 <p className="font-bold"> <span className="text-2xl font-bold text-cyan-600 py-6">upcomingEvents2:</span> {upcomingEvents2}</p>
                
                 <p className="text-2xl font-bold text-cyan-900 py-3"> Research History</p>
                 <p className="font-bold">  <span className="text-xl font-bold text-cyan-600 py-6">total_research_projects:</span>{total_research_projects}</p>
                 <p className="font-bold">  <span className="text-xl font-bold text-cyan-600 py-6">ongoing_projects:</span> {ongoing_projects}</p>
                 <p className="font-bold">  <span className="text-xl font-bold text-cyan-600 py-6">published_papers:</span> { published_papers}</p>
                 <p className="font-bold">  <span className="text-xl font-bold text-cyan-600 py-6"> research_centers:</span> { research_centers}</p>
            <button className="btn btn-primary bg-cyan-700">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
