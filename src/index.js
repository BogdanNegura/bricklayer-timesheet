import React from 'react';
import { render } from 'react-dom';
import TimeSheetApp from './component/app/app.component';


const tafId = '#react-will-render-here-my-first-timesheet-app'

render(
<TimeSheetApp/>,
 document.querySelector(tafId)
 )