import _ from 'lodash';

const users = [
  { id: 1, name: '太郎' },
  { id: 2, name: '次郎' },
  { id: 3, name: '三郎' },
  { id: 4, name: '四郎' },
  { id: 5, name: '五郎' },
];

export const Lodash = () => {
  const user = _.find(users, { id: 2 });
  return <p>{user.name}</p>;
};

export default Lodash;
