// const { emailTemplate } = require('./js-foundation/01-template');
// const {} = require('./js-foundation/02-destructuring');
// const { getUserById } = require('./js-foundation/03-callbacks');
// const { buildMakePerson } = require('./js-foundation/05-factory');

// const obj = { name: 'alan', birthday: '2001-06-18'};


// const buildPerson = buildMakePerson({ getUUID, getAge});
// const john = buildPerson(obj);

// console.log({ john });
// getUserById(1, (error, user) => {
//     if (error) {
//         throw new Error(error);
//         // console.log({error, user});
//     }
//     console.log({error, user});
// });
// console.log(emailTemplate);
const { getUUID, getAge, http } = require('./plugins');
const { getPokenId } = require('./js-foundation/06-promises');
const pokemon = getPokenId(1, http);
pokemon
    .then(pokemon => { console.log({ pokemon }); })
    .catch( err => { console.log({err}) });
