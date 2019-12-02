import React, { Component } from 'react'
import key from '../img/key.svg'
import product from '../img/product.svg'
import realtime from '../img/realtime.svg'
import tree from '../img/tree.svg'
import xml from '../img/xml.svg'

export default class Research extends Component {
    render() {
        return (
            <div className="rightside">
                    <h2 className="h2-research"> Research Area</h2>
                    <hr className="hr-research"/>
                    <div className="research-box">
                        <img src={key} className="Research-img" width="150;"/>
                        <div className="resarch-content">
                            <p>Web and Web security</p>
                            <ul>
                                <li>Semantic web</li>
                                <li>Effective Access Control for Web Data</li>
                                <li>Vulnerability Analysis and Detection for HTML5</li>
                                <li>JavaScript and Hybrid Application</li>
                            </ul>
                        </div>
                    </div>
                    <div className="research-box">
                        <img src={tree} className="Research-img" width="150;"/>
                        <div className="resarch-content">
                            <p>Formal Engineering Methods</p>
                            <ul>
                                <li>Formal Specification, Validation, and Verification</li>
                                <li>Model checking, Theorem Proving</li>
                                <li>Ontology Reasoning, Constraint Solving</li>
                               
                            </ul>
                        </div>

                    </div>
                    <div className="research-box">
                        <img src={product} className="Research-img" width="150;"/>
                        <div className="resarch-content">
                            <p>Requirement Engineering</p>
                            <ul>
                                <li>Requirement Analysis, Validation and Conflict Detection</li>
                                <li>Non-Functional Requirements Analysis and Prediction</li>
                                <li>Product Line and Software Product Line</li>
                                <li>Requirement Modeling with Extended Mind Map</li>
                            </ul>
                        </div>
                    </div>
                    <div className="research-box">
                        <img src={realtime} className="Research-img" width="150;"/>
                        <div className="resarch-content">
                            <p>Real-Time Software Engineering</p>
                            <ul>
                                <li>Real-Time Software and Process Modeling</li>
                                <li>Real-Time Software Specification and Verification</li>
                                <li>Real-Time Software Integration and Migration Control</li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className="research-box">
                        <img src={xml} className="Research-img" width="150;"/>
                        <div className="resarch-content">
                            <p>Semi-structured Data</p>
                            <ul>
                                <li>XML and XML DB, Visualization of XML-Schema</li>
                                <li>Ontology and RDF Store</li>
                                <li>Semistructured Data Integration and Migration</li>
                                <li>Optimization of X-Query</li>
                                <li>Consistency Verification for Semistructured Data Manipulation</li>
                                <li>Domain Specific Extension to XML and Data Translation from RDBMS to XML DBMS</li>
                            </ul>
                        </div>
                    </div>
                </div>
        )
    }
}
