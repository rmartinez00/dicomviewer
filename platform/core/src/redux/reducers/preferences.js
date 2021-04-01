const defaultState = {
  windowLevelData: {
    1: { description: 'Head and Neck: brain', window: '150', level: '35' },
    2: { description: 'Head and Neck: subdural', window: '70', level: '35' },
    3: { description: 'Head and Neck: stroke', window: '4095', level: '600' },
    4: { description: 'Head and Neck: Bone', window: '300', level: '60' },
    5: {
      description: 'Head and Neck: soft tissues',
      window: '2000',
      level: '800',
    },
    6: { description: 'Chest: lungs', window: '1600', level: '-600' },
    7: { description: 'Chest: mediastinium', window: '360', level: '60' },
    8: { description: 'Abdomen: liver', window: '200', level: '100' },
    9: { description: 'Abdomen: sof tissues', window: '750', level: '90' },
    10: { description: 'Spine: soft tissues', window: '2000', level: '0' },
    11: { description: 'Spine: bone', window: '2000', level: '0' },
  },
  generalPreferences: {
    language: 'es',
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
