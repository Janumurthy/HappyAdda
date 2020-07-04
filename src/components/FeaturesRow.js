import React from 'react';

const ColumnLayour = ({className, children}) => (
    <div class="flex">
        <div class="w-1/5 p-2 text-center">
            <div className="step mx-auto flex items-center rounded-full border-solid border-4 border-primary bg-secondary text-primary w-10 h-10">
                <span className="number mx-auto font-semibold">1</span>
            </div>
        </div>
        <div class="w-4/5 p-2 text-left">
            <p>Pick the flavour of pasta you want to gorge on.</p>
        </div>
    </div>
)

export default FeaturesGrid;