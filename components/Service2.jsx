import React from "react";

const Service2 = () => {
  return (
    
    <div className="text-gray-700 max-w-[78rem] p-6 mx-auto justify-center">
      <h1 className="text-4xl text-blue-500 text-center mt-10 font-bold mb-10">
        Geotechnical Laboratory Tests on Soil Samples
      </h1>
      <img
          src="/s2s1.jpg"
          alt="sample2"
          className="w-1/6 h-40 object-cover object-center rounded-lg mb-4"
        />

      <h2 className="text-2xl font-semibold mb-2">Classification Tests</h2>
      <p className="mb-4">
        Soil classification tests are fundamental for understanding the
        properties and behavior of soil samples. These tests help categorize
        soils into various groups based on their composition and
        characteristics. They include:
      </p>
      <ul>
        <li>
          Unit Weight and Moisture Content: Determining the weight and moisture
          content of soil samples to assess their density and water content.
        </li>
        <li>
          Grain Size Distribution - Sieve Analysis and Hydrometer Analysis:
          Analyzing the distribution of particle sizes within the soil sample,
          including coarse and fine fractions.
        </li>
        <li>
          Specific Gravity: Measuring the specific gravity of soil to understand
          its buoyancy in water.
        </li>
        <li>
          Index Properties – Liquid Limit, Plastic Limit, Plasticity Index,
          Shrinkage Limit: Assessing the soil&apos;s plasticity and behavior under
          different moisture conditions.
        </li>
        <li>
          Free Swell Index: Evaluating how much a soil sample swells when
          exposed to water.
        </li>
        <li>
          Chemical tests on soil and water: Conducting chemical tests to
          determine the presence of specific elements or compounds that may
          affect soil properties.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2 mt-3">
        Engineering Properties Tests
      </h2>
      <p className="mb-4">
        Engineering properties tests delve deeper into the mechanical behavior
        of soil samples. They help in assessing the soil&apos;s suitability for
        construction and engineering projects. These tests include:
      </p>
      <ul>
        <li>
          Strength Tests – Unconfined Compressive Strength, Direct Shear,
          Triaxial (UU, CU, CD): Evaluating the soil&apos;s strength and shear
          resistance under different conditions.
        </li>
        <li>
          Consolidation – 1D and 3D: Assessing how soil compacts and
          consolidates under applied loads, which is essential for foundation
          design.
        </li>
        <li>
          Permeability: Measuring the soil&apos;s ability to transmit fluids, which
          is crucial for drainage and groundwater flow analysis.
        </li>
        <li>
          Proctor Compaction: Determining the optimal soil compaction
          characteristics for construction and road building.
        </li>
        <li>
          California Bearing Ratio (CBR): Evaluating the bearing capacity of the
          soil subgrade for pavement design and road construction.
        </li>
      </ul>

      <h1 className="text-4xl text-blue-500 text-center mt-10 font-bold mb-10">
        Geotechnical Laboratory Tests on Rock Samples
      </h1>

      <h2 className="text-2xl font-semibold mb-2">Classification Tests</h2>
      <p className="mb-4">
        Rock classification tests provide insights into the properties of rock
        samples, helping categorize them based on their characteristics. These
        tests include:
      </p>
      <ul>
        <li>
          Water Absorption: Measuring the rock&apos;s ability to absorb water, which
          can impact its durability and strength.
        </li>
        <li>
          Density and Porosity: Determining the density and porosity of rock
          samples, which are vital for understanding their strength and
          behavior.
        </li>
        <li>
          Specific Gravity: Measuring the specific gravity of rocks to assess
          their buoyancy.
        </li>
        <li>
          Rock Cutting, Polishing, and Grinding: Preparing rock samples for
          further testing by shaping and polishing them.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2 mt-3">
        Engineering Properties Tests
      </h2>
      <p className="mb-4">
        Engineering properties tests on rock samples provide critical data for
        various engineering applications. They include:
      </p>
      <ul>
        <li>
          Point Load Index: Assessing the rock&apos;s strength and durability under
          point load conditions, which is valuable for rock mechanics studies.
        </li>
        <li>
          Unconfined Compression with and without Modulus: Measuring the rock&apos;s
          compressive strength under different conditions, including with and
          without modulus.
        </li>
        <li>
          P and S wave velocity: Determining the velocity of primary (P) and
          secondary (S) seismic waves in rock samples to understand their
          seismic behavior.
        </li>
        <li>
          Tensile Strength: Evaluating the ability of rocks to resist tension,
          which is important for construction projects and natural rock
          formations.
        </li>
        <li>
          Poisson’s Ratio: Measuring Poisson&apos;s ratio, which relates to the
          rock&apos;s elasticity and deformation characteristics.
        </li>
        <li>
          High Pressure Triaxial Tests: Subjecting rock samples to high-pressure
          conditions to simulate deep geological environments and assess their
          behavior under such conditions.
        </li>
      </ul>
      </div>
  );
};

export default Service2;
