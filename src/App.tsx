import React, {Fragment} from 'react'
import { useSelector } from 'react-redux'
import './App.css'
import BasicResumeForm from './forms/BasicResumeForm'
import AdvancedResumeForm from './forms/AdvancedResumeForm'
import {TRootReducer} from './store/reducers'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import Export2PdfPage from './pages/Export2PdfPage'

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={BasicResumeForm} />
          <Route exact path="/advanced" component={AdvancedResumeForm} />
          <Route exact path="/export2pdf" component={Export2PdfPage} />
        </Switch>
      </Router>
      {/* {displayForm === 'basic' && <BasicResumeForm />}
      {displayForm === 'advanced' && <p>test</p>} */}
    </Fragment>
  )
}

export default App;
