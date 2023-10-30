import React from "react";
import TeamMember from "./teammember"; 
export default function Team() {
  return (
    <div className="bg-blue-900 flex flex-col p-10 mb-5">
      <div className="flex flex-col  mx-auto justify-center space-y-6 mt-8">
        <TeamMember
          name="Er. R. Vignesh M.E., (Ph.D)"
          imageSrc="/vignesh.jpg"
          description="        R Vignesh M.E., (Ph.D) is a Geotechnical Engineer who has worked in numerous projects in India for
          various sectors covering Oil and Gas, Infrastructure , Power, Ports and Harbours, and Metro etc in
          different capacities such as Consultant, Sr. Geotechnical Engineer etc.
      
      
          Specializes in Conventional Geotechnics including analysis , and design of Roads, Electrical
          Transmission towers Data acquisition and Measurements, Interpretation; Soil Dynamics and
          Earthquake Engineering, Pile designing Testing, and Geotechnical Exploration Surveys for both
          onshore and offshore.
      
      
          Provided benchmark solutions solving complex problems in major and important infrastructure
          projects such as Runways, Dams, Roadways and industrial geotechnical investigation
      
      
          Approved Registered Geotechnical Engineer CMDA and DTCP vide G.O(MS) No 18 MAWS (MA1) DEPT
          Dated 04/02/2019
      
      
          Being instrumental in promoting high quality integrated geotechnical and geophysical site
          characterization in India
      
      
          Published papers in Journals and Conference proceedings; delivered invited lectures to reputed
          companies and academic/research institutions in India"
        />
        <TeamMember
          name="K Rajendran"
          imageSrc="/rajendran.jpg"
          description=" K Rajendran is an Voluntarily Retired Assistant Divisional Engineer from Highways Dept. of Govt. of Tamilnadu, India

      
      
          Has over 35 years of experience; prior worked with &ndash; Tamilnadu Electricity Borad, Highways Dept., Highway Research
    Station
          
          
          His vast experience covers Govt. Contracts and Tenders, geotechnical investigations, topopraphic and airborne surveys;
    Design of - railway under and over bridges, airport runway and taxiway, raceways for electrical and net cables, pipe
    alignments; Investigation and planning of Hydroelectric projects, Transmission lines; preparation of land planning
    schedule for the new Bridge works and By pass roads, Off shore surveying, Off shore soil investigation, Quality control
    works on bridges, roads and Buildings
          
          
          His notifiable research includes Geophysical Subsoil Investigations to address the leaning tower of South RajaGopuram of
    Sri Renganathar Temple Srirangam, Trichy; Temperature and Corrosion effect on Pamban Bridge &ndash; Rameswaram between
    the years 1992 &ndash; 1995
          
          
          Approved quality auditor CMDA vide G.O(MS) No 18 MAWS (MA1) DEPT Dated 04/02/2019
          
          
          Patented Research:- Electricity from Seawater, Hydrogen Generation from Seawater without evolution of chlorine -
    National and International patent"
        />
        <TeamMember
          name="Gilbert Raj"
          imageSrc="/gilbert.jpg"
          description="Gilbert Raj is a Civil Engineer with 15 years of experience in Project Managerial Roles specific to field
          execution of onshore and offshore geotechnical investigations.
                      
                      
                      He has organized and executed numerous geotechnical projects worth of several crores.
                      
                      
                      Some of the notable projects in which he has involved includes &ndash; Various projects for Tamilnadu Road
          development Company (TNRDC), Ongole Bypass for L&T Ramboll, Chennai Peripheral Ring Road,
          Chennai Metro, Vaigundam Barrage for new Andhra secretariat, Athikaduvu Avinashi project, JSW in
          Karnataka, Railway Projects in Kerala, etc.
          
                      
                      
                      Has worked in different port development projects including Orrisa Port, Cochin Port, Ennore Kattupalli
          Port, Ennore Kamaraj Port, Thengaipattinam port.
          
                      
                      
                      Has worked in differnert geographies such as Tamilnadu, Kerala, Andhra Pradesh, Karnataka, Andaman,
          Maldives, UAE."
        />
      </div>
    </div>
  );
}
