// export default function mergeData(sessions) {
//   for (let i = 0; i < sessions.length - 1; i++) {
//     for (let j = i + 1; j < sessions.length; j++) {
//       if (sessions[i].user === sessions[j].user) {
//         const mergedEquipment = sessions[i].equipment
//           .concat(sessions[j].equipment)
//           .sort();

//         const uniqueEquipment = [...new Set(mergedEquipment)];

//         const mergedSessions = {
//           user: sessions[i].user,
//           duration: sessions[i].duration + sessions[j].duration,
//           equipment: uniqueEquipment,
//         };

//         sessions[i] = mergedSessions;
//         sessions.splice(j, 1);
//         j--;
//       }
//     }
//   }

//   return sessions;
// }

export default function mergeData(sessions) {
  const results = [];
  const sessionsForUser = new Map();

  sessions.forEach((session) => {
    if (sessionsForUser.has(session.user)) {
      const userSession = sessionsForUser.get(session.user);
      userSession.duration += session.duration;
      session.equipment.forEach((equipment) => {
        userSession.equipment.add(equipment);
      });
    } else {
      const clonedSession = {
        ...session,
        equipment: new Set(session.equipment),
      };
      sessionsForUser.set(session.user, clonedSession);
      results.push(clonedSession);
    }
  });

  // Sort equipment of each session and convert back into array.
  return results.map((session) => ({
    ...session,
    equipment: Array.from(session.equipment).sort(),
  }));
}

console.log(
  mergeData([
    { user: 8, duration: 50, equipment: ["bench"] },
    { user: 7, duration: 150, equipment: ["dumbbell", "kettlebell"] },
    { user: 1, duration: 10, equipment: ["barbell"] },
    { user: 7, duration: 100, equipment: ["bike", "kettlebell"] },
    { user: 7, duration: 200, equipment: ["bike"] },
    { user: 2, duration: 200, equipment: ["treadmill"] },
    { user: 2, duration: 200, equipment: ["bike"] },
  ])
);
