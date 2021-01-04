import React, {Fragment, Suspense, lazy} from 'react'
import './App.css'
import BasicResumeForm from './forms/BasicResumeForm'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'

const AdvancedResumeForm = lazy(()=> import('./forms/AdvancedResumeForm'))
const Export2PdfPage = lazy(() => import('./pages/Export2PdfPage') )

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={BasicResumeForm} />
          <Suspense fallback={<div />}>
            <Route exact path="/advanced" component={AdvancedResumeForm} />
          </Suspense>
          <Suspense fallback={<div />}>
          <Route exact path="/export2pdf" component={Export2PdfPage} />
          </Suspense>
          <Route component={BasicResumeForm} />
        </Switch>
      </Router>
    </Fragment>
  )
}

export default App;
