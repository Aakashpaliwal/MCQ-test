import React, { Component } from 'react'
import './Home.css';
import {Link} from 'react-router-dom';
// import './slider';
export class Home extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
    first_name : "",
    last_name : "",
    email : "",
    subject : "",
    contact_number : ""
  
    };
  }
   
      change  = e => {
        this.setState ({
          [e.target.name]: e.target.value
        });
      };
      getWebsite = () => {
        fetch("/")
    };
      onSubmit = e =>
      {
          e.preventDefault();
          console.log(this.state);
        //   if (
        //     this.state.category === "" ||
        //     this.state.subcategory === "" ||
        //     this.state.company === "" ||
        //     this.state.model === "" ||
        //     this.state.manufacturing_year === ""
           
        //  ) {
        //     alert("Unable to contact because fields were left blank");
        //     }else {
        //         fetch(`/contact`,{
        //             method : "POST",
        //             headers : {
        //                 "Content-Type": "application/json; charset=utf-8"
        //             },
        //             body: JSON.stringify(this.state)
        //         }
        //         ).then(this.getWebsite);
        //       }
          this.setState ({
            first_name : "",
            last_name : "",
            email : "",
            subject : "",
            contact_number : ""

          })
          //replace /contact with server url
          fetch('/partner', {
            method : "POST",
            headers : {
              "Content-Type" : "application/json; chardet=utf-8"
            },
            body : JSON.stringify(this.state)
          }).then(this.getWebsite);

      };
  render() {
    return (
      <div>
          <div>
    {/*SLIDER HERE */}
    
    {/* END SLIDER HERE */}
    {/*upper four boxes */}
      {/* <section className="custom-upper-boxes">
        <div className="container">
          <div className = "row">
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 custom-three-parent-padd">
                <div className="custom-inner-boxes">
                    <div className="row">
                      <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                      <span class="badge badge-primary custom-badge">1</span>
                      </div>
                      <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 custom-parent-col-padd">
                        <p><strong>Money Care</strong></p>
                        <p>Lorem Ipsum Dolor Simit</p>
                      </div>
                    </div>
                </div>
            </div>

             <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 custom-three-parent-padd">
                <div className="custom-inner-boxes">
                    <div className="row">
                      <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                      <span class="badge badge-primary custom-badge">1</span>
                      </div>
                      <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 custom-parent-col-padd">
                        <p><strong>Money Care</strong></p>
                        <p>Lorem Ipsum Dolor Simit</p>
                      </div>
                    </div>
                </div>
            </div>

             <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 custom-three-parent-padd">
                <div className="custom-inner-boxes">
                    <div className="row">
                      <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                      <span class="badge badge-primary custom-badge">1</span>
                      </div>
                      <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 custom-parent-col-padd">
                        <p><strong>Money Care</strong></p>
                        <p>Lorem Ipsum Dolor Simit</p>
                      </div>
                    </div>
                </div>
            </div>

             <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 custom-three-parent-padd">
                <div className="custom-inner-boxes">
                    <div className="row">
                      <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                      <span class="badge badge-primary custom-badge">1</span>
                      </div>
                      <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 custom-parent-col-padd">
                        <p><strong>Money Care</strong></p>
                        <p>Lorem Ipsum Dolor Simit</p>
                      </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section> */}
    {/*end upper four boxes */}
      
    {/* offer section */}
        <section className = "service-nikhil-content" id="service">
          <div className="container">
          <div className="row">
          <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
          <div className="left-side-content-mcq">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="custom-offer-box" id="q1">
                     <h6>1. Fifth Generation Computers are Made OF ? </h6>
                    <div className="custom-ul-answers">
                    <ol type="A">
                    <li>
<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="ArtificialIntelligence" name="defaultExampleRadios" />
  <label class="custom-control-label" for="ArtificialIntelligence">Artificial Intelligence</label>
</div>
</li>

<li>
<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="ProgrammingIntelligence" name="defaultExampleRadios"/>
  <label class="custom-control-label" for="ProgrammingIntelligence">Programming Intelligence</label>
</div>
</li>
<li>
<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="SystemKnowledge" name="defaultExampleRadios" />
  <label class="custom-control-label" for="SystemKnowledge">System Knowledge</label>
</div>
</li>
<li>
<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="VVLSI" name="defaultExampleRadios"/>
  <label class="custom-control-label" for="VVLSI">VVLSI</label>
</div>
</li>
</ol>
</div>

<div className="below-button text-center">
<button type="button" className="btn btn-primary">Answer &amp; solution</button>
<button type="button" className="btn btn-info">Discuss in Boards</button>
<button type="button" className="btn btn-success">Share</button>
<button type="button" className="btn btn-warning">Save For Later</button>
</div>
                  </div>
                </div>



              </div>

                            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="custom-offer-box" id="q2">
                     <h6>2. A light sensitive device that converts drawing, printed text or other images into digital form is </h6>
                    <div className="custom-ul-answers">
                    <ol type="A">
                    <li>
<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="Keyboard" name="defaultExampleRadios" />
  <label class="custom-control-label" for="Keyboard">Keyboard</label>
</div>
</li>

<li>
<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="Plotter" name="defaultExampleRadios"/>
  <label class="custom-control-label" for="Plotter">Plotter</label>
</div>
</li>
<li>
<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="Scanner" name="defaultExampleRadios" />
  <label class="custom-control-label" for="Scanner">Scanner</label>
</div>
</li>
<li>
<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="OMR" name="defaultExampleRadios"/>
  <label class="custom-control-label" for="OMR">OMR</label>
</div>
</li>
<li>
<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="None of these" name="defaultExampleRadios"/>
  <label class="custom-control-label" for="None of these">None of these</label>
</div>
</li>
</ol>
</div>

<div className="below-button text-center">
<button type="button" className="btn btn-primary">Answer &amp; solution</button>
<button type="button" className="btn btn-info">Discuss in Boards</button>
<button type="button" className="btn btn-success">Share</button>
<button type="button" className="btn btn-warning">Save For Later</button>
</div>
                  </div>
                </div>



              </div>

              
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="custom-offer-box" id="q3">
                     <h6>3. Which protocol provides e-mail facility among different hosts? </h6>
                    <div className="custom-ul-answers">
                    <ol type="A">
                    <li>
<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="FTP" name="defaultExampleRadios" />
  <label class="custom-control-label" for="FTP">FTP</label>
</div>
</li>

<li>
<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="SMTP" name="defaultExampleRadios"/>
  <label class="custom-control-label" for="SMTP">SMTP</label>
</div>
</li>
<li>
<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="TELNET" name="defaultExampleRadios" />
  <label class="custom-control-label" for="TELNET">TELNET</label>
</div>
</li>
<li>
<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="SNMP" name="defaultExampleRadios"/>
  <label class="custom-control-label" for="SNMP">SNMP</label>
</div>
</li>
<li>
<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="None of these" name="defaultExampleRadios"/>
  <label class="custom-control-label" for="None of these">None of these</label>
</div>
</li>
</ol>
</div>

<div className="below-button text-center">
<button type="button" className="btn btn-primary">Answer &amp; solution</button>
<button type="button" className="btn btn-info">Discuss in Boards</button>
<button type="button" className="btn btn-success">Share</button>
<button type="button" className="btn btn-warning">Save For Later</button>
</div>
                  </div>
                </div>



              </div>

              
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="custom-offer-box" id="q4">
                     <h6>4. The basic architecture of computer was developed by </h6>
                    <div className="custom-ul-answers">
                    <ol type="A">
                    <li>
<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="John Von Neumann" name="defaultExampleRadios" />
  <label class="custom-control-label" for="John Von Neumann">John Von Neumann</label>
</div>
</li>

<li>
<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="Charles Babbage" name="defaultExampleRadios"/>
  <label class="custom-control-label" for="Charles Babbage">Charles Babbage</label>
</div>
</li>
<li>
<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="Blaise Pascal" name="defaultExampleRadios" />
  <label class="custom-control-label" for="Blaise Pascal">Blaise Pascal</label>
</div>
</li>
<li>
<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="Garden Moore" name="defaultExampleRadios"/>
  <label class="custom-control-label" for="Garden Moore">Garden Moore</label>
</div>
</li>
<li>
<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="None of these" name="defaultExampleRadios"/>
  <label class="custom-control-label" for="None of these">None of these</label>
</div>
</li>
</ol>
</div>

<div className="below-button text-center">
<button type="button" className="btn btn-primary">Answer &amp; solution</button>
<button type="button" className="btn btn-info">Discuss in Boards</button>
<button type="button" className="btn btn-success">Share</button>
<button type="button" className="btn btn-warning">Save For Later</button>
</div>
                  </div>
                </div>



              </div>

              
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="custom-offer-box" id="q5">
                     <h6>5. In order to tell Excel that we are entering a formula in cell, we must begin with an operator such as</h6>
                    <div className="custom-ul-answers">
                    <ol type="A">
                    <li>
<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="#" name="defaultExampleRadios" />
  <label class="custom-control-label" for="#">#</label>
</div>
</li>

<li>
<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="$" name="defaultExampleRadios"/>
  <label class="custom-control-label" for="$">$</label>
</div>
</li>
<li>
<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="@" name="defaultExampleRadios" />
  <label class="custom-control-label" for="@">@</label>
</div>
</li>
<li>
<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="+" name="defaultExampleRadios"/>
  <label class="custom-control-label" for="+">+</label>
</div>
</li>
<li>
<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="=" name="defaultExampleRadios"/>
  <label class="custom-control-label" for="=">=</label>
</div>
</li>
</ol>
</div>

<div className="below-button text-center">
<button type="button" className="btn btn-primary">Answer &amp; solution</button>
<button type="button" className="btn btn-info">Discuss in Boards</button>
<button type="button" className="btn btn-success">Share</button>
<button type="button" className="btn btn-warning">Save For Later</button>
</div>
                  </div>
                </div>



              </div>


<nav aria-label="pagination example">
    <ul class="pagination pagination-circle pg-blue mb-0 justify-content-center">

        
        <li class="page-item disabled"><a class="page-link">First</a></li>

       
        <li class="page-item disabled">
            <a class="page-link" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only">Previous</span>
            </a>
        </li>

       
       <Link to = "/"><li class="page-item active"><a class="page-link">1</a></li></Link>
          <Link to ="/question2"><li class="page-item"><a class="page-link">2</a></li></Link>
          <Link to ="/question3"><li class="page-item"><a class="page-link">3</a></li></Link>

       
        <li class="page-item">
            <a class="page-link" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only">Next</span>
            </a>
        </li>

      
        <li class="page-item"><a class="page-link">Last</a></li>

    </ul>
</nav>




          </div>
          </div>
      
      <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
        <div className="custom-offer-box right-side-content-mcq">
        <h6>Number of Questions</h6>
        <ul>
        <li><a href="#q1">Question 1</a></li>
        <li><a href="#q2">Question 2</a></li>
        <li><a href="#q3">Question 3</a></li>
        <li><a href="#q4">Question 4</a></li>
        <li><a href="#q5">Question 5</a></li>
        </ul>
        </div>
      </div>

          </div>
          </div>
        </section>



    {/* end offer section */}
    
          </div>
        
      </div>
    )
  }
}
export default Home