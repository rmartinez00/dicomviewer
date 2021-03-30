const defaultState = {
  windowLevelData: {
    1: { description: 'Head and Neck: brain', window: '35', level: '150' },
    2: { description: 'Head and Neck: subdural', window: '35', level: '70' },
    3: { description: 'Head and Neck: stroke', window: '600', level: '4095' },
    4: { description: 'Head and Neck: Bone', window: '60', level: '300' },
    5: { description: 'Head and Neck: soft tissues', window: '800', level: '2000' },
    6: { description: 'Chest: lungs', window: '-600', level: '1600' },
    7: { description: 'Chest: mediastinium', window: '60', level: '360' },
    8: { description: 'Abdomen: liver', window: '100', level: '200' },
    9: { description: 'Abdomen: sof tissues', window: '90', level: '750' },
    10: { description: 'Spine: soft tissues', window: '0', level: '2000' },
    11: { description: 'Spine: bone', window: '0', level: '2000' },
  },
  generalPreferences: {
     language: 'es'
  },
};

const preferences = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_USER_PREFERENCES': {
      return Object.assign({}, state, action.state);
    }
    default:
      return state;
  }
};

export { defaultState };
export default preferences;
