import React from 'react';

const Team = () => {
  return (
    <section>
      {/* Main page heading */}
      <h1 className="text-4xl font-bold text-white mb-8">
        AGX Factor Team
      </h1>

      {/* Team section heading */}
      <h2 className="text-3xl font-bold text-white mb-6">
        Our Leadership
      </h2>

      {/* Department/Category heading */}
      <h3 className="text-2xl font-bold text-white mb-4">
        Executive Team
      </h3>

      {/* Now the team member name can be h4 */}
      <div className="team-member">
        <h4 className="text-2xl font-semibold text-white mb-2">
          Sarah Johnson
        </h4>
        <p className="text-gray-300">
          Chief Executive Officer
        </p>
      </div>
    </section>
  );
};

export default Team; 