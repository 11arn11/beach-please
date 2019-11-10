import firebase from '../Firebase';

export default {
    
  add: ({competitionName, competitionType, competitionDate}) => {

      const ref = firebase.database().ref(`competitions`);

      ref.push({
          competitionName: competitionName,
          competitionType: competitionType,
          competitionDate: competitionDate,
      });

  },

  remove: (competitionID)=>{

    const ref = firebase
    .database()
    .ref(
      `competitions/${competitionID}`
    );

    ref.remove();

  },

  list: ()=>{

    return firebase.database().ref('competitions');

  }
  
}