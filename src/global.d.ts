type Usage = 'Very High' | 'High' | 'Medium' | 'Low' | 'Very Low';

type Instance = {
    name: string;
    percentageFill?: number;
    percentageBattery?: number;
    estimatedTimeOfFull?: Date;
    usage?: Usage;
};


