import React from 'react';

import { StyleProp } from './StyleProp';
import { StyleProp2 } from './StyleProp2';
import { StyleProp3 } from './StyleProp3';
import { Tooltip } from './Tooltip';
import { Parent } from './Parent';
import { Child } from './Child';
import { EmptyArray } from './EmptyArray';

// これら全て再レンダリングの要因になる
// {
//   <ClassDemo
//     regEx={/something/}
//     fn={function something() {}}
//     date={new Date('6/29/2011 4:52:48 PM UTC')}
//     reactElement={<div>hi!</div>}
//   />;
// }

const outDefineStyle = { width: '100%', color: 'blue' };

const App = React.memo(() => {
  const [nameObj, setNameObj] = React.useState({
    firstName: 'Bob',
    lastName: 'Marley',
  });

  const memoStyle = React.useMemo(() => {
    return { width: '100%', color: 'green' };
  }, []);

  // オブジェクトのプロパティを比較し、!==であればstateを変更しない
  // こうすることでオブジェクト構造のsetStateの再レンダリングを防ぐことができる
  const smartSetNameObj = React.useCallback(
    (newState) => {
      if (nameObj.firstName === newState.firstName) {
        return;
      }
      setNameObj(newState);
    },
    [nameObj.firstName]
  );

  console.log('render App');

  const a = undefined;

  const emtyArr = React.useMemo(() => a || [], [a]);

  return (
    <div style={{ padding: 20 }}>
      {'Hi '}
      <b>
        {nameObj.firstName} {nameObj.lastName}
      </b>
      <br />
      {'First Name '}
      <button onClick={() => smartSetNameObj({ ...nameObj, firstName: 'Bob' })}>
        Bob(smartSetNameObj)
      </button>
      {/* イミュータブルにstateが扱われるため===で評価されず同じ値でも再レンダリングがかかる */}
      <button onClick={() => setNameObj({ ...nameObj, firstName: 'Tom' })}>
        Tom
      </button>
      <br />
      {'Last Name '}
      <button onClick={() => setNameObj({ ...nameObj, lastName: 'Marley' })}>
        Marley
      </button>
      <button onClick={() => setNameObj({ ...nameObj, lastName: 'Sawyer' })}>
        Soyer
      </button>
      {/* オブジェクトをそのまま渡すとAppが再レンダリングされると別のメモリを確保しミュータブルに扱われるため再レンダリングされる */}
      <StyleProp style={{ width: '100%', color: 'red' }} />
      {/* 外だしのオブジェクトであれば常にイミュータブルとして扱われるため再レンダリングしない */}
      <StyleProp2 style={outDefineStyle} />
      {/* オブジェクトをメモ化してあげると再レンダリングを防げる */}
      <StyleProp3 style={memoStyle} />
      {/* React.createElementも常に再生成されるため再レンダリングされる */}
      <Tooltip tooltip={<div>tooltip</div>} />
      {/* <Parent children={ <Child />}>と同義。つまりReact.createElementでありParentは毎回再レンダリングされる */}
      <Parent>
        <Child />
      </Parent>
      <EmptyArray arr={emtyArr} />
    </div>
  );
});
export default App;
