import React from 'react';
import Service from './servicecomponent';

function Allservices() {
  return (
    <div>
      <div className="mx-auto flex max-w-[78rem] p-6 rounded-lg border border-gray-300 bg-slate-200 flex-col items-center space-y-4">
        <p className="w-90 text-3xl text-left text-muted-background font-heading m5">
          What We Do
        </p>
        <p className="w-90 text-muted-background font-heading m5">
          We provide Services on an Integrated Approach for Offshore, Near Shore, and Onland Projects. We have consistently exceeded customer expectations by our solutions. This has been made possible by the excellent staff and consultants that have expertise and experience working on projects across the globe.
        </p>
      </div>

      <div className="flex flex-col flex-wrap mt-5">
        <div className="flex justify-center p-8 rounded-xl flex-wrap mb-10  mx-auto ">
          <Service
            title="Geotechnical Investigations"
            to="/service1"
            description="Geotechnical investigations involve various techniques to assess subsurface conditions, including trial pits, drilling, and testing. The data gathered is crucial for project planning and construction."
          />

          <Service
            title="Field Density"
            to="/service2"
            description="Field density testing is essential for ensuring proper compaction of soil during construction. It involves measuring the density of compacted soil to determine if it meets specified standards."
          />

          <Service
            title="Geophysical Surveys"
            to="/service3"
            description="Geophysical surveys help assess subsurface conditions using non-invasive techniques. The data is valuable for various engineering projects."
          />

          <Service
            title="Geoconsulting"
            to="/service4"
            description="Geoconsulting services provide expert guidance and recommendations for geotechnical and construction projects."
          />

          <Service
            title="Pile Testing"
            to="/service5"
            description="Pile testing evaluates the load-bearing capacity of foundation piles, ensuring their suitability for construction projects."
          />

          <Service
            title="Geostructural Instrumentation"
            to="/service6"
            description="Geostructural instrumentation involves monitoring and measuring structural parameters to ensure safety and stability in construction projects."
          />
        </div>
      </div>
    </div>
  );
}

export default Allservices;
