import React from "react";
import  "./faqs.css"
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';


// const Faqs = () => {
//     return (
//         <div className="faqs" id="faq">
//             <div className="section-faq">
//             <div className="title">
//                 <h2>FAQS</h2>
//             </div>
//             </div>
//         </div>
//     )
// }

// export default Faqs


const Faq = () => (
    <div className="faqs" id="faq">
        <h2>FAQs</h2>
    <div className="section-faq">
    <Accordion atomic={true}>
  
  <AccordionItem title="WHAT IS THE VOID MARKETPLACE?">
    <DummyContentOne />
  </AccordionItem>

  <AccordionItem title="WHAT IS THE VOID PASS?">
    <DummyContentTwo />
  </AccordionItem>

  <AccordionItem title="WHAT IS THE VOID PASS SUPPLY?">
    <DummyContentThree />
  </AccordionItem>

  <AccordionItem title="HOW AND WHEN CAN I BUY IT?">
    <DummyContentFour />
  </AccordionItem>

  <AccordionItem title="WHEN WILL THE MARKET PLACE OPEN?">
    <DummyContentFive />
  </AccordionItem>

  <AccordionItem title="HOW DO I JOIN THE VOID GOVERNANCE COUNCIL?">
    <DummyContentSix />
  </AccordionItem>

</Accordion>
    </div>
    </div>
  );
  
  const DummyContentOne = () => (
    <p>
      The Void is a low-fee, interoperable NFT marketplace being built on Constellation’s Hypergraph Network. With the creation of a new NFT token standard 'L_0', we aim to create an interoperable, multi-currency, low-fee marketplace which allows artists and businesses the flexibility to customise their own digital NFT storefront in order to showcase their unique and personal brand.
    </p>
  );

  const DummyContentTwo = () => (
    <p>
      The Void Pass is our Utility NFT which unlocks a number of unique features on our platform while also providing those who hold it the ability to participate in governance and receive rewards and perks from ecosystem partners and platform participants.
    </p>
  );

  const DummyContentThree = () => (
    <p>
      The 1st edition of the Void pass will have a total supply of 555 with 55 pre-minted passes for partners and community giveaways.
    </p>
  );

  const DummyContentFour = () => (
    <p>
      You can mint your Void Pass on enterthevoid.io once the countdown has ended. You will need to connect to your MetaMask wallet through this website which will allow you to purchase the Void Pass using Ethereum. The cost of the pass is $555 + the gas fees for the transaction. We are using the ERC-1155 token standard for our Void Pass.
    </p>
  );

  const DummyContentFive = () => (
    <p>
      The Void Marketplace will open in stages with a beta marketplace on Ethereum in Q2 2022, followed by a bridge onto Constellation’s Hypergraph network.
    </p>
  );

  const DummyContentSix = () => (
    <p>
      To join the Void Governance Council, you must either be selected by the Void or voted in by the Void Pass Community. The Void pass holders run a bi-yearly election for the opportunity to sit on the board of directors and represent the community.
    </p>
  );


  export default Faq;
