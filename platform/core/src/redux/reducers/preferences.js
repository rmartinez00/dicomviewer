const defaultState = {
  windowLevelData: {
    1: { description: 'Head and Neck: brain', window: '80', level: '40' },
    2: { description: 'Head and Neck: subdural', window: '200', level: '75' },
    3: { description: 'Head and Neck: stroke', window: '40', level: '40' },
    4: { description: 'Head and Neck: Bone', window: '2800', level: '600' },
    5: { description: 'Head and Neck: soft tissues', window: '375', level: '40' },
    6: { description: 'Chest: lungs', window: '1500', level: '600' },
    7: { description: 'Chest: mediastinium', window: '350', level: '50' },
    8: { description: 'Abdomen: liver', window: '150', level: '30' },
    9: { description: 'Abdomen: sof tissues', window: '400', level: '50' },
    10: { description: 'Spine: soft tissues', window: '250', level: '50' },
    11: { description: 'Spine: bone', window: '1800', level: '400' },
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
