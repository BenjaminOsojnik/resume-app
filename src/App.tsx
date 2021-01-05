import React, {Fragment, Suspense, lazy} from 'react'
import './App.css'
import BasicResumeForm from './forms/BasicResumeForm'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import AdvancedResumeForm from './forms/AdvancedResumeForm'

const Export2PdfPage = lazy(() => import('./pages/Export2PdfPage'))

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={BasicResumeForm} />
          <Route exact path="/advanced" component={AdvancedResumeForm} />
          <Suspense fallback={<div className="main-wrapper">
            <div className="main">
                <div id="preview">
                    <h1 id="title">Getting things ready..</h1>
                </div>
            </div>
        </div>}>
            <Route exact path="/export2pdf" component={Export2PdfPage} />
          </Suspense>
          <Route component={BasicResumeForm} />
        </Switch>
      </Router>
    </Fragment>
  )
}

export default App;
