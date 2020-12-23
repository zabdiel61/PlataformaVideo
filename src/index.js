import React from 'react';
import ReacDOM from 'react-dom';

import HelloWorld from './components/HelloWorld';
//render recibe 2 parametros principalmente
//uno es el componente y el otro donde se empujara este componente
ReacDOM.render(<HelloWorld />, document.getElementById('app'));
