import React, { useState } from 'react';




function StudyCode() {

  const studyTopics = [
    { name: "SVM", link: "https://nbviewer.org/github/JinkyoJB/JKSite/blob/main/src/components/StudyCode/svm.ipynb" },
    { name: "ANN", link: "/path/to/ann.ipynb" },
    { name: "Forest", link: "/path/to/forest.ipynb" }
  ];

  const [selectedTopic, setSelectedTopic] = useState(null);

  return (
    <div className='StudyPage'>

    <h2>내가 공부한 주제들:</h2>
      <ul>
        {studyTopics.map((topic) => (
          <li key={topic.name} onClick={() => setSelectedTopic(topic)}>
            {topic.name}
          </li>
        ))}
      </ul>
      {selectedTopic && (
        <iframe 
          title="Study Notebook"
          src={selectedTopic.link} 
          width="100%" 
          height="500px"
        />
      )}

    </div>
  )
}

export default StudyCode