const surveyResults = {
  conservative: {
    beginner: {
      shortTerm: {
        bull: 'lender',
        bear: 'lender',
        flat: 'lender',
        notSure: 'lender'
      },
      mediumTerm: {
        bull: 'lender',
        bear: 'lender',
        flat: 'lender',
        notSure: 'lender'
      },
      longTerm: {
        bull: 'supersaver',
        bear: 'supersaver',
        flat: 'supersaver',
        notSure: 'supersaver'
      }
    },
    expert: {
      shortTerm: {
        bull: 'bullSharpe',
        bear: 'bearSharpe',
        flat: 'lender',
        notSure: 'lender'
      },
      mediumTerm: {
        bull: 'bullSharpe',
        bear: 'bearSharpe',
        flat: 'lender',
        notSure: 'lender'
      },
      longTerm: {
        bull: 'bullSharpe',
        bear: 'bearSharpe',
        flat: 'supersaver',
        notSure: 'supersaver'
      }
    },
    advanced: {
      shortTerm: {
        bull: 'bullSharpe',
        bear: 'bearSharpe',
        flat: 'lender',
        notSure: 'lender'
      },
      mediumTerm: {
        bull: 'bullSharpe',
        bear: 'bearSharpe',
        flat: 'lender',
        notSure: 'lender'
      },
      longTerm: {
        bull: 'bullSharpe',
        bear: 'bearSharpe',
        flat: 'supersaver',
        notSure: 'supersaver'
      }
    }
  },
  moderate: {
    beginner: {
      shortTerm: {
        bull: 'moderatebull',
        bear: 'moderate',
        flat: 'moderate',
        notSure: 'moderate'
      },
      mediumTerm: {
        bull: 'moderatebull',
        bear: 'moderate',
        flat: 'moderate',
        notSure: 'moderate'
      },
      longTerm: {
        bull: 'moderatebull',
        bear: 'moderateBear',
        flat: 'moderate',
        notSure: 'moderate'
      }
    },
    expert: {
      shortTerm: {
        bull: 'longTermBull',
        bear: 'shortTermBear',
        flat: 'shortTermFlat',
        notSure: 'shortTermFlat'
      },
      mediumTerm: {
        bull: 'longTermBull',
        bear: 'shortTermBear',
        flat: 'shortTermFlat',
        notSure: 'shortTermFlat'
      },
      longTerm: {
        bull: 'longTermBull',
        bear: 'shortTermBear',
        flat: 'moderateFlat',
        notSure: 'moderateFlat'
      }
    },
    advanced: {
      shortTerm: {
        bull: 'moderatebull',
        bear: 'shortTermBear',
        flat: 'shortTermFlat',
        notSure: 'shortTermFlat'
      },
      mediumTerm: {
        bull: 'moderateDiversified',
        bear: 'activeBear',
        flat: 'moderateFlat',
        notSure: 'moderateFlat'
      },
      longTerm: {
        bull: 'hedgedBull',
        bear: 'moderateFlat',
        flat: 'moderateFlat',
        notSure: 'moderateFlat'
      }
    }
  },
  aggressive: {
    beginner: {
      shortTerm: {
        bull: 'beginnerBull',
        bear: 'beginnerBear',
        flat: 'shortTermFlat',
        notSure: 'shortTermFlat'
      },
      mediumTerm: {
        bull: 'lender',
        bear: 'lender',
        flat: 'lender',
        notSure: 'lender'
      },
      longTerm: {
        bull: 'beginnerBull',
        bear: 'activeBear',
        flat: 'flatLands',
        notSure: 'flatLands'
      }
    },
    expert: {
      shortTerm: {
        bull: 'doublebull',
        bear: 'riskyBear',
        flat: 'doublebull',
        notSure: 'doublebull'
      },
      mediumTerm: {
        bull: 'doublebull',
        bear: 'activeBear',
        flat: 'doublebull',
        notSure: 'doublebull'
      },
      longTerm: {
        bull: 'riskyBull',
        bear: 'activeBear',
        flat: 'flatLands',
        notSure: 'flatLands'
      }
    },
    advanced: {
      shortTerm: {
        bull: 'ETHMaximalist',
        bear: 'riskyBear',
        flat: 'flatLands',
        notSure: 'lender'
      },
      mediumTerm: {
        bull: 'ETHMaximalist',
        bear: 'riskyBear',
        flat: 'flatLands',
        notSure: 'lender'
      },
      longTerm: {
        bull: 'riskyBull',
        bear: 'activeBear',
        flat: 'activeBull',
        notSure: 'activeBull'
      }
    }
  }
};

export default surveyResults;
