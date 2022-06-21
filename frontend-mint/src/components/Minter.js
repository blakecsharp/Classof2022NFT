import { useEffect, useState } from "react";
import stanfordLogo from "./images/SUSig_Stack_red.png";
import alumniLogo from "./images/StanfordAlumniLogo.png";
require("dotenv").config();

const Minter = (props) => {
  return (
    <div className="Minter">
      <div id="header">
        <img src={stanfordLogo} height={60} alt="Stanford Logo" />
      </div>

      <br></br>
      <div className="content">
        <div className="title">
          <h1>2022 GRAD NFTS</h1>
          <img src={alumniLogo} height={250} alt="Stanford Alumni Logo" />
        </div>
      </div>
      <div className="Instructions">
        <div className="Instructionsheader">
          <h2>Claim your Stanford Class of 2022 NFT with just a few clicks.</h2>
          <h4>Deadline Extended to June 24th!</h4>
        </div>
        <div className="instructions">
          <ol>
            <li>
              Get a Metamask Wallet
              <div className="listContent">
                Go to{" "}
                <a href="https://metamask.io/download/">metamask.io/download</a>{" "}
                and download Metamask for Chrome, iOS, or Android. Follow the
                setup instructions and make sure to keep your secret phrase
                somewhere safe. For further help, follow these video tutorials
                for <a href="https://youtu.be/rsijsTvJ5SQ">Chrome</a> or for{" "}
                <a href="https://youtu.be/4KL5pZPt67g">iOS</a>.
              </div>
            </li>
            <li>
              Submit your wallet address to our form
              <div className="listContent">
                Open your wallet, copy your wallet address by tapping on the
                shorthand address starting with “0x”. For more help, refer to&nbsp;
                <a href="https://metamask.zendesk.com/hc/en-us/articles/360015289512-How-to-copy-your-MetaMask-account-public-address-#:~:text=To%20access%20additional%20information%20about%20your%20account%2C%20see%20instructions%20here.&text=When%20you%20hover%20over%20the,account">
                   these quick instructions
                </a>
                . Click the “Submit my Wallet” button below and submit your
                wallet address to the form.
              </div>
              <div id="formButton">
                <button
                  onClick={() => {
                    window.location.href =
                      "https://forms.gle/5PQ5WJef6eHizE8v8";
                  }}
                >
                  Submit Wallet Address
                </button>
              </div>
            </li>
            <li>
              Receive your personalized Stanford Class of 2022 NFT
              <div className="listContent">
                Now, we’ll do all the work and drop your NFT directly into your
                wallet! We’ll email you once it’s done, and you can open your
                wallet to access your new NFT.
              </div>
            </li>
          </ol>
        </div>
        <div className="contactUs">
          <h3>Need more help?</h3>
          <p>
            For detailed step-by-step instructions, follow Steps 1 and 2 from
            <a href="https://metamask.zendesk.com/hc/en-us/articles/360015289512-How-to-copy-your-MetaMask-account-public-address-#:~:text=To%20access%20additional%20information%20about%20your%20account%2C%20see%20instructions%20here.&text=When%20you%20hover%20over%20the,account's%20address%20to%20the%20clipboard.">
              {" "}
              this article
            </a>
            . Additionally, send us an email at stanfordnftproject@gmail.com.
          </p>
        </div>
      </div>
      <div className="FAQ">
        <div className="FAQHeader">FAQ</div>
        <div className="FAQContent">
          <div className="FAQQuestion">What is this project?</div>
          <div className="FAQAnswer">
            This is a Stanford supported, student-led pilot project. The NFT
            will be a souvenir and is for personal, non-commercial use only.
            Later, utility may be added to the NFT for admission to alumni
            events and other perks. We're hoping this is the beginning of a new
            digital tradition we can build on over time at Stanford.
          </div>
          <div className="FAQQuestion">Who runs this project?</div>
          <div className="FAQAnswer">
            We are four current Stanford undergrads who have teamed up with the
            Class of 2022 to develop the NFTs and create the art, and we are
            excited to share this with you! This project is sponsored by the
            Stanford Alumni Association and multiple other Stanford entities are
            involved such as the Stanford Office of Student Engagement.
          </div>
          <div className="FAQQuestion">What are NFTs?</div>
          <div className="FAQAnswer">
            NFTs ("Non-Fungible Tokens") are one-of-a-kind tokens that represent
            a unique good or asset, like digital art. They can be owned, traded,
            and sold.
          </div>
          <div className="FAQQuestion">
            How do I claim my Stanford Class of 2022 NFT?
          </div>
          <div className="FAQAnswer">
            Follow the setup instructions above - create a wallet and share your
            wallet address in the form we provide.
          </div>
          <div className="FAQQuestion">Who can claim an NFT?</div>
          <div className="FAQAnswer">
            We are approving undergraduate students with Social Class Year 2022.
            For the most part, this is the cohort of undergraduates who enrolled
            at Stanford in the fall of 2018. We will also approve undergraduates
            from other class years who took a leave of absence and returned to
            enroll at Stanford this academic year and have chosen to formally
            affiliate with Social Class Year 2022.
          </div>
          <div className="FAQQuestion">What does the art look like?</div>
          <div className="FAQAnswer">
            This will be a surprise! Our amazing artist has created beautiful
            artwork for your graduating class’ unique NFT, and it will be
            revealed once you receive it from us. Set up your wallet and stay
            tuned!
          </div>
          <div className="FAQQuestion">Does this cost money?</div>
          <div className="FAQAnswer">
            No! This is free. We will give you your NFT through a method called
            “airdropping”. Once you set up your wallet using the setup
            instructions above, we will airdrop you your NFT.
          </div>
          <div className="FAQQuestion">Why would I want this NFT?</div>
          <div className="FAQAnswer">
            This will be an NFT unique to your graduating class, which you can
            own and show others. Also, if you have any interest in the crypto
            space, this is a great opportunity to dip your toes by owning your
            first NFT. Lastly, in the future, we hope to create real utility
            behind owning a graduation NFT, such as group messages, events, and
            other opportunities exclusive to owners of the NFT. Note that this
            year is simply a pilot, so no utility or transferability is possible
            for the NFT.
          </div>
          <div className="FAQQuestion">
            NFTs are environmentally taxing. What are you doing about that?
          </div>
          <div className="FAQAnswer">
            We are buying carbon offsets for all the carbon produced through
            this project.
          </div>
          <div className="FAQQuestion">
            Can I claim this after commencement?
          </div>
          <div className="FAQAnswer">
            No. This is a commencement related offering, so this is your only
            chance to claim it!
          </div>
        </div>
      </div>
      <div className="disclaimer">
        This NFT is non-transferrable and For Personal Use Only.
      </div>
    </div>
  );
};

export default Minter;
