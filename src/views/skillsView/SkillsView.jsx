import React from 'react';
import './skillsView.scss';

const skills = [
  { name: 'React', proficiency: 90 },
  { name: 'SCSS', proficiency: 85 },
  { name: 'HTML', proficiency: 95 },
  { name: 'CSS', proficiency: 90 },
  { name: 'JavaScript', proficiency: 80 },
  { name: 'Sass', proficiency: 85 }
];

const SkillsView = () => {
  return (
    <div id="skills" className="skills-view">
      <div className="container">
        <h1 className="skills-title">Skills</h1>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-name">{skill.name}</div>
              <div className="skill-bar-container">
                <div
                  className="skill-bar"
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
              <div className="skill-proficiency">{skill.proficiency}%</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsView;
