const patients = [
  { id: "P001", name: "Sarah Johnson", assignedDoctor: "Dr. Smith" },
  { id: "P002", name: "Michael Chen", assignedDoctor: "Dr. Aones" },
  { id: "P002", name: "Michael Chen", assignedDoctor: "Dr. Aones" },
  { id: "P003", name: "Emily Rodriguez", assignedDoctor: "Dr. Smith" },
  { id: "P004", name: "James Wilson", assignedDoctor: "Dr. Aones" },
  { id: "P005", name: "Maria Garcia", assignedDoctor: "Dr. Smith" },
  { id: "P006", name: "David Lee", assignedDoctor: "Dr. Brown" },
];

// function findBusiestDoctor(patients) {
//   const patientsByDoctor = {};

//   for (let i = 0; i < patients.length; i++) {
//     if (patientsByDoctor[patients[i].assignedDoctor]) {
//       patientsByDoctor[patients[i].assignedDoctor] = [
//         ...patientsByDoctor[patients[i].assignedDoctor],
//         patients[i],
//       ];
//     } else {
//       patientsByDoctor[patients[i].assignedDoctor] = [patients[i]];
//     }
//   }

//   const sortedObject = Object.fromEntries(
//     Object.entries(patientsByDoctor).sort(([, a], [, b]) => {
//       if (a.length === b.length) {
//         return b - a;
//       } else {
//         return b.length - a.length;
//       }
//     }),
//   );

//   const busiestDocter = Object.keys(sortedObject)[0];

//   return {
//     busiestDocter,
//     patientCount: sortedObject[busiestDocter].length,
//     sortedObject,
//   };
// }

function findBusiestDoctor(patients) {
  if (patients.length === 0) {
    return {
      busiestDoctor: null,
      patientCount: 0,
      patientsByDoctor: {},
    };
  }

  // Group by doctor using reduce
  const patientsByDoctor = patients.reduce((acc, patient) => {
    const doctor = patient.assignedDoctor;
    if (!acc[doctor]) acc[doctor] = [];
    acc[doctor].push(patient);
    return acc;
  }, {});

  // console.log(Object.entries(patientsByDoctor));

  // Find busiest
  let busiestDoctor = null;
  let maxCount = 0;

  Object.entries(patientsByDoctor).forEach(([doctor, patients]) => {
    const count = patients.length;

    if (count > maxCount || (count === maxCount && doctor < busiestDoctor)) {
      busiestDoctor = doctor;
      maxCount = count;
    }
  });

  return {
    busiestDoctor,
    patientCount: maxCount,
    patientsByDoctor,
  };
}

findBusiestDoctor(patients);

// {
//   busiestDoctor: "Dr. Smith",
//   patientCount: 3,
//   patientsByDoctor: {
//     "Dr. Smith": [
//       { id: "P001", name: "Sarah Johnson", assignedDoctor: "Dr. Smith" },
//       { id: "P003", name: "Emily Rodriguez", assignedDoctor: "Dr. Smith" },
//       { id: "P005", name: "Maria Garcia", assignedDoctor: "Dr. Smith" }
//     ],
//     "Dr. Jones": [
//       { id: "P002", name: "Michael Chen", assignedDoctor: "Dr. Jones" },
//       { id: "P004", name: "James Wilson", assignedDoctor: "Dr. Jones" }
//     ],
//     "Dr. Brown": [
//       { id: "P006", name: "David Lee", assignedDoctor: "Dr. Brown" }
//     ]
//   }
// }
