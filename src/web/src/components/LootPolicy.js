import React, { Component } from 'react';
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import NavBar from './NavBar';

const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=PT+Sans|Raleway');
  * {
    margin: 0;
    padding: 0;
    body {
      font-family: 'PT Sans';
    }
  }
`

const LootPolicyContainer = styled.div`
padding: 5vh 0 0 0;    
width: 100%;
    height: 100%;
    background-color: black;
    color: white;
    justify-content: space-evenly;
    align-items: center;
    font-size: 5rem;
    p {
        font-size: 1rem;
        margin: 2vh 2vw 0vh 2vw;
    }
    a {
        text-decoration: none;
        color: blue;
    }
    h5 {
        margin-top: 5vh;
    }
`

const LootPolicyParagraph = styled.div`
    width: 95%;
    padding: 0 2vw 1vh 3vw;
    background-color: black;
    color: white;
    justify-content: space-evenly;
    align-items: center;
    font-size: 1rem;
    margin-bottom: 1rem;
    text-align: left;
    .bottom {
        margin-bottom: 10vh;
    }
`

const ListItem = styled.div`
    display: list-item;
    list-style-position: inside;
    padding: 0 5vw 1vh 5vw;
`

class LootPolicy extends Component {
    render() {
        return (
            <div className="App">
                <Global />
                <NavBar />
                <LootPolicyContainer>
                    <h5>Coup Loot Policy</h5>
                    <p>
                        This article is for raiders who wish to understand how Coup Classic’s DKP system works,
                        how they can earn loot, and how they can plan for the long term regarding equipment upgrades.
                </p>
                    <h5>Pillars</h5>
                    <p>
                        The following pillars guide all of our decisions about loot within the guild.
                        This includes the policy as well as on-the-spot decisions made during raids.
                        When we aren’t sure what to do, we check back with the pillars for guidance.
                </p>

                    <LootPolicyParagraph>
                        <ol>
                            <ListItem>
                                <b>Getting loot should be a regular occurrence.</b> Seeing your character become stronger over time is a core tenet of RPGs, and loot is a big part of that. Consistent raiders should get a shot at good loot at regular intervals. Raiders that take lots of ‘leftover’ loot should not be put into a negative DKP hole they can't dig out of.
                    </ListItem>

                            <ListItem>
                                <b>Simplicity is more important than total completeness.</b> Not all exceptional cases can be covered by a loot system. Furthermore, we believe that a loot system that attempts to address all edge cases will end up overly complicated and difficult to execute properly. We place trust in our raiders and leadership to act in the best interests of the guild when exceptional cases come up.
                    </ListItem>

                            <ListItem>
                                <b>Consistence and competence are rewarded.</b> The best kind of raiders are consistent and competent. Our loot system strives to reward these players.
                    </ListItem>
                        </ol>
                    </LootPolicyParagraph>

                    <h5>DKP System Overview</h5>
                    <p>
                        Coup Classic’s DKP system has fixed prices for each piece of loot. To see the prices, visit the pricing <a href="https://docs.google.com/spreadsheets/d/1j-WYZj_PZVQ6KXo3r-FiLrqwNbJHyvv2dWE2Hsipk3E/edit#gid=0" target="_blank" rel="noopener noreferrer">spreadsheet</a>. The prices are set by the officers of the guild, based on their knowledge of how powerful the items are. Better items cost more.
                </p>
                    <p>
                        Raiders earn DKP by attending raids, being on time, and generally contributing to the guild. See the FAQ below for a complete list of all the ways a raider can attain DKP. DKP earnings from guild bank contributions are capped each week.
                </p>
                    <p>
                        When an item drops within a raid, raiders that can equip the item are allowed to bid on it. Again, the item prices are fixed, so “bidding” really means that a raider is declaring their intent to buy that item for its fixed price. In order to place a bid, the raider will send a ‘!bid’ tell to the current raid’s loot officer. After all bids have been collected, the bidder with the highest DKP total will be awarded the item, and will immediately pay for the item in DKP. If there is a tie, the tied players will /roll. If the winning bidder doesn’t have enough DKP to pay for the item, they will go into the negative.
                </p>
                    <p>
                        If no one bids on a piece of loot, all bets are off. Leadership will make a on-the-spot judgment call for the item. For example, leadership may just shard the item, or may re-price it to be more appropriate for the current raiders’ gear situations, or may just have raiders free-roll for it.
                </p>
                    <p>
                        DKP decays on a weekly basis as well. Each Sunday, every guild member’s DKP is multiplied by 80% to get their new value. This applies to both negative and positive DKP. For example, if a raider had 100 DKP before decay occurred, they’d have 80 DKP after decay for that week. If a raider had -150 DKP before decay, they’d have -120 DKP after decay. This means it is advantageous to have negative DKP, from a decay perspective. DKP decay may also result in fractional values of DKP. For example, decay on 13 DKP would yield a value of 10.4. These fractional values are rounded (resulting in 10 DKP in this case).
                </p>
                    <p>
                        Some items are not eligible for purchase with DKP. Legendary items will be distributed based on leadership discretion.
                </p>
                    <p>
                        Every raider starts with an initial amount of 25 DKP. When a new raiding tier releases, DKP will <b>reset</b> back to 25 for every raider.
                </p>

                    <h5>FAQ</h5>
                    <LootPolicyParagraph>
                        <b style={{color: "green"}}>What are the ways I can earn DKP and how much will I earn?</b>
                    </LootPolicyParagraph>
                    <LootPolicyParagraph>
                        As a guild member with the ‘Raider’ rank, you can earn DKP in the following ways:
                </LootPolicyParagraph>
                    <LootPolicyParagraph>
                        <ul>
                            <ListItem>
                                Participate in a boss kill: 5 DKP
                    </ListItem>
                            <ListItem>
                                Be online 15 minutes before raid start: 5 DKP (regardless of whether you are invited to the actual raid). On top of the 5 DKP award, if you don’t end up getting an invite, you'll get an additonal 10 DKP
                    </ListItem>
                            <ListItem>
                                Be present at the end of the raid: 5 DKP
                    </ListItem>
                            <ListItem>
                                Contribute to the guild bank: Officer discretion, but capped at 5 DKP weekly
                    </ListItem>
                            <ListItem>
                                Swap in to a live raid to fill an empty slot: 10 DKP
                    </ListItem>
                        </ul>
                    </LootPolicyParagraph>

                    <LootPolicyParagraph>
                        <b style={{color: "green"}}>Why do people earn DKP in the above situations?</b>
                    </LootPolicyParagraph>
                    <LootPolicyParagraph>
                        We dole out DKP to raiders that exhibit the behavior we want to see. Being on time, staying until the end, and being ready to swap in are all important for the guild to succeed. On top of that, we know that it is difficult to set aside time to raid. If you don’t make it into a raid, we want to make sure we compensate you, so that you can bid on some gear next time around.
                </LootPolicyParagraph>

                    <LootPolicyParagraph>
                        <b style={{color: "green"}}>What items am I allowed to bid on? Is there a priority system??</b>
                    </LootPolicyParagraph>
                    <LootPolicyParagraph>
                        You are allowed to bid on any non-legendary items that you can equip or use. There is no hard priority system in play, though we do emphasize that we expect raiders to do the following:
                </LootPolicyParagraph>
                    <LootPolicyParagraph>
                        <b>Be complete experts on their own classes itemization.</b> You should know which stats matter for you and which ones don’t. We also encourage our raiders to have a personal gearing plan that extends into the end of Naxx, so that they will know the expected ‘lifespan’ of items they might bid on.
                </LootPolicyParagraph>
                    <LootPolicyParagraph>
                        <b>Have decent awareness of what other classes need.</b> It would be ridiculous to expect each raider to have every BIS list of every class memorized, but situations will occur when a raider might see a potential upgrade drop, which for another class might be BIS until Naxx, for example. Leadership may step in for cases like these and require folks to hold their bid and let another raider bid on a BIS item that they will utilize for months or even years.
                </LootPolicyParagraph>

                    <LootPolicyParagraph>
                        <b style={{color: "green"}}>I disagree with some of the item pricing, who should I talk to?</b>
                    </LootPolicyParagraph>
                    <LootPolicyParagraph>
                        Please talk to Evilmonstar about item pricing.
                </LootPolicyParagraph>

                    <LootPolicyParagraph>
                        <b style={{color: "green"}}>Why do we have a cap on guild bank contribution DKP?</b>
                    </LootPolicyParagraph>
                    <LootPolicyParagraph>
                        Some folks have more time to play than others. We don’t want to leave a door open for for exploiting that time to get an unreasonable DKP advantage over others.
                </LootPolicyParagraph>

                    <LootPolicyParagraph>
                        <b style={{color: "green"}}>Why use a fixed price system?</b>
                    </LootPolicyParagraph>
                    <LootPolicyParagraph>
                        A fixed price system eliminates collusion between players. With bidding DKP systems, it’s common for raiders to form bidding alliances within their class where they min-bid tier gear and save their DKP for more competitive items. Fixed pricing closes the door on this exploit.
                </LootPolicyParagraph>

                    <LootPolicyParagraph>
                        <b style={{color: "green"}}>Why have decay?</b>
                    </LootPolicyParagraph>
                    <LootPolicyParagraph>
                        Because we are using a fixed-price system, DKP is going to inflate over time. We don’t want new raiders to feel that they have to climb an insurmountable mountain to have a relevant amount of DKP.
                </LootPolicyParagraph>
                    <LootPolicyParagraph>
                        For the curious: Consider a raid where a boss drops 3 pieces of loot, each valued at 40 DKP. Each member of the raid earned 5 DKP for that kill, thus creating 200 new DKP for the kill, but only having 120 of it be ‘spent’ on the gear. In this case, we’ve inflated the guild DKP pool by 80. Because of this inflation, we add a decay to keep DKP values in check.
                </LootPolicyParagraph>
                    <LootPolicyParagraph>
                        Having decay also puts a soft cap on DKP. If you never spend any DKP, eventually your weekly decay will match the amount you can earn in a week. That’s the ‘soft cap’.
                </LootPolicyParagraph>

                    <LootPolicyParagraph>
                        <b style={{color: "green"}}>Why negative DKP?</b>
                    </LootPolicyParagraph>
                    <LootPolicyParagraph>
                        There may be cases where a piece of gear drops and no one has enough DKP to ‘afford’ it. It would be silly to shard this gear just because no one can pay for it without going into the negative, so we allow it.
                </LootPolicyParagraph>

                    <LootPolicyParagraph>
                        <b style={{color: "green"}}>Why should decay help folks that are in the negative?</b>
                    </LootPolicyParagraph>
                    <LootPolicyParagraph>
                        New raiders might scoop up a lot of catch-up gear in their first raids, especially for instances we have on farm. They will go deeply into the negative and thus not be able to snag progression gear (which is appropriate given the situation), but we don’t want them to get put into a hole they can’t dig out of. Decay will assist them in getting out of that hole a bit faster, but doesn’t do the whole job for them.
                </LootPolicyParagraph>

                    <LootPolicyParagraph>
                        <b style={{color: "green"}}>Why do I earn these specific amounts of DKP?</b>
                    </LootPolicyParagraph>
                    <LootPolicyParagraph>
                        We’ve picked these values to allow for steady DKP inflation. In other words, the guild (as a whole) should earn more DKP than they have opportunity to spend. This allows for the decay mechanic to work as intended, putting pressure on raiders to take regular upgrades.
                </LootPolicyParagraph>
                    <LootPolicyParagraph>
                        If the opposite were true (the guild spends more DKP than they earn each week), then the entire guild would slowly go into the negative. At that point, decay would be boosting everyone’s DKP on a weekly basis, and the raiders that see the most benefit would be the ones that took the most gear. Not the system we want.
                </LootPolicyParagraph>

                    <LootPolicyParagraph>
                        <b style={{color: "green"}}>Why is 25 DKP the starting amount?</b>
                    </LootPolicyParagraph>
                    <LootPolicyParagraph>
                        Let’s consider if we started with 0 DKP instead. In our early raids, most folks would tie each other and roll off for gear. Some of the winners of these rolls may end up going into negative DKP by the end of the raid. When decay occurs, these raiders will end up getting a DKP boost. It is a double-whammy for these folks to get early gear and have decay advantage, so we start with 25 DKP to reduce the impact of this issue.
                </LootPolicyParagraph>
                    <LootPolicyParagraph>
                        This also means that new raiders joining us will also start at 25 DKP, to keep things fair.
                </LootPolicyParagraph>

                    <LootPolicyParagraph>
                        <b style={{color: "green"}}>Why do we reset DKP between raid tiers?</b>
                    </LootPolicyParagraph>
                    <LootPolicyParagraph>
                        We want folks spending their DKP to strengthen their characters. Without a reset, raiders will be tempted to stockpile DKP towards the end of a tier. Decay negates some of this stockpiling, but not completely. When stockpiling happens, raiders pass up existing upgrades in the current tier, which hurts guild progression.
                </LootPolicyParagraph>
                    <LootPolicyParagraph>
                        Resets also allow for us to take a second look at the DKP system and its rules, and refine those going into the next tier. We don’t presume to get everything right the first time around, and a reset presents an opportunity for us to improve the system without making the changes on-the-fly (which can be too disruptive).
                </LootPolicyParagraph>

                    <LootPolicyParagraph>
                        <b style={{color: "green"}}>Why do we reset DKP between raid tiers?</b>
                    </LootPolicyParagraph>
                    <LootPolicyParagraph>
                        Generally, only raiders will earn DKP, since they will the the ones invited to raids. Non-raiders are not present in the DKP system, and can’t earn DKP by making contributions to the guild bank. This is because a non-raider won’t generally have a secure raid spot, and we don’t want them to watch their DKP decay helplessly after making a contribution into the bank.
                </LootPolicyParagraph>
                    <LootPolicyParagraph>
                        However, in the situation where the guild brings in a non-raiding member to fill a slot in a raid (such as a Trial), they will become active in the DKP system. If inviting them to raids becomes a regular occurence, then they will just get promoted to raider anyway and start raiding regularly.
                </LootPolicyParagraph>

                    <LootPolicyParagraph>
                        <b style={{color: "green"}}>Do characters earn DKP or do players earn DKP?</b>
                    </LootPolicyParagraph>
                    <LootPolicyParagraph>
                    <div className="bottom">
                        Characters earn DKP. This is mostly to align with the Addon we are planning on using. There are trade-offs that are both good and bad that go along with this choice. As we move forward, we may re-evaluate this choice to see if we can land on something better, if the need arises.
                        </div>
                </LootPolicyParagraph>
                </LootPolicyContainer>
            </div>
        );
    }
}

export default LootPolicy;