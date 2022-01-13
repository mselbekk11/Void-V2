import React from "react";
import  "./crew.css"
import CartoonOne from '../../assets/img/cartoon-one.png';
import CartoonTwo from '../../assets/img/cartoon-two.png';
import CartoonThree from '../../assets/img/cartoon-three.png';



const Crew = () => {
    return (
        <div className="crew" id="the-crew">

            <div className="title">
                <h2>Meet the Crew</h2>
            </div>

            <div className="section one">

                <div className="one">
                    <div className="image">
                        <img src={CartoonThree} alt="The Void logo"></img>
                    </div>
                    <div className="crew-names">
                        <h3>Captain</h3>
                        <h4>Eric</h4>
                    </div>
                </div>


                <div className="two">
                    <div className="image small">
                        <img src={CartoonTwo} alt="The Void logo"></img>
                    </div>
                    <div className="crew-names">
                        <h3>CHIEF OFFICER</h3>
                        <h4>Andy</h4>
                    </div>
                </div>

                <div className="three">
                    <div className="image">
                        <img src={CartoonThree} alt="The Void logo"></img>
                    </div>
                    <div className="crew-names">
                        <h3>CHIEF ENGINEER</h3>
                        <h4>Shifor</h4>
                    </div>
                </div>

            {/* <div className="section two"> */}

            <div className="one">
                <div className="image">
                    <img src={CartoonThree} alt="The Void logo"></img>
                </div>
                <div className="crew-names">
                    <h3>EXEC COMMITTEE</h3>
                    <h4>Barry</h4>
                </div>
            </div>


            <div className="two">
                <div className="image small">
                    <img src={CartoonTwo} alt="The Void logo"></img>
                </div>
                <div className="crew-names">
                    <h3>COMMS OFFICER</h3>
                    <h4>Zenith</h4>
                </div>
            </div>

            <div className="three">
                <div className="image">
                    <img src={CartoonThree} alt="The Void logo"></img>
                </div>
                <div className="crew-names">
                    <h3>CHIEF NAVIGATOR</h3>
                    <h4>Joseph</h4>
                </div>
            </div>
            

            {/* </div> */}



</div>




        </div>
    )
}

export default Crew
