import React from 'react'
import SpotlightCard from "./SpotlightCard"; // Adjust path as needed
const Features = () => {
  return (
    <div className="p-4">
      <SpotlightCard
        className="max-w-md mx-auto text-center"
        spotlightColor="rgba(0, 229, 255, 0.2)"
      >
        <h1 className="text-3xl font-bold mb-2">Spotlight Effect Card</h1>
        <p>This card uses a spotlight hover animation!</p>
      </SpotlightCard>
    </div>
  )
}

export default Features