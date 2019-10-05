import React, { Component } from 'react';
import styled from "styled-components";

const AboutUsContainer = styled.div`
    margin: 0;
    width: 100%;
    height: 100vh;
    background-color: white;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
        text-decoration: none;
        color: blue;
    }
    .aboutContent {
        font-size: 1rem;
        width: 90%;
        h1 {
            font-size: 4rem;
            margin-top: 8vh;
        }
    }
`

class AboutUs extends Component {
    render() {
        return (
            <AboutUsContainer>
                <div className="aboutContent">
                    <h1>
                        About Us
                </h1>
                    <h2>Our Past</h2>
                    <p>
                        Coup is a guild with almost 15 years of history, originally formed in vanilla on the Shadowsong-US server. Coup was a top raiding guild on the server during vanilla, scoring several server firsts across BWL and AQ40, including server first Nefarian. <br />Since then, we’ve stuck together through almost every expansion with a fairly consistent core.

                        We consider ourselves “Middlecore” because we raid, and are successful in raiding, but don’t have a desire to push hard on bleeding edge progression or compromise our values to win at all costs. <br />We will also always welcome a wide variety of players and playstyles. This ranges from people who always want to play at the top of their game, all the way through to those who want to take the scenic route through the game.
               </p>
                    <h2>
                        Our Present
                </h2>
                    <p>
                        Now on Atiesh, we've killed Onyxia and Ragnaros and continued to cultivate the friendships we've made over the years.

                        Due to the nature of 40 man raiding, we will need some consistency in the raid roster, but we also place no pressure on our people when real life happens. <br />If you need to take a sabbatical from raiding or the game in general, we may backfill your role, but the guild will still be here and you will still be a member when you get back. <br />We’ve always treated this game as part of our hobby and not a job, and we’ve been able to maintain many of the same friends and guild members for over a decade as a result. <br />We hope that in Classic we can maintain that M.O.

                        We will endeavor to retain a raid roster around 40-50 players, and have an active member roster in excess of 100.
                </p>
                    <h2>
                        Raid Schedule
                </h2>
                    Click <a href="https://docs.google.com/document/d/15lVooHsIOXBQuzqXziKTkXuYDUxk-NLBH0kYn2DHIP8/edit" target="_blank">here</a> for detailed schedule document
                    <p>
                        Friday: 7-10 PST
                    <br />
                        Saturday: 7-10 PST
                    <br />
                        We occasionally run over if close to a kill or completion
                </p>
                    <div className="lookingFor">
                        <h2>What we are looking for</h2>
                        <p>
                            We started out wanting to build a community first and raid team later, and we’ve been highly successful so far. Now we are looking to round out our raid team with a few more like-minded adults who want to enjoy the game with us and contribute to a fun, supportive environment.
                            For our raiders, we are looking for those who respect other’s time and are willing to put forth the effort required to help us maximize the time we have with our relaxed schedule.
                            Additionally, individuals who are willing to accept (and at times provide) constructive feedback to help the guild improve.
                            Players with integrity. Reputation is incredibly important to us, and we want our members to embody our values and represent the guild well at all times.
    
                        <h2>What are aren’t looking for:</h2>

                            Overly toxic, racist, or homophobic behavior. We are all nerds and like to joke around with each other, but we never approve of alienating or exclusive behavior. During the Blizzcon opening ceremony Chris Metzen always used to end with a saying; “Be good to each other”… We intend to do just that, and invite people that will conduct themselves in a generally positive manner.
                            Individuals looking to advance their own personal objectives over the objectives of the larger group. If you are overly focused on getting loot, pushing bleeding edge progression, or aren’t willing to integrate with and contribute to the guild community, this might not be the best environment for you.
                            FAQ:
    
                            What loot system will Coup use?
                            We will be using DKP with fixed item costs and weekly decay to start with. Ultimately our objectives are to reward effort and participation and encourage people to take upgrades when they are available. Hoarding is not something we want to support.
                            Legendaries are the exception and they will be awarded through a council of class leaders.
                            Will Coup require full consumables and world buffs for raiding?
                            Initially, no. When pushing progression we may enact guidelines around consumable usage, but flasks and world buffs are not required for content in phases 1-3.
                            While we won’t tell you that you can’t stack world buffs, we won’t force the raid to do it either, in general. On that same coin, we also won’t tolerate social pressure or toxic behavior around this. If you take the time to gather world buffs that is totally your choice, but you shouldn’t fly off the handle at the raid if something happens and you happen to die early and lose them.
                            What classes are you currently recruiting?
                            We are currently looking for exceptional applicants in the following classes:
                            Warrior (DPS)
                            Druid (Feral DPS and Resto)
                            Hunter
                            Other exceptional applicants feel free to apply
                    </p>
                    </div>
                </div>
            </AboutUsContainer>
        );
    }
}

export default AboutUs;



{/* <h2>
Recruitment Needs and Process
</h2>
<a href="https://docs.google.com/document/d/15lVooHsIOXBQuzqXziKTkXuYDUxk-NLBH0kYn2DHIP8/edit" target="_blank">Click for detailed schedule document</a>
<p>
Friday: 7-10 PST
<br />
Saturday: 7-10 PST
<br />
We occasionally run over if close to a kill or completion
</p> */}