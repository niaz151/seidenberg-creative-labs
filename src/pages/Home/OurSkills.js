import React from 'react';
import OurSkillsIcon from '../../components/OurSkillsIcon';

const OurSkills = () => {
    
    return(
      <div className="container-fluid d-flex flex-column align-items-center our-skills-container"> 
      
       {/* = = = = = = = = = = TITLE CONTAINER = = = = = = = = = =  */ }

        <div className="container-fluid w-50 d-flex align-items-center justify-content-center our-skills-header">
          Our Skills
        </div>

         {/* = = = = = = = = = =  ICON CONTAINER = = = = = = = = = =  */ }

        <div className="container-fluid w-75 d-flex align-items-center justify-content-center our-skills-icon-container">
          
           <OurSkillsIcon 
              class="fa fa-cogs fa-2x icon" 
              name="Development" 
              desc="Working side by side with clients, we create products which bring their visions to life. Anything is possible."
            />

           <OurSkillsIcon 
              class="fa fa-cogs fa-2x icon" 
              name="Development" 
              desc="Working side by side with clients, we create products which bring their visions to life. Anything is possible."
            />
          
           <OurSkillsIcon 
              class="fa fa-cogs fa-2x icon" 
              name="Development" 
              desc="Working side by side with clients, we create products which bring their visions to life. Anything is possible."
            />
            
        </div>

         {/* = = = = = = = = = = BTN CONTAINER = = = = = = = = = =  */ }

        <div className="w-100 container-fluid d-flex align-items-center justify-content-center ours-skills-btn-container">
          <div className=" container d-flex align-items-center justify-content-center our-skills-btn">
            Check Out Our Skills
          </div>
        </div>
      </div>
    )
}

export default OurSkills;